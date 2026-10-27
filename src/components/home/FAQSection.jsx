"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Plus } from "lucide-react";

const FAQS = [
    {
        id: 1,
        question: "What are toilet cubicles?",
        answer:
            "Toilet cubicles are modular restroom partition systems used to create individual private toilet compartments. Cubiloo Cubicles provides complete cubicle solutions including panels, doors, hardware, support systems, and installation.",
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
            "Yes. Cubiloo Cubicles provides end-to-end support from design and material planning through manufacturing and professional site installation.",
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
        <section className="relative overflow-hidden bg-[#f5f3ed] pt-9 sm:pt-11 lg:pt-14 pb-70">
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
                            <span className="h-px w-9 bg-[#efac39]" />

                            <span className="text-[9px] font-bold tracking-[0.3em] text-[#efac39]">
                                FREQUENTLY ASKED QUESTIONS
                            </span>
                        </div>

                        <h2 className="max-w-[700px] text-[38px] font-medium leading-[1.05] tracking-[-0.04em] text-[#071a3d] sm:text-[48px] lg:text-[62px]">
                            Questions,
                            <br />

                            <span className="bg-[linear-gradient(90deg,rgba(239,172,57,1)_0%,rgba(229,139,59,1)_38%,rgba(223,117,57,1)_72%,rgba(216,85,56,1)_100%)] bg-clip-text text-transparent">
                                clearly answered.
                            </span>
                        </h2>
                    </div>

                    <p className="max-w-md text-xs leading-5 text-[#071a3d]/90 lg:text-right">
                        Find answers about our toilet cubicles, materials,
                        customization, installation, and project execution.
                    </p>
                </div>

                <div className="relative grid gap-5 lg:grid-cols-[0.7fr_1.3fr]">
                    {/* =================================================
                        LEFT INFORMATION PANEL
                    ================================================== */}

                    {/* Premium FAQ information panel */}
                    <div className="relative hidden min-h-[470px] overflow-hidden rounded-2xl bg-[#071720] text-white shadow-[0_20px_55px_rgba(7,23,32,0.14)] lg:block">

                        {/* Architectural background grid */}
                        <div
                            aria-hidden="true"
                            className="pointer-events-none absolute inset-0 opacity-[0.06]"
                            style={{
                                backgroundImage: `
        linear-gradient(#efc277 1px, transparent 1px),
        linear-gradient(90deg, #efc277 1px, transparent 1px)
      `,
                                backgroundSize: "38px 38px",
                            }}
                        />

                        {/* Ambient glow */}
                        <div className="pointer-events-none absolute -right-24 top-24 h-72 w-72 rounded-full bg-[#d6a74f]/10 blur-[85px]" />

                        <div className="relative z-10 flex min-h-[470px] flex-col p-7 xl:p-8">

                            {/* Top branding */}
                            <div className="flex items-center justify-between gap-3">
                                <div className="flex items-center gap-2.5">
                                    <span className="h-[2px] w-6 bg-[#efac39]" />
                                    <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#efac39]">
                                        Cubiloo Cubicles
                                    </span>
                                </div>

                                <span className="text-[9px] font-medium tracking-[0.12em] text-white/85">
                                    01 / PROJECT CARE
                                </span>
                            </div>

                            {/* Main heading */}
                            <motion.div
                                initial={{ opacity: 0, y: 18 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="mt-9"
                            >
                                <h3 className="font-serif text-[34px] leading-[1.12] tracking-[-0.035em] text-white xl:text-[39px]">
                                    Built around
                                    <br />
                                    your <span className="bg-[linear-gradient(90deg,rgba(239,172,57,1)_0%,rgba(229,139,59,1)_38%,rgba(223,117,57,1)_72%,rgba(216,85,56,1)_100%)] bg-clip-text text-transparent">vision.</span>
                                </h3>

                                <p className="mt-4 max-w-[290px] text-xs leading-6 text-white/80">
                                    From the first drawing to the final installation,
                                    every detail matters.
                                </p>
                            </motion.div>

                            {/* Animated architectural cubicle drawing */}
                            <div className="relative my-6 flex min-h-[180px] flex-1 items-center justify-center">
                                <svg
                                    viewBox="0 0 320 230"
                                    fill="none"
                                    className="h-full max-h-[235px] w-full"
                                    aria-hidden="true"
                                >
                                    {/* Rotating technical ring */}
                                    <motion.circle
                                        cx="160"
                                        cy="115"
                                        r="100"
                                        stroke="#efc277"
                                        strokeWidth="0.8"
                                        strokeDasharray="3 10"
                                        opacity="0.25"
                                        style={{ transformOrigin: "160px 115px" }}
                                        animate={{ rotate: 360 }}
                                        transition={{
                                            duration: 55,
                                            repeat: Infinity,
                                            ease: "linear",
                                        }}
                                    />

                                    {/* Main cubicle perspective */}
                                    <motion.g
                                        stroke="#efc277"
                                        strokeLinejoin="round"
                                        strokeLinecap="round"
                                        fill="none"
                                        initial={{ opacity: 0, pathLength: 0 }}
                                        whileInView={{ opacity: 1, pathLength: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1.5 }}
                                    >
                                        {/* Outer cubicle */}
                                        <path
                                            d="M52 65L160 25L268 65V178L160 213L52 178Z"
                                            strokeWidth="1.3"
                                            opacity="0.6"
                                        />

                                        {/* Top perspective */}
                                        <path
                                            d="M52 65L160 104L268 65"
                                            strokeWidth="1.2"
                                            opacity="0.5"
                                        />

                                        {/* Center vertical */}
                                        <path
                                            d="M160 104V213"
                                            strokeWidth="1"
                                            opacity="0.5"
                                        />

                                        {/* Left partition */}
                                        <path
                                            d="M78 74L119 89V185L78 171Z"
                                            strokeWidth="1.6"
                                        />

                                        {/* Inner partition */}
                                        <path
                                            d="M119 89L160 75V170L119 185Z"
                                            strokeWidth="1.3"
                                        />

                                        {/* Right door frame */}
                                        <path
                                            d="M174 98L245 73V168L174 193Z"
                                            strokeWidth="1.8"
                                        />

                                        {/* Right door panel */}
                                        <path
                                            d="M185 104L235 87V162L185 179Z"
                                            strokeWidth="1.2"
                                            opacity="0.75"
                                        />

                                        {/* Door handle */}
                                        <circle
                                            cx="222"
                                            cy="131"
                                            r="3.5"
                                            fill="#efc277"
                                            stroke="none"
                                        />

                                        {/* Construction guides */}
                                        <path
                                            d="M35 42V192M285 42V192"
                                            strokeWidth="0.8"
                                            strokeDasharray="4 7"
                                            opacity="0.25"
                                        />

                                        <path
                                            d="M27 42H43M27 192H43M277 42H293M277 192H293"
                                            strokeWidth="1"
                                            opacity="0.35"
                                        />
                                    </motion.g>

                                    {/* Animated marker */}
                                    <motion.circle
                                        cx="160"
                                        cy="115"
                                        r="3"
                                        fill="#efc277"
                                        animate={{
                                            opacity: [0.3, 1, 0.3],
                                            scale: [0.8, 1.3, 0.8],
                                        }}
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                        }}
                                        style={{ transformOrigin: "160px 115px" }}
                                    />
                                </svg>
                            </div>

                            {/* Bottom project support */}
                            <div className="border-t border-[#efc277]/25 pt-5">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#efc277]/25 bg-[#efc277]/10">
                                        <svg
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            className="h-5 w-5 text-[#efac39]"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                        >
                                            <path d="M4 18L18 4L20 6L6 20H4V18Z" />
                                            <path d="M12 10L14 12M9 13L11 15" />
                                        </svg>
                                    </div>

                                    <div className="min-w-0 flex-1">
                                        <p className="text-xs font-semibold text-white">
                                            Complete project support
                                        </p>

                                        <p className="mt-1 text-[10px] leading-4 text-white/55">
                                            Design • Manufacturing • Installation
                                        </p>
                                    </div>

                                    <ArrowUpRight
                                        size={18}
                                        className="shrink-0 text-[#efac39]"
                                    />
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
                                        className="absolute bottom-0 left-0 top-0 w-[3px] origin-top bg-[#efac39]"
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
                                                    ? "bg-[#000] text-white"
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
                                                    ? "text-[#000]"
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
                                                    ? "border-[#efac39] bg-[#efac39] text-[#fff]"
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
                                                    <div className="border-l border-[#efac39]/40 pl-4">
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

                <div className="mt-5 flex flex-col gap-3 border-t border-[#071a3d]/30 pt-5 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <p className="text-[8px] font-bold tracking-[0.25em] text-[#071a3d]/65">
                            STILL HAVE QUESTIONS?
                        </p>

                        <p className="mt-1 text-xs text-[#071a3d]/95">
                            Let's discuss your project requirements.
                        </p>
                    </div>

                    <button
                        type="button"
                        className="group flex w-fit items-center gap-3 bg-[linear-gradient(90deg,rgba(239,172,57,1)_0%,rgba(229,139,59,1)_38%,rgba(223,117,57,1)_72%,rgba(216,85,56,1)_100%)] px-5 py-3 text-[9px] font-bold tracking-[0.18em] text-white transition-all duration-300 hover:bg-[#c99618]"
                    >
                        TALK TO OUR TEAM

                        <span className="flex h-6 w-6 items-center justify-center bg-white/10 transition-transform duration-300 group-hover:translate-x-1">
                            <ArrowUpRight size={13} />
                        </span>
                    </button>
                </div>
            </div>
        </section>
    );
}