
import { randomUUID } from "node:crypto";
import sanitizeHtml from "sanitize-html";
import { uploadToR2 } from "@/libs/uploadToR2";

export class BlogValidationError extends Error { }

export function slugify(value) {
    return String(value || "")
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
}

export function parseBlogFields(formData) {
    const title = String(formData.get("title") || "").trim();
    const slug = slugify(formData.get("slug") || title);

    const rawContent = String(
        formData.get("content") || ""
    );

    const content = sanitizeHtml(rawContent, {
        allowedTags: [
            ...sanitizeHtml.defaults.allowedTags,
            "h1", "h2", "img", "figure", "figcaption",
            "span", "div", "u"
        ],
        allowedAttributes: {
            ...sanitizeHtml.defaults.allowedAttributes,
            "*": ["class"],
            a: ["href", "name", "target", "rel"],
            img: ["src", "alt", "width", "height"],
        },
        allowedSchemes: ["http", "https", "mailto"],
    });

    const metaTitle = String(
        formData.get("metaTitle") || ""
    ).trim();

    const metaDescription = String(
        formData.get("metaDescription") || ""
    ).trim();

    const dateValue = formData.get("publishDate");
    const publishDate = dateValue
        ? new Date(String(dateValue))
        : new Date();

    if (!title || !slug || !content.replace(/<[^>]*>/g, "").trim()) {
        throw new BlogValidationError(
            "Title, slug and content are required"
        );
    }

    if (title.length > 200) {
        throw new BlogValidationError(
            "Title cannot exceed 200 characters"
        );
    }

    if (metaTitle.length > 70) {
        throw new BlogValidationError(
            "Meta title cannot exceed 70 characters"
        );
    }

    if (metaDescription.length > 160) {
        throw new BlogValidationError(
            "Meta description cannot exceed 160 characters"
        );
    }

    if (Number.isNaN(publishDate.getTime())) {
        throw new BlogValidationError("Invalid publish date");
    }

    return {
        title,
        slug,
        content,
        metaTitle,
        metaDescription,
        publishDate,
    };
}

export async function uploadBlogImage(file) {
    if (!file || typeof file.arrayBuffer !== "function") {
        return null;
    }

    const types = {
        "image/jpeg": {
            extension: "jpg",
            signature: (b) =>
                b[0] === 0xff && b[1] === 0xd8 && b[2] === 0xff,
        },
        "image/png": {
            extension: "png",
            signature: (b) =>
                b.subarray(0, 8).equals(
                    Buffer.from("89504e470d0a1a0a", "hex")
                ),
        },
        "image/webp": {
            extension: "webp",
            signature: (b) =>
                b.toString("ascii", 0, 4) === "RIFF" &&
                b.toString("ascii", 8, 12) === "WEBP",
        },
        "image/avif": {
            extension: "avif",
            signature: (b) =>
                b.toString("ascii", 4, 8) === "ftyp" &&
                ["avif", "avis"].includes(
                    b.toString("ascii", 8, 12)
                ),
        },
    };

    const type = types[file.type];

    if (!type) {
        throw new BlogValidationError(
            "Only JPG, PNG, WebP and AVIF images are allowed"
        );
    }

    if (file.size === 0 || file.size > 5 * 1024 * 1024) {
        throw new BlogValidationError(
            "Image must be between 1 byte and 5MB"
        );
    }

    const buffer = Buffer.from(await file.arrayBuffer());

    if (!type.signature(buffer)) {
        throw new BlogValidationError("Invalid image file");
    }

    const fileName = `${randomUUID()}.${type.extension}`;

    return uploadToR2({
        file: buffer,
        folder: "cubiloo/blogs",
        fileName,
        contentType: file.type,
    });
}
