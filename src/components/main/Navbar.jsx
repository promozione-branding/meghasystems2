"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

import {
    Search,
    Phone,
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

const products = [
    {
        title: "Restroom Cubicles",
        description: "Premium restroom cubicle systems",
        href: "/products#restroom-cubicles",
    },
    {
        title: "Office Partitions",
        description: "Modern workspace partitions",
        href: "/products#office-partitions",
    },
    {
        title: "Workstations",
        description: "Smart office workstation systems",
        href: "/products#workstations",
    },
    {
        title: "Toilet Partitions",
        description: "Durable toilet partition solutions",
        href: "/products#toilet-partitions",
    },
];

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [productsOpen, setProductsOpen] = useState(false);
    const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const searchRef = useRef(null);
    const inputRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 30);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        if (searchOpen) {
            const timer = setTimeout(() => {
                if (inputRef.current) {
                    inputRef.current.focus();
                }
            }, 150);

            return () => clearTimeout(timer);
        }
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
            }
        };

        document.addEventListener(
            "mousedown",
            handleClickOutside
        );

        document.addEventListener(
            "keydown",
            handleEscape
        );

        return () => {
            document.removeEventListener(
                "mousedown",
                handleClickOutside
            );

            document.removeEventListener(
                "keydown",
                handleEscape
            );
        };
    }, []);

    const closeMobile = () => {
        setMobileOpen(false);
        setMobileProductsOpen(false);
    };

    return (<>
        <motion.header
            initial={{
                opacity: 0,
                y: -30,
            }}
            animate={{
                opacity: 1,
                y: 0,
            }}
            transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
            }}
            className="
                    fixed
                    top-0
                    left-0
                    right-0
                    z-[100]
                    px-2
                    bg-white
                "
        >
            <div
                className={`
                        bg-white
                        overflow-visible
                        transition-all
                        duration-500
                       
                    }
                    `}
            >
                <div
                    className="
                            relative
                            hidden
                            lg:flex
                            h-[78px]
                            items-center
                            justify-between
                            overflow-hidden
                            border-b
                            border-yellow-300
                            px-2
                        "
                >

                    <div
                        className="
                                absolute
                                inset-0
                                pointer-events-none
                                overflow-hidden
                            "
                    >
                        {/* Center glow */}

                        <div
                            className="
                                    absolute
                                    left-1/2
                                    top-1/2
                                    -translate-x-1/2
                                    -translate-y-1/2
                                    w-[650px]
                                    h-[140px]
                                    rounded-full
                                    bg-[#071a3d]
                                    opacity-[0.035]
                                    blur-2xl
                                "
                        />

                        {/* Navy shape */}

                        <motion.div
                            initial={{
                                opacity: 0,
                                x: -40,
                            }}
                            animate={{
                                opacity: 1,
                                x: 0,
                            }}
                            transition={{
                                duration: 0.8,
                                delay: 0.1,
                            }}
                            className="
                                    absolute
                                    top-[-90px]
                                    left-1/2
                                    -translate-x-[310px]
                                    w-[390px]
                                    h-[190px]
                                    bg-[#071a3d]
                                    rotate-[10deg]
                                    rounded-2xl
                                "
                        />

                        {/* Gold shape */}

                        <motion.div
                            initial={{
                                opacity: 0,
                                x: 40,
                            }}
                            animate={{
                                opacity: 1,
                                x: 0,
                            }}
                            transition={{
                                duration: 0.8,
                                delay: 0.2,
                            }}
                            className="
                                    absolute
                                    top-[-90px]
                                    left-1/2
                                    -translate-x-[90px]
                                    w-[390px]
                                    h-[190px]
                                    bg-[#c99618]
                                    rotate-[10deg]
                                    rounded-2xl
                                "
                        />

                        {/* Light navy accent */}

                        <div
                            className="
                                    absolute
                                    top-[-90px]
                                    left-1/2
                                    translate-x-[130px]
                                    w-[260px]
                                    h-[190px]
                                    bg-[#071a3d]
                                    opacity-[0.06]
                                    rotate-[10deg]
                                    rounded-2xl
                                "
                        />

                        {/* Bottom gold glow */}

                        <div
                            className="
                                    absolute
                                    bottom-[-75px]
                                    left-1/2
                                    translate-x-[50px]
                                    w-[220px]
                                    h-[100px]
                                    bg-[#c99618]
                                    opacity-[0.07]
                                    rounded-full
                                    blur-2xl
                                "
                        />
                    </div>

                    <Link
                        href="/"
                        className="
                                relative
                                z-30
                                shrink-0
                            "
                    >
                        <motion.div
                            whileHover={{
                                scale: 1.02,
                            }}
                            transition={{
                                duration: 0.25,
                            }}
                        >
                            <Image
                                src="/1.png"
                                alt="MEGHA SYSTEMS"
                                width={360}
                                height={105}
                                priority
                                className="
                                        w-[185px]
                                        xl:w-[215px]
                                        h-auto
                                        object-contain
                                    "
                            />
                        </motion.div>
                    </Link>

                    <div
                        className="
        absolute
        inset-0
        pointer-events-none
        overflow-hidden
    "
                    >
                        {/* Clean background */}
                        <div
                            className="
            absolute
            inset-0
            bg-gradient-to-r
            from-white
            via-[#f8f8f8]
            to-white
        "
                        />

                        {/* Navy center panel */}
                        <motion.div
                            initial={{
                                opacity: 0,
                                scaleX: 0.85,
                            }}
                            animate={{
                                opacity: 1,
                                scaleX: 1,
                            }}
                            transition={{
                                duration: 0.8,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="
            absolute
            left-1/2
            top-0
            -translate-x-1/2
            w-[610px]
            h-full
            bg-[#071a3d]
        "
                            style={{
                                clipPath:
                                    "polygon(8% 0, 92% 0, 100% 100%, 0% 100%)",
                            }}
                        />

                        {/* Gold top accent */}
                        <div
                            className="
            absolute
            left-1/2
            top-0
            -translate-x-1/2
            w-[430px]
            h-[2px]
            bg-[#c99618]
        "
                        />

                        {/* Gold bottom accent */}
                        <div
                            className="
            absolute
            left-1/2
            bottom-0
            -translate-x-1/2
            w-[300px]
            h-[2px]
            bg-[#c99618]
        "
                        />

                        {/* Architectural vertical lines */}
                        <div
                            className="
            absolute
            left-1/2
            top-0
            -translate-x-[280px]
            h-full
            w-px
            bg-white/10
        "
                        />

                        <div
                            className="
            absolute
            left-1/2
            top-0
            translate-x-[280px]
            h-full
            w-px
            bg-white/10
        "
                        />

                        {/* Left diagonal accent */}
                        <motion.div
                            initial={{
                                opacity: 0,
                                x: -20,
                            }}
                            animate={{
                                opacity: 1,
                                x: 0,
                            }}
                            transition={{
                                duration: 0.8,
                                delay: 0.2,
                            }}
                            className="
            absolute
            left-1/2
            top-[-30px]
            -translate-x-[210px]
            w-[2px]
            h-[140px]
            bg-[#c99618]/60
            rotate-[28deg]
        "
                        />

                        {/* Right diagonal accent */}
                        <motion.div
                            initial={{
                                opacity: 0,
                                x: 20,
                            }}
                            animate={{
                                opacity: 1,
                                x: 0,
                            }}
                            transition={{
                                duration: 0.8,
                                delay: 0.3,
                            }}
                            className="
            absolute
            left-1/2
            top-[-30px]
            translate-x-[208px]
            w-[2px]
            h-[140px]
            bg-[#c99618]/60
            rotate-[-28deg]
        "
                        />

                        {/* =========================================
        CENTER STATS
    ========================================= */}

                        <div
                            className="
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
            flex
            items-center
            justify-center
            gap-8
            z-20
            whitespace-nowrap
        "
                        >
                            {/* YEARS */}
                            <div className="flex items-center gap-3">
                                <div
                                    className="
                    flex
                    items-start
                    leading-none
                "
                                >
                                    <span
                                        className="
                        text-[30px]
                        font-black
                        tracking-[-0.04em]
                        text-white
                    "
                                    >
                                        25
                                    </span>

                                    <span
                                        className="
                        text-[17px]
                        font-bold
                        text-[#c99618]
                        mt-[-2px]
                    "
                                    >
                                        +
                                    </span>
                                </div>

                                <div>
                                    <p
                                        className="
                        text-[9px]
                        font-bold
                        uppercase
                        tracking-[0.18em]
                        text-white
                    "
                                    >
                                        Years
                                    </p>

                                    <p
                                        className="
                        text-[7px]
                        uppercase
                        tracking-[0.15em]
                        text-white/50
                        mt-1
                    "
                                    >
                                        Of Excellence
                                    </p>
                                </div>
                            </div>

                            {/* DIVIDER */}
                            <div
                                className="
                h-10
                w-px
                bg-[#c99618]/50
            "
                            />

                            {/* CUBICLES */}
                            <div className="flex items-center gap-3">
                                <div
                                    className="
                    flex
                    items-start
                    leading-none
                "
                                >
                                    <span
                                        className="
                        text-[30px]
                        font-black
                        tracking-[-0.04em]
                        text-white
                    "
                                    >
                                        1 Lakh
                                    </span>

                                    <span
                                        className="
                        text-[17px]
                        font-bold
                        text-[#c99618]
                        mt-[-2px]
                    "
                                    >
                                        +
                                    </span>
                                </div>

                                <div>
                                    <p
                                        className="
                        text-[9px]
                        font-bold
                        uppercase
                        tracking-[0.18em]
                        text-white
                    "
                                    >
                                        Cubicles
                                    </p>

                                    <p
                                        className="
                        text-[7px]
                        uppercase
                        tracking-[0.15em]
                        text-white/50
                        mt-1
                    "
                                    >
                                        Installed
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className="
                                relative
                                z-30
                                flex
                                items-center
                                gap-2
                            "
                    >
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

                <div className="
                            lg:hidden
                            h-[76px]
                            px-5
                            flex
                            items-center
                            justify-between
                        "
                >
                    <Link
                        href="/"
                        onClick={closeMobile}
                    >
                        <Image
                            src="/1.png"
                            alt="MEGHA SYSTEMS"
                            width={300}
                            height={90}
                            priority
                            className="
                                    w-[190px]
                                    h-auto
                                    object-contain
                                "
                        />
                    </Link>

                    <button
                        onClick={() =>
                            setMobileOpen(!mobileOpen)
                        }
                        className="
                                w-11
                                h-11
                                rounded-full
                                bg-[#071a3d]
                                text-white
                                flex
                                items-center
                                justify-center
                                shadow-lg
                            "
                        aria-label="Toggle menu"
                    >
                        {mobileOpen ? (
                            <X size={21} />
                        ) : (
                            <Menu size={21} />
                        )}
                    </button>
                </div>

                <div className="hidden lg:block">
                    <div
                        className="
                                relative
                                h-[58px]
                                px-2
                                flex
                                items-center
                                justify-between
                            "
                    >
                        {/* NAVIGATION */}

                        <nav className="flex items-center h-full">
                            <NavLink
                                href="/"
                                label="Home"
                                active
                            />

                            <NavLink
                                href="/about-us"
                                label="About Us"
                            />

                            {/* PRODUCTS */}

                            <div
                                className="
                                        relative
                                        h-full
                                        flex
                                        items-center
                                    "
                                onMouseEnter={() =>
                                    setProductsOpen(true)
                                }
                                onMouseLeave={() =>
                                    setProductsOpen(false)
                                }
                            >
                                <button
                                    className="
                                            group
                                            relative
                                            h-full
                                            px-5
                                            flex
                                            items-center
                                            gap-1.5
                                            text-[13px]
                                            font-semibold
                                            text-[#182640]
                                            hover:text-[#c99618]
                                            transition-colors
                                        "
                                >
                                    Products

                                    <ChevronDown
                                        size={14}
                                        className={`
                                                transition-transform
                                                duration-300
                                                ${productsOpen
                                                ? "rotate-180"
                                                : ""
                                            }
                                            `}
                                    />

                                    <span
                                        className="
                                                absolute
                                                bottom-0
                                                left-5
                                                right-5
                                                h-[3px]
                                                bg-[#c99618]
                                                scale-x-0
                                                origin-left
                                                transition-transform
                                                duration-300
                                                group-hover:scale-x-100
                                            "
                                    />
                                </button>

                                {/* PRODUCT DROPDOWN */}

                                <AnimatePresence>
                                    {productsOpen && (
                                        <motion.div
                                            initial={{
                                                opacity: 0,
                                                y: 10,
                                            }}
                                            animate={{
                                                opacity: 1,
                                                y: 0,
                                            }}
                                            exit={{
                                                opacity: 0,
                                                y: 10,
                                            }}
                                            transition={{
                                                duration: 0.22,
                                            }}
                                            className="
                                                    absolute
                                                    top-full
                                                    left-0
                                                    pt-3
                                                    w-[330px]
                                                    z-50
                                                "
                                        >
                                            <div
                                                className="
                                                        bg-white
                                                        border
                                                        border-gray-100
                                                        rounded-xl
                                                        shadow-[0_25px_70px_rgba(7,26,61,0.16)]
                                                        p-2
                                                    "
                                            >
                                                {allProducts.map(
                                                    (product) => (
                                                        <ProductItem key={product.categoryName}
                                                            {...product} />
                                                    )
                                                )}

                                                <Link
                                                    href="/products"
                                                    className="
                                                            mt-1
                                                            flex
                                                            items-center
                                                            justify-between
                                                            rounded-lg
                                                            bg-[#071a3d]
                                                            px-4
                                                            py-3.5
                                                            text-white
                                                            group
                                                        "
                                                >
                                                    <div>
                                                        <p className="text-sm font-semibold">
                                                            View All
                                                            Products
                                                        </p>

                                                        <p className="text-[10px] text-white/50 mt-0.5">
                                                            Explore our
                                                            complete range
                                                        </p>
                                                    </div>

                                                    <ArrowUpRight
                                                        size={16}
                                                        className="
                                                                text-[#d5a321]
                                                                group-hover:translate-x-1
                                                                group-hover:-translate-y-1
                                                                transition-transform
                                                            "
                                                    />
                                                </Link>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            <NavLink
                                href="/projects"
                                label="Projects"
                            />

                            <NavLink
                                href="/blog"
                                label="Blog"
                            />

                            <NavLink
                                href="/contact-us"
                                label="Contact Us"
                            />
                        </nav>

                        {/* =================================================
                                RIGHT SIDE
                            ================================================= */}

                        <div className="flex items-center gap-2">
                            {/* SEARCH */}

                            <div
                                ref={searchRef}
                                className="
                                        relative
                                        flex
                                        items-center
                                    "
                            >
                                <AnimatePresence>
                                    {searchOpen && (
                                        <motion.div
                                            initial={{
                                                width: 0,
                                                opacity: 0,
                                            }}
                                            animate={{
                                                width: 250,
                                                opacity: 1,
                                            }}
                                            exit={{
                                                width: 0,
                                                opacity: 0,
                                            }}
                                            transition={{
                                                duration: 0.3,
                                                ease: [
                                                    0.22,
                                                    1,
                                                    0.36,
                                                    1,
                                                ],
                                            }}
                                            className="
                                                    absolute
                                                    right-0
                                                    top-1/2
                                                    -translate-y-1/2
                                                    z-10
                                                    overflow-hidden
                                                "
                                        >
                                            <div
                                                className="
                                                        h-10
                                                        w-[250px]
                                                        rounded-full
                                                        bg-white
                                                        border
                                                        border-gray-200
                                                        shadow-[0_10px_30px_rgba(7,26,61,0.12)]
                                                        flex
                                                        items-center
                                                        pl-4
                                                        pr-2
                                                    "
                                            >
                                                <Search
                                                    size={16}
                                                    className="
                                                            shrink-0
                                                            text-gray-400
                                                        "
                                                />

                                                <input
                                                    ref={inputRef}
                                                    type="text"
                                                    placeholder="Search products..."
                                                    className="
                                                            w-full
                                                            bg-transparent
                                                            outline-none
                                                            border-none
                                                            px-3
                                                            text-[12px]
                                                            text-[#182640]
                                                            placeholder:text-gray-400
                                                        "
                                                />
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                <motion.button
                                    whileHover={{
                                        scale: 1.08,
                                    }}
                                    whileTap={{
                                        scale: 0.94,
                                    }}
                                    onClick={() =>
                                        setSearchOpen(
                                            !searchOpen
                                        )
                                    }
                                    className="
                                            relative
                                            z-20
                                            w-9
                                            h-9
                                            rounded-full
                                            flex
                                            items-center
                                            justify-center
                                            text-[#182640]
                                            hover:bg-[#f5f1e7]
                                            hover:text-[#c99618]
                                            transition-all
                                        "
                                    aria-label="Search"
                                >
                                    {searchOpen ? (
                                        <X size={18} />
                                    ) : (
                                        <Search size={18} />
                                    )}
                                </motion.button>
                            </div>

                            <div
                                className="
                                        w-px
                                        h-7
                                        bg-gray-200
                                        mx-2
                                    "
                            />

                            {/* PHONE */}

                            <motion.a
                                href="tel:+919873735716"
                                whileHover={{
                                    scale: 1.02,
                                }}
                                className="
                                        relative
                                        z-20
                                        group
                                        flex
                                        items-center
                                        gap-3
                                        shrink-0
                                    "
                            >
                                <span
                                    className="
                                            w-11
                                            h-11
                                            rounded-full
                                            bg-[#071a3d]
                                            text-white
                                            flex
                                            items-center
                                            justify-center
                                            transition-all
                                            duration-300
                                            group-hover:bg-[#c99618]
                                            group-hover:rotate-6
                                        "
                                >
                                    <Phone size={17} />
                                </span>

                                <span className="flex flex-col">
                                    <span
                                        className="
                                                text-[9px]
                                                uppercase
                                                tracking-[0.2em]
                                                text-gray-400
                                                mb-1
                                            "
                                    >
                                        Talk to us
                                    </span>

                                    <span
                                        className="
                                                text-[13px]
                                                font-bold
                                                text-[#182640]
                                                whitespace-nowrap
                                            "
                                    >
                                        +91 98737 35716
                                    </span>
                                </span>
                            </motion.a>
                        </div>
                    </div>
                </div>

                <AnimatePresence>
                    {mobileOpen && (
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
                            className="
                                    lg:hidden
                                    overflow-hidden
                                    border-t
                                    border-gray-100
                                "
                        >
                            <div className="px-5 py-5">
                                <MobileLink
                                    href="/"
                                    label="Home"
                                    onClick={closeMobile}
                                />

                                <MobileLink
                                    href="/about"
                                    label="About Us"
                                    onClick={closeMobile}
                                />

                                {/* MOBILE PRODUCTS */}

                                <button
                                    onClick={() =>
                                        setMobileProductsOpen(
                                            !mobileProductsOpen
                                        )
                                    }
                                    className="
                                            w-full
                                            flex
                                            items-center
                                            justify-between
                                            py-4
                                            border-b
                                            border-gray-100
                                            text-[#182640]
                                            text-sm
                                            font-semibold
                                        "
                                >
                                    Products

                                    <ChevronDown
                                        size={17}
                                        className={`
                                                transition-transform
                                                ${mobileProductsOpen
                                                ? "rotate-180"
                                                : ""
                                            }
                                            `}
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
                                            {products.map(
                                                (product) => (
                                                    <Link
                                                        key={
                                                            product.title
                                                        }
                                                        href={
                                                            product.href
                                                        }
                                                        onClick={
                                                            closeMobile
                                                        }
                                                        className="
                                                                flex
                                                                items-center
                                                                justify-between
                                                                py-3
                                                                pl-4
                                                                text-sm
                                                                text-gray-500
                                                                hover:text-[#c99618]
                                                            "
                                                    >
                                                        {
                                                            product.title
                                                        }

                                                        <ArrowUpRight
                                                            size={14}
                                                        />
                                                    </Link>
                                                )
                                            )}
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
                                    href="/contact"
                                    label="Contact Us"
                                    onClick={closeMobile}
                                />

                                {/* MOBILE SEARCH */}

                                <div className="relative mt-6">
                                    <Search
                                        size={18}
                                        className="
                                                absolute
                                                left-4
                                                top-1/2
                                                -translate-y-1/2
                                                text-gray-400
                                            "
                                    />

                                    <input
                                        type="text"
                                        placeholder="Search..."
                                        className="
                                                w-full
                                                h-12
                                                rounded-xl
                                                bg-gray-50
                                                border
                                                border-gray-200
                                                pl-11
                                                pr-4
                                                text-sm
                                                outline-none
                                                focus:border-[#c99618]
                                            "
                                    />
                                </div>

                                {/* MOBILE PHONE */}

                                <div
                                    className="
                                            mt-6
                                            pt-5
                                            border-t
                                            border-gray-100
                                        "
                                >
                                    <p
                                        className="
                                                text-[9px]
                                                uppercase
                                                tracking-[0.2em]
                                                text-gray-400
                                                mb-3
                                            "
                                    >
                                        Talk to us
                                    </p>

                                    <a
                                        href="tel:+919873735716"
                                        className="
                                                flex
                                                items-center
                                                gap-3
                                                py-2
                                                text-sm
                                                font-semibold
                                                text-[#182640]
                                            "
                                    >
                                        <span
                                            className="
                                                    w-9
                                                    h-9
                                                    rounded-full
                                                    bg-[#071a3d]
                                                    text-white
                                                    flex
                                                    items-center
                                                    justify-center
                                                "
                                        >
                                            <Phone size={15} />
                                        </span>

                                        +91 98737 35716
                                    </a>

                                    <a
                                        href="tel:+919873735713"
                                        className="
                                                flex
                                                items-center
                                                gap-3
                                                py-2
                                                text-sm
                                                font-semibold
                                                text-[#182640]
                                            "
                                    >
                                        <span
                                            className="
                                                    w-9
                                                    h-9
                                                    rounded-full
                                                    bg-[#071a3d]
                                                    text-white
                                                    flex
                                                    items-center
                                                    justify-center
                                                "
                                        >
                                            <Phone size={15} />
                                        </span>

                                        +91 98737 35713
                                    </a>
                                </div>

                                {/* MOBILE SOCIAL */}

                                <div
                                    className="
                                            mt-5
                                            pt-5
                                            border-t
                                            border-gray-100
                                            flex
                                            items-center
                                            justify-between
                                        "
                                >
                                    <span
                                        className="
                                                text-[9px]
                                                uppercase
                                                tracking-[0.2em]
                                                text-gray-400
                                            "
                                    >
                                        Follow us
                                    </span>

                                    <div className="flex gap-2">
                                        <SocialIcon
                                            href={
                                                SOCIAL_LINKS.facebook
                                            }
                                            label="Facebook"
                                        >
                                            <FaFacebookF />
                                        </SocialIcon>

                                        <SocialIcon
                                            href={
                                                SOCIAL_LINKS.instagram
                                            }
                                            label="Instagram"
                                        >
                                            <FaInstagram />
                                        </SocialIcon>

                                        <SocialIcon
                                            href={
                                                SOCIAL_LINKS.linkedin
                                            }
                                            label="LinkedIn"
                                        >
                                            <FaLinkedinIn />
                                        </SocialIcon>

                                        <SocialIcon
                                            href={
                                                SOCIAL_LINKS.whatsapp
                                            }
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
    </>);
}

function NavLink({
    href,
    label,
    active = false,
}) {
    return (
        <Link
            href={href}
            className={`
                group
                relative
                h-[58px]
                px-5
                flex
                items-center
                text-[13px]
                font-semibold
                transition-all
                duration-300
                ${active
                    ? "bg-[#071a3d] text-white"
                    : "text-[#182640] hover:text-[#c99618]"
                }
            `}
        >
            {label}

            {!active && (
                <span
                    className="
                        absolute
                        bottom-0
                        left-5
                        right-5
                        h-[3px]
                        bg-[#c99618]
                        scale-x-0
                        origin-left
                        transition-transform
                        duration-300
                        group-hover:scale-x-100
                    "
                />
            )}
        </Link>
    );
}

function ProductItem({
    categoryName,
    description,
    slug,
}) {
    return (
        <Link
            href={`/products#${slug}`}
            className="
                group
                flex
                items-center
                justify-between
                rounded-lg
                px-4
                py-3.5
                hover:bg-[#f8f6f1]
                transition-colors
            "
        >
            <div>
                <p className="text-sm font-semibold text-[#182640]">
                    {categoryName}
                </p>

                <p className="text-[10px] text-gray-400 mt-0.5">
                    {description}
                </p>
            </div>

            <ArrowUpRight
                size={15}
                className="
                    text-gray-400
                    group-hover:text-[#c99618]
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                    transition-all
                "
            />
        </Link>
    );
}

function SocialIcon({
    href,
    label,
    children,
}) {
    return (
        <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            title={label}
            whileHover={{
                y: -3,
                scale: 1.08,
            }}
            whileTap={{
                scale: 0.92,
            }}
            className="
                w-10
                h-10
                rounded-full
                border
                border-gray-200
                flex
                items-center
                justify-center
                text-[15px]
                text-[#182640]
                hover:bg-[#071a3d]
                hover:text-white
                hover:border-[#071a3d]
                transition-all
                duration-300
            "
        >
            {children}
        </motion.a>
    );
}

function MobileLink({
    href,
    label,
    onClick,
}) {
    return (
        <Link
            href={href}
            onClick={onClick}
            className="
                flex
                items-center
                justify-between
                py-4
                border-b
                border-gray-100
                text-[#182640]
                text-sm
                font-semibold
            "
        >
            {label}

            <ArrowUpRight
                size={15}
                className="text-[#c99618]"
            />
        </Link>
    );
}