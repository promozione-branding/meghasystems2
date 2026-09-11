"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PRODUCTS = [
    {
        name: "Black Maxi",
        slug: "black-maxi",
        category: "CLASSIC RANGE",
        image: "/Black Maxi.webp",
        description:
            "Bold matte black hardware with premium PVD finishing, engineered for high-traffic commercial washrooms.",
    },
    {
        name: "Duro",
        slug: "duro",
        category: "CLASSIC RANGE",
        image: "/Duro-Toilet-Cubicles.webp",
        description:
            "Strong, durable and engineered for demanding commercial washrooms with Grade 316 stainless steel supports.",
    },
    {
        name: "Cielo",
        slug: "cielo",
        image: "/Cielo.webp",
        category: "LUXE RANGE",
        description: "A premium ceiling-hung cubicle system creating a clean, floating aesthetic with effortless floor cleaning.",
    },
    {
        name: "Kiddiez Pro",
        slug: "kiddiez-pro",
        image: "/Kiddiez Pro.webp",
        category: "KIDS RANGE",
        description:
            "Kiddiez Pro kids toilet cubicles combine reinforced stainless steel construction, secure anchoring, child-friendly hardware.",
    },
    {
        name: "Urinal Modesty Panels",
        slug: "urinal-modesty-panels",
        category: "URINAL PARTITIONS",
        image: "/Commercial Urinal Partitions.webp",
        description:
            "Luxury restroom partitions combining premium finishes, Gold PVD hardware and refined architectural detailing.",
    },
];

