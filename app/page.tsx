import Intro from "@/components/intro";
import RecentProjects from "@/components/recent-projects";
import RecentPosts from "@/components/recent-posts";
import ProfileLink from "@/components/profile-link";
import {
  defaultMediumLinkContent,
  defaultGitHubLinkContent,
} from "@/content/links-content";

export default function HomePage() {
  return (
    <section className="container max-w-3xl py-24">
      <Intro />
      <RecentProjects />
      <RecentPosts />
      <ProfileLink
        heading={defaultMediumLinkContent.heading}
        text={defaultMediumLinkContent.text}
        link={defaultMediumLinkContent.link}
        linkText={defaultMediumLinkContent.linkText}
      />
      <br></br>
      <ProfileLink
        heading={defaultGitHubLinkContent.heading}
        text={defaultGitHubLinkContent.text}
        link={defaultGitHubLinkContent.link}
        linkText={defaultGitHubLinkContent.linkText}
      />
    </section>
  );
}
