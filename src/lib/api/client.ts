const API_BASE = (import.meta.env.VITE_API_BASE_URL as string | undefined)?.replace(/\/$/, "") || "http://localhost:5000";

export type ApiSuccess<T = Record<string, unknown>> = {
  success: true;
  message: string;
} & T;

export type ApiError = {
  success: false;
  message: string;
  errors?: { field: string; message: string }[];
  errorCode?: string;
};

async function parseJson<T>(res: Response): Promise<T> {
  const data = (await res.json().catch(() => ({}))) as T;
  return data;
}

export async function apiPostJson<T = ApiSuccess>(
  path: string,
  body: unknown,
): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(body),
  });

  const data = await parseJson<T & Partial<ApiError>>(res);
  if (!res.ok || (data as ApiError).success === false) {
    const err = data as ApiError;
    const firstField = err.errors?.[0]?.message;
    throw new Error(firstField || err.message || `Request failed (${res.status})`);
  }
  return data;
}

export async function apiPostFormData<T = ApiSuccess>(
  path: string,
  formData: FormData,
): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, {
    method: "POST",
    headers: { Accept: "application/json" },
    body: formData,
  });

  const data = await parseJson<T & Partial<ApiError>>(res);
  if (!res.ok || (data as ApiError).success === false) {
    const err = data as ApiError;
    const firstField = err.errors?.[0]?.message;
    throw new Error(firstField || err.message || `Request failed (${res.status})`);
  }
  return data;
}

export type ContactPayload = {
  name: string;
  email: string;
  phone: string;
  subject: "general" | "buy" | "sell" | "visit" | "project" | string;
  message: string;
  source?: string;
  projectSlug?: string;
  consentToContact?: boolean;
};

export function submitContact(payload: ContactPayload) {
  return apiPostJson<
    ApiSuccess<{
      id: string;
      status: string;
      emailStatus: { sent: boolean; confirmationSent: boolean };
    }>
  >("/api/contact/submit", {
    ...payload,
    source: payload.source ?? "contact",
    consentToContact: payload.consentToContact ?? true,
  });
}

export function submitSellListing(formData: FormData) {
  return apiPostFormData<
    ApiSuccess<{
      id: string;
      status: string;
      fileCount: number;
      emailStatus: { sent: boolean; confirmationSent: boolean };
    }>
  >("/api/sell/submit", formData);
}

export { API_BASE };
