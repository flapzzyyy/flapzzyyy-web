"use client";

import useEmblaCarousel from "embla-carousel-react";
import { ArrowUpRightIcon, ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { GitHubIcon } from "@/components/icons";
import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { projects, type Project } from "@/data/projects";

function DetailLabel({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="mb-2 font-mono text-xs tracking-wide text-muted-foreground uppercase">
      {children}
    </h4>
  );
}

function ScreenshotCarousel({ project }: { project: Project }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const screenshots =
    project.screenshots ??
    (project.image
      ? [{ src: project.image, alt: `${project.name} screenshot` }]
      : []);

  if (screenshots.length === 0) {
    return (
      <div className="flex aspect-video items-center justify-center rounded-lg border border-border/60 bg-gradient-to-br from-muted/60 to-muted/10">
        <div className="text-center">
          <p
            aria-hidden="true"
            className="font-heading text-4xl font-semibold text-muted-foreground/30 italic"
          >
            {project.name.charAt(0)}
          </p>
          <p className="mt-1 text-xs text-muted-foreground">Screenshots coming soon</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      <div ref={emblaRef} className="overflow-hidden rounded-lg border border-border/60">
        <div className="flex">
          {screenshots.map((shot) => (
            <div key={shot.src} className="relative aspect-video min-w-0 flex-[0_0_100%]">
              <Image
                src={shot.src}
                alt={shot.alt}
                fill
                sizes="(min-width: 640px) 36rem, 100vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      {screenshots.length > 1 && (
        <div className="absolute inset-x-2 top-1/2 flex -translate-y-1/2 justify-between">
          <Button
            variant="secondary"
            size="icon"
            className="size-8 rounded-full opacity-80"
            aria-label="Previous screenshot"
            onClick={() => emblaApi?.scrollPrev()}
          >
            <ChevronLeftIcon />
          </Button>
          <Button
            variant="secondary"
            size="icon"
            className="size-8 rounded-full opacity-80"
            aria-label="Next screenshot"
            onClick={() => emblaApi?.scrollNext()}
          >
            <ChevronRightIcon />
          </Button>
        </div>
      )}
    </div>
  );
}

function ProjectImage({ project }: { project: Project }) {
  const cover =
    project.screenshots?.[0] ??
    (project.image ? { src: project.image, alt: `${project.name} screenshot` } : null);

  if (cover) {
    return (
      <div className="relative mb-5 aspect-video overflow-hidden rounded-lg border border-border/60">
        <Image
          src={cover.src}
          alt={cover.alt}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </div>
    );
  }

  return (
    <div
      aria-hidden="true"
      className="mb-5 flex aspect-video items-center justify-center overflow-hidden rounded-lg border border-border/60 bg-gradient-to-br from-muted/60 to-muted/10"
    >
      <span className="font-heading text-6xl font-semibold text-muted-foreground/30 italic transition-colors duration-300 group-hover:text-brand/30">
        {project.name.charAt(0)}
      </span>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const [isOpen, setIsOpen] = useState(false);

  const roleAndYear = [project.role, project.year].filter(Boolean).join(" · ");

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <article
        role="button"
        tabIndex={0}
        aria-label={`View details of ${project.name}`}
        onClick={() => setIsOpen(true)}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            setIsOpen(true);
          }
        }}
        className="group flex h-full cursor-pointer flex-col rounded-xl border border-border/60 p-6 transition-all duration-300 hover:border-brand/40 hover:shadow-[0_0_32px_-12px] hover:shadow-brand/20 focus-visible:outline-2 focus-visible:outline-brand"
      >
        <ProjectImage project={project} />

        <h3 className="text-lg font-semibold tracking-tight">{project.name}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{project.tagline}</p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.tech.map((tech) => (
            <Badge key={tech} variant="outline">
              {tech}
            </Badge>
          ))}
        </div>
      </article>

      <DialogContent className="overflow-hidden p-0 sm:max-w-xl">
        <div data-lenis-prevent className="max-h-[85vh] overflow-y-auto p-8">
        <DialogHeader>
          <DialogTitle className="font-heading text-2xl">{project.name}</DialogTitle>
          {roleAndYear && <DialogDescription>{roleAndYear}</DialogDescription>}
        </DialogHeader>

        <div className="mt-2 space-y-6 text-sm">
          <p className="leading-relaxed text-muted-foreground">{project.description}</p>

          {project.features && (
            <div>
              <DetailLabel>Key features</DetailLabel>
              <ul className="list-disc space-y-1.5 pl-4 text-muted-foreground">
                {project.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>
          )}

          <div>
            <DetailLabel>Tech stack</DetailLabel>
            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <DetailLabel>Gallery</DetailLabel>
            <ScreenshotCarousel project={project} />
          </div>

          <div>
            <DetailLabel>Related</DetailLabel>
            {project.github || project.demo ? (
              <div className="flex flex-wrap gap-2">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonVariants({ variant: "outline", size: "sm" })}
                  >
                    <GitHubIcon className="size-4" />
                    GitHub
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonVariants({ variant: "outline", size: "sm" })}
                  >
                    <ArrowUpRightIcon className="size-4" />
                    Live demo
                  </a>
                )}
              </div>
            ) : (
              <p className="text-muted-foreground">Links coming soon.</p>
            )}
          </div>
        </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function Projects() {
  return (
    <section id="projects" aria-label="Projects" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title="Selected projects"
          description="A few things I've designed and built. Each one taught me something new, and every card opens the full story."
        />

        <Stagger className="grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <StaggerItem key={project.slug} className="h-full">
              <ProjectCard project={project} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
