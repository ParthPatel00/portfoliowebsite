import type { Hackathon } from "./types";

export const hackathons: Hackathon[] = [
  {
    name: "CalHacks 12.0",
    detail:
      "Winner among 2,100 participants. Built SantAI, a multi-agent gift-giving orchestrator wired into Stripe and Amazon.",
    href: "https://github.com/ParthPatel00/SantAI",
  },
  {
    name: "SJHacks '26",
    detail: "Winner of 2 tracks. Built WhatTheDiff, a 3D model diff tool",
    projectSlug: "whatthediff",
  },
  {
    name: "Hack for Humanity '26",
    detail: "Winner. Built Amber, a disguised DV evidence collection app",
    projectSlug: "amber",
  },
];

export const hackathonHeadline = "4 hackathon wins in 6 months";

export const industryAward = {
  name: "Deloitte Silver Dot Award",
  detail:
    "For delivery of the Public Health Agency of Canada's vaccine surveillance platform, awarded to a handful of practitioners across the practice each cycle.",
};

export const certifications = [
  "GCP PROFESSIONAL DATA ENGINEER",
  "GCP ASSOCIATE CLOUD ENGINEER",
  "AZURE DATA ENGINEER (DP-203)",
  "AZURE FUNDAMENTALS (AZ-900)",
  "AZURE DATA FUNDAMENTALS (DP-900)",
];
