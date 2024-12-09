import MDXContent from "@/components/mdx-content";
import { getProjectBySlug, getProjects } from "@/lib/projects";
import { formatDate } from "@/lib/utils";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

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
  const { title, image, author, publishedAt } = metadata;

  return (
    <section className="pb-24 pt-32">
      <div className="container max-w-3xl">
        <Link
          href="/projects"
          className="mb-8 inline-flex items-center gap-2 text-center text-sm font-light text-zinc-500 transition-colors hover:text-foreground dark:text-zinc-400 dark:hover:text-foreground"
        >
          <ArrowLeftIcon className="h-5 w-5" />
          <span>View all projects</span>
        </Link>
        {image && (
          <div className="relative mb-6 h-52 w-full overflow-hidden rounded-lg sm:h-96">
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
        <header>
          <h1 className="title">{title}</h1>
          <p className="mt-3 text-xs text-muted-foreground">
            {author} / {formatDate(publishedAt ?? "")}
          </p>
        </header>
        <main className="prose mt-16 dark:prose-invert">
          <MDXContent source={content} />
        </main>
      </div>
    </section>
  );
}
