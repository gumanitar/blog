import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

import type { ArticleInterface } from "../../interfaces/ArticleInterface";

import NavButton from "../NavButton";
import PublishedAt from "./PublishedAt";

import { highlightWords } from "../../utils/highlight";
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
    <Card key={article.id} className="article prewievContainer">
      <CardMedia
        className="article__media"
        image={article.image_url}
        title={article.image_url}
      />
      <CardContent>
        <Box>
          <Typography variant="body2">
            <PublishedAt
              className="article__publishedAt"
              date={article.published_at}
            />
          </Typography>

          <Typography variant="h2" className="article__title">
            {highlightWords(article.title, search, "article--highlight")}
          </Typography>
        </Box>
      </CardContent>

      <CardContent>
        <Typography variant="body2" className="article__summary">
          {highlightWords(summary, search, "article--highlight")}
        </Typography>
      </CardContent>
      <CardActions >
        <NavButton
          label="Read more"
          to={`article/${article.id}`}
          arrow="right"
        />
      </CardActions>
    </Card>
  );
}
