import { useParams } from "react-router-dom";

import { useArticle } from "../hooks/useArticle";

import { Skeleton } from "@mui/material";

import ErrorPage from "./ErrorPage";
import NotFoundPage from "./NotFoundPage";
import NavButton from "../components/NavButton";
import Article from "../components/article/Article";
import Banner from "../components/Banner";

export default function ArticlePage() {
  const slug = useParams();
  const { data, isLoading, error } = useArticle(slug.id?.toString()!);

  if (isLoading) return <Skeleton variant="rounded" width={2000} height={60} />;
  if (error) return <ErrorPage />;
  if (!data) return <NotFoundPage />;

  return (
    <>
      <Banner />
      <Article article={data} />
      <NavButton label="Back to homepage" to="/" arrow="left" />
    </>
  );
}
