import Intro from "@/components/intro";
import RecentProjects from "@/components/recent-projects";
import RecentPosts from "@/components/recent-posts";
import ProfileLink from "@/components/profile-link";

export default function HomePage() {
  return (
    <section className="container max-w-3xl py-24">
      <Intro />
      <RecentProjects />
      <RecentPosts />
      <ProfileLink
        heading="Check my 160+ stories on Medium"
        text="I write every Friday and share what I work on and learn."
        link="https://medium.com/@dimterion"
        linkText="Visit my blog"
      />
      <br></br>
      <ProfileLink
        heading="View my GitHub profile"
        text="I code every day and keep most of my repos open."
        link="https://github.com/Dimterion"
        linkText="Visit my GitHub"
      />
    </section>
  );
}
