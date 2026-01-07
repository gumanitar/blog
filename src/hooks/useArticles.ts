import { useQuery } from "@tanstack/react-query";
import { spaceflightArticleApi } from "../api/SpaceflightArticleApi";

export const useArticles = (search?: string) =>
  useQuery({
    queryKey: ["articles", { search }],
    queryFn: async () => {
      if (!search?.trim()) {
        return spaceflightArticleApi.getArticles();
      }

      const trimmedSearch = search.trim();

      let articles = await spaceflightArticleApi.getArticles({
        title_contains: trimmedSearch,
      });

      if (!articles.results.length) {
        articles = await spaceflightArticleApi.getArticles({
          summary_contains: trimmedSearch,
        });
      }

      return articles;
    },
  });
