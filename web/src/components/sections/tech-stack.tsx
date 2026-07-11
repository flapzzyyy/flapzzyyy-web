import {
  siC,
  siCplusplus,
  siCss,
  siDocker,
  siFastapi,
  siFlask,
  siGin,
  siGit,
  siGithub,
  siGo,
  siHtml5,
  siJavascript,
  siJupyter,
  siLaravel,
  siMediapipe,
  siMysql,
  siNextdotjs,
  siNumpy,
  siOpencv,
  siPandas,
  siPhp,
  siPostgresql,
  siPython,
  siPytorch,
  siRailway,
  siReact,
  siRos,
  siScikitlearn,
  siSupabase,
  siSwift,
  siTailwindcss,
  siTensorflow,
  siTypescript,
  siUbuntu,
  siVercel,
  siYolo,
  type SimpleIcon,
} from "simple-icons";

import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import { techs } from "@/data/skills";

const TECH_ICONS: Record<string, SimpleIcon> = {
  Python: siPython,
  C: siC,
  "C++": siCplusplus,
  Swift: siSwift,
  TypeScript: siTypescript,
  JavaScript: siJavascript,
  HTML: siHtml5,
  CSS: siCss,
  "Next.js": siNextdotjs,
  React: siReact,
  TailwindCSS: siTailwindcss,
  PHP: siPhp,
  Laravel: siLaravel,
  Go: siGo,
  Gin: siGin,
  Flask: siFlask,
  FastAPI: siFastapi,
  Ubuntu: siUbuntu,
  ROS2: siRos,
  OpenCV: siOpencv,
  YOLO: siYolo,
  TensorFlow: siTensorflow,
  PyTorch: siPytorch,
  "scikit-learn": siScikitlearn,
  MediaPipe: siMediapipe,
  pandas: siPandas,
  NumPy: siNumpy,
  Jupyter: siJupyter,
  MySQL: siMysql,
  PostgreSQL: siPostgresql,
  Supabase: siSupabase,
  Git: siGit,
  GitHub: siGithub,
  Docker: siDocker,
  Vercel: siVercel,
  Railway: siRailway,
};

function TechIcon({ name }: { name: string }) {
  const icon = TECH_ICONS[name];

  if (!icon) {
    return (
      <span className="font-heading text-2xl font-semibold" aria-hidden="true">
        {name.charAt(0)}
      </span>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-7 fill-current">
      <path d={icon.path} />
    </svg>
  );
}

export function TechStack() {
  return (
    <section id="stack" aria-label="Tech stack" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title="Tech stack"
          description="Tools I reach for when building, from autonomous vessels to the web."
        />

        <Stagger className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
          {techs.map((tech) => (
            <StaggerItem
              key={tech}
              className="group flex flex-col items-center gap-3 rounded-xl border border-border/60 px-4 py-6 text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:border-brand/50 hover:text-brand hover:shadow-[0_8px_24px_-12px] hover:shadow-brand/30"
            >
              <TechIcon name={tech} />
              <span className="text-xs font-medium text-foreground/80 sm:text-sm">
                {tech}
              </span>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
