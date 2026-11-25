"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";

const SERVICE_LINKS = [
  { href: "/phones", label: "Phones" },
  { href: "/business-it", label: "Business IT" },
  { href: "/surveillance", label: "Surveillance / Access Control" },
  { href: "/details-matter", label: "Details Matter (Car Photography)" },
];

function PortalButtons() {
  const buttonClass = "inline-flex items-center justify-center whitespace-nowrap rounded-full bg-[var(--accent)] px-4 py-3 text-[15px] font-medium text-white transition-colors duration-150 hover:bg-[var(--accent-hover)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] lg:py-2 lg:text-[13px]";

  return (
    <>
      <Link href="/portal" className={buttonClass}>GOAT Portal</Link>
      <a href="https://support.goattechllc.com" target="_blank" rel="noopener noreferrer" className={buttonClass}>
        Submit a Ticket<span className="sr-only"> (opens in a new tab)</span>
      </a>
    </>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setServicesOpen(false);
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setServicesOpen(false);
        setMobileOpen(false);
      }
    }
    function onPointerDown(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onPointerDown);
    };
  }, []);

  const isServiceActive = SERVICE_LINKS.some((item) =>
    pathname.startsWith(item.href)
  );

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[var(--border)] bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        {/* Brand */}
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2.5 rounded-lg py-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.png"
            alt="The GOAT Tech"
            width={32}
            height={32}
            className="h-8 w-8 rounded-full object-contain"
          />
          <span className="text-[15px] font-semibold tracking-[-0.015em] text-[var(--text)]">
            The GOAT Tech
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          <Link
            href="/"
            aria-current={pathname === "/" ? "page" : undefined}
            className={`rounded-full px-3.5 py-1.5 text-[14px] font-medium transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] ${
              pathname === "/"
                ? "bg-[var(--surface)] text-[var(--text)]"
                : "text-[var(--text-2)] hover:text-[var(--text)]"
            }`}
          >
            Home
          </Link>

          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              aria-expanded={servicesOpen}
              aria-controls="services-menu"
              onClick={() => setServicesOpen((prev) => !prev)}
              className={`inline-flex items-center gap-1 rounded-full px-3.5 py-1.5 text-[14px] font-medium transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] ${
                isServiceActive
                  ? "bg-[var(--surface)] text-[var(--text)]"
                  : "text-[var(--text-2)] hover:text-[var(--text)]"
              }`}
            >
              <span>Services</span>
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform duration-150 ${
                  servicesOpen ? "rotate-180" : ""
                }`}
                strokeWidth={1.75}
              />
            </button>

            {servicesOpen && (
              <div
                id="services-menu"
                role="menu"
                className="absolute left-0 top-full pt-2"
              >
                <div className="w-72 rounded-2xl border border-[var(--border-strong)] bg-white/95 p-1.5 shadow-[var(--shadow-hover)] backdrop-blur-xl">
                  {SERVICE_LINKS.map((item) => {
                    const active = pathname.startsWith(item.href);
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        role="menuitem"
                        className={`block rounded-xl px-3.5 py-2.5 text-[14px] font-medium transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] ${
                          active
                            ? "bg-[var(--surface)] text-[var(--accent)]"
                            : "text-[var(--text)] hover:bg-[var(--surface)]"
                        }`}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          <Link
            href="/flags"
            aria-current={pathname === "/flags" ? "page" : undefined}
            className={`rounded-full px-3.5 py-1.5 text-[14px] font-medium transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] ${
              pathname === "/flags"
                ? "bg-[var(--surface)] text-[var(--text)]"
                : "text-[var(--text-2)] hover:text-[var(--text)]"
            }`}
          >
            MSP Red Flags
          </Link>

          <Link
            href="/verticals"
            aria-current={pathname === "/verticals" ? "page" : undefined}
            className={`rounded-full px-3.5 py-1.5 text-[14px] font-medium transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] ${
              pathname === "/verticals"
                ? "bg-[var(--surface)] text-[var(--text)]"
                : "text-[var(--text-2)] hover:text-[var(--text)]"
            }`}
          >
            Verticals
          </Link>

          <Link
            href="/contact"
            aria-current={pathname === "/contact" ? "page" : undefined}
            className={`rounded-full px-3.5 py-1.5 text-[14px] font-medium transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] ${
              pathname === "/contact"
                ? "bg-[var(--surface)] text-[var(--text)]"
                : "text-[var(--text-2)] hover:text-[var(--text)]"
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* Right CTA & Mobile Toggle */}
        <div className="flex items-center gap-2.5">
          <div className="hidden gap-2.5 lg:flex">
            <PortalButtons />
          </div>

          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] transition-colors hover:bg-[var(--surface-2)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] lg:hidden"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" strokeWidth={1.75} />
            ) : (
              <Menu className="h-5 w-5" strokeWidth={1.75} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="border-t border-[var(--border)] bg-white px-5 pb-6 pt-4 lg:hidden">
          <nav aria-label="Mobile Navigation" className="space-y-1">
            <Link
              href="/"
              className="block rounded-xl px-3 py-2.5 text-[15px] font-medium text-[var(--text)] hover:bg-[var(--surface)]"
            >
              Home
            </Link>
            <div className="py-1">
              <p className="px-3 pb-1 font-mono text-[11px] uppercase tracking-wider text-[var(--text-3)]">
                Services
              </p>
              {SERVICE_LINKS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block rounded-xl px-3 py-2 text-[15px] font-medium text-[var(--text-2)] hover:bg-[var(--surface)] hover:text-[var(--text)]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <Link
              href="/flags"
              className="block rounded-xl px-3 py-2.5 text-[15px] font-medium text-[var(--text)] hover:bg-[var(--surface)]"
            >
              MSP Red Flags
            </Link>
            <Link
              href="/verticals"
              className="block rounded-xl px-3 py-2.5 text-[15px] font-medium text-[var(--text)] hover:bg-[var(--surface)]"
            >
              Verticals
            </Link>
            <Link
              href="/contact"
              className="block rounded-xl px-3 py-2.5 text-[15px] font-medium text-[var(--text)] hover:bg-[var(--surface)]"
            >
              Contact
            </Link>
            <div className="grid gap-2 pt-3">
              <PortalButtons />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
