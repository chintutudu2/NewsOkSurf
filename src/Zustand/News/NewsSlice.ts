import {StateCreator} from 'zustand';
import {CombinedState} from '../Store';

export interface Article {
  id: number;
  title: string;
  authors: {
    name: string;
    socials: string;
  }[];
  url: string;
  image_url: string;
  news_site: string;
  summary: string;
  published_at: string;
  updated_at: string;
  featured: boolean;
  launches: any;
  events: any;
}

export interface NewsState {
  count: number;
  articles: Article[];
  setArticles: (articles: Article[]) => void;
  addArticles: (articles: Article[]) => void;
}

export const createNewsSlice: StateCreator<CombinedState, [], [], NewsState> = (
  set,
  get,
) => ({
  count: 0,

  articles: [],

  setArticles: articles =>
    set({
      articles,
      count: articles.length,
    }),

  addArticles: newArticles => {
    const currentArticles = get().articles;
    const merged = [
      ...currentArticles,
      ...newArticles.filter(
        a => !currentArticles.some(existing => existing.id === a.id),
      ),
    ];

    set({
      articles: merged,
      count: merged.length,
    });
  },
});
