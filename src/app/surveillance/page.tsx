import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Surveillance / Access Control",
  description:
    "Business security camera systems and low-voltage door access control with no recurring monthly fees.",
};

export default function SurveillancePage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
      <div className="max-w-3xl">
        <p className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--accent)]">
          PHYSICAL SECURITY · ZERO RECURRING FEES
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-[-0.03em] text-[var(--text)] sm:text-5xl">
          Surveillance &amp; Access Control
        </h1>
      </div>

      <div className="mt-12 space-y-10">
        {/* Surveillance */}
        <section className="grid items-center gap-8 rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6">
            <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-white">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/surveillance-cameras.webp"
                alt="Commercial security camera installation"
                className="h-[260px] w-full object-cover sm:h-[340px]"
              />
            </div>
          </div>

          <div className="lg:col-span-6">
            <p className="font-mono text-[11px] font-medium uppercase tracking-wider text-[var(--accent)]">
              01 · CAMERAS
            </p>
            <h2 className="mt-2.5 text-3xl font-semibold tracking-[-0.02em] text-[var(--text)]">
              Surveillance
            </h2>
            <p className="mt-4 text-[16px] leading-[1.65] text-[var(--text-2)]">
              Short of buying a herd of aggressive and fearless Madurai goats,
              what can you do to protect your business in this increasingly
              unstable world? Security cameras deter would-be criminals, and
              give valuable information to business leadership and the police if
              necessary. Plus, I know you hate monthly bills and so do we.
              Scout’s honor, our camera systems have no recurring fees.
            </p>
            <div className="mt-7">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3 text-[14px] font-medium text-white transition-colors hover:bg-[var(--accent-hover)]"
              >
                <span>I don’t have a herd</span>
                <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
              </Link>
            </div>
          </div>
        </section>

        {/* Access Control */}
        <section className="grid items-center gap-8 rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6 lg:order-2">
            <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-white">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/surveillance-access.webp"
                alt="Low-voltage door access control"
                className="h-[260px] w-full object-cover sm:h-[340px]"
              />
            </div>
          </div>

          <div className="lg:col-span-6 lg:order-1">
            <p className="font-mono text-[11px] font-medium uppercase tracking-wider text-[var(--accent)]">
              02 · DOOR SECURITY
            </p>
            <h2 className="mt-2.5 text-3xl font-semibold tracking-[-0.02em] text-[var(--text)]">
              Access Control
            </h2>
            <p className="mt-4 text-[16px] leading-[1.65] text-[var(--text-2)]">
              The GOAT has years of low voltage access control experience, many
              industry contacts, and expert partners to design and implement a
              robust and secure access system for your building. With projects
              ranging from grandiose to low-key (pun intended) under our belts,
              there’s not much we haven’t seen. Whether you want to tighten
              security, increase ease-of-use, or just want to stop handing out
              copies of your keys, access control can be your answer. Not even
              the devious Nubian goat could get in our secured doors.
            </p>
            <div className="mt-7">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3 text-[14px] font-medium text-white transition-colors hover:bg-[var(--accent-hover)]"
              >
                <span>Keep them out</span>
                <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
