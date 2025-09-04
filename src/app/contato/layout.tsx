import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato: Orçamento Tendas Infláveis e Esculturas SP",
  description: "Solicite orçamento para infláveis promocionais, tendas 3x3, 4x4, 5x5, esculturas infláveis e obras de arte infláveis em São Paulo, Barueri e Alphaville. Atendimento especializado e envio rápido.",
  keywords: [
    "Orçamento infláveis promocionais",
    "Contato tendas infláveis",
    "Solicitar orçamento tendas 3x3",
    "Orçamento tendas 4x4 São Paulo",
    "Preço tendas 5x5 Barueri",
    "Orçamento esculturas infláveis",
    "Contato obras de arte infláveis",
    "Eduardo Libra contato",
    "WhatsApp infláveis SP",
    "Solicitar orçamento Alphaville"
  ],
  openGraph: {
    title: "Contato: Orçamento Tendas Infláveis e Esculturas SP",
    description: "Solicite orçamento personalizado para tendas infláveis 3x3, 4x4, 5x5 e esculturas infláveis em São Paulo, Barueri e Alphaville.",
  },
};

export default function ContatoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
