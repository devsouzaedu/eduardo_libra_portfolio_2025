"use client";

import Link from 'next/link';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

export function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/80 backdrop-blur-sm dark:border-neutral-800 dark:bg-neutral-950/80">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold tracking-tight">Eduardo Libra</span>
          </Link>
          <nav className="hidden gap-6 md:flex">
            <Link 
              href="/" 
              className={cn(
                "text-sm font-medium transition-colors hover:text-neutral-900 dark:hover:text-neutral-50",
                isActive('/') ? "text-neutral-900 dark:text-neutral-50" : "text-neutral-500 dark:text-neutral-400"
              )}
            >
              Início
            </Link>
            <Link 
              href="/projetos" 
              className={cn(
                "text-sm font-medium transition-colors hover:text-neutral-900 dark:hover:text-neutral-50",
                isActive('/projetos') ? "text-neutral-900 dark:text-neutral-50" : "text-neutral-500 dark:text-neutral-400"
              )}
            >
              Projetos
            </Link>
            <Link 
              href="/blog" 
              className={cn(
                "text-sm font-medium transition-colors hover:text-neutral-900 dark:hover:text-neutral-50",
                isActive('/blog') ? "text-neutral-900 dark:text-neutral-50" : "text-neutral-500 dark:text-neutral-400"
              )}
            >
              Blog
            </Link>
            <Link 
              href="/contato" 
              className={cn(
                "text-sm font-medium transition-colors hover:text-neutral-900 dark:hover:text-neutral-50",
                isActive('/contato') ? "text-neutral-900 dark:text-neutral-50" : "text-neutral-500 dark:text-neutral-400"
              )}
            >
              Contato
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <button className="block md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
              <line x1="4" x2="20" y1="12" y2="12"></line>
              <line x1="4" x2="20" y1="6" y2="6"></line>
              <line x1="4" x2="20" y1="18" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
} 