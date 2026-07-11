import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your name.")
    .max(100, "Name is too long."),
  email: z.email("Please enter a valid email address.").max(254),
  subject: z.string().trim().max(150, "Subject is too long.").optional(),
  message: z
    .string()
    .trim()
    .min(10, "Message should be at least 10 characters.")
    .max(5000, "Message is too long."),
});

export type ContactPayload = z.infer<typeof contactSchema>;

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:8080";

const ERROR_MESSAGES: Record<string, string> = {
  validation_failed: "Please double-check your inputs and try again.",
  rate_limited: "Too many messages, please wait a minute and try again.",
  internal_error: "Could not send your message right now. Please try again later.",
};

export async function sendContactMessage(payload: ContactPayload): Promise<void> {
  const res = await fetch(`${API_BASE_URL}/api/v1/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const body = (await res.json().catch(() => null)) as { error?: string } | null;
    const friendly = body?.error ? ERROR_MESSAGES[body.error] : undefined;
    throw new Error(friendly ?? "Something went wrong. Please try again later.");
  }
}
