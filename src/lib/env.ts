import { createEnv } from '@t3-oss/env-nextjs';
import * as z from "zod/v4"

export const env = createEnv({
  server: {
    PAYLOAD_SECRET: z.string().min(1),
    DATABASE_URI: z.string(),
  },
  client: {
    NEXT_PUBLIC_SITE_URL: z.url().optional(),
  },
  experimental__runtimeEnv: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  },
});
