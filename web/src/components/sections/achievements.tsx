import { AwardIcon, TrophyIcon } from "lucide-react";
import Image from "next/image";

import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import { achievements } from "@/data/achievements";

export function Achievements() {
  return (
    <section id="achievements" aria-label="Achievements" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading title="Achievements" />

        <Stagger className="grid gap-4 sm:grid-cols-2">
          {achievements.map((achievement) => {
            const isGrandChampion = achievement.title.includes("Grand Champion");
            const Icon = isGrandChampion ? TrophyIcon : AwardIcon;

            return (
              <StaggerItem
                key={`${achievement.title}-${achievement.event}`}
                className="group rounded-xl border border-border/60 p-5 transition-all duration-300 hover:border-brand/40 hover:shadow-[0_0_32px_-12px] hover:shadow-brand/25"
              >
                {achievement.image && (
                  <div className="relative mb-4 aspect-video overflow-hidden rounded-lg border border-border/60">
                    <Image
                      src={achievement.image}
                      alt={`${achievement.title} - ${achievement.event}`}
                      fill
                      sizes="(min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                )}
                <div className="flex items-center gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-border/60 text-muted-foreground transition-colors group-hover:border-brand/50 group-hover:text-brand">
                    <Icon className="size-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="truncate font-medium">{achievement.title}</h3>
                    <p className="truncate text-sm text-muted-foreground">
                      {achievement.event} · {achievement.year}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
