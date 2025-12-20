import type { Metadata } from 'next';
import { connection } from 'next/server';
import CodeBlock from '~/components/code-block';
import WaveSeparator from '~/components/wave-separator';
import { SITE_URL, TWITTER_HANDLE } from '~/lib/constants';
import { generateMetadata as fetchMetadata, getSnippets } from '~/lib/queries';

export async function generateMetadata(): Promise<Metadata> {
  const meta = await fetchMetadata('snippets');

  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      type: 'website',
      title: meta.title,
      description: meta.description,
      url: `${SITE_URL}/snippets`,
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
      creator: TWITTER_HANDLE,
    },
    alternates: {
      canonical: `${SITE_URL}/snippets`,
    },
  };
}

export default async function SnippetsPage() {
  await connection();
  const snippets = await getSnippets();

  return (
    <div className="md:max-w-xl">
      <h1 className="mb-5 md:max-w-xl text-muted">
        a collection of my code snippets, handy commands, and quick tips i use or want to remember.
      </h1>

      <WaveSeparator />

      <div className="space-y-5 md:space-y-10">
        {snippets.map((snippet) => (
          <CodeBlock key={snippet.id} code={snippet.content} title={snippet.title} />
        ))}
      </div>
    </div>
  );
}
