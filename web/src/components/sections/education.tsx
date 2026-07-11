import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import { educations } from "@/data/education";

export function Education() {
  return (
    <section id="education" aria-label="Education" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading title="Education" />

        <Stagger className="relative space-y-12 border-l border-border/60 pl-8 md:pl-12">
          {educations.map((education) => (
            <StaggerItem key={education.institution} className="relative">
              <span
                aria-hidden="true"
                className="absolute top-1.5 -left-[2.28rem] size-2.5 rounded-full border-2 border-brand bg-background md:-left-[3.28rem]"
              />
              <p className="font-mono text-sm text-muted-foreground">
                {education.period}
              </p>
              <h3 className="mt-2 text-lg font-semibold tracking-tight">
                {education.institution}
              </h3>
              <p className="text-sm text-muted-foreground italic">{education.degree}</p>
              {education.details && (
                <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-muted-foreground">
                  {education.details.map((detail) => (
                    <li key={detail} className="flex gap-2">
                      <span
                        aria-hidden="true"
                        className="mt-2 size-1 shrink-0 rounded-full bg-brand"
                      />
                      {detail}
                    </li>
                  ))}
                </ul>
              )}
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
