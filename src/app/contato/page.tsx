"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function ContatoPage() {
  return (
    <div className="container mx-auto section-spacing">
      <div className="text-center element-spacing">
        <h1 className="text-4xl font-bold mb-6">Solicite seu Orçamento</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Entre em contato para discutir sua próxima obra de arte inflável gigante personalizada
        </p>
      </div>

      {/* Formulário de Orçamento */}
      <div className="bg-neutral-50 dark:bg-neutral-900 p-12 rounded-lg mb-16 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-center">Solicite um Orçamento Personalizado</h2>
        <div className="space-y-6">
          <div>
            <label htmlFor="tipo" className="block text-sm font-medium mb-2">Tipo de Arte Inflável</label>
            <select id="tipo" className="w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 px-3 py-2">
              <option value="">Selecione uma opção</option>
              <option value="escultura">Escultura Inflável Gigante</option>
              <option value="instalacao">Instalação Artística Inflável</option>
              <option value="publicidade">Peça Publicitária Inflável</option>
              <option value="evento">Arte Inflável para Evento</option>
              <option value="outro">Outro (especifique abaixo)</option>
            </select>
          </div>
          <div>
            <label htmlFor="dimensoes" className="block text-sm font-medium mb-2">Dimensões Aproximadas</label>
            <select id="dimensoes" className="w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 px-3 py-2">
              <option value="">Selecione uma opção</option>
              <option value="pequeno">Pequeno (até 3 metros)</option>
              <option value="medio">Médio (3 a 8 metros)</option>
              <option value="grande">Grande (8 a 15 metros)</option>
              <option value="gigante">Gigante (acima de 15 metros)</option>
              <option value="outro">Outro (especifique abaixo)</option>
            </select>
          </div>
          <div>
            <label htmlFor="localizacao" className="block text-sm font-medium mb-2">Localização de Instalação</label>
            <select id="localizacao" className="w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 px-3 py-2">
              <option value="">Selecione uma opção</option>
              <option value="interno">Ambiente Interno</option>
              <option value="externo">Ambiente Externo</option>
              <option value="misto">Misto (Interno e Externo)</option>
              <option value="outro">Outro (especifique abaixo)</option>
            </select>
          </div>
          <div>
            <label htmlFor="descricao" className="block text-sm font-medium mb-2">Descreva seu Projeto</label>
            <textarea
              id="descricao"
              rows={5}
              className="w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 px-3 py-2"
              placeholder="Descreva detalhes do seu projeto, referências visuais, prazo desejado, etc."
            ></textarea>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="nome" className="block text-sm font-medium mb-2">Seu Nome</label>
              <input
                type="text"
                id="nome"
                className="w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 px-3 py-2"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">Seu Email</label>
              <input
                type="email"
                id="email"
                className="w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 px-3 py-2"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="telefone" className="block text-sm font-medium mb-2">Seu Telefone</label>
              <input
                type="tel"
                id="telefone"
                className="w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 px-3 py-2"
              />
            </div>
            <div>
              <label htmlFor="empresa" className="block text-sm font-medium mb-2">Empresa (se aplicável)</label>
              <input
                type="text"
                id="empresa"
                className="w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 px-3 py-2"
              />
            </div>
          </div>
          <Button className="w-full bg-primary hover:bg-primary/90 text-white border-primary hover:border-primary/90 py-6 text-lg">
            Enviar Solicitação de Orçamento
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start max-w-5xl mx-auto">
        {/* Seção de Contato */}
        <div className="bg-card p-10 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-8 text-center">Contato Direto</h2>
          <div className="space-y-8">
            <div className="text-center mb-10">
              <p className="mb-8">Prefere falar diretamente? Entre em contato pelo WhatsApp:</p>
              <a 
                href="https://api.whatsapp.com/send/?phone=5511975865565&text=Oi+Eduardo%21+Eu+vim+através+do+site%2C+gostaria+de+conversar+sobre+uma+obra+de+arte+inflável&type=phone_number&app_absent=0" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block w-full"
              >
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white border-green-600 hover:border-green-700 py-6 text-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="mr-3">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Falar pelo WhatsApp
                </Button>
              </a>
            </div>
            
            <div className="text-center">
              <p className="text-muted-foreground mb-3">Ou envie um email para:</p>
              <a href="mailto:libravelasebaloes@gmail.com" className="text-primary hover:underline text-lg">
                libravelasebaloes@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Informações de Contato */}
        <div className="bg-card p-10 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-8 text-center">Informações</h2>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <div>
                <p className="font-medium text-lg">WhatsApp</p>
                <a 
                  href="https://api.whatsapp.com/send/?phone=5511975865565&text=Oi+Eduardo%21+Eu+vim+através+do+site%2C+gostaria+de+conversar+sobre+uma+obra+de+arte+inflável&type=phone_number&app_absent=0" 
                  className="text-muted-foreground hover:text-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +55 (11) 97586-5565
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
              <div>
                <p className="font-medium text-lg">Email</p>
                <a href="mailto:libravelasebaloes@gmail.com" className="text-muted-foreground hover:text-primary">
                libravelasebaloes@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <div>
                <p className="font-medium text-lg">Localização</p>
                <p className="text-muted-foreground">Barueri, SP - Brasil</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Seção de Exemplos de Projetos */}
      <div className="mt-24">
        <h2 className="text-2xl font-bold mb-8 text-center">Exemplos de Obras de Arte Infláveis</h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          Confira alguns exemplos de nossas esculturas infláveis gigantes personalizadas
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="relative h-72 rounded-lg overflow-hidden">
            <Image
              src="/cuckoo_relogio_balloon.jpg"
              alt="Escultura inflável gigante"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <p className="text-white p-4 font-medium">Escultura Inflável para Exposição</p>
            </div>
          </div>
          <div className="relative h-72 rounded-lg overflow-hidden">
            <Image
              src="/f1_ballooon.jpg"
              alt="Instalação inflável personalizada"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <p className="text-white p-4 font-medium">Instalação Inflável para Evento</p>
            </div>
          </div>
          <div className="relative h-72 rounded-lg overflow-hidden">
            <Image
              src="/bola_de_basquete_balloon.jpg"
              alt="Arte inflável para campanha publicitária"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <p className="text-white p-4 font-medium">Arte Inflável para Publicidade</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 