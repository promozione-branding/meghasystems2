"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* =========================================================
   PARTNERS
========================================================= */

const partners = [
    {
        name: "TESA",
        logo: "/clients/14 (1).webp",
    },
    {
        name: "STYLAM",
        logo: "/clients/15 (2).webp",
    },
    {
        name: "CENTURYPLY",
        logo: "/clients/16 (2).webp",
    },
    {
        name: "CROWN",
        logo: "/clients/17 (2).webp",
    },
    {
        name: "VIRGO",
        logo: "/clients/18 (2).webp",
    },
    {
        name: "GREENPLY",
        logo: "/clients/19 (1).webp",
    },
];

/* =========================================================
   ARCHITECTURAL SVG
========================================================= */

function PartnerArchitecture() {
    return (
        <svg
            viewBox="0 0 1000 600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-full w-full"
            aria-hidden="true"
        >
            {/* outer frame */}

            <path
                className="partner-svg-line"
                d="M120 500V140L500 45L880 140V500"
                stroke="#071a3d"
                strokeWidth="1"
            />

            {/* inner frame */}

            <path
                className="partner-svg-line"
                d="M165 500V165L500 82L835 165V500"
                stroke="#c99618"
                strokeWidth="1"
            />

            {/* vertical construction lines */}

            <path
                className="partner-svg-line"
                d="M270 500V140"
                stroke="#071a3d"
                strokeWidth="1"
                opacity=".35"
            />

            <path
                className="partner-svg-line"
                d="M380 500V110"
                stroke="#071a3d"
                strokeWidth="1"
                opacity=".22"
            />

            <path
                className="partner-svg-line"
                d="M620 500V110"
                stroke="#071a3d"
                strokeWidth="1"
                opacity=".22"
            />

            <path
                className="partner-svg-line"
                d="M730 500V140"
                stroke="#071a3d"
                strokeWidth="1"
                opacity=".35"
            />

            {/* horizontal construction lines */}

            <path
                className="partner-svg-line"
                d="M120 260H880"
                stroke="#071a3d"
                strokeWidth="1"
                opacity=".18"
            />

            <path
                className="partner-svg-line"
                d="M120 380H880"
                stroke="#071a3d"
                strokeWidth="1"
                opacity=".12"
            />

            <path
                className="partner-svg-line"
                d="M120 500H880"
                stroke="#071a3d"
                strokeWidth="1"
                opacity=".25"
            />

            {/* center circle */}

            <circle
                className="partner-svg-circle"
                cx="500"
                cy="300"
                r="115"
                stroke="#c99618"
                strokeWidth="1"
                opacity=".18"
            />

            <circle
                className="partner-svg-circle"
                cx="500"
                cy="300"
                r="155"
                stroke="#c99618"
                strokeWidth="1"
                strokeDasharray="3 12"
                opacity=".12"
            />

            {/* center cross */}

            <path
                className="partner-svg-line"
                d="M500 135V465"
                stroke="#c99618"
                strokeWidth="1"
                strokeDasharray="4 12"
                opacity=".15"
            />

            <path
                className="partner-svg-line"
                d="M335 300H665"
                stroke="#c99618"
                strokeWidth="1"
                strokeDasharray="4 12"
                opacity=".15"
            />

            {/* roof accents */}

            <path
                className="partner-svg-line"
                d="M120 140L165 165"
                stroke="#c99618"
                strokeWidth="2"
                opacity=".45"
            />

            <path
                className="partner-svg-line"
                d="M880 140L835 165"
                stroke="#c99618"
                strokeWidth="2"
                opacity=".45"
            />

            {/* center marker */}

            <circle
                cx="500"
                cy="300"
                r="4"
                fill="#c99618"
                opacity=".45"
            />
        </svg>
    );
}

/* =========================================================
   MAIN
========================================================= */

