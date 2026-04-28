import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Suyash Portfolio",
  description:
    "MSBA student cum data engineer specializing in applied AI, analytics and engineering.",
  icons: {
    icon: "/assests/favicon.svg",
  },
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
