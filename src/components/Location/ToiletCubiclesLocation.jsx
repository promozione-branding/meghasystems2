import React from 'react'
import Hero from '../LocationComponents/Cubicles/Hero'
import ToiletCubicleIntro from '../LocationComponents/Cubicles/ToiletCubicleIntro'
import Categories from '../home/Categories'
import Partners from '../home/Partners'
import ToiletCubicleAbout from '../LocationComponents/Cubicles/ToiletCubicleAbout'
import WhyChooseUs from '../LocationComponents/Cubicles/WhyChooseUs'
import FormSection from '../LocationComponents/Cubicles/FormSection'
import FAQSection from '../LocationComponents/Cubicles/FAQSection'
import ProductShowcase from '../home/ProductShowcase'

export default function ToiletCubiclesLocation({city}) {
  return (
    <>
    <Hero city={city} />
    <ToiletCubicleIntro city={city} />
      <Categories />
       <Partners />
       <ToiletCubicleAbout city={city}/>
       <WhyChooseUs city={city}/>
       <ProductShowcase />
       <FormSection city={city}/>
       <FAQSection city={city}/>

    </>
  )
}
