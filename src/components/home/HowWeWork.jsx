"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
    Ruler,
    PenTool,
    Factory,
    Wrench,
    CheckCircle2,
    ArrowRight,
} from "lucide-react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const STEPS = [
    {
        number: "01",
        title: "Understand",
        subtitle: "Consultation & Site Study",
        description:
            "We understand your requirements, washroom layout, usage, dimensions and project expectations before moving forward.",
        icon: Ruler,
    },
    {
        number: "02",
        title: "Design",
        subtitle: "Planning & Customisation",
        description:
            "Our team develops a practical cubicle layout with the right materials, finishes, hardware and configurations for your space.",
        icon: PenTool,
    },
    {
        number: "03",
        title: "Manufacture",
        subtitle: "Precision Production",
        description:
            "Every component is manufactured with attention to material quality, dimensions, finishing and structural performance.",
        icon: Factory,
    },
    {
        number: "04",
        title: "Install",
        subtitle: "Professional Execution",
        description:
            "Our installation team brings the design to life with accurate fitting, alignment and finishing at your site.",
        icon: Wrench,
    },
];

export default function HowWeWork() {
    const sectionRef = useRef(null);
    const svgRef = useRef(null);
    const panelLeftRef = useRef(null);
    const panelRightRef = useRef(null);
    const doorRef = useRef(null);
    const topRailRef = useRef(null);
    const floorRef = useRef(null);

    useEffect(() => {
        const section = sectionRef.current;

        if (!section) return;

        const ctx = gsap.context(() => {
            // ---------------------------------------
            // Section reveal
            // ---------------------------------------

            gsap.fromTo(
                ".how-heading",
                {
                    opacity: 0,
                    y: 35,
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.9,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: section,
                        start: "top 78%",
                        once: true,
                    },
                }
            );

            // ---------------------------------------
            // SVG PARTITION ANIMATION
            // ---------------------------------------

            gsap.fromTo(
                panelLeftRef.current,
                {
                    x: -100,
                    opacity: 0,
                    rotationY: -12,
                },
                {
                    x: 0,
                    opacity: 1,
                    rotationY: 0,
                    duration: 1.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: svgRef.current,
                        start: "top 80%",
                        once: true,
                    },
                }
            );

            gsap.fromTo(
                panelRightRef.current,
                {
                    x: 100,
                    opacity: 0,
                    rotationY: 12,
                },
                {
                    x: 0,
                    opacity: 1,
                    rotationY: 0,
                    duration: 1.2,
                    ease: "power3.out",
                    delay: 0.1,
                    scrollTrigger: {
                        trigger: svgRef.current,
                        start: "top 80%",
                        once: true,
                    },
                }
            );

            gsap.fromTo(
                doorRef.current,
                {
                    y: 80,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power3.out",
                    delay: 0.3,
                    scrollTrigger: {
                        trigger: svgRef.current,
                        start: "top 80%",
                        once: true,
                    },
                }
            );

            gsap.fromTo(
                topRailRef.current,
                {
                    scaleX: 0,
                    transformOrigin: "center",
                },
                {
                    scaleX: 1,
                    duration: 1.2,
                    ease: "power3.inOut",
                    delay: 0.2,
                    scrollTrigger: {
                        trigger: svgRef.current,
                        start: "top 80%",
                        once: true,
                    },
                }
            );

            gsap.fromTo(
                floorRef.current,
                {
                    scaleX: 0,
                    transformOrigin: "center",
                },
                {
                    scaleX: 1,
                    duration: 1,
                    ease: "power3.inOut",
                    delay: 0.45,
                    scrollTrigger: {
                        trigger: svgRef.current,
                        start: "top 80%",
                        once: true,
                    },
                }
            );

            // ---------------------------------------
            // Continuous subtle movement
            // ---------------------------------------

            gsap.to(".partition-glow", {
                opacity: 0.35,
                scale: 1.08,
                duration: 2.5,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });

            // ---------------------------------------
            // Step cards
            // ---------------------------------------

            gsap.fromTo(
                ".work-step",
                {
                    opacity: 0,
                    x: 45,
                },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.7,
                    stagger: 0.14,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".work-steps",
                        start: "top 82%",
                        once: true,
                    },
                }
            );
        }, section);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative overflow-hidden bg-[#071a3d] py-10 sm:py-12 lg:py-15"
        >
            {/* ================================================= */}
            {/* BACKGROUND                                        */}
            {/* ================================================= */}

            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute -right-48 top-20 h-[600px] w-[600px] rotate-45 border border-white/[0.035]" />

                <div className="absolute -left-48 bottom-0 h-[500px] w-[500px] -rotate-45 border border-[#d99a17]/10" />

                <div className="absolute left-1/2 top-0 h-full w-px bg-white/[0.025]" />

                <div className="absolute right-[10%] top-[25%] h-[300px] w-[300px] rounded-full bg-[#d99a17]/[0.025] blur-3xl" />
            </div>

            <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">

                {/* ================================================= */}
                {/* HEADING                                           */}
                {/* ================================================= */}

                <div className="how-heading mb-5 max-w-3xl sm:mb-8 lg:mb-10">
                    <div className="mb-4 flex items-center gap-3">
                        <span className="h-px w-10 bg-[#d99a17]" />

                        <span className="text-[10px] font-semibold tracking-[0.32em] text-[#d99a17] sm:text-[11px]">
                            HOW WE WORK
                        </span>
                    </div>

                    <h2 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                        From concept
                        <br />
                        <span className="text-[#d99a17]">
                            to completion.
                        </span>
                    </h2>

                    <p className="mt-5 max-w-2xl text-sm leading-7 text-white/50 sm:text-base">
                        A structured approach that brings together design,
                        precision manufacturing and professional installation
                        to deliver restroom solutions built for lasting
                        performance.
                    </p>
                </div>

                {/* ================================================= */}
                {/* MAIN GRID                                         */}
                {/* ================================================= */}

                <div className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">

                    {/* ================================================= */}
                    {/* LEFT — ANIMATED PARTITION SVG                     */}
                    {/* ================================================= */}

                    <div
                        ref={svgRef}
                        className="relative mx-auto w-full max-w-[650px]"
                    >
                        {/* Glow */}
                        <div className="partition-glow absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d99a17]/10 blur-3xl" />

                        {/* Architectural border */}
                        <div className="absolute -bottom-5 -left-5 h-[80%] w-[65%] border-b border-l border-[#d99a17]/50" />

                        <div className="absolute -right-4 -top-4 h-16 w-16 border-r border-t border-[#d99a17]/40" />

                        {/* SVG */}
                        <svg
                            viewBox="0 0 700 560"
                            className="relative z-10 w-full"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {/* ----------------------------------------- */}
                            {/* FLOOR SHADOW                               */}
                            {/* ----------------------------------------- */}

                            <ellipse
                                cx="350"
                                cy="500"
                                rx="260"
                                ry="24"
                                fill="#000"
                                opacity="0.25"
                            />

                            {/* ----------------------------------------- */}
                            {/* LEFT PARTITION                             */}
                            {/* ----------------------------------------- */}

                            <g
                                ref={panelLeftRef}
                                style={{
                                    transformOrigin: "230px 100px",
                                }}
                            >
                                {/* Main panel */}
                                <path
                                    d="M105 125 L225 85 L225 455 L105 475 Z"
                                    fill="#102957"
                                    stroke="#d99a17"
                                    strokeWidth="2"
                                />

                                {/* Panel inner */}
                                <path
                                    d="M125 145 L205 118 L205 425 L125 438 Z"
                                    fill="#0b2148"
                                    stroke="white"
                                    strokeOpacity="0.12"
                                />

                                {/* Vertical aluminium edge */}
                                <path
                                    d="M205 118 L225 108 L225 455 L205 425 Z"
                                    fill="#d99a17"
                                    opacity="0.8"
                                />

                                {/* Hardware */}
                                <circle
                                    cx="165"
                                    cy="275"
                                    r="7"
                                    fill="#d99a17"
                                />

                                <circle
                                    cx="165"
                                    cy="275"
                                    r="11"
                                    stroke="white"
                                    strokeOpacity="0.2"
                                />
                            </g>

                            {/* ----------------------------------------- */}
                            {/* RIGHT PARTITION                            */}
                            {/* ----------------------------------------- */}

                            <g
                                ref={panelRightRef}
                                style={{
                                    transformOrigin: "470px 100px",
                                }}
                            >
                                <path
                                    d="M475 85 L595 125 L595 475 L475 455 Z"
                                    fill="#102957"
                                    stroke="#d99a17"
                                    strokeWidth="2"
                                />

                                <path
                                    d="M495 118 L575 145 L575 438 L495 425 Z"
                                    fill="#0b2148"
                                    stroke="white"
                                    strokeOpacity="0.12"
                                />

                                <path
                                    d="M475 108 L495 118 L495 425 L475 455 Z"
                                    fill="#d99a17"
                                    opacity="0.8"
                                />

                                <circle
                                    cx="535"
                                    cy="275"
                                    r="7"
                                    fill="#d99a17"
                                />

                                <circle
                                    cx="535"
                                    cy="275"
                                    r="11"
                                    stroke="white"
                                    strokeOpacity="0.2"
                                />
                            </g>

                            {/* ----------------------------------------- */}
                            {/* CENTER DOOR                                */}
                            {/* ----------------------------------------- */}

                            <g ref={doorRef}>
                                <rect
                                    x="225"
                                    y="105"
                                    width="250"
                                    height="350"
                                    fill="#0d2461"
                                    stroke="#d99a17"
                                    strokeWidth="3"
                                />

                                {/* Door face */}
                                <rect
                                    x="245"
                                    y="125"
                                    width="210"
                                    height="310"
                                    fill="#0a1f46"
                                    stroke="white"
                                    strokeOpacity="0.1"
                                />

                                {/* Door decorative panel */}
                                <path
                                    d="M270 150 L430 150 L430 410 L270 410 Z"
                                    stroke="#d99a17"
                                    strokeOpacity="0.18"
                                />

                                {/* Door handle */}
                                <circle
                                    cx="405"
                                    cy="280"
                                    r="8"
                                    fill="#d99a17"
                                />

                                <circle
                                    cx="405"
                                    cy="280"
                                    r="13"
                                    stroke="#d99a17"
                                    strokeOpacity="0.3"
                                />

                                {/* Door indicator */}
                                <rect
                                    x="380"
                                    y="245"
                                    width="50"
                                    height="18"
                                    rx="2"
                                    fill="#071a3d"
                                    stroke="white"
                                    strokeOpacity="0.15"
                                />

                                <circle
                                    cx="392"
                                    cy="254"
                                    r="4"
                                    fill="#d99a17"
                                />

                                {/* Door bottom */}
                                <rect
                                    x="245"
                                    y="425"
                                    width="210"
                                    height="10"
                                    fill="#d99a17"
                                    opacity="0.7"
                                />
                            </g>

                            {/* ----------------------------------------- */}
                            {/* TOP RAIL                                   */}
                            {/* ----------------------------------------- */}

                            <g ref={topRailRef}>
                                <path
                                    d="M90 105 L225 60 L475 60 L610 105"
                                    stroke="#d99a17"
                                    strokeWidth="8"
                                    strokeLinecap="square"
                                />

                                <path
                                    d="M105 91 L225 50 L475 50 L595 91"
                                    stroke="white"
                                    strokeOpacity="0.2"
                                    strokeWidth="2"
                                />
                            </g>

                            {/* ----------------------------------------- */}
                            {/* FLOOR RAIL                                 */}
                            {/* ----------------------------------------- */}

                            <g ref={floorRef}>
                                <path
                                    d="M95 475 L225 455 L475 455 L605 475"
                                    stroke="#d99a17"
                                    strokeWidth="7"
                                />

                                <path
                                    d="M120 490 L225 475 L475 475 L580 490"
                                    stroke="white"
                                    strokeOpacity="0.12"
                                    strokeWidth="2"
                                />
                            </g>

                            {/* ----------------------------------------- */}
                            {/* FLOOR LEGS                                 */}
                            {/* ----------------------------------------- */}

                            <path
                                d="M135 480 L135 505"
                                stroke="#d99a17"
                                strokeWidth="5"
                            />

                            <path
                                d="M565 480 L565 505"
                                stroke="#d99a17"
                                strokeWidth="5"
                            />

                            <path
                                d="M330 460 L330 500"
                                stroke="#d99a17"
                                strokeWidth="5"
                            />

                            <path
                                d="M370 460 L370 500"
                                stroke="#d99a17"
                                strokeWidth="5"
                            />

                            {/* ----------------------------------------- */}
                            {/* DIMENSION LINE                             */}
                            {/* ----------------------------------------- */}

                            <path
                                d="M105 525 L595 525"
                                stroke="white"
                                strokeOpacity="0.15"
                            />

                            <path
                                d="M105 519 L105 531"
                                stroke="#d99a17"
                            />

                            <path
                                d="M595 519 L595 531"
                                stroke="#d99a17"
                            />

                            <text
                                x="350"
                                y="545"
                                textAnchor="middle"
                                fill="white"
                                fillOpacity="0.35"
                                fontSize="11"
                                letterSpacing="3"
                            >
                                PRECISION ENGINEERED
                            </text>
                        </svg>

                        {/* Floating label */}
                        <div className="absolute bottom-3 left-3 z-20 flex items-center gap-3 border border-white/10 bg-[#071a3d]/90 px-4 py-3 backdrop-blur-md sm:bottom-5 sm:left-5">
                            <CheckCircle2
                                size={18}
                                className="text-[#d99a17]"
                            />

                            <div>
                                <p className="text-[9px] font-semibold tracking-[0.22em] text-[#d99a17]">
                                    MEGHA SYSTEMS
                                </p>

                                <p className="mt-0.5 text-xs text-white/60">
                                    Built with precision
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* ================================================= */}
                    {/* RIGHT — STEPS                                      */}
                    {/* ================================================= */}

                    <div className="work-steps">

                        {STEPS.map((step, index) => {
                            const Icon = step.icon;

                            return (
                                <motion.div
                                    key={step.number}
                                    className="work-step group relative border-b border-white/10 py-6 first:pt-0 last:border-b-0 sm:py-7"
                                    whileHover={{
                                        x: 6,
                                    }}
                                    transition={{
                                        duration: 0.25,
                                    }}
                                >
                                    <div className="flex gap-5 sm:gap-7">

                                        {/* Number */}
                                        <div className="relative flex w-12 shrink-0 flex-col items-center">
                                            <span className="text-xs font-semibold tracking-widest text-[#d99a17]">
                                                {step.number}
                                            </span>

                                            {index !== STEPS.length - 1 && (
                                                <span className="absolute top-8 h-[calc(100%+1.5rem)] w-px bg-white/10" />
                                            )}
                                        </div>

                                        {/* Icon */}
                                        <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/10 transition-all duration-300 group-hover:border-[#d99a17] group-hover:bg-[#d99a17]">
                                            <Icon
                                                size={19}
                                                strokeWidth={1.6}
                                                className="text-[#d99a17] transition-colors duration-300 group-hover:text-[#071a3d]"
                                            />
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1">
                                            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                                                <h3 className="text-lg font-semibold text-white sm:text-xl">
                                                    {step.title}
                                                </h3>

                                                <span className="text-[9px] font-semibold tracking-[0.15em] text-[#d99a17]">
                                                    {step.subtitle.toUpperCase()}
                                                </span>
                                            </div>

                                            <p className="mt-2 max-w-xl text-sm leading-6 text-white/45">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}

                        {/* CTA */}
                        <div className="mt-8">
                            <Link
                                href="/contact"
                                className="group inline-flex items-center gap-4 border border-[#d99a17]/50 px-6 py-3.5 text-xs font-semibold tracking-[0.16em] text-white transition-all duration-300 hover:border-[#d99a17] hover:bg-[#d99a17] hover:text-[#071a3d]"
                            >
                                START YOUR PROJECT

                                <ArrowRight
                                    size={16}
                                    className="transition-transform duration-300 group-hover:translate-x-1"
                                />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* ================================================= */}
                {/* BOTTOM TRUST LINE                                */}
                {/* ================================================= */}

                <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 border-t border-white/10 pt-7 sm:mt-10">
                    <span className="text-[9px] font-semibold tracking-[0.2em] text-white/30">
                        SITE STUDY
                    </span>

                    <span className="h-1 w-1 bg-[#d99a17]" />

                    <span className="text-[9px] font-semibold tracking-[0.2em] text-white/30">
                        DESIGN
                    </span>

                    <span className="h-1 w-1 bg-[#d99a17]" />

                    <span className="text-[9px] font-semibold tracking-[0.2em] text-white/30">
                        MANUFACTURING
                    </span>

                    <span className="h-1 w-1 bg-[#d99a17]" />

                    <span className="text-[9px] font-semibold tracking-[0.2em] text-white/30">
                        INSTALLATION
                    </span>

                    <span className="h-1 w-1 bg-[#d99a17]" />

                    <span className="text-[9px] font-semibold tracking-[0.2em] text-white/30">
                        QUALITY CHECK
                    </span>
                </div>
            </div>
        </section>
    );
}