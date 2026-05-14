import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "@fontsource/instrument-serif/400.css";
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
      { url: "/favicon.ico" },
      { url: "/isotipo-silex.svg", type: "image/svg+xml" }
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png"
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
