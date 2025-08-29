import type { GlobalConfig } from 'payload';
import { GlobalAfterChange } from '~/lib/payload';

export const Home = {
  slug: 'home',
  hooks: {
    afterChange: [GlobalAfterChange],
  },
  fields: [
    {
      name: 'name',
      label: 'Name',
      type: 'text',
      required: true,
    },
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'bio',
      label: 'Bio',
      type: 'textarea',
      required: true,
    },
    {
      name: 'about',
      label: 'About',
      type: 'textarea',
      required: true,
    },
  ],
} satisfies GlobalConfig;
