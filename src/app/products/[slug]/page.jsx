import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
    ArrowLeft,
    ArrowUpRight,
    Check,
    ChevronRight,
    Mail,
    MessageCircle,
    Phone,
    Ruler,
    ShieldCheck,
    Sparkles,
} from "lucide-react";

import { allProducts } from "@/data";

/* =========================================================
   CONFIG
========================================================= */

// Replace these with your actual business numbers.
const WHATSAPP_NUMBER = "91XXXXXXXXXX";
const PHONE_NUMBER = "+91XXXXXXXXXX";


/* =========================================================
   FIND PRODUCT
========================================================= */

function getProductBySlug(slug) {
    for (const category of allProducts) {
        const product = category.products?.find(
            (item) => item.slug === slug
        );

        if (product) {
            return {
                product,
                category,
            };
        }
    }

    return null;
}


/* =========================================================
   METADATA
========================================================= */

export async function generateMetadata({ params }) {
    const { slug } = await params;

    const result = getProductBySlug(slug);

    if (!result) {
        return {
            title: "Product Not Found | Cubiloo Cubicles",
        };
    }

    const { product } = result;
    return {
        title: product.metaTitle || `${product.name} | Cubiloo Cubicles`,
        description:
            product.metaDescription ||
            product.shortDescription ||
            `Explore ${product.name} by Cubiloo Cubicles.`,
    };
}


/* =========================================================
   PAGE
========================================================= */

