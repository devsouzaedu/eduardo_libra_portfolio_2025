"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

// Declaração de tipo para a função de conversão do Google Ads
declare global {
  interface Window {
    gtag_report_conversion: (url: string) => boolean;
  }
}

export default function PDVPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen w-full bg-gradient-to-br from-brand-black via-brand-blue-dark to-brand-blue overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-brand-yellow rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-brand-red rounded-full blur-3xl"></div>
        </div>
        
        <div className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[85vh]">
            
            {/* Conteúdo de texto */}
            <div className="text-white space-y-8 order-2 lg:order-1">
              <div className="space-y-6">
                <div className="inline-block bg-brand-red/20 backdrop-blur-sm rounded-full px-4 py-2 border border-brand-red/30">
                  <span className="text-brand-red-light font-bold">🏪 PDV PROFISSIONAL</span>
                </div>
                
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-tight">
                  <span className="block">Tenda PDV</span>
                  <span className="block text-brand-yellow">4x3 metros</span>
                  <span className="block">Armação Alumínio</span>
                </h1>
                
                {/* Imagem da tenda abaixo do título */}
                <div className="relative w-full max-w-md mx-auto my-8">
                  <div className="relative h-48 sm:h-56 lg:h-64 rounded-xl overflow-hidden shadow-2xl">
                    <Image
                      src="/tenda2.png"
                      alt="Tenda PDV 4x3 com armação de alumínio"
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>
                </div>
                
                <p className="text-xl xl:text-2xl text-gray-300 leading-relaxed">
                  Tenda ideal para usar como <strong>Ponto de Venda (PDV)</strong> para sua grande marca ou negócio. 
                  Estrutura robusta com lona resistente e armação sólida em alumínio.
                </p>
                
                <div className="grid grid-cols-2 gap-3 sm:gap-4 text-sm">
                  <div className="bg-brand-yellow/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-brand-yellow/30 hover:bg-brand-yellow/20 transition-all duration-300">
                    <div className="text-brand-yellow font-bold text-base sm:text-lg">4x3m</div>
                    <div className="text-gray-300 text-xs sm:text-sm">Dimensões ideais</div>
                  </div>
                  <div className="bg-brand-red/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-brand-red/30 hover:bg-brand-red/20 transition-all duration-300">
                    <div className="text-brand-red-light font-bold text-base sm:text-lg">Alumínio</div>
                    <div className="text-gray-300 text-xs sm:text-sm">Armação sólida</div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-green-500 hover:bg-green-600 text-white font-bold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full shadow-2xl hover:shadow-green-500/25 transition-all duration-300 hover:scale-105 animate-pulse hover:animate-none"
                  onClick={() => {
                    if (typeof window !== 'undefined' && window.gtag_report_conversion) {
                      window.gtag_report_conversion('https://api.whatsapp.com/send/?phone=5511975865565&text=Oi%21+Quero+or%C3%A7amento+para+Tenda+PDV+4x3+com+arma%C3%A7%C3%A3o+de+alum%C3%ADnio');
                    } else {
                      window.open('https://api.whatsapp.com/send/?phone=5511975865565&text=Oi%21+Quero+or%C3%A7amento+para+Tenda+PDV+4x3+com+arma%C3%A7%C3%A3o+de+alum%C3%ADnio', '_blank');
                    }
                  }}
                >
                  Solicitar Orçamento PDV →
                </Button>
                <Link href="/contato">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full transition-all duration-300 hover:scale-105">
                    Ver Mais Detalhes
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Vídeo demonstrativo */}
            <div className="relative order-1 lg:order-2">
              <div className="relative z-10 w-full max-w-2xl mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-yellow to-brand-red rounded-2xl blur-2xl opacity-30 animate-pulse"></div>
                <div className="relative bg-black/20 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                  <video 
                    className="w-full h-auto rounded-xl shadow-2xl"
                    controls
                    preload="metadata"
                    poster="/tenda2.png"
                  >
                    <source src="/tenda_video.mp4" type="video/mp4" />
                    Seu navegador não suporta vídeos HTML5.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Características Técnicas */}
      <section className="py-16 w-full bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Tenda PDV 4x3: Características Técnicas
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Desenvolvida especialmente para ser um ponto de venda eficiente e atrativo para grandes marcas
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-brand-yellow/20 rounded-full p-3 flex-shrink-0 border border-brand-yellow/30">
                  <svg className="w-6 h-6 text-brand-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Armação Sólida em Alumínio</h3>
                  <p className="text-gray-600">Estrutura robusta e leve em alumínio anodizado, resistente à corrosão e intempéries, garantindo durabilidade superior.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-brand-blue/20 rounded-full p-3 flex-shrink-0 border border-brand-blue/30">
                  <svg className="w-6 h-6 text-brand-blue-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Lona de Alta Qualidade</h3>
                  <p className="text-gray-600">Lona vinílica premium, impermeável e resistente a raios UV, com tratamento anti-mofo e fácil limpeza.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-brand-red/20 rounded-full p-3 flex-shrink-0 border border-brand-red/30">
                  <svg className="w-6 h-6 text-brand-red-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Montagem Rápida</h3>
                  <p className="text-gray-600">Sistema de encaixe inteligente permite montagem em apenas 15 minutos, sem necessidade de ferramentas especiais.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-brand-white/20 rounded-full p-3 flex-shrink-0 border border-white/30">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Ideal para Grandes Marcas</h3>
                  <p className="text-gray-600">Design profissional e acabamento premium, perfeito para representar grandes marcas em eventos e pontos de venda.</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 w-full">
                <Image 
                  src="/tenda2.png" 
                  alt="Tenda PDV 4x3 com armação de alumínio"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Especificações Técnicas */}
      <section className="py-16 w-full bg-gray-50">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Especificações da Tenda PDV 4x3
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Todas as informações técnicas da nossa tenda para ponto de venda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-brand-blue">
              <h3 className="text-lg sm:text-xl font-bold text-brand-black mb-4 flex items-center">
                <span className="text-xl sm:text-2xl mr-3">📏</span>
                Dimensões
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li><strong>Comprimento:</strong> 4 metros</li>
                <li><strong>Largura:</strong> 3 metros</li>
                <li><strong>Altura:</strong> 2,5 metros</li>
                <li><strong>Área coberta:</strong> 12m²</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-brand-yellow">
              <h3 className="text-lg sm:text-xl font-bold text-brand-black mb-4 flex items-center">
                <span className="text-xl sm:text-2xl mr-3">🔧</span>
                Estrutura
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li><strong>Material:</strong> Alumínio anodizado</li>
                <li><strong>Perfil:</strong> 40x40mm reforçado</li>
                <li><strong>Peso:</strong> Aproximadamente 45kg</li>
                <li><strong>Conexões:</strong> Encaixe rápido</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-brand-red">
              <h3 className="text-lg sm:text-xl font-bold text-brand-black mb-4 flex items-center">
                <span className="text-xl sm:text-2xl mr-3">🛡️</span>
                Cobertura
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li><strong>Material:</strong> Lona vinílica 650g/m²</li>
                <li><strong>Proteção UV:</strong> Fator 50+</li>
                <li><strong>Impermeabilidade:</strong> 100%</li>
                <li><strong>Cores:</strong> Personalização completa</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Imagens */}
      <section className="py-16 w-full bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Veja a Tenda PDV em Ação
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Confira como nossa tenda PDV 4x3 com armação de alumínio se destaca em diferentes ambientes
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="relative group overflow-hidden rounded-2xl shadow-xl">
              <Image 
                src="/tenda2.png" 
                alt="Tenda PDV 4x3 montada - vista frontal"
                width={600}
                height={400}
                className="w-full h-auto transition-transform group-hover:scale-105 duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <h3 className="text-white text-xl font-bold">Vista Frontal - Tenda PDV 4x3</h3>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-2xl shadow-xl">
              <Image 
                src="/tenda3.png" 
                alt="Tenda PDV 4x3 - detalhes da armação de alumínio"
                width={600}
                height={400}
                className="w-full h-auto transition-transform group-hover:scale-105 duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <h3 className="text-white text-xl font-bold">Detalhes da Armação em Alumínio</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Vantagens para Negócios */}
      <section className="py-12 sm:py-16 lg:py-20 w-full bg-gradient-to-br from-brand-black via-brand-blue-dark to-brand-blue text-white">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Por que Escolher Nossa Tenda PDV?
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Desenvolvida especificamente para atender às necessidades de grandes marcas e negócios
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="bg-brand-yellow/20 backdrop-blur-sm rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mx-auto mb-4 border border-brand-yellow/30">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-brand-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
                             <h3 className="text-lg sm:text-xl font-bold mb-2">Montagem Rápida</h3>
               <p className="text-xs sm:text-sm text-gray-300">15 minutos para montar completamente, sem ferramentas especiais</p>
            </div>

            <div className="text-center">
              <div className="bg-brand-blue/20 backdrop-blur-sm rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mx-auto mb-4 border border-brand-blue/30">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-brand-blue-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
                             <h3 className="text-lg sm:text-xl font-bold mb-2">Resistência Superior</h3>
               <p className="text-xs sm:text-sm text-gray-300">Armação de alumínio suporta ventos até 80 km/h com segurança</p>
            </div>

            <div className="text-center">
              <div className="bg-brand-red/20 backdrop-blur-sm rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mx-auto mb-4 border border-brand-red/30">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-brand-red-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
                             <h3 className="text-lg sm:text-xl font-bold mb-2">Personalização Total</h3>
               <p className="text-xs sm:text-sm text-gray-300">Impressão digital em alta resolução com suas cores e logotipos</p>
            </div>

            <div className="text-center">
              <div className="bg-brand-white/20 backdrop-blur-sm rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mx-auto mb-4 border border-white/30">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
                             <h3 className="text-lg sm:text-xl font-bold mb-2">Custo-Benefício</h3>
               <p className="text-xs sm:text-sm text-gray-300">Investimento que se paga rapidamente com aumento de visibilidade</p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Aplicações */}
      <section className="py-16 w-full bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Aplicações da Tenda PDV 4x3
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Versatilidade para diferentes tipos de negócios e eventos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-blue-50 rounded-xl p-6 text-center hover:bg-blue-100 transition-colors">
              <div className="text-4xl mb-4">🏪</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Lojas e Franquias</h3>
              <p className="text-gray-600">Expansão da área de vendas para calçadas e estacionamentos</p>
            </div>

            <div className="bg-green-50 rounded-xl p-6 text-center hover:bg-green-100 transition-colors">
              <div className="text-4xl mb-4">🎪</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Eventos e Feiras</h3>
              <p className="text-gray-600">Stand profissional para feiras comerciais e eventos corporativos</p>
            </div>

            <div className="bg-orange-50 rounded-xl p-6 text-center hover:bg-orange-100 transition-colors">
              <div className="text-4xl mb-4">🍔</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Food Service</h3>
              <p className="text-gray-600">Área coberta para food trucks e serviços de alimentação</p>
            </div>

            <div className="bg-purple-50 rounded-xl p-6 text-center hover:bg-purple-100 transition-colors">
              <div className="text-4xl mb-4">🚗</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Concessionárias</h3>
              <p className="text-gray-600">Área de exposição adicional para veículos e atendimento</p>
            </div>

            <div className="bg-red-50 rounded-xl p-6 text-center hover:bg-red-100 transition-colors">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Saúde e Serviços</h3>
              <p className="text-gray-600">Tendas para atendimento médico e prestação de serviços</p>
            </div>

            <div className="bg-yellow-50 rounded-xl p-6 text-center hover:bg-yellow-100 transition-colors">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Ações Promocionais</h3>
              <p className="text-gray-600">Campanhas publicitárias e lançamentos de produtos</p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção com segunda imagem */}
      <section className="py-16 w-full bg-gradient-to-r from-gray-100 to-blue-50">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="order-2 lg:order-1">
              <Image 
                src="/tenda3.png" 
                alt="Tenda PDV 4x3 - vista lateral mostrando armação de alumínio"
                width={600}
                height={400}
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
            
            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Qualidade Profissional para Sua Marca
              </h2>
              <p className="text-lg text-gray-600">
                Nossa tenda PDV 4x3 com armação de alumínio foi desenvolvida pensando nas necessidades 
                de grandes marcas que precisam de uma solução robusta, elegante e funcional.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <span className="text-green-500 mr-3">✓</span>
                  <span><strong>Estrutura profissional:</strong> Armação de alumínio de alta qualidade</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="text-green-500 mr-3">✓</span>
                  <span><strong>Lona premium:</strong> Material resistente e durável</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="text-green-500 mr-3">✓</span>
                  <span><strong>Montagem simples:</strong> Sistema de encaixe inteligente</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="text-green-500 mr-3">✓</span>
                  <span><strong>Versatilidade:</strong> Ideal para diversos tipos de negócio</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Orçamento */}
      <section className="py-12 sm:py-16 lg:py-20 w-full bg-gradient-to-br from-brand-red via-brand-yellow to-brand-blue text-white">
        <div className="w-full px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Solicite Orçamento para Sua Tenda PDV
          </h2>
          <p className="text-xl max-w-3xl mx-auto mb-8 opacity-90">
            Transforme seu negócio com uma tenda PDV 4x3 profissional. 
            Atendemos São Paulo, Barueri, Alphaville e toda Grande São Paulo com entrega rápida.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
            <Button 
              size="lg" 
              className="bg-green-500 hover:bg-green-600 text-white font-bold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full shadow-2xl hover:scale-105 transition-all duration-300 animate-pulse hover:animate-none"
              onClick={() => {
                if (typeof window !== 'undefined' && window.gtag_report_conversion) {
                  window.gtag_report_conversion('https://api.whatsapp.com/send/?phone=5511975865565&text=Oi%21+Quero+or%C3%A7amento+detalhado+para+Tenda+PDV+4x3+com+arma%C3%A7%C3%A3o+de+alum%C3%ADnio');
                } else {
                  window.open('https://api.whatsapp.com/send/?phone=5511975865565&text=Oi%21+Quero+or%C3%A7amento+detalhado+para+Tenda+PDV+4x3+com+arma%C3%A7%C3%A3o+de+alum%C3%ADnio', '_blank');
                }
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="mr-3">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Orçamento WhatsApp
            </Button>
            
            <Link href="/contato">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full transition-all duration-300 hover:scale-105">
                Formulário Detalhado
              </Button>
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto text-center">
            <div className="bg-brand-blue/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-brand-blue/30 hover:bg-brand-blue/20 transition-all duration-300">
              <div className="text-xl sm:text-2xl font-bold text-brand-blue-light mb-2">📍</div>
              <h4 className="text-sm sm:text-base font-bold mb-2">São Paulo Capital</h4>
              <p className="text-xs sm:text-sm opacity-90">Entrega e montagem em toda capital</p>
            </div>
            <div className="bg-brand-yellow/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-brand-yellow/30 hover:bg-brand-yellow/20 transition-all duration-300">
              <div className="text-xl sm:text-2xl font-bold text-brand-yellow mb-2">🌳</div>
              <h4 className="text-sm sm:text-base font-bold mb-2">Barueri e Região</h4>
              <p className="text-xs sm:text-sm opacity-90">Atendimento especializado zona oeste</p>
            </div>
            <div className="bg-brand-red/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-brand-red/30 hover:bg-brand-red/20 transition-all duration-300">
              <div className="text-xl sm:text-2xl font-bold text-brand-red-light mb-2">🏙️</div>
              <h4 className="text-sm sm:text-base font-bold mb-2">Alphaville</h4>
              <p className="text-xs sm:text-sm opacity-90">Serviço premium para empresas</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 w-full bg-gray-50">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Perguntas Frequentes - Tenda PDV
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Qual o tempo de montagem da tenda PDV 4x3?
              </h3>
              <p className="text-gray-600">
                A tenda PDV pode ser montada em aproximadamente 15 minutos por duas pessoas, 
                graças ao sistema de encaixe rápido da armação de alumínio.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                A armação de alumínio é resistente ao vento?
              </h3>
              <p className="text-gray-600">
                Sim, nossa armação de alumínio anodizado é projetada para suportar ventos de até 80 km/h 
                quando devidamente ancorada, oferecendo segurança superior.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Posso personalizar completamente a lona?
              </h3>
              <p className="text-gray-600">
                Absolutamente! Oferecemos impressão digital em alta resolução com suas cores, 
                logotipos e design personalizado na lona vinílica premium.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Vocês atendem toda região de São Paulo?
              </h3>
              <p className="text-gray-600">
                Sim, atendemos São Paulo capital, Barueri, Alphaville e toda Grande São Paulo 
                com entrega rápida e serviço de montagem opcional.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
