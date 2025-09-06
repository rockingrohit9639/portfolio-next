import { getSkills } from '~/lib/queries';
import type { Skill } from '~/payload-types';

export default async function Skills() {
  const skills = await getSkills();

  const groupedSkills = skills.reduce(
    (acc, skill) => {
      const category = skill.category;
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(skill);
      return acc;
    },
    {} as Record<string, Skill[]>,
  );

  return (
    <div>
      {Object.entries(groupedSkills).map(([category, skills]) => (
        <div key={category} className="mb-4">
          <h3 className="text-sm text-muted mb-1">{category}</h3>
          <p>{skills.map((s) => s.skill).join(', ')}</p>
        </div>
      ))}
    </div>
  );
}
