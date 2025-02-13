"use client";

import { useState } from "react";
import { CopyIcon } from "@radix-ui/react-icons";

export default function CopyLink({ linkText }: { linkText?: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Could not copy link: ", error);
    }
  };

  return (
    <div className="relative text-sm font-light text-zinc-500 dark:text-zinc-400">
      <button
        aria-label="Copy page link"
        className="transition-colors hover:text-foreground dark:hover:text-foreground"
        onClick={handleCopy}
      >
        <CopyIcon />
      </button>
      {copied && (
        <span className="absolute right-0 z-10 mt-6 w-48 rounded-lg bg-muted p-1 text-center text-xs text-foreground">
          {linkText || "Page"} link copied to clipboard.
        </span>
      )}
    </div>
  );
}
