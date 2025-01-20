import type { Metadata } from "next";
import PostsWithSearch from "@/components/posts-with-search";
import ProfileLink from "@/components/profile-link";
import { getPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Posts",
};

export default async function PostPage() {
  const posts = await getPosts();

  return (
    <section className="container max-w-3xl pb-24 pt-40">
      <h1 className="title mb-12">Posts</h1>
      <PostsWithSearch posts={posts} />
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
