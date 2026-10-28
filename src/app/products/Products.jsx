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
import { FiArrowUpRight } from "react-icons/fi";

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
      className="min-h-screen overflow-hidden bg-[#fff] text-[#071720]"
    >
      <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-[#071720] text-white">
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/ChatGPT Image Sep 14, 2026, 05_32_46 PM.png')", }} />

        {/* Main Content */}
        <div className="relative z-10 mx-auto w-full max-w-[1500px] px-5 pb-16 pt-20 sm:px-8 sm:pb-20 lg:px-12 lg:py-20">
          <div className="max-w-7xl flex flex-col items-center">
            {/* Small Heading */}
            <div className="about-hero-item mb-7 flex items-center gap-4">
              <span className="h-px w-12 bg-[#fff]" />
              <span className="text-[12px] uppercase font-semibold uppercase tracking-[0.28em] text-[#fff]">
                Cubiloo Cubicles
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="about-hero-item text-[#fff] text-5xl font-medium leading-[0.98] tracking-[-0.015em] sm:text-7xl">
              Our {" "}
              <span className="bg-[linear-gradient(90deg,#b8c900_0%,#dddf00_35%,#f0f542_65%,#a9c000_100%)] bg-clip-text text-[#fff]">
                Products
              </span>
            </h1>

            <div className="about-hero-item mt-10 flex flex-wrap gap-4">
              <Link
                href="/about-us"
                className="group inline-flex items-center gap-3 bg-[linear-gradient(90deg,#b8c900_0%,#dddf00_35%,#f0f542_65%,#a9c000_100%)] px-6 py-4 text-sm font-semibold text-[#071720] transition-all duration-300 hover:bg-[#dddf00]"
              >
                Explore Cubiloo Cubicles
                <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>

              <Link
                href="/contact-us"
                className="group inline-flex items-center gap-3 border border-white/40 bg-[#071720] px-6 py-4 text-sm font-medium text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-[#071720]"
              >
                Talk to Our Team
                <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="sticky top-0 z-40 border-b border-[#071720]/30 bg-[#f3f5f7]/95 backdrop-blur-xl">
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
                                    border-[#071720]/30
                                    px-4
                                    py-4
                                    first:border-l
                                    sm:px-5
                                "
              >
                <span className="text-[10px] font-semibold tracking-[0.18em] text-[#071720]/60 transition-colors duration-300 group-hover:text-[#dddf00]">
                  0{index + 1}
                </span>

                <span className="text-[9px] font-semibold tracking-[0.12em] text-[#071720]/95 transition-colors duration-300 group-hover:text-[#071720] sm:text-[12px]">
                  {category.categoryName}
                </span>

                <ChevronRight
                  size={12}
                  className="text-[#dddf00] opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      <div className="pb-50">
        {allProducts.map((category, categoryIndex) => (
          <CategorySection
            key={category.slug}
            category={category}
            categoryIndex={categoryIndex}
          />
        ))}
      </div>
    </main>
  );
}

