import type { CollectionConfig } from 'payload';
import { CollectionAfterChange, CollectionAfterDelete } from '~/lib/payload';
import { SLUGS } from '~/lib/slugs';

export const Experience = {
  slug: SLUGS.experience,
  hooks: {
    afterChange: [CollectionAfterChange],
    afterDelete: [CollectionAfterDelete],
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
      name: 'url',
      type: 'text',
      label: 'Company URL',
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
