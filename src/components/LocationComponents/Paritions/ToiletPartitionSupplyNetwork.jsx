
"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import partitionCities, { cubicleCities } from "@/components/Location/city";

export default function ToiletPartitionSupplyNetwork() {
  return (
    <section className="relative isolate overflow-hidden bg-[#f5f3ed] px-5 py-8 sm:px-8 md:py-10 lg:py-12">

      {/* BACKGROUND DETAILS */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(#071720 1px, transparent 1px),
            linear-gradient(90deg, #071720 1px, transparent 1px)
          `,
          backgroundSize: "55px 55px",
        }}
      />

      <div className="pointer-events-none absolute -right-40 -top-48 h-[500px] w-[500px] rounded-full border border-[#a9b000]/15" />
      <div className="pointer-events-none absolute -right-24 -top-32 h-[350px] w-[350px] rounded-full border border-[#a9b000]/10" />

      <div className="relative mx-auto max-w-[1500px]">

        {/* SECTION HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-3 max-w-5xl md:mb-5"
        >
          <div className="mb-3 flex items-center gap-4">
            <span className="h-[3px] w-11 bg-[#dddf00]" />

            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#899000] sm:text-xs">
              Our Supply Network
            </span>
          </div>

          <h2 className="font-serif text-[32px] font-semibold leading-[1.1] tracking-[-0.04em] text-[#071720] sm:text-5xl lg:text-[60px]">
            Toilet Partitions{" "}
            <span className="bg-gradient-to-r from-[#a9b000] via-[#c3c900] to-[#899900] bg-clip-text text-transparent">
              Supply Network
            </span>
          </h2>

          <p className="mt-3 max-w-3xl text-sm leading-6 text-[#555b60] sm:text-base sm:leading-7">
            We supply high-quality toilet partition systems across major
            cities, providing durable and reliable restroom solutions
            for commercial and institutional projects.
          </p>
        </motion.div>

        {/* CITY LIST - INLINE SEPARATOR STYLE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center gap-x-3 gap-y-2 border-y border-[#071720]/15 py-4 sm:gap-x-4 sm:gap-y-3 sm:py-5"
        >
          {partitionCities.map((city, index) => (
            <div
              key={city.href || city.label || index}
              className="flex items-center gap-3 sm:gap-4"
            >
              <a
                href={city.href}
                className="text-[13px] font-medium text-[#071720] transition-colors duration-300 hover:text-[#929900] sm:text-sm md:text-base"
              >
                {city.label}
              </a>

              {index !== partitionCities.length - 1 && (
                <span className="h-4 w-px bg-[#a9b000]/80" />
              )}
            </div>
          ))}
        </motion.div>

        {/* BOTTOM CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-7 flex items-center gap-4 md:mt-9"
        >
          <span className="hidden h-px flex-1 bg-[#a9b000] sm:block" />

          <a
            href="/products"
            className="group inline-flex min-h-[48px] items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#b8c900] via-[#dddf00] to-[#a9c000] px-6 py-3 text-[11px] font-bold tracking-[0.1em] text-[#071720] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(169,176,0,0.25)] sm:min-h-[52px] sm:px-8 sm:text-xs"
          >
            EXPLORE TOILET PARTITIONS

            <ArrowUpRight
              size={19}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>

          <span className="hidden h-px flex-1 bg-[#a9b000] sm:block" />
        </motion.div>

      </div>
    </section>
  );
}
