import Link from 'next/link';
import { cn } from '@/lib/utils';

type MobileNavLinkProps = {
  href: string;
  active: boolean;
  children: React.ReactNode;
  onClick?: () => void;
};

export function MobileNavLink({ href, active, children, onClick }: MobileNavLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        'group flex items-center py-4 px-6 text-lg font-medium rounded-xl transition-all duration-300 ease-out transform',
        'hover:scale-105 hover:translate-x-2 active:scale-95',
        active
          ? 'bg-white/20 text-white shadow-lg backdrop-blur-sm border border-white/30'
          : 'text-white/80 hover:bg-white/10 hover:text-white hover:shadow-md backdrop-blur-sm'
      )}
      onClick={onClick}
    >
      <span className="relative">
        {children}
        {/* Indicador ativo */}
        {active && (
          <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
        )}
      </span>
    </Link>
  );
} 