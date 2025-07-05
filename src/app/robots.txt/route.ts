// app/robots.txt/route.ts
import { NextResponse } from "next/server";

export function GET() {
  const isVercel = process.env.VERCEL_URL?.includes(".vercel.app");

  const content = isVercel
    ? `User-agent: *\nDisallow: /`
    : `User-agent: *\nAllow: /\nSitemap: https://www.littlefishaccounting.com.au/sitemap.xml`;

  return new NextResponse(content, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
