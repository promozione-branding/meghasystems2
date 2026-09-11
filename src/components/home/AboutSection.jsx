"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
    Award,
    Building2,
    CheckCircle2,
    Headphones,
    Layers3,
    Target,
    Users,
    Play,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const STATS = [
    {
        value: 25,
        suffix: "+",
        label: "Years of Excellence",
        icon: Award,
    },
    {
        value: 5000,
        suffix: "+",
        label: "Projects Completed",
        icon: Building2,
    },
    {
        value: 100000,
        suffix: "+",
        label: "Cubicles Installed",
        icon: Layers3,
    },
    {
        value: 100,
        suffix: "%",
        label: "Customer Support",
        icon: Headphones,
    },
];

/* ---------------------------------------
   COUNTER
--------------------------------------- */

function Counter({ value, suffix, start }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!start) return;

        let startTime = null;
        let animationFrame;

        const duration = 1800;

        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;

            const progress = Math.min(
                (timestamp - startTime) / duration,
                1
            );

            const eased = 1 - Math.pow(1 - progress, 3);

            setCount(Math.floor(eased * value));

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            } else {
                setCount(value);
            }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrame);
    }, [start, value]);

    const formatNumber = () => {
        // 100000 → 1 Lakh
        if (value === 100000) {
            if (count < 100000) {
                return `${Math.floor(count / 1000)}K`;
            }

            return "1 Lakh";
        }

        return count.toLocaleString("en-IN");
    };

    return (
        <span>
            {formatNumber()}
            {suffix}
        </span>
    );
}

/* ---------------------------------------
   ABOUT SECTION
--------------------------------------- */

