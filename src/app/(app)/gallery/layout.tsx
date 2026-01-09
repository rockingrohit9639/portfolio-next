import type { Metadata } from 'next';
import { SITE_URL, TWITTER_HANDLE } from '~/lib/constants';

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    'A visual journey through moments frozen in time. Explore my photography collection across nature, architecture, portraits, street, and abstract categories.',
  openGraph: {
    type: 'website',
    title: 'Gallery',
    description: 'A visual journey through moments frozen in time. Explore my photography collection.',
    url: `${SITE_URL}/gallery`,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gallery',
    description: 'A visual journey through moments frozen in time. Explore my photography collection.',
    creator: TWITTER_HANDLE,
  },
  alternates: {
    canonical: `${SITE_URL}/gallery`,
  },
};

export default function GalleryLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
