
"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import dynamic from "next/dynamic";
import {
    ArrowLeft,
    Save,
    Loader2,
    UploadCloud,
    X,
    ImageIcon,
    Search,
    FileText,
    CalendarDays,
    Link2,
} from "lucide-react";

const BlogEditor = dynamic(
    () => import("./BlogEditor"),
    { ssr: false }
);

const inputClass =
    "w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 outline-none transition focus:border-[#DF7539] focus:ring-4 focus:ring-[#DF7539]/10";

const labelClass =
    "mb-2 block text-sm font-semibold text-gray-700";

const initialForm = {
    title: "",
    slug: "",
    content: "",
    metaTitle: "",
    metaDescription: "",
    publishDate: new Date().toLocaleDateString("en-CA"),
};

function makeSlug(value) {
    return value
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
}

export default function BlogForm({ blogId = null }) {
    const router = useRouter();
    const isEdit = Boolean(blogId);

    const [form, setForm] = useState(initialForm);
    const [loading, setLoading] = useState(isEdit);
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState("");
    const [imageFile, setImageFile] = useState(null);
    const [existingImage, setExistingImage] = useState("");
    const [preview, setPreview] = useState("");

    useEffect(() => {
        if (!blogId) return;

        let cancelled = false;

        async function fetchBlog() {
            setLoading(true);

            try {
                const res = await fetch(
                    `/api/admin/blogs/${blogId}`
                );
                const data = await res.json();

                if (!res.ok || !data.success) {
                    throw new Error(
                        data.message || "Failed to fetch blog"
                    );
                }

                if (cancelled) return;

                const blog = data.blog;

                setForm({
                    title: blog.title || "",
                    slug: blog.slug || "",
                    content: blog.content || "",
                    metaTitle: blog.metaTitle || "",
                    metaDescription: blog.metaDescription || "",
                    publishDate: blog.publishDate
                        ? new Date(blog.publishDate)
                            .toISOString()
                            .slice(0, 10)
                        : "",
                });

                setExistingImage(blog.image || "");
            } catch (err) {
                if (!cancelled) setError(err.message);
            } finally {
                if (!cancelled) setLoading(false);
            }
        }

        fetchBlog();

        return () => {
            cancelled = true;
        };
    }, [blogId]);

    useEffect(() => {
        if (!imageFile) {
            setPreview("");
            return;
        }

        const url = URL.createObjectURL(imageFile);
        setPreview(url);

        return () => URL.revokeObjectURL(url);
    }, [imageFile]);

    const update = (name, value) => {
        setForm((prev) => ({
            ...prev,
            [name]: value,
            ...(name === "title" && !isEdit &&
                (!prev.slug || prev.slug === makeSlug(prev.title))
                ? { slug: makeSlug(value) }
                : {}),
        }));
        setError("");
    };

    const handleImage = (e) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const allowed = [
            "image/jpeg",
            "image/png",
            "image/webp",
            "image/avif",
        ];

        if (!allowed.includes(file.type)) {
            setError("Please select JPG, PNG, WebP or AVIF");
            e.target.value = "";
            return;
        }

        if (file.size > 5 * 1024 * 1024) {
            setError("Image must be smaller than 5MB");
            e.target.value = "";
            return;
        }

        setImageFile(file);
        setError("");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (saving) return;

        setSaving(true);
        setError("");

        try {
            const formData = new FormData();

            Object.entries(form).forEach(([key, value]) => {
                formData.append(key, value);
            });

            if (imageFile) {
                formData.append("image", imageFile);
            }

            const url = isEdit
                ? `/api/admin/blogs/${blogId}`
                : "/api/admin/blogs";

            const response = await fetch(url, {
                method: isEdit ? "PATCH" : "POST",
                body: formData,
            });

            const data = await response.json();

            if (!response.ok || !data.success) {
                throw new Error(
                    data.message || "Failed to save blog"
                );
            }

            router.push("/admin/blogs");
            router.refresh();
        } catch (err) {
            setError(err.message);
        } finally {
            setSaving(false);
        }
    };

    if (loading) {
        return (
            <div className="flex min-h-[60vh] items-center justify-center">
                <Loader2
                    size={35}
                    className="animate-spin text-[#DF7539]"
                />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#F8F9FA]">
            {/* Header */}
            <div className="border-b border-gray-200 bg-white px-5 py-6 sm:px-8">
                <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-4">
                    <div>
                        <Link
                            href="/admin/blogs"
                            className="mb-3 inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#DF7539]"
                        >
                            <ArrowLeft size={16} />
                            Back to Blogs
                        </Link>

                        <h1 className="text-2xl font-bold text-[#121212]">
                            {isEdit ? "Edit Blog" : "Add New Blog"}
                        </h1>

                        <p className="mt-1 text-sm text-gray-500">
                            {isEdit
                                ? "Update your blog content and SEO details."
                                : "Create and publish a new blog article."}
                        </p>
                    </div>

                    <button
                        type="submit"
                        form="blog-form"
                        disabled={saving}
                        className="inline-flex items-center gap-2 rounded-xl bg-[#DF7539] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#C9652E] disabled:opacity-60"
                    >
                        {saving ? (
                            <Loader2
                                size={18}
                                className="animate-spin"
                            />
                        ) : (
                            <Save size={18} />
                        )}
                        {saving
                            ? "Saving..."
                            : isEdit
                                ? "Update Blog"
                                : "Publish Blog"}
                    </button>
                </div>
            </div>

            <form
                id="blog-form"
                onSubmit={handleSubmit}
                className="mx-auto grid max-w-[1400px] grid-cols-1 gap-6 p-5 sm:p-8 xl:grid-cols-[minmax(0,1fr)_340px]"
            >
                {/* Main Content */}
                <div className="min-w-0 space-y-6">
                    <section className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-7">
                        <div className="mb-6 flex items-center gap-3">
                            <FileText className="text-[#DF7539]" size={22} />
                            <h2 className="text-lg font-bold text-[#121212]">
                                Blog Information
                            </h2>
                        </div>

                        <div className="space-y-5">
                            <div>
                                <label className={labelClass}>
                                    Blog Title *
                                </label>
                                <input
                                    className={inputClass}
                                    value={form.title}
                                    onChange={(e) =>
                                        update("title", e.target.value)
                                    }
                                    placeholder="Enter blog title"
                                    maxLength={200}
                                    required
                                />
                            </div>

                            <div>
                                <label className={labelClass}>
                                    Blog Slug *
                                </label>
                                <div className="relative">
                                    <Link2
                                        size={18}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                                    />
                                    <input
                                        className={`${inputClass} pl-11`}
                                        value={form.slug}
                                        onChange={(e) =>
                                            update(
                                                "slug",
                                                makeSlug(e.target.value)
                                            )
                                        }
                                        placeholder="blog-url-slug"
                                        required
                                    />
                                </div>
                                <p className="mt-2 text-xs text-gray-400">
                                    Used in your public blog URL.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-7">
                        <h2 className="mb-2 text-lg font-bold text-[#121212]">
                            Blog Content *
                        </h2>
                        <p className="mb-5 text-sm text-gray-500">
                            Write and format your article using Jodit.
                        </p>

                        <BlogEditor
                            value={form.content}
                            onChange={(value) =>
                                update("content", value)
                            }
                        />
                    </section>

                    <section className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-7">
                        <div className="mb-6 flex items-center gap-3">
                            <Search size={22} className="text-[#DF7539]" />
                            <h2 className="text-lg font-bold text-[#121212]">
                                SEO Settings
                            </h2>
                        </div>

                        <div className="space-y-5">
                            <div>
                                <label className={labelClass}>
                                    Meta Title
                                </label>
                                <input
                                    className={inputClass}
                                    value={form.metaTitle}
                                    onChange={(e) =>
                                        update("metaTitle", e.target.value)
                                    }
                                    placeholder="SEO title"
                                    maxLength={70}
                                />
                                <p className="mt-2 text-right text-xs text-gray-400">
                                    {form.metaTitle.length}/70
                                </p>
                            </div>

                            <div>
                                <label className={labelClass}>
                                    Meta Description
                                </label>
                                <textarea
                                    className={`${inputClass} min-h-[120px] resize-y`}
                                    value={form.metaDescription}
                                    onChange={(e) =>
                                        update(
                                            "metaDescription",
                                            e.target.value
                                        )
                                    }
                                    placeholder="Describe this blog for search engines..."
                                    maxLength={160}
                                />
                                <p className="mt-2 text-right text-xs text-gray-400">
                                    {form.metaDescription.length}/160
                                </p>
                            </div>

                            <div className="rounded-xl bg-gray-50 p-4">
                                <p className="mb-2 text-xs text-gray-500">
                                    Search Preview
                                </p>
                                <p className="text-sm font-semibold text-blue-700">
                                    {form.metaTitle || form.title || "Blog title"}
                                </p>
                                <p className="mt-1 break-all text-xs text-green-700">
                                    /blogs/{form.slug || "your-blog-slug"}
                                </p>
                                <p className="mt-2 text-xs leading-5 text-gray-600">
                                    {form.metaDescription ||
                                        "Your meta description will appear here."}
                                </p>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Right Sidebar */}
                <div className="space-y-6">
                    <section className="rounded-2xl border border-gray-200 bg-white p-5">
                        <div className="mb-5 flex items-center gap-2">
                            <ImageIcon
                                size={20}
                                className="text-[#DF7539]"
                            />
                            <h2 className="font-bold text-[#121212]">
                                Featured Image
                            </h2>
                        </div>

                        {(preview || existingImage) && (
                            <div className="relative mb-4 overflow-hidden rounded-xl border border-gray-200">
                                <img
                                    src={preview || existingImage}
                                    alt="Blog preview"
                                    className="h-48 w-full object-cover"
                                />

                                {preview && (
                                    <button
                                        type="button"
                                        onClick={() => setImageFile(null)}
                                        className="absolute right-2 top-2 rounded-lg bg-white p-2 shadow"
                                        aria-label="Remove selected image"
                                    >
                                        <X size={17} />
                                    </button>
                                )}
                            </div>
                        )}

                        <label className="flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-200 bg-gray-50 px-4 py-8 text-center transition hover:border-[#DF7539]">
                            <UploadCloud
                                size={30}
                                className="mb-3 text-[#DF7539]"
                            />
                            <span className="text-sm font-semibold text-gray-700">
                                Choose Featured Image
                            </span>
                            <span className="mt-2 text-xs text-gray-400">
                                JPG, PNG, WebP, AVIF — Max 5MB
                            </span>
                            <input
                                type="file"
                                accept="image/jpeg,image/png,image/webp,image/avif"
                                onChange={handleImage}
                                className="hidden"
                            />
                        </label>
                    </section>

                    <section className="rounded-2xl border border-gray-200 bg-white p-5">
                        <div className="mb-5 flex items-center gap-2">
                            <CalendarDays
                                size={20}
                                className="text-[#DF7539]"
                            />
                            <h2 className="font-bold text-[#121212]">
                                Publication
                            </h2>
                        </div>

                        <label className={labelClass}>
                            Publish Date
                        </label>

                        <input
                            type="date"
                            className={inputClass}
                            value={form.publishDate}
                            onChange={(e) =>
                                update("publishDate", e.target.value)
                            }
                            required
                        />

                        <p className="mt-3 text-xs leading-5 text-gray-400">
                            The date displayed on your blog article.
                        </p>
                    </section>

                    {error && (
                        <div
                            role="alert"
                            className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-600"
                        >
                            {error}
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={saving}
                        className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#121212] px-5 py-4 text-sm font-semibold text-white transition hover:bg-[#DF7539] disabled:opacity-60"
                    >
                        {saving ? (
                            <Loader2 size={18} className="animate-spin" />
                        ) : (
                            <Save size={18} />
                        )}
                        {saving
                            ? "Saving Blog..."
                            : isEdit
                                ? "Save Changes"
                                : "Publish Blog"}
                    </button>
                </div>
            </form>
        </div>
    );
}
