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
      className="bg-[#f7f6f2] text-[#071a3d] overflow-hidden mt-20"
    >
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative min-h-[78vh] bg-[#071a3d] text-white flex items-end overflow-hidden">
        {/* Architectural grid */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Gold architectural line */}
        <div className="absolute top-0 right-[15%] h-full w-px bg-[#c99618]/30" />
        <div className="absolute top-[22%] right-[15%] w-[25%] h-px bg-[#c99618]/40" />

        {/* Decorative circle */}
        <div className="absolute -right-40 -top-40 w-[500px] h-[500px] rounded-full border border-[#c99618]/20" />
        <div className="absolute -right-20 -top-20 w-[340px] h-[340px] rounded-full border border-white/10" />

        <div className="relative z-10 w-full max-w-[1500px] mx-auto px-5 sm:px-8 lg:px-12 pt-32 pb-20 lg:pb-28">
          <div className="max-w-5xl">
            <div className="about-hero-item flex items-center gap-4 mb-7">
              <span className="w-12 h-px bg-[#c99618]" />
              <span className="text-[11px] tracking-[0.28em] uppercase text-[#c99618] font-semibold">
                About Megha Systems
              </span>
            </div>

            <h1 className="about-hero-item text-5xl sm:text-6xl lg:text-8xl font-light leading-[0.92] tracking-[-0.045em]">
              Trusted expertise.
              <br />
              <span className="text-[#c99618]">Built to last.</span>
            </h1>

            <p className="about-hero-item mt-8 max-w-2xl text-white/65 text-base sm:text-lg leading-8">
              Toilet cubicles and modern washroom partition solutions
              designed around durability, functionality, aesthetics and
              long-term performance.
            </p>

            <div className="about-hero-item mt-10 flex flex-wrap gap-4">
              <Link
                href="/products"
                className="group inline-flex items-center gap-3 bg-[#c99618] text-[#071a3d] px-6 py-4 text-sm font-semibold"
              >
                Explore Our Products
                <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-3 border border-white/20 px-6 py-4 text-sm font-medium hover:bg-white hover:text-[#071a3d] transition-colors"
              >
                Talk to Our Team
                <FiArrowUpRight />
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 right-8 lg:right-12 hidden sm:flex items-center gap-3 text-white/40 text-[10px] tracking-[0.2em] uppercase">
          <span>Who we are</span>
          <span className="w-10 h-px bg-white/20" />
        </div>
      </section>

      {/* =========================================================
          WHO WE ARE
      ========================================================= */}
      <section className="relative py-24 lg:py-32">
        <div className="max-w-[1500px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-14 lg:gap-24 items-center">
            {/* Left */}
            <div className="about-reveal">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-[#c99618] text-xs font-bold tracking-[0.2em]">
                  01
                </span>
                <span className="w-10 h-px bg-[#c99618]" />
                <span className="text-xs tracking-[0.22em] uppercase text-[#071a3d]/50 font-semibold">
                  Who We Are
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light leading-[1] tracking-[-0.04em]">
                Washroom spaces
                <br />
                <span className="text-[#c99618]">made better.</span>
              </h2>

              <div className="about-line mt-8 h-px bg-[#071a3d]/15 w-32" />
            </div>

            {/* Right */}
            <div className="about-reveal">
              <p className="text-xl sm:text-2xl leading-9 text-[#071a3d] font-light">
                Megha Systems is a trusted toilet cubicle manufacturer and
                supplier in India, specializing in the design, manufacturing
                and installation of high-quality toilet cubicles and modern
                washroom partition solutions.
              </p>

              <p className="mt-7 text-[#071a3d]/60 leading-8">
                With years of industry experience, we serve clients across
                major cities in India, delivering solutions that combine
                durability, functionality, aesthetics and value.
              </p>

              <p className="mt-5 text-[#071a3d]/60 leading-8">
                We work closely with architects, interior designers, builders,
                contractors and construction companies to understand the
                specific requirements of every project.
              </p>

              <p className="mt-5 text-[#071a3d]/60 leading-8">
                From selecting the right materials and finishes to planning
                layouts and installation, our team focuses on delivering
                washroom solutions that meet both practical and design
                expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          IMAGE / STORY
      ========================================================= */}
      <section className="relative bg-[#071a3d] text-white py-20 lg:py-28">
        <div className="max-w-[1500px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-20 items-center">
            {/* Image */}
            <div className="about-reveal relative">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src="/Maxi Pro.webp"
                  alt="Megha Systems premium toilet cubicle"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 70vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#071a3d]/45 via-transparent to-transparent" />

                <div className="absolute bottom-5 left-5 sm:bottom-7 sm:left-7">
                  <div className="bg-[#071a3d]/90 backdrop-blur-sm px-5 py-4 border-l-2 border-[#c99618]">
                    <p className="text-[10px] tracking-[0.2em] uppercase text-[#c99618]">
                      Megha Systems
                    </p>
                    <p className="mt-1 text-sm text-white/80">
                      Designed for modern spaces
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative frame */}
              <div className="absolute -bottom-4 -right-4 w-28 h-28 border-r border-b border-[#c99618]/60 pointer-events-none" />
            </div>

            {/* Text */}
            <div className="about-reveal">
              <div className="flex items-center gap-4 mb-6">
                <span className="w-10 h-px bg-[#c99618]" />
                <span className="text-[11px] tracking-[0.25em] uppercase text-[#c99618] font-semibold">
                  Our Approach
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl font-light leading-tight tracking-[-0.04em]">
                More than a partition.
                <br />
                <span className="text-white/40">
                  A complete washroom solution.
                </span>
              </h2>

              <p className="mt-7 text-white/55 leading-8">
                We believe a washroom should perform as well as it looks.
                Every element has a role — from the panel and hardware to the
                layout, privacy and final installation.
              </p>

              <p className="mt-5 text-white/55 leading-8">
                Our approach brings these details together into a coordinated
                solution designed for the demands of real-world commercial and
                institutional spaces.
              </p>

              <div className="mt-9 grid grid-cols-2 gap-6">
                <div className="border-t border-white/10 pt-5">
                  <p className="text-3xl font-light text-[#c99618]">01</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.15em] text-white/45">
                    Design Focus
                  </p>
                </div>

                <div className="border-t border-white/10 pt-5">
                  <p className="text-3xl font-light text-[#c99618]">02</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.15em] text-white/45">
                    Built for Performance
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          EXPERTISE
      ========================================================= */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-[1500px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="about-reveal flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-[#c99618] text-xs font-bold tracking-[0.2em]">
                  02
                </span>
                <span className="w-10 h-px bg-[#c99618]" />
                <span className="text-xs tracking-[0.22em] uppercase text-[#071a3d]/50 font-semibold">
                  Our Expertise
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-[-0.04em]">
                What we
                <br />
                <span className="text-[#c99618]">specialize in.</span>
              </h2>
            </div>

            <p className="max-w-md text-[#071a3d]/55 leading-7">
              From product selection to installation, Megha Systems provides
              coordinated solutions for modern washroom environments.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-[#071a3d]/10">
            {expertise.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.number}
                  className="about-reveal group relative border-r border-b border-[#071a3d]/10 p-7 lg:p-8 min-h-[300px] hover:bg-[#071a3d] hover:text-white transition-all duration-500"
                >
                  <div className="flex justify-between items-start">
                    <span className="text-xs text-[#c99618] tracking-[0.2em]">
                      {item.number}
                    </span>

                    <Icon className="text-2xl text-[#071a3d]/30 group-hover:text-[#c99618] transition-colors" />
                  </div>

                  <div className="absolute bottom-7 left-7 right-7 lg:left-8 lg:right-8">
                    <h3 className="text-2xl font-light">{item.title}</h3>

                    <p className="mt-4 text-sm leading-6 text-[#071a3d]/55 group-hover:text-white/50 transition-colors">
                      {item.description}
                    </p>

                    <div className="mt-6 w-8 h-px bg-[#c99618] group-hover:w-16 transition-all duration-500" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          VALUES
      ========================================================= */}
      <section className="py-24 lg:py-32 bg-[#f7f6f2]">
        <div className="max-w-[1500px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-[0.75fr_1.25fr] gap-16 lg:gap-24">
            <div className="about-reveal">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-[#c99618] text-xs font-bold tracking-[0.2em]">
                  03
                </span>
                <span className="w-10 h-px bg-[#c99618]" />
                <span className="text-xs tracking-[0.22em] uppercase text-[#071a3d]/50 font-semibold">
                  Why Megha Systems
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl font-light tracking-[-0.04em] leading-tight">
                The details
                <br />
                <span className="text-[#c99618]">matter.</span>
              </h2>

              <p className="mt-7 text-[#071a3d]/55 leading-7 max-w-md">
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
                    <div className="w-12 h-12 border border-[#071a3d]/10 flex items-center justify-center">
                      <Icon className="text-xl text-[#c99618]" />
                    </div>

                    <h3 className="mt-5 text-xl font-medium">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-[#071a3d]/55">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          INDUSTRIES
      ========================================================= */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-[1500px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="about-reveal text-center max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="w-10 h-px bg-[#c99618]" />
              <span className="text-[11px] tracking-[0.25em] uppercase text-[#c99618] font-semibold">
                Where We Work
              </span>
              <span className="w-10 h-px bg-[#c99618]" />
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-[-0.04em]">
              Solutions for
              <br />
              <span className="text-[#c99618]">every environment.</span>
            </h2>

            <p className="mt-6 text-[#071a3d]/55 leading-7">
              Our washroom solutions are designed to adapt to a wide range of
              commercial, institutional, hospitality and high-traffic
              environments.
            </p>
          </div>

          <div className="about-reveal mt-16 grid grid-cols-2 md:grid-cols-4 border-t border-l border-[#071a3d]/10">
            {industries.map((industry, index) => (
              <div
                key={industry}
                className="group border-r border-b border-[#071a3d]/10 p-6 sm:p-8 min-h-[130px] flex flex-col justify-between hover:bg-[#071a3d] transition-colors duration-400"
              >
                <span className="text-[10px] text-[#c99618] tracking-[0.2em]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="flex items-end justify-between gap-4 mt-8">
                  <span className="text-sm sm:text-base font-medium group-hover:text-white transition-colors">
                    {industry}
                  </span>

                  <FiArrowUpRight className="text-[#071a3d]/25 group-hover:text-[#c99618] transition-colors shrink-0" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          PROCESS
      ========================================================= */}
      <section className="py-24 lg:py-32 bg-[#071a3d] text-white">
        <div className="max-w-[1500px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="about-reveal grid lg:grid-cols-[0.7fr_1.3fr] gap-14 lg:gap-24">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-[#c99618] text-xs font-bold tracking-[0.2em]">
                  04
                </span>
                <span className="w-10 h-px bg-[#c99618]" />
                <span className="text-xs tracking-[0.22em] uppercase text-white/40 font-semibold">
                  Our Process
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-[-0.04em]">
                From idea
                <br />
                <span className="text-[#c99618]">to installation.</span>
              </h2>

              <p className="mt-7 text-white/45 leading-7 max-w-md">
                A straightforward process designed to keep your project
                moving from initial requirements through final installation.
              </p>
            </div>

            <div>
              {process.map((item, index) => (
                <div
                  key={item.number}
                  className="group border-t border-white/10 py-8 sm:py-10 grid grid-cols-[60px_1fr] sm:grid-cols-[90px_1fr] gap-5"
                >
                  <span className="text-[#c99618] text-sm">
                    {item.number}
                  </span>

                  <div>
                    <div className="flex items-center justify-between gap-5">
                      <h3 className="text-2xl sm:text-3xl font-light">
                        {item.title}
                      </h3>

                      <FiArrowUpRight className="text-white/20 group-hover:text-[#c99618] transition-colors" />
                    </div>

                    <p className="mt-4 max-w-xl text-sm leading-7 text-white/45">
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

      {/* =========================================================
          QUALITY STATEMENT
      ========================================================= */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.035]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(#071a3d 1px, transparent 1px), linear-gradient(90deg, #071a3d 1px, transparent 1px)",
              backgroundSize: "45px 45px",
            }}
          />
        </div>

        <div className="relative max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-12 text-center">
          <div className="about-reveal">
            <span className="inline-flex items-center gap-3 text-[#c99618] text-[11px] tracking-[0.25em] uppercase font-semibold">
              <span className="w-8 h-px bg-[#c99618]" />
              Performance & Design
              <span className="w-8 h-px bg-[#c99618]" />
            </span>

            <h2 className="mt-8 text-4xl sm:text-5xl lg:text-7xl font-light leading-[1] tracking-[-0.05em]">
              Practical performance.
              <br />
              <span className="text-[#c99618]">
                Architectural aesthetics.
              </span>
            </h2>

            <p className="mt-8 max-w-2xl mx-auto text-[#071a3d]/55 leading-8">
              We bring together practical functionality and contemporary
              design to create washroom spaces that feel considered,
              professional and built for everyday use.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}
      <section className="bg-[#c99618] text-[#071a3d]">
        <div className="max-w-[1500px] mx-auto px-5 sm:px-8 lg:px-12 py-16 lg:py-20">
          <div className="about-reveal flex flex-col lg:flex-row lg:items-center justify-between gap-10">
            <div>
              <p className="text-[10px] tracking-[0.25em] uppercase font-bold opacity-60">
                Start Your Project
              </p>

              <h2 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-light tracking-[-0.04em]">
                Let&apos;s build better
                <br />
                washroom spaces.
              </h2>
            </div>

            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-3 bg-[#071a3d] text-white px-7 py-5 text-sm font-semibold self-start lg:self-auto"
            >
              Contact Megha Systems
              <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}