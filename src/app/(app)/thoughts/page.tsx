import { QuoteIcon } from 'lucide-react';
import { generateMetadata, getThoughts } from '~/lib/queries';
import type { Thought } from '~/payload-types';

export const metadata = generateMetadata('thoughts');

export default async function ThoughtsPage() {
  const thoughts = await getThoughts();

  const groupedThoughts = thoughts.reduce(
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
        <div key={type} className="mb-8 md:mb-14">
          <h2 className="mb-4 text-muted">{typeLabels[type] || type}</h2>
          <div className="space-y-4 md:space-y-6">
            {thoughts.map((thought) => (
              <ThoughtCard key={thought.id} thought={thought} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function ThoughtCard({ thought }: { thought: Thought }) {
  switch (thought.type) {
    case 'quote':
      return <QuoteCard thought={thought} />;
    case 'project':
      return <ProjectCard thought={thought} />;
    case 'note':
      return <NoteCard thought={thought} />;
    case 'public':
      return <PublicCard thought={thought} />;
    default:
      return <p>{thought.content}</p>;
  }
}

const typeLabels: Record<string, string> = {
  quote: 'quotes',
  project: 'project ideas',
  note: 'notes',
  public: 'random thoughts',
};

function QuoteCard({ thought }: { thought: Thought }) {
  return (
    <blockquote className="relative overflow-hidden border border-border bg-code-background p-5 transition-colors hover:border-muted">
      <QuoteIcon className="absolute -right-2 -bottom-2 size-14 text-border rotate-180 select-none pointer-events-none" />
      <p className="relative z-10 italic text-foreground/90 leading-relaxed">{thought.content}</p>
    </blockquote>
  );
}

function ProjectCard({ thought }: { thought: Thought }) {
  return (
    <div className="group border border-border bg-code-background p-4 transition-colors hover:border-muted">
      <div className="flex items-start gap-3">
        <span className="mt-0.5 text-muted">◆</span>
        <div className="flex-1">
          {thought.title && <p className="font-medium text-foreground mb-1.5">{thought.title}</p>}
          <p className="text-muted leading-relaxed">{thought.content}</p>
        </div>
      </div>
    </div>
  );
}

function NoteCard({ thought }: { thought: Thought }) {
  return (
    <div className="relative pl-4 before:absolute before:left-0 before:top-1 before:size-1.5 before:rounded-full before:bg-border">
      <p className="text-foreground/90 leading-relaxed">{thought.content}</p>
    </div>
  );
}

function PublicCard({ thought }: { thought: Thought }) {
  return (
    <div className="border border-dashed border-border p-4 transition-colors hover:border-muted hover:bg-code-background/50">
      <p className="text-foreground/90 leading-relaxed">{thought.content}</p>
    </div>
  );
}
