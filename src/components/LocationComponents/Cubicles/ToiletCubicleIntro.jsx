
"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Award,
  Layers3,
  ShieldCheck,
  Building2,
} from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: Award,
    title: "Premium",
    subtitle: "Quality",
  },
  {
    icon: Layers3,
    title: "Modern",
    subtitle: "Design",
  },
  {
    icon: ShieldCheck,
    title: "Long",
    subtitle: "Lasting",
  },
  {
    icon: Building2,
    title: "Wide Range",
    subtitle: "of Applications",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.16,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function ToiletCubicleIntro({ city  }) {
  const cityName = city
    .split("-")
    .map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join(" ");

  return (
    <section className="relative bg-[#10110C] text-[#F5F3EC] overflow-hidden py-6 md:py-12">

      {/* Background glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px]
        bg-[#E8F000]/[0.035] blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-14">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-10 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="relative z-10"
          >

            {/* Brand label */}
            <motion.div
              variants={fadeUp}
              className="flex items-center gap-4 mb-7"
            >
              <span className="w-12 h-[3px] bg-[#E8F000]" />

              <span className="text-xs md:text-sm tracking-[0.22em]
                uppercase font-medium text-white">
                Cubiloo Cubicles
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              variants={fadeUp}
              className="font-serif text-4xl sm:text-5xl lg:text-[54px]
                 leading-[1.12] tracking-tight"
            >
              Trusted Toilet Cubicle
              <br />

              Manufacturers in {cityName}
              <span className="block text-[#E8F000] italic mt-2">
                – Cubiloo Cubicles
              </span>
            </motion.h2>

            {/* Decorative line */}
            <motion.div
              variants={fadeUp}
              className="w-32 h-[2px] bg-[#E8F000] mt-7 mb-7"
            />

            {/* Description */}
            <motion.p
              variants={fadeUp}
              className="text-white/65 text-sm sm:text-base
                leading-[1.9] max-w-[680px]"
            >
              Welcome to{" "}
              <Link href="/"  > <strong className="text-white font-semibold">
                Cubiloo Cubicles
              </strong></Link>
              , where excellence meets innovation in the world of
              restroom solutions. As leading{" "}
              <strong className="text-white font-semibold">
                Toilet Cubicle Manufacturers in {cityName}
              </strong>
              , we take pride in delivering premium quality products
              that redefine the standards of design, durability, and
              functionality. From commercial spaces to educational
              institutions, Cubiloo is your go-to partner for crafting
              exceptional restroom environments.
            </motion.p>

            {/* Features */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-2 sm:grid-cols-4 mt-12
                border-t border-white/15 pt-7"
            >
              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <motion.div
                    key={feature.title}
                    variants={fadeUp}
                    whileHover={{ y: -6 }}
                    className={`flex flex-col items-center text-center
                      px-3 py-3 group
                      ${index !== 3 ? "sm:border-r border-white/20" : ""}
                    `}
                  >
                    <Icon
                      size={38}
                      strokeWidth={1.5}
                      className="text-[#E8F000] mb-3
                        transition-transform duration-300
                        group-hover:scale-110"
                    />

                    <span className="text-white text-sm md:text-base font-semibold">
                      {feature.title}
                    </span>

                    <span className="text-white text-sm md:text-base font-semibold">
                      {feature.subtitle}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>

          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 70, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative min-h-[380px] sm:min-h-[480px]
              lg:min-h-[620px] flex items-center"
          >

            {/* Yellow border decoration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
              className="absolute inset-0 border border-[#E8F000]/60
                -translate-x-3 translate-y-3"
              style={{
                clipPath: "polygon(16% 0, 100% 0, 100% 100%, 0 100%)",
              }}
            />

            {/* Image container */}
            <div
              className="relative w-full h-[380px] sm:h-[480px]
                lg:h-[620px] overflow-hidden"
              style={{
                clipPath:
                  "polygon(16% 0, 100% 0, 100% 100%, 0 100%)",
              }}
            >
              <motion.div
                whileHover={{ scale: 1.045 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0"
              >
                <Image
                  src="/Cubi Doorz.webp"
                  alt={`Premium toilet cubicle installations in ${cityName}`}
                  fill
                  priority
                  
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover object-center"
                />
              </motion.div>

              {/* Image overlay */}
              <div className="absolute inset-0 bg-gradient-to-t
                from-[#10110C]/35 via-transparent to-transparent
                pointer-events-none" />

              {/* Image corner label */}
              <div className="absolute bottom-8 right-8
                border border-[#E8F000]/50 bg-[#10110C]/85
                backdrop-blur-md px-5 py-4"
              >
                <span className="text-[#E8F000] text-[10px]
                  tracking-[0.2em] uppercase block mb-2">
                  Cubiloo Collection
                </span>

                <p className="font-serif text-xl text-white">
                  Modern Restroom Spaces
                </p>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
