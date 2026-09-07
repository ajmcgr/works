import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { DEFAULT_IMAGE, canonicalUrl, getSeoForPath, structuredDataForPage } from "@/seo";

const upsertMeta = (selector: string, attributes: Record<string, string>) => {
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }
  Object.entries(attributes).forEach(([key, value]) => element!.setAttribute(key, value));
};

const Seo = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const page = getSeoForPath(pathname);
    const canonical = canonicalUrl(page);
    const image = page.image || DEFAULT_IMAGE;

    document.title = page.title;
    upsertMeta('meta[name="description"]', { name: "description", content: page.description });
    upsertMeta('meta[name="robots"]', { name: "robots", content: page.noindex ? "noindex, nofollow" : "index, follow" });
    upsertMeta('meta[property="og:type"]', { property: "og:type", content: page.type || "website" });
    upsertMeta('meta[property="og:title"]', { property: "og:title", content: page.title });
    upsertMeta('meta[property="og:description"]', { property: "og:description", content: page.description });
    upsertMeta('meta[property="og:image"]', { property: "og:image", content: image });
    upsertMeta('meta[property="og:image:alt"]', { property: "og:image:alt", content: page.title });
    upsertMeta('meta[property="og:url"]', { property: "og:url", content: canonical });
    upsertMeta('meta[name="twitter:title"]', { name: "twitter:title", content: page.title });
    upsertMeta('meta[name="twitter:description"]', { name: "twitter:description", content: page.description });
    upsertMeta('meta[name="twitter:image"]', { name: "twitter:image", content: image });
    upsertMeta('meta[name="twitter:image:alt"]', { name: "twitter:image:alt", content: page.title });

    let canonicalLink = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.rel = "canonical";
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = canonical;

    let jsonLd = document.head.querySelector<HTMLScriptElement>('script[data-works-seo="jsonld"]');
    if (!jsonLd) {
      jsonLd = document.createElement("script");
      jsonLd.type = "application/ld+json";
      jsonLd.dataset.worksSeo = "jsonld";
      document.head.appendChild(jsonLd);
    }
    jsonLd.textContent = JSON.stringify(structuredDataForPage(page));
  }, [pathname]);

  return null;
};

export default Seo;
