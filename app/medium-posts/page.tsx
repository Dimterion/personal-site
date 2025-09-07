import { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import Skeleton from "@/components/skeleton";
import MediumPosts from "@/components/medium-posts";
import ProfileLink from "@/components/profile-link";
import { defaultMediumLinkContent } from "@/content/links-content";

export const metadata: Metadata = {
  title: "Medium posts",
};

export default function MediumPostsPage({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const page = parseInt(searchParams.page ?? "1", 10);

  return (
    <section className="container max-w-3xl pb-24 pt-40">
      <h1 className="title mb-12">Latest Medium Posts</h1>
      <Link
        href="/posts"
        className="mb-12 inline-flex items-center gap-2 text-center text-sm font-light text-zinc-500 transition-colors hover:text-foreground dark:text-zinc-400 dark:hover:text-foreground"
      >
        <ArrowLeftIcon className="h-5 w-5" />
        <span>Back to blog posts</span>
      </Link>
      <Suspense fallback={<Skeleton />}>
        <MediumPosts page={page} />
      </Suspense>
      <hr className="my-12"></hr>
      <ProfileLink
        heading={defaultMediumLinkContent.heading}
        text={defaultMediumLinkContent.text}
        link={defaultMediumLinkContent.link}
        linkText={defaultMediumLinkContent.linkText}
      />
    </section>
  );
}
