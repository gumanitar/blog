export interface ArticleInterface {
  id: 0;
  title: "string";
  authors: [
    {
      name: "string";
      socials: {
        x: "string";
        youtube: "string";
        instagram: "string";
        linkedin: "string";
        mastodon: "string";
        bluesky: "string";
      };
    }
  ];
  url: "string";
  image_url: "string";
  news_site: "string";
  summary: "string";
  published_at: "strinstring";
  updated_at: "strinstring";
  featured: true;
  launches: [
    {
      launch_id: "strinstring";
      provider: "string";
    }
  ];
  events: [
    {
      event_id: number;
      provider: "string";
    }
  ];
}
