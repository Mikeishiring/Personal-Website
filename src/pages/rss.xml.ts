import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { filterPublishedPosts, sortPostsByDate } from '../lib/posts';
import { SITE } from '../config';
import { identity } from '../config/identity';

export const GET: APIRoute = async ({ site }) => {
  const allPosts = await getCollection('posts');
  const publishedPosts = sortPostsByDate(filterPublishedPosts(allPosts));

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${identity.name} - ${identity.tagline}</title>
    <description>${identity.tagline}</description>
    <link>${SITE.url}</link>
    <atom:link href="${SITE.url}/rss.xml" rel="self" type="application/rss+xml" />
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    ${publishedPosts.map((post) => `
    <item>
      <title><![CDATA[${post.data.title}]]></title>
      <description><![CDATA[${post.data.summary}]]></description>
      <link>${SITE.url}/p/${post.id}</link>
      <guid>${SITE.url}/p/${post.id}</guid>
      <pubDate>${post.data.date.toUTCString()}</pubDate>
    </item>
    `).join('')}
  </channel>
</rss>`.trim();

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
    },
  });
};