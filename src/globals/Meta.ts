import type { GlobalConfig } from 'payload';
import { GlobalAfterChange } from '~/lib/payload';

export const Meta = {
  slug: 'meta',
  hooks: {
    afterChange: [GlobalAfterChange],
  },
  fields: [
    {
      label: 'Home',
      type: 'group',
      name: 'home',
      required: true,
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          label: 'Title',
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
          label: 'Description',
        },
      ],
    },
  ],
} satisfies GlobalConfig;
