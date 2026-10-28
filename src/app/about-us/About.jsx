"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FiArrowUpRight,
  FiCheck,
  FiLayers,
  FiTool,
  FiSettings,
  FiShield,
  FiGrid,
  FiUsers,
  FiTarget,
  FiAward,
} from "react-icons/fi";
import ProductShowcase from "@/components/home/ProductShowcase";
import ParallaxCTA from "@/components/home/ParallaxCTA";
import Hardware from "@/components/home/Hardware";

gsap.registerPlugin(ScrollTrigger);

const expertise = [
  {
    number: "01",
    title: "Toilet Cubicles",
    description:
      "Durable and modern toilet cubicle systems designed for commercial, institutional and high-traffic environments.",
    icon: FiGrid,
  },
  {
    number: "02",
    title: "Washroom Partitions",
    description:
      "Functional partition solutions that create clean, private and visually refined washroom spaces.",
    icon: FiLayers,
  },
  {
    number: "03",
    title: "Hardware & Accessories",
    description:
      "Reliable hardware and finishing components selected for performance, durability and long-term use.",
    icon: FiSettings,
  },
  {
    number: "04",
    title: "Installation",
    description:
      "Professional installation with attention to alignment, finishing, functionality and project requirements.",
    icon: FiTool,
  },
];

const industries = [
  "Corporate Offices",
  "Hotels & Hospitality",
  "Hospitals & Healthcare",
  "Malls & Retail",
  "Educational Institutions",
  "Factories & Industrial",
  "Restaurants",
  "Airports & Transport Hubs",
];

const process = [
  {
    number: "01",
    title: "Understand",
    description:
      "We begin by understanding your project, space, usage requirements and design expectations.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Our team helps plan suitable cubicle configurations, materials, finishes and layouts.",
  },
  {
    number: "03",
    title: "Manufacture",
    description:
      "Components are manufactured with a focus on consistency, durability and precise finishing.",
  },
  {
    number: "04",
    title: "Install",
    description:
      "Our installation process brings the planned washroom solution together with a clean final finish.",
  },
];

const values = [
  {
    icon: FiShield,
    title: "Built to Last",
    description:
      "We focus on materials, hardware and construction that support dependable long-term performance.",
  },
  {
    icon: FiTarget,
    title: "Project Focused",
    description:
      "Every project is approached around its specific functional, architectural and installation requirements.",
  },
  {
    icon: FiUsers,
    title: "Collaborative",
    description:
      "We work closely with architects, designers, builders, contractors and construction teams.",
  },
  {
    icon: FiAward,
    title: "Quality Driven",
    description:
      "From material selection to final installation, we pay attention to details that affect the finished space.",
  },
];

