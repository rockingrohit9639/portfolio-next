import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="text-sm text-muted mb-20">
      <p className="text-center">
        &copy; {new Date().getFullYear()} rohit saini · built with{' '}
        <Link href="https://nextjs.org/" target="_blank" className="underline">
          nextjs
        </Link>{' '}
        +{' '}
        <Link href="https://payloadcms.com/" target="_blank" className="underline">
          payload cms
        </Link>
      </p>
    </footer>
  );
}
