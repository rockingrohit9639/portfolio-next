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
        <div key={category}>
          <h3>{category}</h3>
          <p className="text-sm text-muted mb-2">{skills.map((s) => s.skill).join(', ')}</p>
        </div>
      ))}
    </div>
  );
}
