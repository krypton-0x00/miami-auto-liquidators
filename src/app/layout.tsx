import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://miamiautoliquidators.com"),
  title: "Miami Auto Liquidators | Quality Used Cars Dealer in Miami, FL",
  description: "Miami Auto Liquidators - Trusted used car dealer in Miami, FL. Wide selection of quality sedans, SUVs, and trucks. Financing available, trade-ins welcome. Call (305) 783-3879.",
  keywords: "used cars, car dealership, Miami Auto Liquidators, used car dealer Miami FL, financing available, trade-in, quality used vehicles, Augusto, Ives",
  authors: [{ name: "Miami Auto Liquidators" }],
  openGraph: {
    title: "Miami Auto Liquidators | Quality Used Cars in Miami, FL",
    description: "Your trusted used car dealer in Miami, FL. Quality vehicles at great prices.",
    url: "https://miamiautoliquidators.com",
    siteName: "Miami Auto Liquidators",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
