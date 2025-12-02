import { MetadataRoute } from "next";
import { worksData } from "./works/worksData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://creative-associates.jp";

  // 固定ページ
  const staticPages = [
    "",
    "/about",
    "/contact",
    "/services/web",
    "/services/logo",
    "/services/comics",
    "/services/photo",
    "/works",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date().toISOString(),
  }));

  // Works（詳細ページ）
  const worksPages = Object.keys(worksData).map((id) => ({
    url: `${baseUrl}/works/${id}`,
    lastModified: new Date().toISOString(),
  }));

  return [...staticPages, ...worksPages];
}
