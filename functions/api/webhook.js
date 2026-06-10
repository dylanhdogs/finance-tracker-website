import { signToken, verifyStripeSignature } from "../lib/security.js";

function getOrigin(request, env) {
  if (env.APP_URL) {
    return env.APP_URL.replace(/\/+$/g, "");
  }

  return new URL(request.url).origin;
}

function tokenExpiryFromEnv(env) {
  const hours = Number.parseInt(env.DOWNLOAD_TOKEN_TTL_HOURS ?? "48", 10);
  const safeHours = Number.isFinite(hours) && hours > 0 ? hours : 48;
  return Math.floor(Date.now() / 1000) + safeHours * 60 * 60;
}

async function sendResendEmail(env, toEmail, downloadUrl) {
  if (!env.RESEND_API_KEY || !env.RESEND_FROM_EMAIL) {
    throw new Error("Resend is not configured yet.");
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: env.RESEND_FROM_EMAIL,
      to: [toEmail],
      subject: "Your Prism download link",
      html: `
        <div style="font-family: Inter, Arial, sans-serif; line-height: 1.6; color: #111111;">
          <h1 style="margin:0 0 16px;">Your Prism download is ready</h1>
          <p style="margin:0 0 16px;">Thanks for subscribing. Use the button below to open your protected download page.</p>
          <p style="margin:0 0 24px;">
            <a href="${downloadUrl}" style="display:inline-block;padding:12px 20px;border-radius:999px;background:#ec4889;color:#03111a;text-decoration:none;font-weight:700;">Open download page</a>
          </p>
          <p style="margin:0;color:#526073;">This link expires after a limited time. If you need help, reply to this email.</p>
        </div>
      `,
      text: `Your Prism download is ready: ${downloadUrl}`,
    }),
  });

  if (!response.ok) {
    const details = await response.text();
    throw new Error(`Resend request failed: ${details}`);
  }
}

export async function onRequestPost(context) {
  const { request, env } = context;

  if (!env.STRIPE_WEBHOOK_SECRET || !env.DOWNLOAD_TOKEN_SECRET) {
    return new Response("Webhook is not configured yet.", { status: 500 });
  }

  const signature = request.headers.get("Stripe-Signature");
  const rawBody = await request.text();
  let event;

  try {
    event = await verifyStripeSignature(rawBody, signature, env.STRIPE_WEBHOOK_SECRET);
  } catch (error) {
    return new Response(`Invalid webhook signature: ${error.message}`, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    const email = session.customer_details?.email ?? session.customer_email;
    const paymentStatus = session.payment_status;

    if (session.mode === "subscription" && email && paymentStatus === "paid") {
      const origin = getOrigin(request, env);
      const token = await signToken(
        {
          email,
          sessionId: session.id,
          subscriptionId: session.subscription,
          exp: tokenExpiryFromEnv(env),
        },
        env.DOWNLOAD_TOKEN_SECRET
      );

      const downloadUrl = `${origin}/api/download?token=${encodeURIComponent(token)}`;
      await sendResendEmail(env, email, downloadUrl);
    }
  }

  return new Response(JSON.stringify({ received: true }), {
    headers: { "content-type": "application/json; charset=utf-8" },
  });
}
