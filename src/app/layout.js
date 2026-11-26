import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import StickyContactButton from "@/components/StickyContactButton";
import EnquiryPopupProvider from "@/components/EnquiryPopupProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "LocalBusiness"],
      "@id": "https://www.cubiloocubicles.com/#organization",
      name: "Cubiloo Cubicles",
      url: "https://www.cubiloocubicles.com/",
      logo: {
        "@type": "ImageObject",
        url: "https://www.cubiloocubicles.com/logo.png",
      },
      image: "https://www.cubiloocubicles.com/new1.webp",
      description:
        "Since 2000, Cubiloo Cubicles has designed, made and installed toilet cubicles, restroom partitions and urinal panels for offices, malls, schools and airports.",
      foundingDate: "2000",
      telephone: "+91-9797977832",
      email: "cubiloocubicles@gmail.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "11th Floor, Urbtech Trade Centre, Block B, Sector 132",
        addressLocality: "Noida",
        addressRegion: "Uttar Pradesh",
        postalCode: "201304",
        addressCountry: "IN",
      },
      areaServed: {
        "@type": "Country",
        name: "India",
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+91-9797977832",
          contactType: "sales",
          areaServed: "IN",
        },
        {
          "@type": "ContactPoint",
          telephone: "+91-7837830803",
          contactType: "customer service",
          areaServed: "IN",
        },
      ],
      sameAs: [
        "https://www.facebook.com/p/Cubiloo-Cubicles-61593586059881/",
        "https://www.instagram.com/cubiloocubicles/",
      ],
      knowsAbout: [
        "Toilet cubicles",
        "Restroom partitions",
        "Urinal modesty panels",
        "Washroom cubicle hardware",
        "Commercial washroom installation",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.cubiloocubicles.com/#website",
      url: "https://www.cubiloocubicles.com/",
      name: "Cubiloo Cubicles",
      inLanguage: "en-IN",
      publisher: {
        "@id": "https://www.cubiloocubicles.com/#organization",
      },
    },
    {
      "@type": "WebPage",
      "@id": "https://www.cubiloocubicles.com/#webpage",
      url: "https://www.cubiloocubicles.com/",
      name: "Toilet Cubicle Manufacturer in India | Cubiloo Cubicles",
      description:
        "Since 2000, Cubiloo Cubicles has designed, made and installed toilet cubicles, restroom partitions and urinal panels for offices, malls, schools and airports.",
      inLanguage: "en-IN",
      isPartOf: {
        "@id": "https://www.cubiloocubicles.com/#website",
      },
      about: {
        "@id": "https://www.cubiloocubicles.com/#organization",
      },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: "https://www.cubiloocubicles.com/new1.webp",
      },
    },
    {
      "@type": "Service",
      "@id": "https://www.cubiloocubicles.com/#service",
      name: "Toilet Cubicle Design, Manufacturing & Installation",
      serviceType: "Toilet cubicle and restroom partition supply and installation",
      description:
        "Complete restroom solutions covering site study, design drawings, precision manufacturing, installation and quality check for commercial and institutional washrooms.",
      provider: {
        "@id": "https://www.cubiloocubicles.com/#organization",
      },
      areaServed: {
        "@type": "Country",
        name: "India",
      },
      audience: {
        "@type": "BusinessAudience",
        audienceType:
          "Corporate offices, hotels, malls, schools, airports, factories, restaurants and stadiums",
      },
    },
    {
      "@type": "ItemList",
      "@id": "https://www.cubiloocubicles.com/#product-range",
      name: "Cubiloo Toilet Cubicle Product Range",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Cubiloo Neo",
          url: "https://www.cubiloocubicles.com/products/neo",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Cubiloo Maxi",
          url: "https://www.cubiloocubicles.com/products/maxi",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Cubiloo Maxi Pro",
          url: "https://www.cubiloocubicles.com/products/maxi-pro",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Cubiloo Duro",
          url: "https://www.cubiloocubicles.com/products/duro",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Cubiloo Duro Pro",
          url: "https://www.cubiloocubicles.com/products/duro-pro",
        },
        {
          "@type": "ListItem",
          position: 6,
          name: "Cubiloo Luron",
          url: "https://www.cubiloocubicles.com/products/luron",
        },
        {
          "@type": "ListItem",
          position: 7,
          name: "Cubiloo Cubi Doorz",
          url: "https://www.cubiloocubicles.com/products/cubic-doorz",
        },
        {
          "@type": "ListItem",
          position: 8,
          name: "Cubiloo Kiddiez",
          url: "https://www.cubiloocubicles.com/products/kiddiez",
        },
        {
          "@type": "ListItem",
          position: 9,
          name: "Cubiloo Kiddiez Pro",
          url: "https://www.cubiloocubicles.com/products/kiddiez-pro",
        },
        {
          "@type": "ListItem",
          position: 10,
          name: "Cubiloo Urinal Modesty Panels",
          url: "https://www.cubiloocubicles.com/products/urinal-modesty-panels",
        },
      ],
    },
  ],
};

export const metadata = {
  title: "Cubiloo Cubicles | Toilet Cubicles & Restroom Partitions",
  description:
    "Explore toilet cubicles, restroom partitions, and washroom solutions by Cubiloo Cubicles.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} h-full antialiased`}
    >
      <head>
        <link rel="canonical" href="https://www.cubiloocubicles.com/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Castoro:ital,wght@0,400..700;1,400..700&family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Castoro:ital,wght@0,400..700;1,400..700&family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap');
        </style>
      </head>
      <body className="min-h-full flex flex-col">
        <SmoothScroll />
        <StickyContactButton />
        <Navbar />
        {children}
        <Footer />
        <EnquiryPopupProvider />
      </body>
    </html>
  );
}