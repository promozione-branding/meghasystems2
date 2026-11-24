
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
import Link from "next/link";
import axios from "axios";

gsap.registerPlugin(ScrollTrigger);

export default function FormSection({ city }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const heroRef = useRef(null);
  const leftRef = useRef(null);
  const formRef = useRef(null);
  const bgRef = useRef(null);

  // Dynamic city name
  const cityName = city
    .split("-")
    .map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join(" ");

  // GSAP Animations
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
          const { reduceMotion } = context.conditions;

          if (reduceMotion) return;

          gsap.set(left, {
            clipPath: "inset(0 100% 0 0)",
          });

          gsap.set(
            [eyebrow, title, description, actions],
            {
              y: 35,
              opacity: 0,
              filter: "blur(8px)",
            }
          );

          gsap.set(stats, {
            y: 25,
            opacity: 0,
            scale: 0.94,
          });

          gsap.set(form, {
            x: () => window.innerWidth * 1.15,
            rotationY: -360,
            rotationZ: 12,
            scale: 0.65,
            opacity: 0,
            transformPerspective: 1400,
            transformOrigin: "50% 50%",
          });

          if (bg) {
            gsap.set(bg, { scale: 1.15 });
          }

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: heroRef.current,
              start: "top 75%",
              toggleActions: "play none none reverse",
              invalidateOnRefresh: true,
            },
          });

          // Background animation
          if (bg) {
            tl.to(
              bg,
              {
                scale: 1,
                duration: 0.8,
                ease: "power3.out",
              },
              0
            );
          }

          // Left content reveal
          tl.to(
            left,
            {
              clipPath: "inset(0 0% 0 0)",
              duration: 1.25,
              ease: "power4.inOut",
            },
            0
          );

          // Text animations
          tl.to(
            [eyebrow, title, description, actions],
            {
              y: 0,
              opacity: 1,
              filter: "blur(0px)",
              duration: 0.7,
              stagger: 0.14,
              ease: "power3.out",
              clearProps: "filter",
            },
            0.3
          );

          // Statistics animation
          tl.to(
            stats,
            {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 0.6,
              stagger: 0.12,
              ease: "back.out(1.4)",
            },
            0.85
          );

          // Form 3D animation
          tl.to(
            form,
            {
              x: 0,
              rotationY: 0,
              rotationZ: 0,
              scale: 1,
              opacity: 1,
              duration: 1,
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

  // Form input handler
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);
    setStatus({
      type: "",
      message: "",
    });

    const websiteUrl =
      window.location.hostname + window.location.pathname;

    const payload = {
      platform: websiteUrl || "Cubiloo Cubicles Quote Form",
      supplierToken: "6a9fb2bdd936bdc2bb1d6df7",
      platformEmail: "contact@meghasystems.com",
      name: formData.name || "N/A",
      email: formData.email || "N/A",
      company: "N/A",
      phone: formData.phone || "N/A",
      product: formData.projectType || "Toilet Cubicles",
      place: cityName,
      message: formData.message || "N/A",
    };

    try {
      const { data } = await axios.post(
        "https://brandbnalo.com/api/form/add",
        payload
      );

      if (data?.success) {
        setStatus({
          type: "success",
          message:
            "Thank you. Your enquiry has been submitted successfully.",
        });

        setFormData({
          name: "",
          email: "",
          phone: "",
          projectType: "",
          message: "",
        });
      } else {
        setStatus({
          type: "error",
          message:
            data?.message || "Submission failed. Please try again.",
        });
      }
    } catch (submitError) {
      console.error("Quote form submission error:", submitError);

      setStatus({
        type: "error",
        message:
          submitError?.response?.data?.message ||
          "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  // Statistics
  const stats = [
    {
      icon: Building2,
      value: "7500+",
      label: "Projects Delivered",
    },
    {
      icon: Users,
      value: "26+",
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
      id="contact"
      className="relative isolate overflow-hidden bg-[#f5f3ed] text-[#252329]"
    >
      <div className="relative py-8 lg:py-12">

        {/* DESKTOP BACKGROUND */}
        <div
          ref={bgRef}
          className="absolute inset-y-0 right-0 hidden w-[62%] origin-center bg-[#f5f3ed] lg:block"
        >
          {/* Add restroom cubicle background image if required */}
        </div>

        {/* MOBILE BACKGROUND */}
        <div className="absolute inset-x-0 top-0 h-[310px] bg-[#f5f3ed] lg:hidden" />

        {/* CURVED LEFT PANEL */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 z-0 hidden w-[64%] bg-white lg:block"
          style={{
            clipPath: "ellipse(86% 105% at 0% 50%)",
          }}
        />

        <div className="relative z-10 mx-auto grid max-w-[1500px] grid-cols-1 items-start gap-10 px-5 pb-8 pt-5 sm:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-12 lg:px-12 lg:py-12">

          {/* LEFT CONTENT */}
          <div
            ref={leftRef}
            className="max-w-[650px] will-change-[clip-path]"
          >

            {/* EYEBROW */}
            <div className="hero-eyebrow mb-6 flex items-center gap-3">
              <span className="h-[2px] w-11 bg-[#dddf00]" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#77716D] sm:text-xs">
                Let's Discuss Your Project
              </p>
            </div>

            {/* DYNAMIC HEADING */}
            <h2 className="hero-title max-w-[700px] text-[36px] font-medium leading-[1.08] tracking-[-0.04em] text-[#071720] sm:text-[46px] lg:text-[58px]">

              Contact Us for Toilet Cubicle Solutions in{" "}

              <span className="bg-[linear-gradient(90deg,#b8c900_0%,#a9c000_100%)] bg-clip-text text-transparent">
                {cityName}
              </span>

            

            </h2>

            {/* DECORATIVE LINE */}
            <div className="mt-6 h-[3px] w-20 bg-[#dddf00]" />

            {/* EXACT PROVIDED CONTENT */}
            <p className="hero-description mt-6 max-w-[520px] text-[15px] leading-7 text-[#68625F] sm:text-base">

              When you choose{" "}

              <strong className="font-semibold text-[#071720]">
                Cubiloo
              </strong>

              {" "}as your{" "}

              <a
                href="/"
                className="font-semibold text-[#071720] underline underline-offset-4 transition-colors hover:text-[#a9b000]"
              >
                Toilet Cubicles Manufacturer
              </a>

              {" "}in {cityName}, you choose a commitment to excellence.
              Join the ranks of satisfied clients who have transformed
              their restroom spaces with our top-tier solutions.

            </p>

            {/* CTA BUTTONS */}
            <div className="hero-actions mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">

              <a
                href="#quote"
                className="group inline-flex min-h-[54px] items-center justify-center gap-3 rounded-lg bg-[linear-gradient(90deg,#b8c900_0%,#dddf00_35%,#f0f542_65%,#a9c000_100%)] px-6 text-sm font-semibold text-[#071720] transition-all duration-300 hover:shadow-[0_8px_25px_rgba(169,192,0,0.25)] sm:text-base"
              >
                Get Your Free Quote

                <ArrowUpRight
                  size={19}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>

              <Link
                href="/products"
                className="group inline-flex min-h-[54px] items-center justify-center gap-3 rounded-lg border border-[#a9b000] bg-white/80 px-6 text-sm font-semibold text-[#071720] transition-all duration-300 hover:bg-[#f5f3ed] sm:text-base"
              >
                Explore Our Systems

                <ArrowUpRight
                  size={19}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </Link>

            </div>

            {/* ANIMATED STATISTICS */}
            <div className="hero-stats mt-12 grid grid-cols-1 gap-5 border-t border-[#E3DAD2] pt-7 sm:grid-cols-3 sm:gap-3 lg:mt-16 lg:border-t-0 lg:pt-0">

              {stats.map((stat) => {
                const Icon = stat.icon;

                return (
                  <div
                    key={stat.label}
                    className="hero-stat flex items-center gap-3 sm:flex-col sm:items-start sm:gap-3"
                  >

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#f3e7dd] text-[#625B57] transition-transform duration-500 hover:rotate-12 sm:h-14 sm:w-14">
                      <Icon size={25} strokeWidth={1.6} />
                    </div>

                    <div>
                      <p className="bg-[linear-gradient(90deg,#b8c900_0%,#dddf00_35%,#f0f542_65%,#a9c000_100%)] bg-clip-text text-2xl font-bold tracking-tight text-transparent sm:text-3xl lg:text-[34px]">
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

          {/* RIGHT QUOTE FORM */}
          <div
            ref={formRef}
            id="quote"
            className="relative z-20 mx-auto w-full max-w-[480px] scroll-mt-24 rounded-[22px] border border-white/70 bg-white p-6 shadow-[0_20px_70px_rgba(36,27,20,0.15)] sm:p-8 lg:ml-auto lg:mr-0"
            style={{
              transformStyle: "preserve-3d",
            }}
          >

            {/* FORM EYEBROW */}
            <div className="mb-6 flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#dddf00]" />

              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#071720]">
                Request a Quote
              </p>
            </div>

            {/* FORM HEADING */}
            <h3 className="text-[28px] font-bold leading-tight tracking-[-0.035em] text-[#071720] sm:text-[30px]">
              Get Your Free Quote
            </h3>

            <p className="mt-3 text-sm leading-6 text-[#716A67]">
              Share your requirements with us and our team will help you
              find the right toilet cubicle solution.
            </p>

            {/* FORM */}
            <form
              onSubmit={handleSubmit}
              className="mt-7 space-y-5"
            >

              {/* NAME */}
              <input
                name="name"
                type="text"
                autoComplete="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                aria-label="Your Name"
                className="w-full border-0 border-b border-[#DDD5CF] bg-transparent px-0 py-3 text-sm text-[#071720] outline-none placeholder:text-[#77716D] focus:border-[#a9b000]"
              />

              {/* EMAIL + PHONE */}
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
                  className="w-full border-0 border-b border-[#DDD5CF] bg-transparent px-0 py-3 text-sm text-[#071720] outline-none placeholder:text-[#77716D] focus:border-[#a9b000]"
                />

                <input
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="Your Phone"
                  maxLength={10}
                  minLength={10}
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  aria-label="Your Phone"
                  className="w-full border-0 border-b border-[#DDD5CF] bg-transparent px-0 py-3 text-sm text-[#071720] outline-none placeholder:text-[#77716D] focus:border-[#a9b000]"
                />

              </div>

              {/* PROJECT TYPE */}
              <select
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                aria-label="Project Type"
                className="w-full border-0 border-b border-[#DDD5CF] bg-transparent px-0 py-3 text-sm text-[#77716D] outline-none focus:border-[#a9b000]"
              >
                <option value="">Select Requirement</option>
                <option value="Toilet Cubicles">Toilet Cubicles</option>
                <option value="Toilet Partitions">Toilet Partitions</option>
                <option value="Compact Laminate Cubicles">
                  Compact Laminate Cubicles
                </option>
                <option value="Cubicle Hardware">Cubicle Hardware</option>
                <option value="Custom Cubicle Solutions">
                  Custom Cubicle Solutions
                </option>
              </select>

              {/* MESSAGE */}
              <textarea
                name="message"
                rows={2}
                placeholder="Tell us about your project..."
                value={formData.message}
                onChange={handleChange}
                aria-label="Project Details"
                className="w-full resize-y border-0 border-b border-[#DDD5CF] bg-transparent px-0 py-3 text-sm text-[#071720] outline-none placeholder:text-[#77716D] focus:border-[#a9b000]"
              />

              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                disabled={loading}
                className="group flex min-h-[56px] w-full items-center justify-center gap-3 rounded-lg bg-[linear-gradient(90deg,#b8c900_0%,#dddf00_35%,#f0f542_65%,#a9c000_100%)] px-5 text-sm font-semibold text-[#071720] transition-all duration-300 hover:shadow-[0_8px_25px_rgba(169,192,0,0.25)] disabled:cursor-not-allowed disabled:opacity-60 sm:text-base"
              >

                {loading ? "Submitting..." : "Request Free Quote"}

                {!loading && (
                  <ArrowUpRight
                    size={19}
                    className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                )}

              </button>

              {/* FORM STATUS */}
              {status.message && (
                <p
                  role="status"
                  className={`text-sm ${
                    status.type === "success"
                      ? "text-green-700"
                      : "text-red-600"
                  }`}
                >
                  {status.message}
                </p>
              )}

            </form>

            {/* BOTTOM TRUST LABEL */}
            <div className="mt-6 flex items-center gap-2 border-t border-[#EEE6E0] pt-5 text-xs text-[#77716D]">

              <Award
                size={18}
                className="shrink-0 text-[#a9b000]"
              />

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
