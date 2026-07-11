"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { CheckCircle2Icon, Loader2Icon, SendIcon } from "lucide-react";
import { useForm } from "react-hook-form";

import { GitHubIcon, InstagramIcon, LinkedInIcon } from "@/components/icons";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { contactSchema, sendContactMessage, type ContactPayload } from "@/lib/api";
import { site } from "@/lib/site";

export function Contact() {
  const form = useForm<ContactPayload>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", subject: "", message: "" },
  });

  const mutation = useMutation({ mutationFn: sendContactMessage });

  const onSubmit = (values: ContactPayload) => {
    mutation.mutate(values, { onSuccess: () => form.reset() });
  };

  const { errors } = form.formState;

  return (
    <section id="contact" aria-label="Contact" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title="Get in touch"
          description="Have a project in mind, a role to discuss, or just want to say hi? My inbox is always open."
        />

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="leading-relaxed text-muted-foreground">
              I&apos;m currently open to internships, freelance work, and interesting
              collaborations. The fastest way to reach me is email, and I usually reply
              within a day.
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-6 inline-block text-lg font-medium underline-offset-4 transition-colors hover:text-brand hover:underline"
            >
              {site.email}
            </a>
            <div className="mt-8 flex items-center gap-5 text-muted-foreground">
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
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              noValidate
              className="space-y-5 rounded-xl border border-border/60 p-6"
            >
              <div className="space-y-2">
                <Label htmlFor="contact-name">Name</Label>
                <Input
                  id="contact-name"
                  placeholder="Your name"
                  autoComplete="name"
                  aria-invalid={Boolean(errors.name)}
                  {...form.register("name")}
                />
                {errors.name && (
                  <p role="alert" className="text-xs text-destructive">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact-email">Email</Label>
                <Input
                  id="contact-email"
                  type="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  aria-invalid={Boolean(errors.email)}
                  {...form.register("email")}
                />
                {errors.email && (
                  <p role="alert" className="text-xs text-destructive">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact-subject">
                  Subject{" "}
                  <span className="text-muted-foreground">(optional)</span>
                </Label>
                <Input
                  id="contact-subject"
                  placeholder="What is this about?"
                  aria-invalid={Boolean(errors.subject)}
                  {...form.register("subject")}
                />
                {errors.subject && (
                  <p role="alert" className="text-xs text-destructive">
                    {errors.subject.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact-message">Message</Label>
                <Textarea
                  id="contact-message"
                  placeholder="Tell me about your project…"
                  rows={5}
                  aria-invalid={Boolean(errors.message)}
                  {...form.register("message")}
                />
                {errors.message && (
                  <p role="alert" className="text-xs text-destructive">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <Button type="submit" size="lg" className="w-full" disabled={mutation.isPending}>
                {mutation.isPending ? (
                  <Loader2Icon className="animate-spin" />
                ) : (
                  <SendIcon />
                )}
                {mutation.isPending ? "Sending…" : "Send message"}
              </Button>

              <div aria-live="polite">
                {mutation.isSuccess && (
                  <p className="flex items-center gap-2 text-sm text-brand">
                    <CheckCircle2Icon className="size-4" />
                    Message sent. I&apos;ll get back to you soon.
                  </p>
                )}
                {mutation.isError && (
                  <p role="alert" className="text-sm text-destructive">
                    {mutation.error.message}
                  </p>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
