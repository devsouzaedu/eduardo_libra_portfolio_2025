"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

// Array de projetos com imagens reais
const projetosDestaque = [
  {
    id: 1,
    titulo: "Escultura Inflável Gigante",
    descricao: "Escultura inflável personalizada de 15 metros para exposição de arte contemporânea.",
    imagem: "/cuckoo_relogio_balloon.jpg"
  },
  {
    id: 2,
    titulo: "Instalação Inflável Imersiva",
    descricao: "Ambiente inflável gigante criado para evento corporativo com experiência imersiva.",
    imagem: "/f1_ballooon.jpg"
  },
  {
    id: 3,
    titulo: "Arte Inflável para Evento",
    descricao: "Peça inflável gigante desenvolvida para festival de arte urbana.",
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
            Especialista em Obras de Arte Infláveis Gigantes
          </p>
          <p className="mb-8 max-w-2xl text-lg opacity-90 text-shadow-md">
            Criação e produção de esculturas infláveis personalizadas para eventos, exposições e instalações artísticas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/projetos">
              <Button size="lg" className="text-base">
                Ver Catálogo de Arte Inflável
              </Button>
            </Link>
            <a href="https://api.whatsapp.com/send/?phone=5511975865565&text=Oi+Eduardo%21+Eu+vim+através+do+site%2C+gostaria+de+conversar+sobre+uma+obra+de+arte+inflável&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="text-base bg-green-600 hover:bg-green-700 text-white border-green-600 hover:border-green-700">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="mr-2">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Solicitar Orçamento
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-spacing-y w-full">
        <div className="container mx-auto">
          <h2 className="element-spacing text-center text-3xl font-bold tracking-tight sm:text-4xl">
            Por que escolher nossas Obras de Arte Infláveis?
          </h2>
          <div className="grid gap-12 md:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-neutral-100 p-4 dark:bg-neutral-800">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <h3 className="mb-4 text-xl font-semibold">Impacto Visual Garantido</h3>
              <p className="text-neutral-600 dark:text-neutral-300">
                Esculturas infláveis gigantes que capturam a atenção e encantam o público em qualquer evento.
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
              <h3 className="mb-4 text-xl font-semibold">Personalização Total</h3>
              <p className="text-neutral-600 dark:text-neutral-300">
                Criamos sua arte inflável gigante personalizada conforme suas necessidades específicas.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-neutral-100 p-4 dark:bg-neutral-800">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </div>
              <h3 className="mb-4 text-xl font-semibold">Material Durável e Seguro</h3>
              <p className="text-neutral-600 dark:text-neutral-300">
                Utilizamos apenas materiais de alta qualidade, garantindo durabilidade e segurança para suas instalações.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projetos em Destaque */}
      <section className="section-spacing-y w-full bg-neutral-50 dark:bg-neutral-900">
        <div className="container mx-auto">
          <h2 className="element-spacing text-center text-3xl font-bold tracking-tight sm:text-4xl">
            Projetos em Destaque
          </h2>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {projetosDestaque.map((projeto) => (
              <div key={projeto.id} className="overflow-hidden rounded-lg bg-white shadow-md transition-transform hover:scale-[1.02] dark:bg-neutral-800">
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
                  <p className="text-neutral-600 dark:text-neutral-300">
                    {projeto.descricao}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 flex justify-center">
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

      {/* Testimonials Section */}
      <section className="section-spacing-y w-full">
        <div className="container mx-auto">
          <h2 className="element-spacing text-center text-3xl font-bold tracking-tight sm:text-4xl">
            O Que Nossos Clientes Dizem
          </h2>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-white p-8 shadow-md dark:bg-neutral-800">
              <div className="mb-6 flex items-center">
                <div className="mr-4 h-12 w-12 overflow-hidden rounded-full">
                  <Image
                    src="/pfp_person (1).jpg"
                    alt="João Silva"
                    width={48}
                    height={48}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold">João P. Hilterberg</p>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">Diretor de Marketing, Empresa XYZ</p>
                </div>
              </div>
              <p className="text-neutral-600 dark:text-neutral-300">
                &ldquo;Eduardo criou um balão incrível para nosso evento de lançamento. O impacto visual foi além das nossas expectativas, e a equipe foi extremamente profissional.&rdquo;
              </p>
            </div>
            <div className="rounded-lg bg-white p-8 shadow-md dark:bg-neutral-800">
              <div className="mb-6 flex items-center">
                <div className="mr-4 h-12 w-12 overflow-hidden rounded-full">
                  <Image
                    src="/pfp_person (2).jpg"
                    alt="Ana Oliveira"
                    width={48}
                    height={48}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold">Nana Silvenato</p>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">Organizadora de Eventos</p>
                </div>
              </div>
              <p className="text-neutral-600 dark:text-neutral-300">
                &ldquo;Já trabalhamos com Eduardo em diversos eventos. Seus balões são sempre de altíssima qualidade e causam um impacto visual impressionante. Recomendo sem hesitar.&rdquo;
              </p>
            </div>
            <div className="rounded-lg bg-white p-8 shadow-md dark:bg-neutral-800">
              <div className="mb-6 flex items-center">
                <div className="mr-4 h-12 w-12 overflow-hidden rounded-full">
                  <Image
                    src="/pfp_person (3).jpg"
                    alt="Carlos Santos"
                    width={48}
                    height={48}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold">Carlinhos Santos</p>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">CEO, Empresa ABC</p>
                </div>
              </div>
              <p className="text-neutral-600 dark:text-neutral-300">
                &ldquo;A criatividade e qualidade técnica do Eduardo são incomparáveis. O balão personalizado que ele criou para nossa marca se destacou em todos os eventos que participamos.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing-y w-full bg-primary text-white dark:bg-primary-dark">
        <div className="container mx-auto text-center">
          <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
            Pronto para criar algo incrível?
          </h2>
          <p className="mx-auto mb-8 max-w-3xl text-lg text-white/80">
            Entre em contato hoje mesmo e vamos transformar sua ideia em uma obra de arte gigante que impressionará a todos.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/contato">
              <Button size="lg" className="bg-white !text-primary hover:bg-white/90">
                Entre em contato
              </Button>
            </Link>
            <Link href="/projetos">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Ver projetos
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Nova Seção - Arte Inflável */}
      <section className="py-24 w-full bg-neutral-50 dark:bg-neutral-900">
        <div className="container mx-auto">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">
            Obras de Arte Infláveis Gigantes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-semibold mb-4">Transforme seu Evento com Arte Inflável</h3>
              <p className="mb-4">
                Nossas esculturas infláveis gigantes são a solução perfeita para quem busca causar um impacto visual impressionante em eventos, exposições ou campanhas publicitárias.
              </p>
              <p className="mb-4">
                Cada peça é cuidadosamente projetada e fabricada com os mais altos padrões de qualidade, garantindo segurança e durabilidade, seja para uso interno ou externo.
              </p>
              <ul className="list-disc pl-5 mb-6">
                <li className="mb-2">Instalações artísticas para museus e galerias</li>
                <li className="mb-2">Esculturas infláveis para eventos corporativos</li>
                <li className="mb-2">Peças publicitárias de grande formato</li>
                <li>Instalações interativas para festivais</li>
              </ul>
              <Link href="/blog">
                <Button variant="outline" size="lg" className="w-fit">
                  Conheça mais sobre Arte Inflável
                </Button>
              </Link>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image 
                src="/balao_relogio.jpg" 
                alt="Arte Inflável Gigante"
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
