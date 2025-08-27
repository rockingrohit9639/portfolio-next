import type { CollectionConfig } from 'payload';

export const Project = {
  slug: 'projects',
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'skills',
      label: 'Skills',
      type: 'array',
      required: true,
      fields: [{ name: 'skill', type: 'relationship', relationTo: 'skills' }],
    },
    {
      name: 'description',
      label: 'Description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'links',
      label: 'Links',
      type: 'group',
      fields: [
        {
          name: 'github',
          label: 'Github',
          type: 'text',
          required: true,
        },
        {
          name: 'live',
          label: 'Live',
          type: 'text',
        },
      ],
    },
    {
      name: 'isArchive',
      label: 'Is Archive',
      type: 'checkbox',
      defaultValue: false,
    },
  ],
} satisfies CollectionConfig;
