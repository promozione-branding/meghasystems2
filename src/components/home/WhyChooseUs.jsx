"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import {
    ArrowUpRight,
    Award,
    CheckCircle2,
    ShieldCheck,
    Target,
    Wrench,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WHY_CHOOSE_US = [
    {
        number: "01",
        title: "25+ Years of Experience",
        description:
            "Industry experience backed by proven expertise in restroom partition and toilet cubicle solutions.",
        icon: Award,
    },
    {
        number: "02",
        title: "Premium Materials",
        description:
            "Carefully selected materials and hardware engineered for demanding commercial and institutional environments.",
        icon: ShieldCheck,
    },
    {
        number: "03",
        title: "Precision Engineering",
        description:
            "Accurate measurements, detailed planning and controlled manufacturing ensure a precise final installation.",
        icon: Target,
    },
    {
        number: "04",
        title: "Complete Execution",
        description:
            "From design and manufacturing to installation, our team manages the complete project with attention to detail.",
        icon: Wrench,
    },
];

export default function WhyChooseUs() {
    const sectionRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            /* ==========================================
               INITIAL IMAGE STATE
            =========================================== */

            gsap.set(imageRef.current, {
                opacity: 0,
                scale: 0.94,
                y: 25,
            });

            gsap.set(".image-frame-line", {
                opacity: 0,
                scaleX: 0,
                transformOrigin: "left center",
            });

            gsap.set(".why-card", {
                opacity: 0,
                y: 25,
            });

            /* ==========================================
               MAIN SCROLL ANIMATION
            =========================================== */

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 65%",
                    once: true,
                },
            });

            tl.to(".image-frame-line", {
                opacity: 1,
                scaleX: 1,
                duration: 0.8,
                stagger: 0.12,
                ease: "power2.out",
            })
                .to(
                    imageRef.current,
                    {
                        opacity: 1,
                        scale: 1,
                        y: 0,
                        duration: 1,
                        ease: "power3.out",
                    },
                    "-=0.45"
                )
                .to(
                    ".why-card",
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.65,
                        stagger: 0.12,
                        ease: "power3.out",
                    },
                    "-=0.45"
                );

            /* ==========================================
               SUBTLE IMAGE FLOAT
            =========================================== */

            gsap.to(imageRef.current, {
                y: -6,
                duration: 3.5,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });

            /* ==========================================
               TECHNICAL RING ROTATION
            =========================================== */

            gsap.to(".technical-ring", {
                rotate: 360,
                duration: 25,
                repeat: -1,
                ease: "none",
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative overflow-hidden bg-[#f7f5ef] py-10 sm:py-12 lg:py-15"
        >
            {/* =====================================================
                ARCHITECTURAL BACKGROUND
            ====================================================== */}

            <div className="pointer-events-none absolute inset-0 overflow-hidden">

                {/* Blueprint Grid */}

                <svg
                    className="absolute inset-0 h-full w-full opacity-[0.035]"
                    viewBox="0 0 1200 700"
                    preserveAspectRatio="none"
                >
                    <defs>
                        <pattern
                            id="why-grid"
                            width="50"
                            height="50"
                            patternUnits="userSpaceOnUse"
                        >
                            <path
                                d="M50 0H0V50"
                                fill="none"
                                stroke="#071a3d"
                                strokeWidth="0.7"
                            />
                        </pattern>
                    </defs>

                    <rect
                        width="1200"
                        height="700"
                        fill="url(#why-grid)"
                    />
                </svg>


                {/* Large Technical Circle */}

                <svg
                    className="absolute -left-56 top-[-100px] h-[650px] w-[650px] opacity-[0.055]"
                    viewBox="0 0 650 650"
                    fill="none"
                >
                    <circle
                        cx="325"
                        cy="325"
                        r="275"
                        stroke="#071a3d"
                        strokeWidth="1"
                    />

                    <circle
                        cx="325"
                        cy="325"
                        r="210"
                        stroke="#d99a17"
                        strokeWidth="1"
                    />

                    <circle
                        cx="325"
                        cy="325"
                        r="140"
                        stroke="#071a3d"
                        strokeWidth="1"
                    />

                    <path
                        d="M325 20V630M20 325H630"
                        stroke="#071a3d"
                        strokeWidth="1"
                    />
                </svg>


                {/* Diagonal Architectural Geometry */}

                <svg
                    className="absolute bottom-0 right-0 h-[400px] w-[550px] opacity-[0.06]"
                    viewBox="0 0 550 400"
                    fill="none"
                >
                    <path
                        d="M550 20L170 400"
                        stroke="#d99a17"
                        strokeWidth="1"
                    />

                    <path
                        d="M550 90L240 400"
                        stroke="#071a3d"
                        strokeWidth="1"
                    />

                    <path
                        d="M550 170L320 400"
                        stroke="#071a3d"
                        strokeWidth="1"
                    />

                    <path
                        d="M550 250L400 400"
                        stroke="#071a3d"
                        strokeWidth="1"
                    />
                </svg>


                {/* Guide Lines */}

                <div className="absolute left-1/2 top-0 h-full w-px bg-[#071a3d]/[0.035]" />

                <div className="absolute left-0 right-0 top-1/2 h-px bg-[#071a3d]/[0.035]" />


                {/* Gold Top Line */}

                <div className="absolute left-0 right-0 top-0 h-px bg-[#d99a17]/40" />
            </div>


            {/* =====================================================
                CONTENT
            ====================================================== */}

            <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">

                {/* =================================================
                    HEADER
                ================================================= */}

                <div className="mb-8 max-w-3xl lg:mb-10">

                    <div className="mb-5 flex items-center gap-3">

                        <span className="h-px w-10 bg-[#d99a17]" />

                        <span className="text-[10px] font-bold tracking-[0.35em] text-[#c99618]">
                            WHY CHOOSE US
                        </span>

                    </div>


                    <h2 className="text-3xl font-semibold leading-tight tracking-tight text-[#071a3d] sm:text-4xl lg:text-5xl">
                        Built on experience.
                        <br />

                        <span className="text-[#c99618]">
                            Engineered to last.
                        </span>
                    </h2>


                    <p className="mt-5 max-w-2xl text-sm leading-7 text-[#071a3d]/55 sm:text-base">
                        We combine technical expertise, premium materials and
                        disciplined execution to create restroom environments
                        that perform beautifully for years.
                    </p>

                </div>


                {/* =================================================
                    MAIN CONTENT
                ================================================= */}

                <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">

                    {/* =================================================
                        PRODUCT IMAGE
                    ================================================= */}

                    <div className="relative order-1 flex min-h-[280px] items-center justify-center sm:min-h-[360px] lg:min-h-[500px]">

                        {/* Gold Glow */}

                        <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d99a17]/10 blur-[90px]" />


                        <div className="relative w-full max-w-[620px]">

                            {/* =================================================
                                TECHNICAL ROTATING RING
                            ================================================= */}

                            <svg
                                className="technical-ring pointer-events-none absolute left-1/2 top-1/2 z-0 h-[95%] w-[95%] -translate-x-1/2 -translate-y-1/2 opacity-[0.08]"
                                viewBox="0 0 500 500"
                                fill="none"
                            >
                                <circle
                                    cx="250"
                                    cy="250"
                                    r="220"
                                    stroke="#071a3d"
                                    strokeWidth="1"
                                    strokeDasharray="7 11"
                                />

                                <circle
                                    cx="250"
                                    cy="250"
                                    r="190"
                                    stroke="#d99a17"
                                    strokeWidth="1"
                                    strokeDasharray="2 13"
                                />

                                <circle
                                    cx="250"
                                    cy="250"
                                    r="155"
                                    stroke="#071a3d"
                                    strokeWidth="1"
                                    strokeDasharray="3 16"
                                />

                                <path
                                    d="M250 25V475M25 250H475"
                                    stroke="#071a3d"
                                    strokeWidth="1"
                                />

                                <path
                                    d="M92 92L408 408M408 92L92 408"
                                    stroke="#071a3d"
                                    strokeWidth="0.7"
                                />

                                <circle
                                    cx="250"
                                    cy="30"
                                    r="4"
                                    fill="#d99a17"
                                />

                                <circle
                                    cx="470"
                                    cy="250"
                                    r="4"
                                    fill="#d99a17"
                                />

                                <circle
                                    cx="250"
                                    cy="470"
                                    r="4"
                                    fill="#d99a17"
                                />

                                <circle
                                    cx="30"
                                    cy="250"
                                    r="4"
                                    fill="#d99a17"
                                />
                            </svg>


                            {/* =================================================
                                IMAGE FRAME
                            ================================================= */}

                            <div
                                ref={imageRef}
                                className="relative z-10"
                            >

                                {/* Top architectural line */}

                                <div className="image-frame-line absolute -left-3 -right-3 -top-3 h-px bg-[#d99a17] sm:-left-5 sm:-right-5 sm:-top-5" />


                                {/* Right architectural line */}

                                <div className="image-frame-line absolute -bottom-3 -right-3 top-[-12px] w-px bg-[#071a3d]/20 sm:-bottom-5 sm:-right-5 sm:top-[-20px]" />


                                {/* Bottom architectural line */}

                                <div className="image-frame-line absolute -bottom-3 -left-3 -right-3 h-px bg-[#071a3d]/20 sm:-bottom-5 sm:-left-5 sm:-right-5" />


                                {/* Left architectural line */}

                                <div className="image-frame-line absolute -bottom-3 -left-3 top-[-12px] w-px bg-[#d99a17]/60 sm:-bottom-5 sm:-left-5 sm:top-[-20px]" />


                                {/* =================================================
                                    REAL PRODUCT IMAGE
                                ================================================= */}

                                <div className="relative aspect-[16/9] w-full overflow-hidden bg-white shadow-[0_25px_70px_rgba(7,26,61,0.14)]">

                                    <Image
                                        src="/Maxi Pro.webp"
                                        alt="Maxi Pro Toilet Cubicle System"
                                        fill
                                        priority
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 70vw, 620px"
                                        className="object-cover transition-transform duration-700 hover:scale-[1.025]"
                                    />


                                    {/* Image Overlay */}

                                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#071a3d]/20 via-transparent to-transparent" />


                                    {/* Top Label */}

                                    <div className="absolute left-0 top-0 bg-[#071a3d] px-4 py-3 sm:px-5">

                                        <p className="text-[8px] font-bold tracking-[0.28em] text-white sm:text-[9px]">
                                            MEGHA SYSTEMS
                                        </p>

                                    </div>


                                    {/* Product Label */}

                                    <div className="absolute bottom-0 right-0 bg-[#c99618] px-4 py-3 sm:px-5">

                                        <p className="text-[8px] font-bold tracking-[0.2em] text-white sm:text-[9px]">
                                            MAXI PRO
                                        </p>

                                    </div>

                                </div>


                                {/* =================================================
                                    PRODUCT BADGE
                                ================================================= */}

                                <div className="absolute bottom-[-18px] left-1/2 z-30 -translate-x-1/2 border border-[#d99a17]/40 bg-white/95 px-4 py-2.5 shadow-[0_8px_25px_rgba(7,26,61,0.08)] backdrop-blur-md sm:bottom-[-20px] sm:px-5">

                                    <p className="whitespace-nowrap text-[7px] font-bold tracking-[0.25em] text-[#071a3d] sm:text-[9px]">
                                        QUALITY • PRECISION • DURABILITY
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>


                    {/* =================================================
                        WHY CHOOSE US CARDS
                    ================================================= */}

                    <div className="order-2">

                        <div className="grid gap-0">

                            {WHY_CHOOSE_US.map((item) => {
                                const Icon = item.icon;

                                return (
                                    <div
                                        key={item.number}
                                        className="why-card group relative border-b border-[#071a3d]/10 py-7 first:pt-0 last:border-b-0"
                                    >

                                        <div className="flex gap-5">

                                            {/* Number */}

                                            <div className="shrink-0 pt-1">

                                                <span className="text-[10px] font-bold tracking-[0.2em] text-[#c99618]">
                                                    {item.number}
                                                </span>

                                            </div>


                                            {/* Icon */}

                                            <div
                                                className="
                                                    flex
                                                    h-11
                                                    w-11
                                                    shrink-0
                                                    items-center
                                                    justify-center
                                                    border
                                                    border-[#071a3d]/10
                                                    bg-white
                                                    text-[#c99618]
                                                    shadow-sm
                                                    transition-all
                                                    duration-500
                                                    group-hover:border-[#d99a17]
                                                    group-hover:bg-[#071a3d]
                                                "
                                            >

                                                <Icon
                                                    size={19}
                                                    strokeWidth={1.5}
                                                    className="transition-colors duration-500 group-hover:text-[#d99a17]"
                                                />

                                            </div>


                                            {/* Content */}

                                            <div className="flex-1">

                                                <div className="flex items-start justify-between gap-4">

                                                    <h3 className="text-lg font-semibold text-[#071a3d]">
                                                        {item.title}
                                                    </h3>

                                                    <ArrowUpRight
                                                        size={17}
                                                        className="mt-1 shrink-0 text-[#c99618] opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"
                                                    />

                                                </div>


                                                <p className="mt-2 text-sm leading-6 text-[#071a3d]/50">
                                                    {item.description}
                                                </p>

                                            </div>

                                        </div>

                                    </div>
                                );
                            })}

                        </div>

                    </div>

                </div>


                {/* =================================================
                    BOTTOM TRUST BAR
                ================================================= */}

                <div className="mt-5 grid border-y border-[#071a3d]/10 sm:grid-cols-3 lg:mt-8">

                    {/* Experience */}

                    <div className="flex items-center gap-3 border-b border-[#071a3d]/10 px-0 py-5 sm:border-b-0 sm:border-r sm:px-6">

                        <CheckCircle2
                            size={17}
                            className="text-[#c99618]"
                            strokeWidth={1.5}
                        />

                        <div>

                            <p className="text-[9px] font-bold tracking-[0.2em] text-[#071a3d]/40">
                                EXPERIENCE
                            </p>

                            <p className="mt-1 text-xs font-medium text-[#071a3d]">
                                Proven Industry Expertise
                            </p>

                        </div>

                    </div>


                    {/* Quality */}

                    <div className="flex items-center gap-3 border-b border-[#071a3d]/10 px-0 py-5 sm:border-b-0 sm:border-r sm:px-6">

                        <ShieldCheck
                            size={17}
                            className="text-[#c99618]"
                            strokeWidth={1.5}
                        />

                        <div>

                            <p className="text-[9px] font-bold tracking-[0.2em] text-[#071a3d]/40">
                                QUALITY
                            </p>

                            <p className="mt-1 text-xs font-medium text-[#071a3d]">
                                Built for Long-Term Performance
                            </p>

                        </div>

                    </div>


                    {/* Execution */}

                    <div className="flex items-center gap-3 px-0 py-5 sm:px-6">

                        <Target
                            size={17}
                            className="text-[#c99618]"
                            strokeWidth={1.5}
                        />

                        <div>

                            <p className="text-[9px] font-bold tracking-[0.2em] text-[#071a3d]/40">
                                EXECUTION
                            </p>

                            <p className="mt-1 text-xs font-medium text-[#071a3d]">
                                Complete Project Support
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}