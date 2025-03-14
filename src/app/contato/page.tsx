"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function ContatoPage() {
  return (
    <div className="container mx-auto py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Contato</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Entre em contato para discutir seu próximo projeto de arte inflável ou balões personalizados
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
        {/* Seção de Contato */}
        <div className="bg-card p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Entre em Contato</h2>
          <div className="space-y-6">
            <div className="text-center mb-8">
              <p className="mb-6">Prefere falar diretamente? Entre em contato pelo WhatsApp:</p>
              <a 
                href="https://api.whatsapp.com/send/?phone=5511975865565&text=Oi+Eduardo%21+Eu+vim+através+do+site%2C+gostaria+de+conversar+mais+sobre&type=phone_number&app_absent=0" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block w-full"
              >
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white border-green-600 hover:border-green-700">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="mr-2">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Falar pelo WhatsApp
                </Button>
              </a>
            </div>
            
            <div className="text-center">
              <p className="text-muted-foreground">Ou envie um email para:</p>
              <a href="mailto:eduardo@libra.art.br" className="text-primary hover:underline">
                eduardo@libra.art.br
              </a>
            </div>
          </div>
        </div>

        {/* Informações de Contato */}
        <div className="bg-card p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Informações</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <div>
                <p className="font-medium">WhatsApp</p>
                <a 
                  href="https://api.whatsapp.com/send/?phone=5511975865565&text=Oi+Eduardo%21+Eu+vim+através+do+site%2C+gostaria+de+conversar+mais+sobre&type=phone_number&app_absent=0" 
                  className="text-muted-foreground hover:text-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +55 (11) 97586-5565
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
              <div>
                <p className="font-medium">Email</p>
                <a href="mailto:eduardo@libra.art.br" className="text-muted-foreground hover:text-primary">
                  eduardo@libra.art.br
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <div>
                <p className="font-medium">Localização</p>
                <p className="text-muted-foreground">São Paulo, SP - Brasil</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Imagem Decorativa */}
      <div className="mt-16 relative h-64 md:h-96 rounded-lg overflow-hidden">
        <Image
          src="/baloes_2.jpg"
          alt="Balões coloridos"
          fill
          className="object-cover"
        />
      </div>

      {/* Galeria de Imagens */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Galeria</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative h-64 rounded-lg overflow-hidden">
            <Image
              src="/cuckoo_relogio_balloon.jpg"
              alt="Balão em formato de relógio cuco"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-64 rounded-lg overflow-hidden">
            <Image
              src="/f1_ballooon.jpg"
              alt="Balão em formato de carro de F1"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-64 rounded-lg overflow-hidden">
            <Image
              src="/bola_de_basquete_balloon.jpg"
              alt="Balão em formato de bola de basquete"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
} 