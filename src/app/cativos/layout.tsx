import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cativeiros e Atividades Vivenciais | Eduardo Libra",
  description: "Palestras vivenciais e experiências com balões de ar quente para desenvolvimento de equipes e conscientização sobre segurança no trabalho.",
  keywords: ['Palestra Vivencial', 'Balões de ar quente', 'Treinamento de equipes', 'Desenvolvimento profissional', 'Segurança no trabalho', 'Dinâmicas de grupo'],
};

export default function CativosLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
} 