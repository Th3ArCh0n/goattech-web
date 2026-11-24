import Link from "next/link";

const FOOTER_LINKS = [
  { href: "/phones", label: "Phones" },
  { href: "/business-it", label: "Business IT" },
  { href: "/surveillance", label: "Surveillance / Access Control" },
  { href: "/elevator", label: "Elevator Phones" },
  { href: "/training", label: "Training" },
  { href: "/flags", label: "MSP Red Flags" },
  { href: "/verticals", label: "Verticals" },
  { href: "/details-matter", label: "Details Matter" },
  { href: "/portal", label: "GOAT Portal" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)]">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center gap-2.5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo.png"
                alt="G.O.A.T. Tech LLC"
                width={32}
                height={32}
                className="h-8 w-8 rounded-full object-contain"
              />
              <span className="text-[15px] font-semibold tracking-tight text-[var(--text)]">
                G.O.A.T. Tech LLC
              </span>
            </Link>
            <p className="text-[14px] leading-relaxed text-[var(--text-2)]">
              The anti-MSP. Honest business phones, networking, custom
              computers, and security in Greater Grand Rapids.
            </p>
            <div className="flex items-center gap-4 text-[13px] font-medium text-[var(--text-2)]">
              <a
                href="https://instagram.com/thegoattech"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-[var(--accent)]"
              >
                Instagram
              </a>
              <a
                href="https://facebook.com/thegoattech"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-[var(--accent)]"
              >
                Facebook
              </a>
              <a
                href="https://x.com/thegoattech"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-[var(--accent)]"
              >
                X
              </a>
            </div>
          </div>

          {/* Services & Links */}
          <div>
            <h2 className="font-mono text-[11px] font-medium uppercase tracking-wider text-[var(--text-3)]">
              Navigation
            </h2>
            <ul className="mt-4 grid grid-cols-1 gap-2.5 text-[14px]">
              {FOOTER_LINKS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[var(--text-2)] transition-colors hover:text-[var(--accent)]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Area & Hours */}
          <div className="space-y-6">
            <div>
              <h2 className="font-mono text-[11px] font-medium uppercase tracking-wider text-[var(--text-3)]">
                Service Area
              </h2>
              <p className="mt-2.5 text-[14px] text-[var(--text-2)]">
                Greater Grand Rapids Area
              </p>
            </div>
            <div>
              <h2 className="font-mono text-[11px] font-medium uppercase tracking-wider text-[var(--text-3)]">
                Hours
              </h2>
              <p className="mt-2.5 text-[14px] text-[var(--text-2)]">
                Monday — Friday
              </p>
              <p className="font-mono text-[13px] text-[var(--text-2)]">
                8am — 5:30pm
              </p>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h2 className="font-mono text-[11px] font-medium uppercase tracking-wider text-[var(--text-3)]">
              Contact
            </h2>
            <div className="space-y-2 text-[14px]">
              <p>
                <a
                  href="mailto:info@goattechllc.com"
                  className="text-[var(--text-2)] transition-colors hover:text-[var(--accent)]"
                >
                  info@goattechllc.com
                </a>
              </p>
              <p>
                <a
                  href="tel:6165288033"
                  className="font-mono text-[var(--text-2)] transition-colors hover:text-[var(--accent)]"
                >
                  616.528.8033
                </a>
              </p>
            </div>
            <div className="pt-1">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full bg-[var(--text)] px-4 py-2 text-[13px] font-medium text-white transition-colors hover:bg-[var(--accent)]"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-[var(--border)] pt-6 text-[12px] text-[var(--text-3)] sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} G.O.A.T. Tech LLC. All rights reserved.</p>
          <p className="font-mono uppercase tracking-wider">
            Greater Grand Rapids, MI
          </p>
        </div>
      </div>
    </footer>
  );
}
