import Link from 'next/link';
import { cn } from '~/lib/cn';
import { getProjects } from '~/lib/queries';
import type { Skill } from '~/payload-types';

type ProjectsProps = {
  className?: string;
};

export default async function Projects({ className }: ProjectsProps) {
  const projects = await getProjects();

  return (
    <div className={cn('space-y-8', className)}>
      {projects.map((project) => (
        <div key={project.id}>
          <Link className="font-medium" href={project.links.github} target="_blank">
            {project.title}
          </Link>
          <p className="text-sm text-muted mb-2">
            {project.skills
              .map((s) => {
                const skill = s.skill as Skill;
                return skill.skill;
              })
              .join(', ')}
          </p>
          <p className="text-sm text-muted">{project.description}</p>
        </div>
      ))}
    </div>
  );
}
