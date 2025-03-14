"use client";

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function Projects() {
  const t = useTranslations('Projects');

  const projects = [
    {
      id: 1,
      title: 'Balão Special Shape - Tucano',
      category: 'specialShapes',
      image: 'https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?q=80&w=2787&auto=format&fit=crop',
      description: 'Balão de ar quente em formato de tucano, criado para o Festival Internacional de Balonismo.'
    },
    {
      id: 2,
      title: 'Inflável Gigante - Mascote Copa',
      category: 'inflatables',
      image: 'https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=2940&auto=format&fit=crop',
      description: 'Inflável gigante do mascote da Copa do Mundo, com mais de 15 metros de altura.'
    },
    {
      id: 3,
      title: 'Faixa para Estádio',
      category: 'banners',
      image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=2873&auto=format&fit=crop',
      description: 'Faixa gigante para estádio de futebol, com 50 metros de comprimento.'
    },
    {
      id: 4,
      title: 'Balão Tradicional - Festival',
      category: 'balloons',
      image: 'https://images.unsplash.com/photo-1569263900347-06b1e8c825ab?q=80&w=2874&auto=format&fit=crop',
      description: 'Balão de ar quente tradicional para o Festival de Balonismo de Torres.'
    },
    {
      id: 5,
      title: 'Inflável Promocional',
      category: 'inflatables',
      image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=2000&auto=format&fit=crop',
      description: 'Inflável promocional para evento corporativo, com 10 metros de altura.'
    },
    {
      id: 6,
      title: 'Balão Special Shape - Coração',
      category: 'specialShapes',
      image: 'https://images.unsplash.com/photo-1518650310565-c782d1b4c706?q=80&w=2000&auto=format&fit=crop',
      description: 'Balão de ar quente em formato de coração, criado para evento romântico.'
    },
    {
      id: 7,
      title: 'Faixa para Evento Esportivo',
      category: 'banners',
      image: 'https://images.unsplash.com/photo-1511406361295-0a1ff814c0ce?q=80&w=2000&auto=format&fit=crop',
      description: 'Faixa gigante para evento esportivo internacional.'
    },
    {
      id: 8,
      title: 'Balão Corporativo',
      category: 'balloons',
      image: 'https://images.unsplash.com/photo-1572111504021-40abd3479ddb?q=80&w=2000&auto=format&fit=crop',
      description: 'Balão de ar quente com branding corporativo para evento promocional.'
    },
    {
      id: 9,
      title: 'Inflável Temático',
      category: 'inflatables',
      image: 'https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=2000&auto=format&fit=crop',
      description: 'Inflável temático para parque de diversões, com 12 metros de altura.'
    },
  ];

  return (
    <div className="container py-12 md:py-24">
      <div className="mb-16 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
          {t('title')}
        </h1>
        <p className="mx-auto max-w-3xl text-lg text-neutral-600 dark:text-neutral-400">
          {t('subtitle')}
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="mb-12 flex flex-wrap justify-center gap-4">
        <Button variant="outline" className="rounded-full">
          {t('categories.all')}
        </Button>
        <Button variant="outline" className="rounded-full">
          {t('categories.inflatables')}
        </Button>
        <Button variant="outline" className="rounded-full">
          {t('categories.banners')}
        </Button>
        <Button variant="outline" className="rounded-full">
          {t('categories.balloons')}
        </Button>
        <Button variant="outline" className="rounded-full">
          {t('categories.specialShapes')}
        </Button>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div key={project.id} className="group overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-lg dark:bg-neutral-800">
            <div className="relative h-64 w-full overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
              <p className="mb-4 text-neutral-600 dark:text-neutral-400">
                {project.description}
              </p>
              <div className="inline-block rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-800 dark:bg-neutral-700 dark:text-neutral-200">
                {t(`categories.${project.category}`)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 