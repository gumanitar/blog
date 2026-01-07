import { Card, Typography } from "@mui/material";
import { type ArticleInterface } from "../../interfaces/ArticleInterface";
import styles from "../../styles/article.module.scss";
import clsx from "clsx";
import ArticleText from "./ArticleText";

interface ArticleListProps {
  article: ArticleInterface;
}

export default function Article({ article }: ArticleListProps) {
  return (
    <Card className={clsx(styles.article, styles.articleContainer)}>
      <Typography variant="h1" className={styles.title}>
        {article.title}
      </Typography>
      <Typography className={styles.text}>
        <ArticleText />
      </Typography>
    </Card>
  );
}
