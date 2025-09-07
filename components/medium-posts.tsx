import Link from "next/link";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ExternalLinkIcon,
} from "@radix-ui/react-icons";
import { getMediumPosts, MediumPostMetadata } from "@/lib/medium-posts";
import { extractFirstSentence, formatDate } from "@/lib/utils";

export default async function MediumPosts({ page = 1 }: { page: number }) {
  const POSTS_PER_PAGE = 5;
  let posts: MediumPostMetadata[] = [];
  let postsLoadingError = false;

  try {
    posts = await getMediumPosts();
  } catch (error) {
    console.error("Could not fetch Medium posts:", error);
    postsLoadingError = true;
  }

  if (postsLoadingError || posts.length === 0) {
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

  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  const paginatedPosts = posts.slice(
    (page - 1) * POSTS_PER_PAGE,
    page * POSTS_PER_PAGE,
  );

  return (
    <>
      <ul className="flex flex-col gap-4">
        {paginatedPosts.map((post) => (
          <li
            key={post.guid}
            className="flex min-h-56 flex-col justify-between gap-x-4 gap-y-1 rounded-md border p-6 sm:flex-row sm:items-center"
          >
            <article className="flex max-w-lg flex-col flex-nowrap gap-1">
              <p className="text-lg font-semibold">{post.title}</p>
              <p className="mt-1 line-clamp-2 text-sm font-light text-muted-foreground">
                {extractFirstSentence(post.description)}
              </p>
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={post.title}
                className="mt-1 line-clamp-2 inline-flex items-center gap-1 text-sm text-muted-foreground underline hover:text-foreground sm:text-base"
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
              <p className="mt-4 text-sm font-light sm:mt-0">
                {formatDate(post.pubDate)}
              </p>
            )}
          </li>
        ))}
      </ul>
      <nav className="mt-8 flex justify-center gap-4">
        {page > 1 && (
          <Link
            href={`?page=${page - 1}`}
            className="inline-flex items-center gap-2 text-center text-sm font-light text-zinc-500 transition-colors hover:text-foreground dark:text-zinc-400 dark:hover:text-foreground"
          >
            <ArrowLeftIcon className="h-5 w-5" />
            <span>Previous posts</span>
          </Link>
        )}
        {page < totalPages && (
          <Link
            href={`?page=${page + 1}`}
            className="inline-flex items-center gap-2 text-center text-sm font-light text-zinc-500 transition-colors hover:text-foreground dark:text-zinc-400 dark:hover:text-foreground"
          >
            <span>Next posts</span>
            <ArrowRightIcon className="h-5 w-5" />
          </Link>
        )}
      </nav>
    </>
  );
}
