"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import Link from 'next/link';

// Definindo tipos
type CategoryKey = 'all' | 'artworks' | 'normalBalloons' | 'specialShapes' | 'models' | 'inflatables' | 'banners' | 'giantBanners';

interface Projeto {
  id: number;
  titulo: string;
  descricao: string;
  categoria: CategoryKey;
  imagem: string;
  demoUrl?: string;
}

// Array de projetos com as novas imagens
const projetos: Projeto[] = [
  // Obras de Arte Gigantes
  {
    id: 1,
    titulo: "Escultura Inflável Romeiro Brito Cat",
    descricao: "Obra de arte inflável gigante inspirada na arte de Romero Britto.",
    categoria: "artworks",
    imagem: "/obra_de_arte_gigante_romeiro_britoo_cat_special_shape.jpeg"
  },
  {
    id: 2,
    titulo: "Por Dentro da Obra de Arte Inflável",
    descricao: "Vista interna de uma obra de arte inflável gigante mostrando sua estrutura.",
    categoria: "artworks",
    imagem: "/por_dentro_obra_de_arte_inflavel.jpeg"
  },
  {
    id: 3,
    titulo: "Dragão Inflável Gigante",
    descricao: "Escultura inflável em formato de dragão para eventos especiais.",
    categoria: "artworks",
    imagem: "/dragon_balloon_special_shape.jpeg"
  },
  {
    id: 4,
    titulo: "Bill The Vampire",
    descricao: "Obra de arte inflável personalizada do personagem Bill The Vampire.",
    categoria: "artworks",
    imagem: "/Billthevampire_special_shape.jpeg"
  },
  
  // Balões Normais de Ar Quente
  {
    id: 5,
    titulo: "Balão de Ar Quente Tradicional",
    descricao: "Balão de ar quente colorido para passeios e exibições.",
    categoria: "normalBalloons",
    imagem: "/balao_normal.jpeg"
  },
  {
    id: 6,
    titulo: "Balão de Ar Quente Clássico",
    descricao: "Modelo clássico de balão de ar quente com design vibrante.",
    categoria: "normalBalloons",
    imagem: "/balao_comum_ar_quente (1).jpeg"
  },
  {
    id: 7,
    titulo: "Balão Colorido de Ar Quente",
    descricao: "Balão com padrões coloridos para festivais e eventos.",
    categoria: "normalBalloons",
    imagem: "/balao_comum_ar_quente (5).jpeg"
  },
  {
    id: 8,
    titulo: "Grupo de Balões Coloridos",
    descricao: "Conjunto de balões de ar quente em exibição.",
    categoria: "normalBalloons",
    imagem: "/baloes_comum_ar_quente.jpeg"
  },
  {
    id: 9,
    titulo: "Balão para Reino Unido",
    descricao: "Balão de ar quente customizado para cliente no Reino Unido.",
    categoria: "normalBalloons",
    imagem: "/baloes_feitos_para_o_reino_unido_UK_balao_normal (1).jpeg"
  },
  {
    id: 10,
    titulo: "Balão de Ar Quente Premium",
    descricao: "Balão de alta qualidade com design elegante.",
    categoria: "normalBalloons",
    imagem: "/balao_comum_ar_quente (11).jpeg"
  },
  
  // Balões Special Shape
  {
    id: 11,
    titulo: "Balão Formato Fórmula 1",
    descricao: "Special shape em formato de carro de Fórmula 1.",
    categoria: "specialShapes",
    imagem: "/balao_f1_formula_1 (1).jpeg"
  },
  {
    id: 12,
    titulo: "Balão Special Shape Ticktock",
    descricao: "Balão em formato de relógio com design único.",
    categoria: "specialShapes",
    imagem: "/ticktock (1).jpeg"
  },
  {
    id: 13,
    titulo: "Balão Capitão Caverna",
    descricao: "Special shape do personagem Capitão Caverna.",
    categoria: "specialShapes",
    imagem: "/Capitao_caverna_special_shape_obra_de_arte.jpeg"
  },
  {
    id: 14,
    titulo: "Balão Special Shape Cuckoo",
    descricao: "Balão em formato de relógio cuco de design exclusivo.",
    categoria: "specialShapes",
    imagem: "/Cucko_e_frank_balao_special_shape.jpeg"
  },
  {
    id: 15,
    titulo: "Balão Special Shape Jupiteman",
    descricao: "Design único de balão em formato de personagem.",
    categoria: "specialShapes",
    imagem: "/balao_shape_jupiteman_special_shape.jpeg"
  },
  {
    id: 16,
    titulo: "Balão Jeep",
    descricao: "Special shape em formato de veículo Jeep.",
    categoria: "specialShapes",
    imagem: "/Jeep_balao_special_shape (1).jpeg"
  },
  {
    id: 17,
    titulo: "Balão Carrinho de Bebê",
    descricao: "Special shape criativo em formato de carrinho de bebê.",
    categoria: "specialShapes",
    imagem: "/baby_car_special_shape (1).jpeg"
  },
  {
    id: 18,
    titulo: "Cuckoo e Frank em Evento",
    descricao: "Dois special shapes icônicos em exibição.",
    categoria: "specialShapes",
    imagem: "/cuckoo_e_frank_special_shape.jpeg"
  },
  
  // Moldes à Venda
  {
    id: 19,
    titulo: "Molde 3D Special Shape",
    descricao: "Modelo 3D para construção de balão special shape.",
    categoria: "models",
    imagem: "/molde_special_shape_modelo_3d (1).jpeg"
  },
  {
    id: 20,
    titulo: "Molde Técnico Special Shape",
    descricao: "Design técnico detalhado para construção de balão.",
    categoria: "models",
    imagem: "/molde_special_shape_modelo_3d (6).jpeg"
  },
  {
    id: 21,
    titulo: "Projeto de Molde Dragão",
    descricao: "Projeto detalhado para construção de balão em formato de dragão.",
    categoria: "models",
    imagem: "/Projeto_shape_modelo_dragon_balao.jpeg"
  },
  {
    id: 22,
    titulo: "Molde de Desenvolvimento",
    descricao: "Molde em desenvolvimento para novo special shape.",
    categoria: "models",
    imagem: "/molde_special_shape_modelo_3d (8).jpeg"
  },
  {
    id: 23,
    titulo: "Molde para Balão Normal",
    descricao: "Design técnico para produção de balão de ar quente tradicional.",
    categoria: "models",
    imagem: "/molde_special_shape_balao_normal.jpeg"
  },
  {
    id: 24,
    titulo: "Projeto Special Shape Detalhado",
    descricao: "Modelagem técnica com detalhes para fabricação.",
    categoria: "models",
    imagem: "/molde_special_shape_modelo_3d (14).jpeg"
  },
  
  // Infláveis
  {
    id: 25,
    titulo: "Instalação Inflável para Evento",
    descricao: "Estrutura inflável para eventos corporativos.",
    categoria: "inflatables",
    imagem: "/f1_ballooon.jpg"
  },
  {
    id: 26,
    titulo: "Escultura Inflável Ticktock",
    descricao: "Escultura inflável formato relógio para exposições.",
    categoria: "inflatables",
    imagem: "/tick_tock_special_shaped_eduardo_libra.jpg"
  },
  
  // Faixas de Balão de Ar Quente
  {
    id: 27,
    titulo: "Faixa para Balão de Ar Quente",
    descricao: "Faixa personalizada para balão de ar quente.",
    categoria: "banners",
    imagem: "/faixas_balao_de_arte_quente (1).jpeg"
  },
  {
    id: 28,
    titulo: "Faixa de Patrocínio para Balão",
    descricao: "Faixa de patrocínio para uso em balões de eventos.",
    categoria: "banners",
    imagem: "/faixas_balao_de_arte_quente (2).jpeg"
  },
  {
    id: 29,
    titulo: "Faixa Personalizada para Balão",
    descricao: "Design personalizado de faixa para balão de ar quente.",
    categoria: "banners",
    imagem: "/faixas_balao_de_arte_quente (3).jpeg"
  },
  {
    id: 30,
    titulo: "Balão com Faixas Promocionais",
    descricao: "Balão de ar quente com faixas promocionais em evento.",
    categoria: "banners",
    imagem: "/faixas_balao_de_arte_quente (4).jpeg"
  },
  
  // Faixas Gigantes
  {
    id: 31,
    titulo: "Faixa Gigante para Evento",
    descricao: "Faixa de tamanho gigante para visualização em eventos de grande escala.",
    categoria: "giantBanners",
    imagem: "/faixas_balao_gigantes (1).jpeg"
  },
  {
    id: 32,
    titulo: "Faixa Gigante Promocional",
    descricao: "Faixa gigante para promoção de marca em eventos ao ar livre.",
    categoria: "giantBanners",
    imagem: "/faixas_balao_gigantes (2).jpeg"
  },
  {
    id: 33,
    titulo: "Faixa Gigante Personalizada",
    descricao: "Faixa de grande formato com design personalizado.",
    categoria: "giantBanners",
    imagem: "/faixas_balao_gigantes (3).jpeg"
  }
];

