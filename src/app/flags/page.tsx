import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "MSP Red Flags",
  description:
    "Being the Anti-MSP means spotting non-itemized quotes, unnecessary monthly fees, recovery fees, and redundant services.",
};

const RED_FLAGS = [
  {
    num: "01",
    title: "Non-itemized Quotes.",
    body: "By not itemizing quotes, many companies sneak in extra charges, fees, etc to add to their bottom line while not offering any additional benefits for the consumer",
  },
  {
    num: "02",
    title: "Monthly Fees.",
    body: "Ask yourself “does it make sense that there is a monthly fee attached?” Things like computer support, network hardware, access control, and surveillance can (and should) be done without reoccurring fees.",
  },
  {
    num: "03",
    title: "Recovery Fees.",
    body: "I bet you didn’t know the FCC allows phone service providers to charge any fee, at any rate they want, as long as it’s called a “recovery fee”. If you see this phrase, your little ears better perk up.",
  },
  {
    num: "04",
    title: "Services Not Requested.",
    body: "Many MSPs will not consider products you already own and will tack on many different “solutions” that are redundant, just to get more of that juicy juicy MRR (Monthly Recurring Revenue). If there are services that you didn’t request or was not previously talked about on your quote, run away fast.",
  },
];

export default function FlagsPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
      <div className="grid items-center gap-10 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--accent)]">
            MSP RED FLAGS
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-[-0.03em] text-[var(--text)] sm:text-5xl">
            It’s Us VS Them
          </h1>
          <div className="mt-6 space-y-4 text-[17px] leading-[1.65] text-[var(--text-2)]">
            <p>
              Being the Anti-MSP means we care deeply about your budgets,
              security, and business, it’s us vs them. Keep reading to see why
              it matters.
            </p>
            <p className="font-medium text-[var(--text)]">
              The GOAT is your guardian. Our eyes are trained to spot red flags.
            </p>
            <p>
              If you currently work with an MSP or are considering quotes from
              one, here are some flapping flags that should scare you:
            </p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:col-span-6">
          <div className="overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow-card)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/flags-vs.webp"
              alt="Goat vs Bear — Anti-MSP"
              className="h-64 w-full object-cover"
            />
          </div>
          <div className="overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow-card)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/flags-goat.webp"
              alt="Majestic Mountain Goat guardian"
              className="h-64 w-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {RED_FLAGS.map((flag) => (
          <article
            key={flag.num}
            className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8"
          >
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[var(--accent)]">
              RED FLAG {flag.num}
            </span>
            <h2 className="mt-2.5 text-2xl font-semibold tracking-[-0.02em] text-[var(--text)]">
              {flag.title}
            </h2>
            <p className="mt-3 text-[16px] leading-[1.65] text-[var(--text-2)]">
              {flag.body}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-12 flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-[var(--border)] bg-white p-8 shadow-[var(--shadow-card)]">
        <div>
          <h2 className="text-xl font-semibold text-[var(--text)]">
            Have an MSP quote you want us to review?
          </h2>
          <p className="mt-1 text-[15px] text-[var(--text-2)]">
            Send it our way and we’ll help you spot hidden fees and redundant
            monthly charges.
          </p>
        </div>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3 text-[14px] font-medium text-white transition-colors hover:bg-[var(--accent-hover)]"
        >
          <span>Get an honest second opinion</span>
          <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
        </Link>
      </div>
    </div>
  );
}
