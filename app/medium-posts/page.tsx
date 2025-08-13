"use client";

import ProfileLink from "@/components/profile-link";
import { useEffect, useState } from "react";

type MediumPost = {
  title: string;
  link: string;
  guid: string;
};

export default function MediumPosts() {
  const [posts, setPosts] = useState<MediumPost[]>([]);
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
      } catch (err) {
        setError("Could not load Medium posts.");
      }
    };

    fetchPosts();
  }, []);

  if (error) return <p>{error}</p>;

  return (
    <section className="container max-w-3xl pb-24 pt-40">
      <h1 className="title mb-12">Latest Medium Posts</h1>
      <ul className="flex flex-col gap-8">
        {posts.map((post) => (
          <li key={post.guid}>
            <a
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col justify-between gap-x-4 gap-y-1 transition-opacity hover:opacity-70 sm:flex-row"
            >
              <article className="max-w-lg">
                <p className="text-lg font-semibold">{post.title}</p>
              </article>
            </a>
          </li>
        ))}
      </ul>
      <hr className="my-12"></hr>
      <ProfileLink
        heading="Read my stories on Medium"
        text="I write every Friday and share what I work on and learn."
        link="https://medium.com/@dimterion"
        linkText="Visit my blog"
      />
    </section>
  );
}
