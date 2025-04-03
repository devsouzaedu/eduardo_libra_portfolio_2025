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
        'flex items-center py-2 px-3 text-lg font-medium rounded-md transition-colors',
        active
          ? 'bg-blue-50 text-blue-600'
          : 'text-gray-700 hover:bg-gray-100'
      )}
      onClick={onClick}
    >
      {children}
    </Link>
  );
} 