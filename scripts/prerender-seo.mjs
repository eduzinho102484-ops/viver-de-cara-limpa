import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { substancePages } from "../src/data/substances.js";

const projectRoot = process.cwd();
const distRoot = resolve(projectRoot, "dist");
const baseHtml = readFileSync(resolve(distRoot, "index.html"), "utf8");
const envFile = resolve(projectRoot, ".env");
const localSiteUrl = existsSync(envFile)
  ? readFileSync(envFile, "utf8").match(/^\s*VITE_SITE_URL\s*=\s*["']?([^"'\r\n#]+)["']?\s*$/m)?.[1]?.trim()
  : "";
const siteUrl = (process.env.VITE_SITE_URL || localSiteUrl || "https://viverdecaralimpa.com.br").replace(/\/$/, "");

const pages = [
  {
    path: "/",
    title: "Viver de Cara Limpa | Orientação e acolhimento",
    description: "Informação, acolhimento e orientação para pessoas e familiares que buscam apoio relacionado ao uso de álcool e outras drogas.",
  },
  {
    path: "/site",
    title: "Conheça o trabalho | Viver de Cara Limpa",
    description: "Conheça o trabalho do Viver de Cara Limpa e encontre informações sobre acolhimento, orientação e possibilidades de apoio.",
  },
  ...Object.values(substancePages).map((page) => ({
    path: page.slug,
    title: `${page.name} | Viver de Cara Limpa`,
    description: page.metaDescription,
  })),
];

const escapeHtml = (value) => value
  .replaceAll("&", "&amp;")
  .replaceAll('"', "&quot;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;");

function renderPage(page) {
  const canonical = new URL(page.path, `${siteUrl}/`).href;
  let html = baseHtml
    .replace(/<title>.*?<\/title>/s, `<title>${escapeHtml(page.title)}</title>`)
    .replace(/<meta\b(?=[^>]*\bname="description")[^>]*>/s, `<meta name="description" content="${escapeHtml(page.description)}" />`)
    .replace(/<link\b(?=[^>]*\brel="canonical")[^>]*>/s, `<link rel="canonical" href="${escapeHtml(canonical)}" />`)
    .replace(/<meta\b(?=[^>]*\bproperty="og:title")[^>]*>/s, `<meta property="og:title" content="${escapeHtml(page.title)}" />`)
    .replace(/<meta\b(?=[^>]*\bproperty="og:url")[^>]*>/s, `<meta property="og:url" content="${escapeHtml(canonical)}" />`)
    .replace(/<meta\b(?=[^>]*\bproperty="og:description")[^>]*>/s, `<meta property="og:description" content="${escapeHtml(page.description)}" />`);
  return html;
}

for (const page of pages) {
  const output = page.path === "/"
    ? resolve(distRoot, "index.html")
    : resolve(distRoot, page.path.slice(1), "index.html");
  mkdirSync(dirname(output), { recursive: true });
  writeFileSync(output, renderPage(page));
}
