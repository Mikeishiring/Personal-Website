/**
 * Site configuration
 * Central place for all site-wide constants and metadata
 */

export const SITE = {
  name: 'Mike',
  title: 'Mike — Hiring in Crypto',
  description: 'Writing in public about talent/hiring in crypto',
  url: 'https://www.mikeishiring.com',
  author: 'Mike',
} as const;

export const TOPICS = ['Talent', 'Product', 'Writing', 'Systems', 'Crypto Hiring'] as const;

export const TOPIC_DESCRIPTIONS: Record<Topic, string> = {
  Talent: 'Thoughts on hiring, team building, and human potential',
  Product: 'Building things that matter',
  Writing: 'On craft, clarity, and the written word',
  Systems: 'Infrastructure, processes, and how things work',
  'Crypto Hiring': 'Hiring and org design in crypto—constraints, cycles, incentives, evaluation.',
} as const;

export const TOPIC_SLUGS: Record<Topic, string> = {
  Talent: 'talent',
  Product: 'product',
  Writing: 'writing',
  Systems: 'systems',
  'Crypto Hiring': 'crypto',
} as const;

export const SOCIAL_LINKS = {
  twitter: 'https://twitter.com/yourusername',
  github: 'https://github.com/yourusername',
  email: 'you@example.com',
} as const;

export const READING_SPEED = 200; // words per minute

export type Topic = (typeof TOPICS)[number];


