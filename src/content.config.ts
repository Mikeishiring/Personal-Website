/**
 * Content Collections Configuration
 * Defines the schema and loader for blog posts
 */
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ 
    pattern: "**/*.{md,mdx}", 
    base: "./src/content/posts" 
  }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    topic: z.enum(['Talent', 'Product', 'Writing', 'Systems', 'Crypto']),
    tags: z.array(z.string()).optional(),
    summary: z.string(),
    draft: z.boolean().default(false),
    featured: z.boolean().optional(),
  }),
});

export const collections = { posts };
