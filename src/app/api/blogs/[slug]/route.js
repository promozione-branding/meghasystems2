
import { NextResponse } from "next/server";
import { connectDB } from "@/libs/db";
import Blog from "@/models/Blog";

export const runtime = "nodejs";

export async function GET(request, { params }) {
    try {
        const { slug } = await params;

        await connectDB();

        const blog = await Blog.findOne({
            slug,
            publishDate: { $lte: new Date() },
        }).lean();

        if (!blog) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Blog not found",
                },
                { status: 404 }
            );
        }

        return NextResponse.json({
            success: true,
            blog,
        });
    } catch (error) {
        console.error("PUBLIC BLOG ERROR:", error);

        return NextResponse.json(
            {
                success: false,
                message: "Failed to load blog",
            },
            { status: 500 }
        );
    }
}
