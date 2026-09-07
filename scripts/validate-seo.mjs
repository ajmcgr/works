import { readFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const distDir = path.join(projectRoot, "dist");
const sitemap = await readFile(path.join(distDir, "sitemap.xml"), "utf8");
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => new URL(match[1]));
const titles = new Set();
const failures = [];

for (const url of urls) {
  const file = url.pathname === "/"
    ? path.join(distDir, "index.html")
    : path.join(distDir, url.pathname.slice(1), "index.html");

  try {
    await stat(file);
    const html = await readFile(file, "utf8");
    const title = html.match(/<title>([^<]+)<\/title>/)?.[1];
    const canonical = html.match(/<link rel="canonical" href="([^"]+)"/i)?.[1];

    if (!title) failures.push(`${url.pathname}: missing title`);
    if (title && titles.has(title)) failures.push(`${url.pathname}: duplicate title ${title}`);
    if (title) titles.add(title);
    if (!html.includes('<meta name="description"')) failures.push(`${url.pathname}: missing description`);
    if (!html.includes('<meta name="robots" content="index, follow"')) failures.push(`${url.pathname}: not indexable`);
    if (canonical !== url.href.replace(/\/$/, url.pathname === "/" ? "/" : "")) failures.push(`${url.pathname}: canonical mismatch`);
    if (!html.includes('type="application/ld+json"')) failures.push(`${url.pathname}: missing structured data`);
    if (!/<h1[ >]/i.test(html)) failures.push(`${url.pathname}: missing H1`);
    if (html.includes('<div id="root"></div>')) failures.push(`${url.pathname}: empty prerender root`);
  } catch (error) {
    failures.push(`${url.pathname}: ${error.message}`);
  }
}

const notFound = await readFile(path.join(distDir, "404.html"), "utf8");
if (!notFound.includes('<meta name="robots" content="noindex, nofollow"')) failures.push("404.html: missing noindex");
if (!notFound.includes(">404</h1>")) failures.push("404.html: missing 404 heading");

if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log(`Validated ${urls.length} unique, prerendered, indexable URLs and 404.html.`);
