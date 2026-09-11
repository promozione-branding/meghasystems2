"use client";

import React, { useEffect, useRef } from "react";
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
    const svgRef = useRef(null);
    const lineRefs = useRef([]);
    const panelRefs = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const lines = lineRefs.current.filter(Boolean);
            const panels = panelRefs.current.filter(Boolean);

            gsap.set(lines, {
                opacity: 0,
                strokeDasharray: 1000,
                strokeDashoffset: 1000,
            });

            gsap.set(panels, {
                opacity: 0,
                scale: 0.92,
                transformOrigin: "center",
            });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 65%",
                    once: true,
                },
            });

            tl.to(lines, {
                opacity: 1,
                strokeDashoffset: 0,
                duration: 1.5,
                stagger: 0.12,
                ease: "power2.out",
            })
                .to(
                    panels,
                    {
                        opacity: 1,
                        scale: 1,
                        duration: 0.75,
                        stagger: 0.15,
                        ease: "power3.out",
                    },
                    "-=0.8"
                )
                .fromTo(
                    ".why-card",
                    {
                        opacity: 0,
                        y: 25,
                    },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.65,
                        stagger: 0.12,
                        ease: "power3.out",
                    },
                    "-=0.35"
                );

            // Subtle floating movement
            gsap.to(svgRef.current, {
                y: -7,
                duration: 3.5,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });

            // Rotating technical ring
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
                {/* Blueprint grid */}
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

                {/* Large circle */}
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

                {/* Diagonal architectural geometry */}
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

                {/* Guide lines */}
                <div className="absolute left-1/2 top-0 h-full w-px bg-[#071a3d]/[0.035]" />

                <div className="absolute left-0 right-0 top-1/2 h-px bg-[#071a3d]/[0.035]" />

                {/* Gold top line */}
                <div className="absolute left-0 right-0 top-0 h-px bg-[#d99a17]/40" />
            </div>

            {/* =====================================================
                CONTENT
            ====================================================== */}
            <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
                {/* Header */}
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

                <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
                    <div
                        ref={svgRef}
                        className="relative order-1 flex min-h-[340px] items-center justify-center lg:min-h-[500px]"
                    >
                        {/* Soft gold glow */}
                        <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d99a17]/10 blur-[90px]" />

                        <div className="relative w-full max-w-[590px]">
                            {/* ==========================================
            TECHNICAL BACKGROUND
        =========================================== */}
                            <svg
                                className="absolute left-1/2 top-1/2 z-0 h-[88%] w-[88%] -translate-x-1/2 -translate-y-1/2 opacity-[0.09]"
                                viewBox="0 0 500 500"
                                fill="none"
                            >
                                <circle
                                    cx="250"
                                    cy="250"
                                    r="205"
                                    stroke="#071a3d"
                                    strokeWidth="1"
                                    strokeDasharray="7 11"
                                />

                                <circle
                                    cx="250"
                                    cy="250"
                                    r="170"
                                    stroke="#d99a17"
                                    strokeWidth="1"
                                    strokeDasharray="2 13"
                                />

                                <path
                                    d="M250 35V465M35 250H465"
                                    stroke="#071a3d"
                                    strokeWidth="1"
                                />

                                {/* Technical marks */}
                                <path
                                    d="M115 115L135 135M385 115L365 135M115 385L135 365M385 385L365 365"
                                    stroke="#071a3d"
                                    strokeWidth="2"
                                />
                            </svg>

                            {/* ==========================================
            MAIN CUBICLE
        =========================================== */}
                            <svg
                                viewBox="0 0 600 470"
                                className="relative z-10 h-auto w-full"
                                fill="none"
                            >
                                {/* ======================================
                TOP SUPPORT
            ======================================= */}
                                <g ref={(el) => (lineRefs.current[0] = el)}>
                                    <path
                                        d="M300 42V75"
                                        stroke="#d99a17"
                                        strokeWidth="3"
                                    />

                                    <circle
                                        cx="300"
                                        cy="34"
                                        r="8"
                                        fill="#f7f5ef"
                                        stroke="#d99a17"
                                        strokeWidth="2"
                                    />

                                    <circle
                                        cx="300"
                                        cy="34"
                                        r="3"
                                        fill="#d99a17"
                                    />

                                    <path
                                        d="M300 34H345"
                                        stroke="#071a3d"
                                        strokeWidth="2"
                                    />

                                    <circle
                                        cx="352"
                                        cy="34"
                                        r="5"
                                        fill="#071a3d"
                                    />
                                </g>

                                {/* ======================================
                TOP ROOF / CUBICLE HEADER
            ======================================= */}
                                <g ref={(el) => (lineRefs.current[1] = el)}>
                                    <path
                                        d="M115 145L300 75L485 145"
                                        stroke="#d99a17"
                                        strokeWidth="4"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </g>

                                {/* ======================================
                LEFT SIDE PARTITION
            ======================================= */}
                                <g ref={(el) => (lineRefs.current[2] = el)}>
                                    <path
                                        d="M115 145V330L175 307V122"
                                        stroke="#d99a17"
                                        strokeWidth="2.5"
                                        strokeLinejoin="round"
                                    />
                                </g>

                                {/* ======================================
                RIGHT SIDE PARTITION
            ======================================= */}
                                <g ref={(el) => (lineRefs.current[3] = el)}>
                                    <path
                                        d="M485 145V330L425 307V122"
                                        stroke="#d99a17"
                                        strokeWidth="2.5"
                                        strokeLinejoin="round"
                                    />
                                </g>

                                {/* ======================================
                LEFT DOOR / PANEL
            ======================================= */}
                                <g ref={(el) => (panelRefs.current[0] = el)}>
                                    <path
                                        d="M175 122L252 93V285L175 307V122Z"
                                        fill="#071a3d"
                                        fillOpacity="0.025"
                                        stroke="#071a3d"
                                        strokeWidth="2"
                                        strokeLinejoin="round"
                                    />

                                    {/* Handle */}
                                    <circle
                                        cx="235"
                                        cy="205"
                                        r="5"
                                        fill="#d99a17"
                                    />

                                    {/* Hinges */}
                                    <circle
                                        cx="188"
                                        cy="138"
                                        r="3"
                                        fill="#d99a17"
                                    />

                                    <circle
                                        cx="188"
                                        cy="293"
                                        r="3"
                                        fill="#d99a17"
                                    />
                                </g>

                                {/* ======================================
                CENTER DOOR
            ======================================= */}
                                <g ref={(el) => (panelRefs.current[1] = el)}>
                                    <path
                                        d="M262 91H338V310H262V91Z"
                                        fill="#d99a17"
                                        fillOpacity="0.08"
                                        stroke="#d99a17"
                                        strokeWidth="2.5"
                                    />

                                    {/* Inner door frame */}
                                    <path
                                        d="M272 102V300"
                                        stroke="#071a3d"
                                        strokeWidth="1"
                                        strokeOpacity="0.25"
                                    />

                                    <path
                                        d="M328 102V300"
                                        stroke="#071a3d"
                                        strokeWidth="1"
                                        strokeOpacity="0.25"
                                    />

                                    {/* Handle */}
                                    <circle
                                        cx="316"
                                        cy="205"
                                        r="6"
                                        fill="#d99a17"
                                    />
                                </g>

                                {/* ======================================
                RIGHT DOOR / PANEL
            ======================================= */}
                                <g ref={(el) => (panelRefs.current[2] = el)}>
                                    <path
                                        d="M348 93L425 122V307L348 285V93Z"
                                        fill="#071a3d"
                                        fillOpacity="0.025"
                                        stroke="#071a3d"
                                        strokeWidth="2"
                                        strokeLinejoin="round"
                                    />

                                    {/* Handle */}
                                    <circle
                                        cx="365"
                                        cy="205"
                                        r="5"
                                        fill="#d99a17"
                                    />

                                    {/* Hinges */}
                                    <circle
                                        cx="412"
                                        cy="138"
                                        r="3"
                                        fill="#d99a17"
                                    />

                                    <circle
                                        cx="412"
                                        cy="293"
                                        r="3"
                                        fill="#d99a17"
                                    />
                                </g>

                                {/* ======================================
                QUALITY CHECK CIRCLE
            ======================================= */}
                                <g ref={(el) => (panelRefs.current[3] = el)}>
                                    <circle
                                        cx="300"
                                        cy="205"
                                        r="42"
                                        stroke="#d99a17"
                                        strokeWidth="1.5"
                                        strokeDasharray="5 7"
                                    />

                                    <path
                                        d="M278 205L292 219L320 188"
                                        stroke="#d99a17"
                                        strokeWidth="4"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </g>

                                {/* ======================================
                SMALL CLEAN FLOOR
            ======================================= */}
                                <g ref={(el) => (panelRefs.current[4] = el)}>
                                    <path
                                        d="M175 330L300 360L425 330"
                                        stroke="#071a3d"
                                        strokeWidth="2"
                                    />

                                    <path
                                        d="M205 338L300 360L395 338"
                                        stroke="#d99a17"
                                        strokeWidth="1.5"
                                    />
                                </g>

                                {/* ======================================
                PRECISION DIMENSION
            ======================================= */}
                                <g ref={(el) => (panelRefs.current[5] = el)}>
                                    <path
                                        d="M185 385H415"
                                        stroke="#071a3d"
                                        strokeWidth="1"
                                    />

                                    <path
                                        d="M185 378V392"
                                        stroke="#071a3d"
                                        strokeWidth="1"
                                    />

                                    <path
                                        d="M415 378V392"
                                        stroke="#071a3d"
                                        strokeWidth="1"
                                    />

                                    <text
                                        x="300"
                                        y="414"
                                        textAnchor="middle"
                                        fill="#c99618"
                                        fontSize="9"
                                        fontWeight="600"
                                        letterSpacing="3"
                                    >
                                        PRECISION ENGINEERING
                                    </text>
                                </g>

                                {/* ======================================
                TECHNICAL SIDE MARKS
            ======================================= */}
                                <g
                                    opacity="0.45"
                                    stroke="#071a3d"
                                    strokeWidth="1"
                                >
                                    <path d="M90 215H120" />
                                    <path d="M90 225H112" />

                                    <path d="M480 215H510" />
                                    <path d="M488 225H510" />
                                </g>
                            </svg>

                            {/* ==========================================
            BOTTOM BADGE
        =========================================== */}
                            <div className="absolute bottom-0 left-1/2 z-20 -translate-x-1/2 border border-[#d99a17]/40 bg-white/95 px-5 py-2.5 shadow-[0_8px_25px_rgba(7,26,61,0.08)] backdrop-blur-md">
                                <p className="whitespace-nowrap text-[8px] font-bold tracking-[0.28em] text-[#071a3d] sm:text-[9px]">
                                    QUALITY • PRECISION • DURABILITY
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="order-2">
                        <div className="grid gap-0">
                            {WHY_CHOOSE_US.map((item, index) => {
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

                <div className="mt-5 grid border-y border-[#071a3d]/10 sm:grid-cols-3 lg:mt-8">
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