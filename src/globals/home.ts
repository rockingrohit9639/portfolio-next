import type { GlobalConfig } from 'payload';

export const Home = {
  slug: 'home',
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
