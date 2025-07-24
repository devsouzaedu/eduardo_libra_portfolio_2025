import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ThemeProvider } from "@/components/theme-provider";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Eduardo Libra - Infláveis Promocionais, Tendas Infláveis e Balões Rooftop",
    template: "%s | Eduardo Libra",
  },
  description: "Especialista em infláveis promocionais personalizados, tendas infláveis e balões rooftop. Mais de 25 anos de experiência, fabricação própria e entrega em todo Brasil. Solicite seu orçamento gratuito!",
  keywords: [
    "Infláveis promocionais",
    "Tendas infláveis",
    "Balões rooftop",
    "Infláveis personalizados",
    "Marketing inflável",
    "Balões promocionais",
    "Publicidade inflável",
    "Eduardo Libra",
    "Infláveis para eventos",
    "Tenda promocional",
    "Balão publicitário",
    "Inflável personalizado",
    "Marketing visual",
    "Promoção de marca",
    "Eventos corporativos",
    "Ação promocional",
    "Inflável gigante",
    "Estrutura inflável",
    "São Paulo",
    "Brasil",
  ],
  authors: [{ name: "Eduardo Libra" }],
  creator: "Eduardo Libra",
  publisher: "Eduardo Libra",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  icons: {
    icon: "/logo_novo_real_oficial.jpeg",
    shortcut: "/logo_novo_real_oficial.jpeg",
    apple: "/logo_novo_real_oficial.jpeg",
  },
  openGraph: {
    title: "Eduardo Libra - Infláveis Promocionais de Alto Impacto",
    description: "Destaque sua marca com infláveis promocionais personalizados. Tendas infláveis, balões rooftop e soluções criativas para sua campanha. Orçamento gratuito!",
    url: "https://eduardolibra.com",
    siteName: "Eduardo Libra",
    images: [
      {
        url: "/logo_novo_real_oficial.jpeg",
        width: 1200,
        height: 630,
        alt: "Eduardo Libra - Infláveis Promocionais",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eduardo Libra - Infláveis Promocionais de Alto Impacto",
    description: "Destaque sua marca com infláveis promocionais personalizados. Tendas infláveis, balões rooftop e soluções criativas.",
    images: ["/logo_novo_real_oficial.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-T4STLT8P');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-T4STLT8P"
            height="0" 
            width="0" 
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex-grow w-full">
              {children}
            </div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
