import configPromise from '@payload-config';
import { getPayload } from 'payload';

export default async function Home() {
  const payload = await getPayload({ config: configPromise });
  const home = await payload.findGlobal({ slug: 'home' });

  return (
    <div className="md:max-w-xl">
      <h1 className="md:text-xl font-medium mb-1">{home.name}</h1>
      <p className="mb-8 text-muted">{home.title}</p>

      <p className="mb-10 md:mb-20">{home.bio}</p>

      <h2 className="mb-2 text-lg md:text-xl text-muted">about</h2>
      <p className="mb-10 md:mb-20">{home.about}</p>

      <h2 className="mb-4 text-lg md:text-xl text-muted">projects</h2>
      <h3 className="text-lg font-medium">test project</h3>
      <p className="mb-1 text-muted text-sm">html, css, javascript</p>
      <ul>
        <li>something</li>
        <li>something</li>
        <li>something</li>
        <li>something</li>
        <li>something</li>
      </ul>

      <h2 className="mb-4 text-lg md:text-xl text-muted">skills</h2>
      <div>
        <p>frontend magic: react, nextjs, tailwind </p>
        <p>backend wizardry: nestjs, node, postgres </p>
        <p>miscellaneous tricks: docker, git, cms spells</p>
      </div>
    </div>
  );
}
