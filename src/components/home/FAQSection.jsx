"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Plus } from "lucide-react";

const FAQS = [
    {
        id: 1,
        question: "What are toilet cubicles?",
        answer:
            "Toilet cubicles are modular restroom partition systems used to create individual private toilet compartments. Megha Systems provides complete cubicle solutions including panels, doors, hardware, support systems, and installation.",
    },
    {
        id: 2,
        question: "What materials are used for your toilet cubicles?",
        answer:
            "Our cubicle systems are manufactured using premium-grade partition materials selected according to the project requirements. Material selection can be customized based on durability, appearance, moisture resistance, application, and budget.",
    },
    {
        id: 3,
        question: "Can you customize the cubicle design?",
        answer:
            "Yes. Cubicle dimensions, layouts, colours, finishes, hardware, doors, and configurations can be planned according to the architectural requirements of your project.",
    },
    {
        id: 4,
        question: "Do you provide installation services?",
        answer:
            "Yes. Megha Systems provides end-to-end support from design and material planning through manufacturing and professional site installation.",
    },
    {
        id: 5,
        question: "Where can toilet cubicles be used?",
        answer:
            "Our systems are suitable for commercial offices, factories, malls, hotels, educational institutions, hospitals, airports, restaurants, public facilities, and other high-traffic environments.",
    },
    {
        id: 6,
        question: "How long does a cubicle project take?",
        answer:
            "Project timelines depend on the number of cubicles, selected materials, customization, site conditions, and installation requirements. After understanding the project, our team can provide a suitable execution timeline.",
    },
    {
        id: 7,
        question: "Can you handle large commercial projects?",
        answer:
            "Yes. Our design, manufacturing, and installation capabilities allow us to handle projects ranging from individual commercial washrooms to large institutional and industrial requirements.",
    },
    {
        id: 8,
        question: "How can I get a quotation?",
        answer:
            "You can contact our team with your project requirements, drawings, approximate cubicle quantity, location, and preferred specifications. Our team can then review the requirement and prepare a suitable quotation.",
    },
];

