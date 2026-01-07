import { useParams } from "react-router-dom";
import NavButton from "../components/NavButton";
import { useArticle } from "../hooks/useArticle";
import Article from "../components/article/Article";
import Banner from "../components/Banner";

export default function ArticlePage() {
  const slug = useParams();
  const { data, isLoading, error } = useArticle(slug.id?.toString()!);
  if (isLoading) return null;
  if (error) return null;
  if (!data) return <div>No article found</div>;

  return (
    <>
      <Banner />
      <Article article={data} />
      <NavButton label="Back to homepage" to="/" arrow="left" />
    </>
  );
}
