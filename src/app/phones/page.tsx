import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Phones",
  description:
    "GOAT Comms is a cloud-based business phone system that is scalable, reliable, easy to use, and affordable.",
};

export default function PhonesPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
      <div className="grid items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--accent)]">
            GOAT COMMS · BUSINESS PHONES
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-[-0.03em] text-[var(--text)] sm:text-5xl">
            Get the GOAT
          </h1>

          <div className="mt-6 space-y-5 text-[17px] leading-[1.65] text-[var(--text-2)]">
            <p>
              The phones at your business are very important, I can tell already
              because you’re reading this. Well, GOAT Comms is a cloud-based
              phone system that is scalable, reliable, easy to use, and
              affordable.
            </p>
            <p>
              Feel free to ignore power and internet outages with cell phone and
              computer apps. Have you seen those YouTube videos of the screaming
              goats? I bet your employees sound like that when their phones are
              down.
            </p>
            <p>
              With remote support included, and on-the-fly service changes that
              are made quickly, you can trust us to keep your phone calls
              coming. You don’t need to be El Chupacabra to get this GOAT.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3 text-[15px] font-medium text-white transition-colors hover:bg-[var(--accent-hover)]"
            >
              <span>Quiet the screams</span>
              <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
            </Link>
            <Link
              href="/portal"
              className="inline-flex items-center rounded-full border border-[var(--border-strong)] bg-white px-5 py-3 text-[14px] font-medium text-[var(--text)] transition-colors hover:bg-[var(--surface)]"
            >
              PBX User Guide &amp; Portal
            </Link>
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow-card)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/phones.webp"
              alt="GOAT Comms Business Phone System"
              className="h-[320px] w-full object-cover sm:h-[440px]"
            />
          </div>
        </div>
      </div>

      {/* Related Phone Links */}
      <div className="mt-16 grid gap-5 sm:grid-cols-2">
        <Link
          href="/elevator"
          className="group rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-7 transition-all hover:border-[var(--border-strong)] hover:bg-white hover:shadow-[var(--shadow-hover)]"
        >
          <p className="font-mono text-[11px] uppercase tracking-wider text-[var(--accent)]">
            POTS REPLACEMENT
          </p>
          <h2 className="mt-2 text-xl font-semibold tracking-tight text-[var(--text)]">
            Elevator Phones
          </h2>
          <p className="mt-2 text-[15px] text-[var(--text-2)]">
            Lost your POTS line for your building’s elevator emergency phone?
            See how we keep inspectors happy.
          </p>
        </Link>

        <Link
          href="/portal"
          className="group rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-7 transition-all hover:border-[var(--border-strong)] hover:bg-white hover:shadow-[var(--shadow-hover)]"
        >
          <p className="font-mono text-[11px] uppercase tracking-wider text-[var(--accent)]">
            EXISTING CUSTOMERS
          </p>
          <h2 className="mt-2 text-xl font-semibold tracking-tight text-[var(--text)]">
            GOAT Portal &amp; PBX Docs
          </h2>
          <p className="mt-2 text-[15px] text-[var(--text-2)]">
            Access GOAT Comms PBX, Terms &amp; Conditions, and the PBX User
            Guide PDF.
          </p>
        </Link>
      </div>
    </div>
  );
}
