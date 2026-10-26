import Link from 'next/link'
import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi'

export default function Projects() {
    return (
        <main className="bg-[#f7f6f2] text-[#071a3d] overflow-hidden">
            <section className="relative flex min-h-[85vh] items-center overflow-hidden bg-[#071a3d] text-white">
                {/* Background Image */}
                <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/duro pro toilet cubicles.webp')", }} />

                {/* Main Content */}
                <div className="relative z-10 mx-auto w-full max-w-[1500px] px-5 pb-16 pt-20 sm:px-8 sm:pb-20 lg:px-12 lg:py-20">
                    <div className="max-w-7xl flex flex-col items-center">
                        {/* Small Heading */}
                        <div className="about-hero-item mb-7 flex items-center gap-4">
                            <span className="h-px w-12 bg-[#071a3d]" />
                            <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#071a3d]">
                                Our Projects
                            </span>
                        </div>

                        {/* Main Heading */}
                        <h1 className="about-hero-item text-[#071a3d] text-5xl font-medium leading-[0.98] tracking-[-0.045em] sm:text-6xl">
                            Spaces We've {" "}
                            <span className="bg-[linear-gradient(90deg,rgba(239,172,57,1)_0%,rgba(229,139,59,1)_38%,rgba(223,117,57,1)_72%,rgba(216,85,56,1)_100%)] bg-clip-text text-transparent">
                                Beautifully Realized.
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
                                href="/contact-us"
                                className="group inline-flex items-center gap-3 border border-white/40 bg-[#071a3d] px-6 py-4 text-sm font-medium text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-[#071a3d]"
                            >
                                Talk to Our Team
                                <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    )
}