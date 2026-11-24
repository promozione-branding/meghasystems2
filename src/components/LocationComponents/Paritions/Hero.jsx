
"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Hero({ city }) {
  const cityName = (city || "")
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <section className="relative isolate overflow-hidden bg-[#f5f3ee] text-[#071720]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute -right-32 -top-40 h-[28rem] w-[28rem] rounded-full bg-[#dddf00]/[0.12] blur-[130px]" />
        <div className="absolute -bottom-56 left-[10%] h-[28rem] w-[28rem] rounded-full bg-[#dddf00]/[0.08] blur-[140px]" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-[#071720]/10" />
      </div>

      <div className="relative mt-20 md:mt-20 mx-auto max-w-[1600px] px-5 py-8 sm:px-8 sm:py-15">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#071720]/10 bg-white/70 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-[#dddf00]" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#071720]/65 sm:text-xs">
              Toilet Partitions · {cityName}
            </span>
          </div>

          <h1 className="text-4xl font-semibold leading-[1.05] tracking-[-0.035em] sm:text-5xl md:text-7xl">
           Toilet Partitions Manufacturer
            <span className="mt-2 block bg-gradient-to-r from-[#b8c900] via-[#dddf00] to-[#a9c000] bg-clip-text text-transparent">
              in {cityName}
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[#071720]/65 sm:text-base sm:leading-8">
            Explore thoughtfully designed Toilet Partitions systems for commercial
            and institutional washrooms. Tell us about your project and find a
            configuration to suit your space.
          </p>

          {/* <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <Link
              href="/contact-us"
              className="group inline-flex min-h-12 items-center gap-5 rounded-full bg-gradient-to-r from-[#b8c900] via-[#dddf00] to-[#a9c000] py-2 pl-6 pr-2 text-sm font-bold text-black transition-shadow hover:shadow-[0_10px_45px_rgba(221,223,0,0.25)]"
            >
              Request a Quote
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight size={18} />
              </span>
            </Link>
            <Link
              href="/products"
              className="inline-flex min-h-12 items-center gap-2 rounded-full border border-[#071720]/20 px-6 text-sm font-semibold text-[#071720]/85 transition-colors hover:border-[#718000] hover:text-[#718000]"
            >
              Explore Products
            </Link>
          </div> */}
        </div>
      </div>
    </section>
  );
}
