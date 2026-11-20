import { NextResponse } from "next/server";
import { connectDB } from "@/libs/db";
import Blog from "@/models/Blog";
import { allProducts } from "@/data";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const BASE_URL = "https://demo.com";

const STATIC_PATHS = [
  "/",
  "/about-us",
  "/products",
  "/projects",
  "/blogs",
  "/contact-us",
];

function escapeXml(value) {
  return value.replace(/[<>&"']/g, (character) => {
    const entities = {
      "<": "&lt;",
      ">": "&gt;",
      "&": "&amp;",
      '"': "&quot;",
      "'": "&apos;",
    };

    return entities[character];
  });
}

function createUrlEntry(path, lastModified) {
  const loc = escapeXml(new URL(path, BASE_URL).toString());
  const lastmod = lastModified
    ? `<lastmod>${new Date(lastModified).toISOString()}</lastmod>`
    : "";

  return `<url><loc>${loc}</loc>${lastmod}</url>`;
}

export async function GET() {
  try {
    await connectDB();

    const publishedBlogs = await Blog.find({
      publishDate: { $lte: new Date() },
    })
      .select("slug updatedAt publishDate")
      .sort({ publishDate: -1 })
      .lean();

    const entries = [
      ...STATIC_PATHS.map((path) => createUrlEntry(path)),
      ...allProducts.flatMap((category) =>
        (category.products || [])
          .filter((product) => product.slug)
          .map((product) =>
            createUrlEntry(
              `/products/${encodeURIComponent(product.slug)}`
            )
          )
      ),
      ...publishedBlogs
        .filter((blog) => blog.slug)
        .map((blog) =>
          createUrlEntry(
            `/blogs/${encodeURIComponent(blog.slug)}`,
            blog.updatedAt || blog.publishDate
          )
        ),
    ];

    const sitemap = [
      '<?xml version="1.0" encoding="UTF-8"?>',
      '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
      ...entries,
      "</urlset>",
    ].join("");

    return new NextResponse(sitemap, {
      headers: {
        "Content-Type": "application/xml; charset=utf-8",
        "Cache-Control":
          "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
      },
    });
  } catch (error) {
    console.error("SITEMAP GENERATION ERROR:", error);

    return NextResponse.json(
      { success: false, message: "Failed to generate sitemap." },
      { status: 500 }
    );
  }
}
