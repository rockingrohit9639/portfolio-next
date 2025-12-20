import { revalidatePath, revalidateTag } from 'next/cache';
import type { CollectionAfterChangeHook, CollectionAfterDeleteHook, GlobalAfterChangeHook } from 'payload';
import { SLUGS } from './slugs';

// Map collection slugs to their corresponding page paths
const collectionPathMap: Record<string, string[]> = {
  [SLUGS.blog]: ['/blog'],
  [SLUGS.bookmarks]: ['/bookmarks'],
  [SLUGS.experience]: ['/'],
  [SLUGS.projects]: ['/'],
  [SLUGS.skills]: ['/'],
  [SLUGS.snippets]: ['/snippets'],
  [SLUGS.thoughts]: ['/thoughts'],
};

const globalPathMap: Record<string, string[]> = {
  home: ['/'],
  meta: ['/', '/blog', '/bookmarks', '/snippets', '/thoughts'],
};

function revalidateCollection(slug: string, docSlug?: string) {
  // Revalidate the cache tag
  revalidateTag(slug);

  // Revalidate the associated paths to clear the Full Route Cache
  const paths = collectionPathMap[slug];
  if (paths) {
    for (const path of paths) {
      revalidatePath(path);
    }
  }

  // For blog posts, also revalidate the individual post page
  if (slug === SLUGS.blog && docSlug) {
    revalidatePath(`/blog/${docSlug}`);
  }
}

function revalidateGlobal(slug: string) {
  // Revalidate the cache tag
  revalidateTag(slug);

  // Revalidate the associated paths
  const paths = globalPathMap[slug];
  if (paths) {
    for (const path of paths) {
      revalidatePath(path);
    }
  }
}

export const GlobalAfterChange: GlobalAfterChangeHook = ({ global }) => {
  revalidateGlobal(global.slug);
};

export const CollectionAfterChange: CollectionAfterChangeHook = ({ collection, doc }) => {
  // Extract slug from blog posts to revalidate their individual pages
  const docSlug = collection.slug === SLUGS.blog && doc?.slug ? String(doc.slug) : undefined;
  revalidateCollection(collection.slug, docSlug);
};

export const CollectionAfterDelete: CollectionAfterDeleteHook = ({ collection, doc }) => {
  const docSlug = collection.slug === SLUGS.blog && doc?.slug ? String(doc.slug) : undefined;
  revalidateCollection(collection.slug, docSlug);
};
