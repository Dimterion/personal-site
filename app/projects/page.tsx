import type { Metadata } from "next";
import Projects from "@/components/projects";
import ProfileLink from "@/components/profile-link";
import { getProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
};

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <section className="container max-w-3xl pb-24 pt-40">
      <ProfileLink
        heading="View my GitHub profile"
        text="I code every day and keep most of my repos open."
        link="https://github.com/Dimterion"
        linkText="Visit my GitHub"
      />
      <h1 className="title my-12">Projects</h1>
      <Projects projects={projects} />
    </section>
  );
}
