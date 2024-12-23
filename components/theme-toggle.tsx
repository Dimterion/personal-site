"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

export default function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Button
      aria-label="Toggle color theme"
      className="px-0 hover:bg-transparent hover:text-muted-foreground sm:px-3"
      type="button"
      size="sm"
      variant="ghost"
      onClick={() => {
        setTheme(resolvedTheme === "dark" ? "light" : "dark");
      }}
    >
      {resolvedTheme === "dark" ? <SunIcon /> : <MoonIcon />}
      <span className="sr-only">Toggle color theme</span>
    </Button>
  );
}
