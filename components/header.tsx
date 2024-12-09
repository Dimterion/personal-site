import Link from "next/link";
import ThemeToggle from "./theme-toggle";

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-30 mx-auto mb-16 flex w-full max-w-3xl bg-background/75 px-1 py-6 backdrop-blur-sm">
      <Link href="/" className="font-serif text-2xl font-bold">
        DP
      </Link>
      <nav className="container mx-auto flex w-full max-w-3xl items-center justify-center px-2">
        <ul className="flex items-center justify-evenly gap-4 text-sm font-medium text-muted-foreground">
          <li className="transition-colors hover:text-foreground">
            <Link href="/projects">Projects</Link>
          </li>
          <li className="transition-colors hover:text-foreground">
            <Link href="/posts">Posts</Link>
          </li>
          <li className="transition-colors hover:text-foreground">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <ThemeToggle />
    </header>
  );
}
