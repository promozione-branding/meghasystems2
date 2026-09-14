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
            title: "Product Not Found | Megha Systems",
        };
    }

    const { product } = result;
    return {
        title: product.metaTitle || `${product.name} | Megha Systems`,
        description:
            product.metaDescription ||
            product.shortDescription ||
            `Explore ${product.name} by Megha Systems.`,
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
                    <span className="text-[11px] font-semibold tracking-[0.3em] text-[#c99618]">
                        PRODUCT
                    </span>

                    <h1 className="mt-4 text-4xl font-semibold text-[#071a3d] md:text-6xl">
                        Product Not Found
                    </h1>

                    <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-500">
                        The product you are looking for could not be found.
                    </p>

                    <Link
                        href="/products"
                        className="mt-8 inline-flex items-center gap-3 bg-[#071a3d] px-7 py-4 text-xs font-semibold tracking-[0.15em] text-white transition hover:bg-[#c99618]"
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
        `Hello Megha Systems,\n\nI am interested in the ${product.name} toilet cubicle system.\n\nPlease share pricing, specifications and quotation details.`
    );

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

    return (
        <main className="overflow-hidden bg-[#f5f3ee] text-[#071a3d] mt-10">
            <section className="relative border-b border-[#071a3d]/10 bg-[#f5f3ee] pt-28 md:pt-32">

                {/* Architectural background */}
                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                    <div className="absolute -right-40 top-20 h-[500px] w-[500px] rounded-full border border-[#c99618]/10" />
                    <div className="absolute -right-20 top-40 h-[350px] w-[350px] rounded-full border border-[#071a3d]/5" />

                    <div className="absolute left-[8%] top-32 h-px w-[84%] bg-[#071a3d]/5" />
                    <div className="absolute left-[8%] top-32 h-[500px] w-px bg-[#071a3d]/5" />
                </div>

                <div className="relative mx-auto max-w-[1500px] px-5 pb-16 sm:px-8 md:px-12 lg:pb-24">

                    {/* Breadcrumb */}
                    <div className="mb-8 flex flex-wrap items-center gap-2 text-[10px] font-semibold tracking-[0.2em] text-slate-400">
                        <Link
                            href="/products"
                            className="transition hover:text-[#c99618]"
                        >
                            PRODUCTS
                        </Link>

                        <ChevronRight size={13} />

                        <span>{category.categoryName}</span>

                        <ChevronRight size={13} />

                        <span className="text-[#071a3d]">{product.name}</span>
                    </div>


                    <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">

                        {/* =================================================
                LEFT CONTENT
            ================================================= */}

                        <div>

                            <div className="mb-5 flex items-center gap-3">
                                <span className="h-px w-10 bg-[#c99618]" />

                                <span className="text-[10px] font-bold tracking-[0.35em] text-[#c99618]">
                                    {category.categoryName}
                                </span>
                            </div>

                            <h1 className="max-w-3xl text-[clamp(2.8rem,6vw,6.5rem)] font-semibold leading-[0.9] tracking-[-0.055em] text-[#071a3d]">
                                {product.name}
                            </h1>

                            <p className="mt-6 max-w-2xl text-lg font-medium leading-8 text-[#071a3d]/70 md:text-xl">
                                {product.shortDescription}
                            </p>


                            {/* Product quick information */}
                            <div className="mt-8 grid max-w-xl grid-cols-2 gap-px border border-[#071a3d]/10 bg-[#071a3d]/10 sm:grid-cols-3">

                                <div className="bg-[#f5f3ee] p-4">
                                    <Ruler
                                        size={18}
                                        strokeWidth={1.5}
                                        className="text-[#c99618]"
                                    />

                                    <p className="mt-3 text-[9px] font-bold tracking-[0.18em] text-slate-400">
                                        DIMENSIONS
                                    </p>

                                    <p className="mt-1 text-sm font-semibold">
                                        {product.imgSpecs?.dimensions || "Custom"}
                                    </p>
                                </div>

                                <div className="bg-[#f5f3ee] p-4">
                                    <ShieldCheck
                                        size={18}
                                        strokeWidth={1.5}
                                        className="text-[#c99618]"
                                    />

                                    <p className="mt-3 text-[9px] font-bold tracking-[0.18em] text-slate-400">
                                        FEATURES
                                    </p>

                                    <p className="mt-1 text-sm font-semibold">
                                        {product.keyFeatures?.length || 0}+
                                    </p>
                                </div>

                                <div className="bg-[#f5f3ee] p-4">
                                    <Sparkles
                                        size={18}
                                        strokeWidth={1.5}
                                        className="text-[#c99618]"
                                    />

                                    <p className="mt-3 text-[9px] font-bold tracking-[0.18em] text-slate-400">
                                        SYSTEM
                                    </p>

                                    <p className="mt-1 text-sm font-semibold">
                                        Premium
                                    </p>
                                </div>

                            </div>


                            {/* =================================================
                  CTA BUTTONS
              ================================================= */}

                            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">

                                {/* Inquiry */}
                                <Link
                                    href={`/contact?type=inquiry&product=${encodeURIComponent(
                                        product.name
                                    )}`}
                                    className="group inline-flex min-h-[52px] items-center justify-center gap-3 bg-[#c99618] px-6 text-xs font-bold tracking-[0.12em] text-white transition duration-300 hover:bg-[#071a3d]"
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
                                    className="inline-flex min-h-[52px] items-center justify-center gap-3 border border-[#071a3d] bg-[#071a3d] px-6 text-xs font-bold tracking-[0.12em] text-white transition duration-300 hover:bg-[#c99618] hover:border-[#c99618]"
                                >
                                    <MessageCircle size={17} />

                                    WHATSAPP US
                                </a>


                                {/* Call */}
                                <a
                                    href={`tel:${PHONE_NUMBER}`}
                                    className="inline-flex min-h-[52px] items-center justify-center gap-3 border border-[#071a3d]/20 bg-transparent px-6 text-xs font-bold tracking-[0.12em] text-[#071a3d] transition duration-300 hover:border-[#071a3d] hover:bg-[#071a3d] hover:text-white"
                                >
                                    <Phone size={17} />

                                    CALL US
                                </a>

                            </div>

                        </div>


                        {/* =================================================
                MAIN PRODUCT IMAGE
            ================================================= */}

                        <div className="relative">

                            <div className="absolute -right-5 -top-5 h-20 w-20 border-r border-t border-[#c99618]/50 md:-right-8 md:-top-8 md:h-28 md:w-28" />

                            <div className="absolute -bottom-5 -left-5 h-20 w-20 border-b border-l border-[#071a3d]/20 md:-bottom-8 md:-left-8 md:h-28 md:w-28" />

                            <div className="relative aspect-[4/3] overflow-hidden bg-white">

                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    priority
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-contain p-5 transition-transform duration-700 hover:scale-[1.03] md:p-10"
                                />

                                <div className="absolute left-0 top-0 bg-[#071a3d] px-4 py-3 text-[9px] font-bold tracking-[0.2em] text-white">
                                    MEGHA SYSTEMS
                                </div>

                                <div className="absolute bottom-0 right-0 bg-[#c99618] px-5 py-3 text-[9px] font-bold tracking-[0.2em] text-white">
                                    {category.categoryName}
                                </div>

                            </div>

                        </div>

                    </div>
                </div>
            </section>

            <section className="bg-[#071a3d] py-16 text-white md:py-24">

                <div className="mx-auto max-w-[1500px] px-5 sm:px-8 md:px-12">

                    <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">

                        <div>
                            <span className="text-[10px] font-bold tracking-[0.35em] text-[#c99618]">
                                01 / OVERVIEW
                            </span>

                            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.03em] md:text-5xl">
                                Engineered for
                                <br />
                                <span className="text-[#c99618]">
                                    performance.
                                </span>
                            </h2>
                        </div>

                        <div className="max-w-4xl">
                            <p className="text-xl leading-9 text-white/75 md:text-2xl md:leading-10">
                                {product.shortDescription}
                            </p>

                            {product.metaDescription && (
                                <p className="mt-7 max-w-3xl text-sm leading-7 text-white/45">
                                    {product.metaDescription}
                                </p>
                            )}
                        </div>

                    </div>

                </div>
            </section>

            {product.dimensions?.length > 0 && (
                <section className="border-y border-[#071a3d]/10 bg-white py-16 md:py-24">

                    <div className="mx-auto max-w-[1500px] px-5 sm:px-8 md:px-12">

                        <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">

                            {/* Heading */}
                            <div>

                                <span className="text-[10px] font-bold tracking-[0.35em] text-[#c99618]">
                                    02 / DIMENSIONS
                                </span>

                                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] md:text-5xl">
                                    Built to fit
                                    <br />
                                    <span className="text-[#c99618]">
                                        your space.
                                    </span>
                                </h2>

                                <p className="mt-6 max-w-md text-sm leading-7 text-slate-500">
                                    Standard dimensions are shown below. Custom configurations
                                    can be discussed with our team according to your project
                                    requirements.
                                </p>

                                {product.imgSpecs && (
                                    <div className="mt-8 inline-flex flex-col border-l-2 border-[#c99618] pl-5">

                                        <span className="text-[9px] font-bold tracking-[0.2em] text-slate-400">
                                            IMAGE SPECIFICATION
                                        </span>

                                        {product.imgSpecs.dimensions && (
                                            <span className="mt-2 text-xl font-semibold text-[#071a3d]">
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
                                    <div className="grid grid-cols-[1.5fr_1fr_1fr] border-b-2 border-[#071a3d] bg-[#071a3d] text-white">

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
                                            className="grid grid-cols-[1.5fr_1fr_1fr] border-b border-[#071a3d]/10 transition hover:bg-[#f5f3ee]"
                                        >

                                            <div className="px-5 py-5 text-xs font-semibold text-[#071a3d]">
                                                {dimension.name}
                                            </div>

                                            <div className="border-l border-[#071a3d]/10 px-5 py-5 text-sm text-slate-600">
                                                {dimension.regular}
                                                <span className="ml-1 text-[9px] text-slate-400">
                                                    mm
                                                </span>
                                            </div>

                                            <div className="border-l border-[#071a3d]/10 px-5 py-5 text-sm text-slate-600">
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
                <section className="relative overflow-hidden bg-[#edf0f2] py-16 md:py-24">

                    {/* Background architectural lines */}
                    <div className="pointer-events-none absolute inset-0 opacity-40">
                        <div className="absolute left-[10%] top-0 h-full w-px bg-[#071a3d]/10" />
                        <div className="absolute left-[30%] top-0 h-full w-px bg-[#071a3d]/5" />
                        <div className="absolute right-[15%] top-0 h-full w-px bg-[#071a3d]/5" />
                        <div className="absolute left-0 top-[35%] h-px w-full bg-[#071a3d]/5" />
                        <div className="absolute left-0 top-[70%] h-px w-full bg-[#071a3d]/5" />
                    </div>


                    <div className="relative mx-auto max-w-[1500px] px-5 sm:px-8 md:px-12">

                        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">

                            <div>
                                <span className="text-[10px] font-bold tracking-[0.35em] text-[#c99618]">
                                    03 / KEY FEATURES
                                </span>

                                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] md:text-5xl">
                                    Designed around
                                    <br />
                                    <span className="text-[#c99618]">
                                        performance.
                                    </span>
                                </h2>
                            </div>

                            <p className="max-w-md text-sm leading-7 text-slate-500">
                                Every element is selected to provide durability, functionality
                                and a refined architectural finish.
                            </p>

                        </div>


                        <div className="grid gap-px border border-[#071a3d]/10 bg-[#071a3d]/10 sm:grid-cols-2">

                            {product.keyFeatures.map((feature, index) => (
                                <article
                                    key={`${feature.name}-${index}`}
                                    className="group bg-white p-7 transition duration-300 hover:bg-[#071a3d] md:p-9"
                                >

                                    <div className="flex items-start justify-between gap-5">

                                        <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#c99618]/40 text-xs font-bold text-[#c99618] transition group-hover:border-[#c99618]">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>

                                        <Check
                                            size={20}
                                            className="text-[#c99618] opacity-50 transition group-hover:opacity-100"
                                        />

                                    </div>

                                    <h3 className="mt-8 text-xl font-semibold tracking-[-0.02em] text-[#071a3d] transition group-hover:text-white">
                                        {feature.name}
                                    </h3>

                                    <p className="mt-4 text-sm leading-7 text-slate-500 transition group-hover:text-white/60">
                                        {feature.description}
                                    </p>

                                </article>
                            ))}

                        </div>

                    </div>
                </section>
            )}

            {(product.hardwareImg || product.rightImg) && (
                <section className="bg-[#f5f3ee] py-16 md:py-24">

                    <div className="mx-auto max-w-[1500px] px-5 sm:px-8 md:px-12">

                        <div className="mb-12">
                            <span className="text-[10px] font-bold tracking-[0.35em] text-[#c99618]">
                                04 / PRODUCT DETAILS
                            </span>

                            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] md:text-5xl">
                                Details that define
                                <br />
                                <span className="text-[#c99618]">the system.</span>
                            </h2>
                        </div>


                        <div className="grid gap-6 md:grid-cols-2">

                            {/* Hardware */}
                            {product.hardwareImg && (
                                <div className="group relative overflow-hidden bg-white">

                                    <div className="relative aspect-[4/3]">

                                        <Image
                                            src={product.hardwareImg}
                                            alt={`${product.name} hardware`}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                            className="object-contain p-8 transition duration-700 group-hover:scale-[1.04] md:p-12"
                                        />

                                        <div className="absolute left-0 top-0 border-r border-b border-[#c99618]/30 bg-white/90 px-5 py-4 backdrop-blur">
                                            <p className="text-[9px] font-bold tracking-[0.25em] text-[#c99618]">
                                                HARDWARE
                                            </p>

                                            <p className="mt-1 text-sm font-semibold text-[#071a3d]">
                                                Premium Hardware
                                            </p>
                                        </div>

                                    </div>

                                </div>
                            )}


                            {/* Right image */}
                            {product.rightImg && (
                                <div className="group relative overflow-hidden bg-white">

                                    <div className="relative aspect-[4/3]">

                                        <Image
                                            src={product.rightImg}
                                            alt={`${product.name} product detail`}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                            className="object- transition duration-700 group-hover:scale-[1.04]"
                                        />

                                        <div className="absolute bottom-0 left-0 bg-[#071a3d]/95 px-5 py-4">
                                            <p className="text-[9px] font-bold tracking-[0.25em] text-[#c99618]">
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

            {/* =====================================================
          INQUIRY CTA
      ===================================================== */}

            <section className="relative overflow-hidden bg-[#071a3d] py-16 md:py-24">

                <div className="pointer-events-none absolute inset-0">

                    <div className="absolute -right-32 -top-32 h-[450px] w-[450px] rounded-full border border-[#c99618]/10" />

                    <div className="absolute -right-10 -top-10 h-[300px] w-[300px] rounded-full border border-[#c99618]/10" />

                    <div className="absolute bottom-0 left-0 h-px w-full bg-[#c99618]/20" />

                </div>


                <div className="relative mx-auto max-w-[1200px] px-5 text-center sm:px-8">

                    <span className="text-[10px] font-bold tracking-[0.4em] text-[#c99618]">
                        READY TO BUILD?
                    </span>

                    <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.04em] text-white md:text-6xl">
                        Bring{" "}
                        <span className="text-[#c99618]">
                            {product.name}
                        </span>{" "}
                        into your next project.
                    </h2>

                    <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/50 md:text-base">
                        Talk to our team about pricing, customization, dimensions,
                        installation and project requirements.
                    </p>


                    <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">

                        <Link
                            href={`/contact?type=inquiry&product=${encodeURIComponent(
                                product.name
                            )}`}
                            className="inline-flex min-h-[54px] items-center justify-center gap-3 bg-[#c99618] px-8 text-xs font-bold tracking-[0.15em] text-white transition hover:bg-white hover:text-[#071a3d]"
                        >
                            <Mail size={17} />
                            SEND AN INQUIRY
                            <ArrowUpRight size={16} />
                        </Link>


                        <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex min-h-[54px] items-center justify-center gap-3 border border-white/20 px-8 text-xs font-bold tracking-[0.15em] text-white transition hover:border-[#c99618] hover:bg-[#c99618]"
                        >
                            <MessageCircle size={17} />
                            WHATSAPP US
                        </a>


                        <a
                            href={`tel:${PHONE_NUMBER}`}
                            className="inline-flex min-h-[54px] items-center justify-center gap-3 border border-white/20 px-8 text-xs font-bold tracking-[0.15em] text-white transition hover:border-white hover:bg-white hover:text-[#071a3d]"
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