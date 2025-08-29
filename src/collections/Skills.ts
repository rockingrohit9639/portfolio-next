import type { CollectionConfig } from 'payload';
import { CollectionAfterChange } from '~/lib/payload';

export const Skill = {
  slug: 'skills',
  hooks: {
    afterChange: [CollectionAfterChange],
  },
  admin: {
    useAsTitle: 'skill',
  },
  fields: [
    {
      name: 'skill',
      type: 'text',
      label: 'Skill',
      required: true,
    },
    {
      name: 'category',
      type: 'text',
      label: 'Category',
      required: true,
    },
  ],
} satisfies CollectionConfig;
