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
import { Mail, PhoneCall } from "lucide-react";

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
            <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-[#071a3d] text-white">
                {/* Background Image */}
                <div className="absolute inset-0 bg-cover bg- bg-no-repeat" style={{ backgroundImage: "url('/ChatGPT Image Sep 14, 2026, 05_32_46 PM.png')", }} />

                {/* Main Content */}
                <div className="relative z-10 mx-auto w-full max-w-[1500px] px-5 pb-16 pt-20 sm:px-8 sm:pb-20 lg:px-12 lg:py-20">
                    <div className="max-w-7xl flex flex-col items-center">
                        {/* Small Heading */}
                        <div className="about-hero-item mb-7 flex items-center gap-4">
                            <span className="h-px w-12 bg-[#fff]" />
                            <span className="text-[12px] font-semibold uppercase tracking-[0.28em] text-[#fff]">
                                GET IN TOUCH
                            </span>
                        </div>

                        {/* Main Heading */}
                        <h1 className="about-hero-item text-[#fff] text-5xl font-medium leading-[0.98] tracking-[-0.045em] sm:text-7xl">
                            Let's build {" "}
                            <span className="bg-[linear-gradient(90deg,rgba(239,172,57,1)_0%,rgba(229,139,59,1)_38%,rgba(223,117,57,1)_72%,rgba(216,85,56,1)_100%)] bg-clip-text text-[#fff]">
                                your space.
                            </span>
                        </h1>

                        {/* Buttons */}
                        <div className="about-hero-item mt-10 flex flex-wrap gap-4">
                            <Link
                                href="/products"
                                className="group inline-flex items-center gap-3 bg-[linear-gradient(90deg,rgba(239,172,57,1)_0%,rgba(229,139,59,1)_38%,rgba(223,117,57,1)_72%,rgba(216,85,56,1)_100%)] px-6 py-4 text-sm font-semibold text-[#071a3d] transition-all duration-300 hover:bg-[#e5b53c]"
                            >
                                Explore Our Products
                                <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                            </Link>

                            <Link
                                href="/contact"
                                className="group inline-flex items-center gap-3 border border-white/40 bg-[#071a3d] px-6 py-4 text-sm font-medium text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-[#071a3d]"
                            >
                                Talk to Our Team
                                <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="contact-form-section relative bg-[#f5f3ed] py-16 sm:py-20 lg:py-24">
                <div className="mx-auto max-w-[1450px] px-5 sm:px-8 lg:px-12 xl:px-16">
                    <div className="grid gap-10 lg:grid-cols-[360px_minmax(0,1fr)] xl:grid-cols-[420px_minmax(0,1fr)] xl:gap-20">
                        {/* Intro */}
                        <div className="contact-form-reveal">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="h-[2px] w-8 bg-[#efac39]" />

                                <span className="text-[9px] font-bold tracking-[0.28em] text-[#efac39]">
                                    PROJECT ENQUIRY
                                </span>
                            </div>

                            <h2 className="max-w-[700px] text-[38px] font-medium leading-[1.05] tracking-[-0.04em] text-[#071a3d] sm:text-[48px] lg:text-[62px]">
                                Tell us about
                                <br />

                                <span className="bg-[linear-gradient(90deg,rgba(239,172,57,1)_0%,rgba(229,139,59,1)_38%,rgba(223,117,57,1)_72%,rgba(216,85,56,1)_100%)] bg-clip-text text-transparent">
                                    your project.
                                </span>
                            </h2>

                            <p className="mt-6 max-w-[350px] text-[12px] leading-[1.8] text-[#071a3d]/90 sm:text-[13px]">
                                Share your requirements and our team will help
                                you select the right restroom partition system
                                for your space.
                            </p>

                            <div className="mt-9 space-y-5 border-t border-[#071a3d]/10 pt-6">
                                <div className="flex gap-4">
                                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#071a3d] text-[#efac39]">
                                        <FiSend size={14} />
                                    </div>

                                    <div>
                                        <p className="text-[9px] font-bold tracking-[0.2em] text-[#071a3d]/40">
                                            QUICK RESPONSE
                                        </p>

                                        <p className="mt-1 text-[12px] font-medium">
                                            Our team will contact you shortly.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#071a3d] text-[#efac39]">
                                        <FiClock size={14} />
                                    </div>

                                    <div>
                                        <p className="text-[9px] font-bold tracking-[0.2em] text-[#071a3d]/40">
                                            PROJECT SUPPORT
                                        </p>

                                        <p className="mt-1 text-[12px] font-medium">
                                            Product selection & project guidance
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-9 space-y-5 border-t border-[#071a3d]/10 pt-6">
                                <div className="flex gap-4">
                                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#071a3d] text-[#efac39]">
                                        <Mail size={14} />
                                    </div>

                                    <div>
                                        <p className="text-[9px] font-bold tracking-[0.2em] text-[#071a3d]/40">
                                            Mail
                                        </p>

                                        <p className="mt-1 text-[12px] font-medium">
                                            cubiloocubicles@gmail.com
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#071a3d] text-[#efac39]">
                                        <PhoneCall size={14} />
                                    </div>

                                    <div>
                                        <p className="text-[9px] font-bold tracking-[0.2em] text-[#071a3d]/40">
                                            Call
                                        </p>

                                        <p className="mt-1 text-[12px] font-medium">
                                            783-783-0803
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
                                <div className="absolute right-0 top-0 h-14 w-14 border-b border-l border-[#efac39]/40" />

                                {/* Form heading */}
                                <div className="mb-6">
                                    <span className="text-[9px] font-bold tracking-[0.25em] text-[#efac39]">
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
                                            className="mb-2 block text-[10px] font-bold tracking-[0.18em] text-[#071a3d]/80"
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
                                                placeholder:text-[#071a3d]/60
                                                focus:border-[#c99618]
                                                focus:bg-white
                                            "
                                        />
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="mb-2 block text-[9px] font-bold tracking-[0.18em] text-[#071a3d]/80"
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
                                                placeholder:text-[#071a3d]/60
                                                focus:border-[#c99618]
                                                focus:bg-white
                                            "
                                        />
                                    </div>

                                    {/* Phone */}
                                    <div>
                                        <label
                                            htmlFor="phone"
                                            className="mb-2 block text-[9px] font-bold tracking-[0.18em] text-[#071a3d]/80"
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
                                                placeholder:text-[#071a3d]/60
                                                focus:border-[#c99618]
                                                focus:bg-white
                                            "
                                        />
                                    </div>

                                    {/* Product */}
                                    <div>
                                        <label
                                            htmlFor="product"
                                            className="mb-2 block text-[9px] font-bold tracking-[0.18em] text-[#071a3d]/80"
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
                                        className="mb-2 block text-[10px] font-bold tracking-[0.18em] text-[#071a3d]/80"
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
                                            placeholder:text-[#071a3d]/60
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

                                            ${status.type === "success"
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
                                <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                                    <p className="max-w-[300px] text-[10px] leading-[1.6] text-[#071a3d]/80">
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

            <section className="offices-section relative bg-white py-10 sm:py-12 lg:py-15">
                <div className="mx-auto max-w-[1450px] px-5 sm:px-8 lg:px-12 xl:px-16">
                    {/* Header */}
                    <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:items-end">
                        <div>
                            <div className="flex items-center gap-3">
                                <span className="h-[2px] w-8 bg-[#efac39]" />

                                <span className="text-[9px] font-bold tracking-[0.28em] text-[#efac39]">
                                    OUR LOCATIONS
                                </span>
                            </div>

                            <h2 className="max-w-[700px] text-[38px] font-medium leading-[1.05] tracking-[-0.04em] text-[#071a3d] sm:text-[48px] lg:text-[62px]">
                                Find us
                                <br />

                                <span className="bg-[linear-gradient(90deg,rgba(239,172,57,1)_0%,rgba(229,139,59,1)_38%,rgba(223,117,57,1)_72%,rgba(216,85,56,1)_100%)] bg-clip-text text-transparent">
                                    near you.
                                </span>
                            </h2>
                        </div>

                        <p className="max-w-[400px] text-[12px] leading-[1.8] text-[#071a3d]/80 sm:text-[13px]">
                            With offices across key locations, Cubiloo Cubicles
                            supports commercial, institutional and industrial
                            projects across India.
                        </p>
                    </div>

                    {/* Office cards */}
                    <div className="mt-8 grid gap-px overflow-hidden border border-[#071a3d]/10 bg-[#071a3d]/10 sm:grid-cols-2 lg:grid-cols-3">
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
                                    <span className="text-[10px] font-bold tracking-[0.2em] text-[#efac39]">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>

                                    <FiMapPin
                                        size={17}
                                        className="text-[#071a3d]/80 transition-colors duration-300 group-hover:text-[#efac39]"
                                    />
                                </div>

                                {/* City */}

                                <h3 className="mt-8 text-[24px] font-semibold tracking-[-0.03em] text-[#071a3d] transition-colors duration-300 group-hover:text-white">
                                    {office.title}
                                </h3>

                                {/* Address */}

                                <p className="mt-3 max-w-[310px] text-[11px] leading-[1.7] text-[#071a3d]/80 transition-colors duration-300 group-hover:text-white/80">
                                    {office.address}
                                </p>

                                {/* Bottom */}

                                <div className="absolute bottom-5 right-6">
                                    <FiArrowUpRight
                                        size={17}
                                        className="text-[#071a3d]/20 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#efac39]"
                                    />
                                </div>

                                {/* Gold line */}

                                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#efac39] transition-all duration-500 group-hover:w-full" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="map-section bg-[#f5f3ed] py-16 sm:py-20 lg:py-24">
                <div className="mx-auto max-w-[1450px] rounded-2xl px-5 sm:px-8 lg:px-12 xl:px-16">
                    <div className="map-reveal rounded-2xl overflow-hidden border border-[#071a3d]/10 bg-white">
                        {/* Map header */}
                        <div className="flex flex-col gap-4 border-b border-[#071a3d]/10 p-5 sm:flex-row sm:items-center sm:justify-between">
                            <div>
                                <div className="flex items-center gap-3">
                                    <FiMapPin
                                        size={15}
                                        className="text-[#efac39]"
                                    />

                                    <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#efac39]">
                                        Cubiloo Cubicles
                                    </span>
                                </div>

                                <h3 className="text-[24px] font-semibold tracking-[-0.03em]">
                                    Our presence across India
                                </h3>
                            </div>

                            <p className="max-w-[400px] text-[10px] leading-[1.7] text-[#071a3d]/80">
                                Visit one of our offices or contact our team to
                                discuss your upcoming project.
                            </p>
                        </div>

                        {/* Google map */}

                        <div className="relative h-[350px] w-full sm:h-[450px] lg:h-[520px]">
                            <iframe
                                title="Cubiloo Cubicles Location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3510.9068267438424!2d77.3600067!3d28.361666399999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdbe0b5eed79f%3A0xb843b6cdf62d7ece!2sAdore%20Business%20City!5e0!3m2!1sen!2sin!4v1792833582418!5m2!1sen!2sin"
                                className="h-full w-full border-0 grayscale-[20%]"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />

                            {/* Map overlay label */}

                            <div className="pointer-events-none absolute bottom-5 left-5 bg-[#071a3d] px-5 py-4 text-white shadow-xl sm:bottom-7 sm:left-7">
                                <span className="text-[8px] font-bold tracking-[0.22em] text-[#c99618]">
                                    CUBILOO CUBICLES
                                </span>

                                <p className="mt-1 text-[11px] text-white/70">
                                    Faridabad • Delhi NCR
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}