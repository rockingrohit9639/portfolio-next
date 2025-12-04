import Link from 'next/link';
import WaveSeparator from './wave-separator';

export default function Footer() {
  return (
    <footer className="text-sm text-muted mb-10">
      <WaveSeparator />
      <p className="text-center">
        built with{' '}
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
