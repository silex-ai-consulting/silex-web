import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "@fontsource/instrument-serif/400.css";
import { assetPath } from "@/lib/asset-path";
import "./globals.css";

export const metadata: Metadata = {
  title: "SILEX | IA, Web y Automatización",
  description:
    "Soluciones digitales para negocios modernos: sitios web, inteligencia artificial, automatización, datos y estrategia.",
  applicationName: "SILEX",
  keywords: [
    "SILEX",
    "sitios web",
    "automatización",
    "inteligencia artificial",
    "datos",
    "estrategia digital"
  ],
  icons: {
    icon: [
      { url: assetPath("/favicon.ico") },
      { url: assetPath("/isotipo-silex.svg"), type: "image/svg+xml" }
    ],
    shortcut: assetPath("/favicon.ico"),
    apple: assetPath("/apple-touch-icon.png")
  },
  openGraph: {
    title: "SILEX | IA, Web y Automatización",
    description:
      "Soluciones digitales para negocios modernos: sitios web, inteligencia artificial, automatización, datos y estrategia.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={GeistSans.variable}>
      <body>{children}</body>
    </html>
  );
}
