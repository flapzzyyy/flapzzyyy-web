"use client";

import { ArrowRightIcon, DownloadIcon, MailIcon } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";

import { GitHubIcon, InstagramIcon, LinkedInIcon } from "@/components/icons";
import { buttonVariants } from "@/components/ui/button";
import { profile } from "@/data/profile";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

const EASE_OUT = [0.21, 0.47, 0.32, 0.98] as const;

function FadeUp({
  children,
  delay,
  className,
}: {
  children: React.ReactNode;
  delay: number;
  className?: string;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: EASE_OUT }}
    >
      {children}
    </motion.div>
  );
}

export function Hero() {
  return (
    <section
      id="home"
      aria-label="Introduction"
      className="relative flex min-h-svh items-center overflow-hidden"
    >
      <div className="bg-hero-grid absolute inset-0 -z-10" aria-hidden="true" />

      <div className="mx-auto w-full max-w-6xl px-6 pt-16">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto]">
        <div>
        <FadeUp delay={0}>
          <p className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-border/60 bg-background/60 px-4 py-1.5 text-sm text-muted-foreground">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-brand" />
            </span>
            {profile.availability}
          </p>
        </FadeUp>

        <FadeUp delay={0.08}>
          <p className="mb-3 font-mono text-base text-brand">{profile.greeting}</p>
        </FadeUp>

        <FadeUp delay={0.16}>
          <h1 className="font-heading max-w-4xl text-5xl font-semibold tracking-tight text-balance sm:text-6xl md:text-7xl">
            {site.name}.
          </h1>
        </FadeUp>

        <FadeUp delay={0.24}>
          <p className="font-heading mt-3 max-w-4xl text-3xl font-medium tracking-tight text-muted-foreground italic sm:text-4xl md:text-5xl">
            {profile.headline}
          </p>
        </FadeUp>

        <FadeUp delay={0.32}>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {profile.intro}
          </p>
        </FadeUp>

        <FadeUp delay={0.4} className="mt-10 flex flex-wrap items-center gap-3">
          <a href="#projects" className={cn(buttonVariants({ size: "lg" }), "px-4")}>
            View projects
            <ArrowRightIcon className="transition-transform group-hover/button:translate-x-0.5" />
          </a>
          <a
            href={site.resumeUrl}
            download
            className={cn(buttonVariants({ variant: "outline", size: "lg" }), "px-4")}
          >
            <DownloadIcon />
            Download resume
          </a>
        </FadeUp>

        <FadeUp delay={0.48} className="mt-10 flex items-center gap-5 text-muted-foreground">
          <a
            href={site.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition-colors hover:text-foreground"
          >
            <GitHubIcon className="size-5" />
          </a>
          <a
            href={site.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition-colors hover:text-foreground"
          >
            <LinkedInIcon className="size-5" />
          </a>
          <a
            href={site.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="transition-colors hover:text-foreground"
          >
            <InstagramIcon className="size-5" />
          </a>
          <a
            href={`mailto:${site.email}`}
            aria-label="Email"
            className="transition-colors hover:text-foreground"
          >
            <MailIcon className="size-5" />
          </a>
        </FadeUp>
        </div>

        <FadeUp delay={0.2} className="hidden lg:block">
          <div className="relative aspect-[4/5] w-72 overflow-hidden rounded-2xl border border-border/60 shadow-[0_8px_40px_-12px] shadow-brand/20 xl:w-80">
            <Image
              src={profile.photo}
              alt={site.name}
              fill
              priority
              sizes="(min-width: 1280px) 20rem, 18rem"
              className="object-cover object-[63%_35%]"
            />
          </div>
        </FadeUp>
        </div>
      </div>
    </section>
  );
}
