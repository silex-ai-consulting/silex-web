import type { Metadata } from "next";
import "@fontsource/cormorant-garamond/400.css";
import "@fontsource/cormorant-garamond/500.css";
import "@fontsource/cormorant-garamond/600.css";
import "@fontsource/cormorant-garamond/700.css";
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/500.css";
import "@fontsource/manrope/600.css";
import "@fontsource/manrope/700.css";
import "@fontsource/manrope/800.css";
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
    icon: "/icon.svg"
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
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
