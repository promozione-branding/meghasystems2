import { ArrowUpRight, Mail, Phone } from "lucide-react";

export const metadata = {
  title: "Return & Refund Policy | Cubiloo Cubicles",
  description:
    "Read the return, refund, replacement, and cancellation policy for Cubiloo Cubicles.",
};

const sections = [
  {
    number: "1",
    title: "Return Eligibility",
    content: (
      <ul className="policy-list">
        <li>Product received is damaged during transit.</li>
        <li>Incorrect product or quantity is delivered.</li>
        <li>Product does not match the confirmed order specifications.</li>
        <li>
          Return requests must be submitted within <strong>24–48 hours</strong>{" "}
          of delivery.
        </li>
      </ul>
    ),
  },
  {
    number: "2",
    title: "Non-Returnable Items",
    content: (
      <ul className="policy-list">
        <li>Opened or partially used products.</li>
        <li>Products stored improperly after delivery.</li>
        <li>Customized or made-to-order products.</li>
        <li>Products damaged due to customer mishandling.</li>
      </ul>
    ),
  },
  {
    number: "3",
    title: "Return Process",
    content: (
      <ol className="policy-list policy-list-numbered">
        <li>Contact our support team within the eligible return period.</li>
        <li>Share order details with photos/videos of the issue.</li>
        <li>Our team will review your request.</li>
        <li>If approved, return instructions will be provided.</li>
      </ol>
    ),
  },
  {
    number: "4",
    title: "Refund Policy",
    content: (
      <ul className="policy-list">
        <li>Refunds are processed after inspection and approval.</li>
        <li>
          Approved refunds will be processed within{" "}
          <strong>7–10 business days</strong>.
        </li>
        <li>
          Refunds will be credited via original payment method or agreed method.
        </li>
      </ul>
    ),
  },
  {
    number: "5",
    title: "Replacement Policy",
    content: (
      <>
        <p>
          If a product is damaged, defective, or incorrect, we may offer:
        </p>
        <ul className="policy-list">
          <li>Replacement of the product.</li>
          <li>Alternative product.</li>
          <li>Refund (case-dependent).</li>
        </ul>
      </>
    ),
  },
  {
    number: "6",
    title: "Return Shipping",
    content: (
      <ul className="policy-list">
        <li>
          If the issue is from our side, <strong>Cubiloo Cubicles</strong> will
          bear the shipping cost.
        </li>
        <li>
          Otherwise, return shipping may be the customer&apos;s responsibility.
        </li>
      </ul>
    ),
  },
  {
    number: "7",
    title: "Order Cancellation",
    content: (
      <ul className="policy-list">
        <li>Orders can be cancelled before dispatch without charges.</li>
        <li>Post-dispatch cancellation may not be accepted.</li>
      </ul>
    ),
  },
  {
    number: "8",
    title: "Important Notes",
    content: (
      <ul className="policy-list">
        <li>Follow proper storage and handling guidelines.</li>
        <li>Claims without proof may not be approved.</li>
        <li>Always follow safety instructions.</li>
      </ul>
    ),
  },
];

export default function ReturnRefundPage() {
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
            Return &amp; Refund Policy
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
            At Cubiloo Cubicles, we are committed to ensuring safe and reliable
            delivery and maintaining product quality. Our experienced team
            carefully handles every order, ensuring proper packaging, dispatch,
            and compliance with safety standards.
          </p>
          <p className="mt-4 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
            At <strong className="text-white">Cubiloo Cubicles</strong>, we are
            committed to providing high-quality products and ensuring customer
            satisfaction. Due to the nature of industrial and water treatment
            products, our Return &amp; Refund Policy is designed to maintain
            product quality, safety, and compliance.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-6 sm:px-8 sm:py-16 lg:px-10">
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
        .policy-list-numbered {
          list-style: decimal;
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
