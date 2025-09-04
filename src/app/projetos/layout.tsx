import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galeria: Tendas Infláveis 3x3, 4x4, 5x5 e Esculturas SP",
  description: "Galeria de projetos: tendas infláveis 3x3, 4x4, 5x5, esculturas infláveis e obras de arte infláveis realizados em São Paulo, Barueri e Alphaville. Infláveis promocionais com envio rápido.",
  keywords: [
    "Galeria infláveis promocionais",
    "Projetos tendas infláveis",
    "Tendas 3x3 São Paulo",
    "Tendas 4x4 Barueri", 
    "Tendas 5x5 Alphaville",
    "Esculturas infláveis projetos",
    "Obras de arte infláveis galeria",
    "Portfolio infláveis promocionais",
    "Projetos São Paulo",
    "Trabalhos realizados tendas",
    "Eduardo Libra projetos"
  ],
  openGraph: {
    title: "Galeria: Tendas Infláveis 3x3, 4x4, 5x5 e Esculturas SP",
    description: "Veja nossos projetos de tendas infláveis 3x3, 4x4, 5x5, esculturas infláveis e obras de arte infláveis em São Paulo, Barueri e Alphaville.",
  },
};

export default function ProjetosLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
