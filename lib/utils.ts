import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function extractFirstSentence(post?: string) {
  if (!post) return "";

  const decoded = post.replace(/\\u003C/g, "<").replace(/\\u003E/g, ">");
  const textOnly = decoded.replace(/<[^>]*>/g, "").trim();
  const firstSentence = textOnly.split(/(?<=[.?!])\s+/)[0];

  return firstSentence;
}
