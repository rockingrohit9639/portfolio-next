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

      <ThoughtsTabs thoughts={thoughts} />
    </div>
  );
}
