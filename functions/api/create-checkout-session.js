function getOrigin(request, env) {
  if (env.APP_URL) {
    return env.APP_URL.replace(/\/+$/g, "");
  }

  return new URL(request.url).origin;
}

function stripeFormBody(params) {
  const body = new URLSearchParams();
  for (const [key, value] of Object.entries(params)) {
    body.append(key, String(value));
  }
  return body;
}

export async function onRequest(context) {
  const { request, env } = context;

  if (!env.STRIPE_SECRET_KEY || !env.STRIPE_PRICE_ID) {
    return new Response("Stripe is not configured yet.", { status: 500 });
  }

  const origin = getOrigin(request, env);
  const successUrl = `${origin}/download.html?success=1`;
  const cancelUrl = `${origin}/download.html?canceled=1`;

  const body = stripeFormBody({
    mode: "subscription",
    "line_items[0][price]": env.STRIPE_PRICE_ID,
    "line_items[0][quantity]": "1",
    success_url: successUrl,
    cancel_url: cancelUrl,
    "billing_address_collection": "auto",
  });

  const response = await fetch("https://api.stripe.com/v1/checkout/sessions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.STRIPE_SECRET_KEY}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body,
  });

  const json = await response.json();

  if (!response.ok) {
    return new Response(JSON.stringify({ error: json.error?.message ?? "Unable to create checkout session" }), {
      status: 500,
      headers: { "content-type": "application/json; charset=utf-8" },
    });
  }

  if (!json.url) {
    return new Response("Stripe did not return a checkout URL.", { status: 500 });
  }

  return Response.redirect(json.url, 303);
}
