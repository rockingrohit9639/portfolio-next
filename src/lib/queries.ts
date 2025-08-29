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
