"use client";

import { useState } from "react";
import { Check } from "lucide-react";

const STEPS = [
  {
    id: "step-1",
    label: "Step 1",
    body: "I see you fretting. Stop it. The herd will be there for you. We’ll get through this together.",
  },
  {
    id: "step-2",
    label: "Step 2",
    body: "Gather all passwords and user accounts that will need to be signed in on the new computer (Google, Microsoft, etc). This will be your most difficult task to date.",
  },
  {
    id: "step-3",
    label: "Step 3",
    body: "Make a list of all programs you’ll need installed on the new computer. This one should be easy. You know what programs you use, right?",
  },
  {
    id: "step-4",
    label: "Step 4",
    body: "Get your affairs in order. (Delete any extra files you don’t need transferred to the new computer in your Downloads, Documents, Pictures, Desktop, and Video folders.) This will make the process more efficient for everyone.",
  },
  {
    id: "extra-credit",
    label: "Extra Credit",
    body: "Take a vacuum or broom and clean up all the dead skin cells under the desk. Our goats have healthy lungs and they would like to keep them that way.",
  },
];

export function ChecklistClient() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  function toggle(id: string) {
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  return (
    <div className="space-y-4">
      {STEPS.map((step) => {
        const isDone = Boolean(checked[step.id]);
        return (
          <button
            key={step.id}
            type="button"
            onClick={() => toggle(step.id)}
            aria-pressed={isDone}
            className={`flex w-full items-start gap-4 rounded-3xl border p-6 text-left transition-all ${
              isDone
                ? "border-[var(--accent)]/40 bg-[var(--surface)]/70 opacity-80"
                : "border-[var(--border)] bg-[var(--surface)] hover:border-[var(--border-strong)] hover:bg-white hover:shadow-[var(--shadow-card)]"
            }`}
          >
            <span
              className={`mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition-colors ${
                isDone
                  ? "border-[var(--accent)] bg-[var(--accent)] text-white"
                  : "border-[var(--border-strong)] bg-white text-transparent"
              }`}
            >
              <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
            </span>
            <div>
              <h2 className="font-mono text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">
                {step.label}
              </h2>
              <p
                className={`mt-1.5 text-[16px] leading-[1.6] ${
                  isDone ? "text-[var(--text-3)] line-through" : "text-[var(--text-2)]"
                }`}
              >
                {step.body}
              </p>
            </div>
          </button>
        );
      })}
    </div>
  );
}
