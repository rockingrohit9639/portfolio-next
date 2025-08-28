import { withPayload } from '@payloadcms/next/withPayload';
import type { NextConfig } from 'next';

import '~/lib/env';

const nextConfig: NextConfig = {
  experimental: {
    reactCompiler: true,
  },
};

export default withPayload(nextConfig);
