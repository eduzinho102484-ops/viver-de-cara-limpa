import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const projectRoot = process.cwd();
const envFile = resolve(projectRoot, ".env");
const localSiteUrl = existsSync(envFile)
  ? readFileSync(envFile, "utf8").match(/^\s*VITE_SITE_URL\s*=\s*["']?([^"'\r\n#]+)["']?\s*$/m)?.[1]?.trim()
  : "";
const configuredSiteUrl = (process.env.VITE_SITE_URL || localSiteUrl || "https://viverdecaralimpa.com.br").trim();
const site = new URL(configuredSiteUrl);

if (site.protocol !== "https:" || site.pathname !== "/" || site.search || site.hash) {
  throw new Error("VITE_SITE_URL deve ser a origem HTTPS do domínio, por exemplo https://viverdecaralimpa.com.br");
}

const routes = [
  "/",
  "/site",
  "/dependencia-de-cocaina",
  "/dependencia-de-crack",
  "/dependencia-de-maconha",
  "/dependencia-de-alcool",
  "/dependencia-de-medicamentos",
];
const escapeXml = (value) => value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
const urls = routes.map((route) => `  <url><loc>${escapeXml(new URL(route, site).href)}</loc></url>`).join("\n");
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
const robots = `User-agent: *\nAllow: /\n\nSitemap: ${new URL("/sitemap.xml", site).href}\n`;

writeFileSync(resolve(projectRoot, "public/sitemap.xml"), sitemap);
writeFileSync(resolve(projectRoot, "public/robots.txt"), robots);
