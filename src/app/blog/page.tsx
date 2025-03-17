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

// Lista estática de posts para começar (será misturada com posts do localStorage)
const staticPosts = [
  {
    id: "1",
    title: "Obras de Arte Infláveis Gigantes: Transformando Espaços",
    excerpt: "Como as esculturas infláveis gigantes estão revolucionando o mundo da arte e eventos corporativos.",
    content: "...",
    date: "2024-03-15T10:30:00Z",
    imageUrl: "/blog1.jpg",
    category: "Arte Inflável",
  },
  {
    id: "2",
    title: "Guia Completo para Encomendar sua Arte Inflável Personalizada",
    excerpt: "Tudo o que você precisa saber antes de encomendar uma obra de arte inflável para seu evento ou exposição.",
    content: "...",
    date: "2024-02-20T14:45:00Z",
    imageUrl: "/blog2.jpg",
    category: "Guia Prático",
  },
  {
    id: "3",
    title: "5 Instalações Infláveis Gigantes que Impressionaram o Mundo",
    excerpt: "Conheça as obras de arte infláveis mais impressionantes que transformaram exposições e eventos ao redor do mundo.",
    content: "...",
    date: "2024-01-10T09:15:00Z",
    imageUrl: "/blog3.jpg",
    category: "Inspiração",
  },
  {
    id: "4",
    title: "Materiais e Tecnologias para Obras de Arte Infláveis Duráveis",
    excerpt: "Uma análise dos melhores materiais e tecnologias utilizados na criação de esculturas infláveis resistentes e seguras.",
    content: "...",
    date: "2023-12-05T11:30:00Z",
    imageUrl: "/blog2.jpg",
    category: "Técnicas",
  },
  {
    id: "5",
    title: "Arte Inflável em Eventos Corporativos: Casos de Sucesso",
    excerpt: "Como grandes empresas têm utilizado obras de arte infláveis personalizadas para destacar sua marca em eventos.",
    content: "...",
    date: "2023-11-18T16:45:00Z",
    imageUrl: "/blog1.jpg",
    category: "Marketing",
  },
  {
    id: "6",
    title: "O Processo Criativo por Trás das Esculturas Infláveis Gigantes",
    excerpt: "Um olhar nos bastidores do processo de design e fabricação de obras de arte infláveis monumentais.",
    content: "...",
    date: "2023-10-22T08:15:00Z",
    imageUrl: "/blog3.jpg",
    category: "Processo Criativo",
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
      {/* Hero Section para Arte Inflável */}
      <div className="relative bg-neutral-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Tudo Sobre Arte Inflável Gigante</h1>
            <p className="text-xl mb-8">
              Descubra o fascinante mundo das esculturas infláveis monumentais, suas aplicações em eventos, galerias e espaços públicos.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="#categorias">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                  Explorar Categorias
                </Button>
              </Link>
              <Link href="/contato">
                <Button className="bg-white text-black hover:bg-neutral-200">
                  Solicitar Orçamento
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto section-spacing">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Nosso Blog de Arte Inflável</h2>
            <p className="mt-2 text-muted-foreground max-w-lg">
              Artigos, estudos de caso e inspiração sobre obras de arte infláveis gigantes para eventos, exposições e marketing.
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

        {/* Palavras-chave em destaque */}
        <div id="categorias" className="mb-12">
          <h3 className="text-xl font-semibold mb-4">Tópicos Populares</h3>
          <div className="flex flex-wrap gap-2">
            {["arte inflável", "esculturas infláveis grandes", "arte inflável personalizada", 
              "instalações infláveis gigantes", "arte inflável para eventos", "escultura inflável gigante", 
              "arte inflável Brasil", "esculturas infláveis São Paulo"].map((keyword, index) => (
                <span key={index} className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-full text-sm">
                  {keyword}
                </span>
              ))}
          </div>
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