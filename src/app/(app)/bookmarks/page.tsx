import Image from 'next/image';
import Link from 'next/link';
import { getBookmarks } from '~/lib/queries';
import type { Bookmark } from '~/payload-types';

export default async function BookmarksPage() {
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
      <h1 className="mb-5 md:mb-10 md:max-w-xl text-muted">
        my digital shelf: tools, articles, videos, and random gems i've collected along the way.
      </h1>

      {Object.entries(groupedBookmarks).map(([category, bookmarks]) => (
        <div key={category} className="mb-5 md:mb-10">
          <h2 className="mb-2 text-muted">{category}</h2>
          {bookmarks.map((bookmark) => (
            <div key={bookmark.id} className="flex items-center gap-2">
              <Image
                className="rounded-full"
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
        </div>
      ))}
    </div>
  );
}
