
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaWhatsapp } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { RiFileDownloadLine } from "react-icons/ri";

export default function StickyContactButton() {
  const pathname = usePathname();

  if (pathname.startsWith("/admin")) return null;

  const buttonStyle =
    "group flex h-12 w-12 items-center justify-center gap-2 overflow-hidden rounded-full bg-white text-[#222] shadow-lg transition-all duration-300 ease-in-out hover:w-36 hover:rounded-full hover:justify-start hover:px-4";

  return (
    <div className="fixed bottom-6 right-4 z-[999] flex flex-col items-end gap-3 sm:bottom-8 sm:right-8">

      <a
        href="/Brochure.pdf"
        download
        aria-label="Download brochure"
        className={buttonStyle}
      >
        <RiFileDownloadLine size={20} className="shrink-0 text-red-500" />
        <span className="hidden whitespace-nowrap text-sm font-semibold group-hover:block">
          Brochure
        </span>
      </a>

      <Link
        href="tel:+919797977832"
        aria-label="Call us"
        className={buttonStyle}
      >
        <FiPhoneCall size={20} className="shrink-0 text-red-500" />
        <span className="hidden whitespace-nowrap text-sm font-semibold group-hover:block">
          Call us
        </span>
      </Link>

      <Link
        href="https://wa.me/917837830803"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group flex h-12 w-12 items-center justify-center gap-2 overflow-hidden rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 ease-in-out hover:w-36 hover:justify-start hover:rounded-full hover:bg-[#20bd5a] hover:px-4"
      >
        <FaWhatsapp size={25} className="shrink-0" />
        <span className="hidden whitespace-nowrap text-sm font-semibold group-hover:block">
          WhatsApp
        </span>
      </Link>

    </div>
  );
}
