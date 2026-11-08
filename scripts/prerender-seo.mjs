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
    title: "Ajuda para Dependência Química | Viver de Cara Limpa",
    description: "Orientação acolhedora para quem enfrenta problemas com álcool e outras drogas. Conheça possibilidades de cuidado e apoio para familiares.",
  },
  {
    path: "/site",
    title: "Orientação sobre Tratamento e Clínicas | Viver de Cara Limpa",
    description: "Entenda como buscar tratamento para dependência química, conhecer possibilidades de acolhimento e encontrar apoio para você ou sua família.",
  },
  ...Object.values(substancePages).map((page) => ({
    path: page.slug,
    title: page.seoTitle,
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
