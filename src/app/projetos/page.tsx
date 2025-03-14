"use client";

import { Button } from '@/components/ui/button';

export default function Projects() {
  const categories = {
    all: "Todos",
    inflatables: "Infláveis",
    banners: "Faixas",
    balloons: "Balões",
    specialShapes: "Special Shapes"
  };

  return (
    <div className="container py-12 md:py-24">
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
          <Button key={key} variant="outline" className="rounded-full">
            {value}
          </Button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map((project) => (
          <div key={project} className="group overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-lg dark:bg-neutral-800">
            <div className="relative h-64 w-full overflow-hidden">
              <div className="h-full w-full bg-neutral-200 dark:bg-neutral-700"></div>
            </div>
            <div className="p-6">
              <h3 className="mb-2 text-xl font-semibold">Projeto {project}</h3>
              <p className="mb-4 text-neutral-600 dark:text-neutral-400">
                Descrição do projeto {project}
              </p>
              <div className="inline-block rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-800 dark:bg-neutral-700 dark:text-neutral-200">
                Categoria
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 