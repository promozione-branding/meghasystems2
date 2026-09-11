"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaStar } from "react-icons/fa";
import {
    FiArrowLeft,
    FiArrowRight,
    // FiQuote,
} from "react-icons/fi";
import { Quote } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
    {
        id: 1,
        quote:
            "The quality of execution and attention to detail from Megha Systems was excellent. The entire installation was handled professionally and delivered as committed.",
        name: "Project Management Team",
        company: "Commercial Project",
        location: "Mumbai",
        logo: "/clients/Apple (2).webp",
    },
    {
        id: 2,
        quote:
            "Megha Systems provided a reliable restroom solution with excellent finish quality. Their team was responsive throughout the manufacturing and installation process.",
        name: "Facility Management Team",
        company: "Industrial Project",
        location: "Haryana",
        logo: "/clients/maruti.webp",
    },
    {
        id: 3,
        quote:
            "From material selection to final installation, the team maintained a high standard of quality. The finished cubicles look premium and perform exactly as expected.",
        name: "Project Operations Team",
        company: "Corporate Project",
        location: "India",
        logo: "/clients/mag.webp",
    },
    {
        id: 4,
        quote:
            "The installation team understood the project requirements very well and completed the work with precision. We were impressed with the overall coordination and finish.",
        name: "Site Management Team",
        company: "Manufacturing Facility",
        location: "India",
        logo: "/clients/oppoLogo.webp",
    },
];

