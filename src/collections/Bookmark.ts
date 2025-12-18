import type { CollectionConfig } from 'payload';
import { CollectionAfterChange, CollectionAfterDelete } from '~/lib/payload';
import { SLUGS } from '~/lib/slugs';

export const Bookmark = {
  slug: SLUGS.bookmarks,
  admin: { useAsTitle: 'title' },
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
      name: 'url',
      type: 'text',
      label: 'URL',
      required: true,
    },
    {
      name: 'category',
      required: true,
      type: 'select',
      options: [
        { label: 'Tools', value: 'tools' },
        { label: 'Design', value: 'design' },
        { label: 'Articles', value: 'articles' },
        { label: 'Misc', value: 'misc' },
        { label: 'Music', value: 'music' },
        { label: 'Videos', value: 'videos' },
        { label: 'Games', value: 'games' },
      ],
    },
  ],
} satisfies CollectionConfig;
