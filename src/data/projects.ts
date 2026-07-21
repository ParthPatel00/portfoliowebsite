import type { Project } from "./types";

export const projects: Project[] = [
  {
    slug: "tenmunches",
    name: "TenMunches",
    tagline: "Food discovery ranked by what reviewers actually say.",
    description:
      "A live food discovery site surfacing the top 10 places to eat and drink in San Francisco across 20 curated categories, ranked by review sentiment, not raw star averages.",
    howItWorks:
      "A Python NLP pipeline pulls thousands of Google reviews weekly via the Places API, scores sentiment, extracts real testimonials, and publishes rankings to a static React frontend through a GitHub Actions cron. Zero cold starts, near-zero hosting cost.",
    impact: ["400+ USERS", "20 CATEGORIES", "WEEKLY AUTO-REFRESH"],
    stack: ["React", "TypeScript", "Python", "NLP", "MongoDB Atlas", "GitHub Actions", "Cloudinary"],
    links: {
      live: "https://ten-munches.vercel.app",
      github: "https://github.com/ParthPatel00/TenMunches",
    },
    media: { type: "image", src: "/projects/tenmunches.webp", alt: "TenMunches, SF food discovery site" },
    era: "featured",
  },
  {
    slug: "fuse",
    name: "Fuse",
    tagline: "A C++ ML compiler that beats PyTorch on CPU inference.",
    description:
      "Takes a computation graph, fuses operators, and emits native x86/AArch64 machine code via LLVM IR and OrcJIT, eliminating Python dispatch latency and intermediate tensor allocation.",
    howItWorks:
      "Chains of element-wise ops collapse into single auto-vectorized loops; matmul epilogues fuse into one kernel; liveness analysis reuses buffers at compile time so the hot path makes zero heap allocations.",
    impact: ["1.9–3.3× FASTER THAN NUMPY / PYTORCH", "3× LESS MEMORY", "0 HOT-PATH HEAP ALLOCS"],
    stack: ["C++", "LLVM", "OrcJIT", "NEON/AVX2", "Python DSL"],
    links: { github: "https://github.com/ParthPatel00/Fuse" },
    media: { type: "bench" },
    era: "featured",
  },
  {
    slug: "scout",
    name: "Scout",
    tagline: "Search your codebase by what code does, not what it says.",
    description:
      "A semantic code search CLI written in Rust. One command lands you at the exact line in your editor. No cloud, no API keys, no Python runtime, a single binary.",
    howItWorks:
      "Runs local embedding-based search over 8 languages, ships prebuilt binaries for macOS, Linux, and Windows, and integrates with Claude Code as an MCP server.",
    impact: ["8 LANGUAGES", "SINGLE BINARY, FULLY LOCAL", "MCP INTEGRATION"],
    stack: ["Rust", "Embeddings", "CLI", "MCP"],
    links: { github: "https://github.com/ParthPatel00/scout" },
    media: { type: "terminal" },
    era: "featured",
  },
  {
    slug: "quizmaster",
    name: "QuizMaster",
    tagline: "Upload a PDF. Get a personalized quiz in seconds.",
    description:
      "A live web app that turns any uploaded PDF (lecture notes, textbooks, training manuals) into a personalized quiz with auto-grading, quiz history, and retakes.",
    howItWorks:
      "Uploads land in S3 and trigger a Lambda that prompts Gemini for a structured quiz; the frontend polls via API Gateway until it's ready. Fully serverless, so idle cost is near zero while traffic spikes are absorbed.",
    impact: ["QUIZ IN ~5 SECONDS", "SERVERLESS · NEAR-ZERO IDLE COST", "AUTO-GRADING + HISTORY"],
    stack: ["React", "TypeScript", "AWS Lambda", "S3", "DynamoDB", "Gemini API", "Firebase Auth"],
    links: {
      live: "https://quiz-master-parth-patels-projects-e3c16659.vercel.app",
      github: "https://github.com/ParthPatel00/QuizMaster",
    },
    media: { type: "image", src: "/projects/quizmaster.webp", alt: "QuizMaster, AI quiz generator" },
    era: "featured",
  },
  {
    slug: "whatthediff",
    name: "WhatTheDiff",
    tagline: "Git diff, but for 3D models.",
    description:
      "Drag-drop two .glb files and instantly see what changed, visually and structurally: side-by-side synced cameras, ghost overlays, and automated 6-angle diff percentages. Built for game and design teams; runs entirely on-device.",
    howItWorks:
      "Three.js renders both models with synchronized cameras; gltf-transform walks the scene graphs for structural stats; a pixel-diff pass scores changes per angle. No server, no uploads.",
    impact: ["3 VIEW MODES", "100% ON-DEVICE", "BUILT IN A WEEKEND"],
    stack: ["Next.js", "TypeScript", "Three.js", "gltf-transform", "Zustand", "Tailwind"],
    links: { github: "https://github.com/ParthPatel00/WhatTheDiff" },
    media: { type: "image", src: "/projects/whatthediff.webp", alt: "WhatTheDiff, 3D model diff tool" },
    award: "WINNER · SJHACKS 2026",
    era: "featured",
  },
  {
    slug: "amber",
    name: "Amber",
    tagline: "A meditation timer that's secretly a lifeline.",
    description:
      "A domestic-violence evidence collection app disguised as a meditation timer. Behind the disguise: an encrypted vault that preserves GPS and timestamp metadata for legal use, automated calls to trusted contacts, and a dead-man's-switch check-in with tiered escalation.",
    howItWorks:
      "Evidence is encrypted and hashed on capture with metadata preserved for admissibility; missed check-ins trigger escalating alerts to trusted contacts.",
    impact: ["ENCRYPTED EVIDENCE VAULT", "DEAD-MAN'S-SWITCH CHECK-INS", "COURT-READY METADATA"],
    stack: ["React Native", "Expo", "TypeScript", "Supabase", "SecureStore + Crypto"],
    links: { github: "https://github.com/ParthPatel00/Amber" },
    media: {
      type: "image",
      src: "/projects/amber.webp",
      srcSet: ["/projects/amber.webp", "/projects/amber-2.webp", "/projects/amber-3.webp"],
      alt: "Amber, evidence collection app disguised as a meditation timer",
    },
    award: "WINNER · HACK FOR HUMANITY 2026",
    era: "featured",
  },
  {
    slug: "mnist-nn",
    name: "Number Recognition Neural Net",
    tagline: "A neural network built from scratch (forward pass, backprop, and all) for MNIST digits.",
    description: "",
    impact: [],
    stack: ["Python", "NumPy"],
    links: {
      github: "https://github.com/ParthPatel00/Number-Recognition-using-Artificial-Neural-Network-Classifier",
    },
    media: { type: "image" },
    era: "earlier",
  },
  {
    slug: "amazon-reviews",
    name: "Amazon Review Classification",
    tagline: "Sentiment classification on Amazon book reviews with TF-IDF, SVM, and logistic regression.",
    description: "",
    impact: [],
    stack: ["Python", "scikit-learn"],
    links: { github: "https://github.com/ParthPatel00/Amazon-Book-Customer-Review-Classification" },
    media: { type: "image" },
    era: "earlier",
  },
  {
    slug: "neighborhood-ml",
    name: "Neighborhood Business Classification",
    tagline: "Predicting neighborhood business types from geolocation data with clustering models.",
    description: "",
    impact: [],
    stack: ["Python", "scikit-learn"],
    links: { github: "https://github.com/ParthPatel00/Neighborhood-Business-Classification-Model" },
    media: { type: "image" },
    era: "earlier",
  },
];

export const featuredProjects = projects.filter((p) => p.era === "featured");
export const earlierProjects = projects.filter((p) => p.era === "earlier");
