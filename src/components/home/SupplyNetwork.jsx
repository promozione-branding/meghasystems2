
"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, PanelsTopLeft, Layers3 } from "lucide-react";

const supplyItems = [
  {
    id: "01",
    title: "Toilet Cubicles Supply",
    description:
      "Durable, functional and aesthetic cubicle solutions for commercial restrooms.",
    icon: PanelsTopLeft,
    href: "/toilet-cubicles-manufacturers-in-delhi/",
  },
  {
    id: "02",
    title: "Toilet Partitions Supply",
    description:
      "Robust and privacy-focused toilet partition systems for offices, malls, hotels and institutions.",
    icon: Layers3,
    href: "/toilet-partitions-manufacturer-in-delhi",
  },
];

export default function SupplyNetwork() {
  return (
    <section className="relative overflow-hidden bg-[#FFFCF5] px-5 py-6 md:px-10 md:py-12">
      {/* Background Details */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(#7c7c35 1px, transparent 1px), linear-gradient(90deg, #7c7c35 1px, transparent 1px)",
          backgroundSize: "55px 55px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1500px]">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-6 md:mb-8"
        >
          <div className="mb-5 flex items-center gap-4">
            <span className="h-[4px] w-12 bg-[#C3D600]" />
            <span className="text-sm font-bold uppercase tracking-[0.25em] text-[#858D00] md:text-base">
              Supply Network
            </span>
          </div>

          <h2 className="font-serif text-4xl font-bold leading-[1.08] tracking-tight text-[#111C2B] sm:text-5xl ">
            Our Supply Network
          </h2>

          <p className="mt-5 max-w-4xl text-sm leading-relaxed text-[#535963] md:text-lg">
            We supply high-quality toilet cubicles and toilet partitions
            for commercial projects.
          </p>
        </motion.div>

        {/* Two Supply Cards */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
          {supplyItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.a
                key={item.id}
                href={item.href}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.15,
                  ease: "easeOut",
                }}
                whileHover={{ y: -6 }}
                className="group relative flex md:min-h-[220px] flex-col justify-between overflow-hidden rounded-[28px] border border-[#A9B000] bg-white/30 p-3 transition-all duration-500 hover:border-[#829000] hover:bg-white/70 hover:shadow-[0_18px_45px_rgba(80,85,20,0.09)] md:p-5"
              >
                {/* Top Content */}
                <div className="flex items-center gap-2 md:gap-4">
                  {/* Icon */}
                  <div className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-[22px] bg-[#F0F2C0] transition-transform duration-500 group-hover:scale-105 md:h-[95px] md:w-[95px]">
                    <Icon
                    
                      strokeWidth={1.35}
                      className="text-[#34400B] md:size-10"
                    />
                  </div>

                  {/* Divider */}
                  <div className="h-[105px] w-[2px] shrink-0 bg-[#A7AD00]" />

                  {/* Text */}
                  <div>
                    <span className="mb-2 block text-xs font-bold tracking-[0.2em] text-[#929900]">
                      SOLUTION {item.id}
                    </span>

                    <h3 className="font-serif text-xl font-bold leading-tight text-[#111C2B] md:text-3xl ">
                      {item.title}
                    </h3>

                    <p className="mt-1 max-w-[440px] text-xs leading-relaxed text-[#535963] md:text-base ">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Bottom CTA */}
                <div className="mt-4 flex items-center gap-5">
                  <span className="whitespace-nowrap text-xs font-bold tracking-[0.16em] text-[#111C2B] md:text-xs">
                    EXPLORE SOLUTIONS
                  </span>

                  <ArrowUpRight
                    size={23}
                    strokeWidth={1.8}
                    className="shrink-0 text-[#111C2B] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />

                  <div className="h-[2px] flex-1 bg-[#A9B000] transition-all duration-500 group-hover:bg-[#788300]" />
                </div>

                {/* Hover Accent */}
                <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#C3D600] transition-all duration-500 group-hover:w-full" />
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
