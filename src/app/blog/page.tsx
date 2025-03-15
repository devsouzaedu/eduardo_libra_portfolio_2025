"use client";

import { useState, useEffect } from "react";
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { NewPostModal } from "@/components/blog/NewPostModal";
import { Plus } from "lucide-react";

type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  imageUrl: string;
  category: string;
};

// Array de posts do blog com imagens reais
// Esta variável não está sendo utilizada, então está comentada para evitar erros
// const blogPosts = [
//   {
//     id: 1,
//     titulo: "A História dos Balões Special Shape",
//     resumo: "Conheça a evolução dos balões de ar quente em formatos especiais e como eles revolucionaram eventos pelo mundo.",
//     data: "15/03/2024",
//     autor: "Eduardo Libra",
//     imagem: "/background_baloes_especiais_shape_special_hotairballoon_eduardolibra.jpg"
//   },
//   ... outros posts
// ];

// Lista estática de posts para começar (será misturada com posts do localStorage)
const staticPosts = [
  {
    id: "1",
    title: "O futuro do desenvolvimento web em 2023",
    excerpt: "Uma análise das tendências de desenvolvimento que estão moldando o futuro da web.",
    content: "...",
    date: "2023-06-15T10:30:00Z",
    imageUrl: "/blog1.jpg",
    category: "Desenvolvimento",
  },
  {
    id: "2",
    title: "Como implementar animações eficientes em React",
    excerpt: "Técnicas para criar animações de alto desempenho em suas aplicações React.",
    content: "...",
    date: "2023-05-20T14:45:00Z",
    imageUrl: "/blog2.jpg",
    category: "React",
  },
  {
    id: "3",
    title: "Otimizando seu site Next.js para SEO",
    excerpt: "Estratégias essenciais para melhorar o SEO do seu site Next.js e aumentar o tráfego orgânico.",
    content: "...",
    date: "2023-04-10T09:15:00Z",
    imageUrl: "/blog3.jpg",
    category: "SEO",
  },
];

export default function BlogPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    // Recuperar posts do localStorage
    const storedPosts = localStorage.getItem("blogPosts");
    const localPosts: BlogPost[] = storedPosts ? JSON.parse(storedPosts) : [];
    
    // Combinar posts estáticos com posts do localStorage
    const allPosts = [...localPosts, ...staticPosts];
    
    // Ordenar por data (mais recentes primeiro)
    allPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    
    setPosts(allPosts);
  }, [isModalOpen]); // Atualizar quando o modal fechar

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString("pt-BR", options);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto section-spacing">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Blog</h1>
            <p className="mt-2 text-muted-foreground max-w-lg">
              Insights, dicas técnicas e notícias sobre desenvolvimento web, design e tecnologia.
            </p>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90"
          >
            <Plus className="h-4 w-4" />
            Novo Post
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post) => (
            <div key={post.id} className="group rounded-lg border border-border p-6 transition-all hover:border-foreground hover:shadow-md">
              <div className="relative aspect-video overflow-hidden rounded-md mb-6">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  fill
                  className="object-cover transition-all group-hover:scale-105"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">{post.title}</h3>
                <p className="text-muted-foreground mb-6">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-sm text-muted-foreground">{formatDate(post.date)}</span>
                    <span className="text-sm text-muted-foreground">{post.category}</span>
                  </div>
                  <Link href={`/blog/${post.id}`}>
                    <Button variant="link" className="p-0">
                      Ler mais
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <NewPostModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
} 