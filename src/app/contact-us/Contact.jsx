"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import axios from "axios";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

import {
    FiArrowUpRight,
    FiMapPin,
    FiPhone,
    FiMail,
    FiSend,
    FiCheck,
    FiAlertCircle,
    FiClock,
} from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

/* =========================================================
   OFFICES
========================================================= */

const offices = [
    {
        title: "Faridabad",
        address:
            "Plot Number-P10/J-3, Adore Business City, Sector 72-73, Faridabad, Haryana, 121004",
    },
    {
        title: "Hyderabad",
        address:
            "Plot No.341/1,2,3 & 4, Safdar Nagar, Borabanda, Hyderabad - 500018",
    },
    {
        title: "New Delhi",
        address:
            "12/1 Ground Floor, Khirki Extension, Malviya Nagar, New Delhi, Delhi - 110017",
    },
    {
        title: "Gurgaon",
        address:
            "1344/31, Near Bal Bharti School, Laxman Vihar, Gurgaon",
    },
    {
        title: "Noida",
        address:
            "C-36, Sector 135, Noida",
    },
    {
        title: "Ghaziabad",
        address:
            "Coming Soon",
    },
];

/* =========================================================
   PRODUCTS
========================================================= */

const products = [
    "Black Maxi",
    "Maxi PRO",
    "Duro",
    "Duro Pro",
    "Cubic Doorz",
    "NEO",
    "Maxi",
    "Luron",
    "Cielo",
    "Premia",
    "Rove",
    "Kiddiez",
    "Kiddiez Pro",
    "Nylon Kiddiez",
    "Urinal Modesty Panels",
    "Other / Custom Requirement",
];

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function ContactPage() {
    const pageRef = useRef(null);

    const [contactPerson, setContactPerson] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [product, setProduct] = useState("");
    const [message, setMessage] = useState("");

    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState({
        type: "",
        message: "",
    });

    /* =========================================================
       GSAP ANIMATIONS
    ========================================================= */

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".contact-hero-item",
                {
                    y: 35,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.1,
                    ease: "power3.out",
                }
            );

            gsap.fromTo(
                ".contact-form-reveal",
                {
                    y: 40,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".contact-form-section",
                        start: "top 80%",
                        once: true,
                    },
                }
            );

            gsap.fromTo(
                ".office-card",
                {
                    y: 30,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    stagger: 0.08,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".offices-section",
                        start: "top 80%",
                        once: true,
                    },
                }
            );

            gsap.fromTo(
                ".map-reveal",
                {
                    y: 30,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".map-section",
                        start: "top 80%",
                        once: true,
                    },
                }
            );

            ScrollTrigger.refresh();
        }, pageRef);

        return () => ctx.revert();
    }, []);

    /* =========================================================
       FORM SUBMIT
    ========================================================= */

    const handleSubmit = async (e) => {
        e.preventDefault();

        setStatus({
            type: "",
            message: "",
        });

        if (!contactPerson || !email || !phone || !product || !message) {
            setStatus({
                type: "error",
                message: "Please fill in all required fields.",
            });

            return;
        }

        setLoading(true);

        const data = {
            platform: "Megha System Contact Form",
            supplierToken: "6a9fb2bdd936bdc2bb1d6df7",
            platformEmail: "contact@meghasystems.com",

            name: contactPerson,
            email: email,
            company: "NA",
            phone: phone,
            product: product,
            place: "N/A",
            message: message,
        };

        try {
            const res = await axios.post(
                "https://brandbnalo.com/api/form/add",
                data
            );

            console.log("Contact form response:", res.data);

            setStatus({
                type: "success",
                message:
                    "Thank you. Your enquiry has been submitted successfully. Our team will contact you shortly.",
            });

            setContactPerson("");
            setEmail("");
            setPhone("");
            setProduct("");
            setMessage("");
        } catch (error) {
            console.error("Contact form error:", error);

            setStatus({
                type: "error",
                message:
                    "Something went wrong while submitting your enquiry. Please try again or contact us directly.",
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <main
            ref={pageRef}
            className="overflow-hidden bg-[#f3f5f7] text-[#071a3d]"
        >
            {/* =====================================================
                HERO
            ===================================================== */}

            <section className="relative overflow-hidden bg-[#071a3d] pt-28 sm:pt-32 lg:pt-36">
                {/* Grid */}

                <div
                    className="
                        pointer-events-none
                        absolute
                        inset-0
                        opacity-[0.055]
                        [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)]
                        [background-size:60px_60px]
                    "
                />

                {/* Architectural circles */}

                <div
                    className="
                        pointer-events-none
                        absolute
                        -right-32
                        -top-32
                        h-[520px]
                        w-[520px]
                        rounded-full
                        border
                        border-[#c99618]/20
                    "
                />

                <div
                    className="
                        pointer-events-none
                        absolute
                        -right-10
                        top-10
                        h-[350px]
                        w-[350px]
                        rounded-full
                        border
                        border-[#c99618]/10
                    "
                />

                {/* Vertical architectural line */}

                <div
                    className="
                        pointer-events-none
                        absolute
                        right-[18%]
                        top-0
                        h-[130%]
                        w-px
                        rotate-[25deg]
                        bg-white/[0.045]
                    "
                />

                {/* Gold top line */}

                <div className="absolute left-0 top-0 h-[3px] w-full bg-[#c99618]" />

                <div
                    className="
                        relative
                        z-10
                        mx-auto
                        max-w-[1450px]
                        px-5
                        py-16
                        sm:px-8
                        sm:py-20
                        lg:px-12
                        lg:py-24
                        xl:px-16
                    "
                >
                    <div className="grid gap-10 lg:grid-cols-[1fr_430px] lg:items-end lg:gap-16">
                        {/* Left */}

                        <div>
                            <div className="contact-hero-item flex items-center gap-3">
                                <span className="h-[2px] w-9 bg-[#c99618]" />

                                <span className="text-[9px] font-bold tracking-[0.3em] text-[#c99618] sm:text-[10px]">
                                    GET IN TOUCH
                                </span>
                            </div>

                            <h1
                                className="
                                    contact-hero-item
                                    mt-5
                                    max-w-[900px]
                                    text-[48px]
                                    font-semibold
                                    leading-[0.88]
                                    tracking-[-0.055em]
                                    text-white
                                    sm:text-[62px]
                                    md:text-[72px]
                                    lg:text-[82px]
                                    xl:text-[96px]
                                "
                            >
                                Let's build
                                <br />
                                <span className="text-[#c99618]">
                                    your space.
                                </span>
                            </h1>
                        </div>

                        {/* Right */}

                        <div className="contact-hero-item">
                            <p className="text-[12px] leading-[1.8] text-white/55 sm:text-[13px] lg:text-[14px]">
                                Have a project in mind? Talk to our team about
                                toilet cubicles, restroom partitions, urinal
                                partitions and custom solutions for your
                                project.
                            </p>

                            <div className="mt-7 flex flex-wrap gap-3">
                                <a
                                    href="tel:+919810000000"
                                    className="
                                        inline-flex
                                        items-center
                                        gap-2
                                        border
                                        border-[#c99618]
                                        px-4
                                        py-3
                                        text-[9px]
                                        font-bold
                                        tracking-[0.14em]
                                        text-white
                                        transition-all
                                        duration-300
                                        hover:bg-[#c99618]
                                        hover:text-[#071a3d]
                                    "
                                >
                                    <FiPhone size={13} />
                                    CALL OUR TEAM
                                </a>

                                <a
                                    href="mailto:contact@meghasystems.com"
                                    className="
                                        inline-flex
                                        items-center
                                        gap-2
                                        border
                                        border-white/15
                                        px-4
                                        py-3
                                        text-[9px]
                                        font-bold
                                        tracking-[0.14em]
                                        text-white/70
                                        transition-all
                                        duration-300
                                        hover:border-[#c99618]
                                        hover:text-[#c99618]
                                    "
                                >
                                    <FiMail size={13} />
                                    EMAIL US
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Bottom architectural bar */}

                    <div className="contact-hero-item mt-14 flex items-center justify-between border-t border-white/10 pt-4">
                        <span className="text-[8px] font-bold tracking-[0.2em] text-white/25 sm:text-[9px]">
                            MEGHA SYSTEMS
                        </span>

                        <span className="text-[8px] font-bold tracking-[0.2em] text-[#c99618] sm:text-[9px]">
                            PROJECT • QUOTE • CONSULTATION
                        </span>
                    </div>
                </div>
            </section>

            {/* =====================================================
                CONTACT FORM
            ===================================================== */}

            <section className="contact-form-section relative bg-[#f3f5f7] py-16 sm:py-20 lg:py-24">
                <div className="mx-auto max-w-[1450px] px-5 sm:px-8 lg:px-12 xl:px-16">
                    <div className="grid gap-10 lg:grid-cols-[360px_minmax(0,1fr)] xl:grid-cols-[420px_minmax(0,1fr)] xl:gap-20">
                        {/* Intro */}

                        <div className="contact-form-reveal">
                            <div className="flex items-center gap-3">
                                <span className="h-[2px] w-8 bg-[#c99618]" />

                                <span className="text-[9px] font-bold tracking-[0.28em] text-[#c99618]">
                                    PROJECT ENQUIRY
                                </span>
                            </div>

                            <h2
                                className="
                                    mt-4
                                    text-[38px]
                                    font-semibold
                                    leading-[0.92]
                                    tracking-[-0.05em]
                                    sm:text-[48px]
                                    lg:text-[56px]
                                "
                            >
                                Tell us about
                                <br />
                                <span className="text-[#c99618]">
                                    your project.
                                </span>
                            </h2>

                            <p className="mt-6 max-w-[350px] text-[12px] leading-[1.8] text-[#071a3d]/55 sm:text-[13px]">
                                Share your requirements and our team will help
                                you select the right restroom partition system
                                for your space.
                            </p>

                            <div className="mt-9 space-y-5 border-t border-[#071a3d]/10 pt-6">
                                <div className="flex gap-4">
                                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#071a3d] text-[#c99618]">
                                        <FiSend size={14} />
                                    </div>

                                    <div>
                                        <p className="text-[9px] font-bold tracking-[0.2em] text-[#071a3d]/35">
                                            QUICK RESPONSE
                                        </p>

                                        <p className="mt-1 text-[12px] font-medium">
                                            Our team will contact you shortly.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#071a3d] text-[#c99618]">
                                        <FiClock size={14} />
                                    </div>

                                    <div>
                                        <p className="text-[9px] font-bold tracking-[0.2em] text-[#071a3d]/35">
                                            PROJECT SUPPORT
                                        </p>

                                        <p className="mt-1 text-[12px] font-medium">
                                            Product selection & project guidance
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Form */}

                        <div className="contact-form-reveal">
                            <form
                                onSubmit={handleSubmit}
                                className="
                                    relative
                                    overflow-hidden
                                    border
                                    border-[#071a3d]/10
                                    bg-white
                                    p-5
                                    shadow-[0_20px_70px_rgba(7,26,61,0.07)]
                                    sm:p-7
                                    lg:p-9
                                "
                            >
                                {/* Gold corner */}

                                <div className="absolute right-0 top-0 h-14 w-14 border-b border-l border-[#c99618]/40" />

                                {/* Form heading */}

                                <div className="mb-8">
                                    <span className="text-[9px] font-bold tracking-[0.25em] text-[#c99618]">
                                        CONTACT FORM
                                    </span>

                                    <h3 className="mt-2 text-[24px] font-semibold tracking-[-0.03em] sm:text-[28px]">
                                        Start a conversation
                                    </h3>
                                </div>

                                <div className="grid gap-5 sm:grid-cols-2">
                                    {/* Name */}

                                    <div>
                                        <label
                                            htmlFor="contactPerson"
                                            className="mb-2 block text-[9px] font-bold tracking-[0.18em] text-[#071a3d]/45"
                                        >
                                            FULL NAME *
                                        </label>

                                        <input
                                            id="contactPerson"
                                            type="text"
                                            value={contactPerson}
                                            onChange={(e) =>
                                                setContactPerson(
                                                    e.target.value
                                                )
                                            }
                                            placeholder="Enter your name"
                                            className="
                                                h-12
                                                w-full
                                                border
                                                border-[#071a3d]/10
                                                bg-[#f8f9fa]
                                                px-4
                                                text-[12px]
                                                text-[#071a3d]
                                                outline-none
                                                transition-all
                                                placeholder:text-[#071a3d]/30
                                                focus:border-[#c99618]
                                                focus:bg-white
                                            "
                                        />
                                    </div>

                                    {/* Email */}

                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="mb-2 block text-[9px] font-bold tracking-[0.18em] text-[#071a3d]/45"
                                        >
                                            EMAIL ADDRESS *
                                        </label>

                                        <input
                                            id="email"
                                            type="email"
                                            value={email}
                                            onChange={(e) =>
                                                setEmail(e.target.value)
                                            }
                                            placeholder="Enter your email"
                                            className="
                                                h-12
                                                w-full
                                                border
                                                border-[#071a3d]/10
                                                bg-[#f8f9fa]
                                                px-4
                                                text-[12px]
                                                outline-none
                                                transition-all
                                                placeholder:text-[#071a3d]/30
                                                focus:border-[#c99618]
                                                focus:bg-white
                                            "
                                        />
                                    </div>

                                    {/* Phone */}

                                    <div>
                                        <label
                                            htmlFor="phone"
                                            className="mb-2 block text-[9px] font-bold tracking-[0.18em] text-[#071a3d]/45"
                                        >
                                            PHONE NUMBER *
                                        </label>

                                        <input
                                            id="phone"
                                            type="tel"
                                            value={phone}
                                            onChange={(e) =>
                                                setPhone(e.target.value)
                                            }
                                            placeholder="Enter your phone number"
                                            className="
                                                h-12
                                                w-full
                                                border
                                                border-[#071a3d]/10
                                                bg-[#f8f9fa]
                                                px-4
                                                text-[12px]
                                                outline-none
                                                transition-all
                                                placeholder:text-[#071a3d]/30
                                                focus:border-[#c99618]
                                                focus:bg-white
                                            "
                                        />
                                    </div>

                                    {/* Product */}

                                    <div>
                                        <label
                                            htmlFor="product"
                                            className="mb-2 block text-[9px] font-bold tracking-[0.18em] text-[#071a3d]/45"
                                        >
                                            PRODUCT / REQUIREMENT *
                                        </label>

                                        <select
                                            id="product"
                                            value={product}
                                            onChange={(e) =>
                                                setProduct(e.target.value)
                                            }
                                            className="
                                                h-12
                                                w-full
                                                border
                                                border-[#071a3d]/10
                                                bg-[#f8f9fa]
                                                px-4
                                                text-[12px]
                                                text-[#071a3d]
                                                outline-none
                                                transition-all
                                                focus:border-[#c99618]
                                                focus:bg-white
                                            "
                                        >
                                            <option value="">
                                                Select a product
                                            </option>

                                            {products.map((item) => (
                                                <option
                                                    key={item}
                                                    value={item}
                                                >
                                                    {item}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                {/* Message */}

                                <div className="mt-5">
                                    <label
                                        htmlFor="message"
                                        className="mb-2 block text-[9px] font-bold tracking-[0.18em] text-[#071a3d]/45"
                                    >
                                        PROJECT MESSAGE *
                                    </label>

                                    <textarea
                                        id="message"
                                        value={message}
                                        onChange={(e) =>
                                            setMessage(e.target.value)
                                        }
                                        placeholder="Tell us about your project, quantity, location or requirements..."
                                        rows={6}
                                        className="
                                            w-full
                                            resize-none
                                            border
                                            border-[#071a3d]/10
                                            bg-[#f8f9fa]
                                            px-4
                                            py-4
                                            text-[12px]
                                            leading-[1.7]
                                            outline-none
                                            transition-all
                                            placeholder:text-[#071a3d]/30
                                            focus:border-[#c99618]
                                            focus:bg-white
                                        "
                                    />
                                </div>

                                {/* Status */}

                                {status.message && (
                                    <div
                                        className={`
                                            mt-5
                                            flex
                                            items-start
                                            gap-3
                                            border
                                            px-4
                                            py-3
                                            text-[11px]
                                            leading-[1.5]

                                            ${
                                                status.type === "success"
                                                    ? "border-green-200 bg-green-50 text-green-700"
                                                    : "border-red-200 bg-red-50 text-red-700"
                                            }
                                        `}
                                    >
                                        {status.type === "success" ? (
                                            <FiCheck
                                                size={16}
                                                className="mt-0.5 shrink-0"
                                            />
                                        ) : (
                                            <FiAlertCircle
                                                size={16}
                                                className="mt-0.5 shrink-0"
                                            />
                                        )}

                                        <span>{status.message}</span>
                                    </div>
                                )}

                                {/* Submit */}

                                <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                                    <p className="max-w-[300px] text-[9px] leading-[1.6] text-[#071a3d]/35">
                                        By submitting this form, you are
                                        requesting our team to contact you
                                        regarding your project enquiry.
                                    </p>

                                    <motion.button
                                        type="submit"
                                        disabled={loading}
                                        whileHover={{
                                            y: -2,
                                        }}
                                        whileTap={{
                                            scale: 0.98,
                                        }}
                                        className="
                                            group
                                            inline-flex
                                            h-12
                                            shrink-0
                                            items-center
                                            justify-center
                                            gap-3
                                            bg-[#071a3d]
                                            px-6
                                            text-[10px]
                                            font-bold
                                            tracking-[0.16em]
                                            text-white
                                            transition-all
                                            duration-300
                                            hover:bg-[#c99618]
                                            hover:text-[#071a3d]
                                            disabled:cursor-not-allowed
                                            disabled:opacity-60
                                        "
                                    >
                                        {loading
                                            ? "SUBMITTING..."
                                            : "SEND ENQUIRY"}

                                        {!loading && (
                                            <FiArrowUpRight
                                                size={15}
                                                className="transition-transform duration-300 group-hover:translate-x-1"
                                            />
                                        )}
                                    </motion.button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* =====================================================
                OFFICES
            ===================================================== */}

            <section className="offices-section relative bg-white py-16 sm:py-20 lg:py-24">
                <div className="mx-auto max-w-[1450px] px-5 sm:px-8 lg:px-12 xl:px-16">
                    {/* Header */}

                    <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:items-end">
                        <div>
                            <div className="flex items-center gap-3">
                                <span className="h-[2px] w-8 bg-[#c99618]" />

                                <span className="text-[9px] font-bold tracking-[0.28em] text-[#c99618]">
                                    OUR LOCATIONS
                                </span>
                            </div>

                            <h2
                                className="
                                    mt-4
                                    text-[40px]
                                    font-semibold
                                    leading-[0.9]
                                    tracking-[-0.05em]
                                    sm:text-[52px]
                                    lg:text-[62px]
                                "
                            >
                                Find us
                                <br />
                                <span className="text-[#c99618]">
                                    near you.
                                </span>
                            </h2>
                        </div>

                        <p className="max-w-[400px] text-[12px] leading-[1.8] text-[#071a3d]/50 sm:text-[13px]">
                            With offices across key locations, Megha Systems
                            supports commercial, institutional and industrial
                            projects across India.
                        </p>
                    </div>

                    {/* Office cards */}

                    <div className="mt-12 grid gap-px overflow-hidden border border-[#071a3d]/10 bg-[#071a3d]/10 sm:grid-cols-2 lg:grid-cols-3">
                        {offices.map((office, index) => (
                            <motion.div
                                key={office.title}
                                className="
                                    office-card
                                    group
                                    relative
                                    min-h-[190px]
                                    bg-[#f8f9fa]
                                    p-6
                                    transition-colors
                                    duration-300
                                    hover:bg-[#071a3d]
                                    sm:p-7
                                    lg:p-8
                                "
                                whileHover={{
                                    y: -3,
                                }}
                            >
                                {/* Number */}

                                <div className="flex items-start justify-between">
                                    <span className="text-[10px] font-bold tracking-[0.2em] text-[#c99618]">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>

                                    <FiMapPin
                                        size={17}
                                        className="text-[#071a3d]/25 transition-colors duration-300 group-hover:text-[#c99618]"
                                    />
                                </div>

                                {/* City */}

                                <h3 className="mt-8 text-[24px] font-semibold tracking-[-0.03em] text-[#071a3d] transition-colors duration-300 group-hover:text-white">
                                    {office.title}
                                </h3>

                                {/* Address */}

                                <p className="mt-3 max-w-[310px] text-[11px] leading-[1.7] text-[#071a3d]/50 transition-colors duration-300 group-hover:text-white/50">
                                    {office.address}
                                </p>

                                {/* Bottom */}

                                <div className="absolute bottom-5 right-6">
                                    <FiArrowUpRight
                                        size={17}
                                        className="text-[#071a3d]/20 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#c99618]"
                                    />
                                </div>

                                {/* Gold line */}

                                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#c99618] transition-all duration-500 group-hover:w-full" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* =====================================================
                MAP
            ===================================================== */}

            <section className="map-section bg-[#f3f5f7] py-16 sm:py-20 lg:py-24">
                <div className="mx-auto max-w-[1450px] px-5 sm:px-8 lg:px-12 xl:px-16">
                    <div className="map-reveal overflow-hidden border border-[#071a3d]/10 bg-white">
                        {/* Map header */}

                        <div className="flex flex-col gap-4 border-b border-[#071a3d]/10 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6 lg:p-7">
                            <div>
                                <div className="flex items-center gap-3">
                                    <FiMapPin
                                        size={15}
                                        className="text-[#c99618]"
                                    />

                                    <span className="text-[9px] font-bold tracking-[0.25em] text-[#c99618]">
                                        MEGHA SYSTEMS
                                    </span>
                                </div>

                                <h3 className="mt-2 text-[24px] font-semibold tracking-[-0.03em]">
                                    Our presence across India
                                </h3>
                            </div>

                            <p className="max-w-[350px] text-[10px] leading-[1.7] text-[#071a3d]/45">
                                Visit one of our offices or contact our team to
                                discuss your upcoming project.
                            </p>
                        </div>

                        {/* Google map */}

                        <div className="relative h-[350px] w-full sm:h-[450px] lg:h-[520px]">
                            <iframe
                                title="Megha Systems Location"
                                src="https://www.google.com/maps?q=Megha%20Systems%20Faridabad%20Haryana&output=embed"
                                className="h-full w-full border-0 grayscale-[20%]"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />

                            {/* Map overlay label */}

                            <div className="pointer-events-none absolute bottom-5 left-5 bg-[#071a3d] px-5 py-4 text-white shadow-xl sm:bottom-7 sm:left-7">
                                <span className="text-[8px] font-bold tracking-[0.22em] text-[#c99618]">
                                    MEGHA SYSTEMS
                                </span>

                                <p className="mt-1 text-[11px] text-white/70">
                                    Faridabad • Delhi NCR
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* =====================================================
                FINAL CTA
            ===================================================== */}

            <section className="relative overflow-hidden bg-[#071a3d]">
                <div
                    className="
                        pointer-events-none
                        absolute
                        inset-0
                        opacity-[0.045]
                        [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)]
                        [background-size:55px_55px]
                    "
                />

                <div className="absolute right-[-100px] top-[-150px] h-[400px] w-[400px] rounded-full border border-[#c99618]/15" />

                <div className="relative z-10 mx-auto max-w-[1450px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 xl:px-16">
                    <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                        <div>
                            <span className="text-[9px] font-bold tracking-[0.28em] text-[#c99618]">
                                READY TO START?
                            </span>

                            <h2
                                className="
                                    mt-3
                                    max-w-[800px]
                                    text-[40px]
                                    font-semibold
                                    leading-[0.9]
                                    tracking-[-0.05em]
                                    text-white
                                    sm:text-[52px]
                                    lg:text-[64px]
                                "
                            >
                                Let's create a better
                                <br />
                                <span className="text-[#c99618]">
                                    restroom experience.
                                </span>
                            </h2>
                        </div>

                        <Link
                            href="/products"
                            className="
                                group
                                inline-flex
                                h-12
                                shrink-0
                                items-center
                                justify-center
                                gap-3
                                border
                                border-[#c99618]
                                px-6
                                text-[10px]
                                font-bold
                                tracking-[0.15em]
                                text-white
                                transition-all
                                duration-300
                                hover:bg-[#c99618]
                                hover:text-[#071a3d]
                            "
                        >
                            EXPLORE PRODUCTS

                            <FiArrowUpRight
                                size={15}
                                className="transition-transform duration-300 group-hover:translate-x-1"
                            />
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}