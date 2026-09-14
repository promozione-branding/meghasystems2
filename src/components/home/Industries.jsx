"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";

import {
    FiArrowUpRight,
    FiBriefcase,
    FiHome,
    FiActivity,
    FiShoppingBag,
    FiTruck,
    FiBookOpen,
    FiCoffee,
    FiMapPin,
} from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

/* =========================================================
   INDUSTRIES
========================================================= */

const INDUSTRIES = [
    {
        id: 1,
        number: "01",
        title: "CORPORATE",
        subtitle: "OFFICES & WORKSPACES",
        description:
            "Premium restroom partition solutions designed for modern corporate offices, commercial buildings and professional workspaces.",
        icon: FiBriefcase,
    },
    {
        id: 2,
        number: "02",
        title: "HOSPITALS",
        subtitle: "HEALTHCARE SPACES",
        description:
            "Hygienic, durable and easy-to-maintain washroom solutions designed for demanding healthcare environments.",
        icon: FiActivity,
    },
    {
        id: 3,
        number: "03",
        title: "HOTELS",
        subtitle: "HOSPITALITY",
        description:
            "Elegant cubicle systems that combine premium aesthetics, privacy and long-term performance for hospitality spaces.",
        icon: FiHome,
    },
    {
        id: 4,
        number: "04",
        title: "MALLS & RETAIL",
        subtitle: "HIGH-TRAFFIC SPACES",
        description:
            "Robust restroom systems engineered for high visitor volumes while maintaining a clean and premium appearance.",
        icon: FiShoppingBag,
    },
    {
        id: 5,
        number: "05",
        title: "FACTORIES",
        subtitle: "INDUSTRIAL FACILITIES",
        description:
            "Heavy-duty and practical washroom partition systems built for industrial and high-usage environments.",
        icon: FiTruck,
    },
    {
        id: 6,
        number: "06",
        title: "EDUCATION",
        subtitle: "SCHOOLS & INSTITUTIONS",
        description:
            "Safe, durable and practical cubicle solutions suitable for schools, colleges and institutional facilities.",
        icon: FiBookOpen,
    },
    {
        id: 7,
        number: "07",
        title: "RESTAURANTS",
        subtitle: "FOOD & DINING",
        description:
            "Contemporary restroom solutions designed to complement restaurants, food courts, cafes and dining spaces.",
        icon: FiCoffee,
    },
    {
        id: 8,
        number: "08",
        title: "AIRPORTS",
        subtitle: "TRANSPORT HUBS",
        description:
            "High-performance restroom partition systems designed for busy public and transportation environments.",
        icon: FiMapPin,
    },
];

/* =========================================================
   ARCHITECTURAL SVG
========================================================= */

