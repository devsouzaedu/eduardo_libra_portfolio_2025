"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound, useParams } from "next/navigation";

type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  imageUrl: string;
  category: string;
};

// Posts estáticos de fallback
const staticPosts = [
  {
    id: "1",
    title: "O futuro do desenvolvimento web em 2023",
    excerpt: "Uma análise das tendências de desenvolvimento que estão moldando o futuro da web.",
    content: "O desenvolvimento web está evoluindo rapidamente em 2023, com novas tecnologias e abordagens surgindo constantemente. Neste artigo, exploramos as tendências mais impactantes que estão moldando o futuro da web.\n\nUma das maiores tendências é a crescente adoção de arquiteturas Jamstack, que oferecem melhor desempenho, maior segurança e uma experiência de desenvolvimento mais flexível. Frameworks como Next.js estão liderando essa revolução, combinando os benefícios de renderização estática e recursos de aplicações dinâmicas.\n\nAlém disso, estamos vendo um aumento no uso de WebAssembly, permitindo que linguagens como Rust e C++ sejam executadas no navegador com desempenho próximo ao nativo. Isso está abrindo portas para aplicativos web mais complexos e de alto desempenho.\n\nMetaframeworks que unificam a experiência do desenvolvedor de front-end e back-end estão ganhando popularidade, reduzindo a fricção entre diferentes partes da pilha de tecnologia. Vemos isso com ferramentas como Remix e Astro, que simplificam significativamente o processo de desenvolvimento.\n\nA computação de borda (edge computing) também está assumindo um papel central no desenvolvimento web, com mais plataformas oferecendo a capacidade de executar JavaScript e outras linguagens mais perto dos usuários, reduzindo a latência e melhorando a experiência do usuário.\n\nPor fim, estamos observando uma renovada ênfase em acessibilidade e design inclusivo, com mais ferramentas e frameworks incorporando recursos de acessibilidade por padrão, garantindo que a web permaneça aberta e utilizável para todos.",
    date: "2023-06-15T10:30:00Z",
    imageUrl: "/blog1.jpg",
    category: "Desenvolvimento",
  },
  {
    id: "2",
    title: "Como implementar animações eficientes em React",
    excerpt: "Técnicas para criar animações de alto desempenho em suas aplicações React.",
    content: "Animações são uma parte crucial da experiência do usuário moderna, mas implementá-las de forma eficiente em aplicações React pode ser desafiador. Neste guia, compartilho técnicas práticas para criar animações de alto desempenho que não comprometem a velocidade da sua aplicação.\n\nA primeira regra para animações eficientes é focar nas propriedades que o navegador pode otimizar: transform e opacity. Estas propriedades podem ser aceleradas por hardware e não disparam reflows caros, diferentemente de propriedades como width, height ou position.\n\n```jsx\n// Preferir isto\n<div style={{ transform: 'translateX(100px)', opacity: 0.5 }} />\n\n// Em vez disto\n<div style={{ left: '100px', opacity: 0.5 }} />\n```\n\nPara animações mais complexas, considere usar a API requestAnimationFrame em vez de setTimeout ou setInterval, pois ela sincroniza suas animações com o ciclo de renderização do navegador:\n\n```jsx\nfunction animate() {\n  // Atualizar estado da animação\n  setPosition(prev => prev + 1);\n  \n  // Continuar a animação\n  requestId.current = requestAnimationFrame(animate);\n}\n\nuseEffect(() => {\n  requestId.current = requestAnimationFrame(animate);\n  return () => cancelAnimationFrame(requestId.current);\n}, []);\n```\n\nPara animações mais declarativas, bibliotecas como Framer Motion ou React Spring oferecem APIs intuitivas com otimizações integradas:\n\n```jsx\n// Com Framer Motion\n<motion.div\n  initial={{ opacity: 0, y: 20 }}\n  animate={{ opacity: 1, y: 0 }}\n  transition={{ duration: 0.5 }}\n/>\n```\n\nPara animações baseadas em scroll, use IntersectionObserver em vez de escutar eventos de scroll, que podem disparar centenas de vezes por segundo:\n\n```jsx\nconst ref = useRef();\nuseEffect(() => {\n  const observer = new IntersectionObserver(\n    ([entry]) => {\n      if (entry.isIntersecting) {\n        setIsVisible(true);\n      }\n    },\n    { threshold: 0.1 }\n  );\n  observer.observe(ref.current);\n  return () => observer.disconnect();\n}, []);\n```\n\nPor fim, sempre meça o desempenho de suas animações usando as ferramentas de desenvolvedor do navegador. Procure por janks (travamentos) ou quedas de taxa de quadros, e otimize iterativamente suas animações para conseguir aquela experiência suave de 60fps que os usuários esperam.",
    date: "2023-05-20T14:45:00Z",
    imageUrl: "/blog2.jpg",
    category: "React",
  },
  {
    id: "3",
    title: "Otimizando seu site Next.js para SEO",
    excerpt: "Estratégias essenciais para melhorar o SEO do seu site Next.js e aumentar o tráfego orgânico.",
    content: "O Next.js se tornou uma das escolhas mais populares para desenvolvedores que buscam criar sites e aplicações web com excelente SEO. Neste artigo, compartilho estratégias essenciais para otimizar seu site Next.js para mecanismos de busca e aumentar seu tráfego orgânico.\n\nO primeiro passo é aproveitar a renderização do lado do servidor (SSR) e a geração estática (SSG) do Next.js. Estas funcionalidades permitem que seu conteúdo seja renderizado antes de chegar ao navegador do usuário, facilitando que os mecanismos de busca indexem seu conteúdo:\n\n```jsx\n// Para páginas que mudam frequentemente, use SSR\nexport async function getServerSideProps() {\n  const data = await fetchData();\n  return { props: { data } };\n}\n\n// Para páginas mais estáticas, use SSG\nexport async function getStaticProps() {\n  const data = await fetchData();\n  return { props: { data } };\n}\n```\n\nMetatags são cruciais para SEO. Utilize o componente Next Head para incluir metadados relevantes em cada página:\n\n```jsx\nimport Head from 'next/head';\n\nexport default function Page({ title, description }) {\n  return (\n    <>\n      <Head>\n        <title>{title}</title>\n        <meta name=\"description\" content={description} />\n        <meta property=\"og:title\" content={title} />\n        <meta property=\"og:description\" content={description} />\n      </Head>\n      {/* Conteúdo da página */}\n    </>\n  );\n}\n```\n\nCom o Next.js 13+, você também pode usar o novo sistema de metadados baseado em arquivos:\n\n```jsx\n// Em app/page.jsx\nexport const metadata = {\n  title: 'Minha Página',\n  description: 'Descrição da minha página para SEO',\n};\n```\n\nCertifique-se de implementar uma estrutura de URL limpa e amigável usando o sistema de roteamento dinâmico do Next.js. URLs bem estruturadas ajudam tanto os usuários quanto os mecanismos de busca a entenderem a estrutura do seu site.\n\nGere um sitemap.xml e um robots.txt para seu site. O Next.js tem pacotes como next-sitemap que automatizam esse processo para você:\n\n```jsx\n// next-sitemap.config.js\nmodule.exports = {\n  siteUrl: 'https://www.seusite.com',\n  generateRobotsTxt: true,\n  // Outras configurações...\n};\n```\n\nA velocidade da página é um fator de classificação crucial. Otimize imagens usando o componente Image do Next.js, que automaticamente aplica lazy loading, redimensionamento e formatos modernos:\n\n```jsx\nimport Image from 'next/image';\n\n<Image\n  src=\"/minha-imagem.jpg\"\n  width={800}\n  height={600}\n  alt=\"Descrição da imagem\"\n  placeholder=\"blur\"\n/>\n```\n\nImplemente dados estruturados (JSON-LD) para ajudar os mecanismos de busca a entenderem o contexto do seu conteúdo e potencialmente obter rich snippets nos resultados de busca:\n\n```jsx\nimport Head from 'next/head';\n\nexport default function Product({ product }) {\n  const jsonLd = {\n    \"@context\": \"https://schema.org\",\n    \"@type\": \"Product\",\n    \"name\": product.name,\n    \"description\": product.description,\n    \"price\": product.price,\n    // Mais propriedades...\n  };\n\n  return (\n    <>\n      <Head>\n        <script\n          type=\"application/ld+json\"\n          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}\n        />\n      </Head>\n      {/* Conteúdo da página */}\n    </>\n  );\n}\n```\n\nFinalmente, monitore regularmente o desempenho SEO do seu site usando ferramentas como Google Search Console e Google Analytics. Elas fornecem insights valiosos sobre como os usuários encontram e interagem com seu site, permitindo que você ajuste continuamente sua estratégia de SEO.",
    date: "2023-04-10T09:15:00Z",
    imageUrl: "/blog3.jpg",
    category: "SEO",
  },
];

