"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function PalestraVivencial() {
  return (
    <div className="container mx-auto py-12 px-4">
      {/* Hero Section */}
      <div className="relative rounded-xl overflow-hidden h-[400px] md:h-[500px] mb-12">
        <Image 
          src="/palestra_vivencial_balao.jpeg"
          alt="Palestra Vivencial com Balão de Ar Quente"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex flex-col justify-center p-8 md:p-12">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 max-w-2xl">
            Subindo Juntos: Trabalho em Equipe e Segurança no Balonismo
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-xl mb-8">
            Uma experiência vivencial única para empresas, utilizando a montagem de balões de ar quente como metáfora para trabalho em equipe e segurança
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contato">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 text-lg hover:scale-105 transition-all">
                Solicitar Informações
              </Button>
            </Link>
            <a 
              href="https://api.whatsapp.com/send/?phone=5511975865565&text=Oi+Eduardo%21+Eu+vim+através+do+site%2C+gostaria+de+obter+mais+informações+sobre+a+palestra+vivencial+com+balão+de+ar+quente" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-700 py-2 px-6 text-lg hover:scale-105 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="mr-2">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Falar pelo WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Objetivos da Palestra */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Objetivos da Palestra</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-neutral-800 p-8 rounded-xl shadow-md hover:shadow-lg transition-all">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-6 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600 dark:text-blue-400">
                <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z"></path>
                <path d="M16 12v-6"></path>
                <path d="M12 12V6"></path>
                <path d="M8 12V8"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-center">Experiência Prática</h3>
            <p className="text-center text-gray-600 dark:text-gray-300">
              Proporcionar uma experiência prática de montagem e desmontagem de um balão de ar quente.
            </p>
          </div>
          <div className="bg-white dark:bg-neutral-800 p-8 rounded-xl shadow-md hover:shadow-lg transition-all">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-6 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600 dark:text-blue-400">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-center">Trabalho em Equipe</h3>
            <p className="text-center text-gray-600 dark:text-gray-300">
              Destacar a importância do trabalho em equipe, segurança e comunicação eficaz.
            </p>
          </div>
          <div className="bg-white dark:bg-neutral-800 p-8 rounded-xl shadow-md hover:shadow-lg transition-all">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-6 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600 dark:text-blue-400">
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-center">Satisfação na Execução</h3>
            <p className="text-center text-gray-600 dark:text-gray-300">
              Promover agilidade, organização e satisfação ao concluir uma tarefa complexa em conjunto.
            </p>
          </div>
        </div>
      </div>

      {/* Roteiro da Atividade */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Roteiro da Atividade</h2>
        
        <div className="space-y-12">
          {/* Introdução */}
          <div className="bg-white dark:bg-neutral-800 p-8 rounded-xl shadow-md">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mr-4">1</div>
              <h3 className="text-2xl font-bold">Introdução (15 minutos)</h3>
            </div>
            <ul className="list-disc pl-16 space-y-3 text-gray-600 dark:text-gray-300">
              <li>Apresentação rápida sobre o balonismo (história, importância e características).</li>
              <li>Relação direta entre segurança no trabalho e no balonismo.</li>
            </ul>
          </div>
          
          {/* Dinâmica Prática */}
          <div className="bg-white dark:bg-neutral-800 p-8 rounded-xl shadow-md">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mr-4">2</div>
              <h3 className="text-2xl font-bold">Dinâmica Prática (60 minutos)</h3>
            </div>
            <div className="pl-16">
              <h4 className="font-semibold text-lg mb-4">Divisão dos participantes em equipes, com definição clara das funções:</h4>
              <ul className="list-disc pl-6 space-y-3 mb-6 text-gray-600 dark:text-gray-300">
                <li><strong>Equipe do cesto e cilindros:</strong> montagem de 4 cilindros de gás, maçarico e conexão das mangueiras.</li>
                <li><strong>Equipe de posicionamento:</strong> verificação de espaço adequado, análise do vento calmo até 16 km/h e definição da direção de montagem.</li>
                <li><strong>Equipe de inflagem:</strong> uso de ventoinha para inflar o balão com ar frio, coordenação para abrir o tecido.</li>
                <li><strong>Equipe de segurança e ancoragem:</strong> posicionamento das cordas no cesto para estabilização do balão.</li>
              </ul>
              
              <h4 className="font-semibold text-lg mb-4">Montagem passo a passo:</h4>
              <ul className="list-disc pl-6 space-y-3 text-gray-600 dark:text-gray-300">
                <li>Posicionamento do equipamento corretamente, com comunicação eficiente.</li>
                <li>Conexão correta dos cilindros ao maçarico e ao cesto.</li>
                <li>Uso da ventoinha para inflar o balão com ar frio.</li>
                <li>Aquecimento interno com ar quente para levantar o balão na posição vertical.</li>
                <li>Fechamento correto do teto e posicionamento seguro das cordas de ancoragem.</li>
              </ul>
            </div>
          </div>
          
          {/* Encerramento e Reflexão */}
          <div className="bg-white dark:bg-neutral-800 p-8 rounded-xl shadow-md">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mr-4">3</div>
              <h3 className="text-2xl font-bold">Encerramento e Reflexão (15 minutos)</h3>
            </div>
            <ul className="list-disc pl-16 space-y-3 text-gray-600 dark:text-gray-300">
              <li>Discussão em grupo sobre desafios enfrentados e soluções encontradas.</li>
              <li>Reflexão sobre como habilidades demonstradas (comunicação, responsabilidade, organização, confiança e liderança) podem ser aplicadas diariamente no ambiente de trabalho.</li>
              <li>Reforço sobre segurança e prevenção de acidentes como essencial para um ambiente saudável e produtivo.</li>
              <li>Celebração coletiva ao alcançar o resultado final impressionante: ver o balão montado corretamente.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Resultado Esperado */}
      <div className="mb-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 md:p-12 rounded-xl">
        <h2 className="text-3xl font-bold mb-6 text-center">Resultado Esperado</h2>
        <p className="text-lg text-center max-w-3xl mx-auto">
          Participantes sairão da atividade mais conscientes sobre a importância do trabalho seguro e em equipe, com uma experiência marcante de realização conjunta e um exemplo prático e deslumbrante dos resultados que podem ser atingidos com planejamento e cooperação.
        </p>
      </div>

      {/* Benefícios para Empresas */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Benefícios para Empresas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-md">
            <div className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600 mr-4 mt-1 flex-shrink-0">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
              <div>
                <h3 className="text-xl font-semibold mb-2">Fortalecimento da Comunicação</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Melhora significativa na comunicação entre departamentos e equipes através de uma experiência compartilhada.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-md">
            <div className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600 mr-4 mt-1 flex-shrink-0">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
              <div>
                <h3 className="text-xl font-semibold mb-2">Conscientização sobre Segurança</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Reforço prático da importância de procedimentos de segurança e protocolos em qualquer ambiente de trabalho.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-md">
            <div className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600 mr-4 mt-1 flex-shrink-0">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
              <div>
                <h3 className="text-xl font-semibold mb-2">Desenvolvimento de Liderança</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Identificação e desenvolvimento de habilidades de liderança em situações desafiadoras e não convencionais.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-md">
            <div className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600 mr-4 mt-1 flex-shrink-0">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
              <div>
                <h3 className="text-xl font-semibold mb-2">Experiência Memorável</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Uma atividade única e diferenciada que será lembrada por muito tempo, reforçando os conceitos trabalhados.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Final */}
      <div className="bg-white dark:bg-neutral-800 p-8 md:p-12 rounded-xl text-center shadow-md">
        <h2 className="text-3xl font-bold mb-6">Transforme sua Equipe com uma Experiência Única</h2>
        <p className="text-lg mb-8 max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
          Entre em contato hoje mesmo para agendar esta palestra vivencial para sua empresa e proporcione aos seus colaboradores uma oportunidade exclusiva de desenvolvimento pessoal e profissional.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/contato">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 text-lg hover:scale-105 transition-all">
              Solicitar Proposta
            </Button>
          </Link>
          <a 
            href="https://api.whatsapp.com/send/?phone=5511975865565&text=Oi+Eduardo%21+Eu+vim+através+do+site%2C+gostaria+de+obter+mais+informações+sobre+a+palestra+vivencial+com+balão+de+ar+quente" 
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