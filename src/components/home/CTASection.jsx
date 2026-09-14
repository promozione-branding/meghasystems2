"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

import {
    FiArrowUpRight,
    FiDownload,
    FiFileText,
    FiPhone,
    FiShield,
    FiSettings,
    FiCheck,
} from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

/* =========================================================
   FEATURES
========================================================= */

const features = [
    {
        icon: FiShield,
        title: "DURABLE",
        subtitle: "MATERIALS",
    },
    {
        icon: FiSettings,
        title: "CUSTOM",
        subtitle: "CONFIGURATIONS",
    },
    {
        icon: FiCheck,
        title: "PROFESSIONAL",
        subtitle: "INSTALLATION",
    },
];

/* =========================================================
   CTA ACTIONS
========================================================= */

const actions = [
    {
        title: "Instant Quote",
        icon: FiFileText,
        href: "/contact?type=quote",
        primary: true,
    },
    {
        title: "Contact Us",
        icon: FiPhone,
        href: "/contact",
        primary: false,
    },
    {
        title: "Download Brochure",
        icon: FiDownload,
        href: "/brochure.pdf",
        primary: false,
        download: true,
    },
];

/* =========================================================
   PREMIUM CUBICLE SVG
   5 SUPPORTS + 4 DOORS
========================================================= */

