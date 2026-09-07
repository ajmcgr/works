import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const distDir = path.join(projectRoot, "dist");
const ssrDir = path.join(projectRoot, "dist-ssr");
const template = await readFile(path.join(distDir, "index.html"), "utf8");
const serverEntry = await import(pathToFileURL(path.join(ssrDir, "entry-server.js")));
const { render, getSeoForPath, indexableRoutes, structuredDataForPage } = serverEntry;

const escapeHtml = (value) => value
  .replaceAll("&", "&amp;")
  .replaceAll('"', "&quot;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;");

const seoHead = (page) => {
  const canonical = `https://works.xyz${page.path === "/" ? "/" : page.path}`;
  const image = page.image || "https://works.xyz/og-image.png";
  const jsonLd = structuredDataForPage(page);
  const canonicalTag = page.noindex ? "" : `\n    <link rel="canonical" href="${canonical}" />`;

  return `<!--seo-start-->
    <title>${escapeHtml(page.title)}</title>
    <meta name="description" content="${escapeHtml(page.description)}" />
    <meta name="robots" content="${page.noindex ? "noindex, nofollow" : "index, follow"}" />
    ${canonicalTag}
    <meta property="og:type" content="${page.type || "website"}" />
    <meta property="og:title" content="${escapeHtml(page.title)}" />
    <meta property="og:description" content="${escapeHtml(page.description)}" />
    <meta property="og:image" content="${image}" />
    <meta property="og:image:alt" content="${escapeHtml(page.title)}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:site_name" content="Works" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(page.title)}" />
    <meta name="twitter:description" content="${escapeHtml(page.description)}" />
    <meta name="twitter:image" content="${image}" />
    <meta name="twitter:image:alt" content="${escapeHtml(page.title)}" />
    <script type="application/ld+json" data-works-seo="jsonld">${JSON.stringify(jsonLd).replaceAll("<", "\\u003c")}</script>
    <!--seo-end-->`;
};

const createHtml = (route, page) => template
  .replace(/<!--seo-start-->[\s\S]*?<!--seo-end-->/, seoHead(page))
  .replace('<div id="root"></div>', `<div id="root">${render(route)}</div>`);

for (const route of indexableRoutes) {
  const outputPath = route === "/"
    ? path.join(distDir, "index.html")
    : path.join(distDir, route.slice(1), "index.html");
  await mkdir(path.dirname(outputPath), { recursive: true });
  await writeFile(outputPath, createHtml(route, getSeoForPath(route)));
}

const notFoundPage = getSeoForPath("/__not-found__");
await writeFile(path.join(distDir, "404.html"), createHtml("/__not-found__", notFoundPage));

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${indexableRoutes.map((route) => `  <url><loc>https://works.xyz${route === "/" ? "/" : route}</loc></url>`).join("\n")}
</urlset>
`;
await writeFile(path.join(distDir, "sitemap.xml"), sitemap);
await rm(ssrDir, { recursive: true, force: true });

console.log(`Prerendered ${indexableRoutes.length} indexable routes plus 404.html and sitemap.xml.`);
