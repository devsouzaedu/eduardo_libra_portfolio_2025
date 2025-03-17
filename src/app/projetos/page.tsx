"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import Link from 'next/link';

// Definindo tipos
type CategoryKey = 'all' | 'sculptures' | 'installations' | 'events' | 'advertising';

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
    titulo: "Escultura Inflável Gigante",
    descricao: "Obra de arte inflável personalizada de 15 metros criada para exposição de arte contemporânea.",
    categoria: "sculptures",
    imagem: "/cuckoo_relogio_balloon.jpg"
  },
  {
    id: 2,
    titulo: "Instalação Inflável Corporativa",
    descricao: "Ambiente inflável interativo desenvolvido para evento corporativo de grande porte.",
    categoria: "events",
    imagem: "/f1_ballooon.jpg"
  },
  {
    id: 3,
    titulo: "Escultura Inflável para Festival",
    descricao: "Obra de arte inflável gigante criada para festival de música ao ar livre.",
    categoria: "events",
    imagem: "/bola_de_basquete_balloon.jpg"
  },
  {
    id: 4,
    titulo: "Instalação Artística Inflável",
    descricao: "Ambiente inflável imersivo criado para galeria de arte contemporânea.",
    categoria: "installations",
    imagem: "/tick_tock_special_shaped_eduardo_libra.jpg"
  },
  {
    id: 5,
    titulo: "Campanha Publicitária Inflável",
    descricao: "Produto inflável gigante desenvolvido para campanha de marketing de produto de consumo.",
    categoria: "advertising",
    imagem: "/baloes_2.jpg"
  },
  {
    id: 6,
    titulo: "Arte Inflável para Exposição",
    descricao: "Conjunto de esculturas infláveis coloridas desenvolvidas para exposição de arte urbana.",
    categoria: "sculptures",
    imagem: "/background_baloes_especiais_shape_special_hotairballoon_eduardolibra.jpg"
  }
];

export default function Projetos() {
  const [filtroAtivo, setFiltroAtivo] = useState<CategoryKey>('all');
  
  const categories: Record<CategoryKey, string> = {
    all: "Todos",
    sculptures: "Esculturas Infláveis",
    installations: "Instalações Artísticas",
    events: "Arte para Eventos",
    advertising: "Publicidade Inflável"
  };

  const projetosFiltrados = filtroAtivo === 'all' 
    ? projetos 
    : projetos.filter(projeto => projeto.categoria === filtroAtivo);

  return (
    <div className="container mx-auto section-spacing">
      <div className="text-center element-spacing">
        <h1 className="text-4xl font-bold mb-6">Catálogo de Arte Inflável</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Conheça nossas obras de arte infláveis gigantes personalizadas para diversos contextos
        </p>
      </div>

      {/* Hero Banner */}
      <div className="relative rounded-lg overflow-hidden mb-16 h-80">
        <Image 
          src="/background_baloes_especiais_shape_special_hotairballoon_eduardolibra.jpg"
          alt="Obras de Arte Infláveis Gigantes"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Transforme seu Espaço com Arte Inflável</h2>
          <p className="text-xl max-w-2xl mb-6">
            Criamos esculturas e instalações infláveis personalizadas que causam impacto visual inesquecível
          </p>
          <Link href="/contato">
            <Button className="bg-white text-black hover:bg-neutral-200">
              Solicitar Orçamento
            </Button>
          </Link>
        </div>
      </div>

      {/* Filtros */}
      <div className="flex flex-wrap justify-center gap-4 mb-16">
        <Button 
          variant={filtroAtivo === 'all' ? 'default' : 'outline'}
          onClick={() => setFiltroAtivo('all')}
          className="min-w-24"
        >
          Todos
        </Button>
        <Button 
          variant={filtroAtivo === 'sculptures' ? 'default' : 'outline'}
          onClick={() => setFiltroAtivo('sculptures')}
          className="min-w-24"
        >
          Esculturas
        </Button>
        <Button 
          variant={filtroAtivo === 'installations' ? 'default' : 'outline'}
          onClick={() => setFiltroAtivo('installations')}
          className="min-w-24"
        >
          Instalações
        </Button>
        <Button 
          variant={filtroAtivo === 'events' ? 'default' : 'outline'}
          onClick={() => setFiltroAtivo('events')}
          className="min-w-24"
        >
          Eventos
        </Button>
        <Button 
          variant={filtroAtivo === 'advertising' ? 'default' : 'outline'}
          onClick={() => setFiltroAtivo('advertising')}
          className="min-w-24"
        >
          Publicidade
        </Button>
      </div>

      {/* Grid de Projetos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projetosFiltrados.map((projeto) => (
          <div key={projeto.id} className="overflow-hidden rounded-lg bg-card shadow-md dark:bg-neutral-800 transition-transform hover:scale-[1.02]">
            <div className="relative h-72 w-full">
              <Image 
                src={projeto.imagem} 
                alt={projeto.titulo}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8">
              <h3 className="mb-4 text-xl font-semibold">{projeto.titulo}</h3>
              <p className="mb-6 text-muted-foreground">
                {projeto.descricao}
              </p>
              <div className="flex justify-between items-center">
                <div className="text-sm font-medium text-primary dark:text-accent">
                  {categories[projeto.categoria]}
                </div>
                <div className="flex gap-2 mt-4">
                  {projeto.demoUrl && (
                    <Link href={projeto.demoUrl} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm">
                        Ver Detalhes
                      </Button>
                    </Link>
                  )}
                  <a 
                    href="https://api.whatsapp.com/send/?phone=5511975865565&text=Oi+Eduardo%21+Eu+vim+através+do+site%2C+gostaria+de+conversar+sobre+uma+arte+inflável+similar+ao+projeto+" 
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
          </div>
        ))}
      </div>

      {/* Banner CTA */}
      <div className="mt-24 bg-primary text-white rounded-lg p-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Quer uma Arte Inflável Personalizada?</h2>
        <p className="text-xl max-w-2xl mx-auto mb-8">
          Entre em contato conosco para discutir seu projeto de arte inflável gigante personalizada
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/contato">
            <Button className="bg-white text-primary hover:bg-neutral-200 hover:text-primary">
              Solicitar Orçamento
            </Button>
          </Link>
          <a 
            href="https://api.whatsapp.com/send/?phone=5511975865565&text=Oi+Eduardo%21+Eu+vim+através+do+site%2C+gostaria+de+conversar+sobre+uma+obra+de+arte+inflável&type=phone_number&app_absent=0" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="mr-2">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Falar pelo WhatsApp
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
} 