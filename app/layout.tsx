import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TODO App",
  description: "TODO App is a simple todo app built with Next.js.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
