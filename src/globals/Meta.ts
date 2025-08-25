import type { GlobalConfig } from 'payload';

export const Meta = {
  slug: 'meta',
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