function ArchitectureSVG() {
    return (
        <svg
            viewBox="0 0 1000 650"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-full w-full"
            aria-hidden="true"
        >
            {/* Main frame */}

            <path
                className="industry-draw"
                d="M140 540V150L500 55L860 150V540"
                stroke="#071a3d"
                strokeWidth="1"
            />

            <path
                className="industry-draw"
                d="M180 540V175L500 92L820 175V540"
                stroke="#c99618"
                strokeWidth="1"
            />

            {/* Vertical structure */}

            <path
                className="industry-draw"
                d="M280 540V150"
                stroke="#071a3d"
                strokeWidth="1"
                opacity=".35"
            />

            <path
                className="industry-draw"
                d="M390 540V120"
                stroke="#071a3d"
                strokeWidth="1"
                opacity=".25"
            />

            <path
                className="industry-draw"
                d="M610 540V120"
                stroke="#071a3d"
                strokeWidth="1"
                opacity=".25"
            />

            <path
                className="industry-draw"
                d="M720 540V150"
                stroke="#071a3d"
                strokeWidth="1"
                opacity=".35"
            />

            {/* Horizontal structure */}

            <path
                className="industry-draw"
                d="M140 270H860"
                stroke="#071a3d"
                strokeWidth="1"
                opacity=".18"
            />

            <path
                className="industry-draw"
                d="M140 380H860"
                stroke="#071a3d"
                strokeWidth="1"
                opacity=".14"
            />

            <path
                className="industry-draw"
                d="M140 540H860"
                stroke="#071a3d"
                strokeWidth="1"
                opacity=".3"
            />

            {/* Circles */}

            <circle
                className="industry-circle"
                cx="500"
                cy="300"
                r="105"
                stroke="#c99618"
                strokeWidth="1"
                opacity=".18"
            />

            <circle
                className="industry-circle"
                cx="500"
                cy="300"
                r="145"
                stroke="#c99618"
                strokeWidth="1"
                strokeDasharray="3 12"
                opacity=".12"
            />

            {/* Center lines */}

            <path
                className="industry-draw"
                d="M500 145V455"
                stroke="#c99618"
                strokeWidth="1"
                strokeDasharray="4 10"
                opacity=".15"
            />

            <path
                className="industry-draw"
                d="M345 300H655"
                stroke="#c99618"
                strokeWidth="1"
                strokeDasharray="4 10"
                opacity=".15"
            />

            {/* Roof details */}

            <path
                className="industry-draw"
                d="M140 150L180 175"
                stroke="#c99618"
                strokeWidth="2"
                opacity=".35"
            />

            <path
                className="industry-draw"
                d="M860 150L820 175"
                stroke="#c99618"
                strokeWidth="2"
                opacity=".35"
            />

            <circle
                cx="500"
                cy="300"
                r="5"
                fill="#c99618"
                opacity=".4"
            />
        </svg>
    );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function IndustriesWeServe() {
    const sectionRef = useRef(null);
    const scrollAreaRef = useRef(null);
    const architectureRef = useRef(null);
    const panelRef = useRef(null);

    const [active, setActive] = useState(0);

    const current = INDUSTRIES[active];
    const CurrentIcon = current.icon;

    /* =========================================================
       GSAP
    ========================================================= */

    useEffect(() => {
        const ctx = gsap.context(() => {
            /* =================================================
               INDUSTRY SCROLL CONTROLLER

               1200vh total
               8 industries
               ~150vh per industry
            ================================================= */

            const industryTrigger = ScrollTrigger.create({
                trigger: scrollAreaRef.current,
                start: "top top",
                end: "bottom bottom",

                onUpdate: (self) => {
                    const progress = self.progress;

                    const index = Math.min(
                        INDUSTRIES.length - 1,
                        Math.floor(
                            progress * INDUSTRIES.length
                        )
                    );

                    setActive((previous) => {
                        if (previous === index) {
                            return previous;
                        }

                        return index;
                    });
                },
            });

            /* =================================================
               HEADER REVEAL
            ================================================= */

            gsap.fromTo(
                ".industry-eyebrow",
                {
                    y: 20,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.7,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: scrollAreaRef.current,
                        start: "top 85%",
                        once: true,
                    },
                }
            );

            gsap.fromTo(
                ".industry-heading",
                {
                    y: 25,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: scrollAreaRef.current,
                        start: "top 82%",
                        once: true,
                    },
                }
            );

            gsap.fromTo(
                ".industry-intro",
                {
                    y: 20,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.7,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: scrollAreaRef.current,
                        start: "top 80%",
                        once: true,
                    },
                }
            );

            /* =================================================
               INDUSTRY LIST REVEAL
            ================================================= */

            gsap.fromTo(
                ".industry-item",
                {
                    x: -20,
                    opacity: 0,
                },
                {
                    x: 0,
                    opacity: 1,
                    duration: 0.5,
                    stagger: 0.05,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: scrollAreaRef.current,
                        start: "top 75%",
                        once: true,
                    },
                }
            );

            /* =================================================
               PANEL REVEAL
            ================================================= */

            gsap.fromTo(
                ".industry-panel",
                {
                    x: 25,
                    opacity: 0,
                },
                {
                    x: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: scrollAreaRef.current,
                        start: "top 75%",
                        once: true,
                    },
                }
            );

            /* =================================================
               SVG DRAW
            ================================================= */

            const lines =
                architectureRef.current?.querySelectorAll(
                    ".industry-draw"
                );

            if (lines?.length) {
                lines.forEach((line) => {
                    const length =
                        typeof line.getTotalLength === "function"
                            ? line.getTotalLength()
                            : 1000;

                    gsap.set(line, {
                        strokeDasharray: length,
                        strokeDashoffset: length,
                    });
                });

                gsap.to(lines, {
                    strokeDashoffset: 0,
                    duration: 2,
                    stagger: 0.04,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: scrollAreaRef.current,
                        start: "top 85%",
                        once: true,
                    },
                });
            }

            /* =================================================
               ROTATING SVG CIRCLES
            ================================================= */

            gsap.to(".industry-circle", {
                rotation: 360,
                transformOrigin: "50% 50%",
                duration: 60,
                repeat: -1,
                ease: "none",
            });

            /* =================================================
               SVG PARALLAX
            ================================================= */

            gsap.to(architectureRef.current, {
                y: -80,
                x: -30,
                ease: "none",
                scrollTrigger: {
                    trigger: scrollAreaRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 2,
                },
            });

            /* =================================================
               GRID PARALLAX
            ================================================= */

            gsap.to(".industry-grid", {
                y: -50,
                ease: "none",
                scrollTrigger: {
                    trigger: scrollAreaRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 2,
                },
            });

            /* =================================================
               GOLD LINE
            ================================================= */

            gsap.fromTo(
                ".industry-top-line",
                {
                    scaleX: 0,
                    transformOrigin: "left center",
                },
                {
                    scaleX: 1,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: scrollAreaRef.current,
                        start: "top 90%",
                        once: true,
                    },
                }
            );

            requestAnimationFrame(() => {
                ScrollTrigger.refresh();
            });

            return () => {
                industryTrigger.kill();
            };
        }, sectionRef);

        return () => {
            ctx.revert();
        };
    }, []);

    /* =========================================================
       CLICK
    ========================================================= */

    const handleIndustryChange = (index) => {
        setActive(index);

        if (panelRef.current) {
            gsap.fromTo(
                panelRef.current,
                {
                    y: 10,
                },
                {
                    y: 0,
                    duration: 0.4,
                    ease: "power3.out",
                }
            );
        }
    };

    /* =========================================================
       RENDER
    ========================================================= */

    return (
        <div
            ref={scrollAreaRef}
            className="
                relative
                h-[500vh]
                bg-[#f3f5f7]
            "
        >
            {/* =================================================
                STICKY VIEWPORT
            ================================================= */}

            <section
                ref={sectionRef}
                className="
                    sticky
                    top-0
                    h-screen
                    w-full
                    overflow-hidden
                    bg-[#f3f5f7]
                "
            >
                {/* =================================================
                    TOP GOLD LINE
                ================================================= */}

                <div
                    className="
                        industry-top-line
                        absolute
                        left-0
                        top-0
                        z-50
                        h-[3px]
                        w-full
                        bg-[#c99618]
                    "
                />

                {/* =================================================
                    BACKGROUND
                ================================================= */}

                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                    {/* GRID */}

                    <div
                        className="
                            industry-grid
                            absolute
                            inset-0
                            opacity-[0.045]
                            [background-image:linear-gradient(#071a3d_1px,transparent_1px),linear-gradient(90deg,#071a3d_1px,transparent_1px)]
                            [background-size:65px_65px]
                        "
                    />

                    {/* ARCHITECTURE */}

                    <div
                        ref={architectureRef}
                        className="
                            absolute
                            right-[-280px]
                            top-1/2
                            h-[600px]
                            w-[900px]
                            -translate-y-1/2
                            opacity-[0.12]
                            sm:right-[-230px]
                            lg:right-[-140px]
                        "
                    >
                        <ArchitectureSVG />
                    </div>

                    {/* LEFT LINE */}

                    <div
                        className="
                            absolute
                            left-[5%]
                            top-0
                            h-full
                            w-px
                            bg-[#071a3d]/[0.035]
                        "
                    />

                    {/* RIGHT LINE */}

                    <div
                        className="
                            absolute
                            right-[5%]
                            top-0
                            h-full
                            w-px
                            bg-[#071a3d]/[0.035]
                        "
                    />
                </div>

                {/* =================================================
                    CONTENT
                ================================================= */}

                <div
                    className="
                        relative
                        z-10
                        mx-auto
                        flex
                        h-full
                        w-full
                        max-w-[1450px]
                        flex-col
                        justify-center
                        px-5
                        py-5
                        sm:px-8
                        sm:py-6
                        lg:px-12
                        lg:py-5
                        xl:px-16
                    "
                >
                    {/* =================================================
                        HEADER
                    ================================================= */}

                    <div
                        className="
                            grid
                            shrink-0
                            gap-3
                            lg:grid-cols-[minmax(0,1fr)_390px]
                            lg:items-end
                            lg:gap-8
                            xl:grid-cols-[minmax(0,1fr)_430px]
                        "
                    >
                        <div>
                            {/* EYEBROW */}

                            <div
                                className="
                                    industry-eyebrow
                                    flex
                                    items-center
                                    gap-3
                                "
                            >
                                <span className="h-[2px] w-8 bg-[#c99618]" />

                                <span
                                    className="
                                        text-[9px]
                                        font-bold
                                        tracking-[0.28em]
                                        text-[#c99618]
                                        sm:text-[10px]
                                    "
                                >
                                    INDUSTRIES WE SERVE
                                </span>
                            </div>

                            {/* HEADING */}

                            <h2
                                className="
                                    industry-heading
                                    mt-2
                                    max-w-[850px]
                                    text-[38px]
                                    font-semibold
                                    leading-[0.88]
                                    tracking-[-0.055em]
                                    text-[#071a3d]
                                    sm:text-[44px]
                                    md:text-[50px]
                                    lg:text-[56px]
                                    xl:text-[62px]
                                "
                            >
                                Designed for
                                <br />

                                <span className="text-[#c99618]">
                                    every environment.
                                </span>
                            </h2>
                        </div>

                        {/* INTRO */}

                        <p
                            className="
                                industry-intro
                                max-w-[430px]
                                text-[11px]
                                leading-[1.65]
                                text-[#071a3d]/60
                                sm:text-[12px]
                                lg:text-[13px]
                                xl:text-[14px]
                            "
                        >
                            From corporate offices to high-traffic
                            public facilities, Megha Systems delivers
                            restroom partition solutions engineered
                            around the needs of every space.
                        </p>
                    </div>

                    {/* =================================================
                        MAIN
                    ================================================= */}

                    <div
                        className="
                            mt-4
                            grid
                            min-h-0
                            flex-1
                            items-center
                            gap-5
                            lg:mt-5
                            lg:grid-cols-[400px_minmax(0,1fr)]
                            lg:gap-8
                            xl:grid-cols-[420px_minmax(0,1fr)]
                            xl:gap-10
                        "
                    >
                        {/* =================================================
                            INDUSTRY LIST
                        ================================================= */}

                        <div className="industry-list min-w-0">
                            {INDUSTRIES.map((industry, index) => {
                                const Icon = industry.icon;
                                const isActive = active === index;

                                return (
                                    <button
                                        key={industry.id}
                                        type="button"
                                        onClick={() =>
                                            handleIndustryChange(index)
                                        }
                                        className={`
                                            industry-item
                                            group
                                            relative
                                            flex
                                            min-h-[47px]
                                            w-full
                                            items-center
                                            gap-3
                                            border-b
                                            border-[#071a3d]/10
                                            py-1.5
                                            text-left
                                            transition-all
                                            duration-300

                                            ${isActive
                                                ? "bg-white px-4 shadow-sm"
                                                : "px-1 hover:bg-white/70 hover:px-3"
                                            }
                                        `}
                                    >
                                        {/* NUMBER */}

                                        <span
                                            className={`
                                                w-8
                                                shrink-0
                                                text-[10px]
                                                font-bold
                                                tracking-[0.18em]

                                                ${isActive
                                                    ? "text-[#c99618]"
                                                    : "text-[#071a3d]/30"
                                                }
                                            `}
                                        >
                                            {industry.number}
                                        </span>

                                        {/* ICON */}

                                        <span
                                            className={`
                                                flex
                                                h-8
                                                w-8
                                                shrink-0
                                                items-center
                                                justify-center
                                                rounded-full
                                                border
                                                transition-all
                                                duration-300

                                                ${isActive
                                                    ? "border-[#c99618] bg-[#071a3d] text-white"
                                                    : "border-[#071a3d]/15 text-[#071a3d]/50 group-hover:border-[#c99618] group-hover:text-[#c99618]"
                                                }
                                            `}
                                        >
                                            <Icon
                                                size={14}
                                                strokeWidth={1.5}
                                            />
                                        </span>

                                        {/* TEXT */}

                                        <span className="min-w-0 flex-1">
                                            <span
                                                className={`
                                                    block
                                                    truncate
                                                    text-[11px]
                                                    font-bold
                                                    tracking-[0.12em]
                                                    sm:text-[12px]
                                                    lg:text-[13px]

                                                    ${isActive
                                                        ? "text-[#071a3d]"
                                                        : "text-[#071a3d]/60"
                                                    }
                                                `}
                                            >
                                                {industry.title}
                                            </span>

                                            <span
                                                className="
                                                    mt-0.5
                                                    block
                                                    truncate
                                                    text-[8px]
                                                    font-semibold
                                                    tracking-[0.13em]
                                                    text-[#071a3d]/35
                                                    sm:text-[9px]
                                                "
                                            >
                                                {industry.subtitle}
                                            </span>
                                        </span>

                                        {/* ARROW */}

                                        <FiArrowUpRight
                                            size={16}
                                            className={`
                                                shrink-0
                                                transition-all
                                                duration-300

                                                ${isActive
                                                    ? "text-[#c99618] opacity-100"
                                                    : "text-[#071a3d]/20 opacity-0 group-hover:text-[#c99618] group-hover:opacity-100"
                                                }
                                            `}
                                        />

                                        {/* ACTIVE LINE */}

                                        {isActive && (
                                            <motion.span
                                                layoutId="industry-active-line"
                                                className="
                                                    absolute
                                                    left-0
                                                    top-0
                                                    h-full
                                                    w-[3px]
                                                    bg-[#c99618]
                                                "
                                            />
                                        )}
                                    </button>
                                );
                            })}
                        </div>

                        {/* =================================================
                            ACTIVE PANEL
                        ================================================= */}

                        <div
                            ref={panelRef}
                            className="
                                industry-panel
                                relative
                                h-[330px]
                                overflow-hidden
                                rounded-[3px]
                                bg-[#071a3d]
                                p-6
                                shadow-xl
                                sm:h-[350px]
                                sm:p-7
                                lg:h-[365px]
                                lg:p-8
                                xl:h-[380px]
                                xl:p-9
                            "
                        >
                            {/* PANEL GRID */}

                            <div
                                className="
                                    pointer-events-none
                                    absolute
                                    inset-0
                                    opacity-[0.055]
                                    [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)]
                                    [background-size:42px_42px]
                                "
                            />

                            {/* LARGE CIRCLE */}

                            <div
                                className="
                                    pointer-events-none
                                    absolute
                                    -right-24
                                    -top-24
                                    h-[330px]
                                    w-[330px]
                                    rounded-full
                                    border
                                    border-[#c99618]/20
                                "
                            />

                            {/* SMALL CIRCLE */}

                            <div
                                className="
                                    pointer-events-none
                                    absolute
                                    -right-5
                                    -top-5
                                    h-[220px]
                                    w-[220px]
                                    rounded-full
                                    border
                                    border-[#c99618]/10
                                "
                            />

                            {/* DIAGONAL */}

                            <div
                                className="
                                    pointer-events-none
                                    absolute
                                    right-[24%]
                                    top-[-30%]
                                    h-[160%]
                                    w-px
                                    rotate-[28deg]
                                    bg-white/[0.045]
                                "
                            />

                            {/* =================================================
                                CONTENT
                            ================================================= */}

                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={current.id}
                                    initial={{
                                        opacity: 0,
                                        y: 18,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    exit={{
                                        opacity: 0,
                                        y: -12,
                                    }}
                                    transition={{
                                        duration: 0.45,
                                        ease: [0.22, 1, 0.36, 1],
                                    }}
                                    className="
                                        relative
                                        z-10
                                        flex
                                        h-full
                                        flex-col
                                        justify-between
                                    "
                                >
                                    {/* TOP */}

                                    <div className="flex items-start justify-between">
                                        <span
                                            className="
                                                text-[10px]
                                                font-bold
                                                tracking-[0.28em]
                                                text-[#c99618]
                                            "
                                        >
                                            {current.number} / 08
                                        </span>

                                        <div
                                            className="
                                                flex
                                                h-11
                                                w-11
                                                items-center
                                                justify-center
                                                rounded-full
                                                border
                                                border-[#c99618]/40
                                                text-[#c99618]
                                                sm:h-12
                                                sm:w-12
                                            "
                                        >
                                            <CurrentIcon
                                                size={19}
                                                strokeWidth={1.4}
                                            />
                                        </div>
                                    </div>

                                    {/* CENTER */}

                                    <div className="max-w-[650px]">
                                        <p
                                            className="
                                                text-[9px]
                                                font-semibold
                                                tracking-[0.28em]
                                                text-white/40
                                                sm:text-[10px]
                                            "
                                        >
                                            {current.subtitle}
                                        </p>

                                        <h3
                                            className="
                                                mt-2
                                                text-[40px]
                                                font-semibold
                                                leading-[0.88]
                                                tracking-[-0.05em]
                                                text-white
                                                sm:text-[48px]
                                                md:text-[54px]
                                                lg:text-[58px]
                                                xl:text-[64px]
                                            "
                                        >
                                            {current.title}
                                        </h3>

                                        <p
                                            className="
                                                mt-4
                                                max-w-[560px]
                                                text-[11px]
                                                leading-[1.7]
                                                text-white/55
                                                sm:text-[12px]
                                                lg:text-[13px]
                                            "
                                        >
                                            {current.description}
                                        </p>
                                    </div>

                                    {/* BOTTOM */}

                                    <div
                                        className="
                                            flex
                                            items-center
                                            justify-between
                                            gap-4
                                            border-t
                                            border-white/10
                                            pt-4
                                        "
                                    >
                                        <div>
                                            <span
                                                className="
                                                    text-[9px]
                                                    font-bold
                                                    tracking-[0.22em]
                                                    text-[#c99618]
                                                "
                                            >
                                                MEGHA SYSTEMS
                                            </span>

                                            <p
                                                className="
                                                    
                                                    text-[12px]
                                                    text-white/40
                                                "
                                            >
                                                Premium restroom solutions
                                            </p>
                                        </div>

                                        <Link
                                            href="/contact"
                                            className="
                                                group
                                                inline-flex
                                                h-9
                                                items-center
                                                gap-2
                                                border
                                                border-[#c99618]
                                                px-4
                                                text-[10px]
                                                font-bold
                                                tracking-[0.12em]
                                                text-white
                                                transition-all
                                                duration-300
                                                hover:bg-[#c99618]
                                                hover:text-[#071a3d]
                                            "
                                        >
                                            DISCUSS PROJECT

                                            <FiArrowUpRight
                                                size={14}
                                                className="
                                                    transition-transform
                                                    duration-300
                                                    group-hover:translate-x-1
                                                "
                                            />
                                        </Link>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* =================================================
                        BOTTOM BAR
                    ================================================= */}

                    <div
                        className="
                            mt-3
                            flex
                            shrink-0
                            items-center
                            justify-between
                            border-t
                            border-[#071a3d]/10
                            pt-2
                        "
                    >
                        <p
                            className="
                                text-[8px]
                                font-bold
                                tracking-[0.18em]
                                text-[#071a3d]/30
                                sm:text-[9px]
                            "
                        >
                            COMMERCIAL • INSTITUTIONAL • INDUSTRIAL
                        </p>

                        <p
                            className="
                                text-[8px]
                                font-semibold
                                tracking-[0.16em]
                                text-[#c99618]
                                sm:text-[9px]
                            "
                        >
                            BUILT FOR PERFORMANCE
                        </p>
                    </div>
                </div>

                {/* =================================================
                    SCROLL INDICATOR
                ================================================= */}

                {/* <div
                    className="
                        absolute
                        bottom-3
                        left-1/2
                        hidden
                        -translate-x-1/2
                        flex-col
                        items-center
                        gap-1
                        lg:flex
                    "
                >
                    <span
                        className="
                            text-[7px]
                            font-bold
                            tracking-[0.3em]
                            text-[#071a3d]/25
                        "
                    >
                        SCROLL
                    </span>

                    <motion.span
                        animate={{
                            y: [0, 5, 0],
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="
                            h-5
                            w-px
                            bg-[#c99618]
                        "
                    />
                </div> */}
            </section>
        </div>
    );
}