
"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

// Replace with your actual project image paths
const images = [
  "/duro pro toilet cubicles.webp",
  "/Kiddiez.webp",
  "/Maxi Pro.webp",
  "/Premia.webp",
  "/Neo.webp",
  "/duro pro toilet cubicles.webp",
  "/Maxi Pro.webp",
  "/Kiddiez.webp",
  "/Premia.webp",
];

const columns = [
  [images[0], images[1], images[2]],
  [images[3], images[4], images[5]],
  [images[6], images[7], images[8]],
];

export default function ParallaxCTA() {
  const sectionRef = useRef(null);
  const collageRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const collage = collageRef.current;

    if (!section || !collage) return;

    const ctx = gsap.context(() => {
      gsap.set(collage, {
        yPercent: 0,
        opacity: 1,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=180%",
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // Move the entire image collage upward
      tl.to(
        collage,
        {
          yPercent: -85,
          ease: "none",
          duration: 1,
        },
        0
      );

      // Gradually fade images to black
      tl.to(
        collage,
        {
          opacity: 0,
          ease: "none",
          duration: 0.35,
        },
        0.65
      );

      // Keep text centered, with a subtle reveal
      gsap.fromTo(
        contentRef.current,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            once: true,
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative isolate flex h-screen min-h-[600px] w-full items-center justify-center overflow-hidden bg-[#121212] text-white"
    >
      {/* MOVING BACKGROUND COLLAGE */}
      <div
        ref={collageRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-[15%] z-0 h-[110%] will-change-transform"
      >
        <div className="grid h-full grid-cols-3 gap-3 md:gap-7">
          {columns.map((column, colIndex) => (
            <div
              key={colIndex}
              className={`flex flex-col gap-3 md:gap-7 ${colIndex === 1 ? "-translate-y-16 md:-translate-y-28" : ""
                }`}
            >
              {column.map((src, imageIndex) => (
                <div
                  key={`${colIndex}-${imageIndex}`}
                  className="relative min-h-[210px] flex-1 overflow-hidden bg-[#242424] md:min-h-[320px]"
                >
                  <Image
                    src={src}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 33vw, 34vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* DARK OVERLAY */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-black/55" />

      {/* CONTENT */}
      <div
        ref={contentRef}
        className="relative z-10 mx-auto flex w-full max-w-[1050px] flex-col items-center px-5 text-center sm:px-8"
      >
        <p className="mb-4 bg-gradient-to-r from-[#dddf00] via-[#dddf00] to-[#dddf00] bg-clip-text text-[14px] font-semibold text-transparent sm:text-[17px]">
          Let's Build Something Better
        </p>

        <h2 className="max-w-[1000px] text-[clamp(36px,5vw,72px)] font-semibold leading-[1.08] tracking-[-0.045em] text-white">
          Turn Your Vision Into
          <br className="hidden sm:block" />
          {" "}A Space You'll Love
          <br className="hidden sm:block" />
          {" "}Every Day.
        </h2>

        <Link
          href="/contact-us"
          className="group mt-10 inline-flex items-center justify-center gap-3 rounded-full border border-white bg-transparent px-8 py-4 text-[14px] font-semibold text-white transition-all duration-300 hover:border-[#dddf00] hover:bg-[#dddf00] hover:text-black sm:px-10 sm:text-[16px]"
        >
          Book a Consultation

          <ArrowUpRight
            size={18}
            className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
          />
        </Link>
      </div>
    </section>
  );
}
