import { config } from "./config.js";

function setMeta(selector, attribute, value) {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement("meta");
    const [key, name] = attribute;
    element.setAttribute(key, name);
    document.head.appendChild(element);
  }
  element.content = value;
}

export function setPageSeo({ title, description, path }) {
  document.title = title;
  setMeta('meta[name="description"]', ["name", "description"], description);
  setMeta('meta[property="og:title"]', ["property", "og:title"], title);
  setMeta('meta[property="og:description"]', ["property", "og:description"], description);

  if (config.siteUrl) {
    const canonicalUrl = new URL(path, `${config.siteUrl}/`).href;
    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;
    setMeta('meta[property="og:url"]', ["property", "og:url"], canonicalUrl);
  }
}
