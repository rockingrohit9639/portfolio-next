import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { connection } from 'next/server';
import WaveSeparator from '~/components/wave-separator';
import { SITE_URL, TWITTER_HANDLE } from '~/lib/constants';
import { generateMetadata as fetchMetadata, getBookmarks } from '~/lib/queries';
import type { Bookmark } from '~/payload-types';

export async function generateMetadata(): Promise<Metadata> {
  const meta = await fetchMetadata('bookmarks');

  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      type: 'website',
      title: meta.title,
      description: meta.description,
      url: `${SITE_URL}/bookmarks`,
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
      creator: TWITTER_HANDLE,
    },
    alternates: {
      canonical: `${SITE_URL}/bookmarks`,
    },
  };
}

export default async function BookmarksPage() {
  await connection();
  const bookmarks = await getBookmarks();
  const groupedBookmarks = bookmarks.reduce(
    (acc, bookmark) => {
      acc[bookmark.category] = [...(acc[bookmark.category] || []), bookmark];
      return acc;
    },
    {} as Record<string, Bookmark[]>,
  );

  return (
    <div className="md:max-w-xl">
      <h1 className="mb-5 md:max-w-xl text-muted">
        my digital shelf: tools, articles, videos, and random gems i've collected along the way.
      </h1>

      <WaveSeparator />

      {Object.entries(groupedBookmarks).map(([category, bookmarks], index) => (
        <div key={category} className="mb-5 md:mb-10">
          <h2 className="mb-2 text-muted">{category}</h2>
          {bookmarks.map((bookmark) => (
            <div key={bookmark.id} className="flex items-center gap-2">
              <Image
                src={`https://s2.googleusercontent.com/s2/favicons?domain=${bookmark.url}`}
                alt={bookmark.title}
                width={20}
                height={20}
              />

              <Link
                key={bookmark.id}
                href={bookmark.url}
                target="_blank"
                className="lowercase w-max block cursor-pointer hover:underline hover:underline-offset-2"
              >
                {bookmark.title}
              </Link>
            </div>
          ))}
          {index < Object.keys(groupedBookmarks).length - 1 ? <WaveSeparator /> : null}
        </div>
      ))}
    </div>
  );
}
