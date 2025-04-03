"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const cativeiroCards = [
  {
    id: 'palestra-vivencial',
    title: 'Palestra Vivencial com Balão de Ar Quente',
    description: 'Experiência única de trabalho em equipe e segurança através da montagem de um balão de ar quente.',
    image: '/palestra_vivencial_balao.jpeg',
    path: '/cativos/palestra-vivencial'
  }
];

export default function Cativos() {
  return (
    <div className="container mx-auto py-12 px-4">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Cativeiros e Atividades Vivenciais</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Experiências transformadoras e inesquecíveis utilizando o balonismo como ferramenta de desenvolvimento pessoal e profissional.
        </p>
      </div>

      {/* Cards de Atividades */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {cativeiroCards.map((card) => (
          <div 
            key={card.id} 
            className="bg-white dark:bg-neutral-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all"
          >
            <div className="relative h-64">
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">{card.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {card.description}
              </p>
              <Link href={card.path}>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2">
                  Conhecer Atividade
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Seção de Benefícios */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 md:p-12 rounded-xl mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Por que escolher nossas experiências vivenciais?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Desenvolvimento de Equipes</h3>
            <p>Fortalecimento da coesão e comunicação entre membros da equipe.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Experiência Única</h3>
            <p>Atividades exclusivas e memoráveis que não são encontradas em outros lugares.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Resultados Comprovados</h3>
            <p>Metodologia testada e aprovada com excelentes resultados em diversas organizações.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Flexibilidade de Locais</h3>
            <p>Podemos realizar as atividades em sua empresa ou em locais específicos conforme a necessidade.</p>
          </div>
        </div>
      </div>

      {/* CTA Final */}
      <div className="bg-white dark:bg-neutral-800 p-8 md:p-12 rounded-xl text-center shadow-md">
        <h2 className="text-3xl font-bold mb-6">Transforme sua equipe com experiências memoráveis</h2>
        <p className="text-lg mb-8 max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
          Entre em contato hoje mesmo para conhecer todas as opções de atividades que oferecemos e personalize uma experiência para as necessidades específicas da sua empresa.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/contato">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 text-lg hover:scale-105 transition-all">
              Solicitar Proposta
            </Button>
          </Link>
          <a 
            href="https://api.whatsapp.com/send/?phone=5511975865565&text=Oi+Eduardo%21+Eu+vim+através+do+site%2C+gostaria+de+obter+mais+informações+sobre+os+cativeiros+e+atividades+vivenciais" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button variant="outline" className="border-blue-600 text-blue-600 dark:border-blue-500 dark:text-blue-500 hover:bg-blue-600 hover:text-white py-3 px-8 text-lg hover:scale-105 transition-all">
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