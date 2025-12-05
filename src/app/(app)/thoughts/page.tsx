import { Suspense } from 'react';
import WaveSeparator from '~/components/wave-separator';
import { generateMetadata, getThoughts } from '~/lib/queries';
import ThoughtsTabs from './_components/thoughts-tabs';

export const metadata = generateMetadata('thoughts');

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
