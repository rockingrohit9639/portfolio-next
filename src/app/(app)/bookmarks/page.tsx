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
            <Link
              key={bookmark.id}
              href={bookmark.url}
              target="_blank"
              className="lowercase block border-b w-max border-muted"
            >
              {bookmark.title}
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
}
