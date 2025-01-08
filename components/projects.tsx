import Link from "next/link";
import Image from "next/image";
import ExternalLink from "@/components/external-link";
import { ProjectMetadata } from "@/lib/projects";
import { formatDate } from "@/lib/utils";

export default function Projects({
  projects,
}: {
  projects: ProjectMetadata[];
}) {
  return projects.length > 0 ? (
    <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2">
      {projects.map((project) => (
        <li key={project.slug} className="group relative">
          <Link href={`/projects/${project.slug}`}>
            {project.image && (
              <div className="relative m-auto h-52 w-full max-w-[512px] overflow-hidden rounded-lg bg-muted">
                <Image
                  src={project.image}
                  alt={project.title || ""}
                  fill
                  sizes="52"
                  className="rounded-lg object-cover object-center transition-colors"
                  priority={true}
                />
              </div>
            )}
            <div className="absolute inset-[0px] rounded-lg bg-background/70 p-4 opacity-0 transition-opacity group-hover:opacity-100"></div>
            <article className="absolute inset-x-0 bottom-0 translate-y-2 pb-6 pl-4 opacity-0 group-hover:opacity-100">
              <h2 className="title line-clamp-1 text-xl no-underline">
                {project.title}
              </h2>
              <p className="line-clamp-1 text-sm">{project.summary}</p>
              <p className="text-xs font-light">
                {formatDate(project.publishedAt ?? "")}
              </p>
            </article>
          </Link>
        </li>
      ))}
    </ul>
  ) : (
    <p className="text-sm sm:text-base">
      View projects at{" "}
      <ExternalLink
        link="https://github.com/Dimterion"
        name="my GitHub profile"
        copy={false}
      />
      .
    </p>
  );
}
