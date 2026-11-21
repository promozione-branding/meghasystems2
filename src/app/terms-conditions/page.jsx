import { ArrowUpRight, Mail, Phone } from "lucide-react";

export const metadata = {
  title: "Terms & Conditions | Cubiloo Cubicles",
  description:
    "Read the terms and conditions governing Cubiloo Cubicles website and services.",
};

const sections = [
  {
    number: "1",
    title: "Use of Website",
    content: (
      <ul className="policy-list">
        <li>You agree to use this website for lawful purposes only.</li>
        <li>You must not misuse, disrupt, or attempt unauthorized access.</li>
        <li>All content is for informational and commercial use only.</li>
      </ul>
    ),
  },
  {
    number: "2",
    title: "Product Information",
    content: (
      <ul className="policy-list">
        <li>We strive to ensure accurate product details and pricing.</li>
        <li>Minor variations may occur due to manufacturing or display.</li>
        <li>We reserve the right to update product details at any time.</li>
      </ul>
    ),
  },
  {
    number: "3",
    title: "Orders & Payments",
    content: (
      <ul className="policy-list">
        <li>Orders are confirmed only after successful payment.</li>
        <li>We reserve the right to cancel or refuse any order.</li>
        <li>Pricing and availability are subject to change without notice.</li>
      </ul>
    ),
  },
  {
    number: "4",
    title: "Shipping & Delivery",
    content: (
      <ul className="policy-list">
        <li>Delivery timelines are estimates and may vary.</li>
        <li>Delays due to external factors are not under our control.</li>
        <li>Refer to our Shipping Policy for detailed information.</li>
      </ul>
    ),
  },
  {
    number: "5",
    title: "Returns & Refunds",
    content: (
      <ul className="policy-list">
        <li>Returns are subject to our Return & Refund Policy.</li>
        <li>Certain items may not be eligible for return.</li>
        <li>Refunds are processed after inspection and approval.</li>
      </ul>
    ),
  },
  {
    number: "6",
    title: "Limitation of Liability",
    content: (
      <p>
        Cubiloo Cubicles shall not be liable for any indirect, incidental, or
        consequential damages arising from the use of our products or services.
      </p>
    ),
  },
  {
    number: "7",
    title: "Intellectual Property",
    content: (
      <p>
        All content on this website, including text, images, and logos, is the
        property of Cubiloo Cubicles and may not be used without permission.
      </p>
    ),
  },
  {
    number: "8",
    title: "Policy Updates",
    content: (
      <p>
        We reserve the right to update these terms at any time. Changes will be
        effective once posted on this page.
      </p>
    ),
  },
];

export default function TermsConditionsPage() {
  return (
    <main className="min-h-screen bg-[#f5f3ed] text-[#252329]">
      <section className="relative overflow-hidden border-b border-[#e4dfd7] bg-[#252329] py-6 text-white sm:py-12">
        <div className="absolute right-0 top-0 h-full w-[45%] bg-[linear-gradient(135deg,transparent_0%,rgba(221,223,0,0.10)_100%)]" />
        <div className="relative mx-auto mt-20 max-w-6xl px-5 sm:px-8 lg:px-10">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-[#dddf00]" />
            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#dddf00]">
              Cubiloo Cubicles
            </p>
          </div>
          <h1 className="max-w-3xl text-4xl font-bold leading-[1.08] tracking-[-0.035em] sm:text-5xl lg:text-6xl">
            Terms &amp; Conditions
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
            These terms govern your use of Cubiloo Cubicles&apos; website and
            services. By accessing or purchasing from us, you agree to comply
            with the following terms and conditions.
          </p>
          <p className="mt-4 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
            Welcome to <strong className="text-white">Cubiloo Cubicles</strong>.
            By using our website, purchasing our products, or engaging with our
            services, you agree to the following terms and conditions. Please
            read them carefully before proceeding.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-6 sm:px-8 sm:py-16 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[260px_minmax(0,1fr)]">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#817771]">
              Terms Overview
            </p>
            <nav className="mt-5 border-l border-[#dcd5cc]">
              {sections.map((section) => (
                <a
                  key={section.number}
                  href={`#section-${section.number}`}
                  className="group flex items-center gap-3 border-l-2 border-transparent py-2 pl-4 text-sm text-[#716a67] transition-colors hover:border-[#dddf00] hover:text-[#252329]"
                >
                  <span className="text-xs font-bold text-[#a9c000]">
                    {section.number}
                  </span>
                  {section.title}
                </a>
              ))}
            </nav>
          </aside>

          <div className="rounded-sm border border-[#e6e2dc] bg-white px-6 py-2 shadow-[0_18px_50px_rgba(37,35,41,0.06)] sm:px-10 lg:px-12">
            {sections.map((section) => (
              <article
                id={`section-${section.number}`}
                key={section.number}
                className="border-b border-[#eee9e3] py-8 last:border-b-0 sm:py-10"
              >
                <div className="mb-4 flex items-center gap-4">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#dddf00] text-sm font-bold text-[#252329]">
                    {section.number}
                  </span>
                  <h2 className="text-2xl leading-tight tracking-[-0.02em] text-[#252329] sm:text-3xl">
                    {section.title}
                  </h2>
                </div>
                <div className="policy-content pl-0 text-[15px] leading-7 text-[#716a67] sm:pl-[52px]">
                  {section.content}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#e4dfd7] bg-white" id="contact">
        <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 lg:px-10">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#817771]">
                Contact Us
              </p>
              <h2 className="mt-3 text-3xl tracking-[-0.03em] text-[#252329]">
                Cubiloo Cubicles
              </h2>
            </div>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:jnjaquadelhi@gmail.com"
                className="group flex items-center gap-3 text-sm text-[#716a67] transition-colors hover:text-[#252329]"
              >
                <Mail size={17} className="text-[#a9c000]" />
                jnjaquadelhi@gmail.com
                <ArrowUpRight
                  size={14}
                  className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>
              <a
                href="tel:+919797977832"
                className="flex items-center gap-3 text-sm text-[#716a67] transition-colors hover:text-[#252329]"
              >
                <Phone size={17} className="text-[#a9c000]" />
                +91 97979 77832
              </a>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .policy-list {
          margin: 0.75rem 0;
          padding-left: 1.25rem;
          list-style: disc;
        }
        .policy-list li {
          margin: 0.35rem 0;
          padding-left: 0.25rem;
        }
        .policy-list li::marker {
          color: #a9c000;
        }
        .policy-content strong {
          color: #252329;
        }
      `}</style>
    </main>
  );
}
