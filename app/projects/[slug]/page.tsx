import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import MDXContent from "@/components/mdx-content";
import ProfileLink from "@/components/profile-link";
import { formatDate } from "@/lib/utils";
import { getProjectBySlug, getProjects } from "@/lib/projects";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const { metadata } = project;
  const { title, summary, image } = metadata;

  return {
    title: title || "Projects",
    description: summary,
    openGraph: {
      images: image || "../../opengraph-image.jpg",
    },
  };
}

export async function generateStaticParams() {
  const projects = await getProjects();
  const slugs = projects.map((project) => ({
    slug: project.slug,
  }));

  return slugs;
}

export default async function Project({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const { metadata, content } = project;
  const { title, image, author, publishedAt, tag } = metadata;

  return (
    <section className="container max-w-3xl pb-24 pt-32">
      <Link
        href="/projects"
        className="mb-8 inline-flex items-center gap-2 text-center text-sm font-light text-zinc-500 transition-colors hover:text-foreground dark:text-zinc-400 dark:hover:text-foreground"
      >
        <ArrowLeftIcon className="h-5 w-5" />
        <span>View all projects</span>
      </Link>
      {image ? (
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
      ) : (
        <div className="relative mb-8 flex h-52 w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-muted-foreground text-muted sm:h-96">
          <h2 className="m-32 text-center text-3xl font-semibold sm:text-6xl">
            {title}
          </h2>
        </div>
      )}
      <aside>
        <h1 className="title">{title}</h1>
        <p className="mt-3 text-xs text-muted-foreground">
          {author} / {formatDate(publishedAt ?? "")}
        </p>
        {tag && (
          <div className="mt-4 flex flex-wrap gap-1">
            {tag.map((tag) => (
              <pre
                key={tag}
                className="w-fit rounded-lg border bg-muted px-4 py-1 font-semibold text-foreground"
              >
                {tag}
              </pre>
            ))}
          </div>
        )}
      </aside>
      <main className="prose mt-16 dark:prose-invert">
        <MDXContent source={content} />
      </main>
      <hr className="my-10"></hr>
      <ProfileLink
        heading="View my GitHub profile"
        text="I code every day and keep most of my repos open."
        link="https://github.com/Dimterion"
        linkText="Visit my GitHub"
      />
    </section>
  );
}
