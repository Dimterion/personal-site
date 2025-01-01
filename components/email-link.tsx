import { ExternalLinkIcon } from "@radix-ui/react-icons";

export default function EmailLink() {
  const email = atob(process.env.NEXT_PUBLIC_EMAIL_KEY as string);

  return (
    <section className="mt-6">
      Contact me by{" "}
      <a
        href={`mailto:${email}`}
        className="inline-flex items-center gap-1 text-sm text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground sm:text-base"
      >
        email
        <ExternalLinkIcon />
      </a>
    </section>
  );
}
