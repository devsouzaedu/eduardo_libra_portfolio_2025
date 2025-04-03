import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Voo Cativo com Balão de Ar Quente | Eduardo Libra",
  description: "Experiências memoráveis com balões de ar quente ancorados para eventos, treinamentos corporativos e atividades personalizadas.",
  keywords: ['Voo Cativo', 'Balão de ar quente', 'Eventos corporativos', 'Treinamento de equipes', 'Experiência com balão', 'Balão ancorado'],
};

export default function CativosLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
} 