export default async function ProductPage({ params }) {
    const { slug } = await params;

    const result = getProductBySlug(slug);

    if (!result) {
        return (
            <main className="min-h-screen bg-[#f5f3ee] px-5 py-40">
                <div className="mx-auto max-w-4xl text-center">
                    <span className="text-[11px] font-semibold tracking-[0.3em] text-[#dddf00]">
                        PRODUCT
                    </span>

                    <h1 className="mt-4 text-4xl font-semibold text-[#071720] md:text-6xl">
                        Product Not Found
                    </h1>

                    <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-500">
                        The product you are looking for could not be found.
                    </p>

                    <Link
                        href="/products"
                        className="mt-8 inline-flex items-center gap-3 bg-[#071720] px-7 py-4 text-xs font-semibold tracking-[0.15em] text-white transition hover:bg-[#dddf00]"
                    >
                        <ArrowLeft size={16} />
                        BACK TO PRODUCTS
                    </Link>
                </div>
            </main>
        );
    }

    const { product, category } = result;

    const whatsappMessage = encodeURIComponent(
        `Hello Cubiloo Cubicles,\n\nI am interested in the ${product.name} toilet cubicle system.\n\nPlease share pricing, specifications and quotation details.`
    );

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

    return (
        <main className="overflow-hidden bg-[#f5f3ee] text-[#071720]">
            <section className="relative border-b border-[#071720]/10 bg-[#f5f3ee] pt-10 md:pt-30">
                {/* Architectural background */}
                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                    <div className="absolute -right-40 top-20 h-[500px] w-[500px] rounded-full border border-[#dddf00]/10" />
                    <div className="absolute -right-20 top-40 h-[350px] w-[350px] rounded-full border border-[#071720]/5" />

                    <div className="absolute left-[8%] top-32 h-px w-[84%] bg-[#071720]/5" />
                    <div className="absolute left-[8%] top-32 h-[500px] w-px bg-[#071720]/5" />
                </div>

                <div className="relative mx-auto max-w-[1500px] px-5 pb-16 sm:px-8 md:px-12 lg:pb-24">
                    {/* Breadcrumb */}
                    <div className="mb-8 flex flex-wrap items-center gap-2 text-[10px] font-semibold tracking-[0.2em] text-[#071720]/70">
                        <Link
                            href="/products"
                            className="transition hover:text-[#dddf00]"
                        >
                            PRODUCTS
                        </Link>

                        <ChevronRight size={13} />

                        <span>{category.categoryName}</span>

                        <ChevronRight size={13} />

                        <span className="text-[#071720]">{product.name}</span>
                    </div>

                    <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
                        <div>

                            <div className="mb-5 flex items-center gap-3">
                                <span className="h-px w-10 bg-[#dddf00]" />

                                <span className="text-[10px] font-bold tracking-[0.35em] text-[#dddf00]">
                                    {category.categoryName}
                                </span>
                            </div>

                            <h1 className="max-w-3xl text-[clamp(2.8rem,6vw,6.5rem)] font-semibold leading-[0.9] tracking-[-0.055em] text-[#071720]">
                                {product.name}
                            </h1>

                            <p className="mt-6 max-w-2xl text-lg font-medium leading-8 text-[#071720]/60">
                                {product.shortDescription}
                            </p>

                            {/* Product quick information */}
                            <div className="mt-8 grid max-w-xl grid-cols-2 gap-px border border-[#071720]/10 bg-[#071720]/10 sm:grid-cols-3">

                                <div className="bg-[#fff] p-4">
                                    <Ruler
                                        size={18}
                                        strokeWidth={1.5}
                                        className="text-[#dddf00]"
                                    />

                                    <p className="mt-3 text-[9px] font-bold tracking-[0.18em] text-[#071720]/60">
                                        DIMENSIONS
                                    </p>

                                    <p className="mt-1 text-sm font-semibold">
                                        {product.imgSpecs?.dimensions || "Custom"}
                                    </p>
                                </div>

                                <div className="bg-[#fff] p-4">
                                    <ShieldCheck
                                        size={18}
                                        strokeWidth={1.5}
                                        className="text-[#dddf00]"
                                    />

                                    <p className="mt-3 text-[9px] font-bold tracking-[0.18em] text-[#071720]/60">
                                        FEATURES
                                    </p>

                                    <p className="mt-1 text-sm font-semibold">
                                        {product.keyFeatures?.length || 0}+
                                    </p>
                                </div>

                                <div className="bg-[#fff] p-4">
                                    <Sparkles
                                        size={18}
                                        strokeWidth={1.5}
                                        className="text-[#dddf00]"
                                    />

                                    <p className="mt-3 text-[9px] font-bold tracking-[0.18em] text-[#071720]/60">
                                        SYSTEM
                                    </p>

                                    <p className="mt-1 text-sm font-semibold">
                                        Premium
                                    </p>
                                </div>

                            </div>

                            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                                {/* Inquiry */}
                                <Link
                                    href={`/contact-us?type=inquiry&product=${encodeURIComponent(
                                        product.name
                                    )}`}
                                    className="group inline-flex min-h-[52px] items-center justify-center gap-3 bg-[#dddf00] px-6 text-xs font-bold tracking-[0.12em] text-white transition duration-300 hover:bg-[#071720]"
                                >
                                    <Mail size={17} />

                                    INQUIRY NOW

                                    <ArrowUpRight
                                        size={16}
                                        className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                                    />
                                </Link>


                                {/* WhatsApp */}
                                <a
                                    href={whatsappUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex min-h-[52px] items-center justify-center gap-3 border border-[#071720] bg-[#071720] px-6 text-xs font-bold tracking-[0.12em] text-white transition duration-300 hover:bg-[#dddf00] hover:border-[#dddf00]"
                                >
                                    <MessageCircle size={17} />

                                    WHATSAPP US
                                </a>


                                {/* Call */}
                                <a
                                    href={`tel:${PHONE_NUMBER}`}
                                    className="inline-flex min-h-[52px] items-center justify-center gap-3 border border-[#071720]/20 bg-transparent px-6 text-xs font-bold tracking-[0.12em] text-[#071720] transition duration-300 hover:border-[#071720] hover:bg-[#071720] hover:text-white"
                                >
                                    <Phone size={17} />

                                    CALL US
                                </a>
                            </div>
                        </div>

                        <div className="relative">

                            <div className="absolute -right-5 -top-5 h-20 w-20 border-r border-t border-[#dddf00]/50 md:-right-8 md:-top-8 md:h-28 md:w-28" />

                            <div className="absolute -bottom-5 -left-5 h-20 w-20 border-b border-l border-[#071720]/20 md:-bottom-8 md:-left-8 md:h-28 md:w-28" />

                            <div className="relative aspect-[4/3] overflow-hidden bg-white">

                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    priority
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                                />

                                <div className="absolute left-0 top-0 bg-[#071720] px-4 py-3 text-[9px] font-bold tracking-[0.2em] text-white">
                                    CUBILOO CUBICLES
                                </div>

                                <div className="absolute bottom-0 right-0 bg-[#dddf00] px-5 py-3 text-[9px] font-bold tracking-[0.2em] text-white">
                                    {category.categoryName}
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {product.dimensions?.length > 0 && (
                <section className="border-y border-[#071720]/10 bg-white py-12 md:py-15">
                    <div className="mx-auto max-w-[1500px] px-5 sm:px-8 md:px-12">
                        <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
                            {/* Heading */}
                            <div>
                                <span className="text-[12px] mb-4 font-bold tracking-[0.35em] text-[#dddf00]">
                                    DIMENSIONS
                                </span>

                                <h2 className="max-w-[700px] text-[38px] font-medium leading-[1.05] tracking-[-0.04em] text-[#071720] sm:text-[48px] lg:text-[62px]">
                                    Built to fit
                                    <br />

                                    <span className="bg-[linear-gradient(90deg,#b8c900_0%,#dddf00_35%,#f0f542_65%,#a9c000_100%)] bg-clip-text text-transparent">
                                        your space.
                                    </span>
                                </h2>

                                <p className="mt-6 max-w-md text-sm leading-7 text-[#071720]/80">
                                    Standard dimensions are shown below. Custom configurations
                                    can be discussed with our team according to your project
                                    requirements.
                                </p>

                                {product.imgSpecs && (
                                    <div className="mt-8 inline-flex flex-col border-l-2 border-[#dddf00] pl-5">

                                        <span className="text-[9px] font-bold tracking-[0.2em] text-slate-400">
                                            IMAGE SPECIFICATION
                                        </span>

                                        {product.imgSpecs.dimensions && (
                                            <span className="mt-2 text-xl font-semibold text-[#071720]">
                                                {product.imgSpecs.dimensions}
                                            </span>
                                        )}

                                        {product.imgSpecs.clearance && (
                                            <span className="mt-1 text-xs text-slate-500">
                                                Ground clearance: {product.imgSpecs.clearance} mm
                                            </span>
                                        )}

                                    </div>
                                )}
                            </div>

                            {/* Table */}
                            <div className="overflow-x-auto">
                                <div className="min-w-[650px]">
                                    {/* Header */}
                                    <div className="grid grid-cols-[1.5fr_1fr_1fr] border-b-2 border-[#071720] bg-[#071720] text-white">

                                        <div className="px-5 py-4 text-[10px] font-bold tracking-[0.15em]">
                                            DIMENSION
                                        </div>

                                        <div className="border-l border-white/10 px-5 py-4 text-[10px] font-bold tracking-[0.15em]">
                                            REGULAR
                                        </div>

                                        <div className="border-l border-white/10 px-5 py-4 text-[10px] font-bold tracking-[0.15em]">
                                            SPECIALLY ABLED
                                        </div>

                                    </div>


                                    {/* Rows */}
                                    {product.dimensions.map((dimension, index) => (
                                        <div
                                            key={`${dimension.name}-${index}`}
                                            className="grid grid-cols-[1.5fr_1fr_1fr] border-b border-[#071720]/10 transition hover:bg-[#f5f3ee]"
                                        >

                                            <div className="px-5 py-5 text-xs font-semibold text-[#071720]">
                                                {dimension.name}
                                            </div>

                                            <div className="border-l border-[#071720]/10 px-5 py-5 text-sm text-slate-600">
                                                {dimension.regular}
                                                <span className="ml-1 text-[9px] text-slate-400">
                                                    mm
                                                </span>
                                            </div>

                                            <div className="border-l border-[#071720]/10 px-5 py-5 text-sm text-slate-600">
                                                {dimension.speciallyAbled}
                                                <span className="ml-1 text-[9px] text-slate-400">
                                                    mm
                                                </span>
                                            </div>

                                        </div>
                                    ))}

                                </div>

                            </div>
                        </div>
                    </div>
                </section>
            )}

            {product.keyFeatures?.length > 0 && (
                <section className="relative overflow-hidden bg-[#f5f3ee] py-12 md:py-16">
                    {/* Background architectural lines */}
                    <div className="pointer-events-none absolute inset-0 opacity-40">
                        <div className="absolute left-[10%] top-0 h-full w-px bg-[#071720]/10" />
                        <div className="absolute left-[30%] top-0 h-full w-px bg-[#071720]/5" />
                        <div className="absolute right-[15%] top-0 h-full w-px bg-[#071720]/5" />
                        <div className="absolute left-0 top-[35%] h-px w-full bg-[#071720]/5" />
                        <div className="absolute left-0 top-[70%] h-px w-full bg-[#071720]/5" />
                    </div>

                    <div className="relative mx-auto max-w-[1500px] px-5 sm:px-8 md:px-12">
                        <div className="mb-8 flex flex-col justify-between gap-6 md:flex-row md:items-end">
                            <div>
                                <span className="text-[12px] mb-4 font-bold tracking-[0.35em] text-[#dddf00]">
                                    KEY FEATURES
                                </span>

                                <h2 className="max-w-[700px] text-[38px] font-medium leading-[1.05] tracking-[-0.04em] text-[#071720] sm:text-[48px] lg:text-[62px]">
                                    Designed around
                                    <br />

                                    <span className="bg-[linear-gradient(90deg,#b8c900_0%,#dddf00_35%,#f0f542_65%,#a9c000_100%)] bg-clip-text text-transparent">
                                        performance.
                                    </span>
                                </h2>
                            </div>

                            <p className="max-w-md text-sm leading-7 text-[#071720]/80">
                                Every element is selected to provide durability, functionality
                                and a refined architectural finish.
                            </p>
                        </div>

                        <div className="grid gap-px border border-[#071720]/10 bg-[#071720]/10 sm:grid-cols-2">
                            {product.keyFeatures.map((feature, index) => (
                                <article
                                    key={`${feature.name}-${index}`}
                                    className="group bg-white p-7 transition duration-300 hover:bg-[#071720] md:p-9"
                                >

                                    <div className="flex items-start justify-between gap-5">

                                        <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#dddf00]/40 text-xs font-bold text-[#dddf00] transition group-hover:border-[#dddf00]">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>

                                        <Check
                                            size={20}
                                            className="text-[#dddf00] opacity-50 transition group-hover:opacity-100"
                                        />

                                    </div>

                                    <h3 className="mt-8 text-xl font-semibold tracking-[-0.02em] text-[#071720] transition group-hover:text-white">
                                        {feature.name}
                                    </h3>

                                    <p className="mt-4 text-sm leading-7 text-[#071720]/80 transition group-hover:text-white/60">
                                        {feature.description}
                                    </p>

                                </article>
                            ))}

                        </div>
                    </div>
                </section>
            )}

            {(product.hardwareImg || product.rightImg) && (
                <section className="bg-[#fff] py-12 md:py-16">
                    <div className="mx-auto max-w-[1500px] px-5 sm:px-8 md:px-12">
                        <div className="mb-8">
                            <span className="text-[12px] mb-4 font-bold tracking-[0.35em] text-[#dddf00]">
                                PRODUCT DETAILS
                            </span>

                            <h2 className="max-w-[700px] text-[38px] font-medium leading-[1.05] tracking-[-0.04em] text-[#071720] sm:text-[48px] lg:text-[62px]">
                                Details that define
                                <br />

                                <span className="bg-[linear-gradient(90deg,#b8c900_0%,#dddf00_35%,#f0f542_65%,#a9c000_100%)] bg-clip-text text-transparent">
                                    the system.
                                </span>
                            </h2>
                        </div>

                        <div className="grid gap-6 md:grid-cols-2">

                            {/* Hardware */}
                            {product.hardwareImg && (
                                <div className="group border border-[#071720]/20 relative overflow-hidden bg-white">

                                    <div className="relative aspect-[4/3]">

                                        <Image
                                            src={product.hardwareImg}
                                            alt={`${product.name} hardware`}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                            className="object-contain p-8 transition duration-700 group-hover:scale-[1.04] md:p-12"
                                        />

                                        <div className="absolute left-0 top-0 border-r border-b border-[#dddf00]/30 bg-white/90 px-5 py-4 backdrop-blur">
                                            <p className="text-[9px] font-bold tracking-[0.25em] text-[#dddf00]">
                                                HARDWARE
                                            </p>

                                            <p className="mt-1 text-sm font-semibold text-[#071720]">
                                                Premium Hardware
                                            </p>
                                        </div>

                                    </div>

                                </div>
                            )}


                            {/* Right image */}
                            {product.rightImg && (
                                <div className="group border border-[#071720]/20 relative overflow-hidden bg-white">

                                    <div className="relative aspect-[4/3]">

                                        <Image
                                            src={product.rightImg}
                                            alt={`${product.name} product detail`}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                            className="object- transition duration-700 group-hover:scale-[1.04]"
                                        />

                                        <div className="absolute bottom-0 left-0 bg-[#071720]/95 px-5 py-4">
                                            <p className="text-[9px] font-bold tracking-[0.25em] text-[#dddf00]">
                                                DETAIL VIEW
                                            </p>

                                            <p className="mt-1 text-sm font-semibold text-white">
                                                {product.name}
                                            </p>
                                        </div>

                                    </div>

                                </div>
                            )}

                        </div>
                    </div>
                </section>
            )}

            <section className="relative overflow-hidden bg-[#f5f3ee] pt-10 sm:pt-12 lg:pt-14 pb-70">
                <div className="pointer-events-none absolute inset-0">

                    <div className="absolute -right-32 -top-32 h-[450px] w-[450px] rounded-full border border-[#071720]/10" />

                    <div className="absolute -right-10 -top-10 h-[300px] w-[300px] rounded-full border border-[#071720]/10" />

                    <div className="absolute bottom-0 left-0 h-px w-full bg-[#071720]/20" />

                </div>

                <div className="relative mx-auto max-w-[1200px] px-5 text-center sm:px-8">
                    <span className="text-[12px] font-bold tracking-[0.4em] text-[#dddf00]">
                        READY TO BUILD?
                    </span>

                    <h2 className="mx-auto mt-2 max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.04em] text-[#071720] md:text-6xl">
                        Bring{" "}
                        <span className="bg-[linear-gradient(90deg,#b8c900_0%,#dddf00_35%,#f0f542_65%,#a9c000_100%)] bg-clip-text text-transparent">
                            {product.name}
                        </span>{" "}
                        into your next project.
                    </h2>

                    <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-[#071720]/80 md:text-base">
                        Talk to our team about pricing, customization, dimensions,
                        installation and project requirements.
                    </p>

                    <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">

                        <Link
                            href={`/contact?type=inquiry&product=${encodeURIComponent(
                                product.name
                            )}`}
                            className="inline-flex min-h-[54px] items-center justify-center gap-3 bg-[#dddf00] px-8 text-xs font-bold tracking-[0.15em] text-white transition hover:bg-[#071720] hover:text-[#fff]"
                        >
                            <Mail size={17} />
                            SEND AN INQUIRY
                            <ArrowUpRight size={16} />
                        </Link>


                        <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex min-h-[54px] items-center justify-center gap-3 border border-[#071720]/80 px-8 text-xs font-bold tracking-[0.15em] text-[#071720] hover:text-white transition hover:border-[#dddf00] hover:bg-[#dddf00]"
                        >
                            <MessageCircle size={17} />
                            WHATSAPP US
                        </a>


                        <a
                            href={`tel:${PHONE_NUMBER}`}
                            className="inline-flex min-h-[54px] items-center justify-center gap-3 border border-[#071720]/40 px-8 text-xs font-bold tracking-[0.15em] bg-[#071720] text-white transition hover:border-white hover:bg-white hover:text-[#071720]"
                        >
                            <Phone size={17} />
                            CALL US
                        </a>

                    </div>
                </div>
            </section>
        </main>
    );
}