"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, message, website }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Unable to send your message.");
        return;
      }
      setSent(true);
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    } catch {
      setError(
        "Network error while sending. Please email info@goattechllc.com or call 616.528.8033."
      );
    } finally {
      setSubmitting(false);
    }
  }

  if (sent) {
    return (
      <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8 text-center">
        <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-700">
          <CheckCircle2 className="h-6 w-6" strokeWidth={1.75} />
        </div>
        <h2 className="mt-4 text-xl font-semibold text-[var(--text)]">
          Message received
        </h2>
        <p className="mt-2 text-[15px] text-[var(--text-2)]">
          Thanks for reaching out. We’ll get back to you shortly during
          business hours (Monday — Friday, 8am — 5:30pm).
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-6 inline-flex items-center rounded-full border border-[var(--border-strong)] bg-white px-5 py-2 text-[14px] font-medium text-[var(--text)] hover:bg-[var(--surface-2)]"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-5 rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-7 sm:p-9"
    >
      {/* Honeypot */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="contact-website">Website</label>
        <input
          id="contact-website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />
      </div>

      <div>
        <label
          htmlFor="contact-name"
          className="block font-mono text-[11px] font-medium uppercase tracking-wider text-[var(--text-2)]"
        >
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          className="mt-1.5 w-full rounded-2xl border border-[var(--border-strong)] bg-white px-4 py-3 text-[15px] text-[var(--text)] placeholder:text-[var(--text-3)] focus:border-[var(--accent)] focus:outline-none"
        />
      </div>

      <div>
        <label
          htmlFor="contact-email"
          className="block font-mono text-[11px] font-medium uppercase tracking-wider text-[var(--text-2)]"
        >
          Email <span className="text-[var(--accent)]">*</span>
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
          className="mt-1.5 w-full rounded-2xl border border-[var(--border-strong)] bg-white px-4 py-3 text-[15px] text-[var(--text)] placeholder:text-[var(--text-3)] focus:border-[var(--accent)] focus:outline-none"
        />
      </div>

      <div>
        <label
          htmlFor="contact-phone"
          className="block font-mono text-[11px] font-medium uppercase tracking-wider text-[var(--text-2)]"
        >
          Phone <span className="text-[var(--accent)]">*</span>
        </label>
        <input
          id="contact-phone"
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="616.555.0123"
          className="mt-1.5 w-full rounded-2xl border border-[var(--border-strong)] bg-white px-4 py-3 text-[15px] text-[var(--text)] placeholder:text-[var(--text-3)] focus:border-[var(--accent)] focus:outline-none"
        />
      </div>

      <div>
        <label
          htmlFor="contact-message"
          className="block font-mono text-[11px] font-medium uppercase tracking-wider text-[var(--text-2)]"
        >
          Message <span className="text-[var(--accent)]">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us what you need..."
          className="mt-1.5 w-full rounded-2xl border border-[var(--border-strong)] bg-white px-4 py-3 text-[15px] text-[var(--text)] placeholder:text-[var(--text-3)] focus:border-[var(--accent)] focus:outline-none"
        />
      </div>

      {error && (
        <div
          role="alert"
          className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-[14px] text-red-700"
        >
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3.5 text-[15px] font-medium text-white transition-colors hover:bg-[var(--accent-hover)] disabled:opacity-60"
      >
        <span>{submitting ? "Sending..." : "Send Message"}</span>
        <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
      </button>
    </form>
  );
}
