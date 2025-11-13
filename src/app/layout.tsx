import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kick It California - Flyer Template Maker",
  description: "Create customizable flyer templates for healthcare referrals",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}