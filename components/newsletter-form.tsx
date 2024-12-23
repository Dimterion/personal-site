"use client";

import { ExternalLinkIcon } from "@radix-ui/react-icons";
import { Card, CardContent } from "@/components/ui/card";

export default function NewsletterForm() {
  return (
    <section>
      <Card className="rounded-lg border-0 dark:border">
        <CardContent className="flex flex-col gap-8 pt-6 text-sm sm:flex-row sm:items-center sm:justify-between md:text-base">
          <div>
            <h2 className="text-xl font-bold md:text-2xl">
              Read my stories on Medium
            </h2>
            <p className="text-muted-foreground">
              I write every Friday and share what I work on and learn.
            </p>
          </div>
          <div>
            <div className="w-full font-bold">@Dimterion</div>
            <a
              href="https://medium.com/@dimterion"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground"
            >
              Visit my blog
              <ExternalLinkIcon />
            </a>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
