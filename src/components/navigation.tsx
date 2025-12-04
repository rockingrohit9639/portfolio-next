import Link from 'next/link';
import { cn } from '~/lib/cn';
import ThemeChanger from './theme-changer';

const LINKS: Array<{ href: string; label: string; isExternal?: boolean }> = [
  { href: '/', label: 'home' },
  { href: '/blog', label: 'blog' },
  { href: '/thoughts', label: 'thoughts' },
  { href: '/bookmarks', label: 'bookmarks' },
  { href: '/snippets', label: 'snippets' },
  {
    href: 'https://github.com/rockingrohit9639',
    label: 'github',
    isExternal: true,
  },
];

export default function Navigation() {
  return (
    <nav className="h-max md:sticky md:top-20 text-sm mt-20 md:mt-0">
      <ul className="grid gap-1 min-w-32">
        {LINKS.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              target={link.isExternal ? '_blank' : '_self'}
              className={cn(link.isExternal && 'flex items-center gap-1')}
            >
              {link.label}

              {link.isExternal ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-muted size-4"
                >
                  <title>External Link</title>
                  <path d="M15 3h6v6" />
                  <path d="M10 14 21 3" />
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                </svg>
              ) : null}
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
