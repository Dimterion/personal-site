"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ExternalLinkIcon } from "@radix-ui/react-icons";

type MediumPost = {
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
        const items = data.items.map((item: any) => ({
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
        <p>Loading...</p>
      ) : (
        <ul className="flex flex-col gap-8">
          {posts.length === 0 ? (
            <Link
              href="/posts"
              className="inline-flex items-center gap-1 text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground"
            >
              Check my posts here
            </Link>
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
