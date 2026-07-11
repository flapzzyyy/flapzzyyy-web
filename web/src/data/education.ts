export type Education = {
  institution: string;
  degree: string;
  period: string;
  details?: string[];
};

export const educations: Education[] = [
  {
    institution: "Institut Teknologi Sepuluh Nopember - Surabaya, Indonesia",
    degree: "Bachelor of Informatics Engineering",
    period: "Jul 2024 - Jul 2028 (expected)",
    details: [
      "GPA 3.96/4.00.",
      "Bakti BCA Scholarship 2026 awardee - recognized for academic excellence and leadership potential.",
      "OKKBK HMTC 2025 (Event Division) - orchestrated event scheduling and timeline coordination.",
    ],
  },
  {
    institution: "St. Louis 1 Catholic Senior High School - Surabaya, Indonesia",
    degree: "Natural Science",
    period: "Jul 2021 - May 2024",
    details: [
      "Final score 92.18/100 · UTBK SNBT 2024 score of 731.",
      "OSN Physics 2024 - represented the school at the city/regency level.",
      "Class President (Grade 12), Student Council member, and Project Officer for the Grade 12 practical exam performance.",
    ],
  },
];
