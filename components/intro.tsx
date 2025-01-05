import Image from "next/image";
import ExternalLink from "@/components/external-link";
import profileImg from "@/public/images/authors/profile_img.jpg";

export default function Intro() {
  return (
    <section className="mb-24 flex flex-col-reverse items-start gap-x-10 gap-y-4 pb-4 md:flex-row md:items-center">
      <article className="mt-2 flex-1 md:mt-0">
        <h1 className="title no-underline">Hi, I&#39;m Dmitrii</h1>
        <p className="mt-3 font-light text-muted-foreground">
          I&#39;m a developer and technical consultant, coding daily and writing
          about it. You can see my projects and posts in the respective
          sections.
        </p>
        <hr className="mt-3"></hr>
        <section className="mt-3 flex items-center gap-4 text-muted-foreground">
          <ExternalLink
            link="https://www.dimterion.com/documents/Resume_Dmitrii_Popov_public.pdf"
            name="Resume"
          />
          |
          <ExternalLink
            link="https://linktr.ee/dimterion"
            name="Profile links"
          />
        </section>
      </article>
      <div className="relative">
        <Image
          className="flex-1 rounded-lg grayscale sm:size-48"
          src={profileImg}
          alt="Profile image"
          priority
        />
      </div>
    </section>
  );
}
