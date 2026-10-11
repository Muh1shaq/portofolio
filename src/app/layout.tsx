import type { Metadata } from "next";
import { Press_Start_2P, VT323 } from "next/font/google";
import "@/styles/tokens.css";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const pixelFont = Press_Start_2P({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-pixel",
});
const bodyFont = VT323({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-vt323",
});

export const metadata: Metadata = {
  title: "Muh Ishaq Afif Ismail | Informatics Student / Software Developer",
  description: "Portofolio Muh Ishaq Afif Ismail — mahasiswa Informatika Telkom University: web, backend, dan game development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${pixelFont.variable} ${bodyFont.variable}`}>
        <a className="skip-link" href="#main-content">
          Lewati ke konten utama
        </a>
        <Navbar />
        <main id="main-content" className="site-main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
