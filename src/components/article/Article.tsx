import { Card, Typography } from "@mui/material";

import { type ArticleInterface } from "../../interfaces/ArticleInterface";
import ArticleText from "./ArticleText";

interface ArticleListProps {
  article: ArticleInterface;
}

export default function Article({ article }: ArticleListProps) {
  return (
    <Card className="article articleContainer">
      <Typography variant="h1" className="article__title">
        {article.title}
      </Typography>
      <Typography className="article__text">
        <ArticleText />
      </Typography>
    </Card>
  );
}
