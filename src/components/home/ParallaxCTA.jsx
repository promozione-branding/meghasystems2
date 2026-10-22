
"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function ParallaxCTA() {
  return (
    <section
      className="relative w-full h-[60vh] bg-fixed bg-center bg-cover bg-no-repeat py-24 md:py-13"
      style={{
        backgroundImage: "url('/Neo.webp')",
      }}
    >
      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="max-w-6xl">
          {/* Eyebrow */}
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-[#D6B36A]" />
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-[#D6B36A]">
              Let's build something better
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl font-medium leading-[1.12] tracking-tight text-white sm:text-5xl ">
            Turn Your Vision Into A Space{" "}
            <span className="text-[#D6B36A]">
              You'll Love Every Day.
            </span>
          </h2>

          {/* Description */}
          {/* <p className="mt-7 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
            From thoughtful planning to precise execution, we help you
            create spaces that combine functionality, quality, and
            lasting value.
          </p> */}

          {/* Benefits */}
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4 text-sm text-white/90">
            {[
              "Expert consultation",
              "Custom solutions",
              "Quality installation",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#D6B36A]" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <Link
            href="/contact"
            className="group mt-10 inline-flex items-center gap-4 rounded-full bg-[#D6B36A] px-7 py-4 text-sm font-semibold text-[#111827] transition-all duration-300 hover:bg-white"
          >
            Book a Consultation

            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>

          {/* Tagline */}
          <p className="mt-8 text-xs uppercase tracking-[0.22em] text-white/60">
            Quality
            <span className="px-2 text-[#D6B36A]">·</span>
            Precision
            <span className="px-2 text-[#D6B36A]">·</span>
            Durability
          </p>
        </div>

        {/* Bottom Decorative Line */}
        <div className="mt-20 h-px w-full bg-white/30" />
      </div>
    </section>
  );
}
