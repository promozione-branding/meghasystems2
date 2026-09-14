"use client";

import React, { useEffect, useMemo, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  ArrowUpRight,
  ChevronRight,
  Layers3,
  Ruler,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { allProducts } from "@/data";

gsap.registerPlugin(ScrollTrigger);

/* =========================================================
   PRODUCT PAGE
========================================================= */

export default function Products() {
  const pageRef = useRef(null);

  const totalProducts = useMemo(() => {
    return allProducts.reduce(
      (total, category) => total + category.products.length,
      0
    );
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* =====================================================
         HERO REVEAL
      ====================================================== */

      const heroTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".products-hero",
          start: "top 80%",
          once: true,
        },
      });

      heroTimeline
        .from(".products-eyebrow", {
          y: 15,
          opacity: 0,
          duration: 0.5,
          ease: "power3.out",
        })
        .from(
          ".products-title",
          {
            y: 35,
            opacity: 0,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.25"
        )
        .from(
          ".products-description",
          {
            y: 20,
            opacity: 0,
            duration: 0.5,
            ease: "power3.out",
          },
          "-=0.3"
        )
        .from(
          ".products-stat",
          {
            y: 20,
            opacity: 0,
            duration: 0.45,
            stagger: 0.08,
            ease: "power3.out",
          },
          "-=0.25"
        );

      /* =====================================================
         CATEGORY REVEALS
      ====================================================== */

      gsap.utils.toArray(".product-category").forEach((category) => {
        const header = category.querySelector(
          ".product-category-header"
        );

        const cards = category.querySelectorAll(
          ".product-card-reveal"
        );

        gsap.from(header, {
          y: 30,
          opacity: 0,
          duration: 0.65,
          ease: "power3.out",
          scrollTrigger: {
            trigger: category,
            start: "top 78%",
            once: true,
          },
        });

        gsap.from(cards, {
          y: 45,
          opacity: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: category,
            start: "top 70%",
            once: true,
          },
        });
      });

      ScrollTrigger.refresh();
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={pageRef}
      className="min-h-screen overflow-hidden bg-[#f3f5f7] text-[#071a3d] mt-20"
    >
      {/* =====================================================
                HERO
            ====================================================== */}

      <section className="products-hero relative overflow-hidden bg-[#071a3d] pt-28 sm:pt-32 lg:pt-36">
        {/* Architectural background */}

        <div className="pointer-events-none absolute inset-0">
          {/* Grid */}

          <div
            className="
                            absolute
                            inset-0
                            opacity-[0.055]
                            [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
                            [background-size:80px_80px]
                        "
          />

          {/* Large circle */}

          <svg
            viewBox="0 0 600 600"
            className="
                            absolute
                            right-[-180px]
                            top-[-160px]
                            h-[500px]
                            w-[500px]
                            opacity-[0.16]
                            sm:h-[600px]
                            sm:w-[600px]
                        "
            fill="none"
          >
            <circle
              cx="300"
              cy="300"
              r="180"
              stroke="#c99618"
              strokeWidth="1"
            />

            <circle
              cx="300"
              cy="300"
              r="240"
              stroke="#c99618"
              strokeWidth="1"
              strokeDasharray="3 12"
            />

            <circle
              cx="300"
              cy="300"
              r="290"
              stroke="#ffffff"
              strokeWidth="1"
              strokeDasharray="2 15"
            />

            <path
              d="M300 0V600"
              stroke="#c99618"
              strokeWidth="1"
              strokeDasharray="3 12"
            />

            <path
              d="M0 300H600"
              stroke="#c99618"
              strokeWidth="1"
              strokeDasharray="3 12"
            />
          </svg>

          {/* Left architectural lines */}

          <div
            className="
                            absolute
                            left-[7%]
                            top-0
                            h-full
                            w-px
                            rotate-[18deg]
                            bg-[#c99618]/10
                        "
          />

          <div
            className="
                            absolute
                            left-[13%]
                            top-0
                            h-full
                            w-px
                            rotate-[18deg]
                            bg-white/[0.04]
                        "
          />

          {/* Bottom diagonal */}

          <svg
            viewBox="0 0 1000 300"
            className="
                            absolute
                            bottom-0
                            left-0
                            h-[180px]
                            w-full
                            opacity-[0.12]
                        "
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M0 250L250 100L500 220L750 40L1000 170"
              stroke="#c99618"
              strokeWidth="1"
            />

            <path
              d="M0 275L250 125L500 245L750 65L1000 195"
              stroke="#ffffff"
              strokeWidth="1"
            />
          </svg>
        </div>

        {/* Hero content */}

        <div
          className="
                        relative
                        z-10
                        mx-auto
                        max-w-[1380px]
                        px-5
                        pb-16
                        sm:px-8
                        sm:pb-20
                        lg:px-12
                        lg:pb-24
                    "
        >
          <div className="grid items-end gap-10 lg:grid-cols-[1fr_360px] lg:gap-16">
            {/* Left */}

            <div>
              <div className="products-eyebrow flex items-center gap-3">
                <span className="h-[2px] w-10 bg-[#c99618]" />

                <span className="text-[9px] font-semibold tracking-[0.3em] text-[#c99618] sm:text-[10px]">
                  MEGHA SYSTEMS
                </span>
              </div>

              <h1
                className="
                                    products-title
                                    mt-5
                                    max-w-[900px]
                                    text-[48px]
                                    font-semibold
                                    leading-[0.92]
                                    tracking-[-0.055em]
                                    text-white
                                    sm:text-[64px]
                                    md:text-[76px]
                                    lg:text-[92px]
                                    xl:text-[105px]
                                "
              >
                Our
                <br />

                <span className="text-[#c99618]">
                  Products.
                </span>
              </h1>

              <p
                className="
                                    products-description
                                    mt-6
                                    max-w-[600px]
                                    text-[12px]
                                    leading-[1.8]
                                    text-white/55
                                    sm:text-[13px]
                                    lg:text-[14px]
                                "
              >
                Explore our complete range of premium toilet
                cubicles, restroom partitions and washroom
                systems designed for commercial,
                institutional and high-traffic environments.
              </p>
            </div>

            {/* Right stats */}

            <div className="grid grid-cols-2 gap-3 lg:grid-cols-1">
              <Stat
                number={allProducts.length}
                label="PRODUCT RANGES"
              />

              <Stat
                number={totalProducts}
                label="PRODUCT SYSTEMS"
              />
            </div>
          </div>
        </div>

        {/* Gold bottom line */}

        <div className="absolute bottom-0 left-0 h-[2px] w-full bg-[#c99618]" />
      </section>

      {/* =====================================================
                CATEGORY NAVIGATION
            ====================================================== */}

      <section className="sticky top-0 z-40 border-b border-[#071a3d]/10 bg-[#f3f5f7]/95 backdrop-blur-xl">
        <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
          <div className="flex overflow-x-auto justify-center scrollbar-hide">
            {allProducts.map((category, index) => (
              <a
                key={category.slug}
                href={`#${category.slug}`}
                className="
                                    group
                                    flex
                                    min-w-max
                                    items-center
                                    gap-2
                                    border-r
                                    border-[#071a3d]/10
                                    px-4
                                    py-4
                                    first:border-l
                                    sm:px-5
                                "
              >
                <span className="text-[10px] font-semibold tracking-[0.18em] text-[#071a3d]/50 transition-colors duration-300 group-hover:text-[#c99618]">
                  0{index + 1}
                </span>

                <span className="text-[9px] font-semibold tracking-[0.12em] text-[#071a3d]/70 transition-colors duration-300 group-hover:text-[#071a3d] sm:text-[12px]">
                  {category.categoryName}
                </span>

                <ChevronRight
                  size={12}
                  className="text-[#c99618] opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
                PRODUCT CATEGORIES
            ====================================================== */}

      <div>
        {allProducts.map((category, categoryIndex) => (
          <CategorySection
            key={category.slug}
            category={category}
            categoryIndex={categoryIndex}
          />
        ))}
      </div>

      {/* =====================================================
                BOTTOM CTA
            ====================================================== */}

      <section className="relative overflow-hidden bg-[#071a3d] py-16 sm:py-20 lg:py-24">
        {/* SVG background */}

        <svg
          viewBox="0 0 1200 500"
          className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.12]"
          fill="none"
          preserveAspectRatio="none"
        >
          <rect
            x="80"
            y="60"
            width="1040"
            height="380"
            stroke="#c99618"
            strokeWidth="1"
          />

          <rect
            x="120"
            y="100"
            width="960"
            height="300"
            stroke="#ffffff"
            strokeWidth="1"
            strokeDasharray="3 10"
          />

          <circle
            cx="600"
            cy="250"
            r="160"
            stroke="#c99618"
            strokeWidth="1"
          />

          <circle
            cx="600"
            cy="250"
            r="210"
            stroke="#c99618"
            strokeWidth="1"
            strokeDasharray="3 12"
          />

          <path
            d="M0 430L350 100L1200 420"
            stroke="#c99618"
            strokeWidth="1"
          />
        </svg>

        <div className="relative z-10 mx-auto max-w-[900px] px-5 text-center sm:px-8">
          <div className="flex items-center justify-center gap-3">
            <span className="h-[2px] w-8 bg-[#c99618]" />

            <span className="text-[8px] font-semibold tracking-[0.3em] text-[#c99618]">
              HAVE A PROJECT IN MIND?
            </span>

            <span className="h-[2px] w-8 bg-[#c99618]" />
          </div>

          <h2
            className="
                            mt-5
                            text-[38px]
                            font-semibold
                            leading-[0.95]
                            tracking-[-0.045em]
                            text-white
                            sm:text-[52px]
                            lg:text-[68px]
                        "
          >
            Let&apos;s Build
            <br />

            <span className="text-[#c99618]">
              Your Washroom.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-[560px] text-[11px] leading-[1.7] text-white/50 sm:text-[12px]">
            Tell us about your project requirements and our team
            will help you choose the right cubicle system,
            configuration and finish.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/contact?type=quote"
              className="
                                group
                                flex
                                h-12
                                items-center
                                justify-center
                                gap-3
                                rounded-[7px]
                                bg-[#c99618]
                                px-7
                                text-[10px]
                                font-semibold
                                tracking-[0.12em]
                                text-[#071a3d]
                                transition-all
                                duration-300
                                hover:bg-[#dfa01a]
                            "
            >
              GET A QUOTE

              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>

            <Link
              href="/contact"
              className="
                                flex
                                h-12
                                items-center
                                justify-center
                                gap-3
                                rounded-[7px]
                                border
                                border-white/20
                                px-7
                                text-[10px]
                                font-semibold
                                tracking-[0.12em]
                                text-white
                                transition-all
                                duration-300
                                hover:border-[#c99618]
                                hover:text-[#c99618]
                            "
            >
              CONTACT US
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function Stat({ number, label }) {
  return (
    <div className="products-stat border-l border-[#c99618]/40 pl-4">
      <p className="text-[30px] font-semibold leading-none tracking-[-0.04em] text-white sm:text-[36px]">
        {number}+
      </p>

      <p className="mt-2 text-[7px] font-semibold tracking-[0.24em] text-[#c99618] sm:text-[8px]">
        {label}
      </p>
    </div>
  );
}

function CategorySection({ category, categoryIndex }) {
  const isLight = categoryIndex % 2 === 0;

  return (
    <section
      id={category.slug}
      className={`product-category relative overflow-hidden py-10 sm:py-12 lg:py-15 ${isLight ? "bg-[#f3f5f7]" : "bg-[#eef1f4]"
        }`}
    >
      <div className="pointer-events-none absolute inset-0">
        {/* Grid */}

        <div
          className="
                        absolute
                        inset-0
                        opacity-[0.3]
                        [background-image:linear-gradient(to_right,#071a3d_1px,transparent_1px),linear-gradient(to_bottom,#071a3d_1px,transparent_1px)]
                        [background-size:90px_90px]
                        opacity-[0.025]
                    "
        />

        {/* Large technical circle */}

        <svg
          viewBox="0 0 500 500"
          className="
                        absolute
                        right-[-160px]
                        top-[80px]
                        h-[420px]
                        w-[420px]
                        opacity-[0.12]
                        sm:h-[500px]
                        sm:w-[500px]
                    "
          fill="none"
        >
          <circle
            cx="250"
            cy="250"
            r="150"
            stroke="#c99618"
            strokeWidth="1"
          />

          <circle
            cx="250"
            cy="250"
            r="195"
            stroke="#071a3d"
            strokeWidth="1"
            strokeDasharray="3 12"
          />

          <circle
            cx="250"
            cy="250"
            r="225"
            stroke="#c99618"
            strokeWidth="1"
            strokeDasharray="1 15"
          />

          <path
            d="M250 20V480"
            stroke="#071a3d"
            strokeWidth="1"
            strokeDasharray="2 10"
          />

          <path
            d="M20 250H480"
            stroke="#071a3d"
            strokeWidth="1"
            strokeDasharray="2 10"
          />
        </svg>

        {/* Corner lines */}

        <div className="absolute bottom-0 left-[8%] h-[180px] w-px rotate-[25deg] bg-[#c99618]/10" />

        <div className="absolute right-[12%] top-0 h-[200px] w-px rotate-[25deg] bg-[#071a3d]/[0.04]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
        {/* =================================================
                    CATEGORY HEADER
                ================================================= */}

        <div className="product-category-header mb-9 grid gap-6 lg:grid-cols-[1fr_420px] lg:items-end lg:gap-12">
          {/* Left */}
          <div>
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-9 bg-[#c99618]" />

              <span className="text-[9px] font-semibold tracking-[0.3em] text-[#c99618] sm:text-[10px]">
                RANGE 0{categoryIndex + 1}
              </span>
            </div>

            <h2
              className="
                                mt-3
                                text-[36px]
                                font-semibold
                                leading-[0.95]
                                tracking-[-0.045em]
                                text-[#071a3d]
                                sm:text-[46px]
                                lg:text-[58px]
                            "
            >
              {category.categoryName}
            </h2>

            <p className="mt-3 max-w-[600px] text-[10px] font-medium tracking-[0.08em] text-[#071a3d]/45 sm:text-[11px]">
              {category.excerpt}
            </p>
          </div>

          {/* Right */}
          <div className="lg:text-right">
            <p className="text-[10px] leading-[1.7] text-[#071a3d]/50 sm:text-[12px]">
              {category.description}
            </p>

            <div className="mt-2 flex items-center gap-5 lg:justify-end">
              <CategoryFeature
                icon={Layers3}
                text={`${category.products.length} PRODUCTS`}
              />

              <CategoryFeature
                icon={ShieldCheck}
                text="BUILT TO LAST"
              />
            </div>
          </div>
        </div>

        {/* =================================================
                    PRODUCT GRID
                ================================================= */}

        <div
          className="
                        grid
                        grid-cols-1
                        gap-4
                        sm:grid-cols-2
                        lg:grid-cols-3
                    "
        >
          {category.products.map((product, productIndex) => (
            <ProductCard
              key={product.slug}
              product={product}
              index={productIndex}
              categoryIndex={categoryIndex}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function CategoryFeature({ icon: Icon, text }) {
  return (
    <div className="flex items-center gap-2">
      <Icon
        size={14}
        strokeWidth={1.5}
        className="text-[#c99618]"
      />

      <span className="text-[10px] font-semibold tracking-[0.18em] text-[#071a3d]/50">
        {text}
      </span>
    </div>
  );
}

function ProductCard({ product, index, categoryIndex }) {
  return (
    <motion.article
      className="
                product-card-reveal
                group
                relative
                overflow-hidden
                rounded-[8px]
                border
                border-[#071a3d]/10
                bg-white
            "
      whileHover={{
        y: -7,
      }}
      transition={{
        duration: 0.3,
        ease: "easeOut",
      }}
    >
      {/* =================================================
                IMAGE
            ================================================= */}

      <div className="relative aspect-[1.18/1] overflow-hidden bg-[#e9edf0]">
        {/* Image */}

        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="
                        (max-width: 640px) 100vw,
                        (max-width: 1024px) 50vw,
                        33vw
                    "
          className="
                        object-cover
                        transition-transform
                        duration-700
                        ease-out
                        group-hover:scale-[1.055]
                    "
        />

        {/* Image overlay */}

        <div className="absolute inset-0 bg-gradient-to-t from-[#071a3d]/35 via-transparent to-transparent opacity-70" />

        {/* Number */}

        <div className="absolute left-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-white/30 bg-[#071a3d]/70 backdrop-blur-md">
          <span className="text-[8px] font-semibold text-white">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* Range label */}

        <div className="absolute bottom-4 left-4">
          <span className="rounded-[4px] border border-white/20 bg-[#071a3d]/75 px-2.5 py-1.5 text-[7px] font-semibold tracking-[0.16em] text-white backdrop-blur-md">
            {categoryIndexLabel(categoryIndex)}
          </span>
        </div>

        {/* Arrow */}

        <div
          className="
                        absolute
                        right-4
                        top-4
                        flex
                        h-9
                        w-9
                        translate-x-2
                        -translate-y-2
                        items-center
                        justify-center
                        rounded-full
                        bg-[#c99618]
                        text-[#071a3d]
                        opacity-0
                        transition-all
                        duration-500
                        group-hover:translate-x-0
                        group-hover:translate-y-0
                        group-hover:opacity-100
                    "
        >
          <ArrowUpRight size={16} />
        </div>
      </div>

      {/* =================================================
                CONTENT
            ================================================= */}

      <div className="relative p-5 sm:p-6">
        {/* Gold top line */}

        <div className="absolute left-5 right-5 top-0 h-[2px] -translate-y-1/2 scale-x-0 bg-[#c99618] origin-left transition-transform duration-500 group-hover:scale-x-100 sm:left-6 sm:right-6" />

        {/* Product title */}

        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="mb-2 text-[9px] font-semibold tracking-[0.25em] text-[#c99618]">
              TOILET CUBICLE SYSTEM
            </p>

            <h3 className="text-[23px] font-semibold leading-none tracking-[-0.035em] text-[#071a3d] sm:text-[26px]">
              {product.name}
            </h3>
          </div>

          <div className="mt-1 text-[#071a3d]/20">
            <Sparkles size={17} strokeWidth={1.4} />
          </div>
        </div>

        {/* Description */}

        <p className="mt-2 line-clamp-3 min-h-[40px] text-[10px] leading-[1.65] text-[#071a3d]/50 sm:text-[12px]">
          {product.shortDescription}
        </p>

        {/* Button */}
        <Link
          href={`/products/${product.slug}`}
          className="
                        group/link
                        mt-5
                        flex
                        items-center
                        justify-between
                        border-b
                        border-[#071a3d]/15
                        pb-2.5
                        text-[9px]
                        font-semibold
                        tracking-[0.16em]
                        text-[#071a3d]
                        transition-colors
                        duration-300
                        hover:border-[#c99618]
                    "
        >
          <span>VIEW PRODUCT</span>

          <span className="flex items-center gap-1.5 text-[#c99618]">
            EXPLORE

            <ArrowUpRight
              size={14}
              className="transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1"
            />
          </span>
        </Link>
      </div>

      {/* Bottom architectural corner */}

      <div className="pointer-events-none absolute bottom-0 right-0 h-16 w-16 overflow-hidden">
        <div className="absolute -bottom-8 -right-8 h-20 w-20 rounded-full border border-[#c99618]/20" />

        <div className="absolute bottom-0 right-0 h-px w-10 bg-[#c99618]/40" />

        <div className="absolute bottom-0 right-0 h-10 w-px bg-[#c99618]/40" />
      </div>
    </motion.article>
  );
}

function categoryIndexLabel(index) {
  const labels = [
    "CLASSIC RANGE",
    "LUXE RANGE",
    "KIDS RANGE",
    "URINAL PARTITIONS",
  ];

  return labels[index] || "MEGHA SYSTEMS";
}