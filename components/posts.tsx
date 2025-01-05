import Link from "next/link";
import ExternalLink from "@/components/external-link";
import { PostMetadata } from "@/lib/posts";
import { formatDate } from "@/lib/utils";

export default function Posts({ posts }: { posts: PostMetadata[] }) {
  return posts.length > 0 ? (
    <ul className="flex flex-col gap-8">
      {posts.map((post) => (
        <li key={post.slug}>
          <Link
            href={`/posts/${post.slug}`}
            className="flex flex-col justify-between gap-x-4 gap-y-1 transition-opacity hover:opacity-70 sm:flex-row"
          >
            <article className="max-w-lg">
              <p className="text-lg font-semibold">{post.title}</p>
              <p className="mt-1 line-clamp-2 text-sm font-light text-muted-foreground">
                {post.summary}
              </p>
            </article>
            {post.publishedAt && (
              <p className="mt-1 text-sm font-light">
                {formatDate(post.publishedAt)}
              </p>
            )}
          </Link>
        </li>
      ))}
    </ul>
  ) : (
    <p>
      No posts found at the moment. Visit{" "}
      <ExternalLink
        link="https://medium.com/@dimterion"
        name="my Medium blog"
      />
      .
    </p>
  );
}
