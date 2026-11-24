import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with The GOAT Tech in the Greater Grand Rapids Area. Call 616.528.8033 or email info@goattechllc.com.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--accent)]">
            CONTACT US
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-[-0.03em] text-[var(--text)] sm:text-5xl">
            Get in touch
          </h1>
          <p className="mt-5 text-[17px] leading-[1.65] text-[var(--text-2)]">
            Have a question? Want an estimate? Need someone to chat with about
            the deep mysteries of Central American goat related cryptids? Fill
            out the form or call us. (On the phone, don’t just yell at the
            clouds and expect an answer.)
          </p>

          <div className="mt-8 space-y-3.5">
            <a
              href="mailto:info@goattechllc.com"
              className="flex items-center gap-3.5 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 transition-colors hover:border-[var(--border-strong)]"
            >
              <Mail className="h-5 w-5 text-[var(--accent)]" strokeWidth={1.6} />
              <div>
                <p className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-3)]">
                  Email
                </p>
                <p className="text-[15px] font-medium text-[var(--text)]">
                  info@goattechllc.com
                </p>
              </div>
            </a>

            <a
              href="tel:6165288033"
              className="flex items-center gap-3.5 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 transition-colors hover:border-[var(--border-strong)]"
            >
              <Phone className="h-5 w-5 text-[var(--accent)]" strokeWidth={1.6} />
              <div>
                <p className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-3)]">
                  Phone
                </p>
                <p className="font-mono text-[15px] font-medium text-[var(--text)]">
                  616.528.8033
                </p>
              </div>
            </a>

            <div className="flex items-center gap-3.5 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4">
              <MapPin className="h-5 w-5 text-[var(--accent)]" strokeWidth={1.6} />
              <div>
                <p className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-3)]">
                  Service Area
                </p>
                <p className="text-[15px] font-medium text-[var(--text)]">
                  Greater Grand Rapids Area
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4">
              <Clock className="h-5 w-5 text-[var(--accent)]" strokeWidth={1.6} />
              <div>
                <p className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-3)]">
                  Hours
                </p>
                <p className="text-[15px] font-medium text-[var(--text)]">
                  Monday — Friday · 8am — 5:30pm
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center gap-4 text-[14px] font-medium text-[var(--text-2)]">
            <a
              href="https://instagram.com/thegoattech"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--accent)]"
            >
              Instagram
            </a>
            <span className="text-[var(--text-3)]">·</span>
            <a
              href="https://facebook.com/thegoattech"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--accent)]"
            >
              Facebook
            </a>
            <span className="text-[var(--text-3)]">·</span>
            <a
              href="https://x.com/thegoattech"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--accent)]"
            >
              X
            </a>
          </div>
        </div>

        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
