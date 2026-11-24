import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().max(120).optional().default(""),
  email: z.string().trim().email("Please enter a valid email address."),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone number.")
    .max(40, "Phone number is too long."),
  message: z
    .string()
    .trim()
    .min(3, "Please enter a short message.")
    .max(4000, "Message is too long."),
  website: z.string().optional().default(""),
});

const RATE_WINDOW_MS = 10 * 60 * 1000;
const RATE_MAX_REQUESTS = 5;
const ipRequests = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (ipRequests.get(ip) ?? []).filter(
    (ts) => now - ts < RATE_WINDOW_MS
  );
  if (recent.length >= RATE_MAX_REQUESTS) {
    ipRequests.set(ip, recent);
    return true;
  }
  recent.push(now);
  ipRequests.set(ip, recent);
  return false;
}

export async function POST(req: NextRequest) {
  let rawBody: unknown;
  try {
    rawBody = await req.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request payload." },
      { status: 400 }
    );
  }

  const parsed = contactSchema.safeParse(rawBody);
  if (!parsed.success) {
    const firstIssue = parsed.error.issues[0]?.message ?? "Invalid form input.";
    return NextResponse.json({ error: firstIssue }, { status: 400 });
  }

  const { name, email, phone, message, website } = parsed.data;

  // Honeypot check: silently accept spam without forwarding
  if (website.trim().length > 0) {
    return NextResponse.json({ ok: true });
  }

  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      {
        error:
          "Too many messages sent recently. Please wait a few minutes or call 616.528.8033.",
      },
      { status: 429 }
    );
  }

  const botToken = process.env.TELEGRAM_BOT_TOKEN?.trim();
  const chatId = process.env.TELEGRAM_CHAT_ID?.trim();

  if (!botToken || !chatId) {
    return NextResponse.json(
      {
        error:
          "Direct messaging is temporarily offline. Please email info@goattechllc.com or call 616.528.8033.",
      },
      { status: 503 }
    );
  }

  const timestamp = new Date().toLocaleString("en-US", {
    timeZone: "America/Detroit",
    dateStyle: "medium",
    timeStyle: "short",
  });

  const text = [
    "New GOAT Tech Website Contact",
    "",
    `Name: ${name || "(not provided)"}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    `Time: ${timestamp} ET`,
    "",
    "Message:",
    message,
  ].join("\n");

  try {
    const tgRes = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text,
        }),
      }
    );

    if (!tgRes.ok) {
      return NextResponse.json(
        {
          error:
            "Unable to deliver your message right now. Please email info@goattechllc.com or call 616.528.8033.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      {
        error:
          "Unable to deliver your message right now. Please email info@goattechllc.com or call 616.528.8033.",
      },
      { status: 502 }
    );
  }
}
