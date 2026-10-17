import type { Metadata } from "next";
import { Cinzel, Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cinzel",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Making of a Kingdom | Henry VIII, 1509–1547",
  description:
    "An interactive map and timeline of Henry VIII's reign: the union with Wales, the kingdom of Ireland, the dissolution of the monasteries and the last English footholds in France.",
  keywords: [
    "Henry VIII",
    "Tudor",
    "England",
    "Wales",
    "Ireland",
    "Calais",
    "history",
    "map",
    "timeline",
  ],
  openGraph: {
    title: "The Making of a Kingdom | Henry VIII, 1509–1547",
    description:
      "Thirty-eight years, six marriages and a realm transformed. Explore the map and timeline of Henry VIII's reign.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${cormorant.variable} ${inter.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
