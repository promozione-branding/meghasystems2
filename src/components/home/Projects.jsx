
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  MoveRight,
  PanelsTopLeft,
  BriefcaseBusiness,
} from "lucide-react";

const projects = [
  {
    category: "Modular Office Workstations",
    title: "Smart Cubicle Workstations for Productive Offices",
    description:
      "Space-efficient workstation layouts designed for focused work and seamless team collaboration.",
    image: "/Kiddiez.webp",
    href: "/projects/smart-office-workstations",
    layout: "large",
    number: "01",
  },
  {
    category: "Corporate Office Interiors",
    title: "Modern Office Cubicles with Smart Storage",
    description:
      "Integrated storage and clean workstation designs that keep everyday office essentials organized.",
    image: "/ChatGPT Image Sep 14, 2026, 05_52_14 PM.png",
    href: "/projects/office-cubicles",
    layout: "small",
    number: "02",
  },
  {
    category: "Employee Workstations",
    title: "Ergonomic Workspaces for Growing Teams",
    description:
      "Practical workstation configurations for comfortable, organized and efficient workplaces.",
    image: "/Commercial Urinal Partitions.webp",
    href: "/projects/employee-workstations",
    layout: "small",
    number: "03",
  },
  {
    category: "Custom Office Solutions",
    title: "Executive Workstations & Collaborative Office Layouts",
    description:
      "Thoughtfully planned office furniture solutions that balance privacy, functionality and contemporary design.",
    image: "/Duro-Toilet-Cubicles.webp",
    href: "/projects/custom-office-solutions",
    layout: "large",
    number: "04",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function ProjectCard({ project, className = "" }) {
  const isLarge = project.layout === "large";

  return (
    <motion.article
      variants={cardVariants}
      className={`group relative isolate h-full min-h-[260px] overflow-hidden rounded-sm bg-[#252525] sm:min-h-[280px] ${className}`}
    >
      <Link
        href={project.href}
        aria-label={`Explore ${project.title}`}
        className="absolute inset-0 z-20 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#efac39]"
      >
        <span className="sr-only">Explore project</span>
      </Link>

      {/* Project image */}
      <motion.div
        className="absolute inset-0"
        whileHover={{ scale: 1.045 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 34vw"
          className="object-cover"
        />
      </motion.div>

      {/* Image overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/5 transition-colors duration-500 group-hover:from-black/95" />

      <div className="absolute inset-0 bg-[#BD5735]/0 transition-colors duration-500 group-hover:bg-[#BD5735]/10" />

      {/* Number */}
      <div className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/40 bg-black/15 text-[10px] font-medium text-white backdrop-blur-sm">
        {project.number}
      </div>

      {/* Content */}
      <div
        className={`absolute inset-x-0 bottom-0 z-10 p-5 sm:p-6 ${isLarge ? "lg:p-7" : ""
          }`}
      >
        <div className="mb-3 flex items-center gap-2">
          <span className="h-px w-6 bg-[#efac39] transition-all duration-300 group-hover:w-10" />
          <p className="text-[9px] font-semibold uppercase tracking-[0.17em] text-white/80 sm:text-[10px]">
            {project.category}
          </p>
        </div>

        <h3
          className={`max-w-[400px] font-semibold leading-[1.15] tracking-[-0.025em] text-white ${isLarge
            ? "text-xl sm:text-2xl lg:text-[27px]"
            : "text-lg sm:text-xl"
            }`}
        >
          {project.title}
        </h3>

        {/* <p className="mt-3 max-w-[380px] text-xs leading-6 text-white/75 sm:text-sm">
          {project.description}
        </p> */}

        <div className="mt-5 flex items-center justify-between border-t border-white/25 pt-4">
          <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white sm:text-[11px]">
            Explore Project
          </span>

          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#efac39] text-white transition-all duration-300 group-hover:bg-white group-hover:text-[#efac39]">
            <ArrowUpRight size={17} />
          </span>
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section className="overflow-hidden bg-[#fff] px-5 py-6 sm:px-8 sm:py-13">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-2 md:items-end lg:mb-12"
        >
          <div>
            <div className="mb-4 flex items-center gap-2 text-[#efac39]">
              <PanelsTopLeft size={16} strokeWidth={1.7} />
              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] sm:text-xs">
                Our Projects
              </span>
            </div>

            <h2 className="text-nowrap text-[38px] font-medium leading-[1.05] tracking-[-0.04em] text-[#071a3d] sm:text-[48px] lg:text-[62px]">
              Workspaces Designed
              <br />

              <span className="bg-[linear-gradient(90deg,rgba(239,172,57,1)_0%,rgba(229,139,59,1)_38%,rgba(223,117,57,1)_72%,rgba(216,85,56,1)_100%)] bg-clip-text text-transparent">
                Around Your Business.
              </span>
            </h2>
          </div>

          <div className="md:justify-self-end md:pl-8">
            <p className="max-w-lg text-sm leading-7 text-[#071a3d]/95 sm:text-base">
              Explore modular cubicles, employee workstations and custom
              office furniture solutions designed to maximize space.
            </p>

            <Link
              href="/projects"
              className="group mt-5 inline-flex items-center gap-3 border-b border-[#efac39] pb-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#17202A] transition-colors hover:text-[#efac39] sm:text-sm"
            >
              View All Projects
              <MoveRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1.5"
              />
            </Link>
          </div>
        </motion.div>

        {/* Intro strip */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-6 flex flex-wrap items-center justify-between gap-4 border-y border-[#efac39] py-4"
        >
          <div className="flex items-center gap-3">
            <BriefcaseBusiness
              size={18}
              strokeWidth={1.5}
              className="text-[#efac39]"
            />
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#34332F] sm:text-xs">
              Functional Design. Smarter Workspaces.
            </p>
          </div>

          <span className="text-[10px] uppercase tracking-[0.14em] text-[#efac39]">
            Featured Projects — 01 / 04
          </span>
        </motion.div>

        {/* Asymmetric responsive grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5"
        >
          {/* Large left card */}
          <div className="min-h-[310px] sm:row-span-2 sm:min-h-[580px]">
            <ProjectCard
              project={projects[0]}
              className="min-h-[310px] sm:min-h-[580px]"
            />
          </div>

          {/* Two stacked center cards */}
          <div className="grid grid-cols-1 gap-4 sm:gap-5">
            <ProjectCard
              project={projects[1]}
              className="min-h-[280px]"
            />

            <ProjectCard
              project={projects[2]}
              className="min-h-[280px]"
            />
          </div>

          {/* Large right card */}
          <div className="min-h-[310px] sm:col-span-2 lg:col-span-1 lg:row-span-2 lg:min-h-[580px]">
            <ProjectCard
              project={projects[3]}
              className="min-h-[310px] lg:min-h-[580px]"
            />
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mt-8 flex flex-col justify-between gap-5 bg-[#EAE5DE] p-6 sm:flex-row sm:items-center sm:p-8 lg:mt-10 lg:p-10"
        >
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#efac39]">
              Have a workspace in mind?
            </p>

            <h3 className="mt-2 text-xl font-semibold tracking-tight text-[#17202A] sm:text-2xl">
              Let&apos;s plan your ideal office.
            </h3>

            <p className="mt-2 max-w-xl text-xs leading-6 text-[#625E59] sm:text-sm">
              Discuss your layout, workstation requirements and custom
              furniture needs with our team.
            </p>
          </div>

          <Link
            href="/contact"
            className="group inline-flex min-h-12 shrink-0 items-center justify-center gap-4 bg-[linear-gradient(90deg,rgba(239,172,57,1)_0%,rgba(229,139,59,1)_38%,rgba(223,117,57,1)_72%,rgba(216,85,56,1)_100%)] px-5 py-3 text-xs font-semibold uppercase tracking-[0.1em] text-white transition-colors duration-300 hover:bg-[#17202A] sm:text-sm"
          >
            Discuss Your Project
            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
