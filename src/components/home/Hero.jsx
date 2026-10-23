"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const HERO_SLIDES = [
  {
    id: 1,
    desktop: "/banner1.png",
    mobile: "/banner/apple-mobile.webp",
    alt: "Apple Mumbai BKC Toilet Cubicles",
  },
  // {
  //   id: 2,
  //   desktop: "/banner2.png",
  //   mobile: "/banner/maruti-mobile.webp",
  //   alt: "Maruti Suzuki Kharkhoda Toilet Cubicles",
  // },
  // {
  //   id: 3,
  //   desktop: "/banner/mcdonalds-desktop.webp",
  //   mobile: "/banner/mcdonalds-mobile.webp",
  //   alt: "McDonald's Toilet Cubicles",
  // },
  // {
  //   id: 4,
  //   desktop: "/banner/oppo-desktop.webp",
  //   mobile: "/banner/oppo-mobile.webp",
  //   alt: "OPPO Kasna Factory Toilet Cubicles",
  // },
];

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop={true}
        speed={1000}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
        }}
        className="hero-banner-swiper w-full"
      >
        {HERO_SLIDES.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full">
              {/* Desktop banner */}
              <div className="relative hidden w-full aspect-[1920/800] md:block">
                <Image
                  src={slide.desktop}
                  alt={slide.alt}
                  fill
                  priority={index === 0}
                  sizes="100vw"
                  className="object-cover"
                />
              </div>

              {/* Mobile banner */}
              <div className="relative block w-full aspect-[380/480] md:hidden">
                <Image
                  src={slide.mobile}
                  alt={slide.alt}
                  fill
                  priority={index === 0}
                  quality={90}
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .hero-banner-swiper .swiper-pagination {
          bottom: 18px !important;
          z-index: 20;
        }

        .hero-banner-swiper .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: #ffffff;
          opacity: 0.5;
          transition: all 0.3s ease;
        }

        .hero-banner-swiper .swiper-pagination-bullet-active {
          width: 26px;
          border-radius: 20px;
          background: #ffffff;
          opacity: 1;
        }

        @media (max-width: 767px) {
          .hero-banner-swiper .swiper-pagination {
            bottom: 12px !important;
          }
        }
      `}</style>
    </section>
  );
}