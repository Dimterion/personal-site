"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ExternalLinkIcon } from "@radix-ui/react-icons";

type MediumPost = {
  title: string;
  link: string;
  guid: string;
};

type MediumApiResponse = {
  title: string;
  link: string;
  guid: string;
};

export default function MediumPosts() {
  const [posts, setPosts] = useState<MediumPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(
          "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@dimterion",
        );
        const data = await res.json();
        const items = data.items.map((item: MediumApiResponse) => ({
          title: item.title,
          link: item.link,
          guid: item.guid,
        }));

        setPosts(items);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Could not load Medium posts.");
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <>
      {error ? (
        <p>{error}</p>
      ) : loading ? (
        // Loading skeleton
        <ul className="flex animate-pulse flex-col gap-8">
          {Array.from({ length: 3 }).map((_, i) => (
            <li key={i} className="space-y-2">
              <div className="h-5 w-2/3 rounded bg-muted" />
              <div className="h-4 w-1/2 rounded bg-muted" />
            </li>
          ))}
        </ul>
      ) : (
        <ul className="flex flex-col gap-8">
          {posts.length === 0 ? (
            <p>
              No posts from Medium were loaded for the moment.{" "}
              <Link
                href="/posts"
                className="inline-flex items-center gap-1 text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground"
              >
                Check my other blog posts
              </Link>
              .
            </p>
          ) : (
            posts.map((post) => (
              <li key={post.guid}>
                <article className="max-w-lg">
                  <p className="text-lg font-semibold">{post.title}</p>
                </article>
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={post.title}
                  className="mt-1 line-clamp-2 inline-flex items-center gap-1 text-sm font-light text-muted-foreground underline hover:text-foreground"
                >
                  Read this post on Medium <ExternalLinkIcon />
                </a>
              </li>
            ))
          )}
        </ul>
      )}
    </>
  );
}
