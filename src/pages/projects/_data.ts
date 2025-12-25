export interface Project {
  name: string;
  demoLink: string;
  tags?: string[],
  description?: string;
  postLink?: string;
  demoLinkRel?: string;
  [key: string]: any;
}

export const projects: Project[] = [
  {
    name: "NITT Student Platform",
    demoLink: "https://myalmamater.in",
    tags: ["Next.js", "ISR", "Production"],
    description:
      "A comprehensive platform offering carpooling, a buy/sell marketplace, and an online print shop for college students.",
  },
  {
    name: "Attendance Tracker",
    demoLink: "https://github.com/skndash96/attendance-tracker",
    demoLinkRel: "noopener noreferrer",
    tags: ["React Native", "Offline-first"],
    description:
      "A mobile app to help students track attendance while handling offline data and sync.",
  },
  {
    name: "NITT Orientation '25",
    demoLink: "https://nittorientation.in",
    tags: ["Full-stack", "CMS", "Mobile"],
    description:
      "An events content management and attendance tracking system for NITT Orientation 2025.",
  },
  {
    name: "Jeeneetards",
    demoLink: "https://jeeneetards24.vercel.app",
    tags: ["Frontend", "Data-heavy"],
    description:
      "A free resource platform hosting over 1 million JEE, NEET, and BITSAT questions.",
  },
  {
    name: "YouTube AI Summarizer",
    demoLink: "https://yt-agent96.vercel.app",
    tags: ["AI", "Full-stack"],
    description:
      "A web platform that summarizes YouTube videos and generates subtitles using AI.",
  },
];
