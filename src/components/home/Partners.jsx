"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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

export default function Partners() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".partner-header", {
                y: 35,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 82%",
                },
            });

            gsap.from(".partner-card", {
                y: 35,
                opacity: 0,
                duration: 0.7,
                stagger: 0.1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".partner-grid",
                    start: "top 82%",
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="
                relative
                overflow-hidden
                bg-[#eef1f4]
                py-10
                text-[#071a3d]
                sm:py-12
                lg:py-15
            "
        >
            {/* =====================================================
                ARCHITECTURAL BACKGROUND
            ====================================================== */}

            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                {/* Grid */}
                <div
                    className="
                        absolute
                        inset-0
                        opacity-[0.35]
                    "
                    style={{
                        backgroundImage: `
                            linear-gradient(rgba(7,26,61,0.045) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(7,26,61,0.045) 1px, transparent 1px)
                        `,
                        backgroundSize: "70px 70px",
                    }}
                />

                {/* Large architectural circle */}
                <svg
                    className="absolute right-[-180px] top-[-150px] h-[550px] w-[550px] opacity-[0.12]"
                    viewBox="0 0 550 550"
                    fill="none"
                >
                    <circle
                        cx="275"
                        cy="275"
                        r="220"
                        stroke="#071a3d"
                        strokeWidth="1"
                    />

                    <circle
                        cx="275"
                        cy="275"
                        r="170"
                        stroke="#c99618"
                        strokeWidth="1"
                    />

                    <circle
                        cx="275"
                        cy="275"
                        r="110"
                        stroke="#071a3d"
                        strokeWidth="1"
                    />

                    <path
                        d="M55 275H495"
                        stroke="#071a3d"
                        strokeWidth="1"
                    />

                    <path
                        d="M275 55V495"
                        stroke="#071a3d"
                        strokeWidth="1"
                    />
                </svg>

                {/* Left diagonal architecture */}
                <svg
                    className="absolute bottom-[-120px] left-[-100px] h-[420px] w-[620px] opacity-[0.1]"
                    viewBox="0 0 620 420"
                    fill="none"
                >
                    <path
                        d="M0 360L170 190L330 350L620 60"
                        stroke="#071a3d"
                        strokeWidth="1"
                    />

                    <path
                        d="M40 410L210 240L370 400L620 150"
                        stroke="#c99618"
                        strokeWidth="1"
                    />

                    <path
                        d="M110 420L280 250"
                        stroke="#071a3d"
                        strokeWidth="1"
                    />
                </svg>

                {/* Gold accent glow */}
                <div className="absolute right-[-100px] top-1/2 h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-[#c99618]/[0.06] blur-[100px]" />
            </div>

            {/* =====================================================
                CONTENT
            ====================================================== */}

            <div className="relative mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">

                {/* =================================================
                    HEADER
                ================================================== */}

                <div className="partner-header mx-auto max-w-[800px] text-center">

                    {/* Eyebrow */}
                    <div className="mb-5 flex items-center justify-center gap-3">
                        <span className="h-[1px] w-12 bg-[#c99618]" />

                        <span className="text-[8px] font-semibold tracking-[0.35em] text-[#c99618] sm:text-[9px]">
                            OUR NETWORK
                        </span>

                        <span className="h-[1px] w-12 bg-[#c99618]" />
                    </div>

                    {/* Heading */}
                    <h2 className="text-[34px] font-medium leading-[1.1] tracking-[-0.04em] text-[#071a3d] sm:text-[46px] lg:text-[58px]">
                        Authorised
                        <span className="text-[#c99618]">
                            {" "}Channel Partners
                        </span>
                    </h2>

                    {/* Description */}
                    <p className="mx-auto mt-5 max-w-[620px] text-[12px] leading-[1.8] text-[#071a3d]/55 sm:text-[13px]">
                        We are proud to work with leading brands and manufacturers,
                        bringing trusted materials and premium solutions to every project.
                    </p>
                </div>

                {/* =================================================
                    PARTNER GRID
                ================================================== */}

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
                                h-[155px]
                                items-center
                                justify-center
                                overflow-hidden
                                border-b
                                border-r
                                border-[#071a3d]/10
                                bg-white/45
                                px-5
                                transition-all
                                duration-500
                                hover:bg-white
                                sm:h-[175px]
                                lg:h-[195px]
                            "
                        >
                            {/* Number */}
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

                            {/* Gold corner */}
                            <div
                                className="
                                    absolute
                                    right-0
                                    top-0
                                    h-8
                                    w-8
                                    border-r
                                    border-t
                                    border-[#c99618]
                                    opacity-40
                                    transition-all
                                    duration-500
                                    group-hover:h-12
                                    group-hover:w-12
                                    group-hover:opacity-100
                                "
                            />

                            {/* Small architectural corner */}
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

                            {/* Logo */}
                            <div
                                className="
                                    relative
                                    h-[65px]
                                    w-[145px]
                                    transition-transform
                                    duration-500
                                    group-hover:scale-105
                                    sm:h-[75px]
                                    sm:w-[165px]
                                "
                            >
                                <Image
                                    src={partner.logo}
                                    alt={`${partner.name} authorised channel partner`}
                                    fill
                                    sizes="170px"
                                    className="
                                        object-contain
                                        transition-all
                                        duration-500
                                    "
                                />
                            </div>

                            {/* Partner name */}
                            <div className="absolute bottom-4 left-0 right-0 text-center">
                                <span
                                    className="
                                        text-[10px]
                                        font-medium
                                        tracking-[0.25em]
                                        text-[#071a3d]/60
                                        transition-colors
                                        duration-300
                                        group-hover:text-[#c99618]
                                    "
                                >
                                    {partner.name}
                                </span>
                            </div>

                            {/* Bottom gold line */}
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
                ================================================== */}

                <div className="mt-6 flex items-center justify-center gap-4 sm:mt-8">

                    <div className="h-[1px] w-10 bg-[#c99618] sm:w-16" />

                    <span className="text-center text-[7px] font-medium tracking-[0.3em] text-[#071a3d]/35 sm:text-[8px]">
                        TRUSTED MATERIAL • AUTHORISED PARTNERSHIP • QUALITY
                    </span>

                    <div className="h-[1px] w-10 bg-[#c99618] sm:w-16" />

                </div>
            </div>
        </section>
    );
}