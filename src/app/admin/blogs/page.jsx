
"use client";

import React, { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import {
  Plus,
  Search,
  Pencil,
  Trash2,
  FileText,
  Loader2,
  ChevronLeft,
  ChevronRight,
  CalendarDays,
  RefreshCw,
  AlertCircle,
} from "lucide-react";

export default function BlogsPage() {
  const [blogs, setBlogs] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [total, setTotal] = useState(0);
  const [totalBlogs, setTotalBlogs] = useState(0);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState(null);
  const [error, setError] = useState("");

  const fetchBlogs = useCallback(async (signal) => {
    setLoading(true);
    setError("");

    try {
      const params = new URLSearchParams({
        page: String(page),
        limit: "10",
        search: query,
      });

      const response = await fetch(
        `/api/admin/blogs?${params}`,
        { signal, cache: "no-store" }
      );

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(
          data.message || "Failed to load blogs"
        );
      }

      if (signal?.aborted) return;

      setBlogs(data.blogs || []);
      setTotalPages(data.pagination?.totalPages || 0);
      setTotal(data.pagination?.total || 0);
      setTotalBlogs(data.stats?.totalBlogs || 0);
    } catch (err) {
      if (err.name !== "AbortError") {
        setError(err.message);
      }
    } finally {
      if (!signal?.aborted) setLoading(false);
    }
  }, [page, query]);

  useEffect(() => {
    const controller = new AbortController();
    fetchBlogs(controller.signal);

    return () => controller.abort();
  }, [fetchBlogs]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setQuery(search.trim());
      setPage(1);
    }, 400);

    return () => clearTimeout(timer);
  }, [search]);

  const handleDelete = async (blog) => {
    const confirmed = window.confirm(
      `Are you sure you want to delete "${blog.title}"?`
    );

    if (!confirmed) return;

    setDeleting(blog._id);
    setError("");

    try {
      const response = await fetch(
        `/api/admin/blogs/${blog._id}`,
        { method: "DELETE" }
      );

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(
          data.message || "Failed to delete blog"
        );
      }

      if (blogs.length === 1 && page > 1) {
        setPage(page - 1);
      } else {
        await fetchBlogs();
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setDeleting(null);
    }
  };

  const formatDate = (date) => {
    if (!date) return "—";

    return new Date(date).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white px-5 py-6 sm:px-8">
        <div className="mx-auto flex max-w-[1500px] flex-wrap items-center justify-between gap-4">
          <div>
            <p className="mb-2 text-xs font-medium uppercase tracking-widest text-[#DF7539]">
              Content Management
            </p>

            <h1 className="text-2xl font-bold text-[#121212] sm:text-3xl">
              All Blogs
            </h1>

            <p className="mt-1 text-sm text-gray-500">
              Manage your website articles and SEO content.
            </p>
          </div>

          <Link
            href="/admin/blogs/add"
            className="inline-flex items-center gap-2 rounded-xl bg-[#DF7539] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#C9652E]"
          >
            <Plus size={19} />
            Add New Blog
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-[1500px] space-y-6 p-5 sm:p-8">
        {/* Stats */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-6">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 text-[#DF7539]">
              <FileText size={27} />
            </div>

            <div>
              <p className="text-sm text-gray-500">
                Total Blogs
              </p>
              <h2 className="mt-1 text-3xl font-bold text-[#121212]">
                {totalBlogs}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-6">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-100 text-gray-700">
              <Search size={26} />
            </div>

            <div>
              <p className="text-sm text-gray-500">
                Matching Results
              </p>
              <h2 className="mt-1 text-3xl font-bold text-[#121212]">
                {total}
              </h2>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-100 p-5">
            <div>
              <h2 className="text-lg font-bold text-[#121212]">
                Blog Articles
              </h2>
              <p className="mt-1 text-xs text-gray-500">
                View and manage all blog posts.
              </p>
            </div>

            <div className="flex w-full items-center gap-2 sm:w-auto">
              <div className="relative flex-1 sm:w-72">
                <Search
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type="search"
                  value={search}
                  onChange={(e) =>
                    setSearch(e.target.value)
                  }
                  placeholder="Search blogs..."
                  className="w-full rounded-xl border border-gray-200 py-3 pl-10 pr-4 text-sm outline-none focus:border-[#DF7539]"
                />
              </div>

              <button
                onClick={() => fetchBlogs()}
                aria-label="Refresh blogs"
                className="rounded-xl border border-gray-200 p-3 text-gray-600 hover:bg-gray-50"
              >
                <RefreshCw size={18} />
              </button>
            </div>
          </div>

          {error && (
            <div
              role="alert"
              className="m-5 flex items-center gap-2 rounded-xl bg-red-50 p-4 text-sm text-red-600"
            >
              <AlertCircle size={18} />
              {error}
            </div>
          )}

          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] text-left">
              <thead className="bg-[#FAFAFA]">
                <tr className="text-xs uppercase tracking-wider text-gray-500">
                  <th className="px-6 py-4 font-semibold">
                    Blog
                  </th>
                  <th className="px-6 py-4 font-semibold">
                    Slug
                  </th>
                  <th className="px-6 py-4 font-semibold">
                    Publish Date
                  </th>
                  <th className="px-6 py-4 text-right font-semibold">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100">
                {loading ? (
                  <tr>
                    <td
                      colSpan={4}
                      className="py-20 text-center"
                    >
                      <Loader2
                        size={30}
                        className="mx-auto animate-spin text-[#DF7539]"
                      />
                      <p className="mt-3 text-sm text-gray-500">
                        Loading blogs...
                      </p>
                    </td>
                  </tr>
                ) : blogs.length === 0 ? (
                  <tr>
                    <td
                      colSpan={4}
                      className="px-6 py-20 text-center"
                    >
                      <FileText
                        size={40}
                        className="mx-auto text-gray-300"
                      />
                      <p className="mt-4 font-semibold text-gray-700">
                        No blogs found
                      </p>
                      <p className="mt-2 text-sm text-gray-400">
                        Create your first blog or change your search.
                      </p>
                    </td>
                  </tr>
                ) : (
                  blogs.map((blog) => (
                    <tr
                      key={blog._id}
                      className="transition hover:bg-gray-50/70"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-4">
                          <div className="h-16 w-20 shrink-0 overflow-hidden rounded-xl bg-gray-100">
                            {blog.image ? (
                              <img
                                src={blog.image}
                                alt={blog.title}
                                className="h-full w-full object-cover"
                              />
                            ) : (
                              <div className="flex h-full items-center justify-center text-gray-400">
                                <FileText size={24} />
                              </div>
                            )}
                          </div>

                          <div className="min-w-0">
                            <p className="max-w-[300px] truncate text-sm font-semibold text-[#121212]">
                              {blog.title}
                            </p>
                            <p className="mt-1 text-xs text-gray-400">
                              {blog.metaTitle || "No SEO title"}
                            </p>
                          </div>
                        </div>
                      </td>

                      <td className="px-6 py-4">
                        <span className="text-xs text-gray-500">
                          {blog.slug}
                        </span>
                      </td>

                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <CalendarDays size={15} />
                          {formatDate(blog.publishDate)}
                        </div>
                      </td>

                      <td className="px-6 py-4">
                        <div className="flex justify-end gap-2">
                          <Link
                            href={`/admin/blogs/edit/${blog._id}`}
                            title="Edit Blog"
                            className="rounded-lg bg-blue-50 p-2.5 text-blue-600 transition hover:bg-blue-100"
                          >
                            <Pencil size={17} />
                          </Link>

                          <button
                            onClick={() =>
                              handleDelete(blog)
                            }
                            disabled={deleting === blog._id}
                            title="Delete Blog"
                            className="rounded-lg bg-red-50 p-2.5 text-red-600 transition hover:bg-red-100 disabled:opacity-50"
                          >
                            {deleting === blog._id ? (
                              <Loader2
                                size={17}
                                className="animate-spin"
                              />
                            ) : (
                              <Trash2 size={17} />
                            )}
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-gray-100 px-6 py-5">
            <p className="text-sm text-gray-500">
              Page {page} of {Math.max(totalPages, 1)}
              {" · "}
              {total} results
            </p>

            <div className="flex items-center gap-2">
              <button
                onClick={() =>
                  setPage((p) => Math.max(1, p - 1))
                }
                disabled={page <= 1 || loading}
                className="rounded-lg border border-gray-200 p-2.5 disabled:opacity-40"
                aria-label="Previous page"
              >
                <ChevronLeft size={18} />
              </button>

              <button
                onClick={() =>
                  setPage((p) =>
                    Math.min(totalPages, p + 1)
                  )
                }
                disabled={page >= totalPages || loading}
                className="rounded-lg border border-gray-200 p-2.5 disabled:opacity-40"
                aria-label="Next page"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
