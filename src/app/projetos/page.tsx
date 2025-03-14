"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import Link from 'next/link';

// Definindo tipos
type CategoryKey = 'all' | 'inflatables' | 'banners' | 'balloons' | 'specialShapes';

interface Projeto {
  id: number;
  titulo: string;
  descricao: string;
  categoria: CategoryKey;
  imagem: string;
  demoUrl?: string; // Campo opcional para URL de demonstração
}

// Array de projetos com imagens reais
const projetos: Projeto[] = [
  {
    id: 1,
    titulo: "Balão Relógio Cuco",
    descricao: "Balão de ar quente em formato de relógio cuco, um dos mais icônicos special shapes.",
    categoria: "specialShapes",
    imagem: "/cuckoo_relogio_balloon.jpg"
  },
  {
    id: 2,
    titulo: "Balão F1",
    descricao: "Balão de ar quente em formato de carro de Fórmula 1, criado para eventos esportivos.",
    categoria: "specialShapes",
    imagem: "/f1_ballooon.jpg"
  },
  {
    id: 3,
    titulo: "Balão Bola de Basquete",
    descricao: "Balão de ar quente em formato de bola de basquete, desenvolvido para eventos esportivos.",
    categoria: "specialShapes",
    imagem: "/bola_de_basquete_balloon.jpg"
  },
  {
    id: 4,
    titulo: "Balão Tick Tock",
    descricao: "Balão de ar quente em formato de relógio, criado para eventos temáticos.",
    categoria: "specialShapes",
    imagem: "/tick_tock_special_shaped_eduardo_libra.jpg"
  },
  {
    id: 5,
    titulo: "Balões Coloridos",
    descricao: "Conjunto de balões de ar quente coloridos para festivais e eventos.",
    categoria: "balloons",
    imagem: "/baloes_2.jpg"
  },
  {
    id: 6,
    titulo: "Balões Especiais",
    descricao: "Coleção de balões de ar quente em formatos especiais para eventos.",
    categoria: "specialShapes",
    imagem: "/background_baloes_especiais_shape_special_hotairballoon_eduardolibra.jpg"
  }
];

export default function Projects() {
  const [filtroAtivo, setFiltroAtivo] = useState<CategoryKey>('all');
  
  const categories: Record<CategoryKey, string> = {
    all: "Todos",
    inflatables: "Infláveis",
    banners: "Faixas",
    balloons: "Balões",
    specialShapes: "Special Shapes"
  };

  const projetosFiltrados = filtroAtivo === 'all' 
    ? projetos 
    : projetos.filter(projeto => projeto.categoria === filtroAtivo);

  return (
    <div className="container py-12 md:py-24 mx-auto">
      <div className="mb-16 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
          Projetos
        </h1>
        <p className="mx-auto max-w-3xl text-lg text-neutral-600 dark:text-neutral-400">
          Conheça alguns dos meus trabalhos
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="mb-12 flex flex-wrap justify-center gap-4">
        {Object.entries(categories).map(([key, value]) => (
          <Button 
            key={key} 
            variant={filtroAtivo === key ? "default" : "outline"} 
            className="rounded-full"
            onClick={() => setFiltroAtivo(key as CategoryKey)}
          >
            {value}
          </Button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projetosFiltrados.map((projeto) => (
          <div key={projeto.id} className="group overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-lg dark:bg-neutral-800">
            <div className="relative h-64 w-full overflow-hidden">
              <Image 
                src={projeto.imagem} 
                alt={projeto.titulo}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="mb-2 text-xl font-semibold">{projeto.titulo}</h3>
              <p className="mb-4 text-neutral-600 dark:text-neutral-400">
                {projeto.descricao}
              </p>
              <div className="inline-block rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-800 dark:bg-neutral-700 dark:text-neutral-200">
                {categories[projeto.categoria]}
              </div>
              <div className="flex gap-2 mt-4">
                {projeto.demoUrl && (
                  <Link href={projeto.demoUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm">
                      Ver Projeto
                    </Button>
                  </Link>
                )}
                <a 
                  href="https://api.whatsapp.com/send/?phone=5511975865565&text=Oi+Eduardo%21+Eu+vim+através+do+site%2C+gostaria+de+conversar+mais+sobre+o+projeto+de+" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="sm" className="bg-green-600 hover:bg-green-700 text-white border-green-600 hover:border-green-700">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="mr-1">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.967 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Solicitar orçamento
                  </Button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 