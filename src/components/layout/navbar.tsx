"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { MobileNavLink } from "../mobile-nav-link";
import { DesktopNavLink } from "../desktop-nav-link";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detectar scroll para adicionar backdrop blur
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="container-mobile-friendly">
      <header className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out
        ${isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
          : 'bg-transparent'
        }
      `}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex h-20 w-full items-center justify-between">
            {/* Logo e Menu Mobile */}
            <div className="flex items-center">
              <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className={`
                      mr-4 lg:hidden transition-all duration-200 ease-in-out
                      hover:bg-gray-100 hover:scale-105 active:scale-95
                      ${isMenuOpen ? 'rotate-90' : 'rotate-0'}
                    `}
                  >
                    <div className="relative w-6 h-6">
                      <Menu 
                        className={`
                          absolute inset-0 h-6 w-6 transition-all duration-300 ease-in-out
                          ${isMenuOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'}
                        `} 
                      />
                      <X 
                        className={`
                          absolute inset-0 h-6 w-6 transition-all duration-300 ease-in-out
                          ${isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'}
                        `} 
                      />
                    </div>
                    <span className="sr-only">Toggle Menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent 
                  side="left" 
                  className="w-full h-full border-none p-0 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800"
                >
                  <div className="flex flex-col h-full p-6 text-white relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
                      <div className="absolute bottom-20 right-10 w-40 h-40 bg-yellow-300 rounded-full blur-3xl"></div>
                    </div>
                    
                    {/* Header do Menu */}
                    <div className="relative z-10">
                      <Link
                        href="/"
                        className="flex items-center gap-3 mb-8 group"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <div className="relative w-14 h-14 transition-all duration-200 group-hover:scale-105">
                          <Image
                            src="/logo_novo_real_oficial.jpeg"
                            alt="Eduardo Libra - Infláveis Promocionais"
                            fill
                            className="object-contain rounded-lg"
                            priority
                          />
                        </div>
                        <span className="text-3xl font-bold bg-gradient-to-r from-white to-yellow-200 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-200">
                          Eduardo Libra
                        </span>
                      </Link>
                    </div>
                    
                    {/* Navigation Links */}
                    <div className="flex-grow relative z-10">
                      <nav className="flex flex-col gap-2">
                        <MobileNavLink
                          href="/"
                          active={pathname === "/"}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Início
                        </MobileNavLink>
                        <MobileNavLink
                          href="/projetos"
                          active={pathname === "/projetos"}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Projetos
                        </MobileNavLink>
                        <MobileNavLink
                          href="/cativos"
                          active={pathname.startsWith("/cativos")}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Voo Cativo
                        </MobileNavLink>
                        <MobileNavLink
                          href="/contato"
                          active={pathname === "/contato"}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Contato
                        </MobileNavLink>
                        <MobileNavLink
                          href="/blog"
                          active={pathname === "/blog"}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Blog
                        </MobileNavLink>
                      </nav>
                    </div>
                    
                    {/* WhatsApp CTA */}
                    <div className="mt-auto pt-6 border-t border-white/20 relative z-10">
                      <a
                        href="https://api.whatsapp.com/send/?phone=5511975865565&text=Oi%21+Gostaria+de+um+or%C3%A7amento+para+infl%C3%A1veis+promocionais"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          w-full bg-green-500 hover:bg-green-600 text-white 
                          flex items-center justify-center rounded-xl px-6 py-4 
                          text-lg font-semibold transition-all duration-200 
                          hover:scale-105 hover:shadow-lg active:scale-95
                          group
                        "
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="mr-3 group-hover:scale-110 transition-transform duration-200">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                        </svg>
                        Solicitar Orçamento
                      </a>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
              
              {/* Logo */}
              <Link
                href="/"
                className="flex items-center gap-2 group"
              >
                <div className="relative w-12 h-12 transition-all duration-200 group-hover:scale-105">
                  <Image
                    src="/logo_novo_real_oficial.jpeg"
                    alt="Eduardo Libra - Infláveis Promocionais"
                    fill
                    className="object-contain rounded-lg"
                    priority
                  />
                </div>
                <span className={`
                  text-2xl font-bold transition-all duration-200 group-hover:scale-105
                  ${isScrolled 
                    ? 'text-gray-900' 
                    : 'text-white drop-shadow-lg'
                  }
                `}>
                  Eduardo Libra
                </span>
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex gap-8">
              <DesktopNavLink 
                href="/" 
                active={pathname === "/"}
                className={isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-yellow-200'}
              >
                Início
              </DesktopNavLink>
              <DesktopNavLink 
                href="/projetos" 
                active={pathname === "/projetos"}
                className={isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-yellow-200'}
              >
                Projetos
              </DesktopNavLink>
              <DesktopNavLink 
                href="/cativos" 
                active={pathname.startsWith("/cativos")}
                className={isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-yellow-200'}
              >
                Voo Cativo
              </DesktopNavLink>
              <DesktopNavLink 
                href="/contato" 
                active={pathname === "/contato"}
                className={isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-yellow-200'}
              >
                Contato
              </DesktopNavLink>
              <DesktopNavLink 
                href="/blog" 
                active={pathname === "/blog"}
                className={isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-yellow-200'}
              >
                Blog
              </DesktopNavLink>
            </nav>
            
            {/* WhatsApp Buttons */}
            <div className="flex items-center gap-4">
              {/* Desktop WhatsApp Button */}
              <a
                href="https://api.whatsapp.com/send/?phone=5511975865565&text=Oi%21+Gostaria+de+um+or%C3%A7amento+para+infl%C3%A1veis+promocionais"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  hidden md:flex items-center bg-green-500 hover:bg-green-600 
                  text-white rounded-lg px-6 py-3 text-sm font-semibold 
                  transition-all duration-200 hover:scale-105 hover:shadow-lg 
                  active:scale-95 group
                "
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="mr-2 group-hover:scale-110 transition-transform duration-200">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Orçamento
              </a>
              
              {/* Mobile WhatsApp Icon */}
              <a
                href="https://api.whatsapp.com/send/?phone=5511975865565&text=Oi%21+Gostaria+de+um+or%C3%A7amento+para+infl%C3%A1veis+promocionais"
                target="_blank"
                rel="noopener noreferrer"
                className="block md:hidden"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className={`
                    transition-all duration-200 hover:scale-105 active:scale-95
                    ${isScrolled 
                      ? 'text-green-600 hover:bg-green-50' 
                      : 'text-white hover:bg-white/20'
                    }
                  `}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  <span className="sr-only">WhatsApp</span>
                </Button>
              </a>
            </div>
          </div>
        </div>
      </header>
      
      {/* Spacer para compensar o navbar fixo */}
      <div className="h-20"></div>
    </div>
  );
} 