"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { allProducts } from "@/data";

gsap.registerPlugin(ScrollTrigger);

const CATEGORIES = [
  {
    number: "01",
    title: "Toilet Cubicles",
    description:
      "Premium modular toilet cubicle systems designed for modern commercial spaces.",
    image: "/Duro-Toilet-Cubicles.webp",
    href: "/categories/toilet-cubicles",
  },
  {
    number: "02",
    title: "Locker Systems",
    description:
      "Durable and elegant locker solutions for offices, factories and institutions.",
    image: "/Luron.webp",
    href: "/categories/locker-systems",
  },
  {
    number: "03",
    title: "Urinal Partitions",
    description:
      "Contemporary partition solutions combining privacy, durability and clean design.",
    image: "/Duro-Toilet-Cubicles.webp",
    href: "/categories/urinal-partitions",
  },
  {
    number: "04",
    title: "Washroom Solutions",
    description:
      "Complete washroom partition solutions built for high-performance environments.",
    image: "/Luron.webp",
    href: "/categories/washroom-solutions",
  },
];

export default function Categories() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".category-heading", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(".category-card", {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".category-grid",
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#f5f3ed] py-10 md:py-15"
    >
      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <div className="pointer-events-none absolute right-[-180px] top-[15%] h-[500px] w-[500px] rounded-full bg-[#d99a17]/[0.06] blur-[100px]" />

      <div className="pointer-events-none absolute left-0 top-0 h-full w-[1px] bg-[#d99a17]/30" />

      {/* =====================================================
          CONTAINER
      ====================================================== */}

      <div className="relative mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">

        {/* ===================================================
            HEADER
        ==================================================== */}

        <div className="category-heading mb-5 flex flex-col justify-between gap-8 md:flex-row md:items-end lg:mb-8">

          <div>
            {/* Eyebrow */}

            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-12 bg-[#d99a17]" />

              <span className="text-[9px] font-medium tracking-[0.3em] text-[#d99a17]">
                OUR SOLUTIONS
              </span>
            </div>

            {/* Heading */}

            <h2 className="max-w-[700px] text-[38px] font-medium leading-[1.05] tracking-[-0.04em] text-[#071a3d] sm:text-[48px] lg:text-[62px]">
              Built for spaces
              <br />
              <span className="text-[#d99a17]">that demand more.</span>
            </h2>
          </div>

          {/* Description */}

          <p className="max-w-[350px] text-[13px] leading-[1.8] text-[#071a3d]/55 md:pb-2">
            Explore our range of premium partition and washroom solutions,
            engineered for durability, privacy and modern commercial spaces.
          </p>
        </div>

        {/* ===================================================
            CATEGORY GRID
        ==================================================== */}

        <div className="category-grid grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {allProducts.map((category, idx) => (
            <Link
              href={category.slug}
              key={idx}
              className="category-card group relative block overflow-hidden bg-[#071a3d]"
            >
              {/* =============================================
                  IMAGE
              ============================================== */}

              <div className="relative h-[360px] overflow-hidden sm:h-[390px] lg:h-[440px]">

                <Image
                  src={category.image}
                  alt={category.categoryName}
                  fill
                  sizes="
                    (max-width: 639px) 100vw,
                    (max-width: 1023px) 50vw,
                    25vw
                  "
                  className="
                    object-cover
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:scale-110
                  "
                />

                {/* Dark overlay */}

                <div className="absolute inset-0 bg-gradient-to-t from-[#071a3d] via-[#071a3d]/20 to-transparent opacity-80" />

                {/* Hover overlay */}

                <div className="absolute inset-0 bg-[#071a3d]/0 transition-colors duration-500 group-hover:bg-[#071a3d]/25" />

                {/* Number */}

                <div className="absolute left-5 top-5 flex items-center gap-3">

                  <span className="text-[11px] tracking-[0.2em] text-white/70">
                    {idx + 1}
                  </span>

                  <span className="h-[1px] w-8 bg-[#d99a17]" />

                </div>

                {/* Gold corner */}

                <div
                  className="
                    absolute
                    right-0
                    top-0
                    h-14
                    w-14
                    border-r
                    border-t
                    border-[#d99a17]
                    opacity-70
                    transition-all
                    duration-500
                    group-hover:h-20
                    group-hover:w-20
                  "
                />

                {/* Content */}

                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">

                  <div className="mb-3 h-[2px] w-8 bg-[#d99a17] transition-all duration-500 group-hover:w-14" />

                  <h3 className="text-[21px] font-medium tracking-[-0.02em] text-white sm:text-[23px]">
                    {category.categoryName}
                  </h3>

                  <p className="mt-3 max-w-[280px] text-[11px] leading-[1.7] text-white/55">
                    {category.description}
                  </p>

                  {/* View */}

                  <div className="mt-5 flex items-center gap-3 text-[9px] font-medium tracking-[0.22em] text-[#d99a17]">
                    <span>VIEW CATEGORY</span>

                    <span className="transition-transform duration-300 group-hover:translate-x-2">
                      →
                    </span>
                  </div>

                </div>
              </div>

              {/* =================================================
                  BOTTOM GOLD LINE
              ================================================== */}

              <div className="h-[3px] w-0 bg-[#d99a17] transition-all duration-500 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* =====================================================
            BOTTOM LINE
        ====================================================== */}

        <div className="mt-8 flex items-center justify-center gap-4">

          <div className="h-[1px] w-12 bg-[#d99a17]" />

          <span className="text-[8px] tracking-[0.3em] text-[#071a3d]/35">
            PREMIUM PARTITION SOLUTIONS
          </span>

          <div className="h-[1px] w-12 bg-[#d99a17]" />

        </div>

      </div>
    </section>
  );
}