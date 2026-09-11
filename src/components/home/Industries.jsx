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
            {/* Main architectural frame */}

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

            {/* Structural verticals */}

            <path
                className="industry-draw"
                d="M280 540V150"
                stroke="#071a3d"
                strokeWidth="1"
                opacity=".45"
            />

            <path
                className="industry-draw"
                d="M390 540V120"
                stroke="#071a3d"
                strokeWidth="1"
                opacity=".35"
            />

            <path
                className="industry-draw"
                d="M610 540V120"
                stroke="#071a3d"
                strokeWidth="1"
                opacity=".35"
            />

            <path
                className="industry-draw"
                d="M720 540V150"
                stroke="#071a3d"
                strokeWidth="1"
                opacity=".45"
            />

            {/* Horizontal structure */}

            <path
                className="industry-draw"
                d="M140 270H860"
                stroke="#071a3d"
                strokeWidth="1"
                opacity=".25"
            />

            <path
                className="industry-draw"
                d="M140 380H860"
                stroke="#071a3d"
                strokeWidth="1"
                opacity=".18"
            />

            <path
                className="industry-draw"
                d="M140 540H860"
                stroke="#071a3d"
                strokeWidth="1"
                opacity=".4"
            />

            {/* Central circles */}

            <circle
                className="industry-circle"
                cx="500"
                cy="300"
                r="105"
                stroke="#c99618"
                strokeWidth="1"
                opacity=".25"
            />

            <circle
                className="industry-circle"
                cx="500"
                cy="300"
                r="145"
                stroke="#c99618"
                strokeWidth="1"
                strokeDasharray="3 12"
                opacity=".18"
            />

            {/* Center cross */}

            <path
                className="industry-draw"
                d="M500 145V455"
                stroke="#c99618"
                strokeWidth="1"
                strokeDasharray="4 10"
                opacity=".2"
            />

            <path
                className="industry-draw"
                d="M345 300H655"
                stroke="#c99618"
                strokeWidth="1"
                strokeDasharray="4 10"
                opacity=".2"
            />

            {/* Roof details */}

            <path
                className="industry-draw"
                d="M140 150L180 175"
                stroke="#c99618"
                strokeWidth="2"
                opacity=".45"
            />

            <path
                className="industry-draw"
                d="M860 150L820 175"
                stroke="#c99618"
                strokeWidth="2"
                opacity=".45"
            />

            {/* Center marker */}

            <circle
                cx="500"
                cy="300"
                r="5"
                fill="#c99618"
                opacity=".5"
            />
        </svg>
    );
}

/* =========================================================
   MAIN
========================================================= */

