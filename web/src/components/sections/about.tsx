import { MapPinIcon } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { profile } from "@/data/profile";

export function About() {
  return (
    <section id="about" aria-label="About me" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading title="About me" />

        <div className="grid gap-12 lg:grid-cols-[3fr_2fr] lg:gap-16">
          <Reveal className="space-y-5 text-lg leading-relaxed text-muted-foreground">
            {profile.about.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </Reveal>

          <Reveal delay={0.1}>
            <dl className="space-y-6 rounded-xl border border-border/60 p-6">
              <div>
                <dt className="mb-1 font-mono text-xs tracking-wide text-muted-foreground uppercase">
                  Location
                </dt>
                <dd className="flex items-center gap-1.5 text-sm">
                  <MapPinIcon className="size-3.5 text-brand" />
                  {profile.location}
                </dd>
              </div>
              <div>
                <dt className="mb-1 font-mono text-xs tracking-wide text-muted-foreground uppercase">
                  Availability
                </dt>
                <dd className="text-sm">{profile.availability}</dd>
              </div>
              <div>
                <dt className="mb-1 font-mono text-xs tracking-wide text-muted-foreground uppercase">
                  Languages
                </dt>
                <dd className="text-sm">{profile.languages.join(" · ")}</dd>
              </div>
              <div>
                <dt className="mb-2 font-mono text-xs tracking-wide text-muted-foreground uppercase">
                  Interests
                </dt>
                <dd className="flex flex-wrap gap-1.5">
                  {profile.interests.map((interest) => (
                    <Badge key={interest} variant="outline">
                      {interest}
                    </Badge>
                  ))}
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>

      </div>
    </section>
  );
}
