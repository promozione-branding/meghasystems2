
import { NextResponse } from "next/server";
import { connectDB } from "@/libs/db";
import Blog from "@/models/Blog";
import { verifyAdminToken } from "@/libs/admin-auth";
import {
    BlogValidationError,
    parseBlogFields,
    uploadBlogImage,
} from "@/libs/blog-utils";
import { deleteFromR2 } from "@/libs/deleteFromR2";

export const runtime = "nodejs";

async function authenticated(request) {
    const token = request.cookies.get(
        process.env.ADMIN_COOKIE_NAME || "admin_token"
    )?.value;

    return Boolean(await verifyAdminToken(token));
}

const unauthorized = () =>
    NextResponse.json(
        { success: false, message: "Unauthorized" },
        { status: 401 }
    );

export async function GET(request) {
    try {
        if (!(await authenticated(request))) return unauthorized();

        await connectDB();

        const { searchParams } = new URL(request.url);

        const page = Math.max(
            1,
            Number.parseInt(searchParams.get("page"), 10) || 1
        );

        const limit = Math.min(
            50,
            Math.max(
                1,
                Number.parseInt(searchParams.get("limit"), 10) || 10
            )
        );

        const search = (searchParams.get("search") || "")
            .trim()
            .slice(0, 100);

        const filter = {};

        if (search) {
            const escaped = search.replace(
                /[.*+?^${}()|[\]\\]/g,
                "\\$&"
            );

            filter.title = {
                $regex: escaped,
                $options: "i",
            };
        }

        const [blogs, total, totalBlogs] = await Promise.all([
            Blog.find(filter)
                .select("-content")
                .sort({ publishDate: -1, _id: -1 })
                .skip((page - 1) * limit)
                .limit(limit)
                .lean(),
            Blog.countDocuments(filter),
            Blog.countDocuments(),
        ]);

        return NextResponse.json({
            success: true,
            blogs,
            stats: { totalBlogs },
            pagination: {
                page,
                limit,
                total,
                totalPages: Math.ceil(total / limit),
            },
        });
    } catch (error) {
        console.error("GET Blogs:", error);

        return NextResponse.json(
            { success: false, message: "Failed to fetch blogs" },
            { status: 500 }
        );
    }
}

export async function POST(request) {
    let uploaded = null;

    try {
        if (!(await authenticated(request))) return unauthorized();

        const formData = await request.formData();
        const fields = parseBlogFields(formData);

        await connectDB();

        const duplicate = await Blog.exists({
            slug: fields.slug,
        });

        if (duplicate) {
            return NextResponse.json(
                { success: false, message: "Slug already exists" },
                { status: 409 }
            );
        }

        const image = formData.get("image");

        if (image && typeof image.arrayBuffer === "function") {
            uploaded = await uploadBlogImage(image);
        }

        const blog = await Blog.create({
            ...fields,
            image: uploaded?.url || "",
            imageFileId: uploaded?.key || "",
        });

        return NextResponse.json(
            {
                success: true,
                message: "Blog created successfully",
                blog,
            },
            { status: 201 }
        );
    } catch (error) {
        if (uploaded?.key) {
            await deleteFromR2(uploaded.key);
        }

        if (error.code === 11000) {
            return NextResponse.json(
                { success: false, message: "Slug already exists" },
                { status: 409 }
            );
        }

        const validation = error instanceof BlogValidationError;

        if (!validation) console.error("CREATE Blog:", error);

        return NextResponse.json(
            {
                success: false,
                message: validation
                    ? error.message
                    : "Failed to create blog",
            },
            { status: validation ? 400 : 500 }
        );
    }
}
