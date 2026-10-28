import { useEffect } from "react";

const SITE = "https://www.gratiaestates.com";

function setMetaTag(selector, attrName, attrValue, content) {
  let element = document.querySelector(selector);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attrName, attrValue);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

export default function SEO({ title, description, path = "/", image }) {
  const canonical = `${SITE}${path}`;
  const ogImage = image || `${SITE}/assets/favicon.png`;

  useEffect(() => {
    if (title) {
      document.title = title;
    }

    if (description) {
      setMetaTag('meta[name="description"]', "name", "description", description);
    }

    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement("link");
      linkCanonical.setAttribute("rel", "canonical");
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute("href", canonical);

    setMetaTag('meta[property="og:type"]', "property", "og:type", "website");
    setMetaTag('meta[property="og:title"]', "property", "og:title", title || "");
    setMetaTag('meta[property="og:description"]', "property", "og:description", description || "");
    setMetaTag('meta[property="og:url"]', "property", "og:url", canonical);
    setMetaTag('meta[property="og:image"]', "property", "og:image", ogImage);

    setMetaTag('meta[name="twitter:card"]', "name", "twitter:card", "summary_large_image");
    setMetaTag('meta[name="twitter:title"]', "name", "twitter:title", title || "");
    setMetaTag('meta[name="twitter:description"]', "name", "twitter:description", description || "");
    setMetaTag('meta[name="twitter:image"]', "name", "twitter:image", ogImage);
  }, [title, description, canonical, ogImage]);

  return null;
}
