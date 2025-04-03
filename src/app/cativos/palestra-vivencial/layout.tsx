import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Palestra Vivencial com Balão de Ar Quente | Eduardo Libra",
  description: "Experiência única de trabalho em equipe e segurança através da montagem de um balão de ar quente para empresas.",
  keywords: ['Palestra Vivencial', 'Balão de ar quente', 'Trabalho em equipe', 'Segurança no trabalho', 'Treinamento corporativo', 'Dinâmica de grupo'],
};

export default function PalestraVivencialLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
} 