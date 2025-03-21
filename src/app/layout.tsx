import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { ThemeProvider } from "@/components/theme-provider";

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
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-16939666429"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-16939666429');
            `
          }}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
