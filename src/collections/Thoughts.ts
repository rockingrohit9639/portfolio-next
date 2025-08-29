import type { CollectionConfig } from 'payload';
import { CollectionAfterChange } from '~/lib/payload';

export const Thoughts = {
  slug: 'thoughts',
  admin: {
    useAsTitle: 'title',
  },
  hooks: {
    afterChange: [CollectionAfterChange],
  },
  fields: [
    {
      name: 'type',
      type: 'select',
      required: true,
      options: [
        { label: 'Quote', value: 'quote' },
        { label: 'Project Idea', value: 'project' },
        { label: 'Note', value: 'note' },
        { label: 'Public', value: 'public' },
      ],
      defaultValue: 'note',
    },
    {
      name: 'title',
      type: 'text',
      required: false,
      admin: {
        description: 'Optional title for this thought (useful for project ideas).',
      },
    },
    {
      name: 'content',
      type: 'textarea',
      required: true,
    },
    {
      name: 'isPublished',
      type: 'checkbox',
      label: 'Published',
      defaultValue: true,
    },
  ],
} satisfies CollectionConfig;
