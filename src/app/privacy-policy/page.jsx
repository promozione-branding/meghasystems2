import { ArrowUpRight, Mail, Phone } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | Cubiloo Cubicles",
  description:
    "Read how Cubiloo Cubicles collects, uses, and protects personal information.",
};

const sections = [
  {
    number: "1",
    title: "Information We Collect",
    content: (
      <ul className="policy-list">
        <li>Name, phone number, and email address.</li>
        <li>Billing and shipping address.</li>
        <li>Order and transaction details.</li>
        <li>Website usage data (cookies, IP address, browser info).</li>
      </ul>
    ),
  },
  {
    number: "2",
    title: "How We Use Your Information",
    content: (
      <ul className="policy-list">
        <li>To process and deliver your orders.</li>
        <li>To communicate order updates and support.</li>
        <li>To improve our website and services.</li>
        <li>To send important notifications or offers (if opted).</li>
      </ul>
    ),
  },
  {
    number: "3",
    title: "Data Protection",
    content: (
      <p>
        We implement appropriate security measures to protect your personal
        data from unauthorized access, misuse, or disclosure.
      </p>
    ),
  },
  {
    number: "4",
    title: "Sharing of Information",
    content: (
      <ul className="policy-list">
        <li>We do not sell or rent your personal information to third parties.</li>
        <li>
          Information may be shared with trusted service providers (logistics,
          payment gateways) for order fulfillment.
        </li>
        <li>We may disclose data if required by law or legal authorities.</li>
      </ul>
    ),
  },
  {
    number: "5",
    title: "Cookies",
    content: (
      <p>
        Our website may use cookies to enhance user experience, analyze traffic,
        and improve functionality. You can choose to disable cookies through
        your browser settings.
      </p>
    ),
  },
  {
    number: "6",
    title: "Your Rights",
    content: (
      <ul className="policy-list">
        <li>You can request access to your personal data.</li>
        <li>You can request correction or deletion of your data.</li>
        <li>You can opt-out of marketing communications.</li>
      </ul>
    ),
  },
  {
    number: "7",
    title: "Policy Updates",
    content: (
      <p>
        We may update this Privacy Policy from time to time. Changes will be
        posted on this page with updated dates.
      </p>
    ),
  },
];

export default function PrivacyPolicyPage() {
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
            Privacy Policy
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
            At Cubiloo Cubicles, we value your privacy and are committed to
            protecting your personal information. This policy explains how we
            collect, use, and safeguard your data.
          </p>
          <p className="mt-4 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
            At <strong className="text-white">Cubiloo Cubicles</strong>, we are
            committed to protecting your privacy. This Privacy Policy outlines
            how we collect, use, and protect your personal information when you
            use our website or services.
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
