import { verifyToken } from "../lib/security.js";

function page(title, body) {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${title}</title>
    <style>
      body {
        margin: 0;
        min-height: 100vh;
        display: grid;
        place-items: center;
        background: #09111f;
        color: #f7fbff;
        font-family: Inter, Arial, sans-serif;
        padding: 24px;
      }
      .card {
        width: min(680px, 100%);
        border: 1px solid rgba(255,255,255,0.14);
        border-radius: 24px;
        background: rgba(255,255,255,0.06);
        padding: 28px;
        box-shadow: 0 28px 90px rgba(0,0,0,0.42);
      }
      h1 { margin: 0 0 12px; font-size: 2rem; }
      p { color: #aab8c8; line-height: 1.6; }
      .actions { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 20px; }
      a {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-height: 48px;
        padding: 0 18px;
        border-radius: 999px;
        background: #26e6a3;
        color: #03111a;
        text-decoration: none;
        font-weight: 800;
      }
      a.secondary {
        background: rgba(255,255,255,0.08);
        color: #f7fbff;
        border: 1px solid rgba(255,255,255,0.14);
      }
      code { background: rgba(255,255,255,0.08); padding: 2px 6px; border-radius: 6px; }
    </style>
  </head>
  <body>
    <div class="card">${body}</div>
  </body>
</html>`;
}

function getInstallerUrl(env, platform) {
  if (platform === "windows") {
    return env.WINDOWS_INSTALLER_URL;
  }

  if (platform === "mac" || platform === "macos") {
    return env.MAC_INSTALLER_URL;
  }

  return null;
}

export async function onRequestGet(context) {
  const { request, env } = context;
  const url = new URL(request.url);
  const token = url.searchParams.get("token");
  const platform = url.searchParams.get("platform");

  if (!env.DOWNLOAD_TOKEN_SECRET) {
    return new Response(page("Downloads", "<h1>Downloads are not configured yet.</h1><p>Set the download token secret before using this route.</p>"), {
      headers: { "content-type": "text/html; charset=utf-8" },
      status: 500,
    });
  }

  let payload;
  try {
    payload = await verifyToken(token, env.DOWNLOAD_TOKEN_SECRET);
  } catch {
    return new Response(
      page(
        "Access required",
        `
          <h1>Access required</h1>
          <p>This download page is protected. Please subscribe first, then use the email link we send after checkout.</p>
          <div class="actions">
            <a href="/download.html">Go to pricing</a>
          </div>
        `
      ),
      {
        headers: { "content-type": "text/html; charset=utf-8" },
        status: 401,
      }
    );
  }

  if (!platform) {
    return new Response(
      page(
        "Prism downloads",
        `
          <h1>Prism downloads</h1>
          <p>Thanks, <code>${payload.email}</code>. Pick the installer you need below. Your download link is time-limited.</p>
          <div class="actions">
            <a href="/api/download?platform=windows&token=${encodeURIComponent(token)}">Download for Windows</a>
            <a class="secondary" href="/api/download?platform=mac&token=${encodeURIComponent(token)}">Download for macOS</a>
          </div>
        `
      ),
      {
        headers: { "content-type": "text/html; charset=utf-8", "cache-control": "no-store" },
      }
    );
  }

  const installerUrl = getInstallerUrl(env, platform);
  if (!installerUrl) {
    return new Response(
      page(
        "Installer unavailable",
        `
          <h1>Installer unavailable</h1>
          <p>The installer URL for <code>${platform}</code> is not configured yet.</p>
        `
      ),
      {
        headers: { "content-type": "text/html; charset=utf-8" },
        status: 500,
      }
    );
  }

  return Response.redirect(installerUrl, 302);
}
