
import { NextResponse } from "next/server";
import { connectDB } from "@/libs/db";
import Blog from "@/models/Blog";

export const runtime = "nodejs";

export async function GET(request) {
    try {
        await connectDB();

        const { searchParams } = new URL(request.url);

        const page = Math.max(
            1,
            parseInt(searchParams.get("page") || "1", 10) || 1
        );

        const limit = Math.min(
            24,
            Math.max(
                1,
                parseInt(searchParams.get("limit") || "9", 10) || 9
            )
        );

        const search = (searchParams.get("search") || "")
            .trim()
            .slice(0, 100);

        const filter = {
            publishDate: { $lte: new Date() },
        };

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

        const [blogs, total] = await Promise.all([
            Blog.find(filter)
                .select(
                    "title slug image metaTitle metaDescription publishDate createdAt"
                )
                .sort({ publishDate: -1, _id: -1 })
                .skip((page - 1) * limit)
                .limit(limit)
                .lean(),

            Blog.countDocuments(filter),
        ]);

        return NextResponse.json({
            success: true,
            blogs,
            pagination: {
                page,
                limit,
                total,
                totalPages: Math.ceil(total / limit),
            },
        });
    } catch (error) {
        console.error("PUBLIC BLOGS ERROR:", error);

        return NextResponse.json(
            {
                success: false,
                message: "Failed to load blogs",
            },
            { status: 500 }
        );
    }
}
