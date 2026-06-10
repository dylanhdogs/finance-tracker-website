import { cpSync, existsSync, mkdirSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const root = dirname(fileURLToPath(new URL("../package.json", import.meta.url)));
const dist = join(root, "dist");

mkdirSync(dist, { recursive: true });

const itemsToCopy = [
  "download.html",
  "tutorials.html",
  "styles.css",
  "script.js",
  "prism_logo_high_quality.png",
  "Dashboard_image.png",
  "Reports.png",
  "Budget Planner.png",
  "Chart of Accounts Preview.png",
  "Transactions_Register.png",
  "downloads",
];

for (const item of itemsToCopy) {
  const source = join(root, item);
  if (!existsSync(source)) continue;
  cpSync(source, join(dist, item), { recursive: true });
}
