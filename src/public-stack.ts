type StackArea = {
  area: string;
  technologies: string[];
  publicScope: string;
};

type ProductCapability = {
  name: string;
  category: "mobile" | "backend" | "ai" | "subscription" | "compliance" | "release";
  implementationVisibility: "described only" | "proprietary";
};

export const practiprepStack: StackArea[] = [
  {
    area: "Mobile application",
    technologies: ["React Native", "Expo", "Expo Router", "TypeScript"],
    publicScope:
      "The public repository documents the mobile stack at product level. Production screens, navigation logic, and native configuration remain private.",
  },
  {
    area: "State and learning progress",
    technologies: ["Zustand", "local persistence", "SQLite-based learning state"],
    publicScope:
      "The showcase describes persisted progress and local learning state without publishing reducers, stores, migrations, or question data.",
  },
  {
    area: "Backend platform",
    technologies: ["Supabase", "PostgreSQL", "Supabase Auth", "Row Level Security"],
    publicScope:
      "The repository mentions the backend platform without exposing table schemas, policies, edge functions, service keys, or production identifiers.",
  },
  {
    area: "Server workflows",
    technologies: ["Supabase Edge Functions", "server-side entitlement sync", "usage tracking"],
    publicScope:
      "Only the existence of protected backend workflows is described. Function source code and deployment configuration are private.",
  },
  {
    area: "AI learning assistant",
    technologies: ["Anthropic Claude API", "protected backend calls", "voice-assisted prompts"],
    publicScope:
      "The AI layer is represented as a product capability. Prompts, moderation rules, request handling, and token controls are not included.",
  },
  {
    area: "Subscriptions",
    technologies: ["RevenueCat", "Apple In-App Purchases", "App Store Connect", "StoreKit"],
    publicScope:
      "The showcase documents the commercial architecture without publishing product IDs, webhook handlers, entitlement logic, or purchase code.",
  },
  {
    area: "Interface and motion",
    technologies: ["React Native Reanimated", "React Native SVG", "Lucide icons"],
    publicScope:
      "The public assets show product screenshots and design direction while keeping reusable UI components and screen implementations private.",
  },
  {
    area: "Device capabilities",
    technologies: ["speech recognition", "microphone access", "local notifications", "native sharing"],
    publicScope:
      "The repository lists supported device-level capabilities without publishing native permission wiring or feature implementation details.",
  },
  {
    area: "Build and release",
    technologies: ["EAS Build", "TestFlight", "App Store Connect"],
    publicScope:
      "Release tooling is documented at a high level. Build credentials, signing configuration, and deployment automation are excluded.",
  },
  {
    area: "Quality and compliance",
    technologies: ["TypeScript checks", "linting", "privacy documentation", "account deletion flow"],
    publicScope:
      "The showcase explains quality and compliance concerns without exposing internal review notes, implementation details, or user data flows.",
  },
];

export const publicCapabilities: ProductCapability[] = [
  { name: "IHK Fachwirt learning paths", category: "mobile", implementationVisibility: "proprietary" },
  { name: "Exam-style practice sessions", category: "mobile", implementationVisibility: "proprietary" },
  { name: "Progress, streaks, milestones, and achievements", category: "mobile", implementationVisibility: "proprietary" },
  { name: "Account login and supported sync", category: "backend", implementationVisibility: "proprietary" },
  { name: "AI explanations and follow-up learning support", category: "ai", implementationVisibility: "proprietary" },
  { name: "Voice input for AI learning conversations", category: "ai", implementationVisibility: "proprietary" },
  { name: "Premium entitlement detection", category: "subscription", implementationVisibility: "proprietary" },
  { name: "Offer code and subscription status handling", category: "subscription", implementationVisibility: "proprietary" },
  { name: "Privacy policy and account deletion access", category: "compliance", implementationVisibility: "described only" },
  { name: "iOS build, TestFlight testing, and App Store release flow", category: "release", implementationVisibility: "described only" },
];

export const repositoryBoundary = {
  purpose: "Public product and architecture showcase",
  includes: [
    "brand assets",
    "screenshots",
    "high-level stack description",
    "privacy overview",
    "repository scope notes",
    "non-functional TypeScript metadata",
  ],
  excludes: [
    "production application source code",
    "question and answer database",
    "AI prompts",
    "API keys",
    "Supabase schema and policies",
    "RevenueCat or StoreKit implementation",
    "private environment configuration",
  ],
};
