import type { CollectionEntry } from 'astro:content';

export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

export function sortPostsByDate(posts: CollectionEntry<'posts'>[]) {
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export function filterPublishedPosts(posts: CollectionEntry<'posts'>[]) {
  return posts.filter(post => !post.data.draft);
}

export function getPostsByTopic(posts: CollectionEntry<'posts'>[], topic: string) {
  return posts.filter(post => post.data.topic === topic);
}

export function groupPostsByYear(posts: CollectionEntry<'posts'>[]) {
  return posts.reduce((acc, post) => {
    const year = post.data.date.getFullYear();
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(post);
    return acc;
  }, {} as Record<number, CollectionEntry<'posts'>[]>);
}

export const TOPICS = ['Talent', 'Product', 'Writing', 'Systems', 'Crypto'] as const;
export type Topic = typeof TOPICS[number];

