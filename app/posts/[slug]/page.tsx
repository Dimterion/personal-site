import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import MDXContent from "@/components/mdx-content";
import ProfileLink from "@/components/profile-link";
import { formatDate } from "@/lib/utils";
import { getPostBySlug, getPosts } from "@/lib/posts";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const { metadata } = post;
  const { title } = metadata;

  return {
    title: title || "Posts",
  };
}

export async function generateStaticParams() {
  const posts = await getPosts();
  const slugs = posts.map((post) => ({
    slug: post.slug,
  }));

  return slugs;
}

export default async function Post({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const { metadata, content } = post;
  const { title, image, author, publishedAt } = metadata;

  return (
    <section className="container max-w-3xl pb-24 pt-32">
      <Link
        href="/posts"
        className="mb-8 inline-flex items-center gap-2 text-center text-sm font-light text-zinc-500 transition-colors hover:text-foreground dark:text-zinc-400 dark:hover:text-foreground"
      >
        <ArrowLeftIcon className="h-5 w-5" />
        <span>View all posts</span>
      </Link>
      {image && (
        <div className="relative mb-8 h-52 w-full overflow-hidden rounded-lg sm:h-96">
          <Image
            src={image}
            alt={title || ""}
            className="object-cover"
            fill
            sizes="96"
            priority
          />
        </div>
      )}
      <aside>
        <h1 className="title">{title}</h1>
        <p className="mt-3 text-xs text-muted-foreground">
          {author} / {formatDate(publishedAt ?? "")}
        </p>
      </aside>
      <main className="prose mt-16 dark:prose-invert">
        <MDXContent source={content} />
      </main>
      <hr className="my-10"></hr>
      <ProfileLink
        heading="Read my stories on Medium"
        text="I write every Friday and share what I work on and learn."
        link="https://medium.com/@dimterion"
        linkText="Visit my blog"
      />
    </section>
  );
}
