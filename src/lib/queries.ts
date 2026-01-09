import configPromise from '@payload-config';
import { unstable_cache } from 'next/cache';
import { getPayload } from 'payload';
import type { Meta } from '~/payload-types';
import { SLUGS } from './slugs';

export const getHomePageData = unstable_cache(
  async () => {
    const payload = await getPayload({ config: configPromise });
    return await payload.findGlobal({ slug: 'home' });
  },
  ['home'],
  { tags: ['home'] },
);

export const getExperiences = unstable_cache(
  async () => {
    const payload = await getPayload({ config: configPromise });
    const experience = await payload.find({
      collection: SLUGS.experience,
      depth: 1,
      pagination: false,
    });
    return experience.docs;
  },
  [SLUGS.experience],
  { tags: [SLUGS.experience] },
);

export const getProjects = unstable_cache(
  async () => {
    const payload = await getPayload({ config: configPromise });
    const projects = await payload.find({
      collection: SLUGS.projects,
      depth: 1,
      pagination: false,
    });

    return projects.docs;
  },
  [SLUGS.projects],
  { tags: [SLUGS.projects] },
);

export const getSkills = unstable_cache(
  async () => {
    const payload = await getPayload({ config: configPromise });
    const skills = await payload.find({
      collection: SLUGS.skills,
      depth: 1,
      pagination: false,
    });
    return skills.docs;
  },
  [SLUGS.skills],
  { tags: [SLUGS.skills] },
);

export const getBookmarks = unstable_cache(
  async () => {
    const payload = await getPayload({ config: configPromise });
    const bookmarks = await payload.find({
      collection: SLUGS.bookmarks,
      depth: 1,
      sort: 'createdAt',
      pagination: false,
    });
    return bookmarks.docs;
  },
  [SLUGS.bookmarks],
  { tags: [SLUGS.bookmarks] },
);

export const getSnippets = unstable_cache(
  async () => {
    const payload = await getPayload({ config: configPromise });
    const snippets = await payload.find({
      collection: SLUGS.snippets,
      depth: 1,
      sort: 'createdAt',
      pagination: false,
    });

    return snippets.docs;
  },
  [SLUGS.snippets],
  { tags: [SLUGS.snippets] },
);

export const getThoughts = unstable_cache(
  async () => {
    const payload = await getPayload({ config: configPromise });
    const thoughts = await payload.find({
      collection: SLUGS.thoughts,
      depth: 1,
      where: {
        isPublished: { equals: true },
      },
      pagination: false,
    });

    return thoughts.docs;
  },
  [SLUGS.thoughts],
  { tags: [SLUGS.thoughts] },
);

export const getBlogPosts = unstable_cache(
  async () => {
    const payload = await getPayload({ config: configPromise });
    const posts = await payload.find({
      collection: SLUGS.blog,
      depth: 1,
      where: {
        status: { equals: 'published' },
      },
      sort: '-publishedAt',
      pagination: false,
    });

    return posts.docs;
  },
  [SLUGS.blog],
  { tags: [SLUGS.blog] },
);

export const getBlogPostBySlug = unstable_cache(
  async (slug: string) => {
    const payload = await getPayload({ config: configPromise });
    const posts = await payload.find({
      collection: SLUGS.blog,
      depth: 1,
      where: {
        slug: { equals: slug },
        status: { equals: 'published' },
      },
      limit: 1,
    });

    return posts.docs[0] || null;
  },
  [SLUGS.blog],
  { tags: [SLUGS.blog] },
);

export const generateMetadata = unstable_cache(
  async (type: keyof Meta) => {
    const payload = await getPayload({ config: configPromise });
    const meta = await payload.findGlobal({
      slug: 'meta',
      select: { [type]: true },
    });

    const group = meta[type];
    if (!group || typeof group === 'string') {
      return {
        title: 'rohit kumar saini',
        description: '',
      };
    }

    return group;
  },
  ['meta'],
  { tags: ['meta'] },
);

export const getGalleryImages = unstable_cache(
  async () => {
    const payload = await getPayload({ config: configPromise });
    const gallery = await payload.find({
      collection: SLUGS.gallery,
      depth: 2,
      where: {
        isPublished: { equals: true },
      },
      sort: 'order',
      pagination: false,
    });

    return gallery.docs;
  },
  [SLUGS.gallery],
  { tags: [SLUGS.gallery] },
);
