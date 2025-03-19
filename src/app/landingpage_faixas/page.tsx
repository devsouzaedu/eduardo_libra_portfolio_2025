"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useState } from 'react';

// Tipos de acabamentos para os banners/faixas
type AcabamentoType = 'bastao' | 'ilhos' | 'reforco' | 'sem';

// Informações dos produtos
interface ProdutoInfo {
  titulo: string;
  descricao: string;
  imagem: string;
  tipo: string;
}

// Lista de produtos para exibir
const produtos: ProdutoInfo[] = [
  {
    titulo: "Banner com Bastão",
    descricao: "Banner em lona com madeira em baixo e em cima, acompanha cordinha para pendurar.",
    imagem: "/faixas_landing_image1.png",
    tipo: "banner"
  },
  {
    titulo: "Faixa com Ilhós",
    descricao: "Faixa em lona com madeira e ilhós nas laterais para fácil instalação.",
    imagem: "/faixas_landing_image2.png",
    tipo: "faixa"
  },
  {
    titulo: "Lona com Reforço",
    descricao: "Lona impressa com reforço e ilhós em volta para maior durabilidade em ambientes externos.",
    imagem: "/faixas_landing_image3.png",
    tipo: "lona"
  }
];

// Informações sobre acabamentos
const acabamentos = [
  {
    tipo: "bastao",
    titulo: "Acabamento com Bastão",
    descricao: "Ideal para banners que serão pendurados. Acompanha bastões de madeira na parte superior e inferior com cordinha para fixação.",
    imagem: "/faixas_landing_image1.png"
  },
  {
    tipo: "ilhos",
    titulo: "Acabamento com Ilhós",
    descricao: "Perfeito para fixação em diferentes superfícies. Ilhós metálicos distribuídos nas bordas da lona para maior resistência.",
    imagem: "/faixas_landing_image2.png"
  },
  {
    tipo: "reforco",
    titulo: "Acabamento com Reforço",
    descricao: "Recomendado para uso externo. Reforço nas bordas com ilhós para garantir maior durabilidade em condições adversas.",
    imagem: "/faixas_landing_image3.png"
  },
  {
    tipo: "sem",
    titulo: "Sem Acabamento",
    descricao: "Opção econômica para usos temporários ou internos. Lona impressa sem acabamentos adicionais.",
    imagem: "/faixas_landing_image3.png"
  }
];

// Aplicações comuns para os produtos
const aplicacoes = [
  {
    titulo: "Eventos Corporativos",
    descricao: "Ideal para apresentações, congressos e feiras de negócios."
  },
  {
    titulo: "Festas e Comemorações",
    descricao: "Banners personalizados para aniversários, casamentos e formaturas."
  },
  {
    titulo: "Fachadas Comerciais",
    descricao: "Lonas resistentes para identificação de estabelecimentos."
  },
  {
    titulo: "Promoções e Liquidações",
    descricao: "Faixas chamativas para divulgar ofertas e descontos."
  },
  {
    titulo: "Shows e Espetáculos",
    descricao: "Material resistente para comunicação visual em eventos ao ar livre."
  },
  {
    titulo: "Sinalização",
    descricao: "Banners informativos para orientação em espaços diversos."
  }
];

