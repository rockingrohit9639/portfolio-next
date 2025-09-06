import type { Metadata } from 'next';
import { getMeta } from '~/lib/queries';
import type { Meta } from '~/payload-types';

export const generateMetadata = async (type: keyof Meta): Promise<Metadata> => {
  const meta = await getMeta(type);

  const group = meta[type];
  if (!group || typeof group === 'string') {
    return {
      title: 'rohit kumar saini',
    };
  }

  return {
    title: group.title,
    description: group.description,
  };
};
