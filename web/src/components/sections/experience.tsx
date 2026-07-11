import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { experiences } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" aria-label="Experience" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading title="Experience" />

        <Stagger className="relative space-y-12 border-l border-border/60 pl-8 md:pl-12">
          {experiences.map((experience) => (
            <StaggerItem key={`${experience.company}-${experience.period}`} className="relative">
              <span
                aria-hidden="true"
                className="absolute top-1.5 -left-[2.28rem] size-2.5 rounded-full border-2 border-brand bg-background md:-left-[3.28rem]"
              />
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <p className="font-mono text-sm text-muted-foreground">
                  {experience.period}
                </p>
                <Badge variant="secondary">{experience.type}</Badge>
              </div>
              <h3 className="mt-2 text-lg font-semibold tracking-tight">
                {experience.position}
                <span className="text-muted-foreground"> · {experience.company}</span>
              </h3>
              <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-muted-foreground">
                {experience.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-2">
                    <span aria-hidden="true" className="mt-2 size-1 shrink-0 rounded-full bg-brand" />
                    {highlight}
                  </li>
                ))}
              </ul>
              {experience.tech && (
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {experience.tech.map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              )}
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
