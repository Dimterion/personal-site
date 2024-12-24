import Intro from "@/components/intro";
import RecentProjects from "@/components/recent-projects";
import RecentPosts from "@/components/recent-posts";
import ProfileLink from "@/components/profile-link";

export default function Home() {
  return (
    <section className="py-24">
      <div className="container max-w-3xl">
        <Intro />
        <RecentProjects />
        <RecentPosts />
        <ProfileLink
          heading="Read my stories on Medium"
          text="I write every Friday and share what I work on and learn."
          link="https://medium.com/@dimterion"
          linkText="Visit my blog"
        />
      </div>
    </section>
  );
}
