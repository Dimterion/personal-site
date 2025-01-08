import ExternalLink from "@/components/external-link";

export default function Menu() {
  return (
    <details className="relative">
      <summary className="cursor-pointer text-sm text-muted-foreground transition-colors hover:text-foreground sm:text-base">
        Resume
      </summary>
      <div className="absolute left-0 top-[100%] z-10 mt-2 flex w-36 flex-col">
        <ExternalLink
          link="https://www.dimterion.com/documents/Resume_Dmitrii_Popov_public.pdf"
          name="Resume (pdf)"
          copy={false}
        />
      </div>
    </details>
  );
}
