import type { CollectionConfig } from 'payload';

export const Skill = {
  slug: 'skills',
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