function Stat({ number, label }) {
  return (
    <div className="products-stat border-l border-[#dddf00]/40 pl-4">
      <p className="text-[30px] font-semibold leading-none tracking-[-0.04em] text-white sm:text-[36px]">
        {number}+
      </p>

      <p className="mt-2 text-[7px] font-semibold tracking-[0.24em] text-[#dddf00] sm:text-[8px]">
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
      className={`product-category relative overflow-hidden py-10 sm:py-12 lg:py-15 ${isLight ? "bg-[#f5f3ed]" : "bg-[#fff]"
        }`}
    >
      <div className="pointer-events-none absolute inset-0">
        {/* Grid */}

        <div
          className="
                        absolute
                        inset-0
                        opacity-[0.3]
                        [background-image:linear-gradient(to_right,#071720_1px,transparent_1px),linear-gradient(to_bottom,#071720_1px,transparent_1px)]
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
            stroke="#dddf00"
            strokeWidth="1"
          />

          <circle
            cx="250"
            cy="250"
            r="195"
            stroke="#071720"
            strokeWidth="1"
            strokeDasharray="3 12"
          />

          <circle
            cx="250"
            cy="250"
            r="225"
            stroke="#dddf00"
            strokeWidth="1"
            strokeDasharray="1 15"
          />

          <path
            d="M250 20V480"
            stroke="#071720"
            strokeWidth="1"
            strokeDasharray="2 10"
          />

          <path
            d="M20 250H480"
            stroke="#071720"
            strokeWidth="1"
            strokeDasharray="2 10"
          />
        </svg>

        {/* Corner lines */}

        <div className="absolute bottom-0 left-[8%] h-[180px] w-px rotate-[25deg] bg-[#dddf00]/10" />

        <div className="absolute right-[12%] top-0 h-[200px] w-px rotate-[25deg] bg-[#071720]/[0.04]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
        {/* =================================================
                    CATEGORY HEADER
                ================================================= */}

        <div className="product-category-header mb-9 grid gap-6 lg:grid-cols-[1fr_420px] lg:items-end lg:gap-12">
          {/* Left */}
          <div>
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-9 bg-[#dddf00]" />

              <span className="text-[9px] font-semibold tracking-[0.3em] text-[#dddf00] sm:text-[10px]">
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
                                text-[#071720]
                                sm:text-[46px]
                                lg:text-[58px]
                            "
            >
              {category.categoryName}
            </h2>

            <p className="mt-3 max-w-[600px] text-[10px] font-medium tracking-[0.08em] text-[#071720]/80 sm:text-[11px]">
              {category.excerpt}
            </p>
          </div>

          {/* Right */}
          <div className="lg:text-right">
            <p className="text-[10px] leading-[1.7] text-[#071720]/80 sm:text-[12px]">
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
        className="text-[#dddf00]"
      />

      <span className="text-[10px] font-semibold tracking-[0.18em] text-[#071720]/80">
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
                border-[#071720]/10
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

        <div className="absolute inset-0 bg-gradient-to-t from-[#071720]/35 via-transparent to-transparent opacity-70" />

        {/* Number */}

        <div className="absolute left-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-white/30 bg-[#071720]/90 backdrop-blur-md">
          <span className="text-[8px] font-semibold text-white">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* Range label */}

        <div className="absolute bottom-4 left-4">
          <span className="rounded-[4px] border border-white/20 bg-[#071720]/90 px-2.5 py-1.5 text-[7px] font-semibold tracking-[0.16em] text-white backdrop-blur-md">
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
                        bg-[#dddf00]
                        text-[#071720]
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

        <div className="absolute left-5 right-5 top-0 h-[2px] -translate-y-1/2 scale-x-0 bg-[#dddf00] origin-left transition-transform duration-500 group-hover:scale-x-100 sm:left-6 sm:right-6" />

        {/* Product title */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="mb-2 text-[9px] font-semibold tracking-[0.25em] text-[#dddf00]">
              TOILET CUBICLE SYSTEM
            </p>

            <h3 className="text-[23px] font-semibold leading-none tracking-[-0.035em] text-[#071720] sm:text-[26px]">
              {product.name}
            </h3>
          </div>
        </div>

        {/* Description */}
        <p className="mt-2 line-clamp-3 min-h-[40px] text-[10px] leading-[1.65] text-[#071720]/90 sm:text-[12px]">
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
                        border-[#071720]/15
                        pb-2.5
                        text-[9px]
                        font-semibold
                        tracking-[0.16em]
                        text-[#071720]
                        transition-colors
                        duration-300
                        hover:border-[#dddf00]
                    "
        >
          <span>VIEW PRODUCT</span>

          <span className="flex items-center gap-1.5 text-[#dddf00]">
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
        <div className="absolute -bottom-8 -right-8 h-20 w-20 rounded-full border border-[#dddf00]/20" />

        <div className="absolute bottom-0 right-0 h-px w-10 bg-[#dddf00]/40" />

        <div className="absolute bottom-0 right-0 h-10 w-px bg-[#dddf00]/40" />
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

  return labels[index] || "CUBILOO CUBICLES";
}