import type { CollectionConfig } from 'payload';
import { CollectionAfterChange, CollectionAfterDelete } from '~/lib/payload';
import { SLUGS } from '~/lib/slugs';

export const Gallery = {
  slug: SLUGS.gallery,
  labels: {
    singular: 'Gallery Image',
    plural: 'Gallery Images',
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'aspectRatio', 'isPublished'],
    description: 'Gallery images organized by category',
  },
  hooks: {
    afterChange: [CollectionAfterChange],
    afterDelete: [CollectionAfterDelete],
  },
  fields: [
    {
      name: 'image',
      type: 'upload',
      relationTo: SLUGS.media,
      required: true,
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      admin: {
        description: 'Title/caption for the image',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      admin: {
        description: 'Optional description for the image (shown in lightbox)',
      },
    },
    {
      name: 'category',
      type: 'select',
      required: true,
      options: [
        { label: 'Nature', value: 'nature' },
        { label: 'Architecture', value: 'architecture' },
        { label: 'Portraits', value: 'portraits' },
        { label: 'Street', value: 'street' },
        { label: 'Abstract', value: 'abstract' },
        { label: 'Mountains', value: 'mountains' },
        { label: 'Misc', value: 'misc' },
      ],
      admin: {
        description: 'Category for filtering in the gallery',
      },
    },
    {
      name: 'aspectRatio',
      type: 'select',
      required: true,
      defaultValue: 'landscape',
      options: [
        { label: 'Portrait (3:4)', value: 'portrait' },
        { label: 'Landscape (4:3)', value: 'landscape' },
        { label: 'Square (1:1)', value: 'square' },
      ],
      admin: {
        description: 'Aspect ratio for gallery display',
      },
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 0,
      admin: {
        description: 'Order for sorting (lower numbers appear first)',
      },
    },
    {
      name: 'isPublished',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        description: 'Only published images appear in the gallery',
      },
    },
  ],
} satisfies CollectionConfig;
