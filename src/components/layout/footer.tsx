"use client";

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-neutral-500 dark:text-neutral-400 md:text-left">
            &copy; {new Date().getFullYear()} Eduardo Libra. Todos os direitos reservados
          </p>
        </div>
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-neutral-500 dark:text-neutral-400 md:text-left">
            Feito com ❤️
          </p>
        </div>
      </div>
    </footer>
  );
} 