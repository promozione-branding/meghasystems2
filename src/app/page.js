"use client"
import AboutSection from "@/components/home/AboutSection";
import Categories from "@/components/home/Categories";
import Certificates from "@/components/home/Certificates";
import ClientSlider from "@/components/home/ClientSlider";
import CTASection from "@/components/home/CTASection";
import CubicleDetails from "@/components/home/CubicleDetails";
import FAQSection from "@/components/home/FAQSection";
import FormSection from "@/components/home/FormSection";
import HeroSection from "@/components/home/Hero";
import HowWeWork from "@/components/home/HowWeWork";
import IndustriesWeServe from "@/components/home/Industries";
import ParallaxCTA from "@/components/home/ParallaxCTA";
import Partners from "@/components/home/Partners";
import ProductsSection from "@/components/home/ProductsSection";
import Projects from "@/components/home/Projects";
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
      <FormSection />
      <Certificates />
      <HowWeWork />
      <ClientSlider />
      <ParallaxCTA />
      <IndustriesWeServe />
      <CubicleDetails />
      <WhyChooseUs />
      <Projects />
      <CTASection />
      <Testimonials />
      <FAQSection />
    </div>
  );
}
