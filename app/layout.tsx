import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import { MyContextProvider } from "@/context/MyContext";

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
      <body className="dark:bg-gray-600 dark:text-slate-100 ">
        <MyContextProvider>
          <>
            <Header />
            <main>{children}</main>
          </>
        </MyContextProvider>
      </body>
    </html>
  );
}
