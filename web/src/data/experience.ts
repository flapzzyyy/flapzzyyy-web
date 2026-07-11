export type Experience = {
  company: string;
  position: string;
  period: string;
  type: "Internship" | "Freelance" | "Organization" | "Research" | "Teaching" | "Volunteer";
  highlights: string[];
  tech?: string[];
};

export const experiences: Experience[] = [
  {
    company: "Barunastra ITS Roboboat Team",
    position: "Programmer - Navigation & Control",
    period: "Feb 2025 - Present",
    type: "Research",
    highlights: [
      "Engineered and optimized Autonomous Surface Vessel (ASV) navigation and control systems within a ROS2 and Ubuntu environment.",
      "Implemented Hybrid A* pathfinding coupled with a Stanley controller, directly contributing to 1st place at the International Roboboat Competition (IRC) 2026.",
      "Developed custom report packages transmitting real-time ASV telemetry to the RoboCommand host server during IRC 2026, and authored the Technical Design Report.",
      "Core team for Kontes Kapal Indonesia (KKI) 2025 - optimized real-time web streaming of ASV statistics with ROSbridge and WebRTC for low-latency monitoring.",
    ],
    tech: ["Python", "C++", "ROS2", "OpenCV", "WebRTC"],
  },
  {
    company: "Institut Teknologi Sepuluh Nopember",
    position: "Assistant Lecturer",
    period: "Jul 2025 - Present",
    type: "Teaching",
    highlights: [
      "Operating Systems - instruct and manage a cohort of 100 students, guide hands-on practicums, and serve as an official examiner.",
      "Data Structures - design practicum assignments and evaluate technical work and source code in C and C++ for a class of 50 students.",
      "Fundamental Programming - authored instructional materials emphasizing foundational programming logic in C.",
    ],
    tech: ["C", "C++"],
  },
  {
    company: "Schematics National Logic Competition",
    position: "Expert Staff of Technical",
    period: "Mar 2025 - Present",
    type: "Organization",
    highlights: [
      "Spearhead the design and execution of Final Round 2 game mechanics - technical workflows, asset development, and problem formulation.",
      "Engineer custom Python mini-applications to automate and support semifinal round operations.",
      "Execute rigorous testing across all competition systems to guarantee performance, fairness, and reliability.",
    ],
    tech: ["Python"],
  },
  {
    company: "3C KMK ITS",
    position: "Staff of Data Center",
    period: "Mar 2025 - Jun 2025",
    type: "Volunteer",
    highlights: [
      "Administered participant registration protocols and performed rigorous data validation for accuracy and completeness.",
      "Acted as the primary liaison for participants, resolving inquiries and sustaining transparent communication.",
    ],
  },
  {
    company: "St. Louis 1 IT FEST 2023",
    position: "Chairman",
    period: "Jul 2023 - Oct 2023",
    type: "Organization",
    highlights: [
      "Directed the planning and coordination of an IT competition involving 40 participants, from preparation to post-event reporting.",
      "Collaborated with faculty on proposals and event strategy, delegating across the organizing committee to stay on timeline.",
    ],
  },
];
