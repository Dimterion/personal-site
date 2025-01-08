"use client";

import { CopyIcon, ExternalLinkIcon } from "@radix-ui/react-icons";

export default function ExternalLink({
  link,
  name,
  copy,
}: {
  link: string;
  name: string;
  copy: boolean;
}) {
  const copyLink = () => {
    const linkToCopy = link.includes("mailto:") ? link.slice(7) : link;

    navigator.clipboard.writeText(linkToCopy);
  };

  return (
    <>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 text-sm text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground sm:text-base"
      >
        {name} {!copy && <ExternalLinkIcon />}
      </a>
      {copy && (
        <button className="ml-1 inline-flex items-center" onClick={copyLink}>
          (<CopyIcon />)
        </button>
      )}
    </>
  );
}