export default function BlogPostPage() {
  const params = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = () => {
      setLoading(true);
      
      // Obter o ID do post dos parâmetros da URL
      const postId = params.id as string;
      
      // Primeiro, procura nos posts do localStorage
      const storedPosts = localStorage.getItem("blogPosts");
      let localPosts: BlogPost[] = [];
      
      if (storedPosts) {
        try {
          localPosts = JSON.parse(storedPosts);
        } catch (e) {
          console.error("Erro ao parsear posts do localStorage:", e);
        }
      }
      
      // Procura por ID em posts locais
      let foundPost = localPosts.find(post => post.id === postId);
      
      // Se não encontrar, procura nos posts estáticos
      if (!foundPost) {
        foundPost = staticPosts.find(post => post.id === postId);
      }
      
      if (foundPost) {
        setPost(foundPost);
      } else {
        // Se não for encontrado, redireciona para 404
        notFound();
      }
      
      setLoading(false);
    };
    
    fetchPost();
  }, [params]);

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString("pt-BR", options);
  };

  if (loading) {
    return (
      <div className="container mx-auto py-16 text-center">
        <div className="h-6 w-24 mx-auto bg-primary/20 animate-pulse rounded mb-4"></div>
        <div className="h-10 w-64 mx-auto bg-primary/20 animate-pulse rounded mb-8"></div>
        <div className="h-96 max-w-4xl mx-auto bg-primary/20 animate-pulse rounded"></div>
      </div>
    );
  }

  if (!post) return notFound();

  return (
    <div className="container mx-auto section-spacing">
      <div className="max-w-3xl mx-auto">
        <Link 
          href="/blog" 
          className="inline-flex items-center mb-6 text-sm text-muted-foreground hover:text-primary"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar para o blog
        </Link>

        <div className="mb-6">
          <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary dark:bg-primary/20 mb-4">
            {post.category}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
          <p className="text-muted-foreground mb-6">{post.excerpt}</p>
          <div className="flex items-center text-sm text-muted-foreground mb-8">
            <span>{formatDate(post.date)}</span>
          </div>
        </div>

        {post.imageUrl && (
          <div className="relative h-[400px] w-full overflow-hidden rounded-lg mb-8">
            <Image
              src={post.imageUrl}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 800px, 1000px"
              className="object-cover"
              priority
            />
          </div>
        )}

        <div className="prose prose-lg dark:prose-invert mx-auto">
          {post.content.split("\n\n").map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="https://api.whatsapp.com/send/?phone=5511975865565&text=Oi+Eduardo%21+Eu+vim+através+do+seu+blog%2C+gostaria+de+conversar+mais+sobre&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-green-600 hover:bg-green-700 px-4 py-2 text-sm font-medium text-white inline-flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="mr-2">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Tem dúvidas sobre este assunto? Fale comigo!
          </a>
        </div>
      </div>
    </div>
  );
} 