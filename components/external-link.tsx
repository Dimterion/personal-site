import { ExternalLinkIcon } from "@radix-ui/react-icons";

export default function ExternalLink({
  link,
  name,
}: {
  link: string;
  name: string;
}) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 text-sm text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground sm:text-base"
    >
      {name} <ExternalLinkIcon />
    </a>
  );
}
