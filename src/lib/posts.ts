/**
 * Utility functions for working with blog posts
 */

import type { CollectionEntry } from 'astro:content';
import { READING_SPEED } from '../config';

export type Post = CollectionEntry<'posts'>;

/**
 * Calculates the estimated reading time for content
 * @param content - The text content to analyze
 * @returns Reading time in minutes (rounded up)
 */
export function calculateReadingTime(content: string): number {
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / READING_SPEED);
}

/**
 * Sorts posts by date in descending order (newest first)
 * @param posts - Array of posts to sort
 * @returns Sorted array of posts
 */
export function sortPostsByDate(posts: Post[]): Post[] {
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

/**
 * Filters out draft posts
 * @param posts - Array of posts to filter
 * @returns Array of published posts only
 */
export function filterPublishedPosts(posts: Post[]): Post[] {
  return posts.filter(post => !post.data.draft);
}

/**
 * Filters posts by topic
 * @param posts - Array of posts to filter
 * @param topic - Topic to filter by
 * @returns Array of posts matching the topic
 */
export function getPostsByTopic(posts: Post[], topic: string): Post[] {
  return posts.filter(post => post.data.topic === topic);
}

/**
 * Groups posts by year
 * @param posts - Array of posts to group
 * @returns Object with years as keys and arrays of posts as values
 */
export function groupPostsByYear(posts: Post[]): Record<number, Post[]> {
  return posts.reduce((acc, post) => {
    const year = post.data.date.getFullYear();
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(post);
    return acc;
  }, {} as Record<number, Post[]>);
}
