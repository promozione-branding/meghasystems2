
"use client";

import { useEffect, useMemo, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { allProducts } from "@/data";

gsap.registerPlugin(ScrollTrigger);

const GRADIENT =
    "linear-gradient(90deg,#EFAC39 0%,#E58B3B 38%,#DF7539 72%,#D85538 100%)";

export default function ProductShowcase() {
    const sectionRef = useRef(null);
    const firstRowRef = useRef(null);
    const secondRowRef = useRef(null);

    const products = useMemo(() => {
        return allProducts.flatMap((category) =>
            (category.products || []).map((product) => ({
                ...product,
                image: product.image || category.image,
                categoryName: category.categoryName,
                href: `/products#${product.slug}`,
            }))
        );
    }, []);

    const firstRow = products.filter((_, index) => index % 2 === 0);
    const secondRow = products.filter((_, index) => index % 2 !== 0);

    useEffect(() => {
        const section = sectionRef.current;
        const row1 = firstRowRef.current;
        const row2 = secondRowRef.current;

        if (!section || !row1 || !row2) return;

        const ctx = gsap.context(() => {
            const getTravel = (row) =>
                Math.max(0, row.scrollWidth - window.innerWidth + 80);

            // FIRST ROW: RIGHT TO LEFT
            gsap.fromTo(
                row1,
                {
                    x: () => Math.min(0, -getTravel(row1) * 0.15),
                },
                {
                    x: () => -getTravel(row1),
                    ease: "none",
                    scrollTrigger: {
                        trigger: section,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 1.2,
                        invalidateOnRefresh: true,
                    },
                }
            );

            // SECOND ROW: LEFT TO RIGHT
            gsap.fromTo(
                row2,
                {
                    x: () => -getTravel(row2),
                },
                {
                    x: 0,
                    ease: "none",
                    scrollTrigger: {
                        trigger: section,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 1.2,
                        invalidateOnRefresh: true,
                    },
                }
            );

            gsap.fromTo(
                ".showcase-heading",
                { opacity: 0, y: 35 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.9,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: section,
                        start: "top 85%",
                        once: true,
                    },
                }
            );
        }, section);

        return () => ctx.revert();
    }, [products.length]);

    if (products.length === 0) return null;

    return (
        <section
            ref={sectionRef}
            className="relative overflow-hidden bg-[#0A0A0D] text-[#F4F4EF] py-10"
        >
            {/* BACKGROUND */}
            <div
                className="pointer-events-none absolute inset-0 opacity-30"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.035) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.035) 1px,transparent 1px)",
                    backgroundSize: "90px 90px",
                }}
            />

            <div className="pointer-events-none absolute -bottom-64 right-[-200px] h-[600px] w-[600px] rounded-full bg-[#E58B3B]/[0.07] blur-[130px]" />

            {/* HEADER */}
            <div className="showcase-heading relative mx-auto mb-10 flex max-w-[1400px] flex-wrap items-center justify-between gap-5 px-5 sm:px-8 lg:px-12">
                <div className="flex items-center gap-3">
                    <span className="h-px w-7 bg-[#EFAC39]" />

                    <span className="text-[11px] font-semibold uppercase tracking-[0.17em] text-white/55">
                        Cubiloo Product Collection
                    </span>
                </div>

                <Link
                    href="/products"
                    className="group flex items-center gap-2 border-b border-white/20 pb-1 text-[12px] font-semibold text-white/85 transition-colors hover:border-[#EFAC39] hover:text-[#EFAC39]"
                >
                    View All Products

                    <ArrowRight
                        size={15}
                        className="transition-transform group-hover:translate-x-1"
                    />
                </Link>
            </div>

            {/* SCROLL ROWS */}
            <div className="relative space-y-6 sm:space-y-8">
                {/* ROW ONE */}
                <div className="w-full">
                    <div
                        ref={firstRowRef}
                        className="flex w-max items-start gap-5 will-change-transform sm:gap-6"
                    >
                        {firstRow.map((product, index) => (
                            <ShowcaseCard
                                key={`first-${product.slug}-${index}`}
                                product={product}
                            />
                        ))}
                    </div>
                </div>

                {/* ROW TWO */}
                {secondRow.length > 0 && (
                    <div className="w-full">
                        <div
                            ref={secondRowRef}
                            className="flex w-max items-start gap-5 will-change-transform sm:gap-6"
                        >
                            {secondRow.map((product, index) => (
                                <ShowcaseCard
                                    key={`second-${product.slug}-${index}`}
                                    product={product}
                                />
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* BOTTOM */}
            <div className="relative mx-auto mt-12 flex max-w-[1400px] items-center justify-between gap-4 px-5 sm:px-8 lg:px-12">
                <p className="text-[11px] uppercase tracking-[0.2em] text-white/35">
                    Designed for every space. Built to last.
                </p>

                <Link
                    href="/contact-us"
                    className="group flex shrink-0 items-center gap-2 text-xs font-semibold text-[#EFAC39]"
                >
                    Enquire Now
                    <ArrowUpRight
                        size={16}
                        className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                </Link>
            </div>
        </section>
    );
}

function ShowcaseCard({ product }) {
    return (
        <Link
            href={product.href}
            className="group block w-[250px] shrink-0 sm:w-[310px] lg:w-[355px]"
        >
            {/* IMAGE */}
            <div className="relative h-[195px] overflow-hidden rounded-[17px] border border-white/10 bg-[#151518] sm:h-[235px] lg:h-[260px]">
                {product.image ? (
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="(max-width: 639px) 250px, (max-width: 1023px) 310px, 355px"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                ) : (
                    <div className="flex h-full items-center justify-center text-xs text-white/40">
                        Image Coming Soon
                    </div>
                )}

                {/* HOVER OVERLAY */}
                <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/15" />

                {/* ARROW */}
                <span
                    className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/65 text-white backdrop-blur-md transition-all duration-300 group-hover:rotate-45 group-hover:border-[#E58B3B]"
                >
                    <ArrowUpRight size={19} />
                </span>
            </div>

            {/* TITLE */}
            <div className="mt-3 flex items-center gap-2">
                <h3 className="truncate text-[13px] font-medium text-white/85 transition-colors group-hover:text-[#EFAC39] sm:text-[14px]">
                    {product.name}
                </h3>

                <span
                    className="shrink-0 rounded px-1.5 py-0.5 text-[9px] font-bold text-black"
                    style={{ background: GRADIENT }}
                >
                    CUBILOO
                </span>
            </div>
        </Link>
    );
}
