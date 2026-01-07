import { Grid } from "@mui/material";

import { type ArticleListInterface } from "../../interfaces/ArticleListInterface";
import ArticlePreview from "./ArticlePreview";


interface ArticlesListProps {
  articles: ArticleListInterface;
  search?: string;
}

export default function ArticlesList({ articles, search }: ArticlesListProps) {
  const article = articles.results.map((article) => (
    <ArticlePreview key={article.id} article={article} search={search} />
  ));
  return <Grid className="articleListContainer">{article}</Grid>;
}
