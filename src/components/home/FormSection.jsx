
"use client";

import { useState, useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowUpRight,
  Building2,
  Users,
  ShieldCheck,
  Award,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function FormSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });

  const heroRef = useRef(null);
  const leftRef = useRef(null);
  const formRef = useRef(null);
  const bgRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const left = leftRef.current;
      const form = formRef.current;
      const bg = bgRef.current;

      if (!left || !form) return;

      const eyebrow = left.querySelector(".hero-eyebrow");
      const title = left.querySelector(".hero-title");
      const description = left.querySelector(".hero-description");
      const actions = left.querySelector(".hero-actions");
      const stats = left.querySelectorAll(".hero-stat");

      const mm = gsap.matchMedia();

      mm.add(
        {
          desktop: "(min-width: 1024px)",
          reduceMotion: "(prefers-reduced-motion: reduce)",
        },
        (context) => {
          const { desktop, reduceMotion } = context.conditions;

          if (reduceMotion) return;

          // Initial states
          gsap.set(left, {
            clipPath: "inset(0 100% 0 0)",
          });

          gsap.set([eyebrow, title, description, actions], {
            y: 35,
            opacity: 0,
            filter: "blur(8px)",
          });

          gsap.set(stats, {
            y: 25,
            opacity: 0,
            scale: 0.94,
          });

          gsap.set(form, {
            x: () => window.innerWidth * 1.15,
            rotationY: -360,
            rotationZ: desktop ? 12 : 5,
            scale: 0.65,
            opacity: 0,
            transformPerspective: 1400,
            transformOrigin: "50% 50%",
          });

          if (bg) {
            gsap.set(bg, { scale: 1.15 });
          }

          // Timeline starts when the section enters the viewport
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: heroRef.current,
              start: "top 75%",
              toggleActions: "play none none reverse",
              invalidateOnRefresh: true,
            },
          });

          // Background zoom
          if (bg) {
            tl.to(
              bg,
              {
                scale: 1,
                duration: 1.8,
                ease: "power3.out",
              },
              0
            );
          }

          // Left-side reveal
          tl.to(
            left,
            {
              clipPath: "inset(0 0% 0 0)",
              duration: 1.25,
              ease: "power4.inOut",
            },
            0
          );

          // Heading, paragraph and CTA entrance
          tl.to(
            [eyebrow, title, description, actions],
            {
              y: 0,
              opacity: 1,
              filter: "blur(0px)",
              duration: 0.8,
              stagger: 0.14,
              ease: "power3.out",
              clearProps: "filter",
            },
            0.3
          );

          // Statistics entrance
          tl.to(
            stats,
            {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 0.7,
              stagger: 0.12,
              ease: "back.out(1.4)",
            },
            0.85
          );

          // Form enters from the right with one complete 360-degree spin
          tl.to(
            form,
            {
              x: 0,
              rotationY: 0,
              rotationZ: 0,
              scale: 1,
              opacity: 1,
              duration: 2,
              ease: "power3.out",
              clearProps: "transform",
            },
            0.15
          );
        }
      );

      return () => mm.revert();
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Connect your API or form service here.
    console.log("Quote request:", formData);
  };

  const stats = [
    {
      icon: Building2,
      value: "500+",
      label: "Projects Delivered",
    },
    {
      icon: Users,
      value: "10+",
      label: "Years of Expertise",
    },
    {
      icon: ShieldCheck,
      value: "100%",
      label: "Quality & Reliability",
    },
  ];

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative isolate overflow-hidden bg-[#f5f3ed] text-[#252329] border border-orange-300"
    >
      <div className="relative py-4">
        {/* Desktop image placeholder */}
        <div
          ref={bgRef}
          className="absolute inset-y-0 right-0 hidden w-[62%] origin-center bg-[#f5f3ed] lg:block"
        >
          {/* Add your restroom cubicle image here */}
        </div>

        {/* Mobile image placeholder */}
        <div className="absolute inset-x-0 top-0 h-[310px] bg-[#f5f3ed] lg:hidden">
          {/* Add your mobile restroom image here */}
        </div>

        {/* Curved left panel */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 z-0 hidden w-[64%] bg-[#fff] lg:block"
          style={{
            clipPath: "ellipse(86% 105% at 0% 50%)",
          }}
        />

        <div className="relative z-10 mx-auto grid max-w-[1500px] grid-cols-1 items-start gap-8 px-5 pb-6 pt-[335px] sm:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-12 lg:px-12 lg:pb-14 lg:pt-0">
          {/* LEFT CONTENT */}
          <div
            ref={leftRef}
            className="max-w-[650px] will-change-[clip-path]"
          >
            <div className="hero-eyebrow mb-6 flex items-center gap-3">
              <span className="h-[2px] w-11 bg-[#efac39]" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#77716D] sm:text-xs">
                Modern <span className="mx-2">|</span> Durable
                <span className="mx-2">|</span> Hygienic
              </p>
            </div>

            <h2 className="max-w-[700px] text-nowrap text-[38px] font-medium leading-[1.05] tracking-[-0.04em] text-[#071a3d] sm:text-[48px] lg:text-[62px]">
              Premium
              <br />

              <span className="bg-[linear-gradient(90deg,rgba(239,172,57,1)_0%,rgba(229,139,59,1)_38%,rgba(223,117,57,1)_72%,rgba(216,85,56,1)_100%)] bg-clip-text text-transparentbg-[linear-gradient(90deg,rgba(239,172,57,1)_0%,rgba(229,139,59,1)_38%,rgba(223,117,57,1)_72%,rgba(216,85,56,1)_100%)] bg-clip-text text-transparent">
                Toilet Cubicle Systems
              </span>
            </h2>

            <p className="hero-description mt-6 max-w-[500px] text-[15px] leading-5 text-[#68625F] sm:text-base sm:leading-6">
              Stylish, durable and low-maintenance restroom partitions
              designed for offices, malls, schools, hospitals and
              modern commercial spaces.
            </p>

            <div className="hero-actions mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="#quote"
                className="group inline-flex min-h-[54px] items-center justify-center gap-3 rounded-lg bg-[linear-gradient(90deg,rgba(239,172,57,1)_0%,rgba(229,139,59,1)_38%,rgba(223,117,57,1)_72%,rgba(216,85,56,1)_100%)] px-5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#984426] sm:text-base"
              >
                Get a Free Quote
                <ArrowUpRight
                  size={19}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>

              <a
                href="#systems"
                className="group inline-flex min-h-[54px] items-center justify-center gap-3 rounded-lg border border-[#efac39] bg-white/80 px-5 text-sm font-semibold text-[#efac39] transition-colors duration-300 hover:bg-white sm:text-base"
              >
                Explore Our Systems
                <ArrowUpRight
                  size={19}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>
            </div>

            {/* Animated statistics */}
            <div className="hero-stats mt-12 grid grid-cols-1 gap-5 border-t border-[#E3DAD2] pt-7 sm:grid-cols-3 sm:gap-3 lg:mt-16 lg:border-t-0 lg:pt-0">
              {stats.map((stat) => {
                const Icon = stat.icon;

                return (
                  <div
                    key={stat.label}
                    className="hero-stat flex items-center gap-3 sm:flex-col sm:items-start sm:gap-3"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#f3e7dd] text-[#efac39] transition-transform duration-500 hover:rotate-12 sm:h-14 sm:w-14">
                      <Icon size={25} strokeWidth={1.6} />
                    </div>

                    <div>
                      <p className="text-2xl font-bold tracking-tight bg-[linear-gradient(90deg,rgba(239,172,57,1)_0%,rgba(229,139,59,1)_38%,rgba(223,117,57,1)_72%,rgba(216,85,56,1)_100%)] bg-clip-text text-transparent sm:text-3xl lg:text-[34px]">
                        {stat.value}
                      </p>

                      <p className="mt-1 text-xs font-medium text-[#625B57] sm:text-sm">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* QUOTE FORM */}
          <div
            ref={formRef}
            id="quote"
            className="relative z-20 mx-auto w-full max-w-[480px] scroll-mt-24 rounded-[22px] border border-white/70 bg-[#fff] p-6 shadow-[0_20px_70px_rgba(36,27,20,0.15)] sm:p-8 lg:ml-auto lg:mr-0"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#efac39]" />

              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#817771]">
                Request a Quote
              </p>
            </div>

            <h2 className="text-[28px] font-bold leading-tight tracking-[-0.035em] sm:text-[25px]">
              Let&apos;s Build a Better Restroom Space
            </h2>

            <p className="mt-3 text-sm leading-5 text-[#716A67]">
              Tell us your requirements and our team will get in touch
              with you shortly.
            </p>

            <form onSubmit={handleSubmit} className="mt-7 space-y-5">
              <input
                name="name"
                type="text"
                autoComplete="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                aria-label="Your Name"
                className="w-full border-0 border-b border-[#DDD5CF] bg-transparent px-0 py-3 text-sm outline-none placeholder:text-[#77716D] focus:border-[#B95D35]"
              />

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  aria-label="Your Email"
                  className="w-full border-0 border-b border-[#DDD5CF] bg-transparent px-0 py-3 text-sm outline-none placeholder:text-[#77716D] focus:border-[#B95D35]"
                />

                <input
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="Your Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  aria-label="Your Phone"
                  className="w-full border-0 border-b border-[#DDD5CF] bg-transparent px-0 py-3 text-sm outline-none placeholder:text-[#77716D] focus:border-[#B95D35]"
                />
              </div>

              <textarea
                name="message"
                rows={2}
                placeholder="Tell us about your project..."
                value={formData.message}
                onChange={handleChange}
                aria-label="Project Details"
                className="w-full resize-y border-0 border-b border-[#DDD5CF] bg-transparent px-0 py-3 text-sm outline-none placeholder:text-[#77716D] focus:border-[#B95D35]"
              />

              <button
                type="submit"
                className="group flex min-h-[56px] w-full items-center justify-center gap-3 rounded-lg bg-[linear-gradient(90deg,rgba(239,172,57,1)_0%,rgba(229,139,59,1)_38%,rgba(223,117,57,1)_72%,rgba(216,85,56,1)_100%)] px-5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#984426] sm:text-base"
              >
                Request Free Quote
                <ArrowUpRight
                  size={19}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </button>
            </form>

            <div className="mt-6 flex items-center gap-2 border-t border-[#EEE6E0] pt-5 text-xs text-[#77716D]">
              <Award size={18} className="shrink-0 text-[#efac39]" />
              <span>
                Designed for demanding commercial environments
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
