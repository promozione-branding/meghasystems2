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
   INDUSTRIES + PROJECTS
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

        project: {
            name: "Business Park",
            location: "Gurgaon",
            image: "/WhatsApp Image 2026-09-14 at 5.10.25 PM.jpeg",
        },
    },

    {
        id: 2,
        number: "02",
        title: "STADIUM",
        subtitle: "SPORTS & PUBLIC SPACES",
        description:
            "Durable, hygienic and high-performance washroom solutions designed to handle heavy footfall in sports and public environments.",
        icon: FiActivity,

        project: {
            name: "Indira Gandhi Stadium",
            location: "Delhi",
            image: "/ChatGPT Image Sep 14, 2026, 05_54_13 PM.png",
        },
    },

    {
        id: 3,
        number: "03",
        title: "HOTELS",
        subtitle: "HOSPITALITY",
        description:
            "Elegant cubicle systems that combine premium aesthetics, privacy and long-term performance for hospitality spaces.",
        icon: FiHome,

        project: {
            name: "HOTEL NH8",
            location: "Jaipur, India",
            image: "/ChatGPT Image Sep 14, 2026, 05_21_14 PM.png",
        },
    },

    {
        id: 4,
        number: "04",
        title: "MALLS & RETAIL",
        subtitle: "HIGH-TRAFFIC SPACES",
        description:
            "Robust restroom systems engineered for high visitor volumes while maintaining a clean and premium appearance.",
        icon: FiShoppingBag,

        project: {
            name: "Pacific Mall",
            location: "Jasola, Delhi",
            image: "/ChatGPT Image Sep 14, 2026, 05_23_25 PM.png",
        },
    },

    {
        id: 5,
        number: "05",
        title: "FACTORIES",
        subtitle: "INDUSTRIAL FACILITIES",
        description:
            "Heavy-duty and practical washroom partition systems built for industrial and high-usage environments.",
        icon: FiTruck,

        project: {
            name: "Yamaha Motors",
            location: "Delhi",
            image: "/ChatGPT Image Sep 14, 2026, 05_29_02 PM.png",
        },
    },

    {
        id: 6,
        number: "06",
        title: "EDUCATION",
        subtitle: "SCHOOLS & INSTITUTIONS",
        description:
            "Safe, durable and practical cubicle solutions suitable for schools, colleges and institutional facilities.",
        icon: FiBookOpen,

        project: {
            name: "St. Xaviers School",
            location: "Noida",
            image: "/ChatGPT Image Sep 14, 2026, 05_32_01 PM.png",
        },
    },

    {
        id: 7,
        number: "07",
        title: "RESTAURANTS",
        subtitle: "FOOD & DINING",
        description:
            "Contemporary restroom solutions designed to complement restaurants, food courts, cafes and dining spaces.",
        icon: FiCoffee,

        project: {
            name: "Great Khali Dhaba",
            location: "Haryana",
            image: "/ChatGPT Image Sep 14, 2026, 05_32_46 PM.png",
        },
    },

    {
        id: 8,
        number: "08",
        title: "AIRPORTS",
        subtitle: "TRANSPORT HUBS",
        description:
            "High-performance restroom partition systems designed for busy public and transportation environments.",
        icon: FiMapPin,

        project: {
            name: "Rajeev Gandhi Bhawan",
            location: "Delhi Airport",
            image: "/ChatGPT Image Sep 14, 2026, 05_52_14 PM.png",
        },
    },
];

/* =========================================================
   ADDITIONAL PROJECTS
========================================================= */

