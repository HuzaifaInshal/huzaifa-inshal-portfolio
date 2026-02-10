import type { Metadata } from "next";
import "./globals.css";
import LenisProvider from "@/providers/lenis.provider";

export const metadata: Metadata = {
  title: "Huzaifa Inshal - Portfolio",
  description: ""
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <LenisProvider />
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
