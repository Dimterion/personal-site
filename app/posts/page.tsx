import { getPosts } from "@/lib/posts";
import PostsWithSearch from "@/components/posts-with-search";
import NewsletterForm from "@/components/newsletter-form";

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
        <NewsletterForm />
      </article>
    </section>
  );
}
