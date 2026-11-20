"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaWhatsapp } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { RiFileDownloadLine } from "react-icons/ri";


export default function StickyContactButton() {
  const pathname = usePathname();
  if (pathname.startsWith("/admin")) {
    return null; // Don't render the navbar on admin or dashboard pages
  }
  return (
    <div className="fixed bottom-6 right-5 z-[999] flex items-center gap-3 sm:bottom-8 sm:right-8">

      <div className="flex flex-col gap-2">

      {/* Contact Us Button */}
       {/* Download Catalog */}
        <a
          href="/Brochure.pdf"
          download
          aria-label="Download brochure"
          title="Download brochure"
        className="group relative flex items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-[#222] shadow-[0_4px_20px_rgba(0,0,0,0.16)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          <RiFileDownloadLine size={17} className="text-red-500" />
          Brochure
                  <span className="absolute -right-[7px] top-1/2 h-3.5 w-3.5 -translate-y-1/2 rotate-45 bg-white" />

        </a>
      <Link
        href="/contact-us"
        className="group relative flex items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-[#222] shadow-[0_4px_20px_rgba(0,0,0,0.16)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
      >
        <FiPhoneCall size={17} className="text-red-500" />  Call us

        {/* Arrow */}
        <span className="absolute -right-[7px] top-1/2 h-3.5 w-3.5 -translate-y-1/2 rotate-45 bg-white" />
      </Link>

      </div>

      <div className="flex flex-col items-center gap-3">
       

        {/* WhatsApp Button */}
        <Link
          href="https://wa.me/917837830803"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          className="relative flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_5px_20px_rgba(37,211,102,0.35)] transition-all duration-300 hover:scale-110 hover:bg-[#20bd5a]"
        >
          <FaWhatsapp className="text-[26px]" />
        </Link>
      </div>
    </div>
  );
}
