import type { Metadata } from "next";
import Projects from "@/components/projects";
import ProfileLink from "@/components/profile-link";
import { getProjects } from "@/lib/projects";
import { defaultGitHubLinkContent } from "@/content/links-content";

export const metadata: Metadata = {
  title: "Projects",
};

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <section className="container max-w-3xl pb-24 pt-40">
      <ProfileLink
        heading={defaultGitHubLinkContent.heading}
        text={defaultGitHubLinkContent.text}
        link={defaultGitHubLinkContent.link}
        linkText={defaultGitHubLinkContent.linkText}
      />
      <h1 className="title my-12">Projects</h1>
      <Projects projects={projects} />
    </section>
  );
}
