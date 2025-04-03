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
        'flex items-center py-3 px-4 text-xl font-medium rounded-md transition-all duration-200',
        active
          ? 'bg-primary-light text-white'
          : 'text-white/80 hover:bg-primary-light/30 hover:text-white'
      )}
      onClick={onClick}
    >
      {children}
    </Link>
  );
} 