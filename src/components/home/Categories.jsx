
"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { navabarProducts } from "@/data";
// import { allProducts } from "@/data";



gsap.registerPlugin(ScrollTrigger);

const GRADIENT =
  "linear-gradient(90deg, #b8c900 0%, #dddf00 35%, #f0f542 65%, #a9c000 100%)";

const FILTERS = [
  { label: "All", value: "all" },
  { label: "Classic Range", value: "classic-range" },
  { label: "Luxe Range", value: "luxe-range" },
  { label: "Kids Range", value: "kids-range" },
  {
    label: "Urinal Partitions",
    value: "pd-doors-and-urinal-partitions",
  },
];

export default function Categories() {
  const sectionRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState("all");

  // Show individual products, not only the four parent ranges.
  // const products = useMemo(() => {
  //   return allProducts.flatMap((category) =>
  //     (category.products || []).map((product) => ({
  //       ...product,
  //       categoryName: category.categoryName,
  //       categorySlug: category.slug,
  //       image: product.image || category.image,
  //       href: `/products/${product.slug}`,
  //     }))
  //   );
  // }, []);

  // const filteredProducts = useMemo(() => {
  //   if (activeFilter === "all") return products;

  //   return products.filter(
  //     (product) => product.categorySlug === activeFilter
  //   );
  // }, [activeFilter, products]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".category-heading", {
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".category-heading",
          start: "top 85%",
          once: true,
        },
      });

      gsap.from(".category-filter-bar", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".category-filter-bar",
          start: "top 90%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-[#f5f3ed] py-10 sm:py-12 lg:py-15">

      <div className="mx-auto max-w-[1900px] px-5 sm:px-8 lg:px-9">
        {/* HEADING */}
        <div className="category-heading mb-5 flex flex-col justify-between gap-8 md:flex-row md:items-end lg:mb-8">
          <div>
            {/* Eyebrow */}
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-12 bg-[#dddf00]" />

              <span className="text-[9px] font-medium tracking-[0.3em] text-[#dddf00]">
                OUR SOLUTIONS
              </span>
            </div>

            {/* Heading */}
            <h2 className="max-w-[700px] text-[38px] font-bold leading-[1.05] tracking-[-0.04em] text-[#071720] sm:text-[48px] lg:text-[62px]">
              Built for spaces
              <br />

              <span className="bg-[linear-gradient(90deg,#b8c900_0%,#dddf00_35%,#f0f542_65%,#a9c000_100%)] bg-clip-text text-transparent">
                that demand more.
              </span>
            </h2>
          </div>

          {/* Description */}
          <p className="max-w-[350px] text-[13px] leading-[1.8] text-[#071720]/95 md:pb-2">
            Explore our range of premium partition and washroom solutions,
            engineered for durability, privacy and modern commercial spaces.
          </p>
        </div>

        {/* CATEGORY FILTERS */}
        

        {/* PRODUCT GRID */}
        <motion.div
          layout
          className="category-grid grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 xl:gap-y-16"
        >
          <AnimatePresence mode="popLayout">
            {navabarProducts.map((product, index) => (
              <motion.div
                layout
                key={`${product.categorySlug}-${product.slug}`}
                initial={{
                  opacity: 0,
                  y: 35,
                  scale: 0.97,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  y: 20,
                  scale: 0.97,
                }}
                transition={{
                  duration: 0.4,
                  delay: Math.min(index * 0.035, 0.3),
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="min-w-0"
              >
                <Link
                  href={`/products/${product.slug}`}
                  className="group block"
                >
                  {/* IMAGE CARD */}
                  <div className="relative aspect-[1.27/1] overflow-hidden rounded-[13px] border border-[#ECECEC] bg-[#F4F4F4]">
                    {product.image ? (
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, (max-width: 1279px) 33vw, 25vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center text-sm text-gray-400">
                        Image Coming Soon
                      </div>
                    )}

                    {/* Subtle bottom gradient */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" />

                    {/* TOP RIGHT BADGE */}
                    <div className="absolute right-3 top-3 z-10 rounded-full bg-[#101010] px-4 py-2 text-[10px] font-bold text-[#dddf00] shadow-[0_5px_20px_rgba(0,0,0,0.18)] sm:text-[11px]">
                      CUBILOO
                    </div>

                    {/* Hover Arrow */}
                    <div
                      className="absolute bottom-4 right-4 flex h-11 w-11 translate-y-3 items-center justify-center rounded-full text-black opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                      style={{ background: GRADIENT }}
                    >
                      <ArrowUpRight size={20} />
                    </div>
                  </div>

                  {/* TITLE BELOW IMAGE */}
                  <div className="mt-5 text-center">
                    <h3 className="text-[19px] font-medium tracking-[-0.035em] text-[#121212] transition-colors duration-300 group-hover:text-[#dddf00] sm:text-[21px]">
                      {product.label}
                    </h3>

                    <p className="mt-1.5 text-[11px] font-medium uppercase tracking-[0.12em] text-[#888]">
                      {product.categoryName}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* EMPTY STATE */}
        {/* {filteredProducts.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-lg text-gray-500">
              No products available in this category.
            </p>
          </div>
        )} */}
      </div>
    </section>
  );
}
