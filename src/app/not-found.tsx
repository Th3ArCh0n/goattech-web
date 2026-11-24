import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-20 sm:px-8 sm:py-28">
      <p className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--accent)]">
        HTTP 404
      </p>
      <h1 className="mt-3 text-4xl font-semibold tracking-[-0.03em] text-[var(--text)] sm:text-5xl">
        Why are you here?
      </h1>
      <p className="mt-4 text-xl font-medium text-[var(--text)]">
        Well Well Well
      </p>
      <p className="mt-1 text-lg text-[var(--text-2)]">This is a 404 error</p>

      <blockquote className="mt-6 rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 text-[15px] leading-relaxed text-[var(--text-2)]">
        Which Wikipedia defines as: “In computer network communications, the HTTP
        404, 404 not found, 404, 404 error, page not found, or file not found
        error message is a hypertext transfer protocol standard response code,
        to indicate that the browser was able to communicate with a given
        server, but the server could not find what was requested.”
      </blockquote>

      <p className="mt-6 text-[16px] leading-relaxed text-[var(--text-2)]">
        That means you typed in something after the “/” that you should not
        have, cause it doesn’t exist. Consider this your warning not to do it
        again. We’re used to it, Pygmy goats often get out of line as well.
      </p>

      <div className="mt-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3 text-[15px] font-medium text-white transition-colors hover:bg-[var(--accent-hover)]"
        >
          <ArrowLeft className="h-4 w-4" strokeWidth={1.75} />
          <span>Back to Home</span>
        </Link>
      </div>
    </div>
  );
}
