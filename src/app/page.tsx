"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="flex flex-col">
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
        {/* Overlay escuro para melhorar a legibilidade do texto */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10">
          <h1 className="mb-4 text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
            Eduardo Libra
          </h1>
          <p className="mb-6 max-w-3xl text-xl sm:text-2xl">
            Designer e Construtor de Obras de Arte Gigantes
          </p>
          <p className="mb-8 max-w-2xl text-lg opacity-90">
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
      <section className="container py-24">
        <div className="grid gap-12 md:grid-cols-3">
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 rounded-full bg-neutral-100 p-4 dark:bg-neutral-800">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-semibold">Com mais de 25 anos no mercado</h3>
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
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 rounded-full bg-neutral-100 p-4 dark:bg-neutral-800">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-semibold">Especialista #1 no Brasil em balões de ar quente formato Special Shape</h3>
          </div>
        </div>
      </section>

      {/* Projetos em Destaque */}
      <section className="bg-neutral-50 py-24 dark:bg-neutral-900">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">
            Projetos em Destaque
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div key={item} className="overflow-hidden rounded-lg bg-white shadow-md transition-transform hover:scale-[1.02] dark:bg-neutral-800">
                <div className="relative h-64 w-full">
                  <div className="h-full w-full bg-neutral-200 dark:bg-neutral-700"></div>
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold">Projeto {item}</h3>
                  <p className="text-neutral-600 dark:text-neutral-300">
                    Descrição do projeto {item}
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
    </div>
  );
}
