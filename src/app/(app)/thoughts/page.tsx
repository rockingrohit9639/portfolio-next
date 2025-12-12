import type { Metadata } from 'next';
import { Suspense } from 'react';
import WaveSeparator from '~/components/wave-separator';
import { SITE_URL, TWITTER_HANDLE } from '~/lib/constants';
import { generateMetadata as fetchMetadata, getThoughts } from '~/lib/queries';
import ThoughtsTabs from './_components/thoughts-tabs';

export async function generateMetadata(): Promise<Metadata> {
  const meta = await fetchMetadata('thoughts');

  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      type: 'website',
      title: meta.title,
      description: meta.description,
      url: `${SITE_URL}/thoughts`,
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
      creator: TWITTER_HANDLE,
    },
    alternates: {
      canonical: `${SITE_URL}/thoughts`,
    },
  };
}

export default async function ThoughtsPage() {
  const thoughts = await getThoughts();

  return (
    <div className="md:max-w-xl">
      <h1 className="mb-5 md:max-w-xl text-muted">
        welcome to my scratchpad: project ideas, random ramblings, and notes from the island.
      </h1>

      <WaveSeparator />

      <Suspense fallback={<ThoughtsTabsSkeleton />}>
        <ThoughtsTabs thoughts={thoughts} />
      </Suspense>
    </div>
  );
}

function ThoughtsTabsSkeleton() {
  return (
    <>
      <div className="flex flex-wrap gap-2 mb-6">
        <div className="h-9 w-16 bg-border/50 animate-pulse" />
        <div className="h-9 w-16 bg-border/50 animate-pulse" />
        <div className="h-9 w-16 bg-border/50 animate-pulse" />
        <div className="h-9 w-16 bg-border/50 animate-pulse" />
        <div className="h-9 w-16 bg-border/50 animate-pulse" />
      </div>
      <div className="space-y-4 md:space-y-6">
        <div className="h-24 bg-border/50 animate-pulse" />
        <div className="h-24 bg-border/50 animate-pulse" />
        <div className="h-24 bg-border/50 animate-pulse" />
      </div>
    </>
  );
}