function CubicleIllustration() {
    /*
      IMPORTANT:

      5 vertical supports:
      185
      415
      645
      875
      1105

      4 yellow doors:
      Door 1 -> between support 1 & 2
      Door 2 -> between support 2 & 3
      Door 3 -> between support 3 & 4
      Door 4 -> between support 4 & 5

      The FIRST support remains, but its yellow door
      has intentionally been removed.
    */

    const supports = [
        185,
        415,
        645,
        875,
        1105,
    ];

    const doors = [
        {
            x: 255,
            top: 145,
            right: 420,
            bottom: 414,
            lockX: 278,
            lockY: 314,
        },
        {
            x: 485,
            top: 145,
            right: 650,
            bottom: 415,
            lockX: 508,
            lockY: 316,
        },
        {
            x: 715,
            top: 145,
            right: 880,
            bottom: 416,
            lockX: 738,
            lockY: 318,
        },
        {
            x: 945,
            top: 145,
            right: 1110,
            bottom: 417,
            lockX: 968,
            lockY: 320,
        },
    ];

    return (
        <svg
            viewBox="145 55 1025 415"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            className="
                block
                h-auto
                w-full
                max-w-none
                overflow-visible
            "
            preserveAspectRatio="xMidYMid meet"
            role="img"
            aria-label="Premium toilet cubicle partition system"
        >
            <defs>
                {/* =====================================================
                    YELLOW PANEL
                ====================================================== */}

                <linearGradient
                    id="ctaYellowPanel"
                    x1="0"
                    y1="0"
                    x2="1"
                    y2="1"
                >
                    <stop
                        offset="0%"
                        stopColor="#FFE52A"
                    />

                    <stop
                        offset="45%"
                        stopColor="#FFD900"
                    />

                    <stop
                        offset="100%"
                        stopColor="#F2C900"
                    />
                </linearGradient>

                {/* =====================================================
                    DARK SUPPORT
                ====================================================== */}

                <linearGradient
                    id="ctaDarkPanel"
                    x1="0"
                    y1="0"
                    x2="1"
                    y2="1"
                >
                    <stop
                        offset="0%"
                        stopColor="#3B271F"
                    />

                    <stop
                        offset="55%"
                        stopColor="#2D1D17"
                    />

                    <stop
                        offset="100%"
                        stopColor="#211510"
                    />
                </linearGradient>

                {/* =====================================================
                    STAINLESS STEEL
                ====================================================== */}

                <linearGradient
                    id="ctaSteel"
                    x1="0"
                    y1="0"
                    x2="1"
                    y2="0"
                >
                    <stop
                        offset="0%"
                        stopColor="#777777"
                    />

                    <stop
                        offset="25%"
                        stopColor="#D8D8D8"
                    />

                    <stop
                        offset="50%"
                        stopColor="#A9A9A9"
                    />

                    <stop
                        offset="75%"
                        stopColor="#E6E6E6"
                    />

                    <stop
                        offset="100%"
                        stopColor="#737373"
                    />
                </linearGradient>

                {/* =====================================================
                    PRODUCT SHADOW
                ====================================================== */}

                <filter
                    id="ctaCubicleShadow"
                    x="-20%"
                    y="-20%"
                    width="150%"
                    height="160%"
                >
                    <feDropShadow
                        dx="0"
                        dy="7"
                        stdDeviation="7"
                        floodColor="#071a3d"
                        floodOpacity="0.16"
                    />
                </filter>

                {/* =====================================================
                    HARDWARE SHADOW
                ====================================================== */}

                <filter
                    id="ctaHardwareShadow"
                    x="-100%"
                    y="-100%"
                    width="300%"
                    height="300%"
                >
                    <feDropShadow
                        dx="1"
                        dy="2"
                        stdDeviation="1.5"
                        floodColor="#000"
                        floodOpacity="0.3"
                    />
                </filter>
            </defs>

            {/* =========================================================
                TOP ARCHITECTURAL CURVE
            ========================================================= */}

            <path
                d="
                    M165 150
                    C285 128 405 130 520 145
                    C640 160 760 160 875 145
                    C990 130 1085 130 1155 150
                "
                stroke="#B58A12"
                strokeWidth="3"
                opacity="0.42"
            />

            {/* =========================================================
                4 YELLOW DOORS
            ========================================================= */}

            {doors.map((door, index) => {
                const panelLeftBottom =
                    door.x + 159;

                const panelRight =
                    door.right;

                const panelBottom =
                    door.bottom;

                return (
                    <g
                        key={`door-${index}`}
                        filter="url(#ctaCubicleShadow)"
                    >
                        {/* =================================================
                            YELLOW DOOR
                        ================================================== */}

                        <path
                            d={`
                                M${door.x} ${door.top}
                                L${panelRight} ${door.top + 19}
                                L${panelRight - 6} ${panelBottom}
                                Q${panelRight - 6} ${panelBottom + 15}
                                ${panelRight - 20} ${panelBottom + 13}
                                L${panelLeftBottom} ${panelBottom - 1}
                                Q${door.x + 3} ${panelBottom - 2}
                                ${door.x + 3} ${panelBottom - 15}
                                Z
                            `}
                            fill="url(#ctaYellowPanel)"
                            stroke="#D2A900"
                            strokeWidth="2"
                        />

                        {/* =================================================
                            DOOR HIGHLIGHT
                        ================================================== */}

                        <path
                            d={`
                                M${door.x + 17} ${door.top + 19}
                                L${panelRight - 13} ${door.top + 36}
                                L${panelRight - 18} ${panelBottom - 18}
                            `}
                            stroke="#FFF58A"
                            strokeWidth="3"
                            opacity="0.42"
                        />

                        {/* =================================================
                            DOOR LOCK
                        ================================================== */}

                        <circle
                            cx={door.lockX}
                            cy={door.lockY}
                            r="9"
                            fill="#E8E8E8"
                            stroke="#777"
                            strokeWidth="2"
                            filter="url(#ctaHardwareShadow)"
                        />

                        <circle
                            cx={door.lockX}
                            cy={door.lockY}
                            r="3"
                            fill="#555"
                        />
                    </g>
                );
            })}

            {/* =========================================================
                5 DARK SUPPORTS
            ========================================================= */}

            {supports.map((supportX, index) => {
                const bottom =
                    index === 0
                        ? 405
                        : 414 + index;

                return (
                    <g
                        key={`support-${index}`}
                        filter="url(#ctaCubicleShadow)"
                    >
                        {/* =================================================
                            DARK VERTICAL SUPPORT
                        ================================================== */}

                        <path
                            d={`
                                M${supportX} 125
                                Q${supportX} 82
                                ${supportX + 40} 80

                                Q${supportX + 80} 80
                                ${supportX + 80} 125

                                L${supportX + 85} ${bottom}

                                Q${supportX + 85} ${bottom + 9}
                                ${supportX + 67} ${bottom + 11}

                                L${supportX + 17} ${bottom + 7}

                                Q${supportX} ${bottom + 5}
                                ${supportX} ${bottom - 3}

                                Z
                            `}
                            fill="url(#ctaDarkPanel)"
                            stroke="#21150F"
                            strokeWidth="3"
                        />

                        {/* =================================================
                            STEEL BASE
                        ================================================== */}

                        <path
                            d={`
                                M${supportX} ${bottom - 8}

                                L${supportX + 83} ${bottom - 5}

                                L${supportX + 85} ${bottom + 24}

                                Q${supportX + 85} ${bottom + 31}
                                ${supportX + 77} ${bottom + 32}

                                L${supportX + 12} ${bottom + 28}

                                Q${supportX + 2} ${bottom + 27}
                                ${supportX + 2} ${bottom + 18}

                                Z
                            `}
                            fill="url(#ctaSteel)"
                            stroke="#686868"
                            strokeWidth="2"
                        />

                        {/* =================================================
                            SUPPORT HARDWARE
                        ================================================== */}

                        <circle
                            cx={supportX + 53}
                            cy={315 + index}
                            r="9"
                            fill="#EAEAEA"
                            stroke="#777"
                            strokeWidth="2"
                            filter="url(#ctaHardwareShadow)"
                        />

                        <circle
                            cx={supportX + 53}
                            cy={315 + index}
                            r="3"
                            fill="#555"
                        />
                    </g>
                );
            })}

            {/* =========================================================
                DOOR TOP HIGHLIGHTS
            ========================================================= */}

            <path
                d="M256 145L420 164"
                stroke="#FFF7A0"
                strokeWidth="2"
                opacity="0.7"
            />

            <path
                d="M486 145L650 165"
                stroke="#FFF7A0"
                strokeWidth="2"
                opacity="0.7"
            />

            <path
                d="M716 145L880 164"
                stroke="#FFF7A0"
                strokeWidth="2"
                opacity="0.7"
            />

            <path
                d="M946 145L1110 164"
                stroke="#FFF7A0"
                strokeWidth="2"
                opacity="0.7"
            />

            {/* =========================================================
                BASELINE
            ========================================================= */}

            <path
                d="
                    M165 438
                    C400 455 760 465 1150 447
                "
                stroke="#071a3d"
                strokeWidth="2"
                opacity="0.10"
            />

            <path
                d="
                    M180 450
                    C430 468 780 478 1130 460
                "
                stroke="#c99618"
                strokeWidth="1"
                opacity="0.25"
                strokeDasharray="3 8"
            />
        </svg>
    );
}

