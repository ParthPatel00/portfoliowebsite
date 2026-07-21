import type { WorkExperience } from "./types";

export const workExperiences: WorkExperience[] = [
  {
    company: "SJSU Research Foundation",
    title: "AI Engineer",
    location: "San Jose, CA",
    start: "May 2025",
    end: "May 2026",
    startYear: 2025,
    isCurrent: false,
    summary:
      "Built an AI code-review system that gives students feedback the way course staff would.",
    bullets: [
      "Fine-tuned an open-source LLM on 20,000+ graded assignment submissions with PyTorch so it reviews student code like course staff do.",
      "Deployed the model as a containerized FastAPI service with Docker across GPU nodes, keeping responses under 3 seconds even at peak submission hours.",
      "The system served 600+ students across 2 universities, giving feedback the same day they submitted.",
    ],
    stack: ["Python", "PyTorch", "FastAPI", "Docker", "AWS"],
  },
  {
    company: "Deloitte",
    title: "Software Engineer",
    location: "Montreal, Canada",
    start: "Jul 2022",
    end: "Oct 2024",
    startYear: 2022,
    isCurrent: false,
    summary:
      "Shipped national-scale data platforms for Canadian government clients in public health and finance.",
    bullets: [
      "Built an event-driven data-validation microservice on AWS (SQS, Lambda, DynamoDB) screening tens of thousands of monthly public-health submissions, cutting invalid records downstream by ~94%.",
      "Delivered a RAG chatbot with source citations over a 10,000+ document policy knowledge base, turning 15-minute manual lookups into 30-second answers.",
      "Migrated 2M+ records from on-prem Oracle to AWS RDS with zero data loss, and built FHIR ingestion pipelines on Azure Functions and Cosmos DB.",
      "Introduced Docker-based CI/CD with automated checks and monitoring, cutting release time from 2 hours to about 30 minutes.",
    ],
    stack: ["Python", "AWS", "Azure", "Docker", "DynamoDB", "React", "TypeScript"],
    award: "Deloitte Silver Dot Award",
  },
];
