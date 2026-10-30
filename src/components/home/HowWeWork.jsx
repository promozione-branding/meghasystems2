
"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import {
    ArrowUpRight,
    ArrowRight,
    ArrowLeft,
    Ruler,
    PenTool,
    Factory,
    Wrench,
    ShieldCheck,
    Check,
    Layers3,
    Settings2,
} from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

gsap.registerPlugin(ScrollTrigger);

const GRADIENT = "linear-gradient(90deg, #b8c900 0%, #dddf00 35%, #f0f542 65%, #a9c000 100%)";

const STEPS = [
    {
        number: "01",
        title: "Understand",
        subtitle: "Consultation & Site Study",
        description:
            "We study your space, requirements and project expectations to create the right restroom solution.",
        icon: Ruler,
        type: "consultation",
    },
    {
        number: "02",
        title: "Design",
        subtitle: "Preparation of Showing Drawings",
        description:
            "Thoughtful layouts, premium materials and precise detailing come together in every design.",
        icon: PenTool,
        type: "design",
    },
    {
        number: "03",
        title: "Manufacture",
        subtitle: "Precision Production",
        description:
            "Every cubicle component is manufactured with precision, consistency and lasting quality.",
        icon: Factory,
        type: "manufacture",
    },
    {
        number: "04",
        title: "Install",
        subtitle: "Professional Execution",
        description:
            "Our installation team ensures accurate fitting, clean alignment and a professional finish.",
        icon: Wrench,
        type: "install",
    },
    {
        number: "05",
        title: "Quality Check",
        subtitle: "Built to Last",
        description:
            "We inspect every detail to ensure the finished installation meets our quality standards.",
        icon: ShieldCheck,
        type: "quality",
    },
];

function ConsultationVisual() {
    return (
        <div className="flex h-full items-center justify-center p-5">
            <div className="w-full max-w-[300px] rounded-2xl border border-white/10 bg-[#19191D] p-4 shadow-2xl">
                <div className="mb-4 flex items-center gap-2 border-b border-white/10 pb-3">
                    <span className="h-2 w-2 rounded-full bg-[#dddf00]" />
                    <span className="h-2 w-2 rounded-full bg-white/20" />
                    <span className="h-2 w-2 rounded-full bg-white/20" />

                    <span className="ml-2 text-[10px] font-medium text-white/50">
                        Project Requirements
                    </span>
                </div>

                <div className="grid grid-cols-3 gap-2">
                    {[
                        { label: "Layout", icon: Ruler },
                        { label: "Space", icon: Layers3 },
                        { label: "Details", icon: Settings2 },
                    ].map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={item.label}
                                className={`flex h-[80px] flex-col items-center justify-center gap-2 rounded-xl border ${index === 0
                                    ? "border-[#dddf00] bg-[#dddf00]/10 text-[#dddf00]"
                                    : "border-white/10 bg-white/[0.035] text-white/55"
                                    }`}
                            >
                                <Icon size={19} />
                                <span className="text-[10px]">{item.label}</span>
                            </div>
                        );
                    })}
                </div>

                <div className="mt-3 flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] p-3">
                    <div className="h-2 w-2 rounded-full bg-[#dddf00]" />
                    <div className="h-1.5 w-24 rounded-full bg-white/20" />
                    <div className="ml-auto h-1.5 w-10 rounded-full bg-[#dddf00]" />
                </div>
            </div>
        </div>
    );
}

