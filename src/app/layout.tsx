import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { LanguageProvider } from "@/components/providers/language-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vimass Clinic - Medicina Integrativa y Longevidad",
  description: "Clínica de medicina integrativa dirigida por la Dra. Celina Suárez. Más de 20 años especializados en medicina funcional, antiaging y protocolos de longevidad saludable.",
  icons: {
    icon: [
      {
        url: '/images/logo/cropped-LOGO-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: '/images/logo/cropped-LOGO-32x32.png',
        sizes: '16x16',
        type: 'image/png',
      }
    ],
    apple: [
      {
        url: '/images/logo/cropped-LOGO-32x32.png',
        sizes: '180x180',
        type: 'image/png',
      }
    ],
    shortcut: '/images/logo/cropped-LOGO-32x32.png',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
