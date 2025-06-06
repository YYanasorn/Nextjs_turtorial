import type { Metadata } from "next";
import "./globals.css";
import { sarabun, k2d, kanit } from "./fonts";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${kanit.className}`}>
      {children}
      </body>
    </html>
  );
}
