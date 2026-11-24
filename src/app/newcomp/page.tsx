import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ChecklistClient } from "@/components/ChecklistClient";

export const metadata: Metadata = {
  title: "Computer Checklist",
  description:
    "New computer preparation checklist from The GOAT Tech.",
};

export default function NewCompPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-14 sm:px-8 sm:py-20">
      <div className="grid items-center gap-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--accent)]">
            NEW COMPUTER CHECKLIST
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-[-0.03em] text-[var(--text)] sm:text-5xl">
            Congratulations
          </h1>
          <p className="mt-4 text-xl text-[var(--text-2)]">
            You’ve just made the best decision of your life
          </p>
        </div>

        <div className="lg:col-span-5">
          <div className="overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow-card)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/newcomp.webp"
              alt="New computer setup checklist"
              className="h-[220px] w-full object-cover sm:h-[260px]"
            />
          </div>
        </div>
      </div>

      <div className="mt-12">
        <ChecklistClient />
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-[var(--border)] bg-white p-7 shadow-[var(--shadow-card)]">
        <p className="text-[15px] text-[var(--text-2)]">
          Ready for setup or have a question before we arrive?
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-5 py-2.5 text-[14px] font-medium text-white transition-colors hover:bg-[var(--accent-hover)]"
        >
          <span>Contact Us</span>
          <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
        </Link>
      </div>
    </div>
  );
}
