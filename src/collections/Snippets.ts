import type { CollectionConfig } from 'payload';
import { CollectionAfterChange, CollectionAfterDelete } from '~/lib/payload';
import { SLUGS } from '~/lib/slugs';

export const Snippets = {
  slug: SLUGS.snippets,
  hooks: {
    afterChange: [CollectionAfterChange],
    afterDelete: [CollectionAfterDelete],
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
