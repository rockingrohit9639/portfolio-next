import type { CollectionConfig } from 'payload';

export const Snippets = {
  slug: 'snippets',
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
