"use client";

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export default function Blog() {
  const t = useTranslations('Blog');

  const posts = [
    {
      id: 1,
      title: 'A História dos Balões de Ar Quente',
      date: '2023-12-15',
      excerpt: 'Conheça a fascinante história dos balões de ar quente, desde sua invenção até os dias atuais.',
      image: 'https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?q=80&w=2787&auto=format&fit=crop',
      author: 'Eduardo Libra'
    },
    {
      id: 2,
      title: 'Como São Feitos os Infláveis Gigantes',
      date: '2023-11-20',
      excerpt: 'Um olhar por trás das cortinas: o processo de criação e fabricação de infláveis gigantes para eventos.',
      image: 'https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=2940&auto=format&fit=crop',
      author: 'Eduardo Libra'
    },
    {
      id: 3,
      title: 'Festival Internacional de Balonismo',
      date: '2023-10-05',
      excerpt: 'Relato da minha experiência no Festival Internacional de Balonismo em Albuquerque, EUA.',
      image: 'https://images.unsplash.com/photo-1569263900347-06b1e8c825ab?q=80&w=2874&auto=format&fit=crop',
      author: 'Eduardo Libra'
    },
    {
      id: 4,
      title: 'A Arte das Faixas Gigantes',
      date: '2023-09-12',
      excerpt: 'Como as faixas gigantes se tornaram uma forma de arte e comunicação em grandes eventos.',
      image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=2873&auto=format&fit=crop',
      author: 'Eduardo Libra'
    },
    {
      id: 5,
      title: 'Special Shapes: Os Balões Mais Incríveis do Mundo',
      date: '2023-08-25',
      excerpt: 'Uma galeria dos balões de ar quente em formatos especiais mais impressionantes já criados.',
      image: 'https://images.unsplash.com/photo-1518650310565-c782d1b4c706?q=80&w=2000&auto=format&fit=crop',
      author: 'Eduardo Libra'
    }
  ];

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
            {t('title')}
          </h1>
          <p className="max-w-3xl text-lg text-neutral-600 dark:text-neutral-400">
            {t('subtitle')}
          </p>
        </div>
        <Button onClick={handleNewPostClick} className="whitespace-nowrap">
          {t('newPost')}
        </Button>
      </div>

      {/* Blog Posts */}
      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <div key={post.id} className="group flex flex-col overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-lg dark:bg-neutral-800">
            <div className="relative h-48 w-full overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <div className="mb-2 flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
                <span>{new Date(post.date).toLocaleDateString()}</span>
                <span>•</span>
                <span>{post.author}</span>
              </div>
              <h3 className="mb-3 text-xl font-semibold">{post.title}</h3>
              <p className="mb-6 flex-1 text-neutral-600 dark:text-neutral-400">
                {post.excerpt}
              </p>
              <Link href={`/blog/${post.id}`} className="text-sm font-medium text-neutral-900 hover:underline dark:text-neutral-50">
                {t('readMore')} →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 