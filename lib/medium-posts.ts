export type MediumPostMetadata = {
  title: string;
  link: string;
  guid: string;
};

export async function getMediumPosts(): Promise<MediumPostMetadata[]> {
  const res = await fetch(
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@dimterion",
  );
  const data = await res.json();

  return data.items.map((item: MediumPostMetadata) => ({
    title: item.title,
    link: item.link,
    guid: item.guid,
  }));
}
