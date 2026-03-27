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
  // --- Consumer-facing Works ---
  {
    name: "Global E-com Platform",
    demoLink: "https://bhanunaturalproducts.com",
    tags: ["E-commerce", "MedusaJS"],
    description:
      "Developed a production-ready e-commerce platform serving 1000s of users online. Built a custom storefront and headless commerce stack using Medusa JS, an open-source Shopify alternative.",
  },
  {
    name: "Myalmamater",
    demoLink: "https://myalmamater.in",
    tags: ["Next.js", "Web"],
    description:
      "Serving 3000+ users at NIT Trichy with various campus services such as food delivery, carpooling, and more through a single web application.",
  },
  {
    name: "JEENEETards",
    demoLink: "https://jeeneetards24.vercel.app/",
    tags: ["Next.js", "Scraping"],
    description:
      "Scraped 1M+ questions off public content and prepared a one-stop solution platform for practicing JEE/NEET/BITSAT questions.",
  },
  {
    name: "Teapal",
    demoLink: "https://github.com/skndash96/tea-pal",
    tags: ["Rust", "API"],
    description:
      "Scraped JoSAA and CSAB records and made easy-to-access UI and fast API endpoints in Rust to help with engineering counseling.",
  },
  {
    name: "DispoDB",
    demoLink: "https://github.com/skndash96/dispo-db",
    tags: ["Node.js", "Bot"],
    description:
      "Developed a popular handcricket discord bot which was actively used in 100+ servers by 500+ loyal users.",
  },
  {
    name: "NITT Orientation",
    demoLink: "https://nittorientation.in",
    tags: ["Events", "Web"],
    description:
      "Built full-fledged event content management and scalable attendance taking systems for college orientation.",
  },
  {
    name: "Class Tracker",
    demoLink: "https://github.com/skndash96/class-rack",
    tags: ["Tooling", "Web"],
    description:
      "Serving NIT Trichians with Self-Attendance tracking to help students confidently meet the mandatory 75% criteria.",
  },

  // --- Technical Works ---
  {
    name: "Seawars",
    demoLink: "https://delta.nitt.edu",
    tags: ["Go", "Backend"],
    description:
      "Written in Golang, handles incoming match requests from a RabbitMQ queue and starts nsjail sandboxes for safe and efficient simulation.",
  },
  {
    name: "InstaRoll",
    demoLink: "https://github.com/skndash96/ble-insta-roll",
    tags: ["Expo", "BLE"],
    description:
      "Automatic Roll-call system using P2P Mesh (BLE extended advertising) written with Expo and native Kotlin/Swift modules.",
  },
  {
    name: "Pragyan CTF '26",
    demoLink: "https://delta.nitt.edu",
    tags: ["Security", "CTF"],
    description:
      "Crafted Web challenges involving Proxy TCP stream drain miss, request smuggling, XSS etc. for 1000+ teams including world top 10 teams from ctftime.org.",
  },
  {
    name: "AI System Caretaker",
    demoLink: "https://github.com/skndash96/system-caretaker",
    tags: ["Python", "AI"],
    description:
      "A voice-assistant daemon that proactively monitors system health and suggests LIVE changes.",
  },
  {
    name: "Resume Vibing Setup",
    demoLink: "https://github.com/skndash96/resume-vibing-tool",
    tags: ["Tooling", "Automate"],
    description:
      "Developed an automated setup for generating job description tailored resumes on the fly.",
  },
];