export default function Partners() {
    const sectionRef = useRef(null);
    const architectureRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            /* =====================================================
               INITIAL STATES

               Use set + to instead of from.
               This prevents elements staying invisible.
            ===================================================== */

            gsap.set(".partner-header", {
                autoAlpha: 0,
                y: 30,
            });

            gsap.set(".partner-card", {
                autoAlpha: 0,
                y: 35,
            });

            gsap.set(".partner-bottom", {
                autoAlpha: 0,
                y: 20,
            });

            gsap.set(".partner-svg-line", {
                opacity: 0,
            });

            /* =====================================================
               HEADER REVEAL
            ===================================================== */

            gsap.to(".partner-header", {
                autoAlpha: 1,
                y: 0,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 85%",
                    once: true,
                },
            });

            /* =====================================================
               PARTNER CARDS
            ===================================================== */

            gsap.to(".partner-card", {
                autoAlpha: 1,
                y: 0,
                duration: 0.65,
                stagger: 0.1,
                ease: "power3.out",
                clearProps: "opacity,visibility,transform",
                scrollTrigger: {
                    trigger: ".partner-grid",
                    start: "top 88%",
                    once: true,
                },
            });

            /* =====================================================
               BOTTOM STATEMENT
            ===================================================== */

            gsap.to(".partner-bottom", {
                autoAlpha: 1,
                y: 0,
                duration: 0.6,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".partner-bottom",
                    start: "top 92%",
                    once: true,
                },
            });

            /* =====================================================
               SVG DRAW
            ===================================================== */

            const svgLines =
                architectureRef.current?.querySelectorAll(
                    ".partner-svg-line"
                );

            if (svgLines?.length) {
                svgLines.forEach((line) => {
                    if (
                        typeof line.getTotalLength === "function"
                    ) {
                        const length = line.getTotalLength();

                        gsap.set(line, {
                            opacity: 1,
                            strokeDasharray: length,
                            strokeDashoffset: length,
                        });
                    }
                });

                gsap.to(svgLines, {
                    strokeDashoffset: 0,
                    duration: 1.8,
                    stagger: 0.035,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                        once: true,
                    },
                });
            }

            /* =====================================================
               SVG CIRCLE ROTATION
            ===================================================== */

            gsap.to(".partner-svg-circle", {
                rotation: 360,
                transformOrigin: "50% 50%",
                duration: 55,
                repeat: -1,
                ease: "none",
            });

            /* =====================================================
               ARCHITECTURAL PARALLAX
            ===================================================== */

            gsap.to(architectureRef.current, {
                y: -70,
                x: -25,
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1.3,
                },
            });

            /* =====================================================
               REFRESH
            ===================================================== */

            ScrollTrigger.refresh();
        }, sectionRef);

        return () => {
            ctx.revert();
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            className="
                relative
                overflow-hidden
                bg-[#eef1f4]
                py-10
                sm:py-12
                lg:py-16
            "
        >
            {/* =====================================================
                GOLD TOP BORDER
            ===================================================== */}

            <div
                className="
                    absolute
                    left-0
                    top-0
                    h-[2px]
                    w-full
                    bg-[#c99618]
                "
            />

            {/* =====================================================
                BACKGROUND
            ===================================================== */}

            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                {/* grid */}

                <div
                    className="
                        absolute
                        inset-0
                        opacity-[0.45]
                    "
                    style={{
                        backgroundImage: `
                            linear-gradient(
                                rgba(7,26,61,0.045) 1px,
                                transparent 1px
                            ),
                            linear-gradient(
                                90deg,
                                rgba(7,26,61,0.045) 1px,
                                transparent 1px
                            )
                        `,
                        backgroundSize: "70px 70px",
                    }}
                />

                {/* architectural SVG */}

                <div
                    ref={architectureRef}
                    className="
                        absolute
                        right-[-260px]
                        top-[20px]
                        h-[600px]
                        w-[950px]
                        opacity-[0.13]
                        sm:right-[-190px]
                        lg:right-[-120px]
                    "
                >
                    <PartnerArchitecture />
                </div>

                {/* left vertical */}

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

                {/* right vertical */}

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

                {/* gold glow */}

                <div
                    className="
                        absolute
                        right-[-120px]
                        top-1/2
                        h-[320px]
                        w-[320px]
                        -translate-y-1/2
                        rounded-full
                        bg-[#c99618]/[0.045]
                        blur-[100px]
                    "
                />
            </div>

            {/* =====================================================
                CONTENT
            ===================================================== */}

            <div
                className="
                    relative
                    z-10
                    mx-auto
                    max-w-[1500px]
                    px-5
                    sm:px-8
                    lg:px-12
                "
            >
                {/* =================================================
                    HEADER
                ================================================= */}

                <div
                    className="
                        partner-header
                        mx-auto
                        max-w-[800px]
                        text-center
                    "
                >
                    {/* eyebrow */}

                    <div className="mb-4 flex items-center justify-center gap-3 sm:mb-5">
                        <span className="h-px w-10 bg-[#c99618] sm:w-12" />

                        <span
                            className="
                                text-[8px]
                                font-semibold
                                tracking-[0.35em]
                                text-[#c99618]
                                sm:text-[9px]
                            "
                        >
                            OUR NETWORK
                        </span>

                        <span className="h-px w-10 bg-[#c99618] sm:w-12" />
                    </div>

                    {/* heading */}

                    <h2
                        className="
                            text-[32px]
                            font-medium
                            leading-[1.05]
                            tracking-[-0.04em]
                            text-[#071a3d]
                            sm:text-[44px]
                            lg:text-[56px]
                        "
                    >
                        Authorised{" "}
                        <span className="text-[#c99618]">
                            Channel Partners
                        </span>
                    </h2>

                    {/* description */}

                    <p
                        className="
                            mx-auto
                            mt-4
                            max-w-[620px]
                            text-[11px]
                            leading-[1.8]
                            text-[#071a3d]/55
                            sm:mt-5
                            sm:text-[13px]
                        "
                    >
                        We are proud to work with leading brands and
                        manufacturers, bringing trusted materials and
                        premium solutions to every project.
                    </p>
                </div>

                {/* =================================================
                    PARTNER GRID
                ================================================= */}

                <div
                    className="
                        partner-grid
                        mt-7
                        grid
                        grid-cols-2
                        border-l
                        border-t
                        border-[#071a3d]/10
                        sm:grid-cols-3
                        lg:mt-10
                        lg:grid-cols-6
                    "
                >
                    {partners.map((partner, index) => (
                        <div
                            key={partner.name}
                            className="
                                partner-card
                                group
                                relative
                                flex
                                h-[145px]
                                w-full
                                items-center
                                justify-center
                                overflow-hidden
                                border-b
                                border-r
                                border-[#071a3d]/10
                                bg-white/60
                                px-4
                                transition-all
                                duration-500
                                hover:bg-white
                                sm:h-[165px]
                                sm:px-5
                                lg:h-[185px]
                            "
                        >
                            {/* number */}

                            <div
                                className="
                                    absolute
                                    left-4
                                    top-4
                                    text-[8px]
                                    font-medium
                                    tracking-[0.2em]
                                    text-[#071a3d]/25
                                    transition-colors
                                    duration-300
                                    group-hover:text-[#c99618]
                                "
                            >
                                {String(index + 1).padStart(2, "0")}
                            </div>

                            {/* gold corner */}

                            <div
                                className="
                                    absolute
                                    right-0
                                    top-0
                                    h-7
                                    w-7
                                    border-r
                                    border-t
                                    border-[#c99618]
                                    opacity-40
                                    transition-all
                                    duration-500
                                    group-hover:h-11
                                    group-hover:w-11
                                    group-hover:opacity-100
                                "
                            />

                            {/* lower corner */}

                            <div
                                className="
                                    absolute
                                    bottom-0
                                    left-0
                                    h-5
                                    w-5
                                    border-b
                                    border-l
                                    border-[#071a3d]/10
                                    transition-all
                                    duration-500
                                    group-hover:h-8
                                    group-hover:w-8
                                "
                            />

                            {/* logo */}

                            <div
                                className="
                                    relative
                                    h-[62px]
                                    w-[140px]
                                    transition-transform
                                    duration-500
                                    group-hover:scale-105
                                    sm:h-[72px]
                                    sm:w-[160px]
                                "
                            >
                                <Image
                                    src={partner.logo}
                                    alt={`${partner.name} authorised channel partner`}
                                    fill
                                    sizes="160px"
                                    className="
                                        object-contain
                                    "
                                />
                            </div>

                            {/* name */}

                            <div
                                className="
                                    absolute
                                    bottom-4
                                    left-0
                                    right-0
                                    text-center
                                "
                            >
                                <span
                                    className="
                                        text-[9px]
                                        font-medium
                                        tracking-[0.22em]
                                        text-[#071a3d]/55
                                        transition-colors
                                        duration-300
                                        group-hover:text-[#c99618]
                                        sm:text-[10px]
                                    "
                                >
                                    {partner.name}
                                </span>
                            </div>

                            {/* bottom hover line */}

                            <div
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
                        </div>
                    ))}
                </div>

                {/* =================================================
                    BOTTOM STATEMENT
                ================================================= */}

                <div
                    className="
                        partner-bottom
                        mt-6
                        flex
                        items-center
                        justify-center
                        gap-3
                        sm:mt-8
                        sm:gap-4
                    "
                >
                    <div className="h-px w-8 bg-[#c99618] sm:w-16" />

                    <span
                        className="
                            text-center
                            text-[8px]
                            font-medium
                            tracking-[0.25em]
                            text-[#071a3d]/40
                            sm:text-[10px]
                            sm:tracking-[0.3em]
                        "
                    >
                        TRUSTED MATERIAL • AUTHORISED PARTNERSHIP • QUALITY
                    </span>

                    <div className="h-px w-8 bg-[#c99618] sm:w-16" />
                </div>
            </div>
        </section>
    );
}