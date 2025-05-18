export type AppStackNavigationParamList = {
  SpaceFlightHome: undefined;
  NewsOverview: {
    id: number;
    title: string;
    authors: {name: string; social: string}[];
    url: string;
    image_url: string;
    news_site: string;
    summary: string;
    published_at: string;
    updated_at: string;
  };
};
