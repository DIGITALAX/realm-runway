import { NextResponse } from "next/server";
import { LOCALES, CARDS } from "../lib/constants";

const locales = LOCALES;

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://runway.globaldesignernetwork.com";

  const urls = locales.map((locale) => {
    const videoEntries = CARDS.map((card) => `
      <video:video>
        <video:thumbnail_loc>${baseUrl}/images/${card.imagen}</video:thumbnail_loc>
        <video:title>${card.title}</video:title>
        <video:content_loc>${baseUrl}/videos/${card.video}</video:content_loc>
      </video:video>`).join('');

    const imageEntries = CARDS.map((card) => `
      <image:image>
        <image:loc>${baseUrl}/images/${card.imagen}</image:loc>
        <image:title>${card.title}</image:title>
      </image:image>`).join('');

    return `
    <url>
      <loc>${baseUrl}/${locale}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>1.0</priority>${videoEntries}${imageEntries}
      ${locales.filter(l => l !== locale).map(altLocale => `
      <xhtml:link rel="alternate" hreflang="${altLocale}" href="${baseUrl}/${altLocale}" />`).join('')}
    </url>`;
  }).join('');

  const body = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
      xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"
      xmlns:xhtml="http://www.w3.org/1999/xhtml"
    >${urls}
    </urlset>`;

  return new NextResponse(body, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
