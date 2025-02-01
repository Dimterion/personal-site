import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeftIcon } from "@radix-ui/react-icons";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <section className="mx-auto min-h-full max-w-max px-8 pb-24 pt-40 sm:flex sm:items-center">
      <p className="mb-2 text-4xl font-bold tracking-tight text-muted-foreground sm:mb-0 sm:mt-4 sm:text-5xl">
        404
      </p>
      <section className="sm:ml-6 sm:border-l sm:border-gray-200 sm:pl-6">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-4 text-base text-muted-foreground">
          Please check the link and try again.
        </p>
        <Link
          href="/"
          className="mt-10 inline-flex items-center gap-1 text-lg font-medium text-muted-foreground transition-colors hover:text-foreground dark:hover:text-foreground sm:border-l sm:border-transparent"
        >
          <ArrowLeftIcon className="h-5 w-5" />
          <span>Home page</span>
        </Link>
      </section>
    </section>
  );
}
