
"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
    ArrowUpRight,
    ArrowRight,
    Check,
    ShieldCheck,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const partners = [
    { name: "TESA", logo: "/clients/14 (1).webp" },
    { name: "STYLAM", logo: "/clients/15 (2).webp" },
    { name: "CENTURYPLY", logo: "/clients/16 (2).webp" },
    { name: "CROWN", logo: "/clients/17 (2).webp" },
    { name: "VIRGO", logo: "/clients/18 (2).webp" },
    { name: "GREENPLY", logo: "/clients/19 (1).webp" },
];

const gradient =
    "linear-gradient(90deg, #b8c900 0%, #dddf00 35%, #f0f542 65%, #a9c000 100%)";

export default function Partners() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".partner-left",
                { opacity: 0, y: 45 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.9,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                        once: true,
                    },
                }
            );

            gsap.fromTo(
                ".partner-row",
                { opacity: 0, x: 55 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.75,
                    stagger: 0.1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".partners-list",
                        start: "top 85%",
                        once: true,
                    },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative isolate border border-[#dddf00] overflow-x-clip bg-[#fff] py-10 sm:py-12 lg:py-16"
        >
            {/* TOP ORANGE LINE */}
            <div
                className="absolute inset-x-0 top-0 h-[2px]"
                style={{ background: gradient }}
            />

            {/* SUBTLE BACKGROUND GRID */}
            <div
                className="pointer-events-none absolute inset-0 opacity-40"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(7,26,61,0.035) 1px,transparent 1px),linear-gradient(90deg,rgba(7,26,61,0.035) 1px,transparent 1px)",
                    backgroundSize: "80px 80px",
                }}
            />

            {/* BACKGROUND GLOW */}
            <div className="pointer-events-none absolute -left-40 top-1/3 h-[450px] w-[450px] rounded-full bg-[#dddf00]/[0.07] blur-[110px]" />

            <div className="relative mx-auto grid max-w-[1500px] items-start gap-12 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-stretch lg:gap-20 lg:px-12">
                {/* LEFT CONTENT */}
                <div className="relative self-stretch">
                    <div className="lg:sticky lg:top-30">
                        <div className="partner-left">
                            {/* EYEBROW */}
                            <div className="mb-6 flex items-center gap-3">
                                {/* Left decorative lines */}
                                <div className="flex flex-col items-end gap-[5px]">
                                    <span className="h-[4px] w-6 rotate-[28deg] rounded-full bg-[#dddf00]" />
                                    <span className="h-[4px] w-9 rounded-full bg-[#dddf00]" />
                                    <span className="h-[4px] w-6 -rotate-[28deg] rounded-full bg-[#dddf00]" />
                                </div>

                                {/* Main badge */}
                                <div
                                    className="rounded-[17px] px-6 py-4 shadow-[0_8px_25px_rgba(221,223,0,0.15)]"
                                    style={{ background: gradient }}
                                >
                                    <span className="text-[13px] font-bold tracking-[-0.02em] text-[#121212] sm:text-[15px]">
                                        Our Trusted Network
                                    </span>
                                </div>

                                {/* Right decorative lines */}
                                <div className="flex flex-col items-start gap-[5px]">
                                    <span className="h-[4px] w-6 -rotate-[28deg] rounded-full bg-[#dddf00]" />
                                    <span className="h-[4px] w-9 rounded-full bg-[#dddf00]" />
                                    <span className="h-[4px] w-6 rotate-[28deg] rounded-full bg-[#dddf00]" />
                                </div>
                            </div>

                            {/* HEADING */}
                            <h2 className="max-w-[650px] text-[42px] font-medium leading-[1] tracking-[-0.015em] text-[#071720] sm:text-[52px] lg:text-[66px]">
                                Built on
                                <br />
                                <span
                                    className="bg-clip-text text-transparent"
                                    style={{ backgroundImage: gradient }}
                                >
                                    trusted
                                </span>
                                <br />
                                partnerships.
                            </h2>

                            {/* DESCRIPTION */}
                            <p className="mt-7 max-w-[470px] text-[14px] leading-[1.9] text-[#071720]/65 sm:text-[15px]">
                                We collaborate with leading brands and manufacturers
                                to deliver premium materials, dependable quality
                                and innovative solutions for every project.
                            </p>

                            {/* CHECK POINTS */}
                            <div className="mt-9 space-y-3">
                                {[
                                    "Trusted material sourcing",
                                    "Premium quality standards",
                                    "Reliable industry partnerships",
                                ].map((item) => (
                                    <div
                                        key={item}
                                        className="flex items-center gap-3"
                                    >
                                        <Check
                                            size={17}
                                            className="text-[#dddf00]"
                                        />

                                        <span className="text-[13px] text-[#071720]/80">
                                            {item}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT PARTNER LIST */}
                <div className="partners-list">
                    <div className="divide-y divide-[#071720]/10">
                        {partners.map((partner, index) => (
                            <div
                                key={partner.name}
                                className="partner-row group relative grid grid-cols-[68px_minmax(0,1fr)_auto] items-center gap-3 py-5 transition-all duration-300 sm:grid-cols-[90px_minmax(0,1fr)_auto] sm:gap-5"
                            >
                                {/* HOVER BACKGROUND */}
                                <div className="pointer-events-none absolute -inset-x-3 inset-y-1 rounded-2xl bg-white opacity-0 shadow-[0_10px_35px_rgba(7,26,61,0.05)] transition-opacity duration-300 group-hover:opacity-100" />

                                {/* LOGO */}
                                <div className="relative z-10 flex h-[66px] w-[66px] items-center justify-center overflow-hidden rounded-full border border-[#071720]/10 bg-white p-2 shadow-sm sm:h-[86px] sm:w-[86px]">
                                    <div className="relative h-full w-full">
                                        <Image
                                            src={partner.logo}
                                            alt={`${partner.name} logo`}
                                            fill
                                            sizes="86px"
                                            className="object-contain transition-transform duration-500 group-hover:scale-110"
                                        />
                                    </div>
                                </div>

                                {/* PARTNER NAME */}
                                <div className="relative z-10 min-w-0">
                                    <p className="mb-1 text-[10px] font-medium uppercase tracking-[0.16em] text-[#071720]/35">
                                        {String(index + 1).padStart(2, "0")}
                                        {" / "}Partner
                                    </p>

                                    <h3 className="text-[19px] font-medium tracking-[-0.03em] text-[#071720] transition-colors duration-300 group-hover:text-[#dddf00] sm:text-[25px]">
                                        {partner.name}
                                    </h3>
                                </div>

                                {/* RIGHT INDICATOR */}
                                <div className="relative z-10 flex items-center gap-3 sm:gap-5">
                                    <span className="hidden text-[11px] font-medium text-[#071720]/50 md:block">
                                        Trusted Brand
                                    </span>

                                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#071720]/15 bg-white text-[#071720] transition-all duration-300 group-hover:rotate-45 group-hover:border-transparent group-hover:bg-[#dddf00] group-hover:text-white sm:h-12 sm:w-12">
                                        <ArrowUpRight size={19} />
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
