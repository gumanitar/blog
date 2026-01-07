import type { ArticleInterface } from "./ArticleInterface";

export interface ArticleListInterface {
  count: 123;
  next: "string";
  previous: "string";
  results: ArticleInterface[];
}
