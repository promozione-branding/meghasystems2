"use client"
import AboutSection from "@/components/home/AboutSection";
import Categories from "@/components/home/Categories";
import Certificates from "@/components/home/Certificates";
import ClientSlider from "@/components/home/ClientSlider";
import CTASection from "@/components/home/CTASection";
import CubicleDetails from "@/components/home/CubicleDetails";
import FAQSection from "@/components/home/FAQSection";
import HeroSection from "@/components/home/Hero";
import HowWeWork from "@/components/home/HowWeWork";
import Partners from "@/components/home/Partners";
import ProductsSection from "@/components/home/ProductsSection";
import Testimonials from "@/components/home/Testimonials";
import WhyChooseUs from "@/components/home/WhyChooseUs";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Categories />
      <AboutSection />
      <Partners />
      <ProductsSection />
      <Certificates />
      <HowWeWork />
      <ClientSlider />
      <CubicleDetails />
      <WhyChooseUs />
      <Testimonials />
      <FAQSection />
      <CTASection />
    </div>
  );
}
