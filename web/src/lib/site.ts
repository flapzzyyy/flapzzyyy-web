export const site = {
  name: "Yoseph Kevin Hendrata",
  shortName: "Kevin",
  url: "https://flapzzyyy.vercel.app",
  description:
    "Personal portfolio of Yoseph Kevin Hendrata, an Informatics Engineering student at Institut Teknologi Sepuluh Nopember turning algorithmic logic into impactful systems.",
  email: "yosephkevinh02@gmail.com",
  resumeUrl: "/resume.pdf",
  socials: {
    github: "https://github.com/flapzzyyy",
    linkedin: "https://www.linkedin.com/in/yoseph-kevin-hendrata",
    instagram: "https://www.instagram.com/yosephkevinh02",
  },
} as const;

export const NAV_SECTIONS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "stack", label: "Stack" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
] as const;

export type SectionId = (typeof NAV_SECTIONS)[number]["id"];
