import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  BookOpen,
  CheckSquare,
  FileText,
  Headphones,
  LifeBuoy,
  PhoneCall,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Portal",
  description:
    "GOAT Portal: GOAT Comms Terms and Conditions, PBX User Guide, GOAT Comms PBX login, Remote Support, Open A Ticket, and New Computer Checklist.",
};

const PORTAL_ACTIONS = [
  {
    title: "GOAT Comms Terms and Conditions",
    description: "Download the GOAT Comms Terms and Conditions PDF.",
    href: "/s/terms-and-conditions.pdf",
    external: true,
    icon: FileText,
    tag: "PDF",
  },
  {
    title: "PBX User Guide",
    description: "Download the GOAT Comms PBX User Guide PDF.",
    href: "/s/GOAT-Comms-User-Guide.pdf",
    external: true,
    icon: BookOpen,
    tag: "PDF",
  },
  {
    title: "GOAT Comms PBX",
    description: "Sign in to the GOAT Comms PBX management portal.",
    href: "https://goat.simplelogin.net",
    external: true,
    icon: PhoneCall,
    tag: "PORTAL",
  },
  {
    title: "Remote Support",
    description: "Join a live remote support session with Zoho Assist.",
    href: "https://join.zoho.com",
    external: true,
    icon: Headphones,
    tag: "SUPPORT",
  },
  {
    title: "Open A Ticket",
    description: "Submit or track an IT support ticket in the GOAT Support Portal.",
    href: "https://support.goattechllc.com",
    external: true,
    icon: LifeBuoy,
    tag: "TICKETS",
  },
  {
    title: "New Computer Checklist",
    description: "Prepare your passwords, apps, and files before setup.",
    href: "/newcomp",
    external: false,
    icon: CheckSquare,
    tag: "CHECKLIST",
  },
];

export default function PortalPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
      <div className="grid items-center gap-10 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--accent)]">
            GOAT PORTAL
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-[-0.03em] text-[var(--text)] sm:text-5xl">
            Welcome to the GOAT Portal
          </h1>
          <p className="mt-4 text-xl text-[var(--text-2)]">choose wisely.</p>
        </div>

        <div className="lg:col-span-6">
          <div className="overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow-card)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/portal.webp"
              alt="Welcome to the GOAT Portal"
              width={1254}
              height={1254}
              className="block h-auto w-full"
            />
          </div>
        </div>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {PORTAL_ACTIONS.map((item) => {
          const Icon = item.icon;
          const cardClass =
            "group flex flex-col justify-between rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-7 transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--border-strong)] hover:bg-white hover:shadow-[var(--shadow-hover)]";

          const inner = (
            <>
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] font-medium uppercase tracking-wider text-[var(--accent)]">
                    {item.tag}
                  </span>
                  <Icon
                    className="h-5 w-5 text-[var(--text-3)] transition-colors group-hover:text-[var(--accent)]"
                    strokeWidth={1.6}
                  />
                </div>
                <h2 className="mt-4 text-lg font-semibold tracking-tight text-[var(--text)]">
                  {item.title}
                </h2>
                <p className="mt-2 text-[14px] leading-relaxed text-[var(--text-2)]">
                  {item.description}
                </p>
              </div>
              <div className="mt-6 inline-flex items-center gap-1 text-[13px] font-medium text-[var(--accent)]">
                <span>Open</span>
                <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
              </div>
            </>
          );

          if (item.external) {
            return (
              <a
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cardClass}
              >
                {inner}
              </a>
            );
          }

          return (
            <Link key={item.title} href={item.href} className={cardClass}>
              {inner}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
