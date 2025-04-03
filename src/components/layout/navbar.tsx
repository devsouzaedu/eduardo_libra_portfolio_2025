"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { MobileNavLink } from "../mobile-nav-link";
import { DesktopNavLink } from "../desktop-nav-link";
import { Menu } from "lucide-react";

export function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="container-mobile-friendly">
      <header className="flex h-20 w-full shrink-0 items-center justify-between px-4 md:px-6">
        <div className="flex items-center">
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="flex items-center justify-center mr-4 block lg:hidden"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-full h-full border-none p-0 bg-primary">
              <div className="flex flex-col h-full p-6 bg-gradient-to-b from-primary to-primary-dark text-white">
                <Link
                  href="/"
                  className="flex items-center mb-8"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="text-2xl font-bold">Eduardo Libra</span>
                </Link>
                <div className="flex-grow">
                  <nav className="flex flex-col gap-6">
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
                <div className="mt-auto pt-6 border-t border-primary-light">
                  <a
                    href="https://api.whatsapp.com/send/?phone=5511975865565&text=Oi+Eduardo%21+Eu+vim+através+do+site%2C+gostaria+de+obter+mais+informações"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-green-500 hover:bg-green-600 text-white flex items-center justify-center rounded-md px-4 py-3 text-lg font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="mr-2">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Falar pelo WhatsApp
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
          <Link
            href="/"
            className="flex items-center gap-2 text-xl font-bold"
          >
            <span className="text-xl font-bold">Eduardo Libra</span>
          </Link>
        </div>
        <nav className="hidden lg:flex gap-6">
          <DesktopNavLink href="/" active={pathname === "/"}>
            Início
          </DesktopNavLink>
          <DesktopNavLink href="/projetos" active={pathname === "/projetos"}>
            Projetos
          </DesktopNavLink>
          <DesktopNavLink href="/cativos" active={pathname.startsWith("/cativos")}>
            Voo Cativo
          </DesktopNavLink>
          <DesktopNavLink href="/contato" active={pathname === "/contato"}>
            Contato
          </DesktopNavLink>
          <DesktopNavLink href="/blog" active={pathname === "/blog"}>
            Blog
          </DesktopNavLink>
        </nav>
        <div className="flex items-center gap-4">
          <a
            href="https://api.whatsapp.com/send/?phone=5511975865565&text=Oi+Eduardo%21+Eu+vim+através+do+site%2C+gostaria+de+obter+mais+informações"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-responsive bg-green-500 hover:bg-green-600 text-white flex items-center rounded-md px-4 py-2 text-sm font-medium shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 hidden md:flex"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="mr-2">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Falar pelo WhatsApp
          </a>
          <a
            href="https://api.whatsapp.com/send/?phone=5511975865565&text=Oi+Eduardo%21+Eu+vim+através+do+site%2C+gostaria+de+obter+mais+informações"
            target="_blank"
            rel="noopener noreferrer"
            className="block md:hidden"
          >
            <Button
              variant="outline"
              size="icon"
              className="text-green-500 border-green-500"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span className="sr-only">WhatsApp</span>
            </Button>
          </a>
        </div>
      </header>
    </div>
  );
} 