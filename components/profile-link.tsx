import { ExternalLinkIcon } from "@radix-ui/react-icons";
import { Card, CardContent } from "@/components/ui/card";

export default function ProfileLink({
  heading,
  text,
  link,
  linkText,
}: {
  heading: string;
  text: string;
  link: string;
  linkText: string;
}) {
  return (
    <Card className="rounded-lg border-0 dark:border">
      <CardContent className="flex flex-col gap-8 pt-6 text-sm sm:flex-row sm:items-center sm:justify-between md:text-base">
        <section>
          <h2 className="text-xl font-bold md:text-2xl">{heading}</h2>
          <p className="text-muted-foreground">{text}</p>
        </section>
        <section>
          <div className="w-full font-bold">@Dimterion</div>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground"
          >
            {linkText}
            <ExternalLinkIcon />
          </a>
        </section>
      </CardContent>
    </Card>
  );
}
