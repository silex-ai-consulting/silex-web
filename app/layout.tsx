import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
});

const sans = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"]
});

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
    <html lang="es" className={`${display.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
