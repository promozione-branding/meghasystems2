
"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import {
    ArrowUpRight,
    ArrowDownRight,
    ArrowRight,
    Layers3,
    ShieldCheck,
} from "lucide-react";

const GRADIENT =
    "linear-gradient(90deg,#EFAC39 0%,#E58B3B 38%,#DF7539 72%,#D85538 100%)";

const columns = [
    [
        {
            image: "/duro pro toilet cubicles.webp",
            title: "Duro Pro Cubicles",
        },
        {
            image: "/Kiddiez.webp",
            title: "Kiddiez Cubicles",
        },
        {
            image: "/Maxi Pro.webp",
            title: "Maxi Pro Cubicles",
        },
        {
            image: "/Premia.webp",
            title: "Premia Cubicles",
        },
    ],
    [
        {
            image: "/Premia.webp",
            title: "Premium Partitions",
        },
        {
            image: "/Maxi Pro.webp",
            title: "Commercial Cubicles",
        },
        {
            image: "/duro pro toilet cubicles.webp",
            title: "Modern Washrooms",
        },
        {
            image: "/Kiddiez.webp",
            title: "Kids Restroom Solutions",
        },
    ],
    [
        {
            image: "/Maxi Pro.webp",
            title: "High Pressure Laminate",
        },
        {
            image: "/Kiddiez.webp",
            title: "School Washrooms",
        },
        {
            image: "/Premia.webp",
            title: "Architectural Cubicles",
        },
        {
            image: "/duro pro toilet cubicles.webp",
            title: "Durable Restroom Systems",
        },
    ],
];

const stats = [
    {
        id: "01",
        value: 25,
        suffix: "+",
        label: "Years of Excellence",
    },
    {
        id: "02",
        value: 5000,
        suffix: "+",
        label: "Projects Completed",
    },
    {
        id: "03",
        value: 100000,
        suffix: "+",
        label: "Cubicles Installed",
    },
];

function formatNumber(value, index) {
    if (index === 2 && value >= 100000) {
        return "1 Lakh";
    }

    return Math.floor(value).toLocaleString("en-IN");
}

