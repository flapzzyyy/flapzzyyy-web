import { About } from "@/components/sections/about";
import { Achievements } from "@/components/sections/achievements";
import { Contact } from "@/components/sections/contact";
import { Education } from "@/components/sections/education";
import { Experience } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { TechStack } from "@/components/sections/tech-stack";

export default function HomePage() {
  return (
    <main id="main-content">
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Experience />
      <Education />
      <Achievements />
      <Contact />
    </main>
  );
}
