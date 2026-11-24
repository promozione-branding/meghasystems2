
"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18 },
  },
};

const reveal = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function ToiletCubicleAbout({ city  }) {
  const cityName = city
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <section className="relative bg-[#10110C] text-[#F5F3EC] py-6 md:py-12 overflow-hidden">

      {/* Background glow */}
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px]
        rounded-full bg-[#E8F000]/[0.04] blur-[130px] pointer-events-none" />

      <div className="max-w-[1500px] mx-auto px-5 sm:px-8 lg:px-14">

        <div className="grid lg:grid-cols-[0.85fr_1.15fr]
          gap-12 lg:gap-16 items-center">

          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative"
          >
            {/* Yellow frame */}
            <div className="absolute -top-5 -left-5 w-[65%] h-[75%]
              border-t-[5px] border-l-[5px] border-[#E8F000]" />

            <div className="relative aspect-[4/4.5] overflow-hidden
              bg-[#25251B]">
              <motion.div
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0"
              >
                <Image
                  src="/products/luron.webp"
                  alt={`Toilet cubicle installation in ${cityName}`}
                  fill
                  priority={false}
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
              </motion.div>

              <div className="absolute inset-0 bg-gradient-to-t
                from-black/25 to-transparent pointer-events-none" />
            </div>

            {/* Bottom frame */}
            <div className="absolute -bottom-5 -right-5 w-[65%]
              h-[45%] border-b-[5px] border-r-[5px]
              border-[#E8F000] pointer-events-none" />

            {/* Image label */}
            <div className="absolute bottom-5 left-5 bg-[#10110C]/90
              backdrop-blur-md border border-white/10 px-5 py-4">
              <span className="text-[#E8F000] text-[10px]
                tracking-[0.2em] uppercase">
                Cubiloo Cubicles
              </span>
              <p className="text-white font-serif text-lg mt-1">
                Premium Restroom Solutions
              </p>
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="relative z-10"
          >

            {/* Eyebrow */}
            <motion.div
              variants={reveal}
              className="flex items-center gap-3 mb-6"
            >
              <span className="w-10 h-[2px] bg-[#E8F000]" />
              <span className="text-[#E8F000] text-xs uppercase
                tracking-[0.22em]">
                About Cubiloo
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              variants={reveal}
              className="font-serif text-3xl sm:text-4xl
                lg:text-[43px] xl:text-[50px] leading-[1.15]
                tracking-tight text-[#F5F3EC]"
            >
              Best Toilet Cubicle Manufacturers in {cityName}
              <span className="text-[#E8F000] italic">
                {" "}– Cubiloo Cubicles
              </span>
            </motion.h2>

            <motion.div
              variants={reveal}
              className="w-28 h-[3px] bg-[#E8F000] mt-7 mb-9"
            />

            {/* Paragraph timeline */}
            <div className="relative space-y-8">

              <div className="absolute left-[7px] top-2 bottom-4
                w-px bg-white/20" />

              {/* Paragraph 1 */}
              <motion.div
                variants={reveal}
                className="relative pl-10"
              >
                <span className="absolute left-0 top-2 w-[15px]
                  h-[15px] bg-[#E8F000]" />

                <p className="text-white/70 text-sm sm:text-base
                  leading-[1.9]">
                  At Cubiloo, our expertise in manufacturing{" "}
                  <a
                    href="/"
                    className="text-white font-semibold hover:text-[#E8F000]
                      transition-colors underline underline-offset-4"
                  >
                    Toilet Cubicles
                  </a>
                  {" "}and Partitions is unparalleled. Backed by years
                  of industry experience, we bring a deep understanding
                  of the evolving needs of modern spaces.
                </p>
              </motion.div>

              {/* Paragraph 2 */}
              <motion.div
                variants={reveal}
                className="relative pl-10"
              >
                <span className="absolute left-0 top-2 w-[15px]
                  h-[15px] bg-[#E8F000]" />

                <p className="text-white/70 text-sm sm:text-base
                  leading-[1.9]">
                  As seasoned <em className="text-white font-semibold">
                    Toilet Cubicle Manufacturers in {cityName}
                  </em>
                  , we recognize that each project is unique. Cubiloo
                  takes pride in offering a diverse range of customization
                  options to suit your specific requirements. Choose from
                  a variety of materials, colors, and configurations to
                  create restroom spaces that seamlessly align with your
                  design vision.
                </p>
              </motion.div>

              {/* Paragraph 3 */}
              <motion.div
                variants={reveal}
                className="relative pl-10"
              >
                <span className="absolute left-0 top-2 w-[15px]
                  h-[15px] bg-[#E8F000]" />

                <p className="text-white/70 text-sm sm:text-base
                  leading-[1.9]">
                  Our Toilet Cubicles and Partitions are crafted using
                  premium materials that are not only aesthetically
                  pleasing but also built to endure the rigors of
                  high-traffic environments. Trust Cubiloo for
                  manufacturing solutions that prioritize longevity,
                  minimizing the need for frequent replacements and
                  maintenance.
                </p>
              </motion.div>

            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
