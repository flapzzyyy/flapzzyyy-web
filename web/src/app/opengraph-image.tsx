// OpenGraph image for link previews (WhatsApp, LinkedIn, Discord, ...).
// Served at /opengraph-image and referenced automatically by Next.js metadata.

import { ImageResponse } from "next/og";

import { site } from "@/lib/site";

export const alt = `${site.name}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// --brand oklch(0.56 0.115 75) from globals.css, brightened for the dark canvas.
const BRAND = "#c9963e";
const FOREGROUND = "#fafafa";
const MUTED = "#a1a1aa";
const BACKGROUND = "#0a0a0a";

/**
 * Loads a Google Font as TTF data for ImageResponse.
 * Returns null when offline so the image still renders with the default font.
 */
async function loadGoogleFont(family: string): Promise<ArrayBuffer | null> {
  try {
    const cssUrl = `https://fonts.googleapis.com/css2?family=${family}`;
    const css = await (await fetch(cssUrl)).text();
    const fontUrl = css.match(/src: url\((.+?)\) format\('(?:opentype|truetype)'\)/)?.[1];
    if (!fontUrl) return null;

    const response = await fetch(fontUrl);
    if (!response.ok) return null;
    return await response.arrayBuffer();
  } catch {
    return null;
  }
}

export default async function OpenGraphImage() {
  const [playfair, inter] = await Promise.all([
    loadGoogleFont("Playfair+Display:ital,wght@1,600"),
    loadGoogleFont("Inter:wght@400"),
  ]);
  const fonts = [
    ...(playfair
      ? [{ name: "Playfair Display", data: playfair, style: "italic" as const, weight: 600 as const }]
      : []),
    ...(inter ? [{ name: "Inter", data: inter, style: "normal" as const, weight: 400 as const }] : []),
  ];
  const domain = site.url.replace(/^https?:\/\//, "");
  const githubHandle = `@${site.socials.github.split("/").pop()}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          backgroundColor: BACKGROUND,
          backgroundImage:
            "radial-gradient(circle at 85% 10%, rgba(201, 150, 62, 0.16), transparent 55%), radial-gradient(circle at 0% 100%, rgba(201, 150, 62, 0.08), transparent 45%)",
          color: FOREGROUND,
          fontFamily: inter ? "Inter" : undefined,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            fontSize: 22,
            letterSpacing: 6,
            color: MUTED,
          }}
        >
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: 9999,
              backgroundColor: BRAND,
            }}
          />
          PORTFOLIO
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              fontFamily: playfair ? "Playfair Display" : undefined,
              fontStyle: playfair ? "italic" : undefined,
              fontSize: 82,
              fontWeight: 600,
              lineHeight: 1.1,
              letterSpacing: -1,
            }}
          >
            {site.name}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <div style={{ width: 56, height: 3, backgroundColor: BRAND }} />
          </div>
          <div style={{ fontSize: 24, lineHeight: 1.5, color: MUTED, maxWidth: 860 }}>
            Informatics Engineering student at Institut Teknologi Sepuluh Nopember
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 24,
            color: MUTED,
          }}
        >
          <div style={{ display: "flex" }}>{domain}</div>
          <div style={{ display: "flex" }}>{githubHandle}</div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: fonts.length > 0 ? fonts : undefined,
    },
  );
}
