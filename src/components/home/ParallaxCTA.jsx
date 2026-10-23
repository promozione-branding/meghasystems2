
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
            <span className="h-px w-10 bg-[#071a3d]" />
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-[#071a3d]">
              Let's build something better
            </span>
          </div>

          <h2 className="text-[38px] font-medium leading-[1.05] tracking-[-0.04em] text-[#071a3d] sm:text-[48px] lg:text-[62px]">
            Turn Your Vision Into A Space{" "}
            <br />

            <span className="bg-[linear-gradient(90deg,rgba(239,172,57,1)_0%,rgba(229,139,59,1)_38%,rgba(223,117,57,1)_72%,rgba(216,85,56,1)_100%)] bg-clip-text text-transparent">
              You'll Love Every Day.
            </span>
          </h2>

          {/* Benefits */}
          <div className="mt-4 flex flex-wrap gap-x-8 gap-y-4 text-sm text-white">
            {[
              "Expert consultation",
              "Custom solutions",
              "Quality installation",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#efac39]" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <Link
            href="/contact"
            className="group mt-10 inline-flex text-white items-center gap-4 rounded-full bg-[linear-gradient(90deg,rgba(239,172,57,1)_0%,rgba(229,139,59,1)_38%,rgba(223,117,57,1)_72%,rgba(216,85,56,1)_100%)] px-7 py-4 text-sm font-semibold text-[#111827] transition-all duration-300 hover:bg-white"
          >
            Book a Consultation

            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