/* =========================================================
   MAIN CTA
========================================================= */

export default function CTASection() {
    const sectionRef = useRef(null);
    const productRef = useRef(null);
    const svgRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            /* =====================================================
               MAIN CONTENT REVEAL
            ====================================================== */

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 85%",
                    once: true,
                },
            });

            tl.from(".cta-eyebrow", {
                y: 12,
                opacity: 0,
                duration: 0.4,
                ease: "power3.out",
            })
                .from(
                    ".cta-title",
                    {
                        y: 22,
                        opacity: 0,
                        duration: 0.55,
                        ease: "power3.out",
                    },
                    "-=0.2"
                )
                .from(
                    ".cta-description",
                    {
                        y: 12,
                        opacity: 0,
                        duration: 0.4,
                        ease: "power3.out",
                    },
                    "-=0.3"
                )
                .from(
                    ".feature-item",
                    {
                        x: 18,
                        opacity: 0,
                        duration: 0.4,
                        stagger: 0.08,
                        ease: "power3.out",
                    },
                    "-=0.25"
                )
                .from(
                    ".product-image",
                    {
                        y: 25,
                        opacity: 0,
                        scale: 0.97,
                        duration: 0.7,
                        ease: "power3.out",
                    },
                    "-=0.2"
                )
                .from(
                    ".cta-action",
                    {
                        y: 12,
                        opacity: 0,
                        duration: 0.4,
                        stagger: 0.08,
                        ease: "power3.out",
                    },
                    "-=0.3"
                );

            /* =====================================================
               TECHNICAL SVG DRAWING
            ====================================================== */

            if (svgRef.current) {
                const lines =
                    svgRef.current.querySelectorAll(
                        "path, line, circle"
                    );

                gsap.from(lines, {
                    strokeDasharray: 400,
                    strokeDashoffset: 400,
                    duration: 1.4,
                    stagger: 0.02,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                        once: true,
                    },
                });
            }

            /* =====================================================
               PRODUCT FLOAT
            ====================================================== */

            if (productRef.current) {
                gsap.to(productRef.current, {
                    y: -4,
                    duration: 3.8,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut",
                });
            }
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="
                relative
                overflow-hidden
                bg-[#f7f4ec]
                py-6
                sm:py-8
                lg:py-10
            "
        >
            {/* =====================================================
                BACKGROUND ARCHITECTURE
            ====================================================== */}

            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                {/* diagonal architectural lines */}

                <div
                    className="
                        absolute
                        right-[5%]
                        top-[-15%]
                        h-[120%]
                        w-px
                        rotate-[25deg]
                        bg-[#071a3d]/[0.025]
                    "
                />

                <div
                    className="
                        absolute
                        right-[10%]
                        top-[-15%]
                        h-[120%]
                        w-px
                        rotate-[25deg]
                        bg-[#071a3d]/[0.02]
                    "
                />

                {/* horizontal line */}

                <div
                    className="
                        absolute
                        left-0
                        right-0
                        top-[43%]
                        h-px
                        bg-[#071a3d]/[0.025]
                    "
                />

                {/* architectural circle */}

                <svg
                    viewBox="0 0 400 400"
                    className="
                        absolute
                        right-[-90px]
                        top-[-30px]
                        h-[260px]
                        w-[260px]
                        opacity-[0.14]
                        sm:h-[320px]
                        sm:w-[320px]
                        lg:right-[-45px]
                        lg:h-[380px]
                        lg:w-[380px]
                    "
                    fill="none"
                >
                    <circle
                        cx="200"
                        cy="200"
                        r="120"
                        stroke="#c99618"
                        strokeWidth="1"
                    />

                    <circle
                        cx="200"
                        cy="200"
                        r="160"
                        stroke="#c99618"
                        strokeWidth="1"
                        strokeDasharray="2 9"
                    />

                    <path
                        d="M200 25V375"
                        stroke="#c99618"
                        strokeWidth="1"
                        strokeDasharray="2 10"
                    />

                    <path
                        d="M25 200H375"
                        stroke="#c99618"
                        strokeWidth="1"
                        strokeDasharray="2 10"
                    />
                </svg>
            </div>

            {/* =====================================================
                MAIN CONTAINER
            ====================================================== */}

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
                        relative
                        z-20
                        grid
                        grid-cols-1
                        gap-5
                        lg:grid-cols-[1fr_260px]
                        lg:gap-8
                    "
                >
                    {/* =================================================
                        LEFT CONTENT
                    ================================================= */}

                    <div>
                        <div
                            className="
                                cta-eyebrow
                                flex
                                items-center
                                gap-3
                            "
                        >
                            <span className="h-[2px] w-8 bg-[#c99618]" />

                            <span
                                className="
                                    text-[7px]
                                    font-semibold
                                    tracking-[0.30em]
                                    text-[#c99618]
                                    sm:text-[10px]
                                "
                            >
                                PREMIUM TOILET CUBICLE SOLUTIONS
                            </span>
                        </div>

                        <h2
                            className="
                                cta-title
                                mt-3
                                max-w-[650px]
                                text-[32px]
                                font-semibold
                                leading-[0.98]
                                tracking-[-0.045em]
                                text-[#071a3d]
                                sm:text-[40px]
                                md:text-[44px]
                                lg:text-[50px]
                                xl:text-[54px]
                            "
                        >
                            Stylish. Durable.
                            <br />

                            <span className="text-[#c99618]">
                                Built for Every Space.
                            </span>
                        </h2>

                        <p
                            className="
                                cta-description
                                mt-3
                                max-w-[430px]
                                text-[10px]
                                leading-[1.65]
                                text-[#071a3d]/55
                                sm:text-[11px]
                                lg:text-[12px]
                            "
                        >
                            Modern designs, premium materials and
                            precision installation for commercial,
                            institutional and high-traffic environments.
                        </p>
                    </div>

                    {/* =================================================
                        FEATURES
                    ================================================= */}

                    <div
                        className="
                            relative
                            z-30
                            flex
                            flex-row
                            flex-wrap
                            gap-x-5
                            gap-y-3
                            lg:flex-col
                            lg:gap-3
                        "
                    >
                        {features.map((feature) => {
                            const Icon = feature.icon;

                            return (
                                <div
                                    key={feature.title}
                                    className="
                                        feature-item
                                        flex
                                        items-center
                                        gap-3
                                    "
                                >
                                    <div
                                        className="
                                            flex
                                            h-9
                                            w-9
                                            shrink-0
                                            items-center
                                            justify-center
                                            rounded-full
                                            border
                                            border-[#c99618]
                                            text-[#071a3d]
                                        "
                                    >
                                        <Icon
                                            size={15}
                                            strokeWidth={1.7}
                                        />
                                    </div>

                                    <div>
                                        <p
                                            className="
                                                text-[7px]
                                                font-semibold
                                                leading-tight
                                                tracking-[0.24em]
                                                text-[#071a3d]
                                            "
                                        >
                                            {feature.title}
                                        </p>

                                        <p
                                            className="
                                                mt-0.5
                                                text-[7px]
                                                font-semibold
                                                leading-tight
                                                tracking-[0.24em]
                                                text-[#071a3d]
                                            "
                                        >
                                            {feature.subtitle}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* =================================================
                    PRODUCT AREA
                ================================================= */}

                <div
                    className="
                        relative
                        mt-0
                        h-[170px]
                        sm:h-[220px]
                        md:h-[260px]
                        lg:-mt-4
                        lg:h-[315px]
                        xl:h-[340px]
                    "
                >
                    {/* =================================================
                        LEFT MINI ARCHITECTURAL DRAWING
                    ================================================= */}

                    <svg
                        ref={svgRef}
                        viewBox="0 0 300 300"
                        fill="none"
                        className="
                            absolute
                            bottom-[-5px]
                            left-[-35px]
                            z-0
                            hidden
                            h-[170px]
                            w-[190px]
                            opacity-[0.10]
                            lg:block
                        "
                    >
                        <path
                            d="M15 260V105L150 48L285 105V260"
                            stroke="#071a3d"
                            strokeWidth="1"
                        />

                        <path
                            d="M42 260V120L92 101V260"
                            stroke="#071a3d"
                            strokeWidth="1"
                        />

                        <path
                            d="M92 260V101L150 82V260"
                            stroke="#071a3d"
                            strokeWidth="1"
                        />

                        <path
                            d="M150 260V82L208 101V260"
                            stroke="#071a3d"
                            strokeWidth="1"
                        />

                        <path
                            d="M208 260V101L258 120V260"
                            stroke="#071a3d"
                            strokeWidth="1"
                        />

                        <path
                            d="M48 128L86 113V235H48V128Z"
                            stroke="#c99618"
                            strokeWidth="1"
                        />

                        <path
                            d="M155 91L201 106V235H155V91Z"
                            stroke="#c99618"
                            strokeWidth="1"
                        />

                        <circle
                            cx="79"
                            cy="175"
                            r="3"
                            stroke="#c99618"
                            strokeWidth="1"
                        />

                        <circle
                            cx="194"
                            cy="178"
                            r="3"
                            stroke="#c99618"
                            strokeWidth="1"
                        />

                        <path
                            d="M15 260H285"
                            stroke="#071a3d"
                            strokeWidth="1"
                        />
                    </svg>

                    {/* =================================================
                        PRODUCT
                    ================================================= */}

                    <div
                        ref={productRef}
                        className="
                            product-image
                            absolute
                            sm:bottom-[-3px]
                            left-1/2
                            z-10
                            w-[96%]
                            -translate-x-1/2
                            sm:w-[94%]
                            md:w-[90%]
                            lg:w-[86%]
                            xl:w-[60%]
                        "
                    >
                        <CubicleIllustration />
                    </div>
                </div>

                {/* =================================================
                    CTA ACTION AREA
                ================================================= */}

                <div
                    className="
                        relative
                        z-40
                        mt-1
                        sm:mt-2
                        lg:mt-0
                    "
                >
                    <div
                        className="
                            grid
                            items-center
                            gap-5
                            lg:grid-cols-[220px_1fr]
                            lg:gap-6
                        "
                    >
                        {/* =================================================
                            GET STARTED
                        ================================================= */}

                        <div>
                            <div className="flex items-center gap-2">
                                <span className="h-[2px] w-7 bg-[#c99618]" />

                                <span
                                    className="
                                        text-[9px]
                                        font-semibold
                                        tracking-[0.27em]
                                        text-[#c99618]
                                    "
                                >
                                    TAKE THE NEXT STEP
                                </span>
                            </div>

                            <h3
                                className="
                                    mt-2
                                    text-[24px]
                                    font-semibold
                                    leading-[0.98]
                                    tracking-[-0.04em]
                                    text-[#071a3d]
                                    sm:text-[28px]
                                    lg:text-[30px]
                                "
                            >
                                Get Started
                                <br />
                                Today
                            </h3>

                            <p
                                className="
                                    mt-2
                                    max-w-[200px]
                                    text-[10px]
                                    leading-[1.6]
                                    text-[#071a3d]/50
                                "
                            >
                                Choose an option below and let our
                                team help you with your project
                                requirements.
                            </p>
                        </div>

                        {/* =================================================
                            ACTION BUTTONS
                        ================================================= */}

                        <div
                            className="
                                grid
                                grid-cols-1
                                gap-2
                                sm:grid-cols-3
                            "
                        >
                            {actions.map((action) => {
                                const Icon = action.icon;

                                return (
                                    <motion.div
                                        key={action.title}
                                        className="cta-action"
                                        whileHover={{
                                            y: -3,
                                        }}
                                        transition={{
                                            duration: 0.22,
                                            ease: "easeOut",
                                        }}
                                    >
                                        <Link
                                            href={action.href}
                                            download={action.download}
                                            className={`
                                                group
                                                relative
                                                flex
                                                h-[64px]
                                                items-center
                                                justify-between
                                                overflow-hidden
                                                rounded-[9px]
                                                border
                                                px-4
                                                transition-all
                                                duration-500
                                                sm:h-[68px]

                                                ${action.primary
                                                    ? `
                                                            border-[#071a3d]
                                                            bg-[#071a3d]
                                                            text-white
                                                            shadow-[0_8px_20px_rgba(7,26,61,0.12)]
                                                        `
                                                    : `
                                                            border-[#c99618]
                                                            bg-[#f9f8f3]
                                                            text-[#071a3d]
                                                        `
                                                }
                                            `}
                                        >
                                            {/* Decorative circles */}

                                            <span
                                                className="
                                                    absolute
                                                    left-[-20px]
                                                    top-1/2
                                                    h-[95px]
                                                    w-[95px]
                                                    -translate-y-1/2
                                                    rounded-full
                                                    border
                                                    border-[#c99618]/40
                                                    transition-transform
                                                    duration-700
                                                    group-hover:scale-[1.35]
                                                "
                                            />

                                            <span
                                                className="
                                                    absolute
                                                    left-[-28px]
                                                    top-1/2
                                                    h-[112px]
                                                    w-[112px]
                                                    -translate-y-1/2
                                                    rounded-full
                                                    border
                                                    border-[#c99618]/15
                                                "
                                            />

                                            {/* Content */}

                                            <span
                                                className="
                                                    relative
                                                    z-10
                                                    flex
                                                    items-center
                                                    gap-2.5
                                                "
                                            >
                                                <span
                                                    className="
                                                        flex
                                                        h-9
                                                        w-9
                                                        shrink-0
                                                        items-center
                                                        justify-center
                                                        rounded-[7px]
                                                        border
                                                        border-[#c99618]
                                                        text-[#c99618]
                                                        transition-transform
                                                        duration-500
                                                        group-hover:rotate-3
                                                    "
                                                >
                                                    <Icon
                                                        size={17}
                                                        strokeWidth={1.7}
                                                    />
                                                </span>

                                                <span
                                                    className="
                                                        text-[10px]
                                                        font-semibold
                                                        sm:text-[11px]
                                                    "
                                                >
                                                    {action.title}
                                                </span>
                                            </span>

                                            {/* Arrow */}

                                            <span
                                                className="
                                                    relative
                                                    z-10
                                                    text-[#c99618]
                                                    transition-transform
                                                    duration-300
                                                    group-hover:translate-x-1
                                                "
                                            >
                                                <FiArrowUpRight
                                                    size={17}
                                                />
                                            </span>

                                            {/* Bottom gold line */}

                                            <span
                                                className="
                                                    absolute
                                                    bottom-0
                                                    left-0
                                                    h-[2px]
                                                    w-0
                                                    bg-[#c99618]
                                                    transition-all
                                                    duration-500
                                                    group-hover:w-full
                                                "
                                            />
                                        </Link>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}