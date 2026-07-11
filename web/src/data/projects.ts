// Projects content. Every entry follows the same shape:
// slug, name, tagline, role, year, description, features, tech,
// gallery (image + screenshots), related (github + demo).

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  role: string;
  year: string;
  description: string;
  features: string[];
  tech: string[];
  /** Card thumbnail under /public, e.g. "/projects/viz2speech.png". Falls back to a styled placeholder. */
  image?: string;
  /** Gallery carousel in the details dialog. Falls back to `image`. */
  screenshots?: { src: string; alt: string }[];
  /** Related links. */
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    slug: "autonomous-surface-vessel",
    name: "Autonomous Surface Vessel",
    tagline: "The complete autonomy stack behind two national & international championships.",
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
    tech: ["Python", "C++", "ROS2", "OpenCV", "Ubuntu", "WebRTC"],
    screenshots: [
      { src: "/projects/autonomous-surface-vessel-1.jpg", alt: "ASV on the water" },
      { src: "/projects/autonomous-surface-vessel-2.jpg", alt: "Navigation stack visualization" },
      { src: "/projects/autonomous-surface-vessel-3.jpg", alt: "Barunastra ITS team at IRC 2026" },
    ],
  },
  {
    slug: "viz2speech",
    name: "Viz2Speech",
    tagline: "Indonesian spoken image captions for the visually impaired.",
    role: "AI Researcher & Integrator",
    year: "2026",
    description:
      "An AI-driven accessibility tool that generates highly detailed, Indonesian spoken image captions for the visually impaired. The system uses an RL-optimized Vision-Language Model coupled with voice synthesis to translate physical surroundings into accurate audio descriptions.",
    features: [
      "RL-optimized Vision-Language Model captioning",
      "Indonesian natural-language voice synthesis",
      "Gradio interface for rapid interaction",
    ],
    tech: ["Python", "Vision-Language Models", "Deep Learning", "NLP", "TTS", "Gradio"],
    screenshots: [
      { src: "/projects/viz2speech-1.jpg", alt: "Viz2Speech input configuration" },
      { src: "/projects/viz2speech-2.jpg", alt: "Generated Indonesian audio captions" },
      { src: "/projects/viz2speech-3.jpg", alt: "Viz2Speech Gradio interface" },
    ],
  },
  {
    slug: "pathfinding-visualizer",
    name: "Pathfinding Visualizer",
    tagline: "Watch A*, Dijkstra's, and friends solve mazes in real time.",
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
      { src: "/projects/pathfinding-visualizer-1.jpg", alt: "Pathfinding Visualizer main grid" },
      { src: "/projects/pathfinding-visualizer-2.jpg", alt: "A* solving a generated maze" },
      { src: "/projects/pathfinding-visualizer-3.jpg", alt: "Algorithm comparison view" },
    ],
  },
  {
    slug: "block-fill-solver",
    name: "Block Fill Solver",
    tagline: "Computer vision that reads a puzzle screenshot and solves it instantly.",
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
      { src: "/projects/block-fill-solver-1.jpg", alt: "Block Fill Solver upload screen" },
      { src: "/projects/block-fill-solver-2.jpg", alt: "Detected puzzle grid from a screenshot" },
      { src: "/projects/block-fill-solver-3.jpg", alt: "Solved fill path result" },
    ],
  },
  {
    slug: "todo-list-app",
    name: "To-Do List App",
    tagline: "A Laravel task tracker built on a rigorously normalized database.",
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
      { src: "/projects/todo-list-app-1.jpg", alt: "To-Do List dashboard" },
      { src: "/projects/todo-list-app-2.jpg", alt: "Task management view" },
      { src: "/projects/todo-list-app-3.jpg", alt: "Login with GitHub and Google" },
    ],
  },
];
