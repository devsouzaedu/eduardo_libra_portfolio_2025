"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <Link
          href="/"
          className="flex items-center space-x-2 font-bold text-primary dark:text-white"
        >
          <span className="text-xl">Eduardo Libra</span>
        </Link>
        <nav className="hidden md:flex md:gap-6">
          <Link
            href="/"
            className={`text-sm font-medium transition-colors ${
              isActive("/") ? "text-primary dark:text-accent" : "text-muted-foreground hover:text-primary dark:hover:text-accent"
            }`}
          >
            Home
          </Link>
          <Link
            href="/projetos"
            className={`text-sm font-medium transition-colors ${
              isActive("/projetos") ? "text-primary dark:text-accent" : "text-muted-foreground hover:text-primary dark:hover:text-accent"
            }`}
          >
            Projetos
          </Link>
          <Link
            href="/blog"
            className={`text-sm font-medium transition-colors ${
              isActive("/blog") ? "text-primary dark:text-accent" : "text-muted-foreground hover:text-primary dark:hover:text-accent"
            }`}
          >
            Blog
          </Link>
          <Link
            href="/contato"
            className={`text-sm font-medium transition-colors ${
              isActive("/contato") ? "text-primary dark:text-accent" : "text-muted-foreground hover:text-primary dark:hover:text-accent"
            }`}
          >
            Contato
          </Link>
        </nav>
      </div>
    </header>
  );
} 