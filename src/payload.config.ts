import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { mongooseAdapter } from '@payloadcms/db-mongodb';
import { payloadCloudPlugin } from '@payloadcms/payload-cloud';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import { buildConfig } from 'payload';

import { Experience } from './collections/Experience';
import { Project } from './collections/Project';
import { Skill } from './collections/Skills';
import { Thoughts } from './collections/Thoughts';
import { Users } from './collections/Users';
import { Home } from './globals/Home';
import { Meta } from './globals/Meta';
import { env } from './lib/env';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Project, Skill, Experience, Thoughts],
  globals: [Meta, Home],
  editor: lexicalEditor(),
  secret: env.PAYLOAD_SECRET,
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({ url: env.DATABASE_URI }),
  plugins: [payloadCloudPlugin()],
});
