import configPromise from '@payload-config';
import { getPayload } from 'payload';
import CodeBlock from '~/components/code-block';

export default async function SnippetsPage() {
  const payload = await getPayload({ config: configPromise });
  const snippets = await payload.find({
    collection: 'snippets',
    sort: 'createdAt',
  });

  return (
    <div className="md:max-w-xl">
      <h1 className="mb-5 md:mb-10 md:max-w-xl text-muted">
        a collection of my code snippets, handy commands, and quick tips i use or want to remember.
      </h1>

      <div className="space-y-5 md:space-y-10">
        {snippets.docs.map((snippet) => (
          <div key={snippet.id}>
            <h2 className="mb-1 text-muted text-sm">{snippet.title}</h2>
            <CodeBlock code={snippet.content} />
          </div>
        ))}
      </div>
    </div>
  );
}
