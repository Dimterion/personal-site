import type { Metadata } from "next";
import ContactForm from "@/components/contact-form";
import ExternalLink from "@/components/external-link";

export const metadata: Metadata = {
  title: "Contact",
};

export default function Contact() {
  const email = atob(process.env.NEXT_PUBLIC_EMAIL_KEY as string);

  return (
    <section className="container max-w-3xl pb-24 pt-40">
      <h2 className="title">Contact form</h2>
      <ContactForm />
      <hr className="mt-8"></hr>
      <article className="flex flex-row flex-wrap items-baseline justify-between text-sm sm:text-base">
        <section className="mt-8">
          Contact me by{" "}
          <ExternalLink link={`mailto:${email}`} name="email" copy={false} />
        </section>
        <section className="mt-8">
          View my{" "}
          <ExternalLink
            link="https://linktr.ee/dimterion"
            name="other profiles"
            copy={false}
          />
        </section>
      </article>
    </section>
  );
}
