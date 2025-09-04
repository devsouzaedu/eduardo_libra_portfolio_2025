import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PDV Tenda 4x3 com Armação Alumínio - Ponto de Venda SP",
  description: "Tenda PDV 4x3 metros com lona resistente e armação sólida em alumínio. Ideal para ponto de venda de grandes marcas em São Paulo, Barueri e Alphaville. Estrutura robusta e montagem rápida.",
  keywords: [
    "PDV tenda",
    "Tenda PDV 4x3",
    "Ponto de venda tenda",
    "Tenda armação alumínio",
    "Tenda lona resistente",
    "PDV São Paulo",
    "PDV Barueri",
    "PDV Alphaville",
    "Tenda comercial",
    "Estrutura PDV",
    "Tenda para negócio",
    "Ponto de venda móvel",
    "Tenda promocional 4x3",
    "Eduardo Libra PDV"
  ],
  openGraph: {
    title: "PDV Tenda 4x3 com Armação Alumínio - Ponto de Venda SP",
    description: "Tenda PDV 4x3 metros com armação sólida em alumínio para grandes marcas em São Paulo, Barueri e Alphaville.",
  },
};

export default function PDVLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
