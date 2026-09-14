"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import gsap from "gsap";

import "swiper/css";
import "swiper/css/effect-fade";

// ============================================================
// HERO SLIDES
// ============================================================

const HERO_SLIDES = [
  {
    id: 1,
    image: "/Duro-Toilet-Cubicles.webp",
    logo: "/Apple (2).webp",
    client: "APPLE",
    location: "MUMBAI (BKC)",
    amount: "500+",
    title: "TOILET CUBICLES INSTALLED",
    description: "Premium toilet cubicle solutions delivered for Apple.",
  },

  {
    id: 2,
    image: "/Luron.webp",
    logo: "/maruti.webp",
    client: "MARUTI SUZUKI",
    location: "KHARKHODA",
    amount: "2,000+",
    title: "TOILET CUBICLES INSTALLED",
    description: "Large-scale installation delivered for Maruti Suzuki.",
  },

  {
    id: 3,
    image: "/Duro-Toilet-Cubicles.webp",
    logo: "/mag.webp",
    client: "McDONALD'S",
    location: "MULTIPLE LOCATIONS",
    amount: "50+",
    title: "OUTLETS DELIVERED",
    description: "Toilet cubicle installations delivered across multiple outlets.",
  },

  {
    id: 4,
    image: "/Luron.webp",
    logo: "/Oppo-Logo.wine.png",
    client: "OPPO",
    location: "KASNA FACTORY",
    amount: "650+",
    title: "TOILET CUBICLES INSTALLED",
    description: "Premium cubicle installation completed at OPPO Kasna Factory.",
  },
];

