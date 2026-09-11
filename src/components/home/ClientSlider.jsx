"use client";

import React from "react";
import { ArrowUpRight, Building2 } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const CLIENT_LOGOS = [
    {
        id: 1,
        src: "/clients/client5.webp",
        alt: "McDonalds",
    },
    {
        id: 2,
        src: "/clients/client6.png",
        alt: "Delhi Metro",
    },
    {
        id: 3,
        src: "/clients/client6.webp",
        alt: "Mercedes",
    },
    {
        id: 4,
        src: "/clients/client7.png",
        alt: "Yamaha",
    },
    {
        id: 5,
        src: "/clients/Apple (2).webp",
        alt: "Apple",
    },
    {
        id: 6,
        src: "/clients/kfc.webp",
        alt: "KFC",
    },
    {
        id: 7,
        src: "/clients/mag.webp",
        alt: "McDonald's",
    },
    {
        id: 8,
        src: "/clients/maruti.webp",
        alt: "Maruti Suzuki",
    },
];

export default function ClientSlider() {
    return (
        <section className="relative overflow-hidden bg-[#f7f5ef] py-12 sm:py-14 lg:py-16">
            {/* =====================================================
                BACKGROUND ARCHITECTURAL SVG
            ====================================================== */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                {/* Large architectural circle */}
                <svg
                    className="absolute -right-32 -top-32 h-[600px] w-[600px] opacity-[0.08]"
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
                        r="180"
                        stroke="#d99a17"
                        strokeWidth="1"
                    />

                    <circle
                        cx="300"
                        cy="300"
                        r="120"
                        stroke="#071a3d"
                        strokeWidth="1"
                    />

                    <path
                        d="M300 20V580M20 300H580"
                        stroke="#071a3d"
                        strokeWidth="1"
                    />

                    <path
                        d="M100 100L500 500M500 100L100 500"
                        stroke="#071a3d"
                        strokeWidth="1"
                    />
                </svg>

                {/* Left architectural grid */}
                <svg
                    className="absolute -bottom-20 -left-20 h-[500px] w-[500px] opacity-[0.06]"
                    viewBox="0 0 500 500"
                    fill="none"
                >
                    <path
                        d="M0 400L400 0"
                        stroke="#071a3d"
                        strokeWidth="1"
                    />

                    <path
                        d="M0 460L460 0"
                        stroke="#071a3d"
                        strokeWidth="1"
                    />

                    <path
                        d="M40 500L500 40"
                        stroke="#071a3d"
                        strokeWidth="1"
                    />

                    <rect
                        x="100"
                        y="100"
                        width="260"
                        height="260"
                        stroke="#d99a17"
                        strokeWidth="1"
                        transform="rotate(45 230 230)"
                    />

                    <rect
                        x="155"
                        y="155"
                        width="150"
                        height="150"
                        stroke="#071a3d"
                        strokeWidth="1"
                        transform="rotate(45 230 230)"
                    />
                </svg>

                {/* Top architectural line */}
                <svg
                    className="absolute left-0 top-0 h-32 w-full opacity-[0.08]"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                    fill="none"
                >
                    <path
                        d="M0 90L120 90L180 30H420L480 90H720L780 30H1020L1080 90H1200"
                        stroke="#071a3d"
                        strokeWidth="1"
                    />

                    <path
                        d="M0 105L150 105L205 50H395L450 105H750L805 50H995L1050 105H1200"
                        stroke="#d99a17"
                        strokeWidth="1"
                    />
                </svg>

                {/* Center vertical architectural guides */}
                <div className="absolute left-1/2 top-0 h-full w-px bg-[#071a3d]/[0.035]" />

                <div className="absolute left-[48%] top-0 h-full w-px bg-[#071a3d]/[0.02]" />

                <div className="absolute left-[52%] top-0 h-full w-px bg-[#071a3d]/[0.02]" />

                {/* Horizontal guide */}
                <div className="absolute left-0 right-0 top-1/2 h-px bg-[#071a3d]/[0.035]" />

                {/* Gold top border */}
                <div className="absolute left-0 right-0 top-0 h-px bg-[#d99a17]/40" />
            </div>

            {/* =====================================================
                CONTENT
            ====================================================== */}
            <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">

                {/* Header */}
                <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end lg:mb-14">

                    <div>
                        <div className="mb-4 flex items-center gap-3">
                            <span className="h-px w-10 bg-[#d99a17]" />

                            <span className="text-[10px] font-bold tracking-[0.32em] text-[#d99a17]">
                                OUR CLIENTS
                            </span>
                        </div>

                        <h2 className="max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-[#071a3d] sm:text-4xl lg:text-5xl">
                            Trusted by brands
                            <br />
                            <span className="text-[#c99618]">
                                that demand more.
                            </span>
                        </h2>
                    </div>

                    <div className="flex items-center gap-3 text-right">
                        <Building2
                            size={19}
                            className="text-[#c99618]"
                            strokeWidth={1.6}
                        />

                        <div>
                            <p className="text-[10px] font-bold tracking-[0.22em] text-[#071a3d]/40">
                                PROJECT PARTNERS
                            </p>

                            <p className="mt-1 text-sm text-[#071a3d]/70">
                                Built for performance
                            </p>
                        </div>
                    </div>
                </div>

                {/* =================================================
                    SLIDER
                ================================================== */}
                <div className="relative">

                    {/* Side architectural accents */}
                    <div className="pointer-events-none absolute -left-3 top-1/2 z-10 h-20 w-px -translate-y-1/2 bg-[#d99a17]" />

                    <div className="pointer-events-none absolute -right-3 top-1/2 z-10 h-20 w-px -translate-y-1/2 bg-[#d99a17]" />

                    <Swiper
                        modules={[Autoplay]}
                        loop={true}
                        speed={900}
                        autoplay={{
                            delay: 1800,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        spaceBetween={16}
                        slidesPerView={2}
                        breakpoints={{
                            480: {
                                slidesPerView: 2,
                                spaceBetween: 18,
                            },
                            640: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 4,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 5,
                                spaceBetween: 22,
                            },
                            1280: {
                                slidesPerView: 6,
                                spaceBetween: 24,
                            },
                        }}
                        className="!overflow-visible"
                    >
                        {CLIENT_LOGOS.map((client) => (
                            <SwiperSlide key={client.id}>
                                <div
                                    className="
                                        group
                                        relative
                                        flex
                                        h-[130px]
                                        items-center
                                        justify-center
                                        overflow-hidden
                                        border
                                        border-[#071a3d]/10
                                        bg-white/80
                                        px-6
                                        shadow-[0_10px_30px_rgba(7,26,61,0.04)]
                                        transition-all
                                        duration-500
                                        hover:-translate-y-1
                                        hover:border-[#d99a17]/60
                                        hover:shadow-[0_18px_40px_rgba(7,26,61,0.10)]
                                        sm:h-[145px]
                                    "
                                >
                                    {/* Gold top animation */}
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

                                    {/* Top-right corner */}
                                    <div
                                        className="
                                            absolute
                                            right-0
                                            top-0
                                            h-6
                                            w-6
                                            border-r
                                            border-t
                                            border-[#d99a17]/0
                                            transition-all
                                            duration-500
                                            group-hover:border-[#d99a17]
                                        "
                                    />

                                    {/* Bottom-left corner */}
                                    <div
                                        className="
                                            absolute
                                            bottom-0
                                            left-0
                                            h-6
                                            w-6
                                            border-b
                                            border-l
                                            border-[#d99a17]/0
                                            transition-all
                                            duration-500
                                            group-hover:border-[#d99a17]
                                        "
                                    />

                                    {/* =================================================
                                        NORMAL ORIGINAL LOGO
                                    ================================================== */}
                                    <img
                                        src={client.src}
                                        alt={client.alt}
                                        loading="lazy"
                                        className="
                                            max-h-[65px]
                                            max-w-[155px]
                                            object-contain
                                            opacity-90
                                            transition-all
                                            duration-500
                                            group-hover:scale-105
                                            group-hover:opacity-100
                                        "
                                    />

                                    {/* Hover arrow */}
                                    <div
                                        className="
                                            absolute
                                            bottom-3
                                            right-3
                                            flex
                                            h-6
                                            w-6
                                            translate-y-2
                                            items-center
                                            justify-center
                                            rounded-full
                                            bg-[#d99a17]
                                            text-[#071a3d]
                                            opacity-0
                                            transition-all
                                            duration-300
                                            group-hover:translate-y-0
                                            group-hover:opacity-100
                                        "
                                    >
                                        <ArrowUpRight size={13} />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* =================================================
                    BOTTOM
                ================================================== */}
                <div className="mt-10 flex flex-col gap-4 border-t border-[#071a3d]/10 pt-6 sm:flex-row sm:items-center sm:justify-between">

                    <p className="text-[10px] font-semibold tracking-[0.25em] text-[#071a3d]/40">
                        BRANDS • INSTITUTIONS • ENTERPRISES
                    </p>

                    <div className="flex items-center gap-3">
                        <span className="h-px w-8 bg-[#d99a17]" />

                        <span className="text-[10px] font-bold tracking-[0.2em] text-[#c99618]">
                            TRUSTED PARTNERS
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}