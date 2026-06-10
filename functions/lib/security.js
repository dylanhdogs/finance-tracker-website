const encoder = new TextEncoder();
const decoder = new TextDecoder();

function bytesToBase64Url(bytes) {
  let binary = "";
  const chunkSize = 0x8000;

  for (let i = 0; i < bytes.length; i += chunkSize) {
    binary += String.fromCharCode(...bytes.subarray(i, i + chunkSize));
  }

  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

function base64UrlToBytes(value) {
  const padded = value.replace(/-/g, "+").replace(/_/g, "/") + "=".repeat((4 - (value.length % 4)) % 4);
  const binary = atob(padded);
  const bytes = new Uint8Array(binary.length);

  for (let i = 0; i < binary.length; i += 1) {
    bytes[i] = binary.charCodeAt(i);
  }

  return bytes;
}

async function hmacSha256(secret, message) {
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );

  const signature = await crypto.subtle.sign("HMAC", key, encoder.encode(message));
  return new Uint8Array(signature);
}

function constantTimeEqual(left, right) {
  if (left.length !== right.length) {
    return false;
  }

  let diff = 0;
  for (let i = 0; i < left.length; i += 1) {
    diff |= left.charCodeAt(i) ^ right.charCodeAt(i);
  }

  return diff === 0;
}

export async function signToken(payload, secret) {
  const payloadJson = JSON.stringify(payload);
  const payloadPart = bytesToBase64Url(encoder.encode(payloadJson));
  const signature = await hmacSha256(secret, payloadPart);
  return `${payloadPart}.${bytesToBase64Url(signature)}`;
}

export async function verifyToken(token, secret) {
  if (!token || typeof token !== "string") {
    throw new Error("Missing token");
  }

  const parts = token.split(".");
  if (parts.length !== 2) {
    throw new Error("Invalid token format");
  }

  const [payloadPart, signaturePart] = parts;
  const expectedSignature = await hmacSha256(secret, payloadPart);
  const actualSignature = base64UrlToBytes(signaturePart);

  if (expectedSignature.length !== actualSignature.length) {
    throw new Error("Invalid token signature");
  }

  for (let i = 0; i < expectedSignature.length; i += 1) {
    if (expectedSignature[i] !== actualSignature[i]) {
      throw new Error("Invalid token signature");
    }
  }

  const payloadJson = decoder.decode(base64UrlToBytes(payloadPart));
  const payload = JSON.parse(payloadJson);

  if (typeof payload.exp !== "number" || Date.now() > payload.exp * 1000) {
    throw new Error("Token expired");
  }

  return payload;
}

export async function verifyStripeSignature(rawBody, signatureHeader, secret, toleranceSeconds = 300) {
  if (!signatureHeader) {
    throw new Error("Missing Stripe-Signature header");
  }

  const items = new Map();
  for (const part of signatureHeader.split(",")) {
    const [name, value] = part.split("=", 2);
    if (!name || !value) continue;
    const list = items.get(name) ?? [];
    list.push(value);
    items.set(name, list);
  }

  const timestamp = Number(items.get("t")?.[0]);
  if (!Number.isFinite(timestamp)) {
    throw new Error("Invalid Stripe signature timestamp");
  }

  if (Math.abs(Date.now() / 1000 - timestamp) > toleranceSeconds) {
    throw new Error("Stripe signature timestamp outside tolerance");
  }

  const expected = await hmacSha256(secret, `${timestamp}.${rawBody}`);
  const expectedHex = [...expected].map((byte) => byte.toString(16).padStart(2, "0")).join("");
  const candidates = items.get("v1") ?? [];

  if (!candidates.some((candidate) => constantTimeEqual(candidate, expectedHex))) {
    throw new Error("Stripe signature verification failed");
  }

  return JSON.parse(rawBody);
}
