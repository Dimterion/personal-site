import { ExternalLinkIcon } from "@radix-ui/react-icons";
import ContactForm from "@/components/contact-form";
import EmailLink from "@/components/email-link";

export default function Contact() {
  return (
    <section className="pb-24 pt-40">
      <div className="container max-w-3xl">
        <h2 className="title">Contact form</h2>
        <ContactForm />
        <hr className="mt-6"></hr>
        <article className="flex flex-row flex-wrap items-baseline justify-between">
          <EmailLink />
          <section className="mt-6">
            View my{" "}
            <a
              href="https://linktr.ee/dimterion"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground"
            >
              other profiles <ExternalLinkIcon />
            </a>
          </section>
        </article>
      </div>
    </section>
  );
}
