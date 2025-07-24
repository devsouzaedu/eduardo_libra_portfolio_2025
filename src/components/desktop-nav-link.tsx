import Link from 'next/link';
import { cn } from '@/lib/utils';

type DesktopNavLinkProps = {
  href: string;
  active: boolean;
  children: React.ReactNode;
  className?: string;
};

export function DesktopNavLink({ href, active, children, className }: DesktopNavLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        'text-base font-medium transition-colors duration-200',
        active
          ? 'text-blue-600'
          : className || 'text-gray-700 hover:text-blue-600'
      )}
    >
      {children}
    </Link>
  );
} 