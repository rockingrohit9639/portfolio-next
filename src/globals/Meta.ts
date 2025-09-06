import type { Field, GlobalConfig } from 'payload';
import { GlobalAfterChange } from '~/lib/payload';

function getMetaField({ label, name }: { label: string; name: string }): Field {
  return {
    label,
    name,
    type: 'group',
    fields: [
      {
        name: 'title',
        type: 'text',
        required: true,
        label: 'Title',
      },
      {
        name: 'description',
        type: 'textarea',
        required: true,
        label: 'Description',
      },
    ],
  };
}

export const Meta = {
  slug: 'meta',
  hooks: {
    afterChange: [GlobalAfterChange],
  },
  fields: [
    getMetaField({ label: 'Home', name: 'home' }),
    getMetaField({ label: 'Thoughts', name: 'thoughts' }),
    getMetaField({ label: 'Bookmarks', name: 'bookmarks' }),
    getMetaField({ label: 'Snippets', name: 'snippets' }),
  ],
} satisfies GlobalConfig;
