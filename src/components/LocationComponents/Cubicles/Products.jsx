
"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { navabarProducts } from "@/data";

gsap.registerPlugin(ScrollTrigger);

// Replace with your actual WhatsApp number
const WHATSAPP_NUMBER = "917837830803";

export default function Products() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".category-heading", {
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".category-heading",
          start: "top 85%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#f5f3ed] py-6 sm:py-12 "
    >
      <div className="mx-auto max-w-[1900px] px-5 sm:px-8 lg:px-9">

        {/* HEADING */}
        <div className="category-heading mb-5 flex flex-col justify-between gap-8 md:flex-row md:items-end lg:mb-8">
          <div>
            {/* Eyebrow */}
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-12 bg-[#dddf00]" />

              <span className="text-[9px] font-medium tracking-[0.3em] text-[#dddf00]">
                OUR SOLUTIONS
              </span>
            </div>

            {/* Heading */}
            <h2 className="max-w-[700px] text-[38px] font-bold leading-[1.05] tracking-[-0.04em] text-[#071720] sm:text-[48px] lg:text-[62px]">
              Built for spaces
              <br />

              <span className="bg-[linear-gradient(90deg,#b8c900_0%,#a9c000_100%)] bg-clip-text text-transparent md:bg-[linear-gradient(90deg,#b8c900_0%,#dddf00_35%,#f0f542_65%,#a9c000_100%)]">
                that demand more.
              </span>
            </h2>
          </div>

          {/* Description */}
          <p className="max-w-[350px] text-[13px] leading-[1.8] text-[#071720]/95 md:pb-2">
            Explore our range of premium partition and washroom solutions,
            engineered for durability, privacy and modern commercial spaces.
          </p>
        </div>

        {/* PRODUCT GRID */}
        <motion.div
          layout
          className="category-grid grid grid-cols-1 gap-5 md:grid-cols-4 xl:gap-7"
        >
          <AnimatePresence mode="popLayout">
            {navabarProducts.map((product, index) => {
              const whatsappMessage = encodeURIComponent(
                `Hello, I am interested in ${product.label}. Please share more details and pricing.`
              );

              return (
                <motion.article
                  layout
                  key={`${product.categorySlug}-${product.slug}`}
                  initial={{
                    opacity: 0,
                    y: 35,
                    scale: 0.97,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    y: 20,
                    scale: 0.97,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: Math.min(index * 0.035, 0.3),
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group/card min-w-0 overflow-hidden rounded-[18px] border border-[#071720]/10 bg-white p-2 shadow-[0_12px_35px_rgba(7,23,32,0.06)] transition-all duration-500 hover:-translate-y-1.5 hover:border-[#b8c900]/60 hover:shadow-[0_20px_45px_rgba(7,23,32,0.12)]"
                >
                  <Link
                    href={`/products/${product.slug}`}
                    className="group block"
                  >
                    <div className="relative aspect-[1.35/1] overflow-hidden rounded-[12px] bg-[#ecebe6]">
                      {product.image ? (
                        <Image
                          unoptimized
                          src={product.image}
                          alt={`${product.label} Toilet Cubicle`}
                          fill
                          sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center text-sm text-gray-400">
                          Image Coming Soon
                        </div>
                      )}

                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#071720]/35 via-transparent to-transparent" />

                      <div className="absolute left-3 top-3 z-10 rounded-full border border-white/50 bg-white/92 px-3 py-1.5 text-[9px] font-bold tracking-[0.16em] text-[#071720] shadow-[0_5px_18px_rgba(0,0,0,0.12)] backdrop-blur-sm">
                        {product.categoryName || "CUBILOO"}
                      </div>

                      <div className="absolute bottom-3 right-3 z-10 flex h-11 w-11 translate-y-2 items-center justify-center rounded-full bg-[#dddf00] text-[#071720] opacity-0 shadow-[0_8px_22px_rgba(7,23,32,0.24)] transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                        <ArrowUpRight size={19} />
                      </div>
                    </div>

                    <div className="flex items-center justify-between px-3 pb-2 pt-4 sm:px-4">
                      <div className="min-w-0">
                        <p className="mb-1 text-[9px] font-semibold tracking-[0.22em] text-[#8b9500]">
                          CUBILOO SERIES
                        </p>
                        <h3 className="truncate text-[20px] font-semibold leading-tight tracking-[-0.025em] text-[#071720] transition-colors duration-300 group-hover:text-[#7d8800] sm:text-[22px]">
                          {product.label}
                        </h3>
                      </div>
                      <span className="ml-4 text-[11px] font-bold tracking-[0.12em] text-[#071720]/35">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </Link>

                  <div className="mx-2 mb-2 border-t border-[#071720]/8 pt-2">
                    <Link
                      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/whatsapp flex w-full items-center justify-center gap-2 rounded-[10px] bg-[#f3f6f1] px-4 py-3 text-[12px] font-semibold text-[#17251b] transition-all duration-300 hover:bg-[#25D366] hover:text-white"
                    >
                      <FaWhatsapp
                        size={18}
                        className="text-[#25D366] transition-colors duration-300 group-hover/whatsapp:text-white"
                      />
                      <span>Enquire on WhatsApp</span>
                      <ArrowUpRight
                        size={14}
                        className="transition-transform duration-300 group-hover/whatsapp:-translate-y-0.5 group-hover/whatsapp:translate-x-0.5"
                      />
                    </Link>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
