
import mongoose from "mongoose";
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

const errorResponse = (message, status) =>
    NextResponse.json(
        { success: false, message },
        { status }
    );

async function getId(params) {
    const { id } = await params;
    return id;
}

export async function GET(request, { params }) {
    try {
        if (!(await authenticated(request))) {
            return errorResponse("Unauthorized", 401);
        }

        const id = await getId(params);

        if (!mongoose.isValidObjectId(id)) {
            return errorResponse("Invalid blog ID", 400);
        }

        await connectDB();

        const blog = await Blog.findById(id).lean();

        if (!blog) return errorResponse("Blog not found", 404);

        return NextResponse.json({ success: true, blog });
    } catch (error) {
        console.error("GET Blog:", error);
        return errorResponse("Failed to fetch blog", 500);
    }
}

export async function PATCH(request, { params }) {
    let uploaded = null;
    let saved = false;

    try {
        if (!(await authenticated(request))) {
            return errorResponse("Unauthorized", 401);
        }

        const id = await getId(params);

        if (!mongoose.isValidObjectId(id)) {
            return errorResponse("Invalid blog ID", 400);
        }

        await connectDB();

        const blog = await Blog.findById(id);

        if (!blog) return errorResponse("Blog not found", 404);

        const formData = await request.formData();
        const fields = parseBlogFields(formData);

        const duplicate = await Blog.exists({
            slug: fields.slug,
            _id: { $ne: blog._id },
        });

        if (duplicate) {
            return errorResponse("Slug already exists", 409);
        }

        const oldKey = blog.imageFileId;
        const image = formData.get("image");

        if (image && typeof image.arrayBuffer === "function") {
            uploaded = await uploadBlogImage(image);
        }

        Object.assign(blog, fields);

        if (uploaded) {
            blog.image = uploaded.url;
            blog.imageFileId = uploaded.key;
        }

        await blog.save();
        saved = true;

        if (uploaded && oldKey) {
            const deleted = await deleteFromR2(oldKey);
            if (!deleted) {
                console.error("Old R2 image cleanup failed:", oldKey);
            }
        }

        return NextResponse.json({
            success: true,
            message: "Blog updated successfully",
            blog,
        });
    } catch (error) {
        if (!saved && uploaded?.key) {
            await deleteFromR2(uploaded.key);
        }

        if (error.code === 11000) {
            return errorResponse("Slug already exists", 409);
        }

        if (error instanceof BlogValidationError) {
            return errorResponse(error.message, 400);
        }

        console.error("UPDATE Blog:", error);
        return errorResponse("Failed to update blog", 500);
    }
}

export async function DELETE(request, { params }) {
    try {
        if (!(await authenticated(request))) {
            return errorResponse("Unauthorized", 401);
        }

        const id = await getId(params);

        if (!mongoose.isValidObjectId(id)) {
            return errorResponse("Invalid blog ID", 400);
        }

        await connectDB();

        const blog = await Blog.findByIdAndDelete(id);

        if (!blog) return errorResponse("Blog not found", 404);

        if (blog.imageFileId) {
            const deleted = await deleteFromR2(blog.imageFileId);
            if (!deleted) {
                console.error(
                    "R2 image cleanup failed:",
                    blog.imageFileId
                );
            }
        }

        return NextResponse.json({
            success: true,
            message: "Blog deleted successfully",
        });
    } catch (error) {
        console.error("DELETE Blog:", error);
        return errorResponse("Failed to delete blog", 500);
    }
}