function DesignVisual() {
    return (
        <div className="flex h-full items-center justify-center p-5">
            <div className="w-full max-w-[300px] space-y-3">
                <div className="rounded-xl border border-white/10 bg-[#19191D] p-4">
                    <div className="mb-3 flex items-center justify-between">
                        <span className="text-[10px] text-white/50">
                            Layout Planning
                        </span>
                        <PenTool size={15} className="text-[#dddf00]" />
                    </div>

                    <div className="relative h-[75px] overflow-hidden rounded-lg border border-white/10 bg-[#101013] p-3">
                        <div className="flex h-full gap-2">
                            {[0, 1, 2, 3].map((item) => (
                                <div
                                    key={item}
                                    className="flex-1 rounded-t-md border border-[#dddf00]/60 bg-[#dddf00]/15"
                                >
                                    <div className="mx-auto mt-3 h-1 w-5 rounded-full bg-[#dddf00]/70" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="rounded-xl border border-white/10 bg-[#19191D] p-3">
                    <div className="mb-3 h-1.5 w-2/3 rounded-full bg-white/20" />
                    <div className="mb-2 h-1.5 w-1/2 rounded-full bg-white/10" />

                    <div className="flex gap-2">
                        {["#dddf00", "#46464B", "#797979", "#dddf00"].map(
                            (color) => (
                                <div
                                    key={color}
                                    className="h-7 flex-1 rounded-md"
                                    style={{ backgroundColor: color }}
                                />
                            )
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

function ManufactureVisual() {
    return (
        <div className="flex h-full items-center justify-center p-5">
            <div className="relative flex h-[200px] w-full max-w-[300px] items-center justify-center">
                <div className="absolute h-[160px] w-[160px] rounded-full border border-[#dddf00]/25" />
                <div className="absolute h-[130px] w-[130px] rounded-full border-[8px] border-[#dddf00]/20" />
                <div className="absolute h-[100px] w-[100px] rounded-full border-[6px] border-[#dddf00]" />

                <div
                    className="relative flex h-[65px] w-[65px] items-center justify-center rounded-full text-black shadow-[0_0_45px_rgba(221,223,0,0.25)]"
                    style={{ background: GRADIENT }}
                >
                    <Factory size={29} />
                </div>

                <div className="absolute left-0 top-5 rounded-full border border-white/15 bg-[#19191D] px-3 py-2 text-[10px] text-white/70">
                    Precision
                </div>

                <div className="absolute bottom-5 right-0 rounded-full border border-white/15 bg-[#19191D] px-3 py-2 text-[10px] text-white/70">
                    Quality Materials
                </div>
            </div>
        </div>
    );
}

function InstallVisual() {
    return (
        <div className="flex h-full items-center justify-center p-5">
            <div className="w-full max-w-[300px] rounded-xl border border-white/10 bg-[#19191D] p-5">
                <div className="mb-4 flex items-center justify-between">
                    <span className="text-xs font-medium text-white/60">
                        Installation Progress
                    </span>
                    <Wrench size={17} className="text-[#dddf00]" />
                </div>

                {[
                    { name: "Site Preparation", progress: "100%" },
                    { name: "Panel Fitting", progress: "85%" },
                    { name: "Final Alignment", progress: "60%" },
                ].map((item) => (
                    <div key={item.name} className="mb-4 last:mb-0">
                        <div className="mb-2 flex justify-between text-[10px] text-white/55">
                            <span>{item.name}</span>
                            <span>{item.progress}</span>
                        </div>

                        <div className="h-2 overflow-hidden rounded-full bg-white/10">
                            <div
                                className="h-full rounded-full"
                                style={{
                                    width: item.progress,
                                    background: GRADIENT,
                                }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function QualityVisual() {
    return (
        <div className="flex h-full items-center justify-center p-5">
            <div className="w-full max-w-[300px] rounded-xl border border-white/10 bg-[#19191D] p-5">
                <div className="mb-5 flex items-center gap-3">
                    <div
                        className="flex h-11 w-11 items-center justify-center rounded-full text-black"
                        style={{ background: GRADIENT }}
                    >
                        <ShieldCheck size={23} />
                    </div>

                    <div>
                        <p className="text-sm font-semibold text-white">
                            Quality Assured
                        </p>
                        <p className="mt-1 text-[10px] text-white/45">
                            Final inspection checklist
                        </p>
                    </div>
                </div>

                {[
                    "Material Inspection",
                    "Hardware Testing",
                    "Finish Verification",
                ].map((item) => (
                    <div
                        key={item}
                        className="flex items-center gap-3 border-t border-white/10 py-3"
                    >
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#dddf00]/15 text-[#dddf00]">
                            <Check size={13} />
                        </span>

                        <span className="text-xs text-white/65">{item}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

const VISUALS = {
    consultation: ConsultationVisual,
    design: DesignVisual,
    manufacture: ManufactureVisual,
    install: InstallVisual,
    quality: QualityVisual,
};

export default function HowWeWork() {
    const sectionRef = useRef(null);
    const swiperRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".how-reveal",
                { opacity: 0, y: 35 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.9,
                    stagger: 0.12,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 78%",
                        once: true,
                    },
                }
            );

            gsap.fromTo(
                ".how-swiper-wrap",
                { opacity: 0, y: 55 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".how-swiper-wrap",
                        start: "top 85%",
                        once: true,
                    },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative isolate overflow-hidden bg-[#0A0A0D] py-10 text-[#F4F4EF] sm:py-12 lg:py-15">
            {/* Background Grid */}
            <div
                className="pointer-events-none absolute inset-0 opacity-50"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.045) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.045) 1px,transparent 1px)",
                    backgroundSize: "90px 90px",
                }}
            />

            {/* Background Glow */}
            <div className="pointer-events-none absolute -top-[250px] left-[25%] h-[550px] w-[550px] rounded-full bg-[#dddf00]/[0.07] blur-[130px]" />

            <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
                {/* HEADER */}
                <div className="grid items-end gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
                    {/* Left Heading */}
                    <div className="how-reveal">
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.035] px-3 py-2">
                            <span
                                className="flex h-6 w-6 items-center justify-center rounded-md text-black"
                                style={{ background: GRADIENT }}
                            >
                                <Layers3 size={14} />
                            </span>

                            <span className="text-[11px] font-medium text-white/75">
                                Cubiloo • Our Working Process
                            </span>
                        </div>

                        <h2 className="text-[clamp(2.8rem,5vw,4.8rem)] font-medium leading-[1] tracking-[-0.02em]">
                            From concept
                            <br />

                            <span
                                className="bg-clip-text text-transparent"
                                style={{ backgroundImage: GRADIENT }}
                            >
                                to completion.
                            </span>
                        </h2>
                    </div>

                    {/* Right Description */}
                    <div className="how-reveal lg:pb-2">
                        <p className="max-w-[450px] text-[14px] leading-[1.85] text-white/55 sm:text-[15px]">
                            At Cubiloo Cubicles, every project follows a
                            thoughtful process — from understanding your
                            requirements and creating precise designs to
                            manufacturing, installation and final quality
                            checks.
                        </p>

                        <div className="mt-7 flex flex-wrap items-center gap-3">
                            <Link
                                href="/contact-us"
                                className="group inline-flex items-center gap-5 rounded-full p-1.5 pl-6 text-xs font-bold text-black transition-shadow hover:shadow-[0_10px_35px_rgba(221,223,0,0.25)] sm:text-sm"
                                style={{ background: GRADIENT }}
                            >
                                Start Your Project

                                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white transition-transform duration-300 group-hover:rotate-45">
                                    <ArrowUpRight size={18} />
                                </span>
                            </Link>

                            <Link
                                href="/about-us"
                                className="inline-flex h-[52px] items-center rounded-full border border-white/20 px-6 text-xs font-semibold text-white transition-colors hover:border-[#dddf00] hover:text-[#dddf00] sm:text-sm"
                            >
                                Learn More
                            </Link>
                        </div>
                    </div>
                </div>

                {/* SWIPER CARDS */}
                <div className="how-swiper-wrap mt-10">
                   <Swiper
    modules={[Autoplay, Navigation, Pagination]}
    onSwiper={(swiper) => {
        swiperRef.current = swiper;
    }}
    slidesPerView={1.1}
    spaceBetween={16}
    speed={800}
    loop={false}
    rewind={false}
    autoplay={{
        delay: 3500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
        stopOnLastSlide: true,
    }}
    pagination={{
        clickable: true,
        el: ".how-pagination",
    }}
    breakpoints={{
        640: {
            slidesPerView: 1.6,
            spaceBetween: 18,
        },
        1024: {
            slidesPerView: 2.5,
            spaceBetween: 20,
        },
        1280: {
            slidesPerView: 3,
            spaceBetween: 22,
        },
    }}
    className="!overflow-visible"
>
                        {STEPS.map((step) => {
                            const Icon = step.icon;
                            const Visual = VISUALS[step.type];

                            return (
                                <SwiperSlide key={step.number} className="!h-auto">
                                    <div className="group flex h-full flex-col overflow-hidden rounded-[22px] border border-white/[0.10] bg-[#111114] p-3 transition-all duration-500 hover:border-[#dddf00]/45 hover:bg-[#161619]">
                                        {/* VISUAL */}
                                        <div className="relative flex h-[235px] items-center justify-center overflow-hidden rounded-[16px] border border-white/[0.07] bg-[#0C0C0F] sm:h-[245px]">
                                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(221,223,0,0.055),transparent_70%)]" />

                                            {/* Number badge */}
                                            <span className="absolute left-4 top-4 z-10 rounded-full border border-white/15 bg-[#17171B] px-3 py-1.5 text-[13px] font-semibold text-white/65">
                                                Step {step.number}
                                            </span>

                                            <Visual />
                                        </div>

                                        {/* CONTENT */}
                                        <div className="flex flex-1 flex-col px-3 pb-4 pt-6 sm:px-4">
                                            <div className="mb-3 flex items-center justify-between">
                                                <h3 className="text-[21px] font-semibold tracking-[-0.04em] text-white sm:text-[23px]">
                                                    {step.title}
                                                </h3>

                                                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-[#dddf00] transition-all duration-300 group-hover:border-[#dddf00] group-hover:bg-[#dddf00] group-hover:text-black">
                                                    <Icon size={18} />
                                                </span>
                                            </div>

                                            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.13em] text-[#dddf00]">
                                                {step.subtitle}
                                            </p>

                                            <p className="text-[13px] leading-[1.8] text-white/50">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>

                    {/* SWIPER CONTROLS */}
                    <div className="mt-5 flex items-center justify-between gap-5">
                        <div className="how-pagination !static !flex !w-auto items-center gap-2" />

                        <div className="flex items-center gap-3">
                            <button
                                type="button"
                                aria-label="Previous step"
                                onClick={() => swiperRef.current?.slidePrev()}
                                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white transition-all hover:border-[#dddf00] hover:text-[#dddf00]"
                            >
                                <ArrowLeft size={19} />
                            </button>

                           <button
    type="button"
    aria-label="Next step"
    onClick={() => swiperRef.current?.slideNext()}
    disabled={swiperRef.current?.isEnd}
    className="flex h-12 w-12 items-center justify-center rounded-full text-black transition-all hover:scale-105 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:scale-100"
    style={{ background: GRADIENT }}
>
    <ArrowRight size={19} />
</button>
                        </div>
                    </div>
                </div>

                {/* BOTTOM TRUST LINE */}
                <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 border-t border-white/10 pt-5">
                    {[
                        "SITE STUDY",
                        "DESIGN",
                        "MANUFACTURING",
                        "INSTALLATION",
                        "QUALITY CHECK",
                    ].map((item, index) => (
                        <div
                            key={item}
                            className="flex items-center gap-6"
                        >
                            {index > 0 && (
                                <span className="h-1 w-1 rounded-full bg-[#dddf00]" />
                            )}

                            <span className="text-[13px] font-semibold tracking-[0.15em] text-white/40">
                                {item}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx global>{`
        .how-pagination .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          margin: 0 !important;
          background: rgba(255, 255, 255, 0.35);
          opacity: 1;
          transition: all 0.3s ease;
        }

        .how-pagination .swiper-pagination-bullet-active {
          width: 28px;
          border-radius: 20px;
          background: #dddf00;
        }
      `}</style>
        </section>
    );
}
