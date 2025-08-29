import type { CollectionConfig } from 'payload';
import { CollectionAfterChange } from '~/lib/payload';

export const Snippets = {
  slug: 'snippets',
  hooks: {
    afterChange: [CollectionAfterChange],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      required: true,
    },
    {
      name: 'content',
      type: 'code',
      label: 'Content',
      required: true,
    },
  ],
} satisfies CollectionConfig;
