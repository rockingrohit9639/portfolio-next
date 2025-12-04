import WaveSeparator from '~/components/wave-separator';
import { getHomePageData } from '~/lib/queries';
import Experience from './_components/experience';
import Projects from './_components/projects';
import Skills from './_components/skills';

export default async function Home() {
  const home = await getHomePageData();

  return (
    <div className="md:max-w-xl">
      <h1 className="md:text-xl font-medium mb-1">{home.name}</h1>
      <p className="mb-8 text-muted">{home.title}</p>

      <p className="mb-4">{home.bio}</p>

      <WaveSeparator />

      <h2 className="mb-2 text-lg md:text-xl text-muted">about</h2>
      <p className="mb-4">{home.about}</p>

      <WaveSeparator />

      <h2 className="mb-2 text-lg md:text-xl text-muted">experience</h2>
      <Experience className="mb-4" />

      <WaveSeparator />

      <h2 className="mb-2 text-lg md:text-xl text-muted">projects</h2>
      <Projects className="mb-4" />

      <WaveSeparator />

      <h2 className="mb-2 text-lg md:text-xl text-muted">skills</h2>
      <Skills />
    </div>
  );
}
