"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  Search,
  Menu,
  X,
  ChevronDown,
  ArrowUpRight,
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { allProducts } from "@/data";

const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/meghasystems/",
  linkedin: "https://in.linkedin.com/company/meghasystems",
  instagram: "https://www.instagram.com/megha_systems_restroomcubicles",
  whatsapp: "https://wa.me/919873735716",
};

const mobileProducts = [
  {
    title: "Restroom Cubicles",
    href: "/products#restroom-cubicles",
  },
  {
    title: "Office Partitions",
    href: "/products#office-partitions",
  },
  {
    title: "Workstations",
    href: "/products#workstations",
  },
  {
    title: "Toilet Partitions",
    href: "/products#toilet-partitions",
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [scrolled, setScrolled] = useState(false);

  const searchRef = useRef(null);
  const inputRef = useRef(null);

  // Transparent at the top; white after scrolling.
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!searchOpen) return;

    const timer = setTimeout(() => {
      inputRef.current?.focus();
    }, 150);

    return () => clearTimeout(timer);
  }, [searchOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target)
      ) {
        setSearchOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setSearchOpen(false);
        setProductsOpen(false);
        setMobileOpen(false);
        setMobileProductsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileProductsOpen(false);
  };

  const handleSearch = (event) => {
    event.preventDefault();

    const query = searchValue.trim();

    if (!query) return;

    window.location.href = `/products?search=${encodeURIComponent(query)}`;
    setSearchOpen(false);
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`fixed left-0 right-0 top-0 z-[100] px-2 transition-[background-color,box-shadow,backdrop-filter] duration-500 ${scrolled
        ? "bg-white/95 shadow-[0_8px_30px_rgba(7,26,61,0.10)] backdrop-blur-md"
        : "bg-transparent shadow-none"
        }`}
    >
      <div
        className={`overflow-visible transition-colors duration-500 ${scrolled ? "bg-white/95" : "bg-transparent"
          }`}
      >
        {/* DESKTOP HEADER */}
        <div className="relative hidden h-[88px] items-center justify-between gap-4 overflow-visible px-3 lg:flex xl:px-5">
          {/* Decorative background */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 overflow-hidden"
          />

          {/* LOGO */}
          <Link
            href="/"
            aria-label="Megha Systems home"
            className="relative z-30 shrink-0"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.25 }}
            >
              <Image
                src="/cubilo.png"
                alt="MEGHA SYSTEMS"
                width={360}
                height={105}
                priority
                className="h-auto w-[155px] object-contain xl:w-[190px] 2xl:w-[215px]"
              />
            </motion.div>
          </Link>

          {/* NAVIGATION */}
          <nav className="relative z-30 flex h-full min-w-0 flex-1 items-center justify-center">
            <NavLink href="/" label="Home" />

            <NavLink href="/about-us" label="About Us" />

            {/* PRODUCTS DROPDOWN */}
            <div
              className="relative flex h-full shrink-0 items-center"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <button
                type="button"
                aria-expanded={productsOpen}
                onClick={() => setProductsOpen((prev) => !prev)}
                className="group relative flex h-full items-center gap-1 px-3 text-[12px] font-semibold text-[#182640] transition-colors hover:text-[#c99618] xl:px-4 xl:text-[15px]"
              >
                Products

                <ChevronDown
                  size={14}
                  className={`transition-transform duration-300 ${productsOpen ? "rotate-180" : ""
                    }`}
                />

                <span className="absolute bottom-6 left-3 right-3 h-[3px] origin-left scale-x-0 bg-[#c99618] transition-transform duration-300 group-hover:scale-x-100 xl:left-4 xl:right-4" />
              </button>

              <AnimatePresence>
                {productsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.22 }}
                    className="absolute left-0 top-15 z-50 w-[310px] pt-3 xl:w-[330px]"
                  >
                    <div className="rounded-xl border border-gray-100 bg-white p-2 shadow-[0_25px_70px_rgba(7,26,61,0.16)]">
                      {allProducts.map((product) => (
                        <ProductItem
                          key={product.categoryName}
                          {...product}
                        />
                      ))}

                      <Link
                        href="/products"
                        onClick={() => setProductsOpen(false)}
                        className="group mt-1 flex items-center justify-between rounded-lg bg-[linear-gradient(90deg,rgba(239,172,57,1)_0%,rgba(229,139,59,1)_38%,rgba(223,117,57,1)_72%,rgba(216,85,56,1)_100%)] px-4 py-3.5 text-white"
                      >
                        <div>
                          <p className="text-sm font-semibold">
                            View All Products
                          </p>
                          <p className="mt-0.5 text-[10px] text-white/70">
                            Explore our complete range
                          </p>
                        </div>

                        <ArrowUpRight
                          size={16}
                          className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                        />
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <NavLink href="/projects" label="Projects" />
            <NavLink href="/blog" label="Blog" />
            <NavLink href="/contact-us" label="Contact Us" />
          </nav>

          {/* SOCIAL ICONS */}
          <div className="relative z-30 flex shrink-0 items-center gap-1.5 xl:gap-2">
            <SocialIcon
              href={SOCIAL_LINKS.facebook}
              label="Facebook"
            >
              <FaFacebookF />
            </SocialIcon>

            <SocialIcon
              href={SOCIAL_LINKS.instagram}
              label="Instagram"
            >
              <FaInstagram />
            </SocialIcon>

            <SocialIcon
              href={SOCIAL_LINKS.linkedin}
              label="LinkedIn"
            >
              <FaLinkedinIn />
            </SocialIcon>

            <SocialIcon
              href={SOCIAL_LINKS.whatsapp}
              label="WhatsApp"
            >
              <FaWhatsapp />
            </SocialIcon>
          </div>
        </div>

        {/* MOBILE HEADER */}
        <div className="flex h-[76px] items-center justify-between px-4 lg:hidden">
          <Link
            href="/"
            onClick={closeMobile}
            aria-label="Megha Systems home"
          >
            <Image
              src="/cubilo.png"
              alt="MEGHA SYSTEMS"
              width={300}
              height={90}
              priority
              className="h-auto w-[170px] object-contain sm:w-[190px]"
            />
          </Link>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-[#d95538] text-white shadow-lg"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden border-t border-gray-100 bg-white lg:hidden"
            >
              <div className="px-5 py-5">
                <MobileLink
                  href="/"
                  label="Home"
                  onClick={closeMobile}
                />

                <MobileLink
                  href="/about-us"
                  label="About Us"
                  onClick={closeMobile}
                />

                {/* MOBILE PRODUCTS */}
                <button
                  type="button"
                  onClick={() =>
                    setMobileProductsOpen((prev) => !prev)
                  }
                  aria-expanded={mobileProductsOpen}
                  className="flex w-full items-center justify-between border-b border-gray-100 py-4 text-sm font-semibold text-[#182640]"
                >
                  Products

                  <ChevronDown
                    size={17}
                    className={`transition-transform ${mobileProductsOpen ? "rotate-180" : ""
                      }`}
                  />
                </button>

                <AnimatePresence>
                  {mobileProductsOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      {mobileProducts.map((product) => (
                        <Link
                          key={product.title}
                          href={product.href}
                          onClick={closeMobile}
                          className="flex items-center justify-between py-3 pl-4 text-sm text-gray-500 transition-colors hover:text-[#c99618]"
                        >
                          {product.title}
                          <ArrowUpRight size={14} />
                        </Link>
                      ))}

                      <Link
                        href="/products"
                        onClick={closeMobile}
                        className="flex items-center justify-between py-3 pl-4 text-sm font-semibold text-[#d95538]"
                      >
                        View All Products
                        <ArrowUpRight size={14} />
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>

                <MobileLink
                  href="/projects"
                  label="Projects"
                  onClick={closeMobile}
                />

                <MobileLink
                  href="/blog"
                  label="Blog"
                  onClick={closeMobile}
                />

                <MobileLink
                  href="/contact-us"
                  label="Contact Us"
                  onClick={closeMobile}
                />

                {/* MOBILE SEARCH */}
                <form onSubmit={handleSearch} className="relative mt-6">
                  <Search
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    type="search"
                    value={searchValue}
                    onChange={(event) =>
                      setSearchValue(event.target.value)
                    }
                    placeholder="Search products..."
                    className="h-12 w-full rounded-xl border border-gray-200 bg-gray-50 pl-11 pr-4 text-sm outline-none focus:border-[#c99618]"
                  />
                </form>

                {/* MOBILE SOCIAL ICONS */}
                <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-5">
                  <span className="text-[9px] uppercase tracking-[0.2em] text-gray-400">
                    Follow us
                  </span>

                  <div className="flex gap-2">
                    <SocialIcon
                      href={SOCIAL_LINKS.facebook}
                      label="Facebook"
                    >
                      <FaFacebookF />
                    </SocialIcon>

                    <SocialIcon
                      href={SOCIAL_LINKS.instagram}
                      label="Instagram"
                    >
                      <FaInstagram />
                    </SocialIcon>

                    <SocialIcon
                      href={SOCIAL_LINKS.linkedin}
                      label="LinkedIn"
                    >
                      <FaLinkedinIn />
                    </SocialIcon>

                    <SocialIcon
                      href={SOCIAL_LINKS.whatsapp}
                      label="WhatsApp"
                    >
                      <FaWhatsapp />
                    </SocialIcon>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}

function NavLink({ href, label, active = false }) {
  return (
    <Link
      href={href}
      className={`group relative flex h-full shrink-0 items-center px-3 text-[12px] font-semibold transition-all duration-300 xl:px-4 xl:text-[15px] ${active
        ? "bg-[#d95538] text-white"
        : "text-[#182640] hover:text-[#c99618]"
        }`}
    >
      {label}

      {!active && (
        <span className="absolute bottom-6 left-3 right-3 h-[3px] origin-left scale-x-0 bg-[#c99618] transition-transform duration-300 group-hover:scale-x-100 xl:left-4 xl:right-4" />
      )}
    </Link>
  );
}

function ProductItem({ categoryName, description, slug }) {
  return (
    <Link
      href={`/products#${slug}`}
      className="group flex items-center justify-between rounded-lg px-4 py-3.5 transition-colors hover:bg-[#f8f6f1]"
    >
      <div>
        <p className="text-sm font-semibold text-[#182640]">
          {categoryName}
        </p>

        <p className="mt-0.5 text-[10px] text-gray-400">
          {description}
        </p>
      </div>

      <ArrowUpRight
        size={15}
        className="text-gray-400 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#c99618]"
      />
    </Link>
  );
}

function SocialIcon({ href, label, children }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      whileHover={{ y: -3, scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-[#e17e3a] text-[14px] text-[#e17e3a] transition-all duration-300 hover:border-[#e17e3a] hover:bg-[#e17e3a] hover:text-white xl:h-10 xl:w-10 xl:text-[15px]"
    >
      {children}
    </motion.a>
  );
}

function MobileLink({ href, label, onClick }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="flex items-center justify-between border-b border-gray-100 py-4 text-sm font-semibold text-[#182640] transition-colors hover:text-[#c99618]"
    >
      {label}

      <ArrowUpRight size={15} className="text-[#c99618]" />
    </Link>
  );
}