
"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

const GRADIENT =
    "linear-gradient(90deg, #b8c900 0%, #dddf00 35%, #f0f542 65%, #a9c000 100%)";

const columns = [
    [
        { image: "/Black Maxi.webp", title: "Black Maxi" },
        { image: "/Cielo.webp", title: "Cielo Cubicles" },
        { image: "/duro pro toilet cubicles.webp", title: "Duro Pro" },
        { image: "/Kiddiez.webp", title: "Kiddiez" },
    ],
    [
        { image: "/Maxi Pro.webp", title: "Maxi Pro" },
        { image: "/Cubi Doorz.webp", title: "Cubi Doorz" },
        { image: "/Premia.webp", title: "Premia" },
        { image: "/Kiddiez Pro.webp", title: "Kiddiez Pro" },
    ],
    [
        { image: "/Duro-Toilet-Cubicles.webp", title: "Duro Cubicles" },
        { image: "/Luron.webp", title: "Luron" },
        { image: "/Rove.webp", title: "Rove" },
        { image: "/Kiddiez.webp", title: "Kiddiez" },
    ],
];

function MovingColumn({ images, index }) {
    return (
        <div className="relative h-full min-w-0 overflow-hidden">
            <div
                className="mobile-wall-track flex w-full flex-col"
                data-direction={index % 2 === 0 ? "up" : "down"}
            >
                {[0, 1].map((copy) => (
                    <div
                        key={copy}
                        aria-hidden={copy === 1}
                        className="flex shrink-0 flex-col gap-[9px] pb-[9px]"
                    >
                        {images.map((item, i) => (
                            <div
                                key={`${copy}-${i}`}
                                className="relative h-[175px] w-full shrink-0 overflow-hidden rounded-[11px] border border-white/20 bg-[#14242a]"
                            >
                                <Image
                                    src={item.image}
                                    alt={copy === 0 ? item.title : ""}
                                    fill
                                    sizes="40vw"
                                    className="object-cover"
                                    priority={copy === 0 && i < 2}
                                />

                                <div className="absolute inset-0 bg-black/10" />
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function MobileHeroBanner() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const root = sectionRef.current;
        if (!root) return;

        const reducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        const ctx = gsap.context(() => {
            if (reducedMotion) return;

            const tracks = gsap.utils.toArray(".mobile-wall-track");

            tracks.forEach((track, index) => {
                const direction = track.dataset.direction;

                gsap.fromTo(
                    track,
                    {
                        yPercent: direction === "up" ? 0 : -50,
                    },
                    {
                        yPercent: direction === "up" ? -50 : 0,
                        duration: index === 1 ? 30 : index === 2 ? 38 : 34,
                        ease: "none",
                        repeat: -1,
                        force3D: true,
                    }
                );
            });

            const tl = gsap.timeline({
                defaults: { ease: "power3.out" },
            });

            tl.from(".mobile-wall-showcase", {
                opacity: 0,
                scale: 1.12,
                duration: 1.5,
            })
                .from(
                    ".mobile-wall-eyebrow",
                    { opacity: 0, y: 25, duration: 0.7 },
                    "-=0.9"
                )
                .from(
                    ".mobile-wall-title-line",
                    {
                        opacity: 0,
                        yPercent: 110,
                        duration: 0.9,
                        stagger: 0.15,
                    },
                    "-=0.5"
                )
                .from(
                    ".mobile-wall-description",
                    { opacity: 0, y: 25, duration: 0.7 },
                    "-=0.35"
                )
                .from(
                    ".mobile-wall-action",
                    { opacity: 0, y: 25, duration: 0.7 },
                    "-=0.3"
                )
                .from(
                    ".mobile-wall-bottom",
                    { opacity: 0, y: 25, duration: 0.7 },
                    "-=0.3"
                );

            gsap.to(".mobile-wall-orbit", {
                rotation: 360,
                duration: 20,
                ease: "none",
                repeat: -1,
            });
        }, root);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative isolate block h-[90svh] min-h-[600px] max-h-[950px] w-full overflow-hidden bg-[#071720] text-white sm:hidden"
        >
            {/* MOVING IMAGE WALL */}
            <div className="mobile-wall-showcase absolute inset-0 z-0 overflow-hidden">
                <div
                    className="absolute -left-[22%] -top-[20%] h-[145%] w-[145%]"
                    style={{
                        transform: "rotate(9deg)",
                        transformOrigin: "center",
                    }}
                >
                    <div className="grid h-full w-full grid-cols-3 gap-[9px] overflow-hidden">
                        {columns.map((images, index) => (
                            <MovingColumn
                                key={index}
                                images={images}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* DARK OVERLAY */}
            <div className="pointer-events-none absolute inset-0 z-10 bg-[#071720]/15" />

            <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-[#071720]/55 via-[#071720]/25 to-[#071720]/65" />

            <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-[#071720]/15 via-transparent to-[#071720]/10" />

            {/* BRAND ACCENT */}
            {/* <div
                className="absolute left-0 top-0 z-20 h-[3px] w-full"
                style={{ background: GRADIENT }}
            /> */}

            {/* MAIN CONTENT */}
            <div className="relative z-20 flex h-full flex-col justify-between px-4 pb-10 pt-[120px] min-[400px]:px-8">
                <div>
                    <div className="mobile-wall-eyebrow mb-5 flex items-center gap-3">
                        <span
                            className="h-[2px] w-9"
                            style={{ background: GRADIENT }}
                        />
                        <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#dddf00]">
                            Cubiloo Cubicles
                        </span>
                    </div>

                    <h1 className="text-[clamp(37px,5vw,10px)] font-semibold leading-[0.98] tracking-[-0.015em]">
                        <span className="block overflow-hidden pb-1">
                            <span className="mobile-wall-title-line block">
                                Complete
                            </span>
                        </span>

                        <span className="block text-nowrap overflow-hidden">
                            <span className="mobile-wall-title-line block">
                                Restroom   Solutions.
                            </span>
                        </span>

                        <span className="mt-2 block overflow-hidden pb-1">
                            <span
                                className="mobile-wall-title-line block bg-clip-text text-transparent"
                                style={{ backgroundImage: GRADIENT }}
                            >
                                Built to Last.
                            </span>
                        </span>
                    </h1>

                    <p className="mobile-wall-description mt-5 max-w-[320px] text-[14px] leading-[1.75] text-white/85">
                        Premium toilet cubicles and modern restroom partitions,
                        designed with precision and built for lasting performance.
                    </p>

                    <div className="mobile-wall-action mt-7 flex items-center gap-3">
                        <Link
                            href="/products"
                            className="group inline-flex items-center gap-5 rounded-full py-2 pl-5 pr-2 text-[13px] font-bold text-[#071720]"
                            style={{ background: GRADIENT }}
                        >
                            Explore Solutions

                            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#071720] text-white transition-transform duration-300 group-hover:rotate-45">
                                <ArrowUpRight size={19} />
                            </span>
                        </Link>
                    </div>
                </div>

                {/* BOTTOM CONTENT */}
                <div className="mobile-wall-bottom flex items-end justify-between gap-4">
                    <div>
                        <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#dddf00]">
                            Since 2012
                        </span>

                        <p className="mt-2 max-w-[210px] text-[12px] leading-[1.6] text-white/75">
                            25+ years of expertise.
                            <br />
                            5,000+ projects completed.
                        </p>
                    </div>

                    <Link
                        href="/products"
                        aria-label="Explore our cubicle collection"
                        className="relative flex h-[90px] w-[90px] shrink-0 items-center justify-center rounded-full"
                        style={{ background: GRADIENT }}
                    >
                        <svg
                            className="mobile-wall-orbit absolute inset-0 h-full w-full"
                            viewBox="0 0 120 120"
                            aria-hidden="true"
                        >
                            <defs>
                                <path
                                    id="mobile-wall-circle"
                                    d="M60,60 m-45,0 a45,45 0 1,1 90,0 a45,45 0 1,1 -90,0"
                                />
                            </defs>

                            <text
                                fill="#071720"
                                fontSize="10"
                                fontWeight="800"
                                letterSpacing="2"
                            >
                                <textPath href="#mobile-wall-circle">
                                    PREMIUM CUBICLES • BUILT TO LAST •
                                </textPath>
                            </text>
                        </svg>

                        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#071720] text-white">
                            <ArrowDownRight size={23} />
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
