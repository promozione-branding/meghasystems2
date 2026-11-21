import { ArrowUpRight, Mail, Phone } from "lucide-react";

export const metadata = {
  title: "Shipping Policy | Cubiloo Cubicles",
  description:
    "Read Cubiloo Cubicles' shipping, delivery, tracking, and damaged shipment policy.",
};

const sections = [
  {
    number: "1",
    title: "Order Processing",
    content: (
      <ul className="policy-list">
        <li>All orders are processed after confirmation of payment and order details.</li>
        <li>
          Standard processing time is <strong>2–5 business days</strong>, depending
          on product availability and customization requirements.
        </li>
        <li>
          Processing time for bulk or customized machinery may vary and will be
          communicated in advance.
        </li>
      </ul>
    ),
  },
  {
    number: "2",
    title: "Shipping & Delivery Time",
    content: (
      <>
        <p>Delivery timelines depend on your location and the type of product ordered.</p>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          <div className="rounded-sm border border-[#e6e2dc] bg-[#faf9f6] p-5">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#817771]">
              Metro Cities
            </p>
            <p className="mt-2 text-xl font-bold text-[#252329]">5–7 Days</p>
          </div>
          <div className="rounded-sm border border-[#e6e2dc] bg-[#faf9f6] p-5">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#817771]">
              Other Locations
            </p>
            <p className="mt-2 text-xl font-bold text-[#252329]">7–14 Days</p>
          </div>
        </div>
        <p className="mt-4">Remote or rural areas may require additional delivery time.</p>
      </>
    ),
  },
  {
    number: "3",
    title: "Shipping Charges",
    content: (
      <>
        <p>Shipping charges are calculated based on:</p>
        <ul className="policy-list">
          <li>Product weight and Packaging</li>
          <li>Delivery location</li>
          <li>Mode of transport</li>
        </ul>
        <p>Final shipping charges will be shared during order confirmation.</p>
      </>
    ),
  },
  {
    number: "4",
    title: "Delivery Method",
    content: (
      <ul className="policy-list">
        <li>We work with trusted logistics partners for safe and reliable delivery.</li>
        <li>Heavy machinery may be transported using specialized carriers.</li>
      </ul>
    ),
  },
  {
    number: "5",
    title: "Order Tracking",
    content: (
      <p>
        Once your order is dispatched, tracking details or transport information
        will be shared via phone or email.
      </p>
    ),
  },
  {
    number: "6",
    title: "Delivery Guidelines",
    content: (
      <ul className="policy-list">
        <li>
          The customer or an authorized representative must be available at the
          delivery location.
        </li>
        <li>
          Customers should arrange unloading equipment such as cranes or forklifts
          if required.
        </li>
        <li>
          Please inspect the product carefully upon delivery for any visible damage.
        </li>
      </ul>
    ),
  },
  {
    number: "7",
    title: "Damaged or Delayed Shipments",
    content: (
      <ul className="policy-list">
        <li>
          Report damaged products within <strong>24 hours</strong> along with
          photos or videos for verification.
        </li>
        <li>
          Delivery delays caused by weather conditions, transportation issues,
          strikes, or other unforeseen events may occur.
        </li>
      </ul>
    ),
  },
  {
    number: "8",
    title: "Service Availability",
    content: (
      <p>
        We currently ship across India. For international orders, please contact
        us directly to discuss availability and shipping options.
      </p>
    ),
  },
];

export default function ShippingPolicyPage() {
  return (
    <main className="min-h-screen bg-[#f5f3ed] text-[#252329]">
      <section className="relative overflow-hidden border-b border-[#e4dfd7] bg-[#252329] py-6 text-white sm:py-12 ">
        <div className="absolute right-0 top-0 h-full w-[45%] bg-[linear-gradient(135deg,transparent_0%,rgba(221,223,0,0.10)_100%)]" />
        <div className="relative mt-20 mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-[#dddf00]" />
            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#dddf00]">
              Cubiloo Cubicles
            </p>
          </div>
          <h1 className="max-w-3xl text-4xl leading-[1.08] font-bold tracking-[-0.035em] sm:text-5xl lg:text-6xl">
            Shipping Policy
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
            At Cubiloo Cubicles, we are committed to ensuring safe and reliable delivery
            of our products. Our modern facilities and experienced team enable us
            to carefully process, package, and dispatch every order with attention
            to quality.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-6 sm:px-8 sm:py-16 lg:px-10 ">
        <div className="grid gap-10 lg:grid-cols-[260px_minmax(0,1fr)]">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#817771]">
              Policy Overview
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

      <section className="border-t border-[#e4dfd7] bg-white">
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
                href="tel:+918595776029"
                className="flex items-center gap-3 text-sm text-[#716a67] transition-colors hover:text-[#252329]"
              >
                <Phone size={17} className="text-[#a9c000]" />
                +91 85957 76029
              </a>
              <a
                href="tel:+919315556737"
                className="flex items-center gap-3 pl-8 text-sm text-[#716a67] transition-colors hover:text-[#252329]"
              >
                +91 93155 56737
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
