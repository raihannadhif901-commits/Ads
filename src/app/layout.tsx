import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Linknet Deals — Voucher & Promo Terbaik",
  description:
    "Temukan voucher dan promo terbaik dari brand favorit kamu. Diskon F&B, Games, Shopping, Entertainment, dan Travel hanya di Linknet Deals.",
  keywords: "voucher, promo, diskon, linknet, deals, F&B, games, shopping",
  openGraph: {
    title: "Linknet Deals — Voucher & Promo Terbaik",
    description:
      "Temukan voucher dan promo terbaik dari brand favorit kamu hanya di Linknet Deals.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
