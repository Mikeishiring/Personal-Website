import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { filterPublishedPosts, sortPostsByDate } from '../lib/posts';

export async function GET(context) {
  const allPosts = await getCollection('posts');
  const publishedPosts = sortPostsByDate(filterPublishedPosts(allPosts));

  return rss({
    title: 'Your Name',
    description: 'Writing about things that matter',
    site: context.site,
    items: publishedPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.summary,
      link: `/p/${post.slug}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}