export default function AboutSection() {
    const sectionRef = useRef(null);
    const videoRef = useRef(null);
    const contentRef = useRef(null);
    const statsRef = useRef(null);

    const [counterStarted, setCounterStarted] = useState(false);

    useEffect(() => {
        const section = sectionRef.current;

        if (!section) return;

        const ctx = gsap.context(() => {
            /* -------------------------------
               VIDEO REVEAL
            -------------------------------- */

            gsap.fromTo(
                videoRef.current,
                {
                    opacity: 0,
                    x: -60,
                    scale: 0.96,
                },
                {
                    opacity: 1,
                    x: 0,
                    scale: 1,
                    duration: 1.1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: section,
                        start: "top 78%",
                    },
                }
            );

            /* -------------------------------
               CONTENT REVEAL
            -------------------------------- */

            gsap.fromTo(
                contentRef.current,
                {
                    opacity: 0,
                    x: 60,
                },
                {
                    opacity: 1,
                    x: 0,
                    duration: 1.1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: section,
                        start: "top 78%",
                    },
                }
            );

            /* -------------------------------
               STATS REVEAL
            -------------------------------- */

            if (statsRef.current) {
                gsap.fromTo(
                    statsRef.current.children,
                    {
                        opacity: 0,
                        y: 30,
                    },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.7,
                        stagger: 0.12,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: statsRef.current,
                            start: "top 88%",
                        },
                    }
                );

                /* -------------------------------
                   COUNTER TRIGGER
                -------------------------------- */

                ScrollTrigger.create({
                    trigger: statsRef.current,
                    start: "top 85%",
                    once: true,
                    onEnter: () => setCounterStarted(true),
                });
            }
        }, section);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative overflow-hidden bg-white py-12 sm:py-16 lg:py-16"
        >
            {/* =====================================
                BACKGROUND ARCHITECTURAL ELEMENTS
            ====================================== */}

            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div
                    className="
                        absolute
                        -right-40
                        top-20
                        h-[420px]
                        w-[420px]
                        rotate-45
                        border
                        border-[#0d2461]/5
                    "
                />

                <div
                    className="
                        absolute
                        -left-40
                        bottom-0
                        h-[400px]
                        w-[400px]
                        -rotate-45
                        border
                        border-[#d99a17]/10
                    "
                />

                <div
                    className="
                        absolute
                        left-1/2
                        top-0
                        h-full
                        w-px
                        bg-[#0d2461]/[0.03]
                    "
                />
            </div>

            <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">

                {/* =====================================
                    HEADER
                ====================================== */}

                <div className="mb-10 lg:mb-14">
                    <div className="mb-3 flex items-center gap-3">
                        <span className="h-px w-10 bg-[#d99a17]" />

                        <span
                            className="
                                text-[10px]
                                font-semibold
                                tracking-[0.3em]
                                text-[#d99a17]
                                sm:text-[11px]
                            "
                        >
                            ABOUT US
                        </span>
                    </div>

                    <h2
                        className="
                            max-w-3xl
                            text-3xl
                            font-semibold
                            leading-tight
                            tracking-tight
                            text-[#071a3d]
                            sm:text-4xl
                            lg:text-5xl
                        "
                    >
                        Built on experience.
                        <br />

                        <span className="text-[#d99a17]">
                            Designed for performance.
                        </span>
                    </h2>
                </div>

                {/* =====================================
                    MAIN CONTENT
                ====================================== */}

                <div
                    className="
                        grid
                        items-center
                        gap-10
                        lg:grid-cols-[0.95fr_1.05fr]
                        lg:gap-20
                    "
                >

                    {/* =================================
                        LEFT — VIDEO
                    ================================= */}

                    <div
                        ref={videoRef}
                        className="
                            relative
                            mx-auto
                            w-full
                            max-w-[650px]
                        "
                    >

                        {/* Gold architectural accent */}

                        <div
                            className="
                                absolute
                                -bottom-4
                                -left-4
                                h-[90%]
                                w-[75%]
                                border-b
                                border-l
                                border-[#d99a17]
                            "
                        />

                        {/* Small gold corner */}

                        <div
                            className="
                                absolute
                                -right-3
                                bottom-10
                                z-20
                                h-16
                                w-16
                                border-r
                                border-b
                                border-[#d99a17]
                            "
                        />

                        {/* Main video frame */}

                        <div
                            className="
                                relative
                                overflow-hidden
                                bg-[#071a3d]
                                p-2
                                shadow-[0_25px_70px_rgba(7,26,61,0.18)]
                            "
                            style={{
                                clipPath:
                                    "polygon(0 0, 100% 0, 100% 87%, 87% 100%, 0 100%)",
                            }}
                        >
                            <div
                                className="
                                    relative
                                    aspect-[4/3]
                                    overflow-hidden
                                    bg-[#06152f]
                                "
                                style={{
                                    clipPath:
                                        "polygon(0 0, 100% 0, 100% 87%, 87% 100%, 0 100%)",
                                }}
                            >

                                {/* VIDEO */}

                                <video
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    preload="metadata"
                                    poster="/about-installation-poster.jpg"
                                    className="
                                        absolute
                                        inset-0
                                        h-full
                                        w-full
                                        object-cover
                                    "
                                >
                                    <source
                                        src="/megha-systems-about-clean-v2.mp4"
                                        type="video/mp4"
                                    />

                                    Your browser does not support
                                    the video tag.
                                </video>

                                {/* Dark gradient */}

                                <div
                                    className="
                                        pointer-events-none
                                        absolute
                                        inset-0
                                        bg-gradient-to-t
                                        from-[#071a3d]/85
                                        via-[#071a3d]/10
                                        to-transparent
                                    "
                                />

                                {/* Top label */}

                                <div
                                    className="
                                        absolute
                                        left-5
                                        top-5
                                        flex
                                        items-center
                                        gap-2
                                        border
                                        border-white/20
                                        bg-[#071a3d]/60
                                        px-3
                                        py-2
                                        backdrop-blur-sm
                                    "
                                >
                                    <Play
                                        size={12}
                                        className="fill-[#d99a17] text-[#d99a17]"
                                    />

                                    <span
                                        className="
                                            text-[9px]
                                            font-semibold
                                            tracking-[0.2em]
                                            text-white
                                        "
                                    >
                                        OUR WORK
                                    </span>
                                </div>

                                {/* Bottom information */}

                                <div
                                    className="
                                        absolute
                                        bottom-6
                                        left-6
                                        right-6
                                        flex
                                        items-end
                                        justify-between
                                        gap-4
                                    "
                                >
                                    <div className="flex items-center gap-3">
                                        <div
                                            className="
                                                flex
                                                h-10
                                                w-10
                                                shrink-0
                                                items-center
                                                justify-center
                                                rounded-full
                                                bg-[#d99a17]
                                                text-[#071a3d]
                                            "
                                        >
                                            <CheckCircle2
                                                size={20}
                                                strokeWidth={2.2}
                                            />
                                        </div>

                                        <div>
                                            <p
                                                className="
                                                    text-[9px]
                                                    font-semibold
                                                    tracking-[0.25em]
                                                    text-white/60
                                                "
                                            >
                                                OUR EXPERTISE
                                            </p>

                                            <p
                                                className="
                                                    mt-1
                                                    text-xs
                                                    font-semibold
                                                    text-white
                                                    sm:text-sm
                                                "
                                            >
                                                Design • Manufacturing
                                                • Installation
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* =================================
                            ESTABLISHED BADGE
                        ================================= */}

                        <div
                            className="
                                absolute
                                -right-1
                                -top-5
                                z-30
                                bg-[#071a3d]
                                px-5
                                py-4
                                shadow-xl
                                sm:-right-5
                            "
                        >
                            <p
                                className="
                                    text-[9px]
                                    font-medium
                                    tracking-[0.25em]
                                    text-[#d99a17]
                                "
                            >
                                ESTABLISHED
                            </p>

                            <p
                                className="
                                    mt-1
                                    text-2xl
                                    font-semibold
                                    text-white
                                "
                            >
                                2012
                            </p>
                        </div>
                    </div>

                    {/* =================================
                        RIGHT — CONTENT
                    ================================= */}

                    <div ref={contentRef}>

                        <div className="mb-4 flex items-center gap-3">
                            <Building2
                                size={18}
                                className="text-[#d99a17]"
                                strokeWidth={1.8}
                            />

                            <span
                                className="
                                    text-xs
                                    font-semibold
                                    tracking-[0.22em]
                                    text-[#0d2461]
                                "
                            >
                                MEGHA SYSTEMS
                            </span>
                        </div>

                        <h3
                            className="
                                max-w-2xl
                                text-2xl
                                font-semibold
                                leading-snug
                                text-[#071a3d]
                                sm:text-3xl
                                lg:text-[38px]
                            "
                        >
                            Complete restroom solutions,

                            <span className="text-[#d99a17]">
                                {" "}built to last.
                            </span>
                        </h3>

                        <div
                            className="
                                mt-6
                                space-y-4
                                text-[14px]
                                leading-7
                                text-slate-600
                                sm:text-[15px]
                            "
                        >
                            <p>
                                Established in 2012, Megha Systems has
                                grown into a trusted name in toilet
                                cubicle and restroom partition
                                solutions. With expertise spanning
                                design, manufacturing, and installation,
                                we deliver complete washroom solutions
                                built for modern commercial and
                                institutional spaces.
                            </p>

                            <p>
                                Led by{" "}
                                <span className="font-semibold text-[#071a3d]">
                                    Mr. Rakesh Talwar
                                </span>
                                , with over 25 years of industry
                                experience, our approach combines
                                technical expertise, premium materials,
                                innovative design, and meticulous
                                execution.
                            </p>

                            <p>
                                From the first concept to final
                                installation, every project is delivered
                                with a focus on{" "}
                                <span className="font-medium text-[#071a3d]">
                                    quality, precision, and lasting
                                    performance.
                                </span>
                            </p>
                        </div>

                        {/* =================================
                            VALUES
                        ================================= */}

                        <div
                            className="
                                mt-7
                                grid
                                grid-cols-1
                                gap-4
                                sm:grid-cols-3
                            "
                        >
                            {/* Precision */}

                            <div
                                className="
                                    border-l-2
                                    border-[#d99a17]
                                    pl-4
                                "
                            >
                                <Target
                                    size={18}
                                    className="mb-2 text-[#d99a17]"
                                    strokeWidth={1.8}
                                />

                                <p
                                    className="
                                        text-xs
                                        font-semibold
                                        tracking-wide
                                        text-[#071a3d]
                                    "
                                >
                                    PRECISION
                                </p>

                                <p
                                    className="
                                        mt-1
                                        text-xs
                                        leading-5
                                        text-slate-500
                                    "
                                >
                                    Meticulous execution
                                </p>
                            </div>

                            {/* Quality */}

                            <div
                                className="
                                    border-l-2
                                    border-[#d99a17]
                                    pl-4
                                "
                            >
                                <Award
                                    size={18}
                                    className="mb-2 text-[#d99a17]"
                                    strokeWidth={1.8}
                                />

                                <p
                                    className="
                                        text-xs
                                        font-semibold
                                        tracking-wide
                                        text-[#071a3d]
                                    "
                                >
                                    QUALITY
                                </p>

                                <p
                                    className="
                                        mt-1
                                        text-xs
                                        leading-5
                                        text-slate-500
                                    "
                                >
                                    Premium materials
                                </p>
                            </div>

                            {/* Expertise */}

                            <div
                                className="
                                    border-l-2
                                    border-[#d99a17]
                                    pl-4
                                "
                            >
                                <Users
                                    size={18}
                                    className="mb-2 text-[#d99a17]"
                                    strokeWidth={1.8}
                                />

                                <p
                                    className="
                                        text-xs
                                        font-semibold
                                        tracking-wide
                                        text-[#071a3d]
                                    "
                                >
                                    EXPERTISE
                                </p>

                                <p
                                    className="
                                        mt-1
                                        text-xs
                                        leading-5
                                        text-slate-500
                                    "
                                >
                                    25+ years experience
                                </p>
                            </div>
                        </div>

                        {/* =================================
                            BUTTONS
                        ================================= */}

                        <div
                            className="
                                mt-8
                                flex
                                flex-wrap
                                items-center
                                gap-5
                            "
                        >
                            <Link
                                href="/about"
                                className="
                                    group
                                    inline-flex
                                    items-center
                                    gap-2
                                    text-sm
                                    font-semibold
                                    text-[#0d2461]
                                "
                            >
                                Learn more about our journey

                                <span
                                    className="
                                        transition-transform
                                        duration-300
                                        group-hover:translate-x-1
                                    "
                                >
                                    →
                                </span>
                            </Link>

                            <Link
                                href="/contact"
                                className="
                                    inline-flex
                                    items-center
                                    justify-center
                                    bg-[#071a3d]
                                    px-6
                                    py-3
                                    text-xs
                                    font-semibold
                                    tracking-[0.15em]
                                    text-white
                                    transition-all
                                    duration-300
                                    hover:bg-[#d99a17]
                                    hover:text-[#071a3d]
                                "
                            >
                                CONTACT US
                            </Link>
                        </div>
                    </div>
                </div>

                {/* =====================================
                    STATISTICS
                ====================================== */}

                <div
                    ref={statsRef}
                    className="
                        mt-5
                        grid
                        grid-cols-2
                        border-y
                        border-[#071a3d]/10
                        lg:mt-8
                        lg:grid-cols-4
                    "
                >
                    {STATS.map((stat, index) => {
                        const Icon = stat.icon;

                        return (
                            <div
                                key={stat.label}
                                className={`
                                    group
                                    relative
                                    px-5
                                    py-7
                                    sm:px-8
                                    sm:py-9
                                    ${index !== 0
                                        ? "border-l border-[#071a3d]/10"
                                        : ""
                                    }
                                `}
                            >
                                {/* Hover gold line */}

                                <div
                                    className="
                                        absolute
                                        left-0
                                        top-0
                                        h-[2px]
                                        w-0
                                        bg-[#d99a17]
                                        transition-all
                                        duration-500
                                        group-hover:w-full
                                    "
                                />

                                <div
                                    className="
                                        mb-3
                                        flex
                                        items-center
                                        justify-between
                                    "
                                >
                                    <Icon
                                        size={21}
                                        className="text-[#d99a17]"
                                        strokeWidth={1.7}
                                    />

                                    <span
                                        className="
                                            text-[9px]
                                            font-semibold
                                            tracking-[0.2em]
                                            text-slate-400
                                        "
                                    >
                                        0{index + 1}
                                    </span>
                                </div>

                                <div
                                    className="
                                        text-2xl
                                        font-semibold
                                        tracking-tight
                                        text-[#071a3d]
                                        sm:text-4xl
                                    "
                                >
                                    <Counter
                                        value={stat.value}
                                        suffix={stat.suffix}
                                        start={counterStarted}
                                    />
                                </div>

                                <p
                                    className="
                                        mt-2
                                        text-[9px]
                                        font-semibold
                                        tracking-[0.16em]
                                        text-slate-500
                                        sm:text-xs
                                    "
                                >
                                    {stat.label.toUpperCase()}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}