function ImageColumn({ images, index }) {
    return (
        <div className={`cubiloo-wall-col cubiloo-wall-col-${index}`}>
            <div
                className="cubiloo-wall-track"
                data-direction={index % 2 === 0 ? "up" : "down"}
                data-duration={index === 1 ? "38" : index === 2 ? "45" : "42"}
            >
                {[0, 1].map((copy) => (
                    <div
                        key={copy}
                        className="cubiloo-wall-group"
                        aria-hidden={copy === 1 ? "true" : undefined}
                    >
                        {images.map((item, i) => (
                            <div
                                key={`${copy}-${i}`}
                                className="cubiloo-wall-card group"
                            >
                                <Image
                                    src={item.image}
                                    alt={copy === 0 ? item.title : ""}
                                    fill
                                    sizes="(max-width: 768px) 180px, 350px"
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    priority={copy === 0 && i < 2}
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

                                <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between gap-2 p-4">
                                    <span className="text-xs font-semibold text-white sm:text-sm">
                                        {item.title}
                                    </span>

                                    <ArrowUpRight
                                        size={16}
                                        className="shrink-0 text-[#EFAC39]"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function HeroSection() {
    const heroRef = useRef(null);
    const showcaseRef = useRef(null);
    const spotlightRef = useRef(null);

    useEffect(() => {
        const root = heroRef.current;
        if (!root) return;

        const reduceMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        const ctx = gsap.context(() => {
            if (!reduceMotion) {
                // Text entrance
                const tl = gsap.timeline({
                    defaults: {
                        ease: "power3.out",
                    },
                });

                tl.from(".cubiloo-badge", {
                    y: 25,
                    opacity: 0,
                    duration: 0.7,
                })
                    .from(
                        ".cubiloo-title-line",
                        {
                            yPercent: 110,
                            opacity: 0,
                            duration: 1,
                            stagger: 0.13,
                        },
                        "-=0.35"
                    )
                    .from(
                        ".cubiloo-description",
                        {
                            y: 30,
                            opacity: 0,
                            duration: 0.8,
                        },
                        "-=0.5"
                    )
                    .from(
                        ".cubiloo-actions",
                        {
                            y: 25,
                            opacity: 0,
                            duration: 0.7,
                        },
                        "-=0.4"
                    )
                    .from(
                        ".cubiloo-showcase",
                        {
                            x: 100,
                            opacity: 0,
                            scale: 0.95,
                            duration: 1.5,
                            ease: "power4.out",
                        },
                        "-=1"
                    )
                    .from(
                        ".cubiloo-stat",
                        {
                            y: 25,
                            opacity: 0,
                            duration: 0.6,
                            stagger: 0.1,
                        },
                        "-=0.6"
                    );

                // Infinite vertical image wall
                const tracks = gsap.utils.toArray(
                    ".cubiloo-wall-track"
                );

                tracks.forEach((track) => {
                    const direction = track.dataset.direction;
                    const duration = Number(track.dataset.duration);

                    // Each track contains two identical groups.
                    // Moving exactly half its height creates a seamless loop.
                    gsap.fromTo(
                        track,
                        {
                            yPercent: direction === "up" ? 0 : -50,
                        },
                        {
                            yPercent: direction === "up" ? -50 : 0,
                            duration,
                            ease: "none",
                            repeat: -1,
                            force3D: true,
                        }
                    );
                });

                // Orange glow breathing
                gsap.to(".cubiloo-glow-orange", {
                    opacity: 0.75,
                    scale: 1.18,
                    duration: 5,
                    ease: "sine.inOut",
                    repeat: -1,
                    yoyo: true,
                });

                // Floating badges
                gsap.to(".cubiloo-chip-top", {
                    y: -12,
                    duration: 3,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut",
                });

                gsap.to(".cubiloo-chip-bottom", {
                    y: 12,
                    duration: 3.7,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut",
                });

                // Orbit rotation
                gsap.to(".cubiloo-orbit-ring", {
                    rotation: 360,
                    duration: 22,
                    repeat: -1,
                    ease: "none",
                    transformOrigin: "50% 50%",
                });
            }

            // Statistics counters
            const counters = gsap.utils.toArray(
                ".cubiloo-stat-number"
            );

            counters.forEach((element, index) => {
                const item = stats[index];

                if (reduceMotion) {
                    element.textContent =
                        formatNumber(item.value, index) + item.suffix;
                    return;
                }

                const counter = { value: 0 };

                gsap.to(counter, {
                    value: item.value,
                    duration: 2.4,
                    delay: 0.7,
                    ease: "power2.out",
                    onUpdate: () => {
                        element.textContent =
                            formatNumber(counter.value, index) + item.suffix;
                    },
                });
            });
        }, root);

        // Spotlight follows mouse
        const spotlight = spotlightRef.current;
        const xTo = spotlight
            ? gsap.quickTo(spotlight, "x", {
                duration: 0.7,
                ease: "power3.out",
            })
            : null;

        const yTo = spotlight
            ? gsap.quickTo(spotlight, "y", {
                duration: 0.7,
                ease: "power3.out",
            })
            : null;

        const handleMouseMove = (event) => {
            if (
                reduceMotion ||
                !spotlight ||
                window.innerWidth < 1024
            ) {
                return;
            }

            const rect = root.getBoundingClientRect();

            xTo(event.clientX - rect.left);
            yTo(event.clientY - rect.top);
        };

        root.addEventListener("mousemove", handleMouseMove);

        return () => {
            root.removeEventListener("mousemove", handleMouseMove);
            ctx.revert();
        };
    }, []);

    return (
        <section
            ref={heroRef}
            className="cubiloo-hero relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-[#0A0A0D] text-[#F4F4EF]"
        >
            {/* BACKGROUND */}
            <div
                className="pointer-events-none absolute inset-0 z-0"
                aria-hidden="true"
            >
                <div className="cubiloo-grid absolute inset-0" />

                <div className="cubiloo-glow-orange absolute -right-[15%] top-[-20%] h-[800px] w-[800px] rounded-full bg-[#E58B3B]/15 blur-[150px]" />

                <div className="absolute -bottom-[300px] left-[10%] h-[650px] w-[650px] rounded-full bg-[#D85538]/10 blur-[150px]" />

                <div
                    ref={spotlightRef}
                    className="absolute left-0 top-0 hidden h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#EFAC39]/[0.07] blur-[90px] lg:block"
                />
            </div>

            {/* MAIN HERO */}
            <div className="relative z-10 mx-auto flex w-full max-w-[1600px] flex-1 items-center px-5 pt-[125px] sm:px-8 lg:px-12 lg:pt-[140px]">
                <div className="grid w-full items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-0">
                    {/* LEFT CONTENT */}
                    <div className="relative z-20 pb-8 lg:pb-12">

                        {/* Announcement Badge */}
                        <div className="cubiloo-badge mb-5 inline-flex max-w-full items-center gap-3 rounded-full border border-[#EFAC39]/40 bg-[#EFAC39]/[0.08] p-1.5 pr-3 shadow-[0_0_35px_rgba(239,172,57,0.08)] sm:mb-9">
                            <span
                                className="rounded-full px-4 py-2 text-xs font-bold uppercase text-black"
                                style={{ background: GRADIENT }}
                            >
                                Since 2012
                            </span>

                            <span className="text-xs font-medium text-white/80 sm:text-sm">
                                Built on trust. Driven by quality.
                            </span>

                            <ArrowUpRight
                                size={17}
                                className="shrink-0 text-[#EFAC39]"
                            />
                        </div>

                        {/* Title */}
                        <h1 className="max-w-[900px] text-[clamp(3rem,5vw,6rem)] font-semibold leading-[1.07] tracking-[-0.065em]">
                            <span className="block overflow-hidden pb-2">
                                <span className="cubiloo-title-line block">
                                    Complete
                                </span>
                            </span>

                            <span className="block overflow-hidden pb-2">
                                <span className="cubiloo-title-line block">
                                    restroom solutions,
                                </span>
                            </span>

                            <span className="block overflow-hidden pb-3">
                                <span
                                    className="cubiloo-title-line block bg-clip-text text-transparent"
                                    style={{ backgroundImage: GRADIENT }}
                                >
                                    built to last.
                                </span>
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="cubiloo-description mt-5 max-w-[620px] text-[15px] leading-[1.85] text-white/60">
                            Established in 2012, Cubiloo Cubicles delivers
                            complete restroom solutions for modern commercial
                            and institutional spaces. From design and
                            manufacturing to installation, every project
                            reflects quality, precision and lasting performance.
                        </p>

                        {/* Actions */}
                        <div className="cubiloo-actions mt-5 flex flex-wrap items-center gap-4">
                            <Link
                                href="/products"
                                className="group inline-flex items-center gap-7 rounded-full p-2 pl-7 text-sm font-bold text-black transition-shadow duration-300 hover:shadow-[0_10px_45px_rgba(229,139,59,0.3)] sm:text-base"
                                style={{ background: GRADIENT }}
                            >
                                Explore Solutions

                                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-white transition-transform duration-300 group-hover:rotate-45">
                                    <ArrowUpRight size={20} />
                                </span>
                            </Link>

                            <Link
                                href="/contact-us"
                                className="group inline-flex h-[64px] items-center gap-4 rounded-full border border-white/20 px-7 text-sm font-semibold transition-colors duration-300 hover:border-[#E58B3B] hover:text-[#E58B3B]"
                            >
                                Get a Quote

                                <ArrowUpRight
                                    size={18}
                                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                                />
                            </Link>
                        </div>

                        {/* Statistics */}
                        <div className="mt-12 grid max-w-[650px] grid-cols-1 gap-y-7 border-t border-white/10 pt-7 lg:grid-cols-3">
                            {stats.map((item, index) => (
                                <div
                                    key={item.id}
                                    className={`cubiloo-stat px-3 first:pl-0 ${index > 0
                                        ? "lg:border-l lg:border-white/10 lg:pl-5"
                                        : ""
                                        }`}
                                >
                                    <span className="mb-2 block text-[10px] font-bold tracking-widest text-[#EFAE39]">
                                        {item.id}
                                    </span>

                                    <div className="cubiloo-stat-number whitespace-nowrap text-[clamp(1.6rem,2.4vw,2.7rem)] font-semibold tracking-[-0.05em]">
                                        {formatNumber(item.value, index) + item.suffix}
                                    </div>

                                    <p className="mt-2 text-[10px] uppercase leading-relaxed tracking-[0.07em] text-white/45">
                                        {item.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT SHOWCASE */}
                    <div
                        ref={showcaseRef}
                        className="cubiloo-showcase relative h-[430px] w-full sm:h-[560px] lg:h-[750px]"
                    >
                        <div className="cubiloo-stage absolute inset-0">
                            {/* Tilted image wall */}
                            <div className="cubiloo-wall-perspective absolute inset-0">
                                <div className="cubiloo-wall-tilt">
                                    <div className="cubiloo-wall">
                                        {columns.map((images, index) => (
                                            <ImageColumn
                                                key={index}
                                                images={images}
                                                index={index}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Circular rotating orbit */}
                            <Link
                                href="/products"
                                aria-label="Explore Cubiloo solutions"
                                className="absolute bottom-[6%] left-[3%] z-30 flex h-[115px] w-[115px] items-center justify-center rounded-full shadow-[0_0_60px_rgba(229,139,59,0.25)] sm:h-[145px] sm:w-[145px]"
                                style={{ background: GRADIENT }}
                            >
                                <svg
                                    className="cubiloo-orbit-ring absolute inset-0 h-full w-full"
                                    viewBox="0 0 120 120"
                                    aria-hidden="true"
                                >
                                    <defs>
                                        <path
                                            id="cubiloo-orbit-path"
                                            d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0"
                                        />
                                    </defs>

                                    <text
                                        fill="#111"
                                        fontSize="9.4"
                                        fontWeight="800"
                                        letterSpacing="2"
                                    >
                                        <textPath href="#cubiloo-orbit-path">
                                            PREMIUM CUBICLES • BUILT TO LAST •
                                        </textPath>
                                    </text>
                                </svg>

                                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-white sm:h-14 sm:w-14">
                                    <ArrowDownRight size={26} />
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* BOTTOM TICKER */}
            <div className="relative z-20 overflow-hidden border-t border-white/10 bg-white/[0.025] py-4">
                <div className="cubiloo-ticker-track flex w-max">
                    {[0, 1].map((copy) => (
                        <div
                            key={copy}
                            aria-hidden={copy === 1 ? "true" : undefined}
                            className="flex shrink-0 items-center gap-10 pr-10"
                        >
                            {[
                                "TOILET CUBICLES",
                                "RESTROOM PARTITIONS",
                                "PREMIUM MATERIALS",
                                "MODERN WASHROOMS",
                                "COMPLETE INSTALLATION",
                            ].map((item) => (
                                <span
                                    key={item}
                                    className="flex items-center gap-10 whitespace-nowrap text-xs font-semibold tracking-[0.15em] text-white/90"
                                >
                                    {item}
                                    <span className="h-1.5 w-1.5 rounded-full bg-[#E58B3B]" />
                                </span>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            <style jsx global>{`
        .cubiloo-hero {
          --hx-bg: #0a0a0d;
          --hx-text: #f4f4ef;
          --hx-muted: rgba(244, 244, 239, 0.62);
          --hx-line: rgba(255, 255, 255, 0.09);
          --hx-orange: #e58b3b;
        }

        .cubiloo-grid {
          background-image:
            linear-gradient(
              rgba(255, 255, 255, 0.045) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.045) 1px,
              transparent 1px
            );
          background-size: 100px 100px;
          mask-image: linear-gradient(
            to right,
            black 0%,
            black 85%,
            transparent 100%
          );
        }

        /* Image wall perspective */
        .cubiloo-wall-perspective {
          perspective: 1400px;
          overflow: visible;
        }

.cubiloo-wall-tilt {
  position: absolute;
  width: 125%;
  height: 140%;
  left: -4%;
  top: -20%;

  /* Tilt to RIGHT */
  transform: rotate(12deg) rotateY(13deg);

  transform-origin: center;
  transform-style: preserve-3d;
}

        .cubiloo-wall {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
          width: 100%;
          height: 100%;
          overflow: hidden;
          transform: translateZ(0);
          -webkit-mask-image: linear-gradient(
            to bottom,
            transparent 0%,
            black 12%,
            black 88%,
            transparent 100%
          );
          mask-image: linear-gradient(
            to bottom,
            transparent 0%,
            black 12%,
            black 88%,
            transparent 100%
          );
        }

        .cubiloo-wall-col {
          position: relative;
          height: 100%;
          overflow: hidden;
          min-width: 0;
        }

        .cubiloo-wall-track {
          display: flex;
          flex-direction: column;
          width: 100%;
          will-change: transform;
        }

        .cubiloo-wall-group {
          display: flex;
          flex-direction: column;
          gap: 18px;
          padding-bottom: 18px;
          flex-shrink: 0;
        }

        .cubiloo-wall-card {
          position: relative;
          width: 100%;
          height: 230px;
          overflow: hidden;
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.14);
          background: #222;
          box-shadow: 0 25px 55px rgba(0, 0, 0, 0.35);
          isolation: isolate;
        }

        .cubiloo-wall-col-1 {
          margin-top: -80px;
          height: calc(100% + 160px);
        }

        .cubiloo-wall-col-2 {
          margin-top: 35px;
          height: calc(100% - 35px);
        }

        .cubiloo-ticker-track {
          animation: cubiloo-ticker 32s linear infinite;
        }

        @keyframes cubiloo-ticker {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

       @media (min-width: 1440px) {
  .cubiloo-wall-tilt {
    width: 145%;
    left: -5%;
  }
}

@media (max-width: 1023px) {
  .cubiloo-wall-tilt {
    width: 110%;
    height: 130%;
    left: -3%;
    top: -15%;

    /* Right tilt on tablets */
    transform: rotate(9deg);
  }
}

@media (max-width: 640px) {
  .cubiloo-wall-tilt {
    width: 125%;
    left: -10%;

    /* Right tilt on mobile */
    transform: rotate(8deg);
  }
}

        @media (max-width: 640px) {
          .cubiloo-wall {
            gap: 10px;
          }

          .cubiloo-wall-group {
            gap: 10px;
            padding-bottom: 10px;
          }

          .cubiloo-wall-card {
            height: 160px;
            border-radius: 10px;
          }

          .cubiloo-wall-card > div:last-child {
            padding: 8px;
          }

          .cubiloo-wall-card span {
            font-size: 9px;
          }

          .cubiloo-wall-card svg {
            width: 12px;
          }

          .cubiloo-wall-tilt {
            width: 125%;
            left: -10%;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .cubiloo-ticker-track {
            animation: none;
          }

          .cubiloo-wall-track {
            will-change: auto;
          }
        }
      `}</style>
        </section>
    );
}
