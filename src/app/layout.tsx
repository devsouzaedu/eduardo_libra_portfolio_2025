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
    default: "Infláveis, Tendas e Esculturas infláveis em São Paulo, Envio Rápido",
    template: "%s | Eduardo Libra",
  },
  description: "Infláveis promocionais em São Paulo, Barueri e Alphaville. Tendas 3x3, 4x4, 5x5, esculturas infláveis e obras de arte infláveis. Especialista com 25+ anos, fabricação própria e entrega rápida em toda Grande SP.",
  keywords: [
    "Infláveis promocionais",
    "Infláveis Barueri",
    "Infláveis Alphaville", 
    "Infláveis São Paulo",
    "Tendas 3x3",
    "Tendas 4x4",
    "Tendas 5x5",
    "Tendas infláveis",
    "Esculturas infláveis",
    "Obras de arte infláveis",
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
    "Grande São Paulo",
    "Região metropolitana",
    "Envio rápido",
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
    title: "Infláveis, Tendas e Esculturas infláveis em São Paulo, Envio Rápido",
    description: "Infláveis promocionais em São Paulo, Barueri e Alphaville. Tendas 3x3, 4x4, 5x5, esculturas infláveis e obras de arte infláveis. Especialista com 25+ anos de experiência.",
    url: "https://eduardolibra.com",
    siteName: "Eduardo Libra - Infláveis SP",
    images: [
      {
        url: "/logo_novo_real_oficial.jpeg",
        width: 1200,
        height: 630,
        alt: "Infláveis Promocionais São Paulo - Tendas e Esculturas Infláveis",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Infláveis, Tendas e Esculturas infláveis em São Paulo, Envio Rápido",
    description: "Infláveis promocionais em SP, Barueri e Alphaville. Tendas 3x3, 4x4, 5x5, esculturas e obras de arte infláveis.",
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
  other: {
    'geo.region': 'BR-SP',
    'geo.placename': 'São Paulo',
    'geo.position': '-23.5505;-46.6333',
    'ICBM': '-23.5505, -46.6333',
    'DC.title': 'Infláveis, Tendas e Esculturas infláveis em São Paulo, Envio Rápido',
    'DC.creator': 'Eduardo Libra',
    'DC.subject': 'Infláveis promocionais, tendas infláveis, esculturas infláveis',
    'DC.description': 'Infláveis promocionais em São Paulo, Barueri e Alphaville. Tendas 3x3, 4x4, 5x5, esculturas infláveis e obras de arte infláveis',
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
        
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-16939666429"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16939666429');
            
            // Event snippet for Clique de saída conversion page
            function gtag_report_conversion(url) {
              var callback = function () {
                if (typeof(url) != 'undefined') {
                  window.location = url;
                }
              };
              gtag('event', 'conversion', {
                  'send_to': 'AW-16939666429/f6XPCMXt5fcaEP2Xu40_',
                  'event_callback': callback
              });
              return false;
            }
            
            // Disponibilizar a função globalmente
            window.gtag_report_conversion = gtag_report_conversion;
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
