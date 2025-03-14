"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

// Array de posts do blog com imagens reais
const blogPosts = [
  {
    id: 1,
    titulo: "A História dos Balões Special Shape",
    resumo: "Conheça a evolução dos balões de ar quente em formatos especiais e como eles revolucionaram eventos pelo mundo.",
    data: "15/03/2024",
    autor: "Eduardo Libra",
    imagem: "/background_baloes_especiais_shape_special_hotairballoon_eduardolibra.jpg"
  },
  {
    id: 2,
    titulo: "Balões de Ar Quente em Eventos Corporativos",
    resumo: "Como os balões de ar quente podem transformar a experiência de marca em eventos corporativos.",
    data: "10/03/2024",
    autor: "Eduardo Libra",
    imagem: "/baloes_2.jpg"
  },
  {
    id: 3,
    titulo: "O Processo de Criação de um Balão Special Shape",
    resumo: "Descubra as etapas de design e construção de um balão de ar quente em formato especial.",
    data: "05/03/2024",
    autor: "Eduardo Libra",
    imagem: "/cuckoo_relogio_balloon.jpg"
  },
  {
    id: 4,
    titulo: "Balão Relógio: Um Ícone nos Céus",
    resumo: "A história por trás da criação do famoso balão em formato de relógio e seu impacto visual.",
    data: "28/02/2024",
    autor: "Eduardo Libra",
    imagem: "/tick_tock_special_shaped_eduardo_libra.jpg"
  },
  {
    id: 5,
    titulo: "Inovações em Balões Temáticos",
    resumo: "As mais recentes inovações tecnológicas na criação de balões temáticos para eventos.",
    data: "20/02/2024",
    autor: "Eduardo Libra",
    imagem: "/bola_de_basquete_balloon.jpg"
  }
];

export default function Blog() {
  const handleNewPostClick = () => {
    const password = prompt('Digite a senha para criar um novo post:');
    if (password === '2210') {
      alert('Senha correta! Redirecionando para o editor de posts...');
      // Aqui você implementaria a lógica para redirecionar para o editor de posts
    } else {
      alert('Senha incorreta!');
    }
  };

  return (
    <div className="container py-12 md:py-24 mx-auto">
      <div className="mb-16 flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
        <div>
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Blog
          </h1>
          <p className="max-w-3xl text-lg text-neutral-600 dark:text-neutral-400">
            Novidades e histórias do mundo da arte gigante
          </p>
        </div>
        <Button onClick={handleNewPostClick} className="whitespace-nowrap">
          Novo Post
        </Button>
      </div>

      {/* Blog Posts */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <div key={post.id} className="group flex flex-col overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-lg dark:bg-neutral-800">
            <div className="relative h-48 w-full overflow-hidden">
              <Image 
                src={post.imagem} 
                alt={post.titulo}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <div className="mb-2 flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
                <span>{post.data}</span>
                <span>•</span>
                <span>{post.autor}</span>
              </div>
              <h3 className="mb-3 text-xl font-semibold">{post.titulo}</h3>
              <p className="mb-6 flex-1 text-neutral-600 dark:text-neutral-400">
                {post.resumo}
              </p>
              <Link href={`/blog/${post.id}`} className="text-sm font-medium text-neutral-900 hover:underline dark:text-neutral-50">
                Leia mais →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 