
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Star, Check } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const reviews = [
    {
        title: "Design Quality",
        text: "The finished cubicle partitions have a clean, modern appearance. The attention to detail throughout the project was excellent.",
        author: "Project Management Team",
    },
    {
        title: "Installation Quality",
        text: "The installation process was well coordinated and the final finish was impressive. Everything was completed professionally.",
        author: "Facility Management Team",
    },
    {
        title: "Premium Materials",
        text: "The quality of materials and overall workmanship made a noticeable difference to our commercial washroom.",
        author: "Commercial Project Team",
    },
    {
        title: "Professional Service",
        text: "The team understood our requirements and delivered a solution that matched our expectations.",
        author: "Operations Team",
    },
    {
        title: "Excellent Finish",
        text: "We are very satisfied with the finished restroom partitions. The product looks premium and is easy to maintain.",
        author: "Facilities Team",
    },
    {
        title: "Project Coordination",
        text: "Communication was clear throughout the project and the installation was handled efficiently.",
        author: "Construction Team",
    },
    {
        title: "Design Quality",
        text: "The range of finishes helped us choose a design that complemented the surrounding interior.",
        author: "Interior Design Team",
    },
    {
        title: "Reliable Solutions",
        text: "A practical and durable solution for a high-traffic washroom environment.",
        author: "Site Management Team",
    },
    {
        title: "Great Experience",
        text: "From the initial consultation to the final installation, the overall experience was smooth and professional.",
        author: "Project Operations Team",
    },
    {
        title: "Product Quality",
        text: "The partition system feels solid and well manufactured. We appreciate the attention given to every detail.",
        author: "Corporate Facilities Team",
    },
    {
        title: "Excellent Support",
        text: "The team guided us through the available materials and hardware options and helped us make the right choice.",
        author: "Commercial Client Team",
    },
    {
        title: "Clean Installation",
        text: "The completed installation looks neat and consistent across the entire washroom area.",
        author: "Maintenance Team",
    },
    {
        title: "Quality Workmanship",
        text: "The materials, hardware, and finishing were all handled with care. We are pleased with the result.",
        author: "Industrial Project Team",
    },
    {
        title: "Dependable Team",
        text: "The Cubiloo team maintained good coordination during the project and delivered the required solution.",
        author: "Infrastructure Team",
    },
    {
        title: "Modern Appearance",
        text: "The cubicle design has given our washroom a much more contemporary and refined appearance.",
        author: "Office Management Team",
    },
    {
        title: "Smooth Execution",
        text: "The project was executed with attention to both quality and installation requirements.",
        author: "Project Coordination Team",
    },
];

const columns = [
    [reviews[0], reviews[4], reviews[8], reviews[12]],
    [reviews[1], reviews[5], reviews[9], reviews[13]],
    [reviews[2], reviews[6], reviews[10], reviews[14]],
    [reviews[3], reviews[7], reviews[11], reviews[15]],
];

function ReviewCard({ review }) {
    return (
        <article className="testimonial-card break-inside-avoid rounded-[8px] border border-[#eeeeef] bg-white px-5 py-6 transition-shadow duration-300 hover:shadow-[0_12px_35px_rgba(0,0,0,0.055)] sm:px-6">
            <h3 className="text-[14px] font-semibold text-[#121212]">
                {review.title}
            </h3>

            <div className="mt-2 flex gap-[2px]">
                {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                        key={index}
                        size={11}
                        fill="#F4B731"
                        stroke="#F4B731"
                    />
                ))}
            </div>

            <p className="mt-4 text-[13px] leading-[1.8] text-[#666666]">
                {review.text}
            </p>

            <div className="mt-5 flex items-center gap-2">
                <span className="flex h-[17px] w-[17px] shrink-0 items-center justify-center rounded-full bg-[#86BD4B]">
                    <Check size={11} strokeWidth={3} className="text-white" />
                </span>

                <span className="text-[11px] font-medium text-[#555555]">
                    {review.author}
                </span>
            </div>
        </article>
    );
}

export default function Testimonials() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".testimonial-heading",
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".testimonial-heading",
                        start: "top 85%",
                        once: true,
                    },
                }
            );

            gsap.fromTo(
                ".testimonial-card",
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    stagger: 0.035,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: ".testimonial-grid",
                        start: "top 90%",
                        once: true,
                    },
                }
            );

            gsap.fromTo(
                ".testimonial-rating",
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.7,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".testimonial-rating",
                        start: "top 90%",
                        once: true,
                    },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative bg-[#f9f9fb] px-5 py-10 text-[#121212] sm:px-[30px] lg:py-15"
        >
            <div className="mx-auto max-w-[1450px]">
                {/* CENTER HEADING */}
                <div className="testimonial-heading mx-auto mb-14 max-w-[680px] text-center sm:mb-16">
                    <span className="mb-5 inline-block h-[2px] w-8 bg-[#EFAC39]" />

                    <h2 className="text-[36px] font-semibold leading-[1.12] tracking-[-0.045em] text-[#121212] sm:text-[48px] lg:text-[58px]">
                        We gained the positive
                        <br />
                        vibes from them!
                    </h2>

                    <p className="mx-auto mt-5 max-w-[520px] text-[13px] leading-[1.9] text-[#777777] sm:text-[14px]">
                        Our clients' experiences inspire us to keep delivering
                        dependable cubicle solutions, quality workmanship,
                        and thoughtful design.
                    </p>
                </div>

                {/* SIMPLE FOUR COLUMN GRID */}
                <div
                    className="testimonial-grid relative grid grid-cols-1 items-start gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5"
                    style={{
                        maskImage:
                            "linear-gradient(to bottom, black 0%, black 76%, transparent 100%)",
                        WebkitMaskImage:
                            "linear-gradient(to bottom, black 0%, black 76%, transparent 100%)",
                    }}
                >
                    {columns.map((column, columnIndex) => (
                        <div
                            key={columnIndex}
                            className="flex flex-col gap-4 lg:gap-5"
                        >
                            {column.map((review, index) => (
                                <ReviewCard
                                    key={`${columnIndex}-${index}`}
                                    review={review}
                                />
                            ))}
                        </div>
                    ))}
                </div>

                {/* CENTER RATING */}
                <div className="testimonial-rating relative z-10 -mt-5 flex flex-col items-center text-center sm:-mt-8">
                    <span className="mb-2 text-[11px] text-[#777777]">
                        Customer experience
                    </span>

                    <div className="flex items-center gap-3 rounded-full bg-[linear-gradient(90deg,rgba(239,172,57,1)_0%,rgba(229,139,59,1)_38%,rgba(223,117,57,1)_72%,rgba(216,85,56,1)_100%)] px-4 py-2.5">
                        <span className="text-[30px] font-semibold leading-none tracking-[-0.06em] text-[#fff]">
                            5.0
                        </span>

                        <div className="text-left">
                            <p className="text-[9px] font-medium text-[#fff]">
                                Demo rating
                            </p>

                            <div className="mt-1 flex gap-[2px]">
                                {Array.from({ length: 5 }).map((_, index) => (
                                    <Star
                                        key={index}
                                        size={10}
                                        fill="#EFAC39"
                                        stroke="#EFAC39"
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
