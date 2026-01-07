import { create } from "zustand";
import { spaceflightArticleApi } from "../api/SpaceflightArticleApi";
import type { ArticleInterface } from "../interfaces/ArticleInterface";
import type { ArticleListInterface } from "../interfaces/ArticleListInterface";

type BlogState = {
  searchQuery: string;
  setSearchQuery: (value: string) => void;

  articles: ArticleInterface[];
  articlesMeta?: Omit<ArticleListInterface, "results">;
  isLoadingArticles: boolean;
  error?: unknown;
  fetchArticles: (params?: Record<string, any>) => Promise<void>;

  selectedArticleId?: string | null;
  setSelectedArticleId: (id?: string | null) => void;
};

export const blogUIStore = create<BlogState>((set) => ({
  searchQuery: "",
  setSearchQuery: (value: string) => set({ searchQuery: value }),

  articles: [],
  articlesMeta: undefined,
  isLoadingArticles: false,
  error: undefined,
  fetchArticles: async (params) => {
    set({ isLoadingArticles: true, error: undefined });
    try {
      const response = await spaceflightArticleApi.getArticles(
        params ? { ...params } : undefined
      );

      set({
        articles: response.results ?? [],
        articlesMeta: {
          count: response.count,
          next: response.next,
          previous: response.previous,
        },
        isLoadingArticles: false,
      });
    } catch (err) {
      set({ error: err, isLoadingArticles: false });
      throw err;
    }
  },

  selectedArticleId: null,
  setSelectedArticleId: (id = null) => set({ selectedArticleId: id }),
  openArticle: (id: string, navigate?: (to: string) => void) => {
    set({ selectedArticleId: id });
    if (navigate) navigate(`/article/${id}`);
  },
}));
