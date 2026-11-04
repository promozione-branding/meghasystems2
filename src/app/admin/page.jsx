
"use client";

import React from "react";
import Link from "next/link";
import {
  FileText,
  PlusCircle,
  ArrowUpRight,
  LayoutDashboard,
  CalendarDays,
  Globe,
  BookOpen,
} from "lucide-react";

export default function AdminDashboard() {
  const today = new Date().toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-5 sm:px-8 py-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs text-gray-400 mb-2">
              <LayoutDashboard size={14} />
              <span>Admin / Dashboard</span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-bold text-[#121212]">
              Dashboard
            </h1>

            <p className="text-sm text-gray-500 mt-1">
              Welcome to Cubiloo Cubicles Admin Panel.
            </p>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-500 bg-gray-50 border border-gray-200 px-4 py-3 rounded-xl">
            <CalendarDays size={17} />
            {today}
          </div>
        </div>
      </header>

      <div className="p-5 sm:p-8 max-w-[1500px] mx-auto">
        {/* Welcome Banner */}
        <div className="relative overflow-hidden rounded-2xl bg-[#121212] p-7 sm:p-10 mb-8">
          <div className="relative z-10 max-w-xl">
            <span className="text-[#F4A36D] text-xs font-semibold tracking-[0.2em] uppercase">
              Content Management
            </span>

            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-3">
              Manage Your Website
              <br />
              <span className="text-[#DF7539]">
                Content Easily.
              </span>
            </h2>

            <p className="text-gray-400 text-sm mt-4 leading-7">
              Create, edit and manage blog articles
              for your Cubiloo Cubicles website.
            </p>

            <Link
              href="/admin/blogs/add"
              className="inline-flex items-center gap-2 bg-[#DF7539] hover:bg-[#C9652E] text-white text-sm font-semibold px-5 py-3 rounded-xl mt-6 transition"
            >
              <PlusCircle size={18} />
              Create New Blog
              <ArrowUpRight size={17} />
            </Link>
          </div>

          <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-[#DF7539]/15 blur-3xl" />
          <div className="absolute right-16 bottom-0 w-40 h-40 rounded-full bg-[#DF7539]/10 blur-2xl" />
        </div>

        {/* Section Title */}
        <div className="mb-5">
          <h3 className="text-xl font-bold text-[#121212]">
            Blog Management
          </h3>
          <p className="text-sm text-gray-500 mt-1">
            Manage your blog content from one place.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <Link
            href="/admin/blogs"
            className="group rounded-2xl bg-white border border-gray-200 p-7 hover:border-[#DF7539]/40 hover:shadow-lg transition-all"
          >
            <div className="flex items-start justify-between">
              <div className="h-14 w-14 rounded-2xl bg-orange-50 text-[#DF7539] flex items-center justify-center">
                <FileText size={27} />
              </div>

              <ArrowUpRight
                size={21}
                className="text-gray-400 group-hover:text-[#DF7539] transition"
              />
            </div>

            <h4 className="text-xl font-bold mt-6 text-[#121212]">
              All Blogs
            </h4>

            <p className="text-sm text-gray-500 mt-2 leading-6">
              View, edit, publish and delete blog articles
              from your website.
            </p>

            <div className="mt-6 text-sm font-semibold text-[#DF7539] flex items-center gap-2">
              Manage Blogs
              <ArrowUpRight size={17} />
            </div>
          </Link>

          <Link
            href="/admin/blogs/add"
            className="group rounded-2xl bg-white border border-gray-200 p-7 hover:border-[#DF7539]/40 hover:shadow-lg transition-all"
          >
            <div className="flex items-start justify-between">
              <div className="h-14 w-14 rounded-2xl bg-orange-50 text-[#DF7539] flex items-center justify-center">
                <PlusCircle size={27} />
              </div>

              <ArrowUpRight
                size={21}
                className="text-gray-400 group-hover:text-[#DF7539] transition"
              />
            </div>

            <h4 className="text-xl font-bold mt-6 text-[#121212]">
              Add New Blog
            </h4>

            <p className="text-sm text-gray-500 mt-2 leading-6">
              Create blog articles with images,
              descriptions and SEO metadata.
            </p>

            <div className="mt-6 text-sm font-semibold text-[#DF7539] flex items-center gap-2">
              Create Blog
              <ArrowUpRight size={17} />
            </div>
          </Link>
        </div>

        {/* Information */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-8">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 flex items-center gap-4">
            <div className="h-12 w-12 rounded-xl bg-gray-100 flex items-center justify-center text-gray-600">
              <Globe size={23} />
            </div>

            <div>
              <p className="text-sm text-gray-500">
                Website
              </p>
              <p className="font-semibold text-[#121212]">
                Cubiloo Cubicles
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 flex items-center gap-4">
            <div className="h-12 w-12 rounded-xl bg-gray-100 flex items-center justify-center text-gray-600">
              <BookOpen size={23} />
            </div>

            <div>
              <p className="text-sm text-gray-500">
                Content Module
              </p>
              <p className="font-semibold text-[#121212]">
                Blog Management
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
