import configPromise from '@payload-config';
import { unstable_cache } from 'next/cache';
import { getPayload } from 'payload';

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
      collection: 'experience',
      depth: 1,
    });
    return experience.docs;
  },
  ['experience'],
  { tags: ['experience'] },
);

export const getProjects = unstable_cache(
  async () => {
    const payload = await getPayload({ config: configPromise });
    const projects = await payload.find({
      collection: 'projects',
      depth: 1,
    });

    return projects.docs;
  },
  ['projects'],
  { tags: ['projects'] },
);

export const getSkills = unstable_cache(
  async () => {
    const payload = await getPayload({ config: configPromise });
    const skills = await payload.find({
      collection: 'skills',
      depth: 1,
      limit: 100,
    });
    return skills.docs;
  },
  ['skills'],
  { tags: ['skills'] },
);

export const getBookmarks = unstable_cache(
  async () => {
    const payload = await getPayload({ config: configPromise });
    const bookmarks = await payload.find({
      collection: 'bookmarks',
      depth: 1,
      sort: 'createdAt',
    });
    return bookmarks.docs;
  },
  ['bookmarks'],
  { tags: ['bookmarks'] },
);

export const getSnippets = unstable_cache(
  async () => {
    const payload = await getPayload({ config: configPromise });
    const snippets = await payload.find({
      collection: 'snippets',
      depth: 1,
      sort: 'createdAt',
    });

    return snippets.docs;
  },
  ['snippets'],
  { tags: ['snippets'] },
);

export const getThoughts = unstable_cache(
  async () => {
    const payload = await getPayload({ config: configPromise });
    const thoughts = await payload.find({
      collection: 'thoughts',
      depth: 1,
      where: {
        isPublished: { equals: true },
      },
    });

    return thoughts.docs;
  },
  ['thoughts'],
  { tags: ['thoughts'] },
);
