import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Suyash Sawant — Portfolio",
  description:
    "MSBA student & data scientist specializing in machine learning, NLP, and analytics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
