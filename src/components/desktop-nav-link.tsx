import Link from 'next/link';
import { cn } from '@/lib/utils';

type DesktopNavLinkProps = {
  href: string;
  active: boolean;
  children: React.ReactNode;
};

export function DesktopNavLink({ href, active, children }: DesktopNavLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        'text-base font-medium transition-colors hover:text-blue-600',
        active
          ? 'text-blue-600'
          : 'text-gray-700'
      )}
    >
      {children}
    </Link>
  );
} 