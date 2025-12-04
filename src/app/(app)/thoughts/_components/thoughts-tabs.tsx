'use client';

import { QuoteIcon } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { cn } from '~/lib/cn';
import type { Thought } from '~/payload-types';

const TABS = [
  { key: 'all', label: 'all' },
  { key: 'quote', label: 'quotes' },
  { key: 'project', label: 'projects' },
  { key: 'note', label: 'notes' },
  { key: 'public', label: 'random' },
] as const;

type TabKey = (typeof TABS)[number]['key'];

type ThoughtsTabsProps = {
  thoughts: Thought[];
};

export default function ThoughtsTabs({ thoughts }: ThoughtsTabsProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeTab = (searchParams.get('type') as TabKey) || 'all';

  const filteredThoughts = activeTab === 'all' ? thoughts : thoughts.filter((t) => t.type === activeTab);

  function handleTabChange(tab: TabKey) {
    if (tab === 'all') {
      router.push('/thoughts', { scroll: false });
    } else {
      router.push(`/thoughts?type=${tab}`, { scroll: false });
    }
  }

  return (
    <>
      <div className="flex flex-wrap gap-2 mb-6">
        {TABS.map((tab) => (
          <button
            key={tab.key}
            type="button"
            onClick={() => handleTabChange(tab.key)}
            className={cn(
              'px-3 py-1.5 text-sm border transition-colors cursor-pointer',
              activeTab === tab.key
                ? 'border-foreground text-foreground'
                : 'border-border text-muted hover:border-muted hover:text-foreground',
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="space-y-4 md:space-y-6">
        {filteredThoughts.length === 0 ? (
          <p className="text-muted">no thoughts here yet...</p>
        ) : (
          filteredThoughts.map((thought) => <ThoughtCard key={thought.id} thought={thought} />)
        )}
      </div>
    </>
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
