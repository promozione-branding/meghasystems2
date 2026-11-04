
import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
    ArrowLeft,
    ArrowUpRight,
    CalendarDays,
    Clock3,
    BookOpen,
} from "lucide-react";
import { connectDB } from "@/libs/db";
import Blog from "@/models/Blog";
import sanitizeHtml from "sanitize-html";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

async function getBlog(slug) {
    await connectDB();

    const blog = await Blog.findOne({
        slug,
        publishDate: { $lte: new Date() },
    }).lean();

    return blog;
}

function formatDate(value) {
    if (!value) return "";

    return new Date(value).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric",
        timeZone: "UTC",
    });
}

function getReadingTime(html) {
    const text = html
        .replace(/<[^>]*>/g, " ")
        .replace(/\s+/g, " ")
        .trim();

    const words = text ? text.split(" ").length : 0;

    return Math.max(1, Math.ceil(words / 200));
}

function cleanContent(html) {
    return sanitizeHtml(html || "", {
        allowedTags: [
            ...sanitizeHtml.defaults.allowedTags,
            "h1",
            "h2",
            "img",
            "figure",
            "figcaption",
            "span",
            "div",
            "u",
        ],
        allowedAttributes: {
            ...sanitizeHtml.defaults.allowedAttributes,
            "*": ["class"],
            a: ["href", "name", "target", "rel"],
            img: ["src", "alt", "width", "height"],
        },
        allowedSchemes: ["http", "https", "mailto"],
    });
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const blog = await getBlog(slug);

    if (!blog) {
        return {
            title: "Blog Not Found | Cubiloo Cubicles",
            robots: { index: false, follow: false },
        };
    }

    return {
        title: blog.metaTitle || blog.title,
        description:
            blog.metaDescription ||
            `Read ${blog.title} on Cubiloo Cubicles.`,
        openGraph: {
            title: blog.metaTitle || blog.title,
            description: blog.metaDescription || "",
            type: "article",
            publishedTime: blog.publishDate?.toISOString(),
            images: blog.image
                ? [{ url: blog.image }]
                : [],
        },
    };
}

export default async function BlogDetailPage({ params }) {
    const { slug } = await params;
    const blog = await getBlog(slug);

    if (!blog) notFound();

    const safeContent = cleanContent(blog.content);
    const readingTime = getReadingTime(safeContent);

    const gradient =
        "linear-gradient(90deg, #b8c900 0%, #dddf00 35%, #f0f542 65%, #a9c000 100%)";

    return (
        <main className="min-h-screen bg-white text-[#121212]">
            {/* HERO */}
            <section className="relative overflow-hidden bg-[#121212] px-5 pb-10 pt-30 text-white sm:px-8 lg:pb-15 lg:pt-34">
                <div
                    className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full opacity-20 blur-[120px]"
                    style={{ background: gradient }}
                />

                <div className="relative mx-auto max-w-[1100px]">
                    <Link
                        href="/blogs"
                        className="mb-10 inline-flex items-center gap-2 text-sm text-white/60 transition hover:text-[#dddf00]"
                    >
                        <ArrowLeft size={17} />
                        Back to Blogs
                    </Link>

                    <div className="mb-5 flex items-center gap-3">
                        <span className="h-px w-10 bg-[#dddf00]" />
                        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#dddf00]">
                            Cubiloo Journal
                        </span>
                    </div>

                    <h1 className="max-w-[1000px] text-4xl font-semibold leading-[1.12] tracking-[-0.045em] sm:text-5xl lg:text-[72px]">
                        {blog.title}
                    </h1>

                    <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4 text-sm text-white/60">
                        <span className="inline-flex items-center gap-2">
                            <CalendarDays size={17} className="text-[#dddf00]" />
                            {formatDate(blog.publishDate)}
                        </span>
                        <span className="inline-flex items-center gap-2">
                            <Clock3 size={17} className="text-[#dddf00]" />
                            {readingTime} min read
                        </span>
                    </div>
                </div>
            </section>

            {/* FEATURED IMAGE */}
            {blog.image && (
                <section className="px-5 pt-10 sm:px-8 lg:pt-16">
                    <div className="mx-auto max-w-[1200px] overflow-hidden rounded-2xl bg-gray-100 lg:rounded-3xl">
                        <img
                            src={blog.image}
                            alt={blog.title}
                            className="max-h-[650px] w-full object-cover"
                        />
                    </div>
                </section>
            )}

            {/* CONTENT */}
            <section className="px-5 py-10 sm:px-8 pb-70">
                <div className="mx-auto max-w-[850px]">
                    <div className="mb-8 flex items-center gap-3 border-b border-gray-200 pb-5">
                        <div
                            className="flex h-12 w-12 items-center justify-center rounded-full text-[#121212]"
                            style={{ background: gradient }}
                        >
                            <BookOpen size={22} />
                        </div>
                        <div>
                            <p className="text-sm font-semibold">Cubiloo Cubicles</p>
                            <p className="mt-1 text-xs text-gray-500">
                                Insights & Articles
                            </p>
                        </div>
                    </div>

                    <article
                        className="blog-article text-[16px] leading-[1.9] text-[#444]"
                        dangerouslySetInnerHTML={{ __html: safeContent }}
                    />

                    <div className="mt-8 border-t border-gray-200 pt-5">
                        <Link
                            href="/blogs"
                            className="inline-flex items-center gap-3 rounded-full border border-gray-200 px-6 py-3.5 text-sm font-semibold transition hover:border-[#a9c000] hover:bg-[#dddf00]"
                        >
                            <ArrowLeft size={18} />
                            Back to All Blogs
                        </Link>
                    </div>
                </div>
            </section>

        </main>
    );
}