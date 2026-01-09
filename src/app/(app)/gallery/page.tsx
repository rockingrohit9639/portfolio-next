import type { Metadata } from 'next';
import WaveSeparator from '~/components/wave-separator';
import { SITE_URL, TWITTER_HANDLE } from '~/lib/constants';
import { getGalleryImages } from '~/lib/queries';
import GalleryGrid from './_components/gallery-grid';

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

export default async function GalleryPage() {
  const images = await getGalleryImages();

  return (
    <div className="w-full md:max-w-2xl">
      <h1 className="text-muted">a visual journey through moments frozen in time.</h1>

      <WaveSeparator />

      {images.length > 0 ? (
        <GalleryGrid images={images} />
      ) : (
        <p className="text-center py-12 text-muted mb-2">no images yet...</p>
      )}
    </div>
  );
}
