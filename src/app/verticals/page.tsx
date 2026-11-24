import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Verticals",
  description:
    "Specialized IT, VoIP, and security solutions for churches/nonprofits, mechanic shops, and small-to-medium offices.",
};

const NICHES = [
  {
    title: "Churches/Nonprofits",
    body: "As a Christian owned company, our hearts are with churches and their mission of The Great Commission. We understand the value of donor dollars, and vow to help you responsibly spend them.",
  },
  {
    title: "Mechanics",
    body: "Mechanic shops have very specific needs that other types of businesses don’t, from the dirty working environment to the OEM scanning tools, we’ve got you covered.",
  },
  {
    title: "Small/Medium Office",
    body: "This is a bit of a broad niche, but office work is what keeps America running, to all of the front desk employees and accountants, we’ve got your back. (Yes, we can fix your Quickbooks.)",
  },
  {
    title: "Other",
    body: "No matter what kind of business you own, the GOAT has a technology solution for you.",
  },
];

export default function VerticalsPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
      <div className="grid items-center gap-10 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--accent)]">
            SOME OF OUR NICHES
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-[-0.03em] text-[var(--text)] sm:text-5xl">
            What vertical does your business belong to?
          </h1>
          <div className="mt-7">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3 text-[15px] font-medium text-white transition-colors hover:bg-[var(--accent-hover)]"
            >
              <span>Talk with us</span>
              <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
            </Link>
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow-card)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/verticals.webp"
              alt="Industries and verticals served by The GOAT Tech"
              className="h-[280px] w-full object-cover sm:h-[360px]"
            />
          </div>
        </div>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {NICHES.map((niche) => (
          <article
            key={niche.title}
            className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8"
          >
            <h2 className="text-2xl font-semibold tracking-[-0.02em] text-[var(--text)]">
              {niche.title}
            </h2>
            <p className="mt-3 text-[16px] leading-[1.65] text-[var(--text-2)]">
              {niche.body}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
