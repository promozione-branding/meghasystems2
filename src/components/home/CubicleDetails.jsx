"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const CUBICLE_LAYERS = [
    {
        id: 0,
        number: 1,
        title: "SS Adjustable Leg",
        subtitle: "Adjustable stainless steel support leg",
        x: "45%",
        y: "87%",
    },
    {
        id: 1,
        number: 2,
        title: "Door Stopper",
        subtitle: "Floor-mounted door protection stopper",
        x: "38%",
        y: "63%",
    },
    {
        id: 2,
        number: 3,
        title: "Top Rail",
        subtitle: "Strong aluminum top support",
        x: "50%",
        y: "12%",
    },
    {
        id: 3,
        number: 4,
        title: "U Channel",
        subtitle: "Silver-Ion Surface Shield",
        x: "82%",
        y: "40%",
    },
    {
        id: 4,
        number: 5,
        title: "Indicator Lock",
        subtitle: "Secure internal privacy locking mechanism",
        x: "73%",
        y: "47%",
    },
    {
        id: 5,
        number: 6,
        title: "Door Knob",
        subtitle: "Durable stainless steel door knob",
        x: "15%",
        y: "53%",
    },
];

export default function CubicleDetails() {
    const [activeLayer, setActiveLayer] = useState(0);

    const active = CUBICLE_LAYERS[activeLayer];

    return (
        <section className="relative overflow-hidden bg-[#eef2f5] py-8 sm:py-10 lg:py-12">
            {/* =====================================================
                BACKGROUND
            ====================================================== */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                {/* Fine architectural grid */}
                <div
                    className="absolute inset-0 opacity-[0.035]"
                    style={{
                        backgroundImage: `
                            linear-gradient(#071a3d 1px, transparent 1px),
                            linear-gradient(90deg, #071a3d 1px, transparent 1px)
                        `,
                        backgroundSize: "60px 60px",
                    }}
                />

                {/* Large technical circles */}
                <div className="absolute -right-52 top-[-100px] h-[600px] w-[600px] rounded-full border border-[#071a3d]/[0.04]" />

                <div className="absolute -left-60 bottom-[-180px] h-[600px] w-[600px] rounded-full border border-[#d99a17]/[0.07]" />

                {/* Gold top line */}
                <div className="absolute left-0 top-0 h-px w-full bg-[#d99a17]/30" />
            </div>

            <div className="relative mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-10">
                {/* =====================================================
                    HEADER
                ====================================================== */}
                <div className="mb-6 flex flex-col gap-4 sm:mb-8 lg:flex-row lg:items-end lg:justify-between">
                    <div>
                        <div className="mb-2 flex items-center gap-3">
                            <span className="h-px w-8 bg-[#d99a17]" />

                            <span className="text-[9px] font-bold tracking-[0.3em] text-[#c99618]">
                                SYSTEM DETAILS
                            </span>
                        </div>

                        <h2 className="text-3xl font-semibold leading-[1.05] tracking-tight text-[#071a3d] sm:text-4xl lg:text-5xl">
                            Designed around
                            <span className="text-[#c99618]">
                                {" "}
                                every detail.
                            </span>
                        </h2>
                    </div>

                    <p className="max-w-md text-xs leading-5 text-[#071a3d]/55 lg:text-right">
                        Explore the key components of our cubicle system.
                        Hover or tap a marker to inspect each detail.
                    </p>
                </div>

                {/* =====================================================
                    INTERACTIVE IMAGE
                ====================================================== */}
                <div className="relative">
                    {/* ================================================
                        SVG ARCHITECTURAL BACKGROUND
                    ================================================= */}
                    <svg
                        className="pointer-events-none absolute -inset-8 z-0 h-[calc(100%+64px)] w-[calc(100%+64px)] opacity-50"
                        viewBox="0 0 1200 650"
                        fill="none"
                        preserveAspectRatio="none"
                    >
                        {/* Outer architectural frame */}
                        <motion.path
                            d="M80 110H1120V540H80V110Z"
                            stroke="#071a3d"
                            strokeWidth="1"
                            strokeDasharray="8 14"
                            initial={{ pathLength: 0, opacity: 0 }}
                            whileInView={{ pathLength: 1, opacity: 0.12 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.8 }}
                        />

                        {/* Perspective ceiling */}
                        <motion.path
                            d="M180 110L600 40L1020 110"
                            stroke="#d99a17"
                            strokeWidth="2"
                            strokeDasharray="10 12"
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 1.5,
                                delay: 0.2,
                            }}
                        />

                        {/* Perspective floor */}
                        <motion.path
                            d="M180 540L600 610L1020 540"
                            stroke="#071a3d"
                            strokeWidth="1"
                            strokeDasharray="7 12"
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 1.5,
                                delay: 0.4,
                            }}
                        />

                        {/* Center construction line */}
                        <motion.path
                            d="M600 40V610"
                            stroke="#d99a17"
                            strokeWidth="1"
                            strokeDasharray="3 10"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 0.2 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                        />

                        {/* Horizontal construction lines */}
                        <path
                            d="M80 205H1120M80 430H1120"
                            stroke="#071a3d"
                            strokeWidth="1"
                            opacity="0.07"
                        />

                        {/* Technical corner marks */}
                        <g
                            stroke="#d99a17"
                            strokeWidth="2"
                            opacity="0.35"
                        >
                            <path d="M50 140H95M70 120V165" />
                            <path d="M1105 140H1150M1130 120V165" />
                            <path d="M50 515H95M70 495V540" />
                            <path d="M1105 515H1150M1130 495V540" />
                        </g>

                        {/* Moving technical dash */}
                        <motion.circle
                            cx="600"
                            cy="325"
                            r="235"
                            stroke="#d99a17"
                            strokeWidth="1"
                            strokeDasharray="3 18"
                            animate={{ rotate: 360 }}
                            transition={{
                                duration: 35,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                            style={{
                                transformOrigin: "600px 325px",
                            }}
                            opacity="0.16"
                        />
                    </svg>

                    {/* =================================================
                        IMAGE FRAME
                    ================================================= */}
                    <div className="relative z-10 overflow-hidden border border-[#071a3d]/10 bg-white p-1.5 shadow-[0_18px_55px_rgba(7,26,61,0.10)] sm:p-2">
                        {/* Gold architectural corners */}
                        <span className="absolute left-0 top-0 z-40 h-12 w-12 border-l-2 border-t-2 border-[#d99a17]" />

                        <span className="absolute right-0 top-0 z-40 h-12 w-12 border-r-2 border-t-2 border-[#d99a17]" />

                        <span className="absolute bottom-0 left-0 z-40 h-12 w-12 border-b-2 border-l-2 border-[#d99a17]" />

                        <span className="absolute bottom-0 right-0 z-40 h-12 w-12 border-b-2 border-r-2 border-[#d99a17]" />

                        {/* =================================================
                            PHOTO
                        ================================================== */}
                        <div className="relative h-[330px] overflow-hidden bg-[#dfe4e8] sm:h-[400px] lg:h-[520px]">
                            <img
                                src="/Kiddiez.webp"
                                alt="Megha Systems toilet cubicle installation"
                                className="absolute inset-0 h-full w-full object-cover"
                            />

                            {/* Very subtle image treatment */}
                            <div className="absolute inset-0 bg-gradient-to-b from-[#071a3d]/[0.04] via-transparent to-[#071a3d]/[0.12]" />

                            {/* Inner frame */}
                            <div className="pointer-events-none absolute inset-4 border border-white/25" />

                            {CUBICLE_LAYERS.map((layer) => {
                                const isActive =
                                    activeLayer === layer.id;

                                return (
                                    <button
                                        key={layer.id}
                                        type="button"
                                        aria-label={layer.title}
                                        onMouseEnter={() =>
                                            setActiveLayer(layer.id)
                                        }
                                        onFocus={() =>
                                            setActiveLayer(layer.id)
                                        }
                                        onClick={() =>
                                            setActiveLayer(layer.id)
                                        }
                                        className="group absolute z-20 -translate-x-1/2 -translate-y-1/2"
                                        style={{
                                            left: layer.x,
                                            top: layer.y,
                                        }}
                                    >
                                        {/* Connector */}
                                        <span
                                            className={`
                                                absolute left-full top-1/2
                                                hidden h-px -translate-y-1/2
                                                bg-white transition-all
                                                duration-300 sm:block
                                                ${isActive
                                                    ? "w-10 opacity-100"
                                                    : "w-4 opacity-60"
                                                }
                                            `}
                                        />

                                        {/* Number */}
                                        <motion.span
                                            animate={{
                                                scale: isActive
                                                    ? 1.1
                                                    : 1,
                                            }}
                                            transition={{
                                                duration: 0.25,
                                            }}
                                            className={`
                                                relative flex h-9 w-9
                                                items-center justify-center
                                                rounded-full border-2
                                                text-xs font-bold
                                                shadow-[0_5px_18px_rgba(0,0,0,0.25)]
                                                transition-all duration-300
                                                ${isActive
                                                    ? "border-white bg-[#071a3d] text-white"
                                                    : "border-white bg-white/95 text-[#071a3d]"
                                                }
                                            `}
                                        >
                                            {layer.number}

                                            {isActive && (
                                                <span className="absolute inset-[-5px] rounded-full border border-white/60 animate-ping" />
                                            )}
                                        </motion.span>
                                    </button>
                                );
                            })}

                            {/* =================================================
                                INFO CARD
                            ================================================== */}
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={active.id}
                                    initial={{
                                        opacity: 0,
                                        y: 8,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    exit={{
                                        opacity: 0,
                                        y: 5,
                                    }}
                                    transition={{
                                        duration: 0.22,
                                    }}
                                    className="absolute bottom-4 left-4 z-30 w-[290px] max-w-[calc(100%-32px)] sm:bottom-5 sm:left-5 sm:w-[330px]"
                                >
                                    <div className="relative border border-white/30 bg-white/95 p-4 shadow-[0_12px_35px_rgba(7,26,61,0.20)] backdrop-blur-xl">
                                        {/* Gold accent */}
                                        <div className="absolute left-0 top-0 h-full w-[3px] bg-[#d99a17]" />

                                        <div className="flex items-start gap-3">
                                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#071a3d] text-xs font-bold text-white">
                                                {active.number}
                                            </div>

                                            <div className="min-w-0">
                                                <p className="text-[8px] font-bold tracking-[0.22em] text-[#c99618]">
                                                    COMPONENT / 0
                                                    {active.number}
                                                </p>

                                                <h3 className="mt-1 text-sm font-semibold text-[#071a3d] sm:text-base">
                                                    {active.title}
                                                </h3>

                                                <p className="mt-0.5 text-[10px] leading-4 text-[#071a3d]/55 sm:text-xs">
                                                    {active.subtitle}
                                                </p>
                                            </div>

                                            <ArrowUpRight
                                                size={14}
                                                className="ml-auto shrink-0 text-[#c99618]"
                                            />
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>

                            {/* =================================================
                                DETAIL COUNTER
                            ================================================== */}
                            <div className="absolute bottom-4 right-4 z-30 hidden sm:block">
                                <div className="border border-white/20 bg-[#071a3d]/90 px-3 py-2 backdrop-blur-md">
                                    <p className="text-[7px] font-bold tracking-[0.22em] text-white/50">
                                        SYSTEM DETAIL
                                    </p>

                                    <p className="mt-0.5 text-xs font-bold text-white">
                                        {String(active.number).padStart(
                                            2,
                                            "0"
                                        )}
                                        <span className="mx-1 text-[#d99a17]">
                                            /
                                        </span>
                                        {String(
                                            CUBICLE_LAYERS.length
                                        ).padStart(2, "0")}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* =====================================================
                    COMPACT COMPONENT NAVIGATION
                ====================================================== */}
                <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
                    {CUBICLE_LAYERS.map((layer) => {
                        const isActive =
                            activeLayer === layer.id;

                        return (
                            <button
                                key={layer.id}
                                type="button"
                                onMouseEnter={() =>
                                    setActiveLayer(layer.id)
                                }
                                onClick={() =>
                                    setActiveLayer(layer.id)
                                }
                                className={`
                                    flex items-center gap-2
                                    border px-3 py-2
                                    text-[9px] font-semibold
                                    tracking-[0.08em]
                                    transition-all duration-300
                                    ${isActive
                                        ? "border-[#071a3d] bg-[#071a3d] text-white"
                                        : "border-[#071a3d]/10 bg-white/60 text-[#071a3d]/60 hover:border-[#d99a17]/50 hover:bg-white"
                                    }
                                `}
                            >
                                <span
                                    className={`
                                        flex h-5 w-5 items-center
                                        justify-center rounded-full
                                        text-[8px]
                                        ${isActive
                                            ? "bg-[#d99a17] text-[#071a3d]"
                                            : "bg-[#071a3d]/5"
                                        }
                                    `}
                                >
                                    {layer.number}
                                </span>

                                <span className="hidden sm:inline">
                                    {layer.title}
                                </span>
                            </button>
                        );
                    })}
                </div>

                {/* =====================================================
                    BOTTOM MICRO LINE
                ====================================================== */}
                <div className="mt-5 flex items-center justify-center gap-3">
                    <span className="h-px w-8 bg-[#d99a17]" />

                    <span className="text-[8px] font-bold tracking-[0.25em] text-[#071a3d]/40">
                        PREMIUM HARDWARE • PRECISION INSTALLATION
                    </span>

                    <span className="h-px w-8 bg-[#d99a17]" />
                </div>
            </div>
        </section>
    );
}