import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Eduardo Libra - Designer e Construtor de Obras de Arte Gigantes",
  description: "Especialista em obras de arte infláveis gigantes, faixas gigantes, impressões em tecido e balões de ar quente.",
  keywords: ['Balões de ar quente', 'obras de arte gigante', 'Impressão em faixas gigantes', 'faixas impressas', 'Barueri', 'SP', 'Special Shapes'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
