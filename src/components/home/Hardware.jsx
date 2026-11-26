
"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";

const GRADIENT =
  "linear-gradient(90deg, #b8c900 0%, #dddf00 45%, #a9c000 100%)";

// Add your actual product images and names in these arrays.
const HARDWARE_CATEGORIES = [
  {
    id: "nylon",
    name: "Nylon Hardware",
    number: "01",
    description: "Lightweight, durable and functional hardware accessories.",
    products: [
      { name: "Nylon Hardware Set Black", detail: "Set black", image: "/hardware1/1.jpeg" },
      { name: "Nylon Hardware Set Grey Color", detail: "Set black", image: "/hardware1/2.jpeg" },
      { name: "Nylon Hardware Set Black Color", detail: "Set black", image: "/hardware1/5.jpeg" },
      { name: "Nylon Hardware Set White Color", detail: "Set black", image: "/hardware1/3.jpeg" },
    ],
  },
  {
    id: "pvd",
    name: "SS PVD Coated",
    number: "02",
    description: "Premium PVD coated hardware with an elegant finish.",
    products: [
      { name: "SS PVD Coated Rose Gold Hardware Set", detail: "SS PVD Coated", image: "/hardware1/6.webp" },
      { name: "SS PVD Coated Rose Gold Hardware Set", detail: "SS PVD Coated", image: "/hardware1/7.webp" },
    ],
  },
  {
    id: "ss",
    name: "SS Hardware",
    number: "03",
    description: "Reliable stainless steel hardware for everyday performance.",
    products: [
      { name: "SS Hardware Set Grade 316", detail: "Stainless Steel", image: "/hardware1/4.jpeg" },
    ],
  },
];

