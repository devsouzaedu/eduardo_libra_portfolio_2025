"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function Contact() {
  return (
    <div className="container py-12 md:py-24 mx-auto">
      <div className="mb-16 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
          Contato
        </h1>
        <p className="mx-auto max-w-3xl text-lg text-neutral-600 dark:text-neutral-400">
          Entre em contato para discutir seu próximo projeto
        </p>
      </div>

      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
        {/* Contact Form */}
        <div className="rounded-lg bg-white p-8 shadow-md dark:bg-neutral-800">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium">
                Nome
              </label>
              <input
                type="text"
                id="name"
                className="w-full rounded-md border border-neutral-300 bg-transparent px-4 py-2 focus:border-neutral-900 focus:outline-none dark:border-neutral-700 dark:focus:border-neutral-400"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full rounded-md border border-neutral-300 bg-transparent px-4 py-2 focus:border-neutral-900 focus:outline-none dark:border-neutral-700 dark:focus:border-neutral-400"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium">
                Mensagem
              </label>
              <textarea
                id="message"
                rows={6}
                className="w-full rounded-md border border-neutral-300 bg-transparent px-4 py-2 focus:border-neutral-900 focus:outline-none dark:border-neutral-700 dark:focus:border-neutral-400"
                required
              ></textarea>
            </div>
            <Button type="submit" className="w-full">
              Enviar
            </Button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col justify-between rounded-lg bg-neutral-50 p-8 dark:bg-neutral-900">
          <div>
            <h2 className="mb-6 text-2xl font-semibold">Barueri, SP - Brasil</h2>
            <p className="mb-8 text-neutral-600 dark:text-neutral-400">
              Ateliê onde dedico meus dias construindo Obras, Balões e Faixas
            </p>

            <div className="mb-8 space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-200 dark:bg-neutral-800">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Telefone</p>
                  <p className="text-neutral-600 dark:text-neutral-400">+55 (11) 99999-9999</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-200 dark:bg-neutral-800">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-neutral-600 dark:text-neutral-400">contato@eduardolibra.com</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Imagem decorativa */}
          <div className="mt-8 rounded-lg overflow-hidden">
            <div className="relative h-64 w-full">
              <Image 
                src="/baloes_2.jpg" 
                alt="Balões coloridos"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Galeria de imagens de contato */}
      <div className="mt-16">
        <h2 className="mb-8 text-center text-2xl font-bold">Visite nosso ateliê</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative h-64 rounded-lg overflow-hidden">
            <Image 
              src="/cuckoo_relogio_balloon.jpg" 
              alt="Balão Relógio Cuco"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-64 rounded-lg overflow-hidden">
            <Image 
              src="/f1_ballooon.jpg" 
              alt="Balão F1"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-64 rounded-lg overflow-hidden">
            <Image 
              src="/bola_de_basquete_balloon.jpg" 
              alt="Balão Bola de Basquete"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
} 