
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
  Search,
  Menu,
  X,
  ChevronDown,
  ArrowUpRight,
  ArrowRight,
  PhoneCall,
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { allProducts } from "@/data";

const GRADIENT =
  "linear-gradient(90deg, #b8c900 0%, #dddf00 35%, #f0f542 65%, #a9c000 100%)";

const SOCIAL_LINKS = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/p/Cubiloo-Cubicles-61593586059881/",
    icon: FaFacebookF,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/cubiloocubicles/",
    icon: FaInstagram,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/917837830803",
    icon: FaWhatsapp,
  },
];

const navItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-us" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "Contact Us", href: "/contact-us" },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] =
    useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const dropdownRef = useRef(null);
  const searchRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 35);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setProductsOpen(false);
    setMobileProductsOpen(false);
    setSearchOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!searchOpen) return;

    const timer = setTimeout(() => {
      inputRef.current?.focus();
    }, 150);

    return () => clearTimeout(timer);
  }, [searchOpen]);

  useEffect(() => {
    const handleOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setProductsOpen(false);
      }

      if (
        searchRef.current &&
        !searchRef.current.contains(event.target)
      ) {
        setSearchOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setProductsOpen(false);
        setSearchOpen(false);
        setMobileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileProductsOpen(false);
  };

  const handleSearch = (event) => {
    event.preventDefault();

    const query = searchValue.trim();
    if (!query) return;

    setSearchOpen(false);
    closeMobile();

    router.push(
      `/products?search=${encodeURIComponent(query)}`
    );
  };

  const isProductsActive = pathname.startsWith("/products");

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="fixed left-0 right-0 top-0 z-[100] px-3 pt-3 sm:px-5 lg:px-8 lg:pt-4"
      >
        <div
          className={`relative mx-auto max-w-[1560px] rounded-[22px] border transition-all duration-500 lg:rounded-[24px] ${scrolled || mobileOpen
            ? "border-white/15 bg-[#111114]/95 shadow-[0_20px_70px_rgba(0,0,0,0.35)] backdrop-blur-2xl"
            : "border-white/10 bg-[#111114]/45 backdrop-blur-xl"
            }`}
        >
          {/* Thin gradient line */}
          <div
            className="pointer-events-none absolute inset-x-10 top-0 h-px opacity-70"
            style={{ background: GRADIENT }}
          />

          {/* DESKTOP */}
          <div className="hidden h-[80px] items-center justify-between gap-5 px-5 lg:flex xl:px-7">
            {/* LOGO */}
            <Link
              href="/"
              aria-label="Cubiloo Cubicles Home"
              className="relative z-20 shrink-0"
            >
              <motion.div
                whileHover={{ scale: 1.035 }}
                transition={{ duration: 0.25 }}
              >
                <img
                  src="/logo.png"
                  alt="Cubiloo Cubicles"
                  width={360}
                  height={105}
                  priority
                  className="h-auto w-[150px] object-contain xl:w-[175px]"
                />
              </motion.div>
            </Link>

            {/* NAV LINKS */}
            <nav className="flex h-full min-w-0 flex-1 items-center justify-center gap-0.5 xl:gap-1">
              <NavItem
                href="/"
                label="Home"
                active={pathname === "/"}
              />

              <NavItem
                href="/about-us"
                label="About Us"
                active={pathname.startsWith("/about-us")}
              />

              {/* PRODUCTS DROPDOWN */}
              <div
                ref={dropdownRef}
                className="relative flex h-full items-center"
                onMouseEnter={() => setProductsOpen(true)}
                onMouseLeave={() => setProductsOpen(false)}
              >
                <button
                  type="button"
                  aria-expanded={productsOpen}
                  aria-haspopup="true"
                  onClick={() =>
                    setProductsOpen((prev) => !prev)
                  }
                  className={`group relative flex h-full items-center gap-1.5 px-3 text-[13px] font-medium transition-colors xl:px-4 xl:text-sm ${isProductsActive || productsOpen
                    ? "text-[#dddf00]"
                    : "text-white/80 hover:text-white"
                    }`}
                >
                  Products

                  <ChevronDown
                    size={15}
                    className={`transition-transform duration-300 ${productsOpen ? "rotate-180" : ""
                      }`}
                  />

                  <span
                    className={`absolute bottom-[20px] left-3 right-3 h-[2px] origin-left transition-transform duration-300 xl:left-4 xl:right-4 ${isProductsActive || productsOpen
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    style={{ background: GRADIENT }}
                  />
                </button>

                <AnimatePresence>
                  {productsOpen && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 12,
                        scale: 0.97,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        scale: 1,
                      }}
                      exit={{
                        opacity: 0,
                        y: 8,
                        scale: 0.97,
                      }}
                      transition={{ duration: 0.22 }}
                      className="absolute left-1/2 top-full z-50 w-[360px] -translate-x-1/2 pt-"
                    >
                      <div className="overflow-hidden rounded-[20px] border border-white/15 bg-[#18181B] p-3 shadow-[0_25px_70px_rgba(0,0,0,0.5)] backdrop-blur-2xl">
                        {/* <div className="mb-2 border-b border-white/10 px-3 pb-3 pt-2">
                          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#dddf00]">
                            Our Collection
                          </p>
                          <h3 className="mt-1 text-lg font-semibold text-white">
                            Explore Products
                          </h3>
                        </div> */}

                        <div className="max-h-[350px] overflow-y-auto">
                          {allProducts.map((product, index) => (
                            <Link
                              key={
                                product.slug ||
                                product.categoryName ||
                                index
                              }
                              href={`/products#${product.slug}`}
                              onClick={() =>
                                setProductsOpen(false)
                              }
                              className="group flex items-center justify-between gap-3 rounded-xl px-3 py-3 transition-colors hover:bg-white/[0.07]"
                            >
                              <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#dddf00]/20 bg-[#dddf00]/10 text-xs font-bold text-[#dddf00]">
                                  {String(index + 1).padStart(
                                    2,
                                    "0"
                                  )}
                                </div>

                                <div>
                                  <p className="text-sm font-semibold text-white">
                                    {product.categoryName}
                                  </p>

                                  {product.description && (
                                    <p className="mt-1 line-clamp-1 text-xs text-white/40">
                                      {product.description}
                                    </p>
                                  )}
                                </div>
                              </div>

                              <ArrowUpRight
                                size={17}
                                className="shrink-0 text-white/40 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#dddf00]"
                              />
                            </Link>
                          ))}
                        </div>

                        <Link
                          href="/products"
                          onClick={() =>
                            setProductsOpen(false)
                          }
                          className="mt-2 flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-bold text-black"
                          style={{ background: GRADIENT }}
                        >
                          View All Products
                          <ArrowUpRight size={18} />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <NavItem
                href="/projects"
                label="Projects"
                active={pathname.startsWith("/projects")}
              />

              <NavItem
                href="/blog"
                label="Blog"
                active={pathname.startsWith("/blog")}
              />

              <NavItem
                href="/contact-us"
                label="Contact"
                active={pathname.startsWith("/contact-us")}
              />
            </nav>

            {/* RIGHT ACTIONS */}
            <div className="flex shrink-0 items-center gap-3">
              <div className="hidden items-center gap-2 2xl:flex">
                {SOCIAL_LINKS.map((social) => (
                  <SocialIcon
                    key={social.label}
                    {...social}
                  />
                ))}
              </div>

              <div className="hidden h-7 w-px bg-white/15 2xl:block" />

              {/* Search */}
              <div ref={searchRef} className="relative">
                <button
                  type="button"
                  aria-label="Search products"
                  aria-expanded={searchOpen}
                  onClick={() =>
                    setSearchOpen((prev) => !prev)
                  }
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition-all hover:border-[#dddf00] hover:text-[#dddf00]"
                >
                  <Search size={19} />
                </button>

                <AnimatePresence>
                  {searchOpen && (
                    <motion.form
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      onSubmit={handleSearch}
                      className="absolute right-0 top-[60px] z-50 w-[320px] rounded-2xl border border-white/15 bg-[#18181B] p-3 shadow-2xl"
                    >
                      <div className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-3">
                        <Search
                          size={17}
                          className="text-[#dddf00]"
                        />

                        <input
                          ref={inputRef}
                          type="search"
                          placeholder="Search products..."
                          value={searchValue}
                          onChange={(event) =>
                            setSearchValue(event.target.value)
                          }
                          className="h-12 min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-white/40"
                        />

                        <button
                          type="submit"
                          aria-label="Submit search"
                          className="text-[#dddf00]"
                        >
                          <ArrowRight size={18} />
                        </button>
                      </div>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>

              {/* CTA */}
              <Link
                href="/contact-us"
                className="group flex items-center gap-3 rounded-full p-1.5 pl-5 text-[13px] font-bold text-black transition-shadow hover:shadow-[0_8px_30px_rgba(221,223,0,0.3)] xl:pl-6 xl:text-sm"
                style={{ background: GRADIENT }}
              >
                Get a Quote

                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight size={18} />
                </span>
              </Link>
            </div>
          </div>

          {/* MOBILE HEADER */}
          <div className="flex h-[70px] items-center justify-between px-4 lg:hidden">
            <Link
              href="/"
              onClick={closeMobile}
              aria-label="Cubiloo Cubicles Home"
            >
              <Image
                src="/cubilo.png"
                alt="Cubiloo Cubicles"
                width={300}
                height={90}
                priority
                className="h-auto w-[155px] object-contain brightness-0 invert sm:w-[175px]"
              />
            </Link>

            <div className="flex items-center gap-2">
              <Link
                href="/contact-us"
                onClick={closeMobile}
                className="hidden h-10 items-center rounded-full border border-[#dddf00]/50 px-4 text-xs font-semibold text-[#dddf00] sm:flex"
              >
                Get a Quote
              </Link>

              <button
                type="button"
                onClick={() =>
                  setMobileOpen((prev) => !prev)
                }
                aria-label={
                  mobileOpen ? "Close menu" : "Open menu"
                }
                aria-expanded={mobileOpen}
                className="flex h-11 w-11 items-center justify-center rounded-xl text-black"
                style={{ background: GRADIENT }}
              >
                {mobileOpen ? (
                  <X size={22} />
                ) : (
                  <Menu size={22} />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMobile}
              className="fixed inset-0 z-[90] bg-black/75 backdrop-blur-sm lg:hidden"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                stiffness: 280,
                damping: 30,
              }}
              className="fixed bottom-0 right-0 top-0 z-[95] w-full max-w-[390px] overflow-y-auto border-l border-white/10 bg-[#111114] px-6 pb-8 pt-[110px] lg:hidden"
            >
              <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#dddf00]">
                Navigation
              </p>

              <div className="space-y-1">
                <MobileNavLink
                  href="/"
                  label="Home"
                  onClick={closeMobile}
                  active={pathname === "/"}
                />

                <MobileNavLink
                  href="/about-us"
                  label="About Us"
                  onClick={closeMobile}
                  active={pathname.startsWith("/about-us")}
                />

                {/* Products Accordion */}
                <div className="border-b border-white/10">
                  <button
                    type="button"
                    onClick={() =>
                      setMobileProductsOpen((prev) => !prev)
                    }
                    aria-expanded={mobileProductsOpen}
                    className="flex w-full items-center justify-between py-4 text-lg font-medium text-white"
                  >
                    Products

                    <ChevronDown
                      size={20}
                      className={`text-[#dddf00] transition-transform duration-300 ${mobileProductsOpen
                        ? "rotate-180"
                        : ""
                        }`}
                    />
                  </button>

                  <AnimatePresence>
                    {mobileProductsOpen && (
                      <motion.div
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        className="overflow-hidden"
                      >
                        <div className="mb-3 rounded-xl bg-white/[0.04] p-3">
                          {allProducts.map(
                            (product, index) => (
                              <Link
                                key={
                                  product.slug ||
                                  product.categoryName ||
                                  index
                                }
                                href={`/products#${product.slug}`}
                                onClick={closeMobile}
                                className="flex items-center justify-between gap-3 rounded-lg px-3 py-3 text-sm text-white/65 transition-colors hover:bg-white/5 hover:text-[#dddf00]"
                              >
                                {product.categoryName}
                                <ArrowUpRight size={15} />
                              </Link>
                            )
                          )}

                          <Link
                            href="/products"
                            onClick={closeMobile}
                            className="mt-2 flex items-center justify-between rounded-lg px-3 py-3 text-sm font-semibold text-[#dddf00]"
                          >
                            View All Products
                            <ArrowRight size={16} />
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <MobileNavLink
                  href="/projects"
                  label="Projects"
                  onClick={closeMobile}
                  active={pathname.startsWith("/projects")}
                />

                <MobileNavLink
                  href="/blog"
                  label="Blog"
                  onClick={closeMobile}
                  active={pathname.startsWith("/blog")}
                />

                <MobileNavLink
                  href="/contact-us"
                  label="Contact Us"
                  onClick={closeMobile}
                  active={pathname.startsWith("/contact-us")}
                />
              </div>

              {/* Mobile Search */}
              <form
                onSubmit={handleSearch}
                className="relative mt-8"
              >
                <Search
                  size={19}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#dddf00]"
                />

                <input
                  type="search"
                  placeholder="Search products..."
                  value={searchValue}
                  onChange={(event) =>
                    setSearchValue(event.target.value)
                  }
                  className="h-14 w-full rounded-xl border border-white/15 bg-white/5 pl-12 pr-4 text-sm text-white outline-none placeholder:text-white/40 focus:border-[#dddf00]"
                />
              </form>

              {/* Mobile CTA */}
              <Link
                href="/contact-us"
                onClick={closeMobile}
                className="mt-6 flex h-14 items-center justify-center gap-3 rounded-xl text-sm font-bold text-black"
                style={{ background: GRADIENT }}
              >
                <PhoneCall size={18} />
                Request a Quote
                <ArrowUpRight size={18} />
              </Link>

              {/* Social Links */}
              <div className="mt-8 border-t border-white/10 pt-6">
                <p className="mb-4 text-[11px] uppercase tracking-[0.2em] text-white/40">
                  Follow Cubiloo
                </p>

                <div className="flex items-center gap-3">
                  {SOCIAL_LINKS.map((social) => (
                    <SocialIcon
                      key={social.label}
                      {...social}
                    />
                  ))}
                </div>
              </div>

              <p className="mt-10 text-xs text-white/30">
                © {new Date().getFullYear()} Cubiloo Cubicles.
                All rights reserved.
              </p>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

function NavItem({ href, label, active }) {
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={`group relative flex h-full shrink-0 items-center px-3 text-[13px] font-medium transition-colors duration-300 xl:px-4 xl:text-sm ${active
        ? "text-[#dddf00]"
        : "text-white/80 hover:text-white"
        }`}
    >
      {label}

      <span
        className={`absolute bottom-[20px] left-3 right-3 h-[2px] origin-left transition-transform duration-300 xl:left-4 xl:right-4 ${active
          ? "scale-x-100"
          : "scale-x-0 group-hover:scale-x-100"
          }`}
        style={{ background: GRADIENT }}
      />
    </Link>
  );
}

function MobileNavLink({
  href,
  label,
  onClick,
  active,
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      aria-current={active ? "page" : undefined}
      className={`flex items-center justify-between border-b border-white/10 py-4 text-lg font-medium transition-colors ${active
        ? "text-[#dddf00]"
        : "text-white hover:text-[#dddf00]"
        }`}
    >
      {label}

      <ArrowUpRight
        size={19}
        className={
          active ? "text-[#dddf00]" : "text-white/40"
        }
      />
    </Link>
  );
}

function SocialIcon({ href, label, icon: Icon }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      whileHover={{
        y: -3,
        scale: 1.07,
      }}
      whileTap={{ scale: 0.95 }}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-sm text-white transition-colors duration-300 hover:border-[#dddf00] hover:bg-[#dddf00] hover:text-black"
    >
      <Icon />
    </motion.a>
  );
}
