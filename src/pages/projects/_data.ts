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
    name: "Almamater",
    demoLink: "https://myalmamater.in",
    tags: ["Next.js", "ISR"],
    description:
      "Built and scaled a student-run platform offering multiple campus services through a single web application. Developed the frontend using Next.js and implemented ISR-based caching to reduce server load and costs. Supported 2000+ monthly users and 50k+ page views under peak campus traffic.",
  },
  {
    name: "Pragyan CTF 2026 Web Chef",
    demoLink: "https://github.com/skndash96/pctf-26-writeups",
    tags: ["Web Security", "Kubernetes", "CTF"],
    description:
      "Developed advanced web exploitation challenges involving HTTP request smuggling, Connection reuse, XSS, DOM clobbering, SSRF, RCE, Next.js CVEs, and WASM memory-diffing techniques. Designed infrastructure on Google Kubernetes Engine with autoscaling, containerized challenge services, and HAProxy-based traffic routing. Supported 2,500+ active participants, maintaining stability under peak concurrent load during the live event and observed participation from many top-10 ranked global CTF players",
  },
  {
    name: "Ocean Master Pragyan Games",
    demoLink: "https://delta.nitt.edu",
    tags: ["Go", "RabbitMQ", "Backend"],
    description:
      "Built a Go-based backend to run concurrent game simulations with isolated execution environments. Designed asynchronous job processing using RabbitMQ and parallel workers for reliable match handling. Sandboxed untrusted user code using nsjail to enforce resource and security isolation. Stress-tested the system under high load and debugged race conditions and worker failures.",
  },
  {
    name: "Multi-Tenant Document Search System",
    demoLink: "",
    tags: ["Go", "React", "Python"],
    description:
      "Built a multi-tenant document processing platform with a Go backend and session authentication. Implemented Python workers for OCR and AI processing using Redis Streams. Implemented retry logic and debugged async job processing using Redis logs and Python tools. Developed a React frontend for document upload and contextual search.",
  },
  {
    name: "Custom E-commerce Platform",
    demoLink: "https://bhanunaturalproducts.com",
    tags: ["Medusa JS", "PostgreSQL", "Docker"],
    description:
      "Developed a production-ready e-commerce platform with a custom storefront and backend services. Built a headless commerce stack using Medusa JS, PostgreSQL, Redis, and Meilisearch. Deployed and maintained the system on a self-managed VPS using Docker and Nginx and it is LIVE with 1k users.",
  },
  {
    name: "InstaRoll Automated Rollcall",
    demoLink: "https://github.com/skndash96/ble-insta-roll",
    tags: ["Android", "BLE", "Networking"],
    description:
      "Built a mobile-native Android app and custom protocol for offline data transmission, reducing data exchange latency to under **50ms** using raw BLE Extended Advertising packets. Engineered a connectionless architecture bypassing traditional GATT pairing delays (**5–10s**), broadcasting custom payloads disguised as Manufacturer Data. Achieved massive concurrency with zero-friction onboarding, enabling a central Hub node to efficiently log **100+** concurrent offline devices at a rate of **40+** nodes per second.",
  },
  {
    name: "System Caretaker",
    demoLink: "https://github.com/skndash96/system-caretaker",
    tags: ["Python", "FastAPI", "AI", "Gemini LIVE"],
    description:
      "Built a multimodal, Copilot-style desktop application using Python, FastAPI, and Gemini 2.5 to proactively monitor system vitals, parse logs, and confidently execute OS-level fixes. Architected a split local-cloud data pipeline using persistent WebSockets and MsgPack to securely stream real-time audio, screenshots (Pillow), and hardware telemetry (psutil) to the AI backend. Engineered a secure remote-execution sandbox where the cloud LLM routes actions via strict JSON schemas, allowing the local daemon to safely terminate resource-hogging processes and manage system states. Integrated offline wake-word detection (pvporcupine) and adaptive Voice Activity Detection (VAD) coupled with Edge-TTS for seamless, interruptible real-time voice interactions",
  },
];
