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
    <nav className="h-max md:sticky md:top-20 text-sm">
      <ul className="grid gap-1 min-w-32">
        {LINKS.map((link) => (
          <li key={link.href}>
            <Link href={link.href} target={link.isExternal ? '_blank' : '_self'}>
              {link.label}
            </Link>
          </li>
        ))}

        <li>
          <ThemeChanger />
        </li>
      </ul>
    </nav>
  );
}
