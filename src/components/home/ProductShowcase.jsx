
"use client";

import { useEffect, useMemo, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { navabarProducts } from "@/data";

gsap.registerPlugin(ScrollTrigger);

const GRADIENT =
  "linear-gradient(90deg, #b8c900 0%, #dddf00 35%, #f0f542 65%, #a9c000 100%)";

export default function ProductShowcase() {
  const sectionRef = useRef(null);
  const firstRowRef = useRef(null);
  const secondRowRef = useRef(null);

  // PRODUCT DATA
  const products = useMemo(() => {
    return (navabarProducts || []).map((product) => ({
      ...product,
      name: product.label,
      image: product.image || null,
      href: `/products/${product.slug}`,
    }));
  }, []);

  const firstRow = products.filter((_, index) => index % 2 === 0);
  const secondRow = products.filter((_, index) => index % 2 !== 0);

  // GSAP SCROLL ANIMATION
  useEffect(() => {
    const section = sectionRef.current;
    const row1 = firstRowRef.current;
    const row2 = secondRowRef.current;

    if (!section || !row1) return;

    const ctx = gsap.context(() => {
      const getTravel = (row) =>
        Math.max(0, row.scrollWidth - window.innerWidth + 80);

      // FIRST ROW: RIGHT TO LEFT
      gsap.fromTo(
        row1,
        {
          x: 0,
        },
        {
          x: () => -getTravel(row1),
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
            invalidateOnRefresh: true,
          },
        }
      );

      // SECOND ROW: LEFT TO RIGHT
      if (row2) {
        gsap.fromTo(
          row2,
          {
            x: () => -getTravel(row2),
          },
          {
            x: 0,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.2,
              invalidateOnRefresh: true,
            },
          }
        );
      }

      // HEADING ANIMATION
      gsap.fromTo(
        ".showcase-heading",
        {
          opacity: 0,
          y: 35,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            once: true,
          },
        }
      );

      ScrollTrigger.refresh();
    }, section);

    return () => ctx.revert();
  }, [products.length]);

  if (!products.length) return null;

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#0A0A0D] py-10 text-[#F4F4EF] sm:py-14"
    >
      {/* BACKGROUND GRID */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.035) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.035) 1px,transparent 1px)",
          backgroundSize: "90px 90px",
        }}
      />

      <div className="pointer-events-none absolute -bottom-64 right-[-200px] h-[600px] w-[600px] rounded-full bg-[#dddf00]/[0.07] blur-[130px]" />

      {/* HEADER */}
      <div className="showcase-heading relative mx-auto mb-10 flex max-w-[1400px] flex-wrap items-center justify-between gap-5 px-5 sm:px-8 lg:px-12">
        <div className="flex items-center gap-3">
          <span className="h-px w-7 bg-[#dddf00]" />

          <span className="text-[14px] font-semibold uppercase tracking-[0.17em] text-white/55">
            Cubiloo Product Collection
          </span>
        </div>

        <Link
          href="/products"
          className="group flex items-center gap-2 border-b border-white/20 pb-1 text-[12px] font-semibold text-white/85 transition-colors hover:border-[#dddf00] hover:text-[#dddf00]"
        >
          View All Products

          <ArrowRight
            size={15}
            className="transition-transform group-hover:translate-x-1"
          />
        </Link>
      </div>

      {/* PRODUCT SCROLL ROWS */}
      <div className="relative space-y-6 sm:space-y-8">
        {/* ROW ONE */}
        <div className="w-full overflow-visible">
          <div
            ref={firstRowRef}
            className="flex w-max items-start gap-5 will-change-transform sm:gap-6"
          >
            {firstRow.map((product, index) => (
              <ShowcaseCard
                key={product.slug || index}
                product={product}
              />
            ))}
          </div>
        </div>

        {/* ROW TWO */}
        {secondRow.length > 0 && (
          <div className="w-full overflow-visible">
            <div
              ref={secondRowRef}
              className="flex w-max items-start gap-5 will-change-transform sm:gap-6"
            >
              {secondRow.map((product, index) => (
                <ShowcaseCard
                  key={product.slug || index}
                  product={product}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* BOTTOM */}
      <div className="relative mx-auto mt-12 flex max-w-[1400px] items-center justify-between gap-4 px-5 sm:px-8 lg:px-12">
        <p className="text-[11px] uppercase tracking-[0.2em] text-white/35">
          Designed for every space. Built to last.
        </p>

        <Link
          href="/contact-us"
          className="group flex shrink-0 items-center gap-2 text-xs font-semibold text-[#dddf00]"
        >
          Enquire Now

          <ArrowUpRight
            size={16}
            className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
          />
        </Link>
      </div>
    </section>
  );
}

// PRODUCT CARD
function ShowcaseCard({ product }) {
  return (
    <Link
      href={product.href}
      className="group block w-[250px] shrink-0 sm:w-[310px] lg:w-[355px]"
    >
      {/* IMAGE */}
      <div className="relative h-[195px] overflow-hidden rounded-[17px] border border-white/10 bg-[#151518] sm:h-[235px] lg:h-[260px]">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name || "Cubiloo product"}
            fill
            sizes="(max-width: 639px) 250px, (max-width: 1023px) 310px, 355px"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-xs text-white/40">
            Image Coming Soon
          </div>
        )}

        {/* HOVER OVERLAY */}
        <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/15" />

        {/* ARROW */}
        <span className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/65 text-white backdrop-blur-md transition-all duration-300 group-hover:rotate-45 group-hover:border-[#dddf00]">
          <ArrowUpRight size={19} />
        </span>
      </div>

      {/* TITLE */}
      <div className="mt-3 flex items-center gap-2">
        <h3 className="truncate text-[13px] font-medium text-white/85 transition-colors group-hover:text-[#dddf00] sm:text-[14px]">
          {product.name}
        </h3>

        <span
          className="shrink-0 rounded px-1.5 py-0.5 text-[9px] font-bold text-black"
          style={{ background: GRADIENT }}
        >
          CUBILOO
        </span>
      </div>
    </Link>
  );
}
