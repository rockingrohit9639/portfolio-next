import configPromise from '@payload-config';
import { getPayload } from 'payload';
import type { Thought } from '~/payload-types';

export default async function ThoughtsPage() {
  const payload = await getPayload({ config: configPromise });
  const thoughts = await payload.find({
    collection: 'thoughts',
    where: {
      isPublished: { equals: true },
    },
  });

  const groupedThoughts = thoughts.docs.reduce(
    (acc, thought) => {
      acc[thought.type] = [...(acc[thought.type] || []), thought];
      return acc;
    },
    {} as Record<string, Thought[]>,
  );

  return (
    <div className="md:max-w-xl">
      <h1 className="mb-5 md:mb-10 md:max-w-xl text-muted">
        welcome to my scratchpad: project ideas, random ramblings, and notes from the island.
      </h1>

      {Object.entries(groupedThoughts).map(([type, thoughts]) => (
        <div key={type} className="mb-5 md:mb-10">
          <h2 className="mb-2 text-muted">{type}</h2>
          {thoughts.map((thought) => (
            <div key={thought.id}>
              {thought.type === 'project' ? <p className="font-medium text-muted text-sm">{thought.title}</p> : null}
              <p>{thought.content}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
