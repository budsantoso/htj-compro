import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { COMPANY_INFO } from "@/data/company";

const sans = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const heading = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const mono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "CV Harto Jaya Makmur Abadi | Pengepul & Pembeli Aset Bekas Nasional",
    template: "%s | CV Harto Jaya Makmur Abadi",
  },
  description:
    "CV Harto Jaya Makmur Abadi (HTJ) melayani penerimaan limbah besi, alat berat, mesin pabrik, dan hasil lelang aset korporasi di seluruh Indonesia sejak 2005 di bawah pimpinan Bapak Hartono.",
  authors: [{ name: "CV Harto Jaya Makmur Abadi", url: "https://htj.switchcode.id" }],
  creator: "CV Harto Jaya Makmur Abadi",
  publisher: "CV Harto Jaya Makmur Abadi",
  keywords: [
    "CV Harto Jaya Makmur Abadi",
    "HTJ",
    "pengepul besi tua",
    "pembeli limbah besi",
    "jual beli alat berat bekas",
    "lelang aset korporasi",
    "mesin pabrik bekas",
    "scrap logam industri",
    "pembeli besi bekas Jakarta",
    "evakuasi aset pabrik",
    "lelang bank",
    "Bapak Hartono",
  ],
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://htj.switchcode.id",
    siteName: "CV Harto Jaya Makmur Abadi",
    title: "CV Harto Jaya Makmur Abadi | Pengepul & Pembeli Aset Bekas Nasional",
    description:
      "Mitra resmi dan tepercaya perbankan & korporasi dalam pembelian aset lelang, mesin bekas, alat berat, dan limbah besi di seluruh Indonesia sejak 2005.",
    images: [
      {
        url: "https://htj.switchcode.id/logo-htj.jpg",
        width: 900,
        height: 900,
        alt: "Logo CV Harto Jaya Makmur Abadi (HTJ)",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CV Harto Jaya Makmur Abadi | Pengepul & Pembeli Aset Bekas Nasional",
    description:
      "Mitra resmi dan tepercaya perbankan & korporasi dalam pembelian aset lelang, mesin bekas, alat berat, dan limbah besi di seluruh Indonesia sejak 2005.",
    images: ["https://htj.switchcode.id/logo-htj.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFFFFF" },
    { media: "(prefers-color-scheme: dark)", color: "#060911" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`scroll-smooth ${sans.variable} ${heading.variable} ${mono.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/logo-htj.jpg" />
        <link rel="apple-touch-icon" href="/logo-htj.jpg" />
      </head>
      <body className="font-sans text-slate-800 bg-slate-50 antialiased selection:bg-orange-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
