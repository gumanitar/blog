import SpaceflightApi from "./SpaceflightApi";
import { type AxiosRequestConfig } from "axios";
import type { ArticleInterface } from "../interfaces/ArticleInterface";
import type { ArticleListInterface } from "../interfaces/ArticleListInterface";
class SpaceflightArticleApi extends SpaceflightApi {
  private static readonly endpoint: string = "articles";

  async getArticles(
    params?: {},
    config?: AxiosRequestConfig
  ): Promise<ArticleListInterface> {
    try {
      const response = await this.get<ArticleListInterface>(
        `/${SpaceflightArticleApi.endpoint}`,
        { params, ...config }
      );

      return response;
    } catch (error) {
      console.error("Error fetching articles:", error);
      throw error;
    }
  }

  async getArticleById(
    id: string,
    config?: AxiosRequestConfig
  ): Promise<ArticleInterface> {
    try {
      const response = await this.get<ArticleInterface>(
        `/${SpaceflightArticleApi.endpoint}/${id}`,
        config
      );
      return response;
    } catch (error) {
      console.error("Error fetching article:", error);
      throw error;
    }
  }
}

export const spaceflightArticleApi = new SpaceflightArticleApi();
