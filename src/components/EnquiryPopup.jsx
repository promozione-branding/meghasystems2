
"use client";

import { useEffect, useRef, useState } from "react";
import { X, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import axios from "axios";
import { navabarProducts } from "@/data";

const productOptions = Array.from(
    new Set(
        navabarProducts.map((product) => product.label)
            .filter(Boolean)
    )
);

const initialFormData = {
    name: "",
    email: "",
    phone: "",
    product: "",
    message: "",
};

export default function EnquiryPopup({ onClose, productName = "" }) {
    const [formData, setFormData] = useState(() => ({
        ...initialFormData,
        product: productName,
    }));
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);
    const successTimeout = useRef(null);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Escape") onClose();
        };

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [onClose]);

    useEffect(() => {
        return () => window.clearTimeout(successTimeout.current);
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((previous) => ({ ...previous, [name]: value }));
        setError("");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (loading) return;

        setLoading(true);
        setError("");
        setSuccess(false);
        const webisteUrl = window.location.hostname + window.location.pathname;

        try {
            const payload = {
                platform:
                    
                    webisteUrl || "Cubiloo Cubicles System",
                platformEmail: "cubiloocubicles@gmail.com",
                supplierToken: "6a9fb2bdd936bdc2bb1d6df7",
                name: formData.name,
                phone: formData.phone,
                email: formData.email || "N/A",
                place: "N/A",
                product: formData.product,
                message: formData.message || "N/A",
            };

            const { data } = await axios.post(
        "https://brandbnalo.com/api/form/add",
        payload
      );

            if (data?.success) {
                setSuccess(true);
                successTimeout.current = window.setTimeout(() => {
                    setSuccess(false);
                    setFormData(initialFormData);
                    onClose();
                }, 2000);
            } else {
                setError(data?.message || "Submission failed. Please try again.");
            }
        } catch (submitError) {
            console.error("Form submission error:", submitError);
            setError(
                submitError?.response?.data?.message ||
                    "Something went wrong. Please try again."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div
            className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/75 backdrop-blur-sm p-4"
            onMouseDown={(event) => {
                if (event.target === event.currentTarget) onClose();
            }}
        >

            <div className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-[#f5f4ed] shadow-2xl">

                {/* Close Button */}
                <button
                    onClick={onClose}
                    type="button"
                    aria-label="Close enquiry form"
                    className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-black text-white transition hover:bg-[#dfff00] hover:text-black"
                >
                    <X size={19} />
                </button>

                <div className="grid md:grid-cols-2">

                    {/* LEFT CONTENT */}
                    {/* LEFT CONTENT - Hidden on Mobile */}
                    <div className="relative hidden flex-col justify-between overflow-hidden bg-[#10120b] p-5 text-white sm:p-10 md:flex">
                        {/* Background Image */}
                        <div className="relative my-6 flex min-h-[180px] flex-1 items-center justify-center">
                            <svg
                                viewBox="0 0 320 230"
                                fill="none"
                                className="h-full max-h-[235px] w-full"
                                aria-hidden="true"
                            >
                                {/* Rotating technical ring */}
                                <motion.circle
                                    cx="160"
                                    cy="115"
                                    r="100"
                                    stroke="#dddf00"
                                    strokeWidth="0.8"
                                    strokeDasharray="3 10"
                                    opacity="0.25"
                                    style={{ transformOrigin: "160px 115px" }}
                                    animate={{ rotate: 360 }}
                                    transition={{
                                        duration: 55,
                                        repeat: Infinity,
                                        ease: "linear",
                                    }}
                                />

                                {/* Main cubicle perspective */}
                                <motion.g
                                    stroke="#dddf00"
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    fill="none"
                                    initial={{ opacity: 0, pathLength: 0 }}
                                    whileInView={{ opacity: 1, pathLength: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.5 }}
                                >
                                    {/* Outer cubicle */}
                                    <path
                                        d="M52 65L160 25L268 65V178L160 213L52 178Z"
                                        strokeWidth="1.3"
                                        opacity="0.6"
                                    />

                                    {/* Top perspective */}
                                    <path
                                        d="M52 65L160 104L268 65"
                                        strokeWidth="1.2"
                                        opacity="0.5"
                                    />

                                    {/* Center vertical */}
                                    <path
                                        d="M160 104V213"
                                        strokeWidth="1"
                                        opacity="0.5"
                                    />

                                    {/* Left partition */}
                                    <path
                                        d="M78 74L119 89V185L78 171Z"
                                        strokeWidth="1.6"
                                    />

                                    {/* Inner partition */}
                                    <path
                                        d="M119 89L160 75V170L119 185Z"
                                        strokeWidth="1.3"
                                    />

                                    {/* Right door frame */}
                                    <path
                                        d="M174 98L245 73V168L174 193Z"
                                        strokeWidth="1.8"
                                    />

                                    {/* Right door panel */}
                                    <path
                                        d="M185 104L235 87V162L185 179Z"
                                        strokeWidth="1.2"
                                        opacity="0.75"
                                    />

                                    {/* Door handle */}
                                    <circle
                                        cx="222"
                                        cy="131"
                                        r="3.5"
                                        fill="#dddf00"
                                        stroke="none"
                                    />

                                    {/* Construction guides */}
                                    <path
                                        d="M35 42V192M285 42V192"
                                        strokeWidth="0.8"
                                        strokeDasharray="4 7"
                                        opacity="0.25"
                                    />

                                    <path
                                        d="M27 42H43M27 192H43M277 42H293M277 192H293"
                                        strokeWidth="1"
                                        opacity="0.35"
                                    />
                                </motion.g>

                                {/* Animated marker */}
                                <motion.circle
                                    cx="160"
                                    cy="115"
                                    r="3"
                                    fill="#dddf00"
                                    animate={{
                                        opacity: [0.3, 1, 0.3],
                                        scale: [0.8, 1.3, 0.8],
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                    style={{ transformOrigin: "160px 115px" }}
                                />
                            </svg>
                        </div>

                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />

                        <div className="relative z-10">
                            <span className="inline-block rounded-full border border-[#dfff00]/40 px-3 py-1 text-[10px] font-semibold uppercase tracking-[2px] text-[#dfff00]">
                                Product Enquiry
                            </span>

                            <h2 className="mt-8 max-w-sm text-3xl font-semibold leading-tight sm:text-4xl">
                                Let's find the
                                <span className="text-[#dfff00]"> right storage </span>
                                solution.
                            </h2>

                            <p className="mt-4 max-w-xs text-sm leading-6 text-white/65">
                                Looking for the perfect storage solution?
                                Share your requirements and our team will help you
                                find the right product.
                            </p>
                        </div>

                        <div className="relative z-10 mt-10">
                            <p className="text-xs uppercase tracking-widest text-white/50">
                                Designed for better spaces.
                            </p>
                        </div>
                    </div>

                    {/* RIGHT FORM */}
                    <div className="p-4 sm:p-9">

                        <div className="mb-3">
                            <p className="text-[10px] font-bold uppercase tracking-[2px] text-[#8c9c00]">
                                Get In Touch
                            </p>

                            <h3 className="mt-2 text-2xl font-bold text-[#171810]">
                                Send an Enquiry
                            </h3>

                            <p className="mt-2 text-sm text-gray-500">
                                Fill in your details and we'll get back to you.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-2">

                            {/* NAME */}
                            <div>
                                <label className="mb-0.5 block text-xs font-semibold text-[#272820]">
                                    Full Name *
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    placeholder="Enter your name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full rounded-lg border border-[#deded3] bg-white px-4 py-3 text-sm text-black outline-none transition focus:border-[#a9bd00]"
                                />
                            </div>

                            {/* EMAIL */}
                            <div>
                                <label className="mb-0.5 block text-xs font-semibold text-[#272820]">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full rounded-lg border border-[#deded3] bg-white px-4 py-3 text-sm text-black outline-none transition focus:border-[#a9bd00]"
                                />
                            </div>

                            {/* PHONE */}
                            <div>
                                <label className="mb-0.5 block text-xs font-semibold text-[#272820]">
                                    Phone Number *
                                </label>
                                <div className="flex overflow-hidden rounded-lg border border-[#deded3] bg-white focus-within:border-[#a9bd00]">
                                    <span className="border-r border-[#deded3] px-3 py-3 text-sm text-gray-500">
                                        +91
                                    </span>
                                    <input
                                        type="tel"
                                        name="phone"
                                        required
                                        maxLength={10}
                                        pattern="[0-9]{10}"
                                        placeholder="Enter phone number"
                                        value={formData.phone}
                                        onChange={(e) => {
                                            setFormData((previous) => ({
                                                ...previous,
                                                phone: e.target.value.replace(/\D/g, "").slice(0, 10),
                                            }));
                                            setError("");
                                        }}
                                        className="w-full px-3 py-3 text-sm text-black outline-none"
                                    />
                                </div>
                            </div>

                            {/* PRODUCT */}
                            <div>
                                <label className="mb-0.5 block text-xs font-semibold text-[#272820]">
                                    Select Product *
                                </label>
                                <select
                                    name="product"
                                    required
                                    value={formData.product}
                                    onChange={handleChange}
                                    className="w-full rounded-lg border border-[#deded3] bg-white px-4 py-3 text-sm text-gray-600 outline-none focus:border-[#a9bd00]"
                                >
                                    <option value="">Choose a product</option>
                                    {productOptions.map((productName) => (
                                        <option key={productName} value={productName}>
                                            {productName}
                                        </option>
                                    ))}
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            {/* MESSAGE */}
                            <div>
                                <label className="mb-0.5 block text-xs font-semibold text-[#272820]">
                                    Your Message
                                </label>
                                <textarea
                                    name="message"
                                    rows={3}
                                    placeholder="Tell us about your requirements..."
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full resize-none rounded-lg border border-[#deded3] bg-white px-4 py-3 text-sm text-black outline-none transition focus:border-[#a9bd00]"
                                />
                            </div>

                            {error && (
                                <p className="text-sm text-red-600" role="alert">
                                    {error}
                                </p>
                            )}
                            {success && (
                                <p className="text-sm text-green-700" role="status">
                                    Your enquiry was sent successfully.
                                </p>
                            )}

                            {/* SUBMIT */}
                            <button
                                type="submit"
                                disabled={loading || success}
                                className="group flex w-full items-center justify-center gap-3 rounded-lg bg-[#dfff00] px-5 py-3.5 text-sm font-bold uppercase tracking-wider text-black transition hover:bg-black hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
                            >
                                {loading ? "Sending..." : success ? "Enquiry Sent" : "Send Enquiry"}
                                {!loading && !success && (
                                    <ArrowUpRight
                                        size={18}
                                        className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                                    />
                                )}
                            </button>

                            <p className="text-center text-[10px] text-gray-400">
                                Your information is safe with us.
                            </p>

                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
}
