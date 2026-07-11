// Achievements content - sourced from my resume.

export type Achievement = {
  title: string;
  event: string;
  year: string;
  rank?: string;
  /** Photo path under /public, e.g. "/achievements/irc-2026.jpg". Optional. */
  image?: string;
};

export const achievements: Achievement[] = [
  {
    title: "Grand Champion",
    event: "International Roboboat Competition (IRC)",
    year: "2026",
    rank: "1st",
    image: "/achievements/irc-2026-grand-champion.jpg",
  },
  {
    title: "1st Place - Autonomy Challenge",
    event: "International Roboboat Competition (IRC)",
    year: "2026",
    rank: "1st",
    image: "/achievements/irc-2026-autonomy.jpg",
  },
  {
    title: "1st Place - Design Documentation",
    event: "International Roboboat Competition (IRC)",
    year: "2026",
    rank: "1st",
    image: "/achievements/irc-2026-design-doc.jpg",
  },
  {
    title: "TOP Technical Design Report",
    event: "International Roboboat Competition (IRC)",
    year: "2026",
    image: "/achievements/irc-2026-tdr.jpg",
  },
  {
    title: "Grand Champion",
    event: "Kontes Kapal Indonesia (KKI)",
    year: "2025",
    rank: "1st",
    image: "/achievements/kki-2025-grand-champion.jpg",
  },
  {
    title: "4th Place - Fuel Engine Remote Control",
    event: "Kontes Kapal Indonesia (KKI)",
    year: "2025",
    image: "/achievements/kki-2025-fuel-engine.jpg",
  },
  {
    title: "Bakti BCA Scholarship Awardee",
    event: "Bank Central Asia",
    year: "2026",
    image: "/achievements/bakti-bca-2026.jpg",
  },
  {
    title: "OSN Physics - City/Regency Level",
    event: "Olimpiade Sains Nasional",
    year: "2024",
    image: "/achievements/osn-physics-2024.jpg",
  },
];
