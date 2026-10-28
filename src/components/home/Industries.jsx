"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatePresence, motion } from "framer-motion";
import { FiActivity, FiArrowUpRight, FiBookOpen, FiBriefcase, FiChevronLeft, FiChevronRight, FiCoffee, FiHome, FiMapPin, FiSettings, FiShield, FiShoppingBag, FiStar, FiTruck } from "react-icons/fi";
import { BsFillAirplaneEnginesFill } from "react-icons/bs";


gsap.registerPlugin(ScrollTrigger);

const INDUSTRIES = [
  {
    id: 1,
    number: "01",
    title: "Corporate",
    subtitle: "Offices & Workspaces",
    description:
      "Premium restroom partition solutions designed for modern corporate offices, commercial buildings and professional workspaces.",
    icon: FiBriefcase,
    project: {
      name: "Business Park",
      location: "Gurgaon",
      image: "/WhatsApp Image 2026-09-14 at 5.10.25 PM.jpeg",
    },
  },
  {
    id: 2,
    number: "02",
    title: "Stadium",
    subtitle: "Sports & Public Spaces",
    description:
      "Durable, hygienic and high-performance restroom solutions designed to handle heavy footfall in sports and public environments.",
    icon: FiActivity,
    project: {
      name: "Indira Gandhi Stadium",
      location: "Delhi",
      image: "/ChatGPT Image Sep 14, 2026, 05_54_13 PM.png",
    },
  },
  {
    id: 3,
    number: "03",
    title: "Hotels",
    subtitle: "Hospitality",
    description:
      "Elegant cubicle systems that combine premium aesthetics, privacy and long-term performance for hospitality spaces.",
    icon: FiHome,
    project: {
      name: "Hotel NH8",
      location: "Jaipur, India",
      image: "/ChatGPT Image Sep 14, 2026, 05_21_14 PM.png",
    },
  },
  {
    id: 4,
    number: "04",
    title: "Malls & Retail",
    subtitle: "High-Traffic Spaces",
    description:
      "Robust restroom systems engineered for high visitor volumes while maintaining a clean and premium appearance.",
    icon: FiShoppingBag,
    project: {
      name: "Pacific Mall",
      location: "Jasola, Delhi",
      image: "/ChatGPT Image Sep 14, 2026, 05_23_25 PM.png",
    },
  },
  {
    id: 5,
    number: "05",
    title: "Factories",
    subtitle: "Industrial Facilities",
    description:
      "Heavy-duty and practical restroom partition systems built for industrial and high-usage environments.",
    icon: FiTruck,
    project: {
      name: "Yamaha Motors",
      location: "Delhi",
      image: "/ChatGPT Image Sep 14, 2026, 05_29_02 PM.png",
    },
  },
  {
    id: 6,
    number: "06",
    title: "Education",
    subtitle: "Schools & Institutions",
    description:
      "Safe, durable and practical cubicle solutions suitable for schools, colleges and institutional facilities.",
    icon: FiBookOpen,
    project: {
      name: "St. Xaviers School",
      location: "Noida",
      image: "/ChatGPT Image Sep 14, 2026, 05_32_01 PM.png",
    },
  },
  {
    id: 7,
    number: "07",
    title: "Restaurants",
    subtitle: "Food & Dining",
    description:
      "Contemporary restroom solutions designed to complement restaurants, food courts, cafes and dining spaces.",
    icon: FiCoffee,
    project: {
      name: "Great Khali Dhaba",
      location: "Haryana",
      image: "/ChatGPT Image Sep 14, 2026, 05_32_46 PM.png",
    },
  },
  {
    id: 8,
    number: "08",
    title: "Airports",
    subtitle: "Transport Hubs",
    description:
      "High-performance restroom partition systems designed for busy public and transportation environments.",
    icon: BsFillAirplaneEnginesFill,
    project: {
      name: "Rajeev Gandhi Bhawan",
      location: "Delhi Airport",
      image: "/ChatGPT Image Sep 14, 2026, 05_52_14 PM.png",
    },
  },
];

const BENEFITS = [
  { icon: FiShield, title: "Durable Solutions", detail: "Built for high-traffic environments" },
  { icon: FiSettings, title: "Custom Engineering", detail: "Tailored to industry requirements" },
  { icon: FiStar, title: "Trusted Across India", detail: "Reliable project execution" },
];