export default function LandingPageFaixas() {
  const [acabamentoSelecionado, setAcabamentoSelecionado] = useState<AcabamentoType>('bastao');
  
  return (
    <div className="container mx-auto section-spacing pb-24">
      {/* Hero Section */}
      <div className="relative rounded-xl overflow-hidden h-[500px] mb-16">
        <Image 
          src="/faixas_landing_image1.png"
          alt="Banners e Faixas Personalizadas"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent flex flex-col justify-center items-start p-12">
          <div className="absolute top-5 right-5 bg-blue-700 text-white rounded-full py-2 px-4 rotate-12 font-bold text-sm md:text-base">
            ARTE E ENTREGA GRÁTIS
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 max-w-2xl">
            Banners, Faixas e Lonas em Qualquer Tamanho
          </h1>
          <p className="text-xl text-white/90 max-w-xl mb-8">
            Materiais de alta qualidade com impressão digital em alta resolução para seu evento ou negócio
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="https://api.whatsapp.com/send/?phone=5511975865565&text=Oi+Eduardo%21+Eu+vim+através+do+site%2C+gostaria+de+solicitar+um+orçamento+para+faixas+e+banners" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button className="bg-green-600 hover:bg-green-700 text-white border-green-600 hover:border-green-700 py-6 px-8 text-lg hover:scale-105 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="mr-2">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Solicitar Orçamento
              </Button>
            </a>
            <Link href="/contato">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-700 py-6 px-8 text-lg hover:scale-105 transition-all">
                Fale Conosco
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Seção de Informações */}
      <div className="bg-white dark:bg-neutral-900 rounded-xl p-8 mb-16 shadow-md">
        <h2 className="text-3xl font-bold text-center mb-8">Nossos Produtos</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {produtos.map((produto, index) => (
            <div key={index} className="bg-white dark:bg-neutral-800 rounded-lg shadow-md overflow-hidden">
              <div className="relative h-64 w-full">
                <Image 
                  src={produto.imagem}
                  alt={produto.titulo}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{produto.titulo}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{produto.descricao}</p>
                <a 
                  href={`https://api.whatsapp.com/send/?phone=5511975865565&text=Oi+Eduardo%21+Eu+vim+através+do+site%2C+gostaria+de+orçamento+para+${produto.tipo}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-full"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="mr-1">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.967 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Solicitar orçamento
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="prose prose-lg max-w-none dark:prose-invert mb-12">
          <p className="mb-4">
            <strong>Os Banners</strong> são feitos em Lona com Madeira em Baixo e em Cima e já vão com Cordinha Para Pendurar.
          </p>
          <p className="mb-4">
            <strong>As Faixas</strong> são feitas em Lona com Madeira e Ilhós nas Laterais.
          </p>
          <p className="mb-4">
            <strong>As Lonas Impressas</strong> podem ir sem Acabamento ou com Reforço e Ilhós em Volta.
          </p>
          <p className="mb-4">
            Fazemos Todo Tipo de Acabamento, Somos a Gráfica Mais Completa do Segmento.
          </p>
          <p className="mb-4">
            Aqui na Eduardo Libra você compra seus Materiais de forma online, sem sair da frente do seu computador! Basta Entrar em Contato Que Nós Resolvemos o Resto!
          </p>
          <p className="mb-4">
            Depois é Só Esperar o recebimento diretamente no seu endereço ou Retire em Nossa Loja. Disponibilizamos uma grande variedade de tamanhos para seus Produtos além de oferecer a possibilidade de compra por Metro quadrado (m²).
          </p>
          <p className="mb-4">
            Os Materiais Feitos em Lona podem ser utilizados em diversos locais, desde Festas, Fachadas, Eventos, etc. Por se tratar de um material com maior resistência, o material apresenta durabilidade bastante superior quando usado externamente, exposto a chuva e diferentes condições climáticas.
          </p>
          <p className="mb-4">
            Os Banners personalizados podem ser utilizados conforme a necessidade do seu cliente, na divulgação de promoções, produtos, serviços, eventos corporativos, shows e empreendimentos. Para facilitar sua exposição, o Banner acompanha barbante e bastões.
          </p>
        </div>
      </div>

      {/* Seção de Acabamentos */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Tipos de Acabamentos</h2>
        
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {acabamentos.map((acabamento) => (
            <Button 
              key={acabamento.tipo}
              variant={acabamentoSelecionado === acabamento.tipo as AcabamentoType ? 'default' : 'outline'}
              onClick={() => setAcabamentoSelecionado(acabamento.tipo as AcabamentoType)}
              className="mb-2"
            >
              {acabamento.titulo}
            </Button>
          ))}
        </div>
        
        {acabamentos.filter(a => a.tipo === acabamentoSelecionado).map((acabamento, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white dark:bg-neutral-900 rounded-xl overflow-hidden shadow-md">
            <div className="relative h-80">
              <Image 
                src={acabamento.imagem}
                alt={acabamento.titulo}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8 flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-4">{acabamento.titulo}</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">{acabamento.descricao}</p>
              <a 
                href={`https://api.whatsapp.com/send/?phone=5511975865565&text=Oi+Eduardo%21+Eu+vim+através+do+site%2C+gostaria+de+orçamento+para+banner+com+acabamento+${acabamento.tipo}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-fit"
              >
                <Button className="bg-green-600 hover:bg-green-700 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="mr-2">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.967 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Solicitar orçamento
                </Button>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Seção de Aplicações */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Aplicações</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {aplicacoes.map((aplicacao, index) => (
            <div key={index} className="bg-white dark:bg-neutral-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3">{aplicacao.titulo}</h3>
              <p className="text-gray-600 dark:text-gray-300">{aplicacao.descricao}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Formulário de Orçamento */}
      <div className="bg-blue-700 text-white rounded-xl p-8 md:p-12 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold mb-4">Solicite seu Orçamento</h2>
            <p className="text-lg mb-6">
              Temos as melhores condições e preços do mercado. Preencha o formulário para receber um orçamento personalizado.
            </p>
            <div className="flex items-center gap-3 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
                <path d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Arte Grátis</span>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
                <path d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Entrega Rápida</span>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
                <path d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Diferentes Tamanhos e Acabamentos</span>
            </div>
            <div className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
                <path d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Impressão Digital em Alta Resolução</span>
            </div>
          </div>
          <div className="md:col-span-3">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="mb-4">
                <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1">Nome</label>
                <input type="text" id="nome" className="w-full p-2 border border-gray-300 rounded-md" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input type="email" id="email" className="w-full p-2 border border-gray-300 rounded-md" />
                </div>
                <div>
                  <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-1">Telefone</label>
                  <input type="tel" id="telefone" className="w-full p-2 border border-gray-300 rounded-md" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="tipo" className="block text-sm font-medium text-gray-700 mb-1">Tipo</label>
                  <select id="tipo" className="w-full p-2 border border-gray-300 rounded-md">
                    <option value="">Selecione</option>
                    <option value="banner">Banner</option>
                    <option value="faixa">Faixa</option>
                    <option value="lona">Lona</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="acabamento" className="block text-sm font-medium text-gray-700 mb-1">Acabamento</label>
                  <select id="acabamento" className="w-full p-2 border border-gray-300 rounded-md">
                    <option value="">Selecione</option>
                    <option value="bastao">Com Bastão</option>
                    <option value="ilhos">Com Ilhós</option>
                    <option value="reforco">Com Reforço</option>
                    <option value="sem">Sem Acabamento</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="largura" className="block text-sm font-medium text-gray-700 mb-1">Largura (cm)</label>
                  <input type="number" id="largura" className="w-full p-2 border border-gray-300 rounded-md" />
                </div>
                <div>
                  <label htmlFor="altura" className="block text-sm font-medium text-gray-700 mb-1">Altura (cm)</label>
                  <input type="number" id="altura" className="w-full p-2 border border-gray-300 rounded-md" />
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-1">Observações</label>
                <textarea id="mensagem" rows={3} className="w-full p-2 border border-gray-300 rounded-md"></textarea>
              </div>
              <Button className="w-full bg-blue-700 hover:bg-blue-800 text-white">
                Solicitar Orçamento
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Banner CTA */}
      <div className="rounded-xl overflow-hidden relative h-80">
        <Image 
          src="/faixas_landing_image2.png"
          alt="Solicite seu orçamento"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center p-8">
          <h2 className="text-3xl font-bold text-white mb-4">Arte e Entrega Grátis</h2>
          <p className="text-lg text-white/90 max-w-2xl mb-8">
            Entre em contato conosco agora mesmo e aproveite nossas condições especiais!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a 
              href="https://api.whatsapp.com/send/?phone=5511975865565&text=Oi+Eduardo%21+Eu+vim+através+do+site%2C+gostaria+de+um+orçamento+para+faixas+e+banners" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button className="bg-green-600 hover:bg-green-700 text-white border-green-600 hover:border-green-700 py-6 px-8 text-lg hover:scale-105 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="mr-2">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Falar pelo WhatsApp
              </Button>
            </a>
            <Link href="/contato">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-700 py-6 px-8 text-lg hover:scale-105 transition-all">
                Entrar em Contato
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 