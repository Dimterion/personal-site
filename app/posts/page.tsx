import type { Metadata } from "next";
import Link from "next/link";
import PostsWithSearch from "@/components/posts-with-search";
import ProfileLink from "@/components/profile-link";
import { getPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Posts",
};

export default async function PostsPage() {
  const posts = await getPosts();

  return (
    <section className="container max-w-3xl pb-24 pt-40">
      <ProfileLink
        heading="Check my 160+ stories on Medium"
        text="I write every Friday and share what I work on and learn."
        link="https://medium.com/@dimterion"
        linkText="Visit my blog"
      />
      <h1 className="title my-12">Posts</h1>
      <PostsWithSearch posts={posts} />
      <hr className="mt-12"></hr>
      <Link
        href="/medium-posts"
        className="mt-12 inline-flex items-center gap-1 text-sm text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground sm:text-base"
      >
        View my latest Medium posts here
      </Link>
    </section>
  );
}
