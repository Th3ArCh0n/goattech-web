import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Elevator Phones",
  description:
    "Compliant elevator emergency phone replacement when your local POTS provider discontinues service.",
};

export default function ElevatorPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
      <div className="grid items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--accent)]">
            ELEVATOR PHONES · POTS REPLACEMENT
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-[-0.03em] text-[var(--text)] sm:text-5xl">
            Elevator phone not working?
          </h1>
          <p className="mt-6 text-[17px] leading-[1.68] text-[var(--text-2)]">
            Let me tell you a story and see if it sounds familiar. The year is
            2022 and you just received notice from your local POTS (Plain Old
            Telephone Service) provider that they are no longer servicing your
            area. The only remaining line in your building is running your
            elevator phone. “What does it matter?” you think. Surely no one
            really needs an elevator phone. Fast forward to 2024, you just
            received another notice. This time from your elevator service
            company telling you regulations are changing and an inspector will
            shut down your elevator if you don’t have a functioning emergency
            phone in it. That’s where we come in. For a low monthly fee, we can
            return what the large POTS provider took away from you.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3 text-[15px] font-medium text-white transition-colors hover:bg-[var(--accent-hover)]"
            >
              <span>I want what was taken returned</span>
              <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
            </Link>
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow-card)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/elevator.webp"
              alt="Elevator emergency phone service"
              className="h-[300px] w-full object-cover sm:h-[400px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
