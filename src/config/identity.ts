export const identity = {
  name: "Mike Williams",
  handle: "mikeishiring",
  roleLine: "Talent Acquisition Lead @ Flashbots",
  tagline: "Operator notebook on hiring in crypto/tech + market signal.",
  proofPoints: [
    "~5,000 interviews (approx.)",
    "Built and scaled talent functions across engineering, research, product, ops",
    "Shipping weekly experiments (AI + tooling + market signal)"
  ],
  currentBuilds: [
    {
      name: "Talent Intelligence Platform",
      status: "in progress",
      oneLiner: "Scrape crypto jobs + GitHub + narratives → infer capability demand + hiring edges."
    },
    {
      name: "Closing Table",
      url: "https://closing-table.pages.dev",
      oneLiner: "One-shot double-blind price agreement without negotiation; fairness vs privacy tradeoff."
    },
    {
      name: "Spam Game",
      url: "https://spam-game.onrender.com",
      oneLiner: "Competitive multiplayer game to visualize timing games; multiplayer + 'addictive click' sound."
    }
  ],
  beliefs: [
    "We're heading toward advisor-to-bot-army work; people will be judged on taste and how much they cared.",
    "Hiring is a human matching engine; signal > pedigree."
  ],
  socials: {
    x: "https://x.com/mikeishiring",
    linkedin: "https://www.linkedin.com/in/mikeishiring/",
    github: "https://github.com/Mikeishiring"
  },
  constraints: {
    noEmailLink: true,
    noEmbedsByDefault: true,
    minimalAesthetic: "simple bullet points; fast; low ceremony",
  }
} as const;