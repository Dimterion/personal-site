import Image from "next/image";
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import profileImg from "../public/images/authors/profile_img.jpg";

export default function Intro() {
  return (
    <section className="mb-24 flex flex-col-reverse items-start gap-x-10 gap-y-4 pb-4 md:flex-row md:items-center">
      <div className="mt-2 flex-1 md:mt-0">
        <h1 className="title no-underline">Hi, I&#39;m Dmitrii</h1>
        <p className="mt-3 font-light text-muted-foreground">
          I&#39;m a developer and technical consultant, coding daily and writing
          about it. You can see my projects and posts in the respective
          sections.
        </p>
        <hr className="mt-3"></hr>
        <div className="mt-3 flex items-center gap-4 text-muted-foreground">
          <a
            href="https://www.dimterion.com/documents/Resume_Dmitrii_Popov_public.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 underline underline-offset-4 transition-colors hover:text-foreground"
          >
            Resume
            <ExternalLinkIcon />
          </a>
          |
          <a
            href="https://dimterion.bio.link/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 underline underline-offset-4 transition-colors hover:text-foreground"
          >
            Bio Link <ExternalLinkIcon />
          </a>
        </div>
      </div>
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
