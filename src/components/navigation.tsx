import Link from 'next/link';
import ThemeChanger from './theme-changer';

const LINKS: Array<{ href: string; label: string; isExternal?: boolean }> = [
  { href: '/', label: 'home' },
  { href: '/thoughts', label: 'thoughts' },
  { href: '/motivations', label: 'motivations' },
  { href: '/bookmarks', label: 'bookmarks' },
  { href: '/now', label: 'now' },
  { href: '/notes', label: 'notes' },
  { href: 'https://github.com/rockingrohit9639', label: 'github', isExternal: true },
];

export default function Navigation() {
  return (
    <nav className="grid gap-1 h-max md:sticky md:top-20 text-sm">
      {LINKS.map((link) => (
        <Link
          href={link.href}
          key={link.href}
          target={link.isExternal ? '_blank' : '_self'}
          className="hover:underline"
        >
          {link.label}
          {link.isExternal && <span className="text-muted">↗</span>}
        </Link>
      ))}

      <ThemeChanger />
    </nav>
  );
}
