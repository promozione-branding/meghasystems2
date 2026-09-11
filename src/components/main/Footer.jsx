"use client";

import React from "react";
import {
    FiArrowUpRight,
    FiMapPin,
    FiPhone,
    FiMail,
} from "react-icons/fi";
import {
    FaInstagram,
    FaFacebookF,
    FaLinkedinIn,
} from "react-icons/fa";

const LOGO_SRC = "/1.png";

const FOOTER_LINKS = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Products", href: "/products" },
    { label: "Projects", href: "/projects" },
    { label: "Certificates", href: "/certificates" },
    { label: "Contact Us", href: "/contact" },
];

const PRODUCT_LINKS = [
    { label: "Toilet Cubicles", href: "/products/toilet-cubicles" },
    { label: "Classic Range", href: "/products/classic-range" },
    { label: "Luxe Range", href: "/products/luxe-range" },
    { label: "Kids Range", href: "/products/kids-range" },
    { label: "Urinal Partitions", href: "/products/urinal-partitions" },
];

const SOCIAL_LINKS = [
    {
        label: "Instagram",
        href: "https://www.instagram.com/megha_systems_restroomcubicles",
        icon: FaInstagram,
    },
    {
        label: "Facebook",
        href: "https://www.facebook.com/meghasystems/",
        icon: FaFacebookF,
    },
    {
        label: "LinkedIn",
        href: "https://in.linkedin.com/company/meghasystems",
        icon: FaLinkedinIn,
    },
];

