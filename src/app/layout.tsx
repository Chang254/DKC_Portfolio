import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const mont = Montserrat({ subsets: ["latin"] });

const title = "DKC"
const description = "Fullstack Developer"

export const metadata: Metadata = {
  title: title,
  description: description,
  openGraph: {
    title: title,
    description: description
  },
  icons: [{ url: '/DKC-Logo.png' }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-primary ${mont.className}`}>
        <SmoothScroll>
        {children}
        </SmoothScroll>  
      </body>
    </html>
  );
}
