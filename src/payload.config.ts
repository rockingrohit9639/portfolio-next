import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { mongooseAdapter } from '@payloadcms/db-mongodb';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob';
import { buildConfig } from 'payload';

import { Blog } from './collections/Blog';
import { Bookmark } from './collections/Bookmark';
import { Experience } from './collections/Experience';
import { Gallery } from './collections/Gallery';
import { Media } from './collections/Media';
import { Project } from './collections/Project';
import { Skill } from './collections/Skills';
import { Snippets } from './collections/Snippets';
import { Thoughts } from './collections/Thoughts';
import { Users } from './collections/Users';
import { Home } from './globals/Home';
import { Meta } from './globals/Meta';
import { env } from './lib/env';
import { SLUGS } from './lib/slugs';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Project, Skill, Experience, Thoughts, Bookmark, Snippets, Blog, Media, Gallery],
  globals: [Meta, Home],
  editor: lexicalEditor(),
  secret: env.PAYLOAD_SECRET,
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({ url: env.DATABASE_URI }),
  plugins: [
    vercelBlobStorage({
      enabled: true,
      token: env.BLOB_READ_WRITE_TOKEN,
      collections: {
        [SLUGS.media]: {
          disablePayloadAccessControl: true,
        },
      },
    }),
  ],
});
