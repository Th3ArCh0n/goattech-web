import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Business IT",
  description:
    "Flawless network & Wi-Fi, structured cabling infrastructure, custom-built computers, and tech billing audits.",
};

const IT_SERVICES = [
  {
    eyebrow: "01 · NETWORKING",
    title: "Flawless network & Wi-Fi",
    description:
      "Networks & Wi-Fi is complex to get right, but it's what we're great at. With thousands of network devices and tens of thousands of connected endpoints of experience under our belts, rest assured that complete Wi-Fi coverage is possible in your business - all without monthly fees.",
    cta: "Make it so",
    image: "/images/it-wifi.webp",
    alt: "Enterprise network and Wi-Fi hardware",
  },
  {
    eyebrow: "02 · CABLING",
    title: "Infrastructure",
    description:
      "Network cabling in your building should be the last thing you're worried about. Let us take the reins and plan your new office building, home, or map and label your existing cabling.",
    cta: "Cable me up",
    image: "/images/it-cabling.webp",
    alt: "Structured network cabling infrastructure",
  },
  {
    eyebrow: "03 · HARDWARE",
    title: "Custom Computers",
    description:
      "At GOAT Tech, our hearts are rooted in getting you the absolute best computing experience possible. This is made possible by custom designing and hand building every single computer that goes out our doors. We do not believe in one-size fits all computing solutions because every situation is unique. Just like a snowflake.",
    cta: "I want a snowflake",
    image: "/images/it-computers.webp",
    alt: "Custom designed and hand-built computers",
  },
  {
    eyebrow: "04 · COST SAVINGS",
    title: "Tech billing audits",
    description:
      "Are you overpaying for your internet service? Have an old fax line you are no longer using? Paying monthly for things you don’t need to? For a flat fee, lets get together and go over your tech related bills and see what we can do to vanquish them to the depths.",
    cta: "Vanquish my bills",
    image: "/images/it-audits.webp",
    alt: "Technology billing audits",
  },
];

export default function BusinessItPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
      <div className="max-w-3xl">
        <p className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--accent)]">
          BUSINESS I.T. SERVICES · SCROLL TO SEE WHAT WE DO
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-[-0.03em] text-[var(--text)] sm:text-5xl">
          Get the GOAT
        </h1>
        <p className="mt-5 text-[18px] leading-relaxed text-[var(--text-2)]">
          Below is a sampling of the different services we provide, take a
          gander. See what we can do for you.
        </p>
      </div>

      <div className="mt-14 space-y-12">
        {IT_SERVICES.map((item, idx) => {
          const reverse = idx % 2 === 1;
          return (
            <section
              key={item.title}
              className="grid items-center gap-8 rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-10 lg:grid-cols-12 lg:gap-12"
            >
              <div
                className={`lg:col-span-6 ${reverse ? "lg:order-2" : ""}`}
              >
                <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-white">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="h-[240px] w-full object-cover sm:h-[320px]"
                  />
                </div>
              </div>

              <div
                className={`lg:col-span-6 ${reverse ? "lg:order-1" : ""}`}
              >
                <p className="font-mono text-[11px] font-medium uppercase tracking-wider text-[var(--accent)]">
                  {item.eyebrow}
                </p>
                <h2 className="mt-2.5 text-2xl font-semibold tracking-[-0.02em] text-[var(--text)] sm:text-3xl">
                  {item.title}
                </h2>
                <p className="mt-4 text-[16px] leading-[1.65] text-[var(--text-2)]">
                  {item.description}
                </p>
                <div className="mt-7">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-5 py-2.5 text-[14px] font-medium text-white transition-colors hover:bg-[var(--accent-hover)]"
                  >
                    <span>{item.cta}</span>
                    <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
                  </Link>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      <div className="mt-14 flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-[var(--border)] bg-white p-7 shadow-[var(--shadow-card)]">
        <div>
          <h2 className="text-lg font-semibold text-[var(--text)]">
            Also looking for team training?
          </h2>
          <p className="mt-1 text-[14px] text-[var(--text-2)]">
            The only IT company that will teach you how to use us less.
          </p>
        </div>
        <Link
          href="/training"
          className="inline-flex items-center gap-2 rounded-full border border-[var(--border-strong)] px-5 py-2.5 text-[14px] font-medium text-[var(--text)] transition-colors hover:bg-[var(--surface)]"
        >
          <span>Explore Training</span>
          <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
        </Link>
      </div>
    </div>
  );
}
