import Projects from "@/components/projects";
import ProfileLink from "@/components/profile-link";
import { getProjects } from "@/lib/projects";

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <section className="pb-24 pt-40">
      <div className="container max-w-3xl">
        <h1 className="title mb-12">Projects</h1>
        <Projects projects={projects} />
        <hr className="mt-12"></hr>
      </div>
      <article className="container mt-12 max-w-3xl">
        <ProfileLink
          heading="View my GitHub profile"
          text="I code every day and keep most of my repos open."
          link="https://github.com/Dimterion"
          linkText="Visit my GitHub"
        />
      </article>
    </section>
  );
}