const ADDITIONAL_PROJECTS = [
    {
        name: "Urbtech Trade Centre",
        location: "Noida",
        image: "/projects/urbtech-trade-centre.webp",
        industry: "Corporate",
    },
    {
        name: "Spaze Corporate Park",
        location: "Gurgaon",
        image: "/projects/spaze-corporate-park.webp",
        industry: "Corporate",
    },
    {
        name: "JBM Global School",
        location: "Noida",
        image: "/projects/jbm-global-school.webp",
        industry: "Education",
    },
    {
        name: "Indira Gandhi Stadium",
        location: "Delhi",
        image: "/projects/indira-gandhi-stadium.webp",
        industry: "Institutional",
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
   PROJECT IMAGE
========================================================= */

function ProjectImage({ project }) {
    if (!project) {
        return (
            <div className="relative flex h-full min-h-[180px] items-center justify-center bg-[#0a224d]">
                <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:35px_35px]" />

                <div className="relative text-center">
                    <FiHome
                        size={34}
                        strokeWidth={1}
                        className="mx-auto text-[#c99618]"
                    />

                    <p className="mt-4 text-[9px] font-bold tracking-[0.25em] text-white/40">
                        PROJECT IMAGE
                    </p>

                    <p className="mt-2 text-xs text-white/30">
                        Coming soon
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="relative h-full min-h-[180px] overflow-hidden bg-[#dfe3e6]">
            {/* Image */}

            <img
                src={project.image}
                alt={`${project.name} - ${project.location}`}
                className="
                    absolute
                    inset-0
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-[1.2s]
                    ease-out
                    group-hover:scale-[1.05]
                "
            />

            {/* Image overlay */}

            <div className="absolute inset-0 bg-gradient-to-t from-[#071a3d]/85 via-[#071a3d]/10 to-transparent" />

            {/* Gold corner */}

            <div className="absolute right-0 top-0 h-16 w-16 border-b border-l border-[#c99618]/60" />

            {/* Project label */}

            <div className="absolute bottom-5 left-5 right-5">
                <p className="text-[8px] font-bold tracking-[0.3em] text-[#c99618]">
                    FEATURED PROJECT
                </p>

                <h4 className="mt-1 text-xl font-semibold tracking-tight text-white sm:text-2xl">
                    {project.name}
                </h4>

                <div className="mt-1 flex items-center gap-2">
                    <FiMapPin
                        size={11}
                        className="text-[#c99618]"
                    />

                    <span className="text-[10px] tracking-[0.08em] text-white/60">
                        {project.location}
                    </span>
                </div>
            </div>
        </div>
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

            /* Header */

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

            /* Industry list */

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

            /* Panel */

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

            /* SVG draw */

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

            /* Rotating circles */

            gsap.to(".industry-circle", {
                rotation: 360,
                transformOrigin: "50% 50%",
                duration: 60,
                repeat: -1,
                ease: "none",
            });

            /* SVG parallax */

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

            /* Grid */

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

            /* Gold line */

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
       CHANGE INDUSTRY
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
                    GOLD LINE
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
                            <div className="industry-eyebrow flex items-center gap-3">
                                <span className="h-[2px] w-8 bg-[#c99618]" />

                                <span className="text-[9px] font-bold tracking-[0.28em] text-[#c99618] sm:text-[10px]">
                                    INDUSTRIES WE SERVE
                                </span>
                            </div>

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
                            From corporate offices to high-traffic public
                            facilities, Megha Systems delivers restroom
                            partition solutions engineered around the needs
                            of every space.
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
                            ACTIVE PROJECT PANEL
                        ================================================= */}

                        <div
                            ref={panelRef}
                            className="
                                industry-panel
                                relative
                                h-[360px]
                                overflow-hidden
                                rounded-[3px]
                                bg-[#071a3d]
                                p-3
                                shadow-xl
                                sm:h-[390px]
                                sm:p-4
                                lg:h-[405px]
                                lg:p-5
                                xl:h-[420px]
                            "
                        >
                            {/* Panel background */}

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
                                    "
                                >
                                    {/* TOP */}

                                    <div className="flex items-center justify-between px-2 pb-3">
                                        <div>
                                            <span className="text-[9px] font-bold tracking-[0.28em] text-[#c99618]">
                                                {current.number} / 08
                                            </span>

                                            <p className="mt-1 text-[8px] font-semibold tracking-[0.22em] text-white/35">
                                                {current.subtitle}
                                            </p>
                                        </div>

                                        <div
                                            className="
                                                flex
                                                h-10
                                                w-10
                                                items-center
                                                justify-center
                                                rounded-full
                                                border
                                                border-[#c99618]/40
                                                text-[#c99618]
                                                sm:h-11
                                                sm:w-11
                                            "
                                        >
                                            <CurrentIcon
                                                size={18}
                                                strokeWidth={1.4}
                                            />
                                        </div>
                                    </div>

                                    {/* PROJECT IMAGE */}

                                    <div className="group relative min-h-0 flex-1 overflow-hidden rounded-[2px]">
                                        <ProjectImage
                                            project={current.project}
                                        />

                                        {/* Industry badge */}

                                        <div
                                            className="
                                                absolute
                                                left-4
                                                top-4
                                                z-20
                                                border
                                                border-white/20
                                                bg-[#071a3d]/75
                                                px-3
                                                py-1.5
                                                backdrop-blur-md
                                            "
                                        >
                                            <span className="text-[7px] font-bold tracking-[0.22em] text-white/70">
                                                {current.title}
                                            </span>
                                        </div>
                                    </div>

                                    {/* BOTTOM */}

                                    <div
                                        className="
                                            flex
                                            items-center
                                            justify-between
                                            gap-4
                                            px-2
                                            pt-3
                                        "
                                    >
                                        <div>
                                            <span className="text-[8px] font-bold tracking-[0.22em] text-[#c99618]">
                                                MEGHA SYSTEMS
                                            </span>

                                            <p className="mt-1 text-[10px] text-white/35">
                                                Premium restroom solutions
                                            </p>
                                        </div>

                                        <Link
                                            href="/contact"
                                            className="
                                                group
                                                inline-flex
                                                h-9
                                                shrink-0
                                                items-center
                                                gap-2
                                                border
                                                border-[#c99618]
                                                px-4
                                                text-[9px]
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
                                                size={13}
                                                className="
                                                    transition-transform
                                                    duration-300
                                                    group-hover:translate-x-1
                                                    group-hover:-translate-y-0.5
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
            </section>
        </div>
    );
}