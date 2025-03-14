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

export default function BlogPage() {
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
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Blog</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Artigos, tutoriais e novidades sobre arte inflável, balões e projetos especiais
          </p>
          <div className="mt-6">
            <a 
              href="https://api.whatsapp.com/send/?phone=5511975865565&text=Oi+Eduardo%21+Eu+vim+através+do+site%2C+gostaria+de+conversar+mais+sobre&type=phone_number&app_absent=0" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button variant="outline" className="bg-green-600 hover:bg-green-700 text-white border-green-600 hover:border-green-700">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="mr-2">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Tem uma ideia para um artigo? Fale comigo!
              </Button>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="group rounded-lg border border-border p-4 transition-all hover:border-foreground">
              <div className="relative aspect-video overflow-hidden rounded-md mb-4">
                <Image
                  src={post.imagem}
                  alt={post.titulo}
                  fill
                  className="object-cover transition-all group-hover:scale-105"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{post.titulo}</h3>
                <p className="text-muted-foreground mb-4">{post.resumo}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{post.data}</span>
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
    </div>
  );
} 