export default function IndustriesWeServe() {
    const sectionRef = useRef(null);
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
            /* -------------------------------------------------
               INITIAL STATES

               IMPORTANT:
               We explicitly set visibility here and animate
               TO visible. This prevents items disappearing.
            ------------------------------------------------- */

            gsap.set(".industry-eyebrow", {
                autoAlpha: 0,
                y: 20,
            });

            gsap.set(".industry-heading", {
                autoAlpha: 0,
                y: 30,
            });

            gsap.set(".industry-intro", {
                autoAlpha: 0,
                y: 20,
            });

            gsap.set(".industry-item", {
                autoAlpha: 0,
                x: -30,
            });

            gsap.set(".industry-panel", {
                autoAlpha: 0,
                y: 35,
            });

            /* -------------------------------------------------
               HEADER REVEAL
            ------------------------------------------------- */

            const headerTl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 82%",
                    once: true,
                },
            });

            headerTl
                .to(".industry-eyebrow", {
                    autoAlpha: 1,
                    y: 0,
                    duration: 0.55,
                    ease: "power3.out",
                })
                .to(
                    ".industry-heading",
                    {
                        autoAlpha: 1,
                        y: 0,
                        duration: 0.75,
                        ease: "power3.out",
                    },
                    "-=0.25"
                )
                .to(
                    ".industry-intro",
                    {
                        autoAlpha: 1,
                        y: 0,
                        duration: 0.55,
                        ease: "power3.out",
                    },
                    "-=0.4"
                );

            /* -------------------------------------------------
               INDUSTRY LIST

               ALL 8 ITEMS REVEAL
               No item remains hidden.
            ------------------------------------------------- */

            gsap.to(".industry-item", {
                autoAlpha: 1,
                x: 0,
                duration: 0.55,
                stagger: 0.09,
                ease: "power3.out",
                clearProps: "opacity,visibility,transform",
                scrollTrigger: {
                    trigger: ".industry-list",
                    start: "top 88%",
                    once: true,
                },
            });

            /* -------------------------------------------------
               PANEL REVEAL
            ------------------------------------------------- */

            gsap.to(".industry-panel", {
                autoAlpha: 1,
                y: 0,
                duration: 0.8,
                ease: "power3.out",
                clearProps: "opacity,visibility,transform",
                scrollTrigger: {
                    trigger: panelRef.current,
                    start: "top 88%",
                    once: true,
                },
            });

            /* -------------------------------------------------
               SVG DRAW
            ------------------------------------------------- */

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
                    duration: 1.8,
                    stagger: 0.04,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 78%",
                        once: true,
                    },
                });
            }

            /* -------------------------------------------------
               SVG CIRCLE ROTATION
            ------------------------------------------------- */

            gsap.to(".industry-circle", {
                rotation: 360,
                transformOrigin: "50% 50%",
                duration: 50,
                repeat: -1,
                ease: "none",
            });

            /* -------------------------------------------------
               ARCHITECTURE PARALLAX
            ------------------------------------------------- */

            gsap.to(architectureRef.current, {
                y: -100,
                x: -35,
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1.4,
                },
            });

            /* -------------------------------------------------
               GRID PARALLAX
            ------------------------------------------------- */

            gsap.to(".industry-grid", {
                y: -45,
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1.2,
                },
            });

            /* -------------------------------------------------
               GOLD TOP LINE
            ------------------------------------------------- */

            gsap.fromTo(
                ".industry-top-line",
                {
                    scaleX: 0,
                    transformOrigin: "left center",
                },
                {
                    scaleX: 1,
                    duration: 1.1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 90%",
                        once: true,
                    },
                }
            );
        }, sectionRef);

        return () => {
            ctx.revert();
            ScrollTrigger.refresh();
        };
    }, []);

    /* =========================================================
       CHANGE ACTIVE INDUSTRY
    ========================================================= */

    const handleIndustryChange = (index) => {
        setActive(index);

        requestAnimationFrame(() => {
            if (panelRef.current) {
                gsap.fromTo(
                    panelRef.current,
                    {
                        y: 12,
                    },
                    {
                        y: 0,
                        duration: 0.45,
                        ease: "power3.out",
                    }
                );
            }
        });
    };

    return (
        <section
            ref={sectionRef}
            className="
                relative
                overflow-hidden
                bg-[#f3f5f7]
                py-10
                sm:py-12
                lg:py-16
            "
        >
            {/* =================================================
                GOLD TOP LINE
            ================================================= */}

            <div
                className="
                    industry-top-line
                    absolute
                    left-0
                    top-0
                    h-[2px]
                    w-full
                    origin-left
                    bg-[#c99618]
                "
            />

            {/* =================================================
                BACKGROUND
            ================================================= */}

            <div className="pointer-events-none absolute inset-0">
                {/* GRID */}

                <div
                    className="
                        industry-grid
                        absolute
                        inset-0
                        opacity-[0.035]
                        [background-image:linear-gradient(#071a3d_1px,transparent_1px),linear-gradient(90deg,#071a3d_1px,transparent_1px)]
                        [background-size:65px_65px]
                    "
                />

                {/* ARCHITECTURE */}

                <div
                    ref={architectureRef}
                    className="
                        absolute
                        right-[-220px]
                        top-[80px]
                        h-[570px]
                        w-[900px]
                        opacity-[0.15]
                        sm:right-[-170px]
                        lg:right-[-100px]
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
                    max-w-[1320px]
                    px-5
                    sm:px-7
                    lg:px-10
                "
            >
                {/* =================================================
                    HEADER
                ================================================= */}

                <div
                    className="
                        grid
                        gap-5
                        lg:grid-cols-[1fr_400px]
                        lg:items-end
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
                                    text-[8px]
                                    font-semibold
                                    tracking-[0.3em]
                                    text-[#c99618]
                                "
                            >
                                INDUSTRIES WE SERVE
                            </span>
                        </div>

                        {/* HEADING */}

                        <h2
                            className="
                                industry-heading
                                mt-3
                                max-w-[700px]
                                text-[36px]
                                font-semibold
                                leading-[0.95]
                                tracking-[-0.045em]
                                text-[#071a3d]
                                sm:text-[46px]
                                lg:text-[58px]
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
                            max-w-[400px]
                            text-[11px]
                            leading-[1.7]
                            text-[#071a3d]/55
                            lg:pb-1
                        "
                    >
                        From corporate offices to high-traffic public
                        facilities, Megha Systems delivers restroom
                        partition solutions engineered around the needs
                        of every space.
                    </p>
                </div>

                {/* =================================================
                    MAIN CONTENT
                ================================================= */}

                <div
                    className="
                        mt-8
                        grid
                        items-start
                        gap-6
                        lg:grid-cols-[390px_minmax(0,1fr)]
                        lg:gap-10
                    "
                >
                    {/* =================================================
                        INDUSTRY LIST
                    ================================================= */}

                    <div
                        className="
                            industry-list
                            w-full
                            min-w-0
                        "
                    >
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
                                        min-h-[58px]
                                        w-full
                                        items-center
                                        gap-3
                                        border-b
                                        border-[#071a3d]/10
                                        py-3
                                        text-left
                                        transition-all
                                        duration-300
                                        ${
                                            isActive
                                                ? "bg-white px-4"
                                                : "px-0 hover:bg-white/60 hover:px-3"
                                        }
                                    `}
                                >
                                    {/* NUMBER */}

                                    <span
                                        className={`
                                            w-7
                                            shrink-0
                                            text-[8px]
                                            font-semibold
                                            tracking-[0.18em]
                                            ${
                                                isActive
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
                                            ${
                                                isActive
                                                    ? "border-[#c99618] bg-[#071a3d] text-white"
                                                    : "border-[#071a3d]/15 text-[#071a3d]/55 group-hover:border-[#c99618] group-hover:text-[#c99618]"
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
                                                text-[10px]
                                                font-semibold
                                                tracking-[0.13em]
                                                ${
                                                    isActive
                                                        ? "text-[#071a3d]"
                                                        : "text-[#071a3d]/65"
                                                }
                                            `}
                                        >
                                            {industry.title}
                                        </span>

                                        <span
                                            className="
                                                mt-0.5
                                                block
                                                text-[7px]
                                                font-medium
                                                tracking-[0.16em]
                                                text-[#071a3d]/35
                                            "
                                        >
                                            {industry.subtitle}
                                        </span>
                                    </span>

                                    {/* ARROW */}

                                    <FiArrowUpRight
                                        size={15}
                                        className={`
                                            shrink-0
                                            transition-all
                                            duration-300
                                            ${
                                                isActive
                                                    ? "translate-x-0 text-[#c99618] opacity-100"
                                                    : "-translate-x-2 text-[#071a3d]/20 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                                            }
                                        `}
                                    />

                                    {/* ACTIVE GOLD LINE */}

                                    {isActive && (
                                        <span
                                            className="
                                                absolute
                                                left-0
                                                top-0
                                                h-full
                                                w-[2px]
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
                            min-h-[360px]
                            overflow-hidden
                            rounded-[3px]
                            bg-[#071a3d]
                            p-6
                            sm:min-h-[400px]
                            sm:p-8
                            lg:min-h-[430px]
                            lg:p-9
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

                        {/* CIRCLE */}

                        <div
                            className="
                                pointer-events-none
                                absolute
                                -right-24
                                -top-24
                                h-[320px]
                                w-[320px]
                                rounded-full
                                border
                                border-[#c99618]/20
                            "
                        />

                        <div
                            className="
                                pointer-events-none
                                absolute
                                -right-5
                                -top-5
                                h-[210px]
                                w-[210px]
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

                        {/* ACTIVE CONTENT */}

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={current.id}
                                initial={{
                                    opacity: 0,
                                    y: 20,
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                exit={{
                                    opacity: 0,
                                    y: -15,
                                }}
                                transition={{
                                    duration: 0.35,
                                    ease: "easeOut",
                                }}
                                className="
                                    relative
                                    z-10
                                    flex
                                    min-h-[310px]
                                    flex-col
                                    justify-between
                                "
                            >
                                {/* TOP */}

                                <div className="flex items-start justify-between">
                                    <span
                                        className="
                                            text-[8px]
                                            font-semibold
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
                                        "
                                    >
                                        <CurrentIcon
                                            size={18}
                                            strokeWidth={1.4}
                                        />
                                    </div>
                                </div>

                                {/* CONTENT */}

                                <div className="max-w-[580px]">
                                    <p
                                        className="
                                            text-[8px]
                                            font-semibold
                                            tracking-[0.3em]
                                            text-white/35
                                        "
                                    >
                                        {current.subtitle}
                                    </p>

                                    <h3
                                        className="
                                            mt-2
                                            text-[38px]
                                            font-semibold
                                            leading-[0.9]
                                            tracking-[-0.045em]
                                            text-white
                                            sm:text-[50px]
                                            lg:text-[62px]
                                        "
                                    >
                                        {current.title}
                                    </h3>

                                    <p
                                        className="
                                            mt-5
                                            max-w-[500px]
                                            text-[10px]
                                            leading-[1.8]
                                            text-white/50
                                            sm:text-[11px]
                                        "
                                    >
                                        {current.description}
                                    </p>
                                </div>

                                {/* BOTTOM */}

                                <div
                                    className="
                                        flex
                                        flex-col
                                        gap-4
                                        border-t
                                        border-white/10
                                        pt-4
                                        sm:flex-row
                                        sm:items-center
                                        sm:justify-between
                                    "
                                >
                                    <div>
                                        <span
                                            className="
                                                text-[7px]
                                                font-semibold
                                                tracking-[0.25em]
                                                text-[#c99618]
                                            "
                                        >
                                            MEGHA SYSTEMS
                                        </span>

                                        <p
                                            className="
                                                mt-1
                                                text-[8px]
                                                text-white/30
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
                                            justify-center
                                            gap-3
                                            border
                                            border-[#c99618]
                                            px-4
                                            text-[7px]
                                            font-semibold
                                            tracking-[0.15em]
                                            text-white
                                            transition-all
                                            duration-300
                                            hover:bg-[#c99618]
                                            hover:text-[#071a3d]
                                        "
                                    >
                                        DISCUSS YOUR PROJECT

                                        <FiArrowUpRight
                                            size={13}
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
                    BOTTOM
                ================================================= */}

                <div
                    className="
                        mt-6
                        flex
                        flex-col
                        gap-2
                        border-t
                        border-[#071a3d]/10
                        pt-4
                        sm:flex-row
                        sm:items-center
                        sm:justify-between
                    "
                >
                    <p
                        className="
                            text-[7px]
                            font-semibold
                            tracking-[0.22em]
                            text-[#071a3d]/35
                        "
                    >
                        COMMERCIAL • INSTITUTIONAL • INDUSTRIAL
                    </p>

                    <p
                        className="
                            text-[7px]
                            tracking-[0.18em]
                            text-[#c99618]
                        "
                    >
                        BUILT FOR PERFORMANCE
                    </p>
                </div>
            </div>
        </section>
    );
}