"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ShieldCheck } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "swiper/css";
import "swiper/css/navigation";

gsap.registerPlugin(ScrollTrigger);

const CERTIFICATES = [
    {
        id: 1,
        title: "Authorized OEM",
        image: "/certificates/certioem.webp",
        alt: "ISO Certification",
    },
    {
        id: 2,
        title: "Authorized OEM",
        image: "/certificates/15.png",
        alt: "Quality Certification",
    },
    {
        id: 3,
        title: "Authorised Distributor",
        image: "/certificates/16.png",
        alt: "Industry Certification",
    },
    {
        id: 4,
        title: "Authorised Dealer",
        image: "/certificates/17.png",
        alt: "Safety Certification",
    },
    {
        id: 5,
        title: "Authorised Dealer",
        image: "/certificates/18.png",
        alt: "Excellence Award",
    },
    {
        id: 6,
        title: "Quality Assurance",
        image: "/certificates/19.png",
        alt: "Excellence Award",
    },
];

export default function Certificates() {
    const sectionRef = useRef(null);
    const headingRef = useRef(null);
    const sliderRef = useRef(null);

    useEffect(() => {
        const section = sectionRef.current;

        if (!section) return;

        const ctx = gsap.context(() => {
            gsap.fromTo(
                headingRef.current,
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
                        start: "top 80%",
                        once: true,
                    },
                }
            );

            gsap.fromTo(
                sliderRef.current,
                {
                    opacity: 0,
                    y: 50,
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    delay: 0.15,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sliderRef.current,
                        start: "top 85%",
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
            className="relative overflow-hidden bg-white py-10 sm:py-12 lg:py-15"
        >
            {/* Architectural background */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute -right-40 top-10 h-[420px] w-[420px] rotate-45 border border-[#071a3d]/[0.035]" />

                <div className="absolute -left-40 bottom-0 h-[380px] w-[380px] -rotate-45 border border-[#d99a17]/10" />

                <div className="absolute left-1/2 top-0 h-full w-px bg-[#071a3d]/[0.025]" />
            </div>

            <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">

                {/* ================= HEADER ================= */}
                <div
                    ref={headingRef}
                    className="mb-10 flex flex-col justify-between gap-6 sm:mb-12 lg:flex-row lg:items-end"
                >
                    <div>
                        <div className="mb-3 flex items-center gap-3">
                            <span className="h-px w-10 bg-[#d99a17]" />

                            <span className="text-[10px] font-semibold tracking-[0.3em] text-[#d99a17] sm:text-[11px]">
                                TRUST & CREDENTIALS
                            </span>
                        </div>

                        <h2 className="text-3xl font-semibold leading-tight tracking-tight text-[#071a3d] sm:text-4xl lg:text-5xl">
                            Certified for
                            <br />
                            <span className="text-[#d99a17]">
                                quality & trust.
                            </span>
                        </h2>
                    </div>

                    <div className="max-w-md lg:text-right">
                        <p className="text-sm leading-6 text-slate-500">
                            Our authorised partnerships and quality credentials
                            reflect our commitment to reliable products,
                            trusted materials, and professional execution.
                        </p>
                    </div>
                </div>

                {/* ================= SLIDER ================= */}
                <div ref={sliderRef} className="relative">

                    <Swiper
                        modules={[Autoplay, Navigation]}
                        navigation={{
                            prevEl: ".certificate-prev",
                            nextEl: ".certificate-next",
                        }}
                        autoplay={{
                            delay: 3200,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        loop={true}
                        speed={700}
                        spaceBetween={18}
                        slidesPerView={1.15}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 24,
                            },
                            1280: {
                                slidesPerView: 4,
                                spaceBetween: 26,
                            },
                        }}
                        className="!overflow-visible"
                    >
                        {CERTIFICATES.map((certificate, index) => (
                            <SwiperSlide key={certificate.id}>
                                <div className="group relative h-full">

                                    {/* Gold corner */}
                                    <div className="absolute -left-1 -top-1 z-10 h-8 w-8 border-l border-t border-[#d99a17] opacity-60 transition-all duration-500 group-hover:h-12 group-hover:w-12 group-hover:opacity-100" />

                                    <div className="absolute -bottom-1 -right-1 z-10 h-8 w-8 border-b border-r border-[#d99a17] opacity-60 transition-all duration-500 group-hover:h-12 group-hover:w-12 group-hover:opacity-100" />

                                    {/* Card */}
                                    <div className="relative overflow-hidden border border-[#071a3d]/10 bg-white p-3 transition-all duration-500 group-hover:-translate-y-2 group-hover:border-[#d99a17]/40 group-hover:shadow-[0_20px_50px_rgba(7,26,61,0.12)]">

                                        {/* Certificate image */}
                                        <div className="relative aspect-[4/3] overflow-hidden bg-[#f5f5f5]">

                                            <Image
                                                src={certificate.image}
                                                alt={certificate.alt}
                                                fill
                                                className="object-contain p-4 transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                                                sizes="(max-width: 640px) 85vw, (max-width: 1024px) 45vw, 25vw"
                                            />

                                            {/* Hover overlay */}
                                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#071a3d]/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                                            {/* Number */}
                                            <div className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center bg-[#071a3d] text-[9px] font-semibold text-white">
                                                {String(index + 1).padStart(2, "0")}
                                            </div>
                                        </div>

                                        {/* Card footer */}
                                        <div className="flex items-center justify-between gap-4 px-2 py-5">

                                            <div>
                                                <p className="mb-1 text-[9px] font-semibold tracking-[0.2em] text-[#d99a17]">
                                                    CREDENTIAL
                                                </p>

                                                <h3 className="text-sm font-semibold capitalize text-[#071a3d] sm:text-base">
                                                    {certificate.title}
                                                </h3>
                                            </div>

                                            <div className="flex h-9 w-9 shrink-0 items-center justify-center border border-[#071a3d]/10 transition-colors duration-300 group-hover:border-[#d99a17]">
                                                <ShieldCheck
                                                    size={17}
                                                    strokeWidth={1.6}
                                                    className="text-[#d99a17]"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* ================= NAVIGATION ================= */}
                    <div className="mt-7 flex items-center justify-between">

                        {/* Progress text */}
                        <div>
                            <span className="text-[9px] font-semibold tracking-[0.25em] text-slate-400">
                                MEGHA SYSTEMS
                            </span>
                        </div>

                        <div className="flex items-center gap-2">

                            <button
                                type="button"
                                className="certificate-prev flex h-10 w-10 items-center justify-center border border-[#071a3d]/15 text-[#071a3d] transition-all duration-300 hover:border-[#d99a17] hover:bg-[#071a3d] hover:text-white"
                                aria-label="Previous certificate"
                            >
                                <ChevronLeft size={18} />
                            </button>

                            <button
                                type="button"
                                className="certificate-next flex h-10 w-10 items-center justify-center border border-[#071a3d]/15 text-[#071a3d] transition-all duration-300 hover:border-[#d99a17] hover:bg-[#071a3d] hover:text-white"
                                aria-label="Next certificate"
                            >
                                <ChevronRight size={18} />
                            </button>

                        </div>
                    </div>
                </div>

                {/* Bottom trust statement */}
                <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 border-t border-[#071a3d]/10 pt-7 text-center">
                    <span className="text-[9px] font-semibold tracking-[0.2em] text-slate-400">
                        AUTHORISED PARTNERSHIPS
                    </span>

                    <span className="h-1 w-1 bg-[#d99a17]" />

                    <span className="text-[9px] font-semibold tracking-[0.2em] text-slate-400">
                        QUALITY ASSURANCE
                    </span>

                    <span className="h-1 w-1 bg-[#d99a17]" />

                    <span className="text-[9px] font-semibold tracking-[0.2em] text-slate-400">
                        TRUSTED PERFORMANCE
                    </span>
                </div>
            </div>
        </section>
    );
}