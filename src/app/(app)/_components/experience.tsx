import dayjs from 'dayjs';
import Link from 'next/link';
import { cn } from '~/lib/cn';
import { DATE_FORMAT } from '~/lib/constants';
import { getExperiences } from '~/lib/queries';

type ExperienceProps = {
  className?: string;
};

export default async function Experience({ className }: ExperienceProps) {
  const experiences = await getExperiences();

  return (
    <div className={cn('grid gap-4', className)}>
      {experiences.map((experience) => (
        <div key={experience.id}>
          <p>
            <span className="font-medium">{experience.title}</span>{' '}
            {experience.url ? (
              <Link href={experience.url} target="_blank" className="italic hover:underline hover:underline-offset-2">
                @{experience.company}
              </Link>
            ) : (
              <span className="italic">@{experience.company}</span>
            )}
          </p>
          <p className="text-xs text-muted lowercase mb-2">
            {dayjs(experience.startDate).format(DATE_FORMAT)} -{' '}
            {experience.endDate ? dayjs(experience.endDate).format(DATE_FORMAT) : 'Present'}
          </p>
          <p className="text-sm text-muted">{experience.description}</p>
        </div>
      ))}
    </div>
  );
}
