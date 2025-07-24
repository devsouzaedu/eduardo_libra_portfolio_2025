"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Script from 'next/script';

export default function Home() {
  return (
    <>
      {/* Dados Estruturados para SEO */}
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Eduardo Libra - Infláveis Promocionais",
            "description": "Especialista em infláveis promocionais personalizados, tendas infláveis e balões rooftop com mais de 25 anos de experiência.",
            "url": "https://eduardolibra.com",
            "telephone": "+55-11-97586-5565",
            "email": "contato@eduardolibra.com",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "São Paulo",
              "addressRegion": "SP",
              "addressCountry": "BR"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "-23.5505",
              "longitude": "-46.6333"
            },
            "openingHours": "Mo-Fr 08:00-17:00",
            "priceRange": "$$",
            "serviceArea": {
              "@type": "Country",
              "name": "Brasil"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Infláveis Promocionais",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Tendas Infláveis Promocionais",
                    "description": "Tendas infláveis personalizadas para eventos e promoções"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Balões Rooftop",
                    "description": "Balões infláveis para instalação em telhados com máxima visibilidade"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Infláveis Promocionais Personalizados",
                    "description": "Infláveis promocionais sob medida para campanhas de marketing"
                  }
                }
              ]
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "150"
            },
            "founder": {
              "@type": "Person",
              "name": "Eduardo Libra"
            }
          })
        }}
      />
      
    <div className="flex flex-col items-center w-full">
      {/* Hero Section - Galeria de Infláveis */}
      <section className="relative min-h-screen w-full bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 overflow-hidden"
        style={{ minHeight: '100vh' }}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-yellow-300 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-400 rounded-full blur-3xl"></div>
        </div>
        
                 <div className="container mx-auto safe-area-mobile py-16 relative z-10">
           {/* Layout Mobile - Vertical */}
           <div className="flex flex-col items-center justify-center min-h-[85vh] text-center space-y-8 lg:hidden">
             
             {/* Imagem Principal Mobile */}
             <div className="relative mt-4">
               <div className="relative z-10 mx-auto w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96">
                 <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>
                 <Image 
                   src="/inflavel_varios_use.webp" 
                   alt="Infláveis Promocionais Personalizados"
                   fill
                   className="object-contain relative z-10 drop-shadow-2xl"
                   priority
                 />
               </div>
             </div>
             
             {/* Conteúdo de texto Mobile */}
             <div className="text-white space-y-6 max-w-4xl px-2">
               <div className="space-y-4">
                 <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                   <span className="block">Infláveis personalizados para</span>
                   <span className="block text-yellow-300">quem quer <span className="text-yellow-400">vender mais</span></span>
                   <span className="block">e ser visto</span>
                 </h1>
                 
                 <p className="text-lg sm:text-xl md:text-2xl text-blue-100 leading-relaxed px-4">
                   Em pontos de venda ou grandes eventos, os infláveis Eduardo Libra destacam sua empresa de longe.
                 </p>
               </div>
               
               <div className="flex flex-col gap-4 justify-center px-4">
                 <a href="https://api.whatsapp.com/send/?phone=5511975865565&text=Oi%21+Quero+meu+infl%C3%A1vel+personalizado" target="_blank" rel="noopener noreferrer" className="w-full">
                   <Button size="lg" className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-6 py-4 text-base sm:text-lg rounded-full shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300 hover:scale-105">
                     Quero meu inflável personalizado →
                   </Button>
                 </a>
               </div>
               
               {/* Badges de destaque Mobile */}
               <div className="flex flex-wrap justify-center gap-3 text-xs sm:text-sm px-4">
                 <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-2 flex items-center gap-2">
                   ⚡ <span>Entrega rápida</span>
                 </div>
                 <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-2 flex items-center gap-2">
                   🎨 <span>Design 3D incluso</span>
                 </div>
                 <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-2 flex items-center gap-2">
                   ✅ <span>25+ anos</span>
                 </div>
               </div>
             </div>
           </div>

           {/* Layout Desktop - Horizontal */}
           <div className="hidden lg:grid lg:grid-cols-2 lg:gap-16 xl:gap-20 items-center min-h-[85vh]">
             
             {/* Imagem Principal Desktop - Lado Esquerdo */}
             <div className="relative order-1">
               <div className="relative z-10 w-full max-w-2xl mx-auto aspect-square">
                 <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
                 <Image 
                   src="/inflavel_varios_use.webp" 
                   alt="Infláveis Promocionais Personalizados"
                   fill
                   className="object-contain relative z-10 drop-shadow-2xl"
                   priority
                 />
               </div>
             </div>
             
             {/* Conteúdo de texto Desktop - Lado Direito */}
             <div className="text-white space-y-10 order-2">
               <div className="space-y-8">
                 <h1 className="text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-tight">
                   <span className="block">Infláveis</span>
                   <span className="block">personalizados para</span>
                   <span className="block text-yellow-300">quem quer <span className="text-yellow-400">vender mais</span></span>
                   <span className="block">e ser visto</span>
                 </h1>
                 
                 <p className="text-2xl xl:text-3xl text-blue-100 leading-relaxed">
                   Em pontos de venda ou grandes eventos, os infláveis Eduardo Libra destacam sua empresa de longe.
                 </p>
               </div>
               
               <div className="flex gap-6">
                 <a href="https://api.whatsapp.com/send/?phone=5511975865565&text=Oi%21+Quero+meu+infl%C3%A1vel+personalizado" target="_blank" rel="noopener noreferrer">
                   <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-10 py-5 text-xl rounded-full shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300 hover:scale-105">
                     Quero meu inflável personalizado →
                   </Button>
                 </a>
               </div>
               
               {/* Badges de destaque Desktop */}
               <div className="flex flex-wrap gap-6 text-base">
                 <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-4 flex items-center gap-3">
                   ⚡ <span>Entrega em tempo recorde</span>
                 </div>
                 <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-4 flex items-center gap-3">
                   🎨 <span>Design 3D incluso</span>
                 </div>
                 <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-4 flex items-center gap-3">
                   ✅ <span>25+ anos de experiência</span>
                 </div>
               </div>
             </div>
           </div>
         </div>
        
        {/* Indicador de scroll */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Seção de Serviços Principais */}
      <section className="py-16 w-full bg-white">
        <div className="container mx-auto safe-area-mobile">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 px-4">
              Nossos Infláveis Promocionais
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Fabricamos infláveis promocionais personalizados de 2 a 30 metros de altura, 
              com qualidade premium e impacto visual garantido para sua marca.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Tendas Infláveis */}
            <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative h-64 overflow-hidden">
                <Image 
                  src="/tenda_inflavel_use (1).png" 
                  alt="Tendas Infláveis Promocionais"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold mb-2">Tendas Infláveis</h3>
                  <p className="text-sm opacity-90">Espaços promocionais únicos</p>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Motor embutido com iluminação LED
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Montagem rápida e fácil
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Personalização completa
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Material resistente e durável
                  </li>
                </ul>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Solicitar Orçamento
                </Button>
              </div>
            </div>

            {/* Balões Rooftop */}
            <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative h-64 overflow-hidden">
                <Image 
                  src="/roof_top_inflavel_use (1).jpg" 
                  alt="Balões Rooftop Infláveis"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold mb-2">Balões Rooftop</h3>
                  <p className="text-sm opacity-90">Visibilidade aérea máxima</p>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Visibilidade a longa distância
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Fixação segura em telhados
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Resistente às intempéries
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Impacto publicitário garantido
                  </li>
                </ul>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Solicitar Orçamento
                </Button>
              </div>
            </div>

            {/* Infláveis Promocionais Diversos */}
            <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative h-64 overflow-hidden">
                <Image 
                  src="/inflavel_varios_use.webp" 
                  alt="Infláveis Promocionais Diversos"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold mb-2">Infláveis Diversos</h3>
                  <p className="text-sm opacity-90">Formatos personalizados</p>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Réplicas de produtos
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Mascotes infláveis
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Portais e arcos
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Totens promocionais
                  </li>
                </ul>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Solicitar Orçamento
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

             {/* Seção Por que escolher nossos infláveis */}
       <section className="py-16 w-full bg-gradient-to-br from-slate-800 via-slate-900 to-blue-900">
         <div className="container mx-auto safe-area-mobile">
           <div className="text-center mb-12">
             <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 px-4">
               Por que escolher nossos Infláveis Promocionais?
             </h2>
             <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto px-4">
               Mais de 25 anos de experiência na fabricação de balões de ar quente e infláveis promocionais, 
               garantindo qualidade premium e resultados excepcionais.
             </p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
             <div className="text-center">
               <div className="bg-blue-500/20 backdrop-blur-sm rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 border border-blue-400/30">
                 <svg className="w-10 h-10 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                 </svg>
               </div>
               <h3 className="text-xl font-bold text-white mb-2">Produção Rápida</h3>
               <p className="text-blue-100">Menor prazo de entrega do mercado com qualidade garantida</p>
             </div>

             <div className="text-center">
               <div className="bg-green-500/20 backdrop-blur-sm rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 border border-green-400/30">
                 <svg className="w-10 h-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                 </svg>
               </div>
               <h3 className="text-xl font-bold text-white mb-2">Qualidade Premium</h3>
               <p className="text-blue-100">Materiais de alta qualidade e impressão digital HD</p>
             </div>

             <div className="text-center">
               <div className="bg-purple-500/20 backdrop-blur-sm rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 border border-purple-400/30">
                 <svg className="w-10 h-10 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                 </svg>
               </div>
               <h3 className="text-xl font-bold text-white mb-2">Atendimento Personalizado</h3>
               <p className="text-blue-100">Suporte completo do projeto à entrega</p>
             </div>

             <div className="text-center">
               <div className="bg-yellow-500/20 backdrop-blur-sm rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 border border-yellow-400/30">
                 <svg className="w-10 h-10 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                 </svg>
               </div>
               <h3 className="text-xl font-bold text-white mb-2">Melhor Custo-Benefício</h3>
               <p className="text-blue-100">Preços competitivos com qualidade superior</p>
             </div>
           </div>
         </div>
       </section>

       {/* Galeria de Produtos com as Imagens Fornecidas */}
       <section className="py-16 w-full bg-white">
         <div className="container mx-auto safe-area-mobile">
           <div className="text-center mb-12">
             <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 px-4">
               Galeria de Infláveis Promocionais
             </h2>
             <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
               Conheça alguns dos nossos projetos realizados. Cada inflável é único e personalizado 
               para atender às necessidades específicas de nossos clientes.
             </p>
           </div>

           {/* Grid de Imagens */}
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
             {/* Tendas Infláveis */}
             <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
               <div className="relative h-80">
                 <Image 
                   src="/tenda_inflavel_use (2).jpg" 
                   alt="Tenda Inflável Promocional Personalizada"
                   fill
                   className="object-cover group-hover:scale-110 transition-transform duration-300"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                 <div className="absolute bottom-4 left-4 text-white">
                   <h3 className="text-xl font-bold mb-1">Tenda Inflável Sika</h3>
                   <p className="text-sm opacity-90">Tenda promocional personalizada</p>
                 </div>
               </div>
             </div>

             <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
               <div className="relative h-80">
                 <Image 
                   src="/tenda_inflavel_use (3).png" 
                   alt="Tenda Inflável CIMED"
                   fill
                   className="object-cover group-hover:scale-110 transition-transform duration-300"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                 <div className="absolute bottom-4 left-4 text-white">
                   <h3 className="text-xl font-bold mb-1">Tenda Inflável CIMED</h3>
                   <p className="text-sm opacity-90">Estrutura promocional robusta</p>
                 </div>
               </div>
             </div>

             <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
               <div className="relative h-80">
                 <Image 
                   src="/tenda_inflavel_use (4).png" 
                   alt="Tenda Inflável Fibra Móveis Design"
                   fill
                   className="object-cover group-hover:scale-110 transition-transform duration-300"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                 <div className="absolute bottom-4 left-4 text-white">
                   <h3 className="text-xl font-bold mb-1">Tenda Fibra Móveis</h3>
                   <p className="text-sm opacity-90">Design exclusivo e impactante</p>
                 </div>
               </div>
             </div>

             {/* Balões Rooftop */}
             <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
               <div className="relative h-80">
                 <Image 
                   src="/roof_top_inflavel_use (2).jpg" 
                   alt="Balão Rooftop Promocional"
                   fill
                   className="object-cover group-hover:scale-110 transition-transform duration-300"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                 <div className="absolute bottom-4 left-4 text-white">
                   <h3 className="text-xl font-bold mb-1">Balão Rooftop</h3>
                   <p className="text-sm opacity-90">Visibilidade aérea garantida</p>
                 </div>
               </div>
             </div>

             <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
               <div className="relative h-80">
                 <Image 
                   src="/balao roftop inflavel promocinal use .png" 
                   alt="Balão Rooftop Inflável para Promoção"
                   fill
                   className="object-cover group-hover:scale-110 transition-transform duration-300"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                 <div className="absolute bottom-4 left-4 text-white">
                   <h3 className="text-xl font-bold mb-1">Balão Promocional</h3>
                   <p className="text-sm opacity-90">Impacto visual máximo</p>
                 </div>
               </div>
             </div>

             <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
               <div className="relative h-80">
                 <Image 
                   src="/roof_top_inflavel_use (1).webp" 
                   alt="Balão Rooftop Inflável Promocional"
                   fill
                   className="object-cover group-hover:scale-110 transition-transform duration-300"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                 <div className="absolute bottom-4 left-4 text-white">
                   <h3 className="text-xl font-bold mb-1">Balão Personalizado</h3>
                   <p className="text-sm opacity-90">Solução completa para sua marca</p>
                 </div>
               </div>
             </div>
           </div>

           {/* CTA da Galeria */}
           <div className="text-center">
             <a href="https://api.whatsapp.com/send/?phone=5511975865565&text=Oi%21+Vi+a+galeria+e+gostaria+de+um+or%C3%A7amento+personalizado&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
               <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4">
                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="mr-2">
                   <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                 </svg>
                 Ver Mais Projetos no WhatsApp
               </Button>
             </a>
           </div>
         </div>
       </section>

       {/* Seção de Experiência e Credibilidade */}
       <section className="py-20 w-full bg-gradient-to-r from-blue-900 to-purple-900 text-white">
         <div className="container mx-auto safe-area-mobile">
           <div className="text-center mb-16">
             <h2 className="text-4xl md:text-5xl font-bold mb-6">
               Mais de 25 Anos de Experiência
             </h2>
             <p className="text-xl max-w-3xl mx-auto opacity-90">
               Dos balões de ar quente aos infláveis promocionais, nossa expertise garante 
               qualidade premium e resultados excepcionais para sua marca.
             </p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
             <div>
               <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">25+</div>
               <p className="text-lg">Anos de Experiência</p>
             </div>
             <div>
               <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">500+</div>
               <p className="text-lg">Projetos Realizados</p>
             </div>
             <div>
               <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">100%</div>
               <p className="text-lg">Clientes Satisfeitos</p>
             </div>
             <div>
               <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">24h</div>
               <p className="text-lg">Suporte Técnico</p>
             </div>
           </div>
         </div>
       </section>

       {/* Seção de Diferenciais Técnicos */}
       <section className="py-20 w-full bg-white">
         <div className="container mx-auto safe-area-mobile">
           <div className="text-center mb-16">
             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
               Tecnologia e Qualidade em Cada Projeto
             </h2>
             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
               Utilizamos os melhores materiais e tecnologias disponíveis para garantir 
               durabilidade, segurança e impacto visual superior.
             </p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
             <div>
               <div className="space-y-8">
                 <div className="flex items-start space-x-4">
                   <div className="bg-blue-100 rounded-full p-3 flex-shrink-0">
                     <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                     </svg>
                   </div>
                   <div>
                     <h3 className="text-xl font-bold text-gray-900 mb-2">Motor Embutido com LED</h3>
                     <p className="text-gray-600">Sistema de ventilação contínua com iluminação LED integrada e grade de proteção para máxima segurança.</p>
                   </div>
                 </div>

                 <div className="flex items-start space-x-4">
                   <div className="bg-green-100 rounded-full p-3 flex-shrink-0">
                     <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a4 4 0 004-4V5z" />
                     </svg>
                   </div>
                   <div>
                     <h3 className="text-xl font-bold text-gray-900 mb-2">Impressão Digital HD</h3>
                     <p className="text-gray-600">Impressoras HP látex garantem alta resolução, fidelidade de cores e resistência às intempéries.</p>
                   </div>
                 </div>

                 <div className="flex items-start space-x-4">
                   <div className="bg-purple-100 rounded-full p-3 flex-shrink-0">
                     <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                     </svg>
                   </div>
                   <div>
                     <h3 className="text-xl font-bold text-gray-900 mb-2">Material Premium</h3>
                     <p className="text-gray-600">Tecido de poliéster de alta qualidade, resistente e durável, com garantia de qualidade atestada.</p>
                   </div>
                 </div>
               </div>
             </div>

             <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
               <Image 
                 src="/baloes_2.jpg" 
                 alt="Qualidade e Tecnologia em Infláveis"
                 fill
                 className="object-cover"
               />
             </div>
           </div>
         </div>
       </section>

       {/* Seção de Formulário de Orçamento */}
       <section className="py-16 w-full bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800"
         style={{ backgroundColor: '#1e293b' }}>
         <div className="container mx-auto safe-area-mobile">
           <div className="max-w-6xl mx-auto">
             <div className="text-center mb-12">
               <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 px-4">
                 Solicite seu Orçamento Gratuito
               </h2>
               <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto px-4">
                 Preencha o formulário abaixo e receba um orçamento personalizado para seu inflável promocional. 
                 Resposta em até 24 horas!
               </p>
             </div>

             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
               {/* Formulário */}
               <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-white/20">
                 <form className="space-y-6">
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     <div>
                       <label htmlFor="nome" className="block text-sm font-medium text-white mb-2">
                         Seu Nome *
                       </label>
                       <input
                         type="text"
                         id="nome"
                         name="nome"
                         required
                         className="w-full px-4 py-3 bg-white/20 border border-white/30 text-white placeholder-white/70 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 backdrop-blur-sm"
                         placeholder="Digite seu nome completo"
                       />
                     </div>
                     <div>
                       <label htmlFor="empresa" className="block text-sm font-medium text-white mb-2">
                         Sua Empresa
                       </label>
                       <input
                         type="text"
                         id="empresa"
                         name="empresa"
                         className="w-full px-4 py-3 bg-white/20 border border-white/30 text-white placeholder-white/70 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 backdrop-blur-sm"
                         placeholder="Nome da empresa"
                       />
                     </div>
                   </div>

                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     <div>
                       <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                         E-mail *
                       </label>
                       <input
                         type="email"
                         id="email"
                         name="email"
                         required
                         className="w-full px-4 py-3 bg-white/20 border border-white/30 text-white placeholder-white/70 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 backdrop-blur-sm"
                         placeholder="seu@email.com"
                       />
                     </div>
                     <div>
                       <label htmlFor="telefone" className="block text-sm font-medium text-white mb-2">
                         Telefone *
                       </label>
                       <input
                         type="tel"
                         id="telefone"
                         name="telefone"
                         required
                         className="w-full px-4 py-3 bg-white/20 border border-white/30 text-white placeholder-white/70 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 backdrop-blur-sm"
                         placeholder="(11) 99999-9999"
                       />
                     </div>
                   </div>

                   <div>
                     <label htmlFor="tipo_inflavel" className="block text-sm font-medium text-white mb-2">
                       Tipo de Inflável *
                     </label>
                     <select
                       id="tipo_inflavel"
                       name="tipo_inflavel"
                       required
                       className="w-full px-4 py-3 bg-white/20 border border-white/30 text-white rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 backdrop-blur-sm"
                     >
                       <option value="" className="text-gray-900">Selecione o tipo desejado</option>
                       <option value="tenda_inflavel" className="text-gray-900">Tenda Inflável</option>
                       <option value="balao_rooftop" className="text-gray-900">Balão Rooftop</option>
                       <option value="inflavel_promocional" className="text-gray-900">Inflável Promocional</option>
                       <option value="replica_produto" className="text-gray-900">Réplica de Produto</option>
                       <option value="mascote_inflavel" className="text-gray-900">Mascote Inflável</option>
                       <option value="outros" className="text-gray-900">Outros</option>
                     </select>
                   </div>

                   <div>
                     <label htmlFor="urgencia" className="block text-sm font-medium text-white mb-2">
                       Urgência do Projeto
                     </label>
                     <select
                       id="urgencia"
                       name="urgencia"
                       className="w-full px-4 py-3 bg-white/20 border border-white/30 text-white rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 backdrop-blur-sm"
                     >
                       <option value="normal" className="text-gray-900">⏳ Sem pressa - Prefiro um projeto detalhado</option>
                       <option value="medio" className="text-gray-900">🗓️ Até 20 dias está ótimo</option>
                       <option value="urgente" className="text-gray-900">🚀 Preciso o quanto antes - Evento próximo</option>
                       <option value="orcamento" className="text-gray-900">💰 Quero só ter uma ideia de preço</option>
                     </select>
                   </div>

                   <div>
                     <label htmlFor="mensagem" className="block text-sm font-medium text-white mb-2">
                       Descreva seu Projeto
                     </label>
                     <textarea
                       id="mensagem"
                       name="mensagem"
                       rows={4}
                       className="w-full px-4 py-3 bg-white/20 border border-white/30 text-white placeholder-white/70 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 backdrop-blur-sm"
                       placeholder="Conte-nos mais sobre seu projeto: tamanho desejado, cores, logotipos, local do evento, etc."
                     ></textarea>
                   </div>

                   <div className="flex items-center">
                     <input
                       id="aceito_comunicacoes"
                       name="aceito_comunicacoes"
                       type="checkbox"
                       className="h-4 w-4 text-yellow-500 focus:ring-yellow-500 border-white/30 rounded bg-white/20"
                     />
                     <label htmlFor="aceito_comunicacoes" className="ml-2 block text-sm text-white/90">
                       Eu concordo em receber comunicações e ofertas personalizadas.
                     </label>
                   </div>

                   <Button 
                     type="submit" 
                     size="lg" 
                     className="w-full bg-yellow-500 hover:bg-yellow-600 text-black py-4 text-base sm:text-lg font-bold rounded-full shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300 hover:scale-105"
                   >
                     Solicitar Orçamento Gratuito
                   </Button>
                 </form>
               </div>

               {/* Informações de Contato */}
               <div className="space-y-8">
                 <div>
                   <h3 className="text-2xl font-bold text-white mb-6">Outras Formas de Contato</h3>
                   
                                        <div className="space-y-6">
                       <div className="flex items-start space-x-4">
                         <div className="bg-green-500/20 backdrop-blur-sm rounded-full p-3 flex-shrink-0 border border-green-400/30">
                           <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                             <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                           </svg>
                         </div>
                         <div>
                           <h4 className="text-lg font-semibold text-white mb-1">WhatsApp</h4>
                           <p className="text-blue-100 mb-2">Resposta rápida e atendimento personalizado</p>
                           <a 
                             href="https://api.whatsapp.com/send/?phone=5511975865565&text=Oi%21+Gostaria+de+um+or%C3%A7amento+para+infl%C3%A1veis+promocionais&type=phone_number&app_absent=0" 
                             target="_blank" 
                             rel="noopener noreferrer"
                             className="text-green-400 hover:text-green-300 font-medium"
                           >
                             (11) 97586-5565
                           </a>
                         </div>
                       </div>

                       <div className="flex items-start space-x-4">
                         <div className="bg-blue-500/20 backdrop-blur-sm rounded-full p-3 flex-shrink-0 border border-blue-400/30">
                           <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                           </svg>
                         </div>
                         <div>
                           <h4 className="text-lg font-semibold text-white mb-1">E-mail</h4>
                           <p className="text-blue-100 mb-2">Para orçamentos detalhados e projetos complexos</p>
                           <a 
                             href="mailto:contato@eduardolibra.com" 
                             className="text-blue-400 hover:text-blue-300 font-medium"
                           >
                             contato@eduardolibra.com
                           </a>
                         </div>
                       </div>

                       <div className="flex items-start space-x-4">
                         <div className="bg-purple-500/20 backdrop-blur-sm rounded-full p-3 flex-shrink-0 border border-purple-400/30">
                           <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                           </svg>
                         </div>
                         <div>
                           <h4 className="text-lg font-semibold text-white mb-1">Horário de Atendimento</h4>
                           <p className="text-blue-100">Segunda a sexta: 08h às 17h</p>
                           <p className="text-blue-100">Horário de almoço: 12h às 13h</p>
                         </div>
                       </div>
                     </div>
                 </div>

                 {/* Vantagens do Orçamento */}
                 <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                   <h4 className="text-lg font-bold text-white mb-4">Vantagens do nosso orçamento:</h4>
                   <ul className="space-y-2 text-blue-100">
                     <li className="flex items-center">
                       <span className="text-green-400 mr-2">✓</span>
                       Layout 3D do seu inflável incluso
                     </li>
                     <li className="flex items-center">
                       <span className="text-green-400 mr-2">✓</span>
                       Diversas opções de pagamento
                     </li>
                     <li className="flex items-center">
                       <span className="text-green-400 mr-2">✓</span>
                       Enviamos para todo o Brasil
                     </li>
                     <li className="flex items-center">
                       <span className="text-green-400 mr-2">✓</span>
                       Garantia de qualidade atestada
                     </li>
                   </ul>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </section>

       {/* CTA Final */}
       <section className="py-20 w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white">
         <div className="container mx-auto safe-area-mobile text-center">
           <h2 className="text-4xl md:text-5xl font-bold mb-6">
             Pronto para destacar sua marca?
           </h2>
           <p className="text-xl max-w-3xl mx-auto mb-8 opacity-90">
             Transforme sua estratégia de marketing com infláveis promocionais de alto impacto. 
             Entre em contato hoje mesmo e vamos criar algo extraordinário juntos!
           </p>
           <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <a href="https://api.whatsapp.com/send/?phone=5511975865565&text=Oi%21+Quero+destacar+minha+marca+com+infl%C3%A1veis+promocionais&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
               <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg">
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="mr-3">
                   <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                 </svg>
                 Falar no WhatsApp
               </Button>
             </a>
             <Link href="/projetos">
               <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg">
                 Ver Nosso Portfólio
               </Button>
             </Link>
           </div>
         </div>
       </section>
     </div>
     </>
   );
 }
