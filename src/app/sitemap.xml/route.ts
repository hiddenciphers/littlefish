// app/sitemap.xml/route.ts
import { NextResponse } from "next/server";

export function GET() {
  const baseUrl = "https://www.littlefishaccounting.com.au";

  const pages = [
    { loc: "/", lastmod: "2025-06-19T02:59:49.248631Z", priority: 1.0 },
    // Add more pages here as needed
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset 
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map(
      ({ loc, lastmod, priority }) => `
    <url>
      <loc>${baseUrl}${loc}</loc>
      <lastmod>${lastmod}</lastmod>
      <priority>${priority}</priority>
    </url>`
    )
    .join("")}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