export default function Testimonials() {
    const sectionRef = useRef(null);
    const [active, setActive] = useState(0);

    const current = testimonials[active];

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".testimonial-header", {
                y: 35,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 82%",
                },
            });

            gsap.from(".testimonial-main", {
                y: 40,
                opacity: 0,
                duration: 0.9,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".testimonial-main",
                    start: "top 82%",
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const changeTestimonial = (direction) => {
        setActive((prev) => {
            if (direction === "next") {
                return (prev + 1) % testimonials.length;
            }

            return (
                (prev - 1 + testimonials.length) %
                testimonials.length
            );
        });
    };

    return (
        <section
            ref={sectionRef}
            className="
                relative
                overflow-hidden
                bg-[#f4f5f6]
                py-12
                text-[#071a3d]
                sm:py-14
                lg:py-16
            "
        >
            {/* =====================================================
                ARCHITECTURAL BACKGROUND
            ====================================================== */}

            <div className="pointer-events-none absolute inset-0 overflow-hidden">

                {/* Technical grid */}
                <div
                    className="absolute inset-0 opacity-[0.45]"
                    style={{
                        backgroundImage: `
                            linear-gradient(rgba(7,26,61,0.035) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(7,26,61,0.035) 1px, transparent 1px)
                        `,
                        backgroundSize: "70px 70px",
                    }}
                />

                {/* Right architectural SVG */}
                <svg
                    className="
                        absolute
                        right-[-100px]
                        top-1/2
                        h-[600px]
                        w-[600px]
                        -translate-y-1/2
                        opacity-[0.08]
                    "
                    viewBox="0 0 600 600"
                    fill="none"
                >
                    <circle
                        cx="300"
                        cy="300"
                        r="230"
                        stroke="#071a3d"
                        strokeWidth="1"
                    />

                    <circle
                        cx="300"
                        cy="300"
                        r="170"
                        stroke="#c99618"
                        strokeWidth="1"
                    />

                    <circle
                        cx="300"
                        cy="300"
                        r="90"
                        stroke="#071a3d"
                        strokeWidth="1"
                    />

                    <path
                        d="M70 300H530"
                        stroke="#071a3d"
                        strokeWidth="1"
                    />

                    <path
                        d="M300 70V530"
                        stroke="#071a3d"
                        strokeWidth="1"
                    />

                    <path
                        d="M137 137L463 463"
                        stroke="#071a3d"
                        strokeWidth="1"
                    />

                    <path
                        d="M463 137L137 463"
                        stroke="#c99618"
                        strokeWidth="1"
                    />
                </svg>

                {/* Left architectural lines */}
                <svg
                    className="
                        absolute
                        bottom-[-100px]
                        left-[-120px]
                        h-[350px]
                        w-[550px]
                        opacity-[0.08]
                    "
                    viewBox="0 0 550 350"
                    fill="none"
                >
                    <path
                        d="M0 300L130 170L260 300L550 20"
                        stroke="#071a3d"
                        strokeWidth="1"
                    />

                    <path
                        d="M0 340L150 190L280 320L550 60"
                        stroke="#c99618"
                        strokeWidth="1"
                    />
                </svg>

                {/* Gold glow */}
                <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c99618]/[0.035] blur-[100px]" />
            </div>

            {/* =====================================================
                CONTENT
            ====================================================== */}

            <div className="relative mx-auto max-w-[1250px] px-5 sm:px-8 lg:px-10">

                {/* =================================================
                    HEADER
                ================================================== */}

                <div className="testimonial-header mx-auto max-w-[750px] text-center">

                    <div className="mb-5 flex items-center justify-center gap-3">
                        <span className="h-[1px] w-12 bg-[#c99618]" />

                        <span className="text-[8px] font-semibold tracking-[0.35em] text-[#c99618] sm:text-[9px]">
                            CLIENT VOICES
                        </span>

                        <span className="h-[1px] w-12 bg-[#c99618]" />
                    </div>

                    <h2 className="text-[34px] font-medium leading-[1.08] tracking-[-0.04em] sm:text-[46px] lg:text-[54px]">
                        Trusted by
                        <span className="text-[#c99618]">
                            {" "}Industry Leaders
                        </span>
                    </h2>

                    <p className="mx-auto mt-4 max-w-[600px] text-[12px] leading-[1.8] text-[#071a3d]/50 sm:text-[13px]">
                        Our commitment to quality, precision and dependable
                        execution is reflected in the experiences of our clients.
                    </p>
                </div>

                {/* =================================================
                    TESTIMONIAL
                ================================================== */}

                <div
                    className="
                        testimonial-main
                        relative
                        mx-auto
                        mt-8
                        max-w-[1050px]
                        border
                        border-[#071a3d]/10
                        bg-white
                        sm:mt-10
                    "
                >

                    {/* Top gold line */}
                    <div className="absolute left-0 right-0 top-0 h-[2px] bg-[#c99618]" />

                    {/* Corner */}
                    <div
                        className="
                            absolute
                            right-0
                            top-0
                            h-12
                            w-12
                            border-r
                            border-t
                            border-[#c99618]
                        "
                    />

                    <div className="grid lg:grid-cols-[1fr_300px]">

                        {/* =================================================
                            QUOTE AREA
                        ================================================== */}

                        <div className="relative px-6 py-8 sm:px-10 sm:py-10 lg:px-14 lg:py-12">

                            {/* Quote icon */}
                            <div
                                className="
                                    mb-6
                                    flex
                                    h-12
                                    w-12
                                    items-center
                                    justify-center
                                    border
                                    border-[#c99618]/30
                                    bg-[#c99618]/[0.06]
                                    text-[#c99618]
                                "
                            >
                                <Quote size={21} />
                            </div>

                            {/* Quote */}
                            <blockquote
                                key={current.id}
                                className="
                                    max-w-[700px]
                                    text-[20px]
                                    font-light
                                    leading-[1.55]
                                    tracking-[-0.02em]
                                    text-[#071a3d]
                                    sm:text-[25px]
                                    lg:text-[29px]
                                "
                            >
                                “{current.quote}”
                            </blockquote>

                            {/* Stars */}
                            <div className="mt-7 flex items-center gap-1">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <FaStar
                                        key={star}
                                        className="text-[#c99618]"
                                        size={11}
                                    />
                                ))}

                                <span className="ml-3 text-[8px] font-medium tracking-[0.2em] text-[#071a3d]/35">
                                    PROJECT EXPERIENCE
                                </span>
                            </div>

                            {/* Client information */}
                            <div className="mt-7 flex items-center gap-4">

                                <div className="h-[1px] w-8 bg-[#c99618]" />

                                <div>
                                    <p className="text-[10px] font-semibold tracking-[0.12em] text-[#071a3d]">
                                        {current.name}
                                    </p>

                                    <p className="mt-1 text-[8px] tracking-[0.15em] text-[#071a3d]/40">
                                        {current.company} • {current.location}
                                    </p>
                                </div>

                            </div>
                        </div>

                        {/* =================================================
                            CLIENT PANEL
                        ================================================== */}

                        <div
                            className="
                                relative
                                flex
                                min-h-[230px]
                                flex-col
                                items-center
                                justify-center
                                border-t
                                border-[#071a3d]/10
                                bg-[#f7f8f9]
                                px-6
                                lg:border-l
                                lg:border-t-0
                            "
                        >

                            {/* Vertical label */}
                            <div
                                className="
                                    absolute
                                    right-4
                                    top-5
                                    text-[7px]
                                    font-medium
                                    tracking-[0.3em]
                                    text-[#071a3d]/25
                                "
                            >
                                CLIENT
                            </div>

                            {/* Logo */}
                            <div className="relative h-[75px] w-[160px]">
                                <Image
                                    src={current.logo}
                                    alt={`${current.company} client`}
                                    fill
                                    sizes="160px"
                                    className="object-contain"
                                />
                            </div>

                            <div className="mt-5 text-center">
                                <p className="text-[8px] font-semibold tracking-[0.25em] text-[#071a3d]/45">
                                    {current.company}
                                </p>

                                <p className="mt-1 text-[8px] tracking-[0.2em] text-[#c99618]">
                                    {current.location}
                                </p>
                            </div>

                            {/* Number */}
                            <div className="absolute bottom-5 left-6 text-[9px] font-medium tracking-[0.2em] text-[#071a3d]/20">
                                {String(active + 1).padStart(2, "0")} /{" "}
                                {String(testimonials.length).padStart(2, "0")}
                            </div>
                        </div>
                    </div>

                    {/* =================================================
                        CONTROLS
                    ================================================== */}

                    <div
                        className="
                            flex
                            items-center
                            justify-between
                            border-t
                            border-[#071a3d]/10
                            px-6
                            py-4
                            sm:px-10
                        "
                    >

                        {/* Progress */}
                        <div className="flex items-center gap-2">
                            {testimonials.map((item, index) => (
                                <button
                                    key={item.id}
                                    type="button"
                                    onClick={() => setActive(index)}
                                    aria-label={`View testimonial ${index + 1}`}
                                    className={`
                                        h-[2px]
                                        transition-all
                                        duration-300
                                        ${
                                            active === index
                                                ? "w-8 bg-[#c99618]"
                                                : "w-4 bg-[#071a3d]/15 hover:bg-[#071a3d]/35"
                                        }
                                    `}
                                />
                            ))}
                        </div>

                        {/* Arrows */}
                        <div className="flex items-center gap-2">
                            <button
                                type="button"
                                onClick={() => changeTestimonial("prev")}
                                aria-label="Previous testimonial"
                                className="
                                    flex
                                    h-9
                                    w-9
                                    items-center
                                    justify-center
                                    border
                                    border-[#071a3d]/10
                                    text-[#071a3d]
                                    transition-all
                                    duration-300
                                    hover:border-[#c99618]
                                    hover:bg-[#c99618]
                                    hover:text-white
                                "
                            >
                                <FiArrowLeft size={15} />
                            </button>

                            <button
                                type="button"
                                onClick={() => changeTestimonial("next")}
                                aria-label="Next testimonial"
                                className="
                                    flex
                                    h-9
                                    w-9
                                    items-center
                                    justify-center
                                    border
                                    border-[#071a3d]/10
                                    text-[#071a3d]
                                    transition-all
                                    duration-300
                                    hover:border-[#c99618]
                                    hover:bg-[#c99618]
                                    hover:text-white
                                "
                            >
                                <FiArrowRight size={15} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom statement */}
                <div className="mt-6 flex items-center justify-center gap-4">
                    <div className="h-[1px] w-10 bg-[#c99618] sm:w-16" />

                    <span className="text-center text-[7px] font-medium tracking-[0.3em] text-[#071a3d]/30 sm:text-[8px]">
                        QUALITY • PRECISION • TRUST
                    </span>

                    <div className="h-[1px] w-10 bg-[#c99618] sm:w-16" />
                </div>
            </div>
        </section>
    );
}