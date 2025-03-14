"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

// Array de projetos com imagens reais
const projetosDestaque = [
  {
    id: 1,
    titulo: "Balão Relógio Cuco",
    descricao: "Balão de ar quente em formato de relógio cuco, um dos mais icônicos special shapes.",
    imagem: "/cuckoo_relogio_balloon.jpg"
  },
  {
    id: 2,
    titulo: "Balão F1",
    descricao: "Balão de ar quente em formato de carro de Fórmula 1, criado para eventos esportivos.",
    imagem: "/f1_ballooon.jpg"
  },
  {
    id: 3,
    titulo: "Balão Bola de Basquete",
    descricao: "Balão de ar quente em formato de bola de basquete, desenvolvido para eventos esportivos.",
    imagem: "/bola_de_basquete_balloon.jpg"
  }
];

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Hero Section com Imagem de Fundo */}
      <section 
        className="relative h-[90vh] w-full overflow-hidden"
        style={{ 
          backgroundImage: "url('/balao_relogio.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        {/* Conteúdo principal */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10">
          <h1 className="mb-4 text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl text-shadow-lg">
            Eduardo Libra
          </h1>
          <p className="mb-6 max-w-3xl text-xl sm:text-2xl text-shadow-md">
            Designer e Construtor de Obras de Arte Gigantes
          </p>
          <p className="mb-8 max-w-2xl text-lg opacity-90 text-shadow-md">
            Especialista em obras de arte infláveis gigantes, faixas gigantes, impressões em tecido e balões de ar quente.
          </p>
          <Link href="/projetos">
            <Button size="lg" className="text-base">
              Conheça meus projetos
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="container py-24 text-center">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">
          Por que escolher Eduardo Libra?
        </h2>
        <div className="grid gap-12 md:grid-cols-3">
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 rounded-full bg-neutral-100 p-4 dark:bg-neutral-800">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-semibold">Com mais de 25 anos no mercado</h3>
            <p className="text-neutral-600 dark:text-neutral-300">
              Experiência e conhecimento técnico para criar obras de arte únicas e seguras.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 rounded-full bg-neutral-100 p-4 dark:bg-neutral-800">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-semibold">Experiência internacional em mais de 15 países</h3>
            <p className="text-neutral-600 dark:text-neutral-300">
              Projetos realizados em eventos internacionais por todo o mundo.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 rounded-full bg-neutral-100 p-4 dark:bg-neutral-800">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-semibold">Especialista #1 no Brasil em balões de ar quente formato Special Shape</h3>
            <p className="text-neutral-600 dark:text-neutral-300">
              Criações exclusivas e personalizadas para eventos e marcas.
            </p>
          </div>
        </div>
      </section>

      {/* Projetos em Destaque */}
      <section className="bg-neutral-50 py-24 w-full dark:bg-neutral-900">
        <div className="container mx-auto">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">
            Projetos em Destaque
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projetosDestaque.map((projeto) => (
              <div key={projeto.id} className="overflow-hidden rounded-lg bg-white shadow-md transition-transform hover:scale-[1.02] dark:bg-neutral-800">
                <div className="relative h-64 w-full">
                  <Image 
                    src={projeto.imagem} 
                    alt={projeto.titulo}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold">{projeto.titulo}</h3>
                  <p className="text-neutral-600 dark:text-neutral-300">
                    {projeto.descricao}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <Link href="/projetos">
              <Button variant="outline" size="lg">
                Ver todos os projetos
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Galeria de Imagens */}
      <section className="py-24 w-full">
        <div className="container mx-auto">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">
            Galeria de Balões
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative h-80 rounded-lg overflow-hidden">
              <Image 
                src="/background_baloes_especiais_shape_special_hotairballoon_eduardolibra.jpg" 
                alt="Balões especiais"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden">
              <Image 
                src="/baloes_2.jpg" 
                alt="Balões coloridos"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden">
              <Image 
                src="/tick_tock_special_shaped_eduardo_libra.jpg" 
                alt="Balão Tick Tock"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden">
              <Image 
                src="/balao_relogio.jpg" 
                alt="Balão Relógio"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
