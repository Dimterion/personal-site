import { Suspense } from "react";
import type { Metadata } from "next";
import MediumPosts from "@/components/medium-posts";
import ProfileLink from "@/components/profile-link";

export const metadata: Metadata = {
  title: "Medium posts",
};

export default function MediumPostsPage() {
  return (
    <section className="container max-w-3xl pb-24 pt-40">
      <h1 className="title mb-12">Latest Medium Posts</h1>
      <Suspense fallback={<p>Loading posts...</p>}>
        <MediumPosts />
      </Suspense>
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