export default function Projetos() {
  const [filtroAtivo, setFiltroAtivo] = useState<CategoryKey>('all');
  
  const categories: Record<CategoryKey, string> = {
    all: "Todos",
    artworks: "Obras de Arte Gigantes",
    normalBalloons: "Balões de Ar Quente",
    specialShapes: "Balões Special Shape",
    models: "Moldes à Venda",
    inflatables: "Infláveis",
    banners: "Faixas para Balões",
    giantBanners: "Faixas Gigantes"
  };

  const projetosFiltrados = filtroAtivo === 'all' 
    ? projetos 
    : projetos.filter(projeto => projeto.categoria === filtroAtivo);

  return (
    <div className="container mx-auto section-spacing pb-24">
      <div className="text-center element-spacing">
        <h1 className="text-4xl font-bold mb-6">Galeria de Projetos</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Conheça nossas obras de arte infláveis gigantes, balões especiais e outros produtos exclusivos
        </p>
      </div>

      {/* Hero Banner */}
      <div className="relative rounded-xl overflow-hidden mb-16 h-96">
        <Image 
          src="/background_baloes_especiais_shape_special_hotairballoon_eduardolibra.jpg"
          alt="Obras de Arte Infláveis Gigantes"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex flex-col justify-center items-start text-white p-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 max-w-xl">Transforme seu Evento com Criações Exclusivas</h2>
          <p className="text-lg md:text-xl max-w-xl mb-8 opacity-90">
            Escultura, arte e impacto visual para seu evento, exposição ou campanha
          </p>
          <Link href="/contato">
            <Button className="bg-white text-black hover:bg-white/90 hover:scale-105 transition-all">
              Solicitar Orçamento
            </Button>
          </Link>
        </div>
      </div>

      {/* Filtros */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Explore por Categoria</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {Object.entries(categories).map(([key, value]) => (
            <Button 
              key={key}
              variant={filtroAtivo === key as CategoryKey ? 'default' : 'outline'}
              onClick={() => setFiltroAtivo(key as CategoryKey)}
              className="mb-2"
            >
              {value}
            </Button>
          ))}
        </div>
      </div>

      {/* Grid de Projetos - Galeria Moderna */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {projetosFiltrados.map((projeto) => (
          <div 
            key={projeto.id} 
            className="group relative overflow-hidden rounded-xl bg-card shadow-md transition-all hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="relative aspect-square w-full overflow-hidden">
              <Image 
                src={projeto.imagem} 
                alt={projeto.titulo}
                fill
                className="object-cover transition-transform group-hover:scale-110 duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-5 text-white transform translate-y-14 group-hover:translate-y-0 transition-transform duration-300">
              <p className="text-xs font-medium mb-1 opacity-80">{categories[projeto.categoria]}</p>
              <h3 className="text-xl font-bold mb-2 line-clamp-1">{projeto.titulo}</h3>
              <p className="text-sm opacity-90 mb-4 line-clamp-2 group-hover:line-clamp-none">{projeto.descricao}</p>
              <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                <a 
                  href={`https://api.whatsapp.com/send/?phone=5511975865565&text=Oi+Eduardo%21+Eu+vim+através+do+site%2C+gostaria+de+conversar+sobre+${encodeURIComponent(projeto.titulo)}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm bg-green-600 hover:bg-green-700 text-white py-1.5 px-3 rounded-full"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="mr-1">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.967 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Solicitar orçamento
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Seção de Destaques - Mosaico */}
      {filtroAtivo === 'all' && (
        <div className="mt-24">
          <h2 className="text-3xl font-bold mb-8 text-center">Destaques</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-[32rem]">
            <div className="relative rounded-xl overflow-hidden row-span-2 col-span-2">
              <Image 
                src="/formula_1_balao_special_shape (4).jpeg"
                alt="Balão Fórmula 1"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <h3 className="text-white text-xl font-bold">Balão Special Shape F1</h3>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden">
              <Image 
                src="/caverman_capitao_caverna_special_shape.jpeg"
                alt="Capitão Caverna"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                <h3 className="text-white text-base font-bold">Special Shape Capitão Caverna</h3>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden">
              <Image 
                src="/balao_comum_ar_quente (7).jpeg"
                alt="Balão Normal"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                <h3 className="text-white text-base font-bold">Balão de Ar Quente Classic</h3>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden">
              <Image 
                src="/molde_special_shape_modelo_3d (7).jpeg"
                alt="Molde 3D"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                <h3 className="text-white text-base font-bold">Molde 3D Special Shape</h3>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden">
              <Image 
                src="/faixas_balao_de_arte_quente (1).jpeg"
                alt="Faixas para Balões"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                <h3 className="text-white text-base font-bold">Faixas para Balão de Ar Quente</h3>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Banner CTA */}
      <div className="mt-24 bg-primary text-white rounded-xl p-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Quer uma Criação Personalizada?</h2>
        <p className="text-xl max-w-2xl mx-auto mb-8">
          Entre em contato conosco para discutir seu projeto e transformar sua ideia em realidade
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/contato">
            <Button className="bg-white text-primary hover:bg-white/90 hover:scale-105 transition-all">
              Solicitar Orçamento
            </Button>
          </Link>
          <a 
            href="https://api.whatsapp.com/send/?phone=5511975865565&text=Oi+Eduardo%21+Eu+vim+através+do+site%2C+gostaria+de+conversar+sobre+um+projeto+personalizado" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary hover:scale-105 transition-all">
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