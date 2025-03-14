import { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = params.locale;
  const t = await getTranslations({ locale, namespace: 'Home' });

  return {
    title: 'Eduardo Libra - ' + t('subtitle'),
    description: t('description'),
    keywords: ['Balões de ar quente', 'obras de arte gigante', 'Impressão em faixas gigantes', 'faixas impressas', 'Barueri', 'SP', 'Special Shapes'],
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const locale = params.locale;
  
  // Carrega as mensagens para o locale atual
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    // Fallback para o locale padrão se o arquivo de mensagens não for encontrado
    messages = (await import(`../../messages/pt-BR.json`)).default;
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`} suppressHydrationWarning>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
} 