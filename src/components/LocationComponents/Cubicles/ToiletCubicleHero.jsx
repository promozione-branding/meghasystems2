
"use client";

import { useEffect, useState } from "react";
import DriftWall from "./DriftWall";

const cubicleImages = [
  { image: "/industry/airport.webp", title: "Airport Toilet Cubicles" },
  { image: "/industry/office.webp", title: "Office Toilet Cubicles" },
  { image: "/industry/hospital.webp", title: "Hospital Toilet Cubicles" },
  { image: "/industry/mall.webp", title: "Mall Toilet Cubicles" },
  { image: "/industry/kids.webp", title: "School Toilet Cubicles" },
  { image: "/industry/hotel.webp", title: "Hotel Toilet Cubicles" },
  { image: "/industry/public.webp", title: "Public Toilet Cubicles" },


];

export default function ToiletParitionHero() {
  const [isMobile, setIsMobile] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(0);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 767px)");

    const update = () => {
      setIsMobile(media.matches);
      setViewportWidth(window.innerWidth);
    };
    update();

    media.addEventListener("change", update);
    window.addEventListener("resize", update);

    return () => {
      media.removeEventListener("change", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const tileWidth = isMobile ? 125 : 205;
  const gap = isMobile ? 12 : 20;
  const columns = isMobile
    ? 3
    : Math.max(10, Math.ceil(viewportWidth / ((tileWidth + gap) * 1.18)) + 2);

  return (
    <section className="toilet-hero">

      {/* Animated Image Background */}
      <div className="toilet-hero-wall">
        <DriftWall
          items={cubicleImages}
          columns={columns}
          tileWidth={tileWidth}
          tileHeight={isMobile ? 100 : 145}
          gap={gap}
          tilt={isMobile ? 9 : 16}
          turn={isMobile ? -5 : -12}
          perspective={1200}
          depth={100}
          speed={isMobile ? 20 : 30}
          direction="up"
          variance={0.4}
          parallax={isMobile ? 0 : 0.45}
          className="toilet-hero-drift-wall"
          lift={45}
          fade={0.3}
          dim={0.2}
          overlayColor="transparent"
          radius={16}
          roll={0}
          pauseOnHover={false}
          grayscale={false}
        />
      </div>

      {/* Central Text */}
      <div className="toilet-hero-content">

        <span className="toilet-hero-eyebrow">
          <span />
          PREMIUM RESTROOM SOLUTIONS
          <span />
        </span>

        <h1>
          Toilet <br className="mobile-break" />
          <span>Cubicles Manufacturers</span>
        </h1>

        <p className="toilet-hero-description">
          Modern, durable and beautifully designed toilet cubicle
          solutions for every commercial space.
        </p>

        <div className="toilet-hero-tag">
          <span className="tag-number">01</span>
          <span>TOILET CUBICLE INDUSTRY</span>
        </div>

      </div>

      {/* Bottom decorative text */}
      <div className="toilet-hero-bottom">
        <span>DESIGNED FOR EVERY SPACE</span>
        <span>BUILT TO LAST</span>
      </div>

    </section>
  );
}
