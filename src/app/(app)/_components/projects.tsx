import configPromise from '@payload-config';
import { getPayload } from 'payload';
import { cn } from '~/lib/cn';

type ProjectsProps = {
  className?: string;
};

export default async function Projects({ className }: ProjectsProps) {
  const payload = await getPayload({ config: configPromise });
  const projects = await payload.find({
    collection: 'projects',
  });

  return (
    <div className={cn(className)}>
      {projects.docs.map((project) => (
        <div key={project.id}>
          <h3 className="text-lg font-medium">{project.title}</h3>
          <p className="text-sm text-muted mb-2">{project.skills.map((s) => s.skill).join(', ')}</p>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
}
