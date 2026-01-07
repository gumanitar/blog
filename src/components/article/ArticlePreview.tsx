import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";

import styles from "../../styles/article.module.scss";
import clsx from "clsx";

import type { ArticleInterface } from "../../interfaces/ArticleInterface";
import { highlightWords } from "../../utils/highlight";
import NavButton from "../NavButton";
import { Box } from "@mui/material";
import PublishedAt from "./PublishedAt";
import { useTruncatedText } from "../../hooks/useTruncatedText";
interface ArticlePreviewProps {
  article: ArticleInterface;
  search?: string;
}

export default function ArticlePreview({
  article,
  search,
}: ArticlePreviewProps) {
  const summary = useTruncatedText(article.summary);

  return (
    <Card
      key={article.id}
      className={clsx(styles.article, styles.previewContainer)}
    >
      <CardMedia
        className={styles.media}
        image={article.image_url}
        title={article.image_url}
      />
      <CardContent>
        <Box>
          <Typography variant="body2">
            <PublishedAt
              className={styles.publishedAt}
              date={article.published_at}
            />
          </Typography>

          <Typography variant="h2" className={styles.title}>
            {highlightWords(article.title, search, styles.highlight)}
          </Typography>
        </Box>
      </CardContent>

      <CardContent>
        <Typography variant="body2" className={styles.summary}>
          {highlightWords(summary, search, styles.highlight)}
        </Typography>
      </CardContent>
      <CardActions className={styles.actions}>
        <NavButton
          label="Read more"
          to={`article/${article.id}`}
          arrow="right"
        />
      </CardActions>
    </Card>
  );
}
