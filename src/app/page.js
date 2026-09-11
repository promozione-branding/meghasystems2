"use client"
import AboutSection from "@/components/home/AboutSection";
import Categories from "@/components/home/Categories";
import Certificates from "@/components/home/Certificates";
import ClientSlider from "@/components/home/ClientSlider";
import HeroSection from "@/components/home/Hero";
import HowWeWork from "@/components/home/HowWeWork";
import Partners from "@/components/home/Partners";
import ProductsSection from "@/components/home/ProductsSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Categories />
      <Partners />
      <AboutSection />
      <ProductsSection />
      <Certificates />
      <HowWeWork />
      <ClientSlider />
    </div>
  );
}
