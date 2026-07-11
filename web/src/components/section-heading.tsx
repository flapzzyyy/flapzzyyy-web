import { Reveal } from "@/components/motion/reveal";

type SectionHeadingProps = {
  title: string;
  description?: string;
};

export function SectionHeading({ title, description }: SectionHeadingProps) {
  return (
    <Reveal className="mb-12 md:mb-16">
      <h2 className="font-heading text-4xl font-semibold tracking-tight text-balance md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{description}</p>
      )}
    </Reveal>
  );
}
