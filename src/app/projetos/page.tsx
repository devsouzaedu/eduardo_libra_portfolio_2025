"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

// Definindo tipos
type CategoryKey = 'all' | 'inflatables' | 'banners' | 'balloons' | 'specialShapes';

type Projeto = {
  id: number;
  titulo: string;
  descricao: string;
  categoria: CategoryKey;
  imagem: string;
};

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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 