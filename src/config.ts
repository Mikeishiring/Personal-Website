/**
 * Site configuration
 * Central place for all site-wide constants and metadata
 */

export const SITE = {
  name: 'Mikeishiring',
  title: 'Mikeishiring',
  description: 'Ramblings, tools and knowledge from Talent Acquisiton in crypto',
  url: 'https://yourdomain.com',
  author: 'Mikeishiring',
} as const;

export const TOPICS = ['Talent', 'Product', 'Writing', 'Systems', 'Crypto'] as const;

export const TOPIC_DESCRIPTIONS: Record<Topic, string> = {
  Talent: 'Thoughts on hiring, team building, and human potential',
  Product: 'Building things that matter',
  Writing: 'On craft, clarity, and the written word',
  Systems: 'Infrastructure, processes, and how things work',
  Crypto: 'Blockchains and decentralized systems',
} as const;

export const SOCIAL_LINKS = {
  twitter: 'https://twitter.com/yourusername',
  github: 'https://github.com/yourusername',
  email: 'you@example.com',
} as const;

export const READING_SPEED = 200; // words per minute

export type Topic = (typeof TOPICS)[number];