export default function FAQSection() {
    const [activeFaq, setActiveFaq] = useState(0);

    return (
        <section className="relative overflow-hidden bg-[#f8f7f3] py-9 sm:py-11 lg:py-14">
            {/* =====================================================
                BACKGROUND
            ====================================================== */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                {/* Architectural grid */}
                <div
                    className="absolute inset-0 opacity-[0.035]"
                    style={{
                        backgroundImage: `
                            linear-gradient(#c99618 1px, transparent 1px),
                            linear-gradient(90deg, #071a3d 1px, transparent 1px)
                        `,
                        backgroundSize: "70px 70px",
                    }}
                />

                {/* Large technical circle */}
                <div className="absolute -right-64 -top-56 h-[650px] w-[650px] rounded-full border border-[#071a3d]/[0.045]" />

                <div className="absolute -bottom-64 -left-64 h-[620px] w-[620px] rounded-full border border-[#d99a17]/[0.08]" />

                {/* Second circle */}
                <div className="absolute -right-44 -top-36 h-[450px] w-[450px] rounded-full border border-[#d99a17]/[0.06]" />

                {/* Top gold line */}
                <div className="absolute left-0 top-0 h-px w-full bg-[#d99a17]/35" />

                {/* Bottom technical line */}
                <div className="absolute bottom-0 left-0 h-px w-full bg-[#071a3d]/10" />

                {/* =================================================
                    TECHNICAL SVG
                ================================================== */}
                <svg
                    className="absolute right-[-80px] top-10 h-[430px] w-[520px] opacity-[0.12]"
                    viewBox="0 0 520 430"
                    fill="none"
                >
                    {/* Cubicle outline */}
                    <path
                        d="M90 145L260 75L430 145V355L260 410L90 355V145Z"
                        stroke="#071a3d"
                        strokeWidth="1"
                    />

                    {/* Left partition */}
                    <path
                        d="M125 158V330L195 353V130L125 158Z"
                        stroke="#071a3d"
                        strokeWidth="1.5"
                    />

                    {/* Right partition */}
                    <path
                        d="M395 158V330L325 353V130L395 158Z"
                        stroke="#071a3d"
                        strokeWidth="1.5"
                    />

                    {/* Center door */}
                    <path
                        d="M210 125H310V350L260 370L210 350V125Z"
                        stroke="#c99618"
                        strokeWidth="2"
                    />

                    {/* Handle */}
                    <circle
                        cx="285"
                        cy="235"
                        r="7"
                        stroke="#c99618"
                        strokeWidth="2"
                    />

                    <circle
                        cx="285"
                        cy="235"
                        r="2.5"
                        fill="#c99618"
                    />

                    {/* Technical ring */}
                    <motion.circle
                        cx="260"
                        cy="235"
                        r="130"
                        stroke="#c99618"
                        strokeWidth="1"
                        strokeDasharray="4 12"
                        animate={{
                            rotate: 360,
                        }}
                        transition={{
                            duration: 35,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        style={{
                            transformOrigin: "260px 235px",
                        }}
                    />

                    {/* Center construction line */}
                    <path
                        d="M260 75V410"
                        stroke="#071a3d"
                        strokeWidth="1"
                        strokeDasharray="4 8"
                    />

                    {/* Top support */}
                    <path
                        d="M260 75V35"
                        stroke="#c99618"
                        strokeWidth="2"
                    />

                    <circle
                        cx="260"
                        cy="28"
                        r="7"
                        stroke="#c99618"
                        strokeWidth="2"
                    />

                    {/* Dimension line */}
                    <path
                        d="M125 385H395"
                        stroke="#071a3d"
                        strokeWidth="1"
                    />

                    <path
                        d="M125 378V392M395 378V392"
                        stroke="#071a3d"
                        strokeWidth="1"
                    />

                    {/* Moving point */}
                    <motion.circle
                        cx="260"
                        cy="235"
                        r="4"
                        fill="#c99618"
                        animate={{
                            opacity: [0.25, 1, 0.25],
                            scale: [0.8, 1.4, 0.8],
                        }}
                        transition={{
                            duration: 2.4,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                </svg>
            </div>

            {/* =====================================================
                MAIN CONTENT
            ====================================================== */}
            <div className="relative mx-auto max-w-[1180px] px-5 sm:px-7 lg:px-10">
                {/* =================================================
                    HEADER
                ================================================== */}
                <div className="mb-7 grid gap-4 lg:mb-8 lg:grid-cols-[1fr_400px] lg:items-end">
                    <div>
                        <div className="mb-2.5 flex items-center gap-3">
                            <span className="h-px w-9 bg-[#d99a17]" />

                            <span className="text-[9px] font-bold tracking-[0.3em] text-[#c99618]">
                                FREQUENTLY ASKED QUESTIONS
                            </span>
                        </div>

                        <h2 className="text-3xl font-semibold leading-[1.05] tracking-tight text-[#071a3d] sm:text-4xl lg:text-5xl">
                            Questions,
                            <br />
                            <span className="text-[#c99618]">
                                clearly answered.
                            </span>
                        </h2>
                    </div>

                    <p className="max-w-md text-xs leading-5 text-[#071a3d]/55 lg:text-right">
                        Find answers about our toilet cubicles, materials,
                        customization, installation, and project execution.
                    </p>
                </div>

                {/* =================================================
                    FAQ AREA
                ================================================== */}
                <div className="relative grid gap-5 lg:grid-cols-[0.7fr_1.3fr]">
                    {/* =================================================
                        LEFT INFORMATION PANEL
                    ================================================== */}
                    <div className="relative hidden min-h-[470px] overflow-hidden border border-[#071a3d]/10 bg-[#071a3d] lg:block">
                        {/* SVG background */}
                        <svg
                            className="absolute inset-0 h-full w-full"
                            viewBox="0 0 500 600"
                            fill="none"
                            preserveAspectRatio="none"
                        >
                            {/* Main frame */}
                            <path
                                d="M55 115H445V485H55V115Z"
                                stroke="#ffffff"
                                strokeWidth="1"
                                opacity="0.12"
                            />

                            {/* Perspective roof */}
                            <path
                                d="M55 115L250 45L445 115"
                                stroke="#d99a17"
                                strokeWidth="2"
                                opacity="0.45"
                            />

                            {/* Perspective floor */}
                            <path
                                d="M55 485L250 550L445 485"
                                stroke="#ffffff"
                                strokeWidth="1"
                                opacity="0.15"
                            />

                            {/* Cubicle panels */}
                            <path
                                d="M110 135V440L180 465V110L110 135Z"
                                stroke="#ffffff"
                                strokeWidth="1.5"
                                opacity="0.2"
                            />

                            <path
                                d="M390 135V440L320 465V110L390 135Z"
                                stroke="#ffffff"
                                strokeWidth="1.5"
                                opacity="0.2"
                            />

                            {/* Center door */}
                            <path
                                d="M195 105H305V465L250 485L195 465V105Z"
                                stroke="#d99a17"
                                strokeWidth="2"
                                opacity="0.55"
                            />

                            {/* Handle */}
                            <circle
                                cx="278"
                                cy="285"
                                r="7"
                                stroke="#d99a17"
                                strokeWidth="2"
                            />

                            {/* Technical ring */}
                            <motion.circle
                                cx="250"
                                cy="285"
                                r="150"
                                stroke="#ffffff"
                                strokeWidth="1"
                                strokeDasharray="5 13"
                                animate={{
                                    rotate: 360,
                                }}
                                transition={{
                                    duration: 40,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                                style={{
                                    transformOrigin: "250px 285px",
                                }}
                                opacity="0.16"
                            />

                            {/* Vertical center */}
                            <path
                                d="M250 45V550"
                                stroke="#d99a17"
                                strokeWidth="1"
                                strokeDasharray="3 9"
                                opacity="0.25"
                            />
                        </svg>

                        <div className="relative z-10 flex min-h-[470px] flex-col justify-between p-7">
                            {/* Top */}
                            <div>
                                <p className="text-[8px] font-bold tracking-[0.3em] text-[#d99a17]">
                                    MEGHA SYSTEMS
                                </p>

                                <h3 className="mt-5 text-2xl font-semibold leading-tight text-white">
                                    Every project
                                    <br />
                                    starts with
                                    <br />
                                    <span className="text-[#d99a17]">
                                        clarity.
                                    </span>
                                </h3>
                            </div>

                            {/* Bottom */}
                            <div>
                                <div className="mb-4 h-px w-10 bg-[#d99a17]" />

                                <p className="max-w-xs text-xs leading-5 text-white/50">
                                    From initial consultation to final
                                    installation, our team works with you to
                                    create a solution that fits your project.
                                </p>

                                <div className="mt-6 flex items-center gap-3">
                                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#d99a17]/50">
                                        <span className="h-1.5 w-1.5 rounded-full bg-[#d99a17]" />
                                    </div>

                                    <div>
                                        <p className="text-[7px] font-bold tracking-[0.2em] text-white/30">
                                            PROJECT SUPPORT
                                        </p>

                                        <p className="mt-1 text-[10px] font-medium text-white/75">
                                            DESIGN • MANUFACTURING • INSTALLATION
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* =================================================
                        FAQ ACCORDION
                    ================================================== */}
                    <div className="border border-[#071a3d]/10 bg-white">
                        {FAQS.map((faq, index) => {
                            const isOpen = activeFaq === index;

                            return (
                                <div
                                    key={faq.id}
                                    className={`
                                        relative border-b border-[#071a3d]/10
                                        last:border-b-0
                                        transition-colors duration-300
                                        ${isOpen
                                            ? "bg-white"
                                            : "bg-[#fbfaf7]"
                                        }
                                    `}
                                >
                                    {/* Active gold line */}
                                    <motion.div
                                        initial={false}
                                        animate={{
                                            scaleY: isOpen ? 1 : 0,
                                        }}
                                        transition={{
                                            duration: 0.25,
                                        }}
                                        className="absolute bottom-0 left-0 top-0 w-[3px] origin-top bg-[#d99a17]"
                                    />

                                    <button
                                        type="button"
                                        onClick={() =>
                                            setActiveFaq(
                                                isOpen ? -1 : index
                                            )
                                        }
                                        className="flex w-full items-center gap-3 px-4 py-4 text-left sm:gap-4 sm:px-5 sm:py-[17px]"
                                        aria-expanded={isOpen}
                                    >
                                        {/* Number */}
                                        <span
                                            className={`
                                                flex h-7 w-7 shrink-0
                                                items-center justify-center
                                                rounded-full text-[8px]
                                                font-bold transition-all
                                                ${isOpen
                                                    ? "bg-[#071a3d] text-white"
                                                    : "bg-[#071a3d]/[0.06] text-[#071a3d]/55"
                                                }
                                            `}
                                        >
                                            {String(faq.id).padStart(2, "0")}
                                        </span>

                                        {/* Question */}
                                        <span
                                            className={`
                                                flex-1 text-xs font-semibold
                                                leading-5 sm:text-sm
                                                ${isOpen
                                                    ? "text-[#071a3d]"
                                                    : "text-[#071a3d]/70"
                                                }
                                            `}
                                        >
                                            {faq.question}
                                        </span>

                                        {/* Icon */}
                                        <motion.span
                                            animate={{
                                                rotate: isOpen ? 45 : 0,
                                            }}
                                            transition={{
                                                duration: 0.25,
                                            }}
                                            className={`
                                                flex h-7 w-7 shrink-0
                                                items-center justify-center
                                                border transition-colors
                                                ${isOpen
                                                    ? "border-[#d99a17] bg-[#d99a17] text-[#071a3d]"
                                                    : "border-[#071a3d]/10 text-[#071a3d]/40"
                                                }
                                            `}
                                        >
                                            <Plus size={13} />
                                        </motion.span>
                                    </button>

                                    {/* Answer */}
                                    <AnimatePresence initial={false}>
                                        {isOpen && (
                                            <motion.div
                                                initial={{
                                                    height: 0,
                                                    opacity: 0,
                                                }}
                                                animate={{
                                                    height: "auto",
                                                    opacity: 1,
                                                }}
                                                exit={{
                                                    height: 0,
                                                    opacity: 0,
                                                }}
                                                transition={{
                                                    duration: 0.28,
                                                    ease: "easeInOut",
                                                }}
                                                className="overflow-hidden"
                                            >
                                                <div className="px-5 pb-5 pl-[60px] pr-8 sm:pl-[68px] sm:pr-12">
                                                    <div className="border-l border-[#d99a17]/40 pl-4">
                                                        <p className="text-[11px] leading-5 text-[#071a3d]/55 sm:text-xs sm:leading-6">
                                                            {faq.answer}
                                                        </p>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* =================================================
                    BOTTOM CTA
                ================================================== */}
                <div className="mt-5 flex flex-col gap-3 border-t border-[#071a3d]/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <p className="text-[8px] font-bold tracking-[0.25em] text-[#071a3d]/35">
                            STILL HAVE QUESTIONS?
                        </p>

                        <p className="mt-1 text-xs text-[#071a3d]/55">
                            Let's discuss your project requirements.
                        </p>
                    </div>

                    <button
                        type="button"
                        className="group flex w-fit items-center gap-3 bg-[#071a3d] px-5 py-3 text-[9px] font-bold tracking-[0.18em] text-white transition-all duration-300 hover:bg-[#c99618] hover:text-[#071a3d]"
                    >
                        TALK TO OUR TEAM

                        <span className="flex h-6 w-6 items-center justify-center bg-white/10 transition-transform duration-300 group-hover:translate-x-1">
                            <ArrowUpRight size={13} />
                        </span>
                    </button>
                </div>

                {/* Bottom micro label */}
                <div className="mt-5 flex items-center justify-center gap-3">
                    <span className="h-px w-7 bg-[#d99a17]" />

                    <span className="text-[10px] font-bold tracking-[0.28em] text-[#071a3d]/35">
                        QUALITY • PRECISION • DURABILITY
                    </span>

                    <span className="h-px w-7 bg-[#d99a17]" />
                </div>
            </div>
        </section>
    );
}