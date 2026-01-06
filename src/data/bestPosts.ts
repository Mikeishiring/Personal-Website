export type BestPost = {
  title: string;
  platform: "x" | "linkedin";
  url: string;
  whyItMatters: string; // 1–2 sentences
  pinned?: boolean;
};

export const bestPosts: BestPost[] = [
  {
    title: "Be great. Be relevant. Make it obvious.",
    platform: "x",
    url: "https://x.com/mikeishiring/status/1986438613974896885",
    whyItMatters: "My hiring worldview in three lines: quality, market relevance, and clean signaling beat everything.",
    pinned: true
  }
];