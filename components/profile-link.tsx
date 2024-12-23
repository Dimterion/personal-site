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
    <section>
      <Card className="rounded-lg border-0 dark:border">
        <CardContent className="flex flex-col gap-8 pt-6 text-sm sm:flex-row sm:items-center sm:justify-between md:text-base">
          <div>
            <h2 className="text-xl font-bold md:text-2xl">{heading}</h2>
            <p className="text-muted-foreground">{text}</p>
          </div>
          <div>
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
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
