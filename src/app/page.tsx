import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone, Server, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "The GOAT Tech",
};

const SERVICE_CARDS = [
  {
    href: "/phones",
    title: "Business Phones",
    eyebrow: "GOAT Comms",
    description:
      "Cloud-based business phones that are scalable, reliable, easy to use, and affordable.",
    icon: Phone,
  },
  {
    href: "/business-it",
    title: "Business I.T. Services",
    eyebrow: "Anti-MSP Support",
    description:
      "Flawless network & Wi-Fi, structured cabling, custom computers, and tech billing audits.",
    icon: Server,
  },
  {
    href: "/surveillance",
    title: "Surveillance / Access Control",
    eyebrow: "No Monthly Fees",
    description:
      "Security camera systems and low-voltage door access control without recurring bills.",
    icon: ShieldCheck,
  },
];

const TESTIMONIALS = [
  {
    quote:
      "I have basic IT skills to support the employees of our small business. Beyond that, Anthony has been our “IT guy” for a long time. G.O.A.T. Tech is very knowledgeable and prompt in responding, whether it’s an emergency situation on our end or a repetitive issue that needs to be fixed. Whenever we require new hardware, G.O.A.T. Tech gives us good options to consider. Our business runs efficiently because of G.O.A.T. Tech’s expertise.",
    author: "Cari W.",
    role: "Owner",
  },
  {
    quote:
      "It would be nearly impossible to overstate the enabling impact that G.O.A.T. Tech has had on us. Their willingness and ability to push the boundaries of Technology didn't just help us achieve our vision, it caused us to see that a much larger vision was possible. Their work has not only increased our productive capacity by a factor of 20x domestically, it has provided support to expand and to maintain our operations globally in multiple locations around the world. Anthony's brilliance, dedication and serving heart has provided a level of service that is incomparable in my experience.",
    author: "Steve C",
    role: "CFO",
  },
  {
    quote:
      "We highly recommend G.O.A.T. Tech. They have always been there to help with our technology needs. Whether it’s something that could be fixed over the phone or an in person visit was needed, our problems were always fixed. We feel G.O.A.T. Tech has vast knowledge in their field, and they are able to teach what needs to be taught.",
    author: "Samantha R.",
    role: "Office Manager",
  },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-5 pb-16 pt-14 sm:px-8 sm:pt-20 lg:pb-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--accent)]">
            THE ANTI-MSP · GREATER GRAND RAPIDS
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-[var(--text)] sm:text-6xl sm:leading-[1.05]">
            What do you need from the GOAT?
          </h1>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3 text-[15px] font-medium text-white transition-colors duration-150 hover:bg-[var(--accent-hover)]"
            >
              <span>Get in touch</span>
              <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
            </Link>
            <Link
              href="/flags"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--border-strong)] bg-white px-6 py-3 text-[15px] font-medium text-[var(--text)] transition-colors duration-150 hover:bg-[var(--surface)]"
            >
              <span>MSP Red Flags</span>
            </Link>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mt-12 overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow-card)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/home-hero.webp"
            alt="Rocky Mountain Goat — The GOAT Tech"
            className="h-[260px] w-full object-cover sm:h-[400px] lg:h-[460px]"
          />
        </div>

        {/* 3 Core Service Cards */}
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {SERVICE_CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <Link
                key={card.href}
                href={card.href}
                className="group flex flex-col justify-between rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-7 transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--border-strong)] hover:bg-white hover:shadow-[var(--shadow-hover)]"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] font-medium uppercase tracking-wider text-[var(--accent)]">
                      {card.eyebrow}
                    </span>
                    <Icon
                      className="h-5 w-5 text-[var(--text-3)] transition-colors group-hover:text-[var(--accent)]"
                      strokeWidth={1.6}
                    />
                  </div>
                  <h2 className="mt-4 text-xl font-semibold tracking-[-0.02em] text-[var(--text)]">
                    {card.title}
                  </h2>
                  <p className="mt-2.5 text-[15px] leading-relaxed text-[var(--text-2)]">
                    {card.description}
                  </p>
                </div>
                <div className="mt-6 inline-flex items-center gap-1.5 text-[14px] font-medium text-[var(--accent)]">
                  <span>Explore</span>
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5"
                    strokeWidth={1.75}
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Who is the GOAT? */}
      <section className="border-y border-[var(--border)] bg-[var(--surface)] py-20 lg:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--accent)]">
              ABOUT US
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.025em] text-[var(--text)] sm:text-4xl">
              Who is the GOAT?
            </h2>
            <div className="mt-6 space-y-5 text-[17px] leading-[1.65] text-[var(--text-2)]">
              <p>
                We are the anti-MSP. Managed Service Providers love monthly fees
                and one-size-fits all solutions. We don’t. We hate them. That’s
                why we are built around the opposite business model. Some
                monthly fees are unavoidable, but we help you manage them and
                lower or get rid of them completely. UCaaS, IoT, TCP/IP, VLAN,
                GPU. We can jargon with the best of them, but you don’t care,
                and you shouldn’t. That’s our job. We specialize in business
                phones, custom designed computers and servers, billing audits,
                network/Wi-Fi design and implementation, infrastructure, tech
                support, and more. We help local businesses thrive, all without
                complicated sales double-speak and tech world jargon.
              </p>
              <p>
                Like the great American Rocky Mountain Goat (Oreamnos
                americanus) we can go where others can’t. Other IT companies (and
                MSPs) are too bloated on their own hubris to nimbly serve their
                customers, we stay lean and quick. (We have to, to evade El
                Chupacabra)
              </p>
            </div>
            <div className="mt-8">
              <Link
                href="/flags"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--text)] px-5 py-2.5 text-[14px] font-medium text-white transition-colors hover:bg-[var(--accent)]"
              >
                <span>Spot MSP Red Flags</span>
                <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-3xl border border-[var(--border)] bg-white p-6 shadow-[var(--shadow-card)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/home-goat.webp"
                alt="G.O.A.T. Tech Emblem"
                className="mx-auto w-full max-w-sm rounded-2xl object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHAT CLIENTS SAY */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="max-w-2xl">
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--accent)]">
            TESTIMONIALS
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.025em] text-[var(--text)] sm:text-4xl">
            WHAT CLIENTS SAY
          </h2>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((item) => (
            <figure
              key={item.author}
              className="flex flex-col justify-between rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8"
            >
              <blockquote className="text-[15px] leading-[1.68] text-[var(--text-2)]">
                “{item.quote}”
              </blockquote>
              <figcaption className="mt-6 border-t border-[var(--border)] pt-4 font-mono text-[12px] uppercase tracking-wider text-[var(--text)]">
                {item.author} <span className="text-[var(--text-3)]">|</span>{" "}
                <span className="text-[var(--text-3)]">{item.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-[var(--border)] bg-[var(--surface)] py-16">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 sm:flex-row sm:items-center sm:px-8">
          <div>
            <h2 className="text-2xl font-semibold tracking-[-0.02em] text-[var(--text)]">
              Ready to ditch the monthly-fee MSP model?
            </h2>
            <p className="mt-1.5 text-[15px] text-[var(--text-2)]">
              Greater Grand Rapids Area · Monday — Friday, 8am — 5:30pm
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3 text-[14px] font-medium text-white transition-colors hover:bg-[var(--accent-hover)]"
            >
              <span>Contact Us</span>
              <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
            </Link>
            <Link
              href="/portal"
              className="inline-flex items-center rounded-full border border-[var(--border-strong)] bg-white px-6 py-3 text-[14px] font-medium text-[var(--text)] transition-colors hover:bg-[var(--surface-2)]"
            >
              GOAT Portal
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
