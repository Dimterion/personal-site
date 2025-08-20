import Link from "next/link";
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import { getMediumPosts } from "@/lib/medium-posts";
import { formatDate } from "@/lib/utils";

export default async function MediumPosts() {
  let posts = [];

  try {
    posts = await getMediumPosts();
  } catch (error) {
    console.error("Could not fetch Medium posts:", error);

    return (
      <p>
        No posts from Medium were loaded for the moment. Try reloading the page
        or{" "}
        <Link
          href="/posts"
          className="inline-flex items-center gap-1 text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground"
        >
          check my other blog posts
        </Link>
        .
      </p>
    );
  }

  return (
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
          <li
            key={post.guid}
            className="flex flex-col justify-between gap-x-4 gap-y-1 sm:flex-row"
          >
            <article className="max-w-lg">
              <p className="text-lg font-semibold">{post.title}</p>
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={post.title}
                className="mt-1 line-clamp-2 inline-flex items-center gap-1 font-light text-muted-foreground underline hover:text-foreground"
              >
                Read this post on Medium <ExternalLinkIcon />
              </a>
              <aside className="mt-1 flex flex-wrap">
                {post.categories &&
                  post.categories.map((category, index) => (
                    <pre
                      key={`${category}-${index}`}
                      className="mr-2 mt-2 w-fit rounded-lg border bg-muted p-1 text-xs font-semibold text-foreground"
                    >
                      {category}
                    </pre>
                  ))}
              </aside>
            </article>
            {post.pubDate && (
              <p className="mt-1 text-sm font-light">
                {formatDate(post.pubDate)}
              </p>
            )}
          </li>
        ))
      )}
    </ul>
  );
}