export default function AboutPage() {
  const pageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".about-hero-item",
        {
          y: 35,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.12,
          ease: "power3.out",
        }
      );

      gsap.utils.toArray(".about-reveal").forEach((element) => {
        gsap.fromTo(
          element,
          {
            y: 45,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 88%",
              once: true,
            },
          }
        );
      });

      gsap.utils.toArray(".about-line").forEach((line) => {
        gsap.fromTo(
          line,
          {
            scaleX: 0,
            transformOrigin: "left center",
          },
          {
            scaleX: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: line,
              start: "top 90%",
              once: true,
            },
          }
        );
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={pageRef}
      className="bg-[#f7f6f2] text-[#071720] overflow-hidden"
    >
      <section className="relative flex min-h-[85vh] items-center overflow-hidden bg-[#071720] text-white">
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/duro pro toilet cubicles.webp')", }} />

        {/* Main Content */}
        <div className="relative z-10 mx-auto w-full max-w-[1500px] px-5 pb-16 pt-20 sm:px-8 sm:pb-20 lg:px-12 lg:py-20">
          <div className="max-w-7xl flex flex-col items-center">
            {/* Small Heading */}
            <div className="about-hero-item mb-7 flex items-center gap-4">
              <span className="h-px w-12 bg-[#071720]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#071720]">
                About Cubiloo Cubicles
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="about-hero-item text-[#071720] text-5xl font-medium leading-[0.98] tracking-[-0.045em] sm:text-6xl">
              Trusted expertise. {" "}
              <span className="bg-[linear-gradient(90deg,#b8c900_0%,#dddf00_35%,#f0f542_65%,#a9c000_100%)] bg-clip-text text-transparent">
                Built to last.
              </span>
            </h1>

            {/* Buttons */}
            <div className="about-hero-item mt-10 flex flex-wrap gap-4">
              <Link
                href="/products"
                className="group inline-flex items-center gap-3 bg-[linear-gradient(90deg,#b8c900_0%,#dddf00_35%,#f0f542_65%,#a9c000_100%)] px-6 py-4 text-sm font-semibold text-[#071720] transition-all duration-300 hover:bg-[#dddf00]"
              >
                Explore Our Products
                <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>

              <Link
                href="/contact-us"
                className="group inline-flex items-center gap-3 border border-white/40 bg-[#071720] px-6 py-4 text-sm font-medium text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-[#071720]"
              >
                Talk to Our Team
                <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Left - Video */}
            <div className="about-reveal relative">
              <div className="relative">

                {/* Decorative border */}
                <div className="absolute -bottom-5 -left-5 hidden h-full w-full border border-[#dddf00]/40 sm:block" />

                {/* Video Container */}
                <div className="relative aspect-[4/5] overflow-hidden bg-[#071720] sm:aspect-[5/5] lg:aspect-[4/3]">
                  <video
                    src="/megha-systems-about-clean-v2.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    poster="/images/about-cubicles.webp"
                    className="absolute inset-0 h-full w-full object-cover"
                  />

                  {/* Subtle Overlay */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#071720]/55 via-transparent to-transparent" />

                  {/* Video Bottom Label */}
                  <div className="pointer-events-none absolute bottom-6 left-6 right-6 flex items-end justify-between sm:bottom-8 sm:left-8 sm:right-8">
                    <div>
                      <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#dddf00]">
                        Cubiloo Cubicles
                      </p>
                      <h3 className="text-xl font-light text-white sm:text-2xl">
                        Crafted for Every Space
                      </h3>
                    </div>

                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-white/10 backdrop-blur-md">
                      <span className="h-2 w-2 animate-pulse rounded-full bg-[#dddf00]" />
                    </div>
                  </div>
                </div>

                {/* Decorative Gold Accent */}
                <div className="absolute -right-3 -top-3 h-20 w-20 border-r-2 border-t-2 border-[#dddf00] sm:-right-5 sm:-top-5" />
              </div>
            </div>

            {/* Right - Content */}
            <div className="about-reveal">

              {/* Eyebrow */}
              <div className="mb-4 flex items-center gap-4">
                <span className="text-xs font-bold tracking-[0.2em] text-[#dddf00]">
                  01
                </span>
                <span className="h-px w-10 bg-[#dddf00]" />
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#071720]/90">
                  Who We Are
                </span>
              </div>

              {/* Heading */}
              <h2 className="text-4xl font-light leading-[1.08] tracking-[-0.04em] text-[#071720] sm:text-5xl lg:text-6xl">
                Washroom spaces
                <br />
                <span className="bg-[linear-gradient(90deg,#b8c900_0%,#dddf00_35%,#f0f542_65%,#a9c000_100%)] bg-clip-text text-transparent">
                  made better.
                </span>
              </h2>

              {/* Description */}
              <p className="mt-8 text-lg font-light leading-8 text-[#071720] sm:text-xl sm:leading-9">
                <strong className="font-semibold">
                  Cubiloo Cubicles
                </strong>{" "}
                is a trusted toilet cubicle manufacturer and supplier in
                India, specializing in the design, manufacturing, and
                installation of high-quality toilet cubicles and modern
                washroom partition solutions.
              </p>

              <p className="mt-6 leading-8 text-[#071720]/65">
                With years of industry experience, we serve clients
                across major cities in India, delivering solutions that
                combine durability, functionality, aesthetics, and
                long-term value.
              </p>

              {/* Bottom Highlight */}
              <div className="mt-9 flex items-start gap-4 border-l-2 border-[#dddf00] bg-[#f8f6f1] px-5 py-5">
                <div>
                  <p className="text-sm font-semibold text-[#071720]">
                    Quality. Innovation. Reliability.
                  </p>
                  <p className="mt-1 text-sm leading-6 text-[#071720]/60">
                    Creating durable and thoughtfully designed
                    washroom environments for modern spaces.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-[#0A0A0D] text-[#F4F4EF] py-12 lg:py-15">
        <div className="max-w-[1500px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            {/* Text */}
            <div className="about-reveal">
              <div className="flex items-center gap-4 mb-4">
                <span className="w-10 h-px bg-[#dddf00]" />
                <span className="text-[11px] tracking-[0.25em] uppercase text-[#dddf00] font-semibold">
                  Our Approach
                </span>
              </div>

              <h2 className="max-w-[700px] text-[38px] font-medium leading-[1] tracking-[-0.02em] text-[#F4F4EF] sm:text-[42px]">
                More than a partition.
                <br />
                <span className="bg-[linear-gradient(90deg,#b8c900_0%,#dddf00_35%,#f0f542_65%,#a9c000_100%)] bg-clip-text text-transparent">
                  A complete washroom solution.
                </span>
              </h2>

              <p className="mt-8 text-[#F4F4EF]/90 leading-8">
                We believe a washroom should perform as well as it looks.
                Every element has a role — from the panel and hardware to the
                layout, privacy and final installation.
              </p>

              <p className="mt-2 text-[#F4F4EF]/90 leading-8">
                Our approach brings these details together into a coordinated
                solution designed for the demands of real-world commercial and
                institutional spaces.
              </p>

              <div className="mt-5 grid grid-cols-2 gap-6">
                <div className="border-t border-white/10 pt-5">
                  <p className="text-3xl font-light text-[#dddf00]">01</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.15em] text-[#F4F4EF]/60">
                    Design Focus
                  </p>
                </div>

                <div className="border-t border-white/10 pt-5">
                  <p className="text-3xl font-light text-[#dddf00]">02</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.15em] text-[#F4F4EF]/60">
                    Built for Performance
                  </p>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="about-reveal relative">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src="/Maxi Pro.webp"
                  alt="Cubiloo Cubicles premium toilet cubicle"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 70vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#071720]/45 via-transparent to-transparent" />

                <div className="absolute bottom-5 left-5 sm:bottom-7 sm:left-7">
                  <div className="bg-[#071720]/90 backdrop-blur-sm px-5 py-4 border-l-2 border-[#dddf00]">
                    <p className="text-[10px] tracking-[0.2em] uppercase text-[#dddf00]">
                      Cubiloo Cubicles
                    </p>
                    <p className="mt-1 text-sm text-white/80">
                      Designed for modern spaces
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative frame */}
              <div className="absolute -bottom-4 -right-4 w-28 h-28 border-r border-b border-[#dddf00]/60 pointer-events-none" />
            </div>
          </div>
        </div>
      </section>
      <ProductShowcase />

      <section className="py-12 lg:py-15 bg-white">
        <div className="max-w-[1500px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="about-reveal flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-8">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-[#dddf00] text-xs font-bold tracking-[0.2em]">
                  02
                </span>
                <span className="w-10 h-px bg-[#dddf00]" />
                <span className="text-xs tracking-[0.22em] uppercase text-[#071720]/50 font-semibold">
                  Our Expertise
                </span>
              </div>

              <h2 className="max-w-[700px] text-[38px] font-medium leading-[1.05] tracking-[-0.04em] text-[#071720] sm:text-[48px] lg:text-[62px]">
                What we
                <br />

                <span className="bg-[linear-gradient(90deg,#b8c900_0%,#dddf00_35%,#f0f542_65%,#a9c000_100%)] bg-clip-text text-transparent">
                  specialize in.
                </span>
              </h2>
            </div>

            <p className="max-w-md text-[#071720]/90 leading-7">
              From product selection to installation, Cubiloo Cubicles provides
              coordinated solutions for modern washroom environments.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-[#071720]/50">
            {expertise.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.number}
                  className="about-reveal group relative border-r border-b border-[#071720]/50 p-7 lg:p-8 min-h-[300px] hover:bg-[#071720] hover:text-white transition-all duration-500"
                >
                  <div className="flex justify-between items-start">
                    <span className="text-xs text-[#dddf00] tracking-[0.2em]">
                      {item.number}
                    </span>

                    <Icon className="text-2xl text-[#071720]/90 group-hover:text-[#dddf00] transition-colors" />
                  </div>

                  <div className="absolute bottom-7 left-7 right-7 lg:left-8 lg:right-8">
                    <h3 className="text-2xl font-light">{item.title}</h3>

                    <p className="mt-4 text-sm leading-6 text-[#071720]/55 group-hover:text-white/50 transition-colors">
                      {item.description}
                    </p>

                    <div className="mt-6 w-8 h-px bg-[#dddf00] group-hover:w-16 transition-all duration-500" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-15 bg-white">
        <div className="max-w-[1500px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="about-reveal text-center max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-2">
              <span className="w-10 h-px bg-[#dddf00]" />
              <span className="text-[11px] tracking-[0.25em] uppercase text-[#dddf00] font-semibold">
                Where We Work
              </span>
              <span className="w-10 h-px bg-[#dddf00]" />
            </div>

            <h2 className="max-w-[700px] text-[38px] font-medium leading-[1.05] tracking-[-0.04em] text-[#071720] sm:text-[48px] lg:text-[62px]">
              Solutions for
              <br />

              <span className="bg-[linear-gradient(90deg,#b8c900_0%,#dddf00_35%,#f0f542_65%,#a9c000_100%)] bg-clip-text text-transparent">
                every environment.
              </span>
            </h2>

            <p className="mt-4 text-[#071720]/90 leading-7">
              Our washroom solutions are designed to adapt to a wide range of
              commercial, institutional, hospitality and high-traffic
              environments.
            </p>
          </div>

          <div className="about-reveal mt-16 grid grid-cols-2 md:grid-cols-4 border-t border-l border-[#071720]/50">
            {industries.map((industry, index) => (
              <div
                key={industry}
                className="group border-r border-b border-[#071720]/50 p-6 sm:p-8 min-h-[130px] flex flex-col justify-between hover:bg-[#071720] transition-colors duration-400"
              >
                <span className="text-[12px] text-[#dddf00] tracking-[0.2em]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="flex items-end justify-between gap-4 mt-5">
                  <span className="text-sm sm:text-base font-medium group-hover:text-white transition-colors">
                    {industry}
                  </span>

                  <FiArrowUpRight className="text-[#071720]/60 group-hover:text-[#dddf00] transition-colors shrink-0" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ParallaxCTA />

      <section className="py-12 lg:py-15 bg-[#f7f6f2]">
        <div className="max-w-[1500px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-[0.75fr_1.25fr] gap-16 lg:gap-24">
            <div className="about-reveal">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-[#dddf00] text-xs font-bold tracking-[0.2em]">
                  03
                </span>
                <span className="w-10 h-px bg-[#dddf00]" />
                <span className="text-xs tracking-[0.22em] uppercase text-[#071720]/80 font-semibold">
                  Why Cubiloo Cubicles
                </span>
              </div>

              <h2 className="max-w-[700px] text-[38px] font-medium leading-[1.05] tracking-[-0.04em] text-[#071720] sm:text-[48px] lg:text-[62px]">
                The details
                <br />

                <span className="bg-[linear-gradient(90deg,#b8c900_0%,#dddf00_35%,#f0f542_65%,#a9c000_100%)] bg-clip-text text-transparent">
                  matter.
                </span>
              </h2>

              <p className="mt-7 text-[#071720]/90 leading-7 max-w-md">
                Good washroom solutions are not only about appearance. They
                need to work reliably, fit the project and continue performing
                long after installation.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-x-10 gap-y-12">
              {values.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.title} className="about-reveal">
                    <div className="w-12 h-12 border border-[#dddf00]/80 flex items-center justify-center">
                      <Icon className="text-xl text-[#dddf00]" />
                    </div>

                    <h3 className="mt-5 text-xl font-medium">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-[#071720]/80">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <Hardware />

      <section className="py-12 lg:py-15 bg-[#f5f3ed] text-white">
        <div className="max-w-[1500px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="about-reveal grid lg:grid-cols-[0.7fr_1.3fr] gap-14 lg:gap-24">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-[#dddf00] text-xs font-bold tracking-[0.2em]">
                  04
                </span>
                <span className="w-10 h-px bg-[#dddf00]" />
                <span className="text-xs tracking-[0.22em] uppercase text-white/40 font-semibold">
                  Our Process
                </span>
              </div>

              <h2 className="max-w-[700px] text-[38px] font-medium leading-[1.05] tracking-[-0.04em] text-[#071720] sm:text-[48px] lg:text-[62px]">
                From idea
                <br />

                <span className="bg-[linear-gradient(90deg,#b8c900_0%,#dddf00_35%,#f0f542_65%,#a9c000_100%)] bg-clip-text text-transparent">
                  to installation.
                </span>
              </h2>

              <p className="mt-7 text-[#071720]/90 leading-7 max-w-md">
                A straightforward process designed to keep your project
                moving from initial requirements through final installation.
              </p>

              <div className="mt-8 rounded-2xl">
                <img
                  src="/Cielo.webp"
                  alt="image"
                  className="object-cover rounded-2xl"
                />
              </div>
            </div>

            <div>
              {process.map((item, index) => (
                <div
                  key={item.number}
                  className="group border-t border-white/10 py-5 grid grid-cols-[60px_1fr] sm:grid-cols-[90px_1fr] gap-5"
                >
                  <span className="text-[#dddf00] text-sm">
                    {item.number}
                  </span>

                  <div>
                    <div className="flex items-center justify-between gap-5">
                      <h3 className="text-2xl sm:text-3xl font-light text-[#071720]">
                        {item.title}
                      </h3>

                      <FiArrowUpRight className="text-[#071720]/50 group-hover:text-[#dddf00] transition-colors" />
                    </div>

                    <p className="mt-4 max-w-xl text-sm leading-7 text-[#071720]/60">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}

              <div className="border-t border-white/10" />
            </div>
          </div>
        </div>
      </section>

      <section className="relative pt-10 sm:pt-12 lg:pt-14 pb-70 overflow-hidden bg-white">
        <div className="absolute inset-0 opacity-[0.035]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(#dddf00 1px, transparent 1px), linear-gradient(90deg, #dddf00 1px, transparent 1px)",
              backgroundSize: "45px 45px",
            }}
          />
        </div>

        <div className="relative max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-12 text-center">
          <div className="about-reveal">
            <span className="inline-flex items-center gap-3 text-[#dddf00] text-[11px] tracking-[0.25em] uppercase font-semibold">
              <span className="w-8 h-px bg-[#dddf00]" />
              Performance & Design
              <span className="w-8 h-px bg-[#dddf00]" />
            </span>

            <h2 className="mt-5 text-[38px] font-medium leading-[1.05] tracking-[-0.04em] text-[#071720] sm:text-[48px] lg:text-[62px]">
              Practical performance.
              <br />

              <span className="bg-[linear-gradient(90deg,#b8c900_0%,#dddf00_35%,#f0f542_65%,#a9c000_100%)] bg-clip-text text-transparent">
                Architectural aesthetics.
              </span>
            </h2>

            <p className="mt-8 max-w-2xl mx-auto text-[#071720]/90 leading-8">
              We bring together practical functionality and contemporary
              design to create washroom spaces that feel considered,
              professional and built for everyday use.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}