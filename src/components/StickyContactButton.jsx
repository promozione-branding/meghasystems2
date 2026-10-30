


import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";

export default function StickyContactButton() {
  return (
    <div className="fixed bottom-6 right-5 z-[999] flex items-center gap-3 sm:bottom-8 sm:right-8">

      {/* Contact Us Button */}
      <Link
        href="/contact-us"
        className="group relative flex items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-[#222] shadow-[0_4px_20px_rgba(0,0,0,0.16)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
      >
      <FiPhoneCall size={17} className="text-red-500" />  Call us 

        {/* Arrow */}
        <span className="absolute -right-[7px] top-1/2 h-3.5 w-3.5 -translate-y-1/2 rotate-45 bg-white" />
      </Link>

      {/* WhatsApp Button */}
      <Link
        href="https://wa.me/917837830803"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="relative flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_5px_20px_rgba(37,211,102,0.35)] transition-all duration-300 hover:scale-110 hover:bg-[#20bd5a]"
      >
        <FaWhatsapp className="text-[26px]" />

        {/* Pulse animation */}
        
      </Link>
    </div>
  );
}
