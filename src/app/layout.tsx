import { AOSInit } from "@/lib/Aos";
import type { Metadata } from "next";
import { ibmPlexSerif } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Home - First Impact Foundation",
  description: "Charity Organization",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AOSInit />
      <body className={ibmPlexSerif.className}>{children}</body>
    </html>
  );
}