export default function Footer() {
    return (
        <footer className="relative overflow-hidden bg-[#071a3d] text-white">
            {/* =====================================================
                ARCHITECTURAL BACKGROUND
            ====================================================== */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                {/* Grid */}
                <div
                    className="absolute inset-0 opacity-[0.035]"
                    style={{
                        backgroundImage: `
                            linear-gradient(#ffffff 1px, transparent 1px),
                            linear-gradient(90deg, #ffffff 1px, transparent 1px)
                        `,
                        backgroundSize: "80px 80px",
                    }}
                />

                {/* Large architectural circle */}
                <div className="absolute -right-64 -top-64 h-[700px] w-[700px] rounded-full border border-[#d99a17]/10" />

                <div className="absolute -right-44 -top-44 h-[500px] w-[500px] rounded-full border border-white/[0.04]" />

                {/* Left circle */}
                <div className="absolute -bottom-72 -left-72 h-[700px] w-[700px] rounded-full border border-[#d99a17]/[0.07]" />

                {/* Diagonal architectural lines */}
                <div className="absolute right-[12%] top-0 h-[650px] w-px rotate-[32deg] bg-[#d99a17]/[0.08]" />

                <div className="absolute right-[28%] top-[-100px] h-[650px] w-px rotate-[32deg] bg-white/[0.035]" />

                <div className="absolute left-[18%] bottom-[-150px] h-[550px] w-px rotate-[32deg] bg-white/[0.035]" />

                {/* Top gold line */}
                <div className="absolute left-0 top-0 h-px w-full bg-[#d99a17]/50" />

                {/* =================================================
                    TECHNICAL SVG
                ================================================== */}
                <svg
                    className="absolute right-[-40px] top-16 h-[500px] w-[600px] opacity-[0.12]"
                    viewBox="0 0 600 500"
                    fill="none"
                >
                    {/* Main cubicle */}
                    <path
                        d="M110 150L300 75L490 150V390L300 455L110 390V150Z"
                        stroke="#ffffff"
                        strokeWidth="1"
                    />

                    {/* Left panel */}
                    <path
                        d="M145 165V365L220 390V135L145 165Z"
                        stroke="#ffffff"
                        strokeWidth="1.5"
                    />

                    {/* Right panel */}
                    <path
                        d="M455 165V365L380 390V135L455 165Z"
                        stroke="#ffffff"
                        strokeWidth="1.5"
                    />

                    {/* Door */}
                    <path
                        d="M235 125H365V390L300 415L235 390V125Z"
                        stroke="#d99a17"
                        strokeWidth="2"
                    />

                    {/* Door handle */}
                    <circle
                        cx="337"
                        cy="265"
                        r="8"
                        stroke="#d99a17"
                        strokeWidth="2"
                    />

                    <circle
                        cx="337"
                        cy="265"
                        r="2.5"
                        fill="#d99a17"
                    />

                    {/* Top rail */}
                    <path
                        d="M110 150L300 75L490 150"
                        stroke="#d99a17"
                        strokeWidth="3"
                    />

                    {/* Technical dimensions */}
                    <path
                        d="M145 430H455"
                        stroke="#ffffff"
                        strokeWidth="1"
                    />

                    <path
                        d="M145 423V437M455 423V437"
                        stroke="#ffffff"
                        strokeWidth="1"
                    />

                    {/* Vertical center line */}
                    <path
                        d="M300 75V455"
                        stroke="#d99a17"
                        strokeWidth="1"
                        strokeDasharray="4 10"
                    />

                    {/* Technical circle */}
                    <circle
                        cx="300"
                        cy="265"
                        r="175"
                        stroke="#d99a17"
                        strokeWidth="1"
                        strokeDasharray="5 14"
                    />

                    {/* Corner marks */}
                    <path
                        d="M75 150H105M90 135V165"
                        stroke="#d99a17"
                        strokeWidth="2"
                    />

                    <path
                        d="M495 150H525M510 135V165"
                        stroke="#d99a17"
                        strokeWidth="2"
                    />

                    <path
                        d="M75 390H105M90 375V405"
                        stroke="#ffffff"
                        strokeWidth="1"
                    />

                    <path
                        d="M495 390H525M510 375V405"
                        stroke="#ffffff"
                        strokeWidth="1"
                    />
                </svg>
            </div>

            {/* =====================================================
                MAIN FOOTER CONTENT
            ====================================================== */}
            <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
                {/* =================================================
                    TOP BRAND SECTION
                ================================================== */}
                <div className="border-b border-white/10 py-10">
                    <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
                        {/* Brand */}
                        <div>
                            <div className="relative inline-block">
                                <div className="absolute -left-3 -top-3 h-7 w-7 border-l border-t border-[#d99a17]" />

                                <img
                                    src={LOGO_SRC}
                                    alt="Megha Systems"
                                    className="relative h-auto w-[190px] object-contain sm:w-[220px]"
                                />

                                <div className="absolute -bottom-3 -right-3 h-7 w-7 border-b border-r border-[#d99a17]" />
                            </div>

                            <p className="mt-8 max-w-xl text-sm leading-7 text-white/55 sm:text-[15px]">
                                Premium toilet cubicle and restroom partition
                                solutions designed, manufactured, and
                                installed for modern commercial and
                                institutional spaces.
                            </p>

                            <div className="mt-7 flex items-center gap-3">
                                <span className="h-px w-12 bg-[#d99a17]" />

                                <span className="text-[9px] font-semibold tracking-[0.28em] text-[#d99a17]">
                                    DESIGN • MANUFACTURE • INSTALL
                                </span>
                            </div>
                        </div>

                        {/* Right statement */}
                        <div className="lg:text-right">
                            <p className="text-[9px] font-bold tracking-[0.3em] text-[#d99a17]">
                                MEGHA SYSTEMS
                            </p>

                            <h3 className="mt-3 text-2xl font-semibold leading-tight text-white sm:text-3xl">
                                Built for performance.
                                <br />
                                <span className="text-white/45">
                                    Designed to last.
                                </span>
                            </h3>
                        </div>
                    </div>
                </div>

                {/* =================================================
                    LINKS + CONTACT
                ================================================== */}
                <div className="grid gap-10 border-b border-white/10 py-10 sm:py-12 lg:grid-cols-[0.7fr_0.8fr_1.5fr] lg:gap-14 lg:py-14">
                    {/* Useful Links */}
                    <div>
                        <div className="mb-5 flex items-center gap-3">
                            <span className="h-px w-7 bg-[#d99a17]" />

                            <p className="text-[9px] font-bold tracking-[0.28em] text-[#d99a17]">
                                USEFUL LINKS
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-x-6 gap-y-3 lg:grid-cols-1">
                            {FOOTER_LINKS.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className="group flex items-center gap-2 text-xs text-white/55 transition-colors duration-300 hover:text-white"
                                >
                                    <span className="h-px w-0 bg-[#d99a17] transition-all duration-300 group-hover:w-4" />

                                    <span>{link.label}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Products */}
                    <div>
                        <div className="mb-5 flex items-center gap-3">
                            <span className="h-px w-7 bg-[#d99a17]" />

                            <p className="text-[9px] font-bold tracking-[0.28em] text-[#d99a17]">
                                PRODUCTS
                            </p>
                        </div>

                        <div className="space-y-3">
                            {PRODUCT_LINKS.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className="group flex items-center gap-2 text-xs text-white/55 transition-colors duration-300 hover:text-white"
                                >
                                    <span className="h-px w-0 bg-[#d99a17] transition-all duration-300 group-hover:w-4" />

                                    <span>{link.label}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <div className="mb-5 flex items-center gap-3">
                            <span className="h-px w-7 bg-[#d99a17]" />

                            <p className="text-[9px] font-bold tracking-[0.28em] text-[#d99a17]">
                                CONTACT
                            </p>
                        </div>

                        <div className="grid gap-7 sm:grid-cols-2">
                            {/* Head Office */}
                            <div>
                                <div className="mb-3 flex items-center gap-2">
                                    <FiMapPin
                                        size={14}
                                        className="text-[#d99a17]"
                                        strokeWidth={1.6}
                                    />

                                    <p className="text-[9px] font-bold tracking-[0.2em] text-white">
                                        HEAD OFFICE
                                    </p>
                                </div>

                                <p className="text-xs leading-6 text-white/50">
                                    Plot Number-P10/J-3,
                                    <br />
                                    Adore Business City,
                                    <br />
                                    Sector 72-73,
                                    <br />
                                    Faridabad, Haryana,
                                    <br />
                                    121004
                                </p>
                            </div>

                            {/* Branch */}
                            <div>
                                <div className="mb-3 flex items-center gap-2">
                                    <FiMapPin
                                        size={14}
                                        className="text-[#d99a17]"
                                        strokeWidth={1.6}
                                    />

                                    <p className="text-[9px] font-bold tracking-[0.2em] text-white">
                                        BRANCH OFFICE
                                    </p>
                                </div>

                                <p className="text-xs leading-6 text-white/50">
                                    Plot No.341/1,2,3 & 4,
                                    <br />
                                    Safdar Nagar,
                                    <br />
                                    Borabanda,
                                    <br />
                                    Hyderabad - 500018
                                </p>
                            </div>
                        </div>

                        {/* Contact details */}
                        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                            <a
                                href="mailto:contact@meghasystems.com"
                                className="group flex items-center gap-2 text-xs text-white/65 transition-colors hover:text-[#d99a17]"
                            >
                                <FiMail
                                    size={14}
                                    className="text-[#d99a17]"
                                />

                                <span>contact@meghasystems.com</span>

                                <FiArrowUpRight
                                    size={12}
                                    className="opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
                                />
                            </a>

                            <span className="hidden h-4 w-px bg-white/10 sm:block" />

                            <a
                                href="tel:+919873735716"
                                className="flex items-center gap-2 text-xs text-white/65 transition-colors hover:text-[#d99a17]"
                            >
                                <FiPhone
                                    size={14}
                                    className="text-[#d99a17]"
                                />

                                <span>+91 9873735716</span>
                            </a>

                            <a
                                href="tel:+919873735713"
                                className="flex items-center gap-2 text-xs text-white/65 transition-colors hover:text-[#d99a17]"
                            >
                                <FiPhone
                                    size={14}
                                    className="text-[#d99a17]"
                                />

                                <span>+91 9873735713</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* =================================================
                    SOCIAL + CTA
                ================================================== */}
                <div className="flex flex-col gap-7 border-b border-white/10 py-8 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <p className="text-[9px] font-bold tracking-[0.28em] text-white/30">
                            CONNECT WITH US
                        </p>

                        <div className="mt-3 flex items-center gap-2">
                            {SOCIAL_LINKS.map((social) => {
                                const Icon = social.icon;

                                return (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        aria-label={social.label}
                                        className="group flex h-9 w-9 items-center justify-center border border-white/10 bg-white/[0.03] text-white/50 transition-all duration-300 hover:border-[#d99a17]/60 hover:bg-[#d99a17] hover:text-[#071a3d]"
                                    >
                                        <Icon
                                            size={15}
                                            strokeWidth={1.7}
                                            className="transition-transform duration-300 group-hover:scale-110"
                                        />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    <a
                        href="/contact"
                        className="group flex w-fit items-center gap-4 border border-[#d99a17]/50 bg-[#d99a17] px-6 py-3.5 text-[9px] font-bold tracking-[0.2em] text-[#071a3d] transition-all duration-300 hover:bg-white hover:border-white"
                    >
                        START YOUR PROJECT

                        <span className="flex h-6 w-6 items-center justify-center bg-[#071a3d]/10 transition-transform duration-300 group-hover:translate-x-1">
                            <FiArrowUpRight size={13} />
                        </span>
                    </a>
                </div>

                {/* =================================================
                    BOTTOM BAR
                ================================================== */}
                <div className="flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-[9px] tracking-[0.16em] text-white/30">
                        © {new Date().getFullYear()} MEGHA SYSTEMS. ALL RIGHTS
                        RESERVED.
                    </p>

                    <div className="flex flex-wrap items-center gap-4 text-[8px] font-semibold tracking-[0.18em] text-white/30">
                        <a
                            href="/privacy-policy"
                            className="transition-colors hover:text-[#d99a17]"
                        >
                            PRIVACY POLICY
                        </a>

                        <span className="h-3 w-px bg-white/10" />

                        <a
                            href="/terms"
                            className="transition-colors hover:text-[#d99a17]"
                        >
                            TERMS & CONDITIONS
                        </a>

                        <span className="h-3 w-px bg-white/10" />

                        <span className="text-[#d99a17]">
                            QUALITY • PRECISION • DURABILITY
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}