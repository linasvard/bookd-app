'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/my-books', label: 'My books' },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-4">
      {links.map((link) => {
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.href}
            href={link.href}
            className={
              isActive ? 'font-semibold' : 'opacity-70 hover:opacity-100'
            }>
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
