"use client";

import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background/95 backdrop-blur">
      <div className="container py-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
          <div>
            <h3 className="mb-3 text-lg font-medium">Eduardo Libra</h3>
            <p className="text-muted-foreground">
              Obras de arte gigantes, Faixas, Balões de ar quente.
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-lg font-medium">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground transition-colors hover:text-primary dark:hover:text-accent"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/projetos"
                  className="text-muted-foreground transition-colors hover:text-primary dark:hover:text-accent"
                >
                  Projetos
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-muted-foreground transition-colors hover:text-primary dark:hover:text-accent"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-lg font-medium">Contato</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://api.whatsapp.com/send/?phone=5511975865565&text=Oi+Eduardo%21+Eu+vim+através+do+site%2C+gostaria+de+conversar+mais+sobre&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-primary dark:hover:text-accent"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@eduardolibra.com"
                  className="text-muted-foreground transition-colors hover:text-primary dark:hover:text-accent"
                >
                  libravelasebaloes@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-lg font-medium">Redes Sociais</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.facebook.com/eduardo.alvesdesouza.92"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-primary dark:hover:text-accent"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/eduardo__libra/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-primary dark:hover:text-accent"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>© {currentYear} 2025 Eduardo Libra. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
} 