
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
    ArrowUpRight,
    ArrowRight,
    X,
    MoveUpRight,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const GRADIENT =
    "linear-gradient(90deg,#EFAC39 0%,#E58B3B 38%,#DF7539 72%,#D85538 100%)";

// Place each cropped hardware image in public/hardware/
// See image preparation instructions below.
const HARDWARE = [
    {
        id: "01",
        name: "Indicator Lock",
        detail: "SS PVD Coated",
        image: "/hardware/indicator-lock.webp",
    },
    {
        id: "02",
        name: "SS Knob",
        detail: "SS PVD Coated",
        image: "/hardware/ss-knob.webp",
    },
    {
        id: "03",
        name: "Thumb Turn",
        detail: "SS PVD Coated",
        image: "/hardware/thumb-turn.webp",
    },
    {
        id: "04",
        name: "Coat Hanger",
        detail: "Cum Stopper",
        image: "/hardware/coat-hanger.webp",
    },
    {
        id: "05",
        name: "SS Spring Loaded Hinge",
        detail: "SS PVD Coated",
        image: "/hardware/spring-hinge.webp",
    },
    {
        id: "06",
        name: "SS Leg",
        detail: "SS PVD Coated",
        image: "/hardware/ss-leg.webp",
    },
    {
        id: "07",
        name: "SS PVD Coated Profile",
        detail: "Hardware Profile",
        image: "/hardware/pvd-profile-1.webp",
    },
    {
        id: "08",
        name: "SS PVD Coated Channel",
        detail: "Hardware Channel",
        image: "/hardware/pvd-profile-2.webp",
    },
    {
        id: "09",
        name: "SS PVD Coated Rail",
        detail: "Hardware Rail",
        image: "/hardware/pvd-profile-3.webp",
    },
    {
        id: "10",
        name: "Door Stopper",
        detail: "Aluminium",
        image: "/hardware/door-stopper.webp",
    },
    {
        id: "11",
        name: "U-Channel",
        detail: "Powder-Coated Aluminium",
        image: "/hardware/u-channel.webp",
    },
    {
        id: "12",
        name: "F-Channel",
        detail: "Powder-Coated Aluminium",
        image: "/hardware/f-channel.webp",
    },
];

