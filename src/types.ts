/**
 * Type definitions for the entire application
 */

import type { CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'posts'>;

export type PostData = Post['data'];

export interface PostRowProps {
  title: string;
  date: Date;
  readingTime: number;
  topic: string;
  topicSlug?: string;
  tags?: string[];
  summary: string;
  href: string;
  showSummary?: boolean;
}

export interface PostListProps {
  posts: Post[];
  showSummaryForFirst?: number;
}

export interface PostLayoutProps {
  post: Post;
  readingTime: number;
}

export interface BaseLayoutProps {
  title?: string;
  description?: string;
}

export interface TopicPillsProps {
  topics: readonly string[];
  activeTopic?: string;
}


