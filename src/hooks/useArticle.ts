import { useQuery } from "@tanstack/react-query";
import { spaceflightArticleApi } from "../api/SpaceflightArticleApi";

export const useArticle = (id: string) =>
  useQuery({
    queryKey: ["article", id],
    queryFn: () => spaceflightArticleApi.getArticleById(id),
  });
