import { getStoryblokApi, renderRichText } from "@storyblok/react/rsc";
import DOMPurify from "isomorphic-dompurify";
import { newsPost } from "../types";

export function sanitizeContent(content: any): string {
  const renderedHtml = renderRichText(content);

  const sanitizedHtml = DOMPurify.sanitize(renderedHtml);

  return sanitizedHtml;
}

export async function fetchNews() {
    const storyblokApi = getStoryblokApi();
    const data = storyblokApi.get(`cdn/stories`, {
        version: "published",
        starts_with: "news",
        is_startpage: false,
    }, {cache: "no-cache"});

    const newsData = (await data).data.stories.map((post: newsPost) => {
        return {
            id: post.slug,
            name: post.name,
            slug: post.slug,
            published_at: post.first_published_at,
            title: post.content.title,
            thumbnail: post.content.thumbnail,
            author: post.content.author,
            summary: post.content.summary,
            content: post.content.content,
            tag: post.content.tag,
        };
    });

    return newsData
}