export default function ProductSection() {
    const sectionRef = useRef(null);
    const progressRef = useRef(null);

    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const section = sectionRef.current;
        const progress = progressRef.current;

        if (!section || !progress) return;

        const ctx = gsap.context(() => {
            /*
             * IMPORTANT:
             *
             * The product viewport itself stays centered.
             * Only the product content changes.
             *
             * This prevents the cards from moving toward
             * the top when the user scrolls.
             */

            ScrollTrigger.create({
                trigger: section,
                start: "top top",
                end: "bottom bottom",
                scrub: true,

                onUpdate: (self) => {
                    const index = Math.min(
                        PRODUCTS.length - 1,
                        Math.floor(
                            self.progress * PRODUCTS.length
                        )
                    );

                    setActiveIndex(index);

                    gsap.set(progress, {
                        width: `${self.progress * 100}%`,
                    });
                },
            });
        }, section);

        return () => ctx.revert();
    }, []);

    const product = PRODUCTS[activeIndex];

    return (
        <section
            ref={sectionRef}
            className="relative bg-[#071a3d]"
            style={{
                height: `${PRODUCTS.length * 100}vh`,
            }}
        >
            {/* Background architectural details */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute -right-40 top-20 h-[500px] w-[500px] rotate-45 border border-white/[0.04]" />

                <div className="absolute -left-40 bottom-20 h-[450px] w-[450px] -rotate-45 border border-[#d99a17]/10" />

                <div className="absolute left-1/2 top-0 h-full w-px bg-white/[0.025]" />
            </div>

            {/* ================================================= */}
            {/* STICKY VIEWPORT                                  */}
            {/* ================================================= */}

            <div className="sticky top-0 flex h-screen w-full items-center overflow-hidden">
                <div className="mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-12">

                    {/* Header */}
                    <div className="mb-5 lg:mb-8">
                        <div className="flex items-center gap-3">
                            <span className="h-px w-10 bg-[#d99a17]" />

                            <span className="text-[10px] font-semibold tracking-[0.32em] text-[#d99a17] sm:text-[11px]">
                                OUR PRODUCTS
                            </span>
                        </div>

                        <div className="flex items-end justify-between gap-6">
                            <div>
                                <h2 className="max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                                    Engineered for{" "}
                                    {/* <br /> */}
                                    <span className="text-[#d99a17]">
                                        every space.
                                    </span>
                                </h2>

                                <p className="mt-1 max-w-xl text-sm leading-6 text-white/50 sm:text-base">
                                    Explore our range of premium toilet
                                    cubicle and restroom partition systems.
                                </p>
                            </div>

                            {/* Counter */}
                            <div className="hidden shrink-0 text-right sm:block">
                                <div className="text-4xl font-light text-white">
                                    {String(activeIndex + 1).padStart(2, "0")}
                                    <span className="text-white/20">
                                        {" "}
                                        / {String(PRODUCTS.length).padStart(2, "0")}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ================================================= */}
                    {/* PRODUCT AREA                                       */}
                    {/* ================================================= */}

                    <div className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
                        <div className="relative mx-auto w-full max-w-[620px]">

                            {/* Gold frame */}
                            <div className="absolute -bottom-3 -left-3 h-[85%] w-[70%] border-b border-l border-[#d99a17]/70" />

                            <div className="absolute -right-3 -top-3 h-16 w-16 border-r border-t border-[#d99a17]/50" />

                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={product.slug}
                                    initial={{
                                        opacity: 0,
                                        scale: 0.94,
                                        x: -25,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        scale: 1,
                                        x: 0,
                                    }}
                                    exit={{
                                        opacity: 0,
                                        scale: 1.04,
                                        x: 25,
                                    }}
                                    transition={{
                                        duration: 0.55,
                                        ease: [0.22, 1, 0.36, 1],
                                    }}
                                    className="relative"
                                >
                                    <div className="relative aspect-[4/3] overflow-hidden bg-[#06152f]">

                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                            fill
                                            priority
                                            className="object-cover transition-transform duration-700"
                                            sizes="(max-width: 1024px) 100vw, 55vw"
                                        />

                                        {/* Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#071a3d]/70 via-transparent to-transparent" />

                                        {/* Category */}
                                        <div className="absolute left-5 top-5 sm:left-7 sm:top-7">
                                            <span className="border border-white/20 bg-[#071a3d]/80 px-3 py-2 text-[9px] font-semibold tracking-[0.25em] text-white backdrop-blur-sm">
                                                {product.category}
                                            </span>
                                        </div>

                                        {/* Product number */}
                                        <div className="absolute bottom-5 right-5 text-5xl font-light text-white/20 sm:bottom-7 sm:right-7 sm:text-7xl">
                                            {String(activeIndex + 1).padStart(2, "0")}
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        <div className="relative">

                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={product.slug}
                                    initial={{
                                        opacity: 0,
                                        y: 25,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    exit={{
                                        opacity: 0,
                                        y: -20,
                                    }}
                                    transition={{
                                        duration: 0.45,
                                        ease: "easeOut",
                                    }}
                                >
                                    <div className="mb-4 flex items-center gap-3">
                                        <span className="h-px w-8 bg-[#d99a17]" />

                                        <span className="text-[10px] font-semibold tracking-[0.3em] text-[#d99a17]">
                                            {product.category}
                                        </span>
                                    </div>

                                    <h3 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
                                        {product.name}
                                    </h3>

                                    <p className="mt-5 max-w-xl text-sm leading-7 text-white/55 sm:text-base">
                                        {product.description}
                                    </p>

                                    {/* Features */}
                                    <div className="mt-7 grid max-w-xl grid-cols-2 gap-x-8 gap-y-4">
                                        {[
                                            "Premium Materials",
                                            "Modern Design",
                                            "Easy Maintenance",
                                            "Long-Term Performance",
                                        ].map((feature) => (
                                            <div
                                                key={feature}
                                                className="flex items-center gap-2"
                                            >
                                                <span className="h-1.5 w-1.5 bg-[#d99a17]" />

                                                <span className="text-xs text-white/60">
                                                    {feature}
                                                </span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* CTA */}
                                    <div className="mt-8">
                                        <Link
                                            href={`/products/${product.slug}`}
                                            className="group inline-flex items-center gap-4 bg-[#d99a17] px-6 py-3.5 text-xs font-bold tracking-[0.15em] text-[#071a3d] transition-all duration-300 hover:bg-white"
                                        >
                                            EXPLORE PRODUCT

                                            <ArrowRight
                                                size={16}
                                                className="transition-transform duration-300 group-hover:translate-x-1"
                                            />
                                        </Link>
                                    </div>
                                </motion.div>
                            </AnimatePresence>

                            {/* Navigation */}
                            <div className="mt-8 flex items-center gap-3">
                                <button
                                    type="button"
                                    onClick={() =>
                                        setActiveIndex(
                                            Math.max(0, activeIndex - 1)
                                        )
                                    }
                                    disabled={activeIndex === 0}
                                    className="flex h-10 w-10 items-center justify-center border border-white/15 text-white transition-all hover:border-[#d99a17] hover:text-[#d99a17] disabled:cursor-not-allowed disabled:opacity-30"
                                    aria-label="Previous product"
                                >
                                    <ChevronLeft size={18} />
                                </button>

                                <button
                                    type="button"
                                    onClick={() =>
                                        setActiveIndex(
                                            Math.min(
                                                PRODUCTS.length - 1,
                                                activeIndex + 1
                                            )
                                        )
                                    }
                                    disabled={
                                        activeIndex === PRODUCTS.length - 1
                                    }
                                    className="flex h-10 w-10 items-center justify-center border border-white/15 text-white transition-all hover:border-[#d99a17] hover:text-[#d99a17] disabled:cursor-not-allowed disabled:opacity-30"
                                    aria-label="Next product"
                                >
                                    <ChevronRight size={18} />
                                </button>

                                {/* Dots */}
                                <div className="ml-3 flex items-center gap-2">
                                    {PRODUCTS.map((item, index) => (
                                        <button
                                            key={item.slug}
                                            type="button"
                                            onClick={() =>
                                                setActiveIndex(index)
                                            }
                                            className={`h-1 transition-all duration-300 ${index === activeIndex
                                                ? "w-8 bg-[#d99a17]"
                                                : "w-3 bg-white/20"
                                                }`}
                                            aria-label={`Show ${item.name}`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-10">
                        <div className="h-px w-full bg-white/10">
                            <div
                                ref={progressRef}
                                className="h-px w-0 bg-[#d99a17]"
                            />
                        </div>

                        <div className="mt-3 flex justify-between text-[9px] font-semibold tracking-[0.2em] text-white/25">
                            <span>MEGHA SYSTEMS</span>
                            <span>TOILET CUBICLE COLLECTION</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}