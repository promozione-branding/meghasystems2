"use client"
import AboutSection from "@/components/home/AboutSection";
import Categories from "@/components/home/Categories";
import Certificates from "@/components/home/Certificates";
import ClientSlider from "@/components/home/ClientSlider";
import CTASection from "@/components/home/CTASection";
import CubicleDetails from "@/components/home/CubicleDetails";
import FAQSection from "@/components/home/FAQSection";
import FormSection from "@/components/home/FormSection";
import Hardware from "@/components/home/Hardware";
import HeroSection from "@/components/home/HeroSection";
import HowWeWork from "@/components/home/HowWeWork";
import IndustriesWeServe from "@/components/home/Industries";
import ParallaxCTA from "@/components/home/ParallaxCTA";
import Partners from "@/components/home/Partners";
import ProductShowcase from "@/components/home/ProductShowcase";
import ProductsSection from "@/components/home/ProductsSection";
import Projects from "@/components/home/Projects";
import Testimonials from "@/components/home/Testimonials";
import WhyChooseUs from "@/components/home/WhyChooseUs";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Categories />
      <Partners />
      <AboutSection />
      <HowWeWork />
      <ProductShowcase />
      {/* <ProductsSection /> */}
      <Hardware />
      <FormSection />
      {/* <Certificates /> */}
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
