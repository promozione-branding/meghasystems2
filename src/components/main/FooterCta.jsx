
"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
    ArrowUpRight,
    Award,
    ShieldCheck,
    BadgeCheck,
    Headphones,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const features = [
    {
        icon: Award,
        title: "25+ Years",
        subtitle: "Industry Expertise",
        color: "#dddf00",
    },
    {
        icon: BadgeCheck,
        title: "Custom Built",
        subtitle: "Restroom Solutions",
        color: "#D568B6",
    },
    {
        icon: ShieldCheck,
        title: "Premium Quality",
        subtitle: "Built to Last",
        color: "#4EA9CC",
    },
    {
        icon: Headphones,
        title: "Dedicated",
        subtitle: "Customer Support",
        color: "#9573C7",
    },
];

export default function FooterCTA() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".footer-cta-reveal",
                { opacity: 0, y: 45 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.9,
                    stagger: 0.12,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                        once: true,
                    },
                }
            );

            gsap.fromTo(
                ".footer-cta-image",
                {
                    opacity: 0,
                    y: 70,
                    scale: 0.9,
                },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 1.1,
                    stagger: 0.15,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                        once: true,
                    },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <div
            ref={sectionRef}
            className="relative w-full bg-transparent"
        >
            <div className="mx-auto max-w-[1450px] px-5 sm:px-8 lg:px-12">
                {/* MAIN CTA */}
                <div className="relative isolate min-h-[540px] overflow-hidden rounded-[16px] bg-[#005153] sm:min-h-[500px]">
                    {/* GRID BACKGROUND */}
                    <div
                        className="pointer-events-none absolute inset-0 z-0"
                        style={{
                            backgroundImage: `
                linear-gradient(
                  rgba(255,255,255,0.11) 1px,
                  transparent 1px
                ),
                linear-gradient(
                  90deg,
                  rgba(255,255,255,0.11) 1px,
                  transparent 1px
                )
              `,
                            backgroundSize: "65px 65px",
                        }}
                    />

                    {/* SOFT GLOW */}
                    <div className="pointer-events-none absolute -right-24 -top-24 h-[450px] w-[450px] rounded-full bg-[#dddf00]/10 blur-[110px]" />

                    <div className="relative z-10 grid min-h-[400px] items-center gap-10 px-6 py-10 sm:min-h-[450px] sm:px-12 lg:min-h-[500px] lg:grid-cols-[0.95fr_1.05fr] lg:gap-4 lg:px-10 lg:py-12">
                        {/* LEFT CONTENT */}
                        <div className="relative z-20">
                            <div className="footer-cta-reveal mb-6 flex items-center gap-3">
                                <span className="h-[2px] w-9 bg-[#dddf00]" />

                                <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#dddf00]">
                                    Cubiloo Cubicles
                                </span>
                            </div>

                            <h2 className="footer-cta-reveal max-w-[620px] text-[clamp(38px,4vw,50px)] font-semibold leading-[1.05] tracking-[-0.015em] text-white">
                                Create better
                                <br />
                                washroom spaces
                                <br />
                                today!
                            </h2>

                            <p className="footer-cta-reveal mt-7 max-w-[470px] text-[15px] leading-[1.85] text-white/85 sm:text-[17px]">
                                Premium toilet cubicles and restroom partition
                                solutions, designed for modern spaces and
                                engineered for lasting performance.
                            </p>

                            <div className="footer-cta-reveal mt-10">
                                <Link
                                    href="/contact-us"
                                    className="group inline-flex min-h-[68px] items-center justify-center gap-7 rounded-[12px] bg-[#121212] px-9 text-[15px] font-semibold text-white transition-all duration-300 hover:bg-[#dddf00] hover:text-[#121212]"
                                >
                                    Start Your Project

                                    <ArrowUpRight
                                        size={19}
                                        className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                                    />
                                </Link>
                            </div>
                        </div>

                        {/* RIGHT OVERLAPPING IMAGES */}
                        <div className="relative mx-auto h-[290px] w-full max-w-[600px] sm:h-[380px] lg:h-[400px]">
                            {/* BACK IMAGE */}
                            <div className="footer-cta-image absolute left-[13%] top-[2%] h-[70%] w-[67%] -rotate-[3deg] overflow-hidden rounded-[15px] border-[5px] border-[#111111] bg-[#121212] shadow-[0_25px_65px_rgba(0,0,0,0.35)]">
                                <Image
                                    src="/duro pro toilet cubicles.webp"
                                    alt="Cubiloo premium toilet cubicles"
                                    fill
                                    sizes="(max-width: 1024px) 70vw, 420px"
                                    className="object-cover"
                                />
                            </div>

                            {/* FRONT IMAGE */}
                            <div className="footer-cta-image absolute bottom-[1%] right-[1%] z-10 h-[64%] w-[75%] rotate-[3deg] overflow-hidden rounded-[15px] border-[5px] border-[#111111] bg-[#121212] shadow-[0_30px_75px_rgba(0,0,0,0.45)]">
                                <Image
                                    src="/Neo.webp"
                                    alt="Cubiloo modern restroom installation"
                                    fill
                                    sizes="(max-width: 1024px) 80vw, 450px"
                                    className="object-cover"
                                />
                            </div>

                            {/* FLOATING LABEL */}
                            <div className="footer-cta-image absolute left-[0%] top-[48%] z-20 flex items-center gap-3 rounded-[10px] border border-[#121212] bg-white px-4 py-3 shadow-[0_12px_30px_rgba(0,0,0,0.2)] sm:px-5">
                                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#dddf00]/15">
                                    <BadgeCheck
                                        size={20}
                                        className="text-[#dddf00]"
                                    />
                                </div>

                                <div>
                                    <p className="text-[12px] font-bold text-[#121212]">
                                        Premium Quality
                                    </p>

                                    <p className="mt-0.5 text-[10px] text-[#777]">
                                        Built for durability
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
