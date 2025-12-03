import CodeBlock from '~/components/code-block';
import { generateMetadata, getSnippets } from '~/lib/queries';

export const metadata = generateMetadata('snippets');

export default async function SnippetsPage() {
  const snippets = await getSnippets();

  return (
    <div className="md:max-w-xl">
      <h1 className="mb-5 md:mb-10 md:max-w-xl text-muted">
        a collection of my code snippets, handy commands, and quick tips i use or want to remember.
      </h1>

      <div className="space-y-5 md:space-y-10">
        {snippets.map((snippet) => (
          <CodeBlock key={snippet.id} code={snippet.content} title={snippet.title} />
        ))}
      </div>
    </div>
  );
}
