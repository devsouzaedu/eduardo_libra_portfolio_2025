"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';

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
    <div className="container py-12 md:py-24">
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
      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3, 4, 5].map((post) => (
          <div key={post} className="group flex flex-col overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-lg dark:bg-neutral-800">
            <div className="relative h-48 w-full overflow-hidden">
              <div className="h-full w-full bg-neutral-200 dark:bg-neutral-700"></div>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <div className="mb-2 flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
                <span>{new Date().toLocaleDateString()}</span>
                <span>•</span>
                <span>Eduardo Libra</span>
              </div>
              <h3 className="mb-3 text-xl font-semibold">Título do Post {post}</h3>
              <p className="mb-6 flex-1 text-neutral-600 dark:text-neutral-400">
                Resumo do post {post}
              </p>
              <Link href={`/blog/${post}`} className="text-sm font-medium text-neutral-900 hover:underline dark:text-neutral-50">
                Leia mais →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 