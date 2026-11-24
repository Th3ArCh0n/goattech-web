import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Training",
  description:
    "The only IT company that will teach you how to use us less.",
};

export default function TrainingPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
      <div className="grid items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--accent)]">
            TRAINING
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-[-0.03em] text-[var(--text)] sm:text-5xl">
            The only IT company that will teach you how to use us less
          </h1>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3 text-[15px] font-medium text-white transition-colors hover:bg-[var(--accent-hover)]"
            >
              <span>Make it</span>
              <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
            </Link>
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow-card)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/training.webp"
              alt="The GOAT Tech team training"
              className="h-[300px] w-full object-cover sm:h-[400px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
