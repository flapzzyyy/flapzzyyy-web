export type Project = {
  slug: string;
  name: string;
  role: string;
  year: string;
  description: string;
  features: string[];
  tech: string[];
  image?: string;
  screenshots?: { src: string; alt: string }[];
  github?: string;
  demo?: string;
  links?: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    slug: "autonomous-surface-vessel",
    name: "Autonomous Surface Vessel",
    role: "Programmer - Navigation & Control",
    year: "2025 - Now",
    description:
      "Developed with the Barunastra ITS Roboboat Team, this project provides the complete autonomous software stack guiding a surface vessel through complex aquatic missions. Engineered in ROS2, the system executes precise trajectories using Hybrid A* and a Stanley controller while integrating real-time telemetry and computer vision for obstacle detection.",
    features: [
      "Hybrid A* pathfinding with Stanley controller trajectory tracking",
      "Real-time telemetry reporting to the RoboCommand host server",
      "Low-latency ASV statistics streaming via ROSbridge and WebRTC",
      "Grand Champion at IRC 2026 and KKI 2025",
    ],
    tech: ["ROS2", "Ubuntu", "Python", "C++", "OpenCV"],
    screenshots: [
      { src: "/projects/autonomous-surface-vessel-1.JPG", alt: "The autonomous surface vessel on the water" },
      {
        src: "/projects/autonomous-surface-vessel-2.jpg",
        alt: "Barunastra ITS welcomed home as IRC 2026 Grand Champion",
      },
      { src: "/projects/autonomous-surface-vessel-3.jpg", alt: "Barunastra ITS team at KKI 2025" },
      { src: "/projects/autonomous-surface-vessel-4.jpg", alt: "KKI 2025 Grand Champion awarding ceremony" },
    ],
    links: [{ label: "Barunastra ITS", href: "https://barunastra-its.com" }],
  },
  {
    slug: "nilaundry",
    name: "NiLaundry",
    role: "Front-end Developer",
    year: "2026",
    description:
      "A full-stack management dashboard for a multi-branch laundry service, built as a Database Management final project. A Next.js dashboard talks to a layered Go REST API, while the core business rules live inside PostgreSQL itself through functions, stored procedures, and triggers.",
    features: [
      "Multi-branch operations: orders, couriers, customers, payments, vouchers, reviews, and notifications",
      "Go REST API with a layered handler-service-repository architecture and JWT auth",
      "Business logic enforced in PostgreSQL via PL/pgSQL functions, stored procedures, and triggers",
      "Bulk seeding scripts generating 1,000+ records for realistic testing",
    ],
    tech: ["Next.js", "Tailwind CSS", "Typescript", "Go", "PostgreSQL", "Supabase", "Docker"],
    screenshots: [
      { src: "/projects/nilaundry-1.png", alt: "NiLaundry landing page" },
      { src: "/projects/nilaundry-2.png", alt: "Login screen" },
      { src: "/projects/nilaundry-3.png", alt: "Customer dashboard with orders and vouchers" },
      { src: "/projects/nilaundry-4.png", alt: "Branch operational dashboard with recent orders and payments" },
      { src: "/projects/nilaundry-5.png", alt: "Super admin dashboard with revenue, service mix, and top branches" },
    ],
    github: "https://github.com/Arthamna/NiLaundry",
    demo: "https://its.id/m/NiLaundry",
  },
  {
    slug: "viz2speech-mobile",
    name: "Viz2Speech Mobile App",
    role: "Mobile Developer",
    year: "2026",
    description:
      "A mobile-first evolution of Viz2Speech, built as a Human-Computer Interaction final project. The React Native app points the phone camera at the world and speaks descriptions back, adding a voice-driven visual question answering mode and an interface designed around audio and haptic feedback instead of visuals.",
    features: [
      "Camera capture with spoken scene descriptions",
      "Voice-driven visual question answering (VQA) mode",
      "Accessibility-first UI: text-to-speech guidance and haptic feedback throughout",
    ],
    tech: ["React Native", "TypeScript", "Expo"],
    screenshots: [
      { src: "/projects/viz2speech-mobile-1.png", alt: "Viz2Speech logo" },
      {
        src: "/projects/viz2speech-mobile-2.png",
        alt: "App screens: camera captioning with mode selector, settings, and voice guidance help",
      },
    ],
    github: "https://github.com/Arthamna/viz2speech",
    demo: "https://github.com/Arthamna/viz2Speech/releases/download/1.0/Viz2Speech_V1.apk",
  },
  {
    slug: "viz2speech",
    name: "Viz2Speech",
    role: "AI Researcher & Integrator",
    year: "2026",
    description:
      "An AI-driven accessibility tool that generates highly detailed, Indonesian spoken image captions for the visually impaired. The system uses an RL-optimized Vision-Language Model coupled with voice synthesis to translate physical surroundings into accurate audio descriptions.",
    features: [
      "RL-optimized Vision-Language Model captioning",
      "Indonesian natural-language voice synthesis",
      "Gradio interface for rapid interaction",
    ],
    tech: ["Python", "VLM", "NLP", "Text-to-Speech", "Gradio"],
    screenshots: [
      { src: "/projects/viz2speech-1.png", alt: "Viz2Speech input configuration" },
      { src: "/projects/viz2speech-2.png", alt: "Generated Indonesian audio captions" },
      { src: "/projects/viz2speech-3.png", alt: "Viz2Speech Gradio interface" },
    ],
    github: "https://github.com/abidalfrz/Viz2Speech",
    links: [
      { label: "Medium", href: "https://medium.com/@abidalfaridzi18/e3ee49af2cd5" },
    ],
  },
  {
    slug: "pathfinding-visualizer",
    name: "Pathfinding Visualizer",
    role: "Full-stack Developer",
    year: "2026",
    description:
      "An interactive web application that dynamically maps and demonstrates the step-by-step execution of complex pathfinding algorithms. Users generate custom mazes and visually observe how different logical approaches calculate the optimal route in real time.",
    features: [
      "Custom maze generation",
      "Step-by-step algorithm execution visualization",
      "Multiple algorithms: A*, Dijkstra's, BFS, DFS, and more",
    ],
    tech: ["Python", "Flask", "HTML", "CSS", "JavaScript", "Vercel"],
    screenshots: [
      { src: "/projects/pathfinding-visualizer-1.png", alt: "Pathfinding Visualizer main grid" },
      { src: "/projects/pathfinding-visualizer-2.png", alt: "A* solving a generated maze" },
      { src: "/projects/pathfinding-visualizer-3.png", alt: "Algorithm comparison view" },
    ],
    github: "https://github.com/flapzzyyy/pathfinding-visualizer",
    demo: "https://pathfinding-visualizer-q2-daa.vercel.app",
  },
  {
    slug: "block-fill-solver",
    name: "Block Fill Solver",
    role: "Computer Vision Developer",
    year: "2025",
    description:
      "A full-stack web application that uses computer vision to automatically interpret, process, and solve visual block-fill puzzles. It extracts visual constraints from user-uploaded images and processes them through a backend algorithm to instantly generate the correct solution.",
    features: [
      "OpenCV pipeline that reads the puzzle grid straight from a screenshot",
      "Automatic detection of grid size, start position, and walkable cells",
      "Manual matrix editor for building custom puzzles",
      "Backend solver that returns the complete fill path instantly",
    ],
    tech: ["Python", "Flask", "OpenCV", "HTML", "CSS", "JavaScript", "Vercel"],
    screenshots: [
      { src: "/projects/block-fill-solver-1.png", alt: "Block Fill Solver upload screen" },
      { src: "/projects/block-fill-solver-2.png", alt: "Detected puzzle grid from a screenshot" },
      { src: "/projects/block-fill-solver-3.png", alt: "Solved fill path result" },
    ],
    github: "https://github.com/flapzzyyy/block-fill-solver",
    demo: "https://block-fill-solver.vercel.app",
  },
  {
    slug: "todo-list-app",
    name: "To-Do List App",
    role: "Backend Developer & Database Architect",
    year: "2025",
    description:
      "A comprehensive To-Do List web application built with the Laravel framework on a rigorously normalized database structure. It serves as a highly functional task-tracking system designed with strict data integrity rules to prevent logical anomalies.",
    features: [
      "Task and category management with status tracking",
      "Dashboard summarizing not started, in progress, and completed tasks",
      "Rigorously normalized MySQL schema with strict integrity rules",
      "Authentication with GitHub and Google sign-in",
    ],
    tech: ["PHP", "Laravel", "MySQL", "Docker", "Railway"],
    screenshots: [
      { src: "/projects/todo-list-app-1.png", alt: "To-Do List dashboard" },
      { src: "/projects/todo-list-app-2.png", alt: "Task management view" },
      { src: "/projects/todo-list-app-3.png", alt: "Login with GitHub and Google" },
      { src: "/projects/todo-list-app-4.png", alt: "Category management view" },
    ],
    github: "https://github.com/flapzzyyy/mid-webpro-d-2025",
  },
];
