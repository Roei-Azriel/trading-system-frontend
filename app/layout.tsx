import Header from '@/components/layout/Header/Header';
import "./globals.css";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "TradeForge",
    description: "Trade crypto, manage wallets, and track open orders in one place.",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
      </body>
    </html>
  );
}