export default function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  const swiperRef = useRef(null);

  const leftContentRef = useRef(null);
  const imageContentRef = useRef(null);
  const rightContentRef = useRef(null);
  const bottomContentRef = useRef(null);

  const current = HERO_SLIDES[activeSlide];

  // ==========================================================
  // SLIDE ANIMATION
  // ==========================================================

  useEffect(() => {
    const elements = [
      leftContentRef.current,
      imageContentRef.current,
      rightContentRef.current,
      bottomContentRef.current,
    ];

    gsap.killTweensOf(elements);

    const tl = gsap.timeline();

    tl.fromTo(
      imageContentRef.current,
      {
        opacity: 0,
        scale: 1.06,
        x: 25,
      },
      {
        opacity: 1,
        scale: 1,
        x: 0,
        duration: 0.9,
        ease: "power3.out",
      }
    );

    tl.fromTo(
      leftContentRef.current,
      {
        opacity: 0,
        x: -35,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.65,
        ease: "power3.out",
      },
      "-=0.6"
    );

    tl.fromTo(
      rightContentRef.current,
      {
        opacity: 0,
        x: 35,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.65,
        ease: "power3.out",
      },
      "-=0.5"
    );

    tl.fromTo(
      bottomContentRef.current,
      {
        opacity: 0,
        y: 15,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
      },
      "-=0.35"
    );

    return () => tl.kill();
  }, [activeSlide]);

  // ==========================================================
  // NAVIGATION
  // ==========================================================

  const nextSlide = () => {
    swiperRef.current?.slideNext();
  };

  const previousSlide = () => {
    swiperRef.current?.slidePrev();
  };

  const goToSlide = (index) => {
    swiperRef.current?.slideToLoop(index);
  };

  return (
    <section className="relative min-h-[760px] mt-34 w-full overflow-hidden bg-[#061a3d] text-white sm:min-h-[780px] lg:h-[680px] lg:min-h-0">

      <div className="absolute inset-0 bg-[#061a3d]" />

      <div className="pointer-events-none absolute left-1/2 top-[10%] h-[600px] w-[700px] -translate-x-1/2 rounded-full bg-[#c99618]/[0.035] blur-[120px]" />

      <div className="absolute left-0 top-0 z-50 h-[2px] w-full bg-[#dca01a]" />

      <div className="relative z-20 mx-auto h-full max-w-[1800px] px-5 sm:px-8 lg:px-[4%]">
        <div
          ref={leftContentRef}
          className="absolute left-0 top-40 z-30 w-[230px] sm:left-9 sm:top-40 sm:w-[260px] lg:left-4 lg:top-20 lg:w-[280px]"
        >
          {/* Small heading */}
          <div className="flex items-center gap-3">
            <div className="h-[2px] w-12 bg-[#e4a21a]" />

            <span className="text-[9px] tracking-[0.28em] text-white/65 sm:text-[10px]">
              PROJECT
            </span>
          </div>

          {/* Client */}
          {/* <div className="mt-6">
            <div className="text-[10px] tracking-[0.2em] text-white/40">
              {current.client}
            </div>

            <div className="mt-2 text-[10px] tracking-[0.15em] text-white/60">
              {current.location}
            </div>
          </div> */}

          {/* Amount */}
          <div className="mt-6">
            <div className="text-[9px] tracking-[0.18em] text-white/45">
              {current.title}
            </div>

            <div className="mt-1 text-[68px] font-semibold leading-none tracking-[-0.05em] text-[#dfa11a] sm:text-[76px] lg:text-[75px]">
              {current.amount}
            </div>
          </div>

          {/* Divider */}
          <div className="mt-6 h-[2px] w-14 bg-[#e4a21a]" />

          {/* Description */}
          <p className="mt-4 max-w-[225px] text-[12px] leading-[1.65] text-white/55 sm:text-[13px]">
            {current.description}
          </p>

          {/* Arrows */}
          <div className="mt-30 flex pl-10 gap-3">
            <button
              onClick={previousSlide}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e4a21a] bg-[#e4a21a] text-[#061a3d] transition-all duration-300 hover:bg-transparent hover:text-[#e4a21a]"
            >
              ←
            </button>

            <button
              onClick={nextSlide}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-all duration-300 hover:border-[#e4a21a] hover:bg-[#e4a21a] hover:text-[#061a3d]"
            >
              →
            </button>
          </div>
        </div>

        <div
          ref={imageContentRef}
          className="absolute left-[18%] right-[16%] top-[105px] h-[520px] sm:left-[19%] sm:right-[15%] sm:top-[120px] sm:h-[530px] lg:left-[18%] lg:right-[10%] lg:top-12 lg:h-[555px]"
        >
          {/* Gold outer trapezoid */}
          <div
            className="absolute -left-[35px] -top-[25px] z-0 h-[calc(100%+55px)] w-[calc(100%+55px)] bg-[#d99a17]"
            style={{
              clipPath: "polygon(15% 0, 100% 0, 84% 100%, 0 100%)",
            }}
          />

          {/* Dark inner border */}
          <div
            className="absolute -left-[19px] -top-[12px] z-[1] h-[calc(100%+30px)] w-[calc(100%+30px)] bg-[#111d31]"
            style={{
              clipPath: "polygon(15% 0, 100% 0, 84% 100%, 0 100%)",
            }}
          />

          {/* Image */}
          <div
            className="absolute inset-0 z-10 overflow-hidden"
            style={{
              clipPath: "polygon(15% 0, 100% 0, 84% 100%, 0 100%)",
            }}
          >
            <Swiper
              modules={[Autoplay, EffectFade]}
              effect="fade"
              fadeEffect={{
                crossFade: true,
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              speed={1000}
              loop
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              onSlideChange={(swiper) => {
                setActiveSlide(swiper.realIndex);
              }}
              className="h-full w-full"
            >
              {HERO_SLIDES.map((slide, index) => (
                <SwiperSlide key={slide.id} className="relative h-full w-full">
                  <Image
                    src={slide.image}
                    alt={`${slide.client} toilet cubicle project`}
                    fill
                    priority={index === 0}
                    sizes="(max-width: 768px) 90vw, 65vw"
                    quality={85}
                    className="object-cover object-center"
                  />

                  {/* Dark image overlay */}
                  <div className="absolute inset-0 bg-black/10" />

                  {/* Bottom fade */}
                  <div className="absolute inset-x-0 bottom-0 h-[30%] bg-gradient-to-t from-[#061a3d]/45 to-transparent" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Top-left corner */}
          {/* <div className="absolute -left-[25px] -top-[20px] z-30 h-[70px] w-[70px] border-l border-t border-[#e4a21a]" /> */}

          {/* Bottom-right corner */}
          <div className="absolute -bottom-12 right-35 z-30 h-[45px] w-[70px] border-b-2 border-r-2 border-[#e4a21a]" />

          {/* Gold diagonal highlight */}
          <div
            className="pointer-events-none absolute -left-6 top-0 z-30 h-full w-[18px] bg-[#dfa01a]"
            style={{
              transform: "skewX(-15deg)",
            }}
          />
        </div>

        <div
          ref={rightContentRef}
          className="absolute right-6 top-[285px] z-40 w-[190px] sm:right-9 sm:top-[300px] sm:w-[220px] lg:-right-[2%] lg:bottom-10 lg:w-60"
        >
          {/* Heading */}
          <div className="flex items-center gap-3">
            <div className="h-[1px] w-8 bg-[#e4a21a]" />

            <span className="text-[9px] tracking-[0.28em] text-white/55 sm:text-[10px]">
              PROJECT CLIENT
            </span>
          </div>

          {/* Current client card */}
          <div className="mt-5 border-t border-white/10 pt-5">
            {/* Logo */}
            <div className="relative flex justify-center items-center h-[65px] w-[125px] sm:h-[75px] sm:w-[145px] bg-white">
              <Image
                src={current.logo}
                alt={current.client}
                fill
                sizes="150px"
                className="object-contain"
              />
            </div>

            {/* Client name */}
            <div className="mt-4 text-[13px] font-medium tracking-[0.08em] text-white sm:text-[15px]">
              {current.client}
            </div>

            {/* Location */}
            <div className="mt-2 text-[9px] tracking-[0.15em] text-[#e3a01a] sm:text-[10px]">
              {current.location}
            </div>
          </div>

          {/* Small slide indicator */}
          <div className="mt-7 flex items-center gap-2">
            <span className="text-[8px] tracking-[0.1em] text-white/35">
              {String(activeSlide + 1).padStart(2, "0")}
            </span>

            {HERO_SLIDES.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-[2px] transition-all duration-500 ${index === activeSlide
                  ? "w-8 bg-[#e4a21a]"
                  : "w-5 bg-white/15"
                  }`}
              />
            ))}

            <span className="text-[8px] tracking-[0.1em] text-white/25">
              04
            </span>
          </div>
        </div>

        <div
          ref={bottomContentRef}
          className="absolute bottom-28 left-1/2 z-40 flex -translate-x-1/2 items-center gap-4 whitespace-nowrap"
        >
          <div className="hidden h-[1px] w-16 bg-[#dca01a] sm:block lg:w-24" />

          <span className="text-[8px] tracking-[0.32em] text-white/65 sm:text-[9px] lg:text-[10px]">
            TRUSTED BY INDUSTRY LEADERS
          </span>

          <div className="hidden h-[1px] w-16 bg-[#dca01a] sm:block lg:w-24" />
        </div>

        <div className="absolute bottom-22 left-1/2 z-50 flex -translate-x-1/2 items-center gap-3">
          {HERO_SLIDES.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              aria-label={`Slide ${index + 1}`}
              className={`rounded-full transition-all duration-500 ${index === activeSlide
                ? "h-3 w-3 bg-[#e4a21a]"
                : "h-2.5 w-2.5 bg-white/20 hover:bg-white/40"
                }`}
            />
          ))}
        </div>
      </div>

      <div className="absolute inset-x-0 top-[110px] z-30 block px-5 sm:hidden">
        {/* Mobile image */}
        <div className="relative h-[310px] w-full">
          {/* Gold border */}
          <div
            className="absolute -left-[10px] -top-[10px] h-[calc(100%+20px)] w-[calc(100%+20px)] bg-[#d99a17]"
            style={{
              clipPath: "polygon(8% 0, 100% 0, 92% 100%, 0 100%)",
            }}
          />

          <div
            className="absolute inset-0 overflow-hidden"
            style={{
              clipPath: "polygon(8% 0, 100% 0, 92% 100%, 0 100%)",
            }}
          >
            <Image
              src={current.image}
              alt={current.client}
              fill
              sizes="100vw"
              priority={activeSlide === 0}
              quality={80}
              className="object-cover"
            />

            <div className="absolute inset-0 bg-black/10" />
          </div>
        </div>

        {/* Mobile project info */}
        <div className="mt-7 grid grid-cols-2 gap-5">
          {/* Left */}
          <div>
            <div className="text-[8px] tracking-[0.22em] text-white/45">
              PROJECT
            </div>

            <div className="mt-2 text-[11px] tracking-[0.1em] text-white">
              {current.client}
            </div>

            <div className="mt-1 text-[8px] tracking-[0.12em] text-[#dfa01a]">
              {current.location}
            </div>

            <div className="mt-4 text-[8px] tracking-[0.15em] text-white/40">
              {current.title}
            </div>

            <div className="mt-1 text-[44px] font-semibold leading-none text-[#dfa01a]">
              {current.amount}
            </div>
          </div>

          {/* Right */}
          <div className="border-l border-white/10 pl-5">
            <div className="text-[8px] tracking-[0.22em] text-white/45">
              CLIENT
            </div>

            <div className="relative mt-3 h-[45px] w-[95px]">
              <Image
                src={current.logo}
                alt={current.client}
                fill
                sizes="100px"
                className="object-contain object-left brightness-0 invert"
              />
            </div>

            <div className="mt-2 text-[10px] font-medium tracking-wide">
              {current.client}
            </div>

            <div className="mt-1 text-[8px] text-[#dfa01a]">
              {current.location}
            </div>
          </div>
        </div>

        {/* Mobile controls */}
        <div className="mt-6 flex items-center justify-between">
          <div className="flex gap-2">
            <button
              onClick={previousSlide}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#dfa01a] bg-[#dfa01a] text-[#061a3d]"
            >
              ←
            </button>

            <button
              onClick={nextSlide}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white"
            >
              →
            </button>
          </div>

          <div className="flex items-center gap-2">
            {HERO_SLIDES.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`rounded-full transition-all ${activeSlide === index
                  ? "h-2.5 w-2.5 bg-[#dfa01a]"
                  : "h-2 w-2 bg-white/20"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}