import type { CollectionConfig } from 'payload';
import { CollectionAfterChange, CollectionAfterDelete } from '~/lib/payload';
import { SLUGS } from '~/lib/slugs';

export const Skill = {
  slug: SLUGS.skills,
  hooks: {
    afterChange: [CollectionAfterChange],
    afterDelete: [CollectionAfterDelete],
  },
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
