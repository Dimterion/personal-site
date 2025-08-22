export type MediumPostMetadata = {
  guid: string;
  link: string;
  title: string;
  pubDate: string;
  categories?: string[];
};

export async function getMediumPosts(): Promise<MediumPostMetadata[]> {
  const res = await fetch(
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@dimterion",
    {
      next: { revalidate: 3600 },
    },
  );
  const data = await res.json();

  return data.items.map((item: MediumPostMetadata) => ({
    guid: item.guid,
    link: item.link,
    title: item.title,
    pubDate: item.pubDate,
    categories: item.categories ?? [],
  }));
}
