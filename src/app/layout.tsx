import type { Metadata } from "next";
import "./global.css";

export const metadata: Metadata = {
  title: "Coffee Break Budget",
  description: "Track your coffee break budget",
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
