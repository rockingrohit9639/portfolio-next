import { cn } from '~/lib/cn';
import { getProjects } from '~/lib/queries';
import type { Skill } from '~/payload-types';

type ProjectsProps = {
  className?: string;
};

export default async function Projects({ className }: ProjectsProps) {
  const projects = await getProjects();

  return (
    <div className={cn(className)}>
      {projects.map((project) => (
        <div key={project.id}>
          <h3 className="text-lg font-medium">{project.title}</h3>
          <p className="text-sm text-muted mb-2">
            {project.skills
              .map((s) => {
                const skill = s.skill as Skill;
                return skill.skill;
              })
              .join(', ')}
          </p>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
}
