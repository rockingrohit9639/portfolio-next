import type { CollectionConfig } from 'payload';
import { CollectionAfterChange, CollectionAfterDelete } from '~/lib/payload';
import { SLUGS } from '~/lib/slugs';

export const Media = {
  slug: SLUGS.media,
  admin: {
    useAsTitle: 'alt',
    description: 'Media library for gallery images stored on Vercel Blob',
  },
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [CollectionAfterChange],
    afterDelete: [CollectionAfterDelete],
  },
  upload: {
    disableLocalStorage: true,
    mimeTypes: ['image/*'],
    imageSizes: [
      {
        name: 'thumbnail',
        width: 400,
        height: 300,
        position: 'centre',
      },
      {
        name: 'card',
        width: 768,
        height: 1024,
        position: 'centre',
      },
      {
        name: 'full',
        width: 1920,
        height: undefined,
        position: 'centre',
      },
    ],
    adminThumbnail: 'thumbnail',
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
      admin: {
        description: 'Alternative text for accessibility',
      },
    },
  ],
} satisfies CollectionConfig;