export default function Hardware() {
    const sectionRef = useRef(null);
    const previewRef = useRef(null);
    const imageRef = useRef(null);

    const [activeItem, setActiveItem] = useState(null);
    const [mobileItem, setMobileItem] = useState(null);

    const mouseX = useRef(0);
    const mouseY = useRef(0);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".hardware-reveal",
                {
                    y: 45,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.9,
                    stagger: 0.1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                        once: true,
                    },
                }
            );

            gsap.fromTo(
                ".hardware-pill",
                {
                    y: 30,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.65,
                    stagger: {
                        each: 0.055,
                        from: "start",
                    },
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".hardware-list",
                        start: "top 85%",
                        once: true,
                    },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    useEffect(() => {
        if (!previewRef.current) return;

        gsap.to(previewRef.current, {
            opacity: activeItem ? 1 : 0,
            scale: activeItem ? 1 : 0.88,
            y: activeItem ? 0 : 15,
            duration: 0.3,
            ease: "power3.out",
            overwrite: "auto",
        });
    }, [activeItem]);

    const handleMouseMove = (event) => {
        if (!previewRef.current) return;

        const rect = sectionRef.current.getBoundingClientRect();

        mouseX.current = event.clientX - rect.left;
        mouseY.current = event.clientY - rect.top;

        gsap.to(previewRef.current, {
            x: mouseX.current,
            y: mouseY.current,
            duration: 0.45,
            ease: "power3.out",
            overwrite: "auto",
        });
    };

    const handleEnter = (item) => {
        if (window.matchMedia("(hover: none)").matches) return;

        setActiveItem(item);
    };

    const handleLeave = () => {
        setActiveItem(null);
    };

    return (
        <section
            ref={sectionRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleLeave}
            className="relative isolate overflow-hidden bg-[#111111] py-10 text-white sm:py-12 lg:py-15"
        >
            {/* BACKGROUND */}
            <div
                className="pointer-events-none absolute inset-0 opacity-30"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px)",
                    backgroundSize: "100px 100px",
                }}
            />

            <div className="pointer-events-none absolute -left-[200px] top-[20%] h-[600px] w-[600px] rounded-full bg-[#E58B3B]/[0.045] blur-[130px]" />

            <div className="relative mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
                {/* HEADING */}
                <div className="hardware-reveal relative mb-8 text-center">
                    {/* Giant background text */}
                    <span
                        aria-hidden="true"
                        className="pointer-events-none uppercase absolute left-1/2 top-[-50px] -translate-x-1/2 select-none whitespace-nowrap text-[clamp(80px,10vw,130px)] font-black leading-none text-white/[0.045]"
                    >
                       Cubiloo Cubicles
                    </span>

                    <div className="relative z-10">
                        <div className="mb-6 flex items-center justify-center gap-3">
                            <span className="h-px w-8 bg-[#EFAC39]" />

                            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#EFAC39]">
                                Premium Cubicle Accessories
                            </span>

                            <span className="h-px w-8 bg-[#EFAC39]" />
                        </div>

                        <h2 className="text-[clamp(2.7rem,5vw,5rem)] font-semibold leading-[1] tracking-[-0.015em]">
                            Hardware that
                            <br />
                            <span
                                className="bg-clip-text text-transparent"
                                style={{ backgroundImage: GRADIENT }}
                            >
                                completes every detail.
                            </span>
                        </h2>

                        <p className="mx-auto mt-6 max-w-[650px] text-sm leading-[1.9] text-white/45 sm:text-base">
                            Discover our selection of durable cubicle hardware
                            and premium accessories, designed for smooth
                            functionality, precision and long-lasting
                            performance.
                        </p>
                    </div>
                </div>

                {/* HARDWARE PILLS */}
                <div className="hardware-list relative z-10 mx-auto flex max-w-[1450px] flex-wrap items-center justify-center gap-3 sm:gap-4">
                    {HARDWARE.map((item) => (
                        <button
                            key={item.id}
                            type="button"
                            onMouseEnter={() => handleEnter(item)}
                            onMouseLeave={handleLeave}
                            onFocus={() => handleEnter(item)}
                            onBlur={handleLeave}
                            onClick={() => setMobileItem(item)}
                            className={`hardware-pill group inline-flex min-h-[65px] items-center gap-3 rounded-[16px] border px-5 py-3.5 text-left transition-all duration-300 sm:min-h-[74px] sm:px-7 ${activeItem?.id === item.id
                                ? "border-[#E58B3B] bg-[#E58B3B]/15"
                                : "border-white/[0.055] bg-[#202020] hover:border-[#E58B3B]/50 hover:bg-[#29231E]"
                                }`}
                        >
                            <span
                                className={`text-[11px] font-semibold transition-colors ${activeItem?.id === item.id
                                    ? "text-[#EFAC39]"
                                    : "text-white/25 group-hover:text-[#EFAC39]"
                                    }`}
                            >
                                {item.id}
                            </span>

                            <span className="text-[13px] font-medium text-white/65 transition-colors group-hover:text-white sm:text-[17px]">
                                {item.name}
                            </span>

                            <ArrowUpRight
                                size={17}
                                className="text-white/25 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#EFAC39]"
                            />
                        </button>
                    ))}
                </div>
            </div>

            {/* FLOATING HOVER IMAGE */}
            <div
                ref={previewRef}
                className="pointer-events-none absolute left-0 top-0 z-30 hidden w-[270px] -translate-x-1/2 -translate-y-[115%] overflow-hidden rounded-[20px] border border-white/15 bg-white p-3 opacity-0 shadow-[0_25px_80px_rgba(0,0,0,0.6)] lg:block"
            >
                {activeItem && (
                    <>
                        <div className="relative h-[190px] w-full overflow-hidden rounded-xl bg-[#F5F5F5]">
                            <Image
                                src={activeItem.image}
                                alt={activeItem.name}
                                fill
                                sizes="270px"
                                className="object-contain p-3"
                            />
                        </div>

                        <div className="px-2 pb-1 pt-3">
                            <p className="text-[15px] font-semibold text-[#121212]">
                                {activeItem.name}
                            </p>

                            <p className="mt-1 text-xs text-[#777]">
                                {activeItem.detail}
                            </p>
                        </div>
                    </>
                )}
            </div>

            {/* MOBILE IMAGE MODAL */}
            {mobileItem && (
                <div
                    className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 p-5 backdrop-blur-md"
                    onClick={() => setMobileItem(null)}
                >
                    <div
                        role="dialog"
                        aria-modal="true"
                        aria-label={mobileItem.name}
                        className="relative w-full max-w-[400px] overflow-hidden rounded-[24px] bg-white p-5 text-black"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <button
                            type="button"
                            aria-label="Close preview"
                            onClick={() => setMobileItem(null)}
                            className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black text-white"
                        >
                            <X size={18} />
                        </button>

                        <div className="relative mt-7 h-[260px] w-full">
                            <Image
                                src={mobileItem.image}
                                alt={mobileItem.name}
                                fill
                                sizes="400px"
                                className="object-contain"
                            />
                        </div>

                        <h3 className="mt-5 text-2xl font-semibold">
                            {mobileItem.name}
                        </h3>

                        <p className="mt-2 text-sm text-gray-500">
                            {mobileItem.detail}
                        </p>

                        <button
                            type="button"
                            onClick={() => setMobileItem(null)}
                            className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl py-4 text-sm font-bold text-black"
                            style={{ background: GRADIENT }}
                        >
                            Close Preview
                            <ArrowRight size={17} />
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}
