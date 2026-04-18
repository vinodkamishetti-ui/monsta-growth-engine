/**
 * Frontend API service layer.
 *
 * Lovable owns the UI only. All form submissions are routed through this
 * abstraction so the consumer can wire it to their own backend (REST API,
 * Supabase Edge Function, n8n webhook, etc.) without touching components.
 *
 * Replace the placeholder implementations with your own fetch calls when
 * connecting to your backend. Use environment variables prefixed with VITE_
 * for any client-safe configuration only.
 *
 * Suggested env vars (set externally, NOT here):
 *   VITE_PUBLIC_API_BASE_URL  — your backend base URL
 *   VITE_PUBLIC_FORMS_ENDPOINT — your forms ingest endpoint
 *
 * Do NOT put secrets in this file or any client-side code.
 */

export type LeadPayload = {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service?: string;
  message: string;
  source?: string;
};

export type BookingPayload = {
  name: string;
  email: string;
  phone?: string;
  preferredDate?: string;
  goal?: string;
};

export type NewsletterPayload = {
  email: string;
};

export type ApiResult = { ok: true } | { ok: false; error: string };

const API_BASE =
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (import.meta as any).env?.VITE_PUBLIC_API_BASE_URL ?? "";

async function postJson(path: string, body: unknown): Promise<ApiResult> {
  // Placeholder: simulate latency so the UI feels real during development.
  // Swap with real fetch once your backend is wired up.
  if (!API_BASE) {
    await new Promise((r) => setTimeout(r, 700));
    return { ok: true };
  }
  try {
    const res = await fetch(`${API_BASE}${path}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    if (!res.ok) {
      return { ok: false, error: `Request failed (${res.status})` };
    }
    return { ok: true };
  } catch (err) {
    return {
      ok: false,
      error: err instanceof Error ? err.message : "Network error",
    };
  }
}

export const api = {
  submitLead: (payload: LeadPayload) => postJson("/leads", payload),
  submitBooking: (payload: BookingPayload) => postJson("/bookings", payload),
  subscribeNewsletter: (payload: NewsletterPayload) =>
    postJson("/newsletter", payload),
};
