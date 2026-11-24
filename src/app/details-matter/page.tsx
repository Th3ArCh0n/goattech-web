import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Camera } from "lucide-react";

export const metadata: Metadata = {
  title: "Details Matter (Car Photography)",
  description:
    "Details Matter car photography by The GOAT Tech — coming soon.",
};

export default function DetailsMatterPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-20 text-center sm:px-8 sm:py-28">
      <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--surface)] text-[var(--accent)]">
        <Camera className="h-7 w-7" strokeWidth={1.5} />
      </div>
      <p className="mt-6 font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--accent)]">
        DETAILS MATTER · CAR PHOTOGRAPHY
      </p>
      <h1 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-[var(--text)] sm:text-5xl">
        Our pack of Oberhasli are out making the cheese
      </h1>
      <p className="mx-auto mt-5 max-w-xl text-[17px] leading-relaxed text-[var(--text-2)]">
        Details Matter is getting ready for launch. Check back soon—or if you
        want to get in touch before then, email us at{" "}
        <a
          href="mailto:info@goattechllc.com"
          className="font-medium text-[var(--accent)] underline underline-offset-4"
        >
          info@goattechllc.com
        </a>{" "}
        or shoot us a call at{" "}
        <a
          href="tel:6165288033"
          className="font-mono font-medium text-[var(--accent)] underline underline-offset-4"
        >
          616.528.8033
        </a>
        .
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3 text-[15px] font-medium text-white transition-colors hover:bg-[var(--accent-hover)]"
        >
          <span>Get in touch</span>
          <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
        </Link>
        <Link
          href="/"
          className="inline-flex items-center rounded-full border border-[var(--border-strong)] bg-white px-6 py-3 text-[15px] font-medium text-[var(--text)] transition-colors hover:bg-[var(--surface)]"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
