"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function PalestraVivencial() {
  return (
    <main className="container-mobile-friendly min-h-screen bg-white">
      {/* Hero Section com imagem */}
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] mt-4 mb-8 overflow-hidden rounded-lg shadow-lg">
        <Image
          src="/palestra_vivencial_balao.jpeg"
          alt="Palestra Vivencial com Balão de Ar Quente"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Conteúdo textual fora da imagem */}
      <div className="text-center mb-10">
        <h1 className="heading-responsive text-black mb-6">
          Palestra Vivencial para Empresas com Balão de Ar Quente
        </h1>
        <div className="flex justify-center gap-4 flex-wrap">
          <Button asChild className="btn-responsive bg-blue-600 hover:bg-blue-700">
            <Link href="/contato">Solicitar Orçamento</Link>
          </Button>
          <Button asChild className="btn-responsive bg-amber-500 hover:bg-amber-600">
            <Link href="/cativos">Conhecer Outros Serviços</Link>
          </Button>
        </div>
      </div>

      {/* Objetivos */}
      <section className="py-responsive">
        <div className="card-responsive bg-white text-black mb-8">
          <h2 className="text-2xl font-bold mb-4 text-blue-600">Objetivos</h2>
          <p className="text-responsive mb-2">
            Promover uma experiência única de aprendizado envolvendo balões de ar quente para desenvolver:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-responsive">
            <li>Trabalho em equipe e colaboração</li>
            <li>Comunicação eficaz</li>
            <li>Gestão de risco e segurança</li>
            <li>Liderança e tomada de decisão</li>
          </ul>
        </div>
      </section>

      {/* Roteiro das Atividades */}
      <section className="py-responsive">
        <div className="card-responsive bg-white text-black mb-8">
          <h2 className="text-2xl font-bold mb-4 text-blue-600">Roteiro das Atividades</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-black">1. Introdução Teórica (30 min)</h3>
              <p className="text-responsive">Princípios básicos de funcionamento dos balões, história e importância do trabalho em equipe na operação segura.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-black">2. Montagem do Balão (60 min)</h3>
              <p className="text-responsive">Os participantes são divididos em equipes com funções específicas para a montagem do balão sob orientação do piloto.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-black">3. Inflação e Demonstração (60 min)</h3>
              <p className="text-responsive">Com a participação de todos, o balão é inflado e erguido, demonstrando o resultado do esforço coletivo.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-black">4. Reflexão e Debriefing (30 min)</h3>
              <p className="text-responsive">Discussão sobre as lições aprendidas, desafios superados e aplicações práticas para o ambiente corporativo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Resultados Esperados */}
      <section className="py-responsive">
        <div className="card-responsive bg-white text-black mb-8">
          <h2 className="text-2xl font-bold mb-4 text-blue-600">Resultados Esperados</h2>
          <ul className="list-disc pl-6 space-y-2 text-responsive">
            <li>Melhora na capacidade de trabalho em equipe</li>
            <li>Aprimoramento da comunicação entre os membros</li>
            <li>Compreensão da importância de seguir procedimentos de segurança</li>
            <li>Desenvolvimento de confiança mútua e cooperação</li>
            <li>Experiência memorável e diferenciada para os colaboradores</li>
          </ul>
        </div>
      </section>

      {/* Benefícios para Empresas */}
      <section className="py-responsive">
        <div className="card-responsive bg-white text-black mb-8">
          <h2 className="text-2xl font-bold mb-4 text-blue-600">Benefícios para Empresas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 border rounded-md shadow-sm">
              <h3 className="text-lg font-semibold text-black mb-2">Fortalecimento de Equipes</h3>
              <p className="text-responsive">Atividade que promove conexões genuínas entre os membros da equipe em um ambiente não convencional.</p>
            </div>
            <div className="p-4 border rounded-md shadow-sm">
              <h3 className="text-lg font-semibold text-black mb-2">Desenvolvimento de Liderança</h3>
              <p className="text-responsive">Oportunidade para identificar e nutrir habilidades de liderança em cenários de desafio real.</p>
            </div>
            <div className="p-4 border rounded-md shadow-sm">
              <h3 className="text-lg font-semibold text-black mb-2">Cultura de Segurança</h3>
              <p className="text-responsive">Reforço da importância de protocolos de segurança e gestão de riscos de forma vivencial e prática.</p>
            </div>
            <div className="p-4 border rounded-md shadow-sm">
              <h3 className="text-lg font-semibold text-black mb-2">Experiência Exclusiva</h3>
              <p className="text-responsive">Atividade diferenciada que ficará marcada na memória dos colaboradores, associando a empresa a experiências positivas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-responsive mb-12">
        <div className="card-responsive bg-blue-600 text-white text-center rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Transforme o Desenvolvimento da Sua Equipe</h2>
          <p className="text-responsive mb-6">
            Ofereça uma experiência de aprendizado única que combina aventura, trabalho em equipe e lições práticas para o ambiente corporativo.
          </p>
          <Button asChild className="btn-responsive bg-white text-blue-600 hover:bg-gray-100">
            <Link href="/contato">Agendar Palestra Vivencial</Link>
          </Button>
        </div>
      </section>
    </main>
  );
} 