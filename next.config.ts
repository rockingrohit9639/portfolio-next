import { withPayload } from '@payloadcms/next/withPayload';
import type { NextConfig } from 'next';

import '~/lib/env';

const nextConfig: NextConfig = {
  experimental: {
    reactCompiler: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's2.googleusercontent.com',
      },
    ],
  },
};

export default withPayload(nextConfig);