export default function IndustriesWeServe() {
  const sectionRef = useRef(null);
  const [active, setActive] = useState(0);
  const current = INDUSTRIES[active];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const entrance = gsap.timeline({
        defaults: { ease: "power3.out" },
        scrollTrigger: { trigger: sectionRef.current, start: "top 78%", once: true },
      });

      entrance
        .fromTo(".industries-eyebrow", { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.55 })
        .fromTo(".industries-title", { y: 28, opacity: 0 }, { y: 0, opacity: 1, duration: 0.75 }, "-=0.3")
        .fromTo(".industries-benefit", { x: -18, opacity: 0 }, { x: 0, opacity: 1, duration: 0.55, stagger: 0.12 }, "-=0.35")
        .fromTo(".industries-showcase", { x: 28, opacity: 0 }, { x: 0, opacity: 1, duration: 0.8 }, "-=0.45")
        .fromTo(".industry-tile", { y: 22, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, stagger: 0.07 }, "-=0.35");

      gsap.to(".industries-blueprint", {
        y: -24,
        ease: "none",
        scrollTrigger: { trigger: sectionRef.current, start: "top bottom", end: "bottom top", scrub: 1.2 },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const changeIndustry = (index) => {
    setActive((index + INDUSTRIES.length) % INDUSTRIES.length);
  };

  return (
    <section ref={sectionRef} className="relative isolate overflow-hidden bg-[#f5f3ed] py-10 text-[#101820] sm:py-12 lg:py-15">
      {/* Warm architectural backdrop */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="industries-blueprint absolute -right-24 top-0 h-[620px] w-[650px] opacity-[0.055]">
          <svg viewBox="0 0 650 620" className="h-full w-full" fill="none">
            <path d="M30 570V170L325 35L620 170V570M85 570V205L325 95L565 205V570M150 570V245H500V570M30 330H620M30 445H620M325 35V570" stroke="#12283a" strokeWidth="1" />
            <path d="M85 205L150 245M565 205L500 245M150 330L500 445M500 330L150 445" stroke="#dddf00" strokeWidth="1" />
          </svg>
        </div>
        <div className="absolute inset-x-0 top-0 h-px bg-[#dddf00]/70" />
        <div className="absolute -left-32 top-32 h-96 w-96 rounded-full bg-white/70 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[1600px] px-4 sm:px-7 lg:px-11">
        {/* Industry selector strip */}
        <div className="mb-5 grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3 xl:grid-cols-8">
          {INDUSTRIES.map((industry, index) => {
            const Icon = industry.icon;
            const isActive = active === index;
            return (
              <button
                key={industry.id}
                type="button"
                onClick={() => changeIndustry(index)}
                aria-pressed={isActive}
                className={`industry-tile group relative flex min-h-[190px] flex-col overflow-hidden rounded-xl border text-left transition-all duration-300 sm:min-h-[120px] ${isActive ? "border-[#d6a74f] bg-[#071720] text-white shadow-[0_10px_30px_rgba(7,23,32,0.15)]" : "border-[#1a2730]/[0.08] bg-white/35 text-[#101820] hover:-translate-y-1 hover:border-[#d6a74f]/70 hover:bg-white/70"}`}
              >
                <div className="flex flex-1 flex-col items-center px-2 pb-3 pt-3 text-center sm:px-3 sm:pt-4">
                  <span className={`self-start text-[10px] font-medium ${isActive ? "text-[#dddf00]" : "text-[#4d5357]"}`}>{industry.number}</span>
                  <Icon size={25} strokeWidth={1.35} className={`mt-2 ${isActive ? "text-[#dddf00]" : "text-[#101820]"}`} />
                  <span className="mt-3 text-xs font-semibold sm:text-sm">{industry.title}</span>
                  <span className={`mt-1 line-clamp-2 text-[8px] uppercase leading-4 tracking-[0.08em] sm:text-[9px] ${isActive ? "text-white/60" : "text-[#65696b]"}`}>{industry.subtitle}</span>
                </div>
                {/* <div className="relative h-[76px] w-full overflow-hidden sm:h-[88px]">
                  <Image src={industry.project.image} alt={`${industry.title} industry project`} fill sizes="(max-width: 640px) 50vw, (max-width: 1280px) 25vw, 13vw" className={`object-cover transition duration-700 group-hover:scale-105 ${isActive ? "opacity-100" : "opacity-75 grayscale-[15%] group-hover:opacity-100"}`} />
                  <div className={`absolute inset-0 ${isActive ? "bg-[#071720]/5" : "bg-[#f5f1e9]/10"}`} />
                </div> */}
                {isActive && <motion.span layoutId="industry-active-border" className="absolute inset-0 rounded-xl ring-1 ring-inset ring-[#d6a74f]" />}
              </button>
            );
          })}
        </div>

        <div className="grid gap-8 xl:grid-cols-[0.78fr_1.55fr] xl:items-stretch xl:gap-10">
          {/* Editorial introduction */}
          <div className="flex flex-col justify-center py-2 xl:py-6">
            <div className="industries-eyebrow mb-5 flex items-center gap-3">
              <span className="h-[2px] w-14 bg-[#dddf00]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#dddf00]">Industries we serve</span>
            </div>

            <h2 className="max-w-[700px] text-[38px] font-medium leading-[1.05] tracking-[-0.04em] text-[#071720] sm:text-[48px] lg:text-[62px]">
              Industries
              <br />

              <span className="bg-[linear-gradient(90deg,#b8c900_0%,#dddf00_35%,#f0f542_65%,#a9c000_100%)] bg-clip-text text-transparent">
                We Serve
              </span>
            </h2>

            {/* <p className="mt-7 max-w-[470px] text-sm leading-7 text-[#5c6062] sm:text-base">
              From corporate offices to airports, we deliver premium restroom partition solutions across diverse industries, combining quality, durability and modern design.
            </p> */}

            <div className="mt-8 grid gap-4 sm:grid-cols-3 xl:grid-cols-1">
              {BENEFITS.map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <div key={benefit.title} className="industries-benefit flex items-center gap-3.5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#101820]/15 bg-white/40 text-[#101820]">
                      <Icon size={21} strokeWidth={1.45} />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-[#101820]">{benefit.title}</h3>
                      <p className="mt-1 text-xs leading-5 text-[#6b6d6d]">{benefit.detail}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="industries-showcase h-fit flex min-w-0 flex-col overflow-hidden rounded-[28px] bg-[#071720] shadow-[0_28px_80px_rgba(20,30,35,0.16)]">

            {/* TOP: Full-width project image */}
            <div className="relative h-[300px] w-full overflow-hidden bg-[#d5d0c6] sm:h-[400px] lg:h-[300px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, scale: 1.035 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.015 }}
                  transition={{
                    duration: 0.55,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute inset-0 h-full"
                >
                  <Image
                    src={current.project.image}
                    alt={`${current.project.name} - ${current.project.location}`}
                    fill
                    priority={active === 0}
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#071720]/70 via-transparent to-[#071720]/10" />

              {/* Featured project badge */}
              <div className="absolute left-5 top-5 border border-white/40 bg-[#071720]/35 px-3 py-2 backdrop-blur-md sm:left-7 sm:top-7">
                <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-white">
                  Featured project
                </span>
              </div>

              {/* Project location */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id + "-location"}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-5 left-5 flex max-w-[calc(100%-140px)] items-center gap-3 rounded-xl bg-black/55 px-4 py-3 text-white backdrop-blur-md sm:bottom-2 sm:left-2 sm:px-5"
                >
                  <FiMapPin
                    className="shrink-0 text-[#dddf00]"
                    size={21}
                  />
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold sm:text-base">
                      {current.project.name}
                    </p>
                    <p className="mt-0.5 text-xs text-white/70">
                      {current.project.location}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation arrows */}
              <div className="absolute bottom-5 right-5 flex gap-2 sm:bottom-2 sm:right-2">
                <button
                  type="button"
                  aria-label="Previous industry"
                  onClick={() => changeIndustry(active - 1)}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#071720] transition hover:bg-[#dddf00] sm:h-11 sm:w-11"
                >
                  <FiChevronLeft size={21} />
                </button>

                <button
                  type="button"
                  aria-label="Next industry"
                  onClick={() => changeIndustry(active + 1)}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#071720] text-white ring-1 ring-white/20 transition hover:bg-[#dddf00] sm:h-11 sm:w-11"
                >
                  <FiChevronRight size={21} />
                </button>
              </div>
            </div>

            {/* BOTTOM: Industry information */}
            <div className="relative min-w-0 overflow-hidden px-5 py-7 text-white sm:px-8 sm:py-9 lg:px-10 lg:py-6">

              {/* Decorative background */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-[#d6a74f]/20"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full border border-[#d6a74f]/15"
              />

              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id + "-details"}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35 }}
                  className="relative z-10 flex items-center justify-between"
                >
                  {/* Industry number */}
                  {/* <div className="flex items-center gap-2 text-sm">
                    <span className="font-semibold text-[#f1c579]">
                      {current.number}
                    </span>
                    <span className="text-white/40">
                      / {String(INDUSTRIES.length).padStart(2, "0")}
                    </span>
                  </div> */}

                  {/* Industry heading */}
                  <div>
                    <h3 className="font-serif text-3xl leading-tight tracking-[-0.04em] sm:text-4xl lg:text-[42px]">
                      {current.title}
                    </h3>

                    <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.19em] text-white/65 sm:text-xs">
                      {current.subtitle}
                    </p>
                  </div>

                  {/* <div className="mt-5 h-[2px] w-14 bg-[#f1c579]" /> */}

                  {/* Description */}
                  {/* <p className="mt-5 max-w-[700px] text-sm leading-7 text-white/75">
                    {current.description}
                  </p> */}

                  {/* Features */}
                  {/* <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {[
                      "Modern & elegant design",
                      "Durable for high usage",
                      "Customised solutions",
                      "Professional installation",
                    ].map((point) => (
                      <li
                        key={point}
                        className="flex items-center gap-2.5 text-xs text-white/85 sm:text-sm"
                      >
                        <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#dddf00] text-[#071720]">
                          ✓
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul> */}

                  {/* CTA */}
                  <div className="">
                    <Link
                      href="/contact"
                      className="group inline-flex min-h-12 items-center justify-between gap-8 bg-[#dddf00] px-5 text-[10px] font-bold uppercase tracking-[0.13em] text-[#101820] transition hover:bg-white sm:text-xs"
                    >
                      View project
                      <FiArrowUpRight
                        size={17}
                        className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
