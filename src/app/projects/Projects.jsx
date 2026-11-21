'use client'

import Link from 'next/link'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { FiArrowUpRight, FiMapPin, FiX } from 'react-icons/fi'

const projects = [
    { image: '/projects/1.webp', name: 'Duro Pro Cubicles', location: 'Heritage Global School , Noida' },
    { image: '/projects/2.webp', name: 'Duro Pro Cubicles', location: 'Servspaces , Noida' },
    { image: '/projects/3.jpeg', name: 'Duro Pro Cubicles', location: 'PVR , Coimbatore' },
    { image: '/projects/4.webp', name: 'Kiddiez Cubicles', location: 'Ofis Square , Gurgaon' },
    { image: '/projects/5.webp', name: 'Kiddiez Cubicles', location: 'Manav Rachna School , Gurgaon' },
    { image: '/projects/6.jpeg', name: 'Kiddiez Cubicles', location: 'Rajiv Gandhi Bhawan , New Delhi' },
    { image: '/projects/7.webp', name: 'Kiddiez Cubicles', location: 'Advant Navis Park , Noida' },
    { image: '/projects/8.webp', name: 'Kiddiez Cubicles', location: 'Wipro , Gurugram' },
    { image: '/projects/9.webp', name: 'Kiddiez Cubicles', location: 'Global Business Park , gurgaon' },
   
]

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null)
    const closeButtonRef = useRef(null)

    useEffect(() => {
        if (!selectedProject) return

        const previousOverflow = document.body.style.overflow
        const previouslyFocusedElement = document.activeElement
        document.body.style.overflow = 'hidden'
        closeButtonRef.current?.focus()

        const handleKeyDown = (event) => {
            if (event.key === 'Escape') setSelectedProject(null)
        }

        window.addEventListener('keydown', handleKeyDown)

        return () => {
            document.body.style.overflow = previousOverflow
            window.removeEventListener('keydown', handleKeyDown)
            previouslyFocusedElement?.focus()
        }
    }, [selectedProject])

    return (
        <main className="bg-[#f7f6f2] text-[#071720] overflow-hidden">
            <section className="relative flex min-h-[70vh] md:min-h-[85vh] items-center overflow-hidden bg-[#071720] text-white">
                {/* Background Image */}
                <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/duro pro toilet cubicles.webp')", }} />

                {/* Main Content */}
                <div className="relative z-10 mx-auto w-full max-w-[1500px] px-5 pb-6 pt-10 sm:px-8 sm:pb-20 lg:px-12 lg:py-12">
                    <div className="max-w-7xl flex flex-col items-center">
                        {/* Small Heading */}
                        <div className="about-hero-item mb-7 flex items-center gap-4">
                            <span className="h-px w-12 bg-[#071720]" />
                            <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#071720]">
                                Our Projects
                            </span>
                        </div>

                        {/* Main Heading */}
                        <h1 className="about-hero-item text-[#071720] text-5xl font-medium leading-[0.98] tracking-[-0.045em] sm:text-6xl">
                            Spaces We've {" "}
                            <span className="bg-[linear-gradient(90deg,#b8c900_0%,#dddf00_35%,#f0f542_65%,#a9c000_100%)] bg-clip-text text-transparent">
                                Beautifully Realized.
                            </span>
                        </h1>

                        {/* Buttons */}
                        <div className="about-hero-item mt-10 flex flex-wrap gap-4">
                            <Link
                                href="/products"
                                className="group inline-flex items-center gap-3 bg-[linear-gradient(90deg,#b8c900_0%,#dddf00_35%,#f0f542_65%,#a9c000_100%)] px-6 py-4 text-sm font-semibold text-[#071720] transition-all duration-300 hover:bg-[#dddf00]"
                            >
                                Explore Our Products
                                <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                            </Link>

                            <a
                               href="tel:+917837830803"
                                className="group inline-flex items-center gap-3 border border-white/40 bg-[#071720] px-6 py-4 text-sm font-medium text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-[#071720]"
                            >
                                Talk to Our Team
                                <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-[#f5f3ed] px-5 pb-30 py-6 sm:px-8 sm:py-12 md:pb-70 lg:px-12">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-10 flex flex-col gap-4 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                            <div className="mb-4 flex items-center gap-3">
                                <span className="h-px w-8 bg-[#a9c000]" />
                                <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#817771]">
                                    Project Gallery
                                </p>
                            </div>
                            <h2 className="max-w-2xl text-3xl leading-tight tracking-[-0.035em] text-[#252329] sm:text-4xl lg:text-5xl">
                                Thoughtfully designed. <span className="text-[#8f9e00]">Built to last.</span>
                            </h2>
                        </div>
                        <p className="max-w-md text-sm leading-6 text-[#716a67] sm:text-base">
                            Explore a selection of Cubiloo Cubicles projects and restroom solutions.
                        </p>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
                        {projects.map((project) => (
                            <article
                                key={project.image}
                                className="group overflow-hidden border border-[#e6e2dc] bg-white shadow-[0_8px_24px_rgba(37,35,41,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(37,35,41,0.12)]"
                            >
                                <button
                                    type="button"
                                    onClick={() => setSelectedProject(project)}
                                    aria-haspopup="dialog"
                                    aria-label={`View ${project.name} project`}
                                    className="block w-full text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#a9c000]"
                                >
                                    <div className="relative h-110 overflow-hidden bg-[#e9e6df]">
                                        <Image
                                            src={project.image}
                                            alt={`${project.name} project`}
                                            fill
                                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="flex items-center justify-between gap-3 px-5 py-4 sm:px-6">
                                        <span className="flex items-center gap-2 text-sm font-semibold text-[#252329] sm:text-base">
                                                <FiMapPin aria-hidden="true" className="shrink-0 text-[#8f9e00]" size={15} />
                                                {project.location}
                                        </span>
                                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f5f3ed] text-[#8f9e00] transition-colors group-hover:bg-[#dddf00] group-hover:text-[#252329]">
                                            <FiArrowUpRight aria-hidden="true" size={16} />
                                        </span>
                                    </div>
                                </button>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {selectedProject && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
                    <button
                        type="button"
                        aria-label="Close project details"
                        onClick={() => setSelectedProject(null)}
                        className="absolute inset-0 cursor-default bg-[#071720]/80 backdrop-blur-sm"
                    />
                    <div
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="project-dialog-title"
                        className="relative z-10 grid w-full max-w-4xl overflow-hidden border border-white/15 bg-[#f5f3ed] shadow-2xl md:grid-cols-2"
                    >
                        <div className="relative min-h-[440px] bg-[#e9e6df] sm:min-h-[520px]">
                            <Image
                                src={selectedProject.image}
                                alt={`Project installation in ${selectedProject.location}`}
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover"
                            />
                        </div>
                        <div className="relative flex flex-col justify-center p-6 sm:p-9 lg:p-12">
                            <button
                                ref={closeButtonRef}
                                type="button"
                                onClick={() => setSelectedProject(null)}
                                aria-label="Close project details"
                                className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-[#dcd5cc] text-[#252329] transition-colors hover:bg-[#dddf00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#a9c000]"
                            >
                                <FiX size={20} />
                            </button>
                            <p className="mb-4 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.24em] text-[#8f9e00]">
                                <FiMapPin aria-hidden="true" size={14} />
                                Project Location
                            </p>
                            <h2
                                id="project-dialog-title"
                                className="pr-8 text-3xl leading-tight tracking-[-0.03em] text-[#252329] sm:text-4xl"
                            >
                                {selectedProject.location}
                            </h2>
                        </div>
                    </div>
                </div>
            )}
        </main>
    )
}