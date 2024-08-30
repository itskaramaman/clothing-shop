import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import QueryProvider from "@/components/QueryProvider";
import NextAuthSessionProvider from "@/components/NextAuthSessionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Clothing",
  description: "Clothing made simpler",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryProvider>
          <NextAuthSessionProvider>
            <Navbar />
            {children}
            <Newsletter />
            <Footer />
          </NextAuthSessionProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
