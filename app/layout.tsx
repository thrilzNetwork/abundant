import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abundant Concrete Design | Premier Concrete Contractor in South Florida",
  description:
    "Abundant Concrete Design is South Florida's trusted concrete contractor specializing in decorative concrete, stamped concrete, epoxy flooring, driveways, patios, and pool decks. Serving Tampa, Miami, West Palm Beach, Orlando, Fort Lauderdale, and all of South Florida.",
  keywords:
    "concrete contractor South Florida, decorative concrete, stamped concrete, epoxy flooring, concrete driveway, concrete patio, pool deck, concrete overlays, Tampa, Miami, West Palm Beach, Orlando, Fort Lauderdale",
  openGraph: {
    title: "Abundant Concrete Design | Premier Concrete Contractor in South Florida",
    description:
      "Transform your property with beautiful, durable concrete. Decorative concrete, stamped concrete, epoxy flooring & more. Free estimates. Serving all of South Florida.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