export default function Hardware() {
  const [activeCategory, setActiveCategory] = useState("pvd");

  const activeData = HARDWARE_CATEGORIES.find(
    (category) => category.id === activeCategory
  );

  return (
    <section className="relative overflow-hidden bg-[#111111] py-8 text-white sm:py-12">

      {/* Background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.5) 1px,transparent 1px)",
          backgroundSize: "90px 90px",
        }}
      />

      <div className="pointer-events-none absolute -left-40 top-40 h-[500px] w-[500px] rounded-full bg-[#dddf00]/[0.06] blur-[130px]" />

      <div className="relative mx-auto max-w-[1450px] px-5 sm:px-8 lg:px-12">

        {/* Heading */}
        <div className="mb-7 md:mb-14 text-center">
          <div className="mb-6 flex items-center justify-center gap-3">
            <span className="h-px w-9 bg-[#dddf00]" />
            <span className="text-[11px] font-semibold uppercase tracking-[.25em] text-[#dddf00]">
              Premium Cubicle Accessories
            </span>
            <span className="h-px w-9 bg-[#dddf00]" />
          </div>

          <h2 className="text-[clamp(2.7rem,5vw,5rem)] font-semibold leading-[1.05] tracking-tight">
            Hardware that
            <br />
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: GRADIENT }}
            >
              completes every detail.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-[620px] text-sm leading-8 text-white/45 sm:text-base">
            Explore our carefully selected hardware collections, crafted
            to deliver durability, precision and a refined finish.
          </p>
        </div>

        {/* Category Selection */}
        <div className="mx-auto mb-14 grid max-w-[950px] grid-cols-1 gap-3 sm:grid-cols-3">

          {HARDWARE_CATEGORIES.map((category) => {
            const isActive = activeCategory === category.id;

            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`group relative overflow-hidden rounded-2xl border px-5 py-3 text-left transition-all duration-300 sm:px-6 sm:py-3 ${
                  isActive
                    ? "border-[#dddf00] bg-[#dddf00]/[0.10]"
                    : "border-white/10 bg-[#1b1b1b] hover:border-white/30"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="hardware-active"
                    className="absolute bottom-0 left-0 h-[3px] w-full"
                    style={{ background: GRADIENT }}
                  />
                )}

                <div className="mb-3 flex items-center justify-between">
                  <span
                    className={`text-xs font-semibold ${
                      isActive ? "text-[#dddf00]" : "text-white/30"
                    }`}
                  >
                    {category.number} / 03
                  </span>

                  <ArrowUpRight
                    size={19}
                    className={`transition-all duration-300 ${
                      isActive
                        ? "translate-x-0.5 -translate-y-0.5 text-[#dddf00]"
                        : "text-white/30 group-hover:text-white"
                    }`}
                  />
                </div>

                <h3
                  className={`text-lg font-semibold capitalize sm:text-xl ${
                    isActive ? "text-white" : "text-white/65"
                  }`}
                >
                  {category.name}
                </h3>

                {/* <p className="mt-2 text-xs leading-6 text-white/35">
                  {category.description}
                </p> */}

                <div
                  className={`mt-3 h-1 w-10 rounded-full transition-all duration-300 ${
                    isActive ? "w-16 bg-[#dddf00]" : "bg-white/15"
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* Product Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
              <div>
                <span className="mb-2 block text-[10px] font-semibold uppercase tracking-[.25em] text-[#dddf00]">
                  Hardware Collection / {activeData.number}
                </span>

                <h3 className="text-2xl font-semibold sm:text-3xl">
                  {activeData.name}
                </h3>
              </div>

              <span className="text-xs text-white/40">
                {activeData.products.length} Products
              </span>
            </div>

            {activeData.products.length > 0 ? (
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">

                {activeData.products.map((product, index) => (
                <motion.div
  key={product.name}
  initial={{ opacity: 0, y: 25 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.45,
    delay: index * 0.06,
  }}
  className="group w-full min-w-0 overflow-hidden rounded-2xl border border-white/[0.07] bg-[#1b1b1b] transition-all duration-300 hover:-translate-y-1 hover:border-[#dddf00]/40"
>
  {/* Product Image */}
  <div className="relative w-full overflow-hidden bg-[#f5f5f3]">
    <div className="relative w-full aspect-[4/3]">
      <Image
        src={product.image}
       alt={`${product.name} Toilet Cubicle`}
        fill
        sizes="(max-width: 640px) 50vw, 25vw"
        className="object-cover  transition-transform duration-500 group-hover:scale-105"
      />
    </div>

    <span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-[9px] font-semibold uppercase tracking-wider text-black">
      {String(index + 1).padStart(2, "0")}
    </span>

    <div className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-[#dddf00] text-black opacity-0 transition-all duration-300 group-hover:opacity-100">
      <ArrowUpRight size={17} />
    </div>
  </div>

  {/* Product Information */}
  <div className="px-4 pb-5 pt-4 sm:px-5">
    <h4 className="text-sm font-semibold leading-6 text-white sm:text-base">
      {product.name}
    </h4>

    {/* <p className="mt-1 text-[11px] text-white/40">
      {product.detail}
    </p> */}

    <div className="mt-4 h-px w-full bg-white/[0.08]" />

    <div className="mt-3 flex items-center justify-between">
      <span className="text-[9px] uppercase tracking-[.18em] text-white/35">
        Cubicle Hardware
      </span>
      <ArrowRight
        size={15}
        className="text-[#dddf00] transition-transform group-hover:translate-x-1"
      />
    </div>
  </div>
</motion.div>
                ))}

              </div>
            ) : (
              <div className="flex min-h-[260px] flex-col items-center justify-center rounded-2xl border border-dashed border-white/15 bg-[#1b1b1b] px-5 text-center">
                <span className="mb-4 text-3xl text-[#dddf00]">+</span>
                <h4 className="text-lg font-semibold">
                  {activeData.name}
                </h4>
                <p className="mt-2 max-w-sm text-sm leading-7 text-white/40">
                  Add your hardware product images and details to this
                  collection to display them here.
                </p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
