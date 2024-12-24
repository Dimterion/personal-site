import { getPosts } from "@/lib/posts";
import PostsWithSearch from "@/components/posts-with-search";
import ProfileLink from "@/components/profile-link";

export default async function PostPage() {
  const posts = await getPosts();

  return (
    <section className="pb-24 pt-40">
      <article className="container max-w-3xl">
        <h1 className="title mb-12">Posts</h1>
        <PostsWithSearch posts={posts} />
        <hr className="mt-12"></hr>
      </article>
      <article className="container mt-12 max-w-3xl">
        <ProfileLink
          heading="Read my stories on Medium"
          text="I write every Friday and share what I work on and learn."
          link="https://medium.com/@dimterion"
          linkText="Visit my blog"
        />
      </article>
    </section>
  );
}
