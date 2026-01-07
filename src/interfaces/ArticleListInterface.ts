import type { ArticleInterface } from "./ArticleInterface";

export interface ArticleListInterface {
  count: number;
  next: string;
  previous: string;
  results: ArticleInterface[];
}
