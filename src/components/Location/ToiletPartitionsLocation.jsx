import React from 'react'
import Hero from '../LocationComponents/Paritions/Hero'
import ToiletParitionIntro from '../LocationComponents/Paritions/ToiletParitionIntro'
import Categories from '../home/Categories'
import Partners from '../home/Partners'
import ToiletParitionsAbout from '../LocationComponents/Paritions/ToiletParitionsAbout'
import WhyChooseUs from '../LocationComponents/Paritions/WhyChooseUs'
import ProductShowcase from '../home/ProductShowcase'
import FormSection from '../LocationComponents/Paritions/FormSection'
import FAQSection from '../LocationComponents/Paritions/FAQSection'
import ToiletPartitionSupplyNetwork from '../LocationComponents/Paritions/ToiletPartitionSupplyNetwork'
import Products from '../LocationComponents/Cubicles/Products'

export default function ToiletPartitionsLocation({city}) {
  return (
    <>
    <Hero city={city}/>
    <ToiletParitionIntro city={city}/>
    <Products />
     <Partners />
    <ToiletParitionsAbout city={city}/>
    <WhyChooseUs city={city}/>
     <ProductShowcase />
     <FormSection city={city} />
     <ToiletPartitionSupplyNetwork/>
     <FAQSection city={city} />
    </>
  )
}
