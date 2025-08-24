import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {
    PAYLOAD_SECRET: z.string().min(1),
    DATABASE_URI: z.string(),
  },
  client: {},
  experimental__runtimeEnv: process.env,
});
