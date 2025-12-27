/**
 * RSS Feed - Auto-generated RSS feed for blog posts
 */
import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE } from '../config';
import { filterPublishedPosts, sortPostsByDate } from '../lib/posts';

export async function GET(context) {
  const allPosts = await getCollection('posts');
  const publishedPosts = sortPostsByDate(filterPublishedPosts(allPosts));

  return rss({
    title: SITE.title,
    description: SITE.description,
    site: context.site,
    items: publishedPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.summary,
      link: `/p/${post.id}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}
