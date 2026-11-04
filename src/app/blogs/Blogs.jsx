
"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
    ArrowUpRight,
    ArrowRight,
    CalendarDays,
    Search,
    Loader2,
    ChevronLeft,
    ChevronRight,
    BookOpen,
} from "lucide-react";

const BLOG_PRIMARY = "#dddf00";
const BLOG_DARK = "#121212";
const BLOG_GRADIENT = "linear-gradient(90deg, #b8c900 0%, #dddf00 35%, #f0f542 65%, #a9c000 100%)";

function formatDate(date) {
    if (!date) return "";
    return new Date(date).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric",
        timeZone: "UTC",
    });
}

export default function Blogs() {
    const [blogs, setBlogs] = useState([]);
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState("");
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const timer = setTimeout(() => {
            setQuery(search.trim());
            setPage(1);
        }, 400);
        return () => clearTimeout(timer);
    }, [search]);

    useEffect(() => {
        const controller = new AbortController();

        async function loadBlogs() {
            setLoading(true);
            setError("");

            try {
                const params = new URLSearchParams({
                    page: String(page),
                    limit: "9",
                    search: query,
                });

                const response = await fetch(`/api/blogs?${params}`, {
                    signal: controller.signal,
                    cache: "no-store",
                });

                const data = await response.json();

                if (!response.ok || !data.success) {
                    throw new Error(data.message || "Failed to load blogs");
                }

                setBlogs(data.blogs || []);
                setTotalPages(data.pagination?.totalPages || 0);
            } catch (err) {
                if (err.name !== "AbortError") setError(err.message);
            } finally {
                if (!controller.signal.aborted) setLoading(false);
            }
        }

        loadBlogs();
        return () => controller.abort();
    }, [page, query]);

    return (
        <main className="min-h-screen bg-[#FAFAF8] text-[#121212]">
            {/* HERO */}
            <section className="relative overflow-hidden bg-[#121212] px-5 pb-10 pt-30 text-white sm:px-8 lg:pb-15 lg:pt-35">
                <div
                    className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full opacity-20 blur-[110px]"
                    style={{ background: BLOG_GRADIENT }}
                />

                <div className="relative mx-auto max-w-[1400px]">
                    <div className="mb-5 flex items-center gap-3">
                        <span className="h-px w-10 bg-[#dddf00]" />
                        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#dddf00]">
                            Insights & Inspiration
                        </span>
                    </div>

                    <h1 className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-[-0.05em] sm:text-6xl lg:text-[90px]">
                        Ideas that shape
                        <br />
                        <span className="bg-clip-text text-transparent" style={{ backgroundImage: BLOG_GRADIENT }}>
                            better spaces.
                        </span>
                    </h1>

                    <div className="mt-5 flex items-center gap-3 text-sm text-white/70">
                        <Link href="/" className="hover:text-[#dddf00]">
                            Home
                        </Link>
                        <span>/</span>
                        <span className="text-[#dddf00]">Blogs</span>
                    </div>
                </div>
            </section>

            {/* ARTICLES */}
            <section className="px-5 pt-10 sm:px-8 lg:pt-15 pb-75">
                <div className="mx-auto max-w-[1400px]">
                    <div className="mb-8 flex flex-col justify-between gap-6 md:flex-row md:items-end">
                        <div>
                            <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
                                Latest Articles
                            </h2>
                        </div>

                        <div className="relative w-full md:w-[320px]">
                            <Search
                                size={19}
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                            />
                            <input
                                type="search"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder="Search articles..."
                                className="w-full rounded-full border border-gray-200 bg-white py-4 pl-12 pr-5 text-sm outline-none transition focus:border-[#b8c900]"
                            />
                        </div>
                    </div>

                    {error && (
                        <p role="alert" className="mb-8 rounded-xl bg-red-50 p-5 text-sm text-red-600">
                            {error}
                        </p>
                    )}

                    {loading ? (
                        <div className="flex min-h-[350px] flex-col items-center justify-center gap-4">
                            <Loader2 size={35} className="animate-spin text-[#a9c000]" />
                            <p className="text-sm text-gray-500">Loading articles...</p>
                        </div>
                    ) : blogs.length === 0 ? (
                        <div className="flex min-h-[350px] flex-col items-center justify-center rounded-2xl border border-gray-200 bg-white p-8 text-center">
                            <BookOpen size={40} className="text-[#a9c000]" />
                            <h3 className="mt-5 text-xl font-semibold">No articles found</h3>
                            <p className="mt-2 text-sm text-gray-500">
                                Try a different search or check back later.
                            </p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 gap-x-7 gap-y-12 md:grid-cols-2 xl:grid-cols-3">
                            {blogs.map((blog, index) => (
                                <Link
                                    key={blog._id}
                                    href={`/blogs/${blog.slug}`}
                                    className="group block border rounded-2xl overflow-hidden border-gray-200 bg-white transition hover:border-[#dddf00]"
                                >
                                    <div className="relative aspect-[1.35] bg-[#ECEAE6] overflow-hidden">
                                        {blog.image ? (
                                            <img
                                                src={blog.image}
                                                alt={blog.title}
                                                loading={index < 3 ? "eager" : "lazy"}
                                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                        ) : (
                                            <div className="flex h-full items-center justify-center">
                                                <BookOpen size={48} className="text-gray-300" />
                                            </div>
                                        )}

                                        <span
                                            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#121212] transition-all duration-300 group-hover:rotate-45"
                                            style={{ background: BLOG_GRADIENT }}
                                        >
                                            <ArrowUpRight size={21} />
                                        </span>
                                    </div>

                                    <div className="pt-3 px-4 pb-3">
                                        <div className="mb-2 flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-gray-500">
                                            <CalendarDays size={15} />
                                            {formatDate(blog.publishDate)}
                                        </div>

                                        <h3 className="line-clamp-2 text-2xl font-semibold leading-snug tracking-tight transition-colors group-hover:text-[#dddf00]">
                                            {blog.title}
                                        </h3>

                                        <div className="mt-2 inline-flex items-center gap-2 border-b border-[#dddf00] pb-1 text-sm font-semibold text-[#121212]">
                                            Read Article
                                            <ArrowRight
                                                size={17}
                                                className="transition-transform group-hover:translate-x-1"
                                            />
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}

                    {!loading && totalPages > 1 && (
                        <div className="mt-16 flex items-center justify-center gap-3">
                            <button
                                onClick={() => setPage((p) => Math.max(1, p - 1))}
                                disabled={page === 1}
                                aria-label="Previous page"
                                className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white hover:border-[#a9c000] disabled:opacity-40"
                            >
                                <ChevronLeft size={20} />
                            </button>

                            <span className="px-4 text-sm font-medium text-gray-600">
                                {page} / {totalPages}
                            </span>

                            <button
                                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                                disabled={page === totalPages}
                                aria-label="Next page"
                                className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white hover:border-[#a9c000] disabled:opacity-40"
                            >
                                <ChevronRight size={20} />
                            </button>
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
}
