import type { CollectionConfig } from 'payload';
import { CollectionAfterChange } from '~/lib/payload';

export const Experience = {
  slug: 'experience',
  hooks: {
    afterChange: [CollectionAfterChange],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Title',
    },
    {
      name: 'company',
      type: 'text',
      required: true,
      label: 'Company',
    },
    {
      name: 'startDate',
      type: 'date',
      required: true,
      label: 'Start Date',
    },
    {
      name: 'endDate',
      type: 'date',
      label: 'End Date',
    },
    {
      name: 'location',
      type: 'text',
      required: true,
      label: 'Location',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
    },
  ],
} satisfies CollectionConfig;
