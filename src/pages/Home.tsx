import { useSearchStore } from "../stores/searchStore";
import { useArticles } from "../hooks/useArticles";

import ArticlesList from "../components/article/ArticlesList";
import FilterBox from "../components/FilterBox";
import NotFound from "../components/NotFound";
import ErrorPage from "./ErrorPage";
import ArticlesListSkeleton from "../components/ArticlesListSkeleton";

export default function Home() {
  const { query } = useSearchStore();
  const { data, isLoading, error } = useArticles(query);

  if (error) return <ErrorPage />;

  let content: React.ReactNode;

  if (isLoading) {
    content = <ArticlesListSkeleton />;
  } else if (!data?.count) {
    content = <NotFound />;
  } else {
    content = <ArticlesList articles={data} search={query} />;
  }

  return (
    <>
      <FilterBox resultsCount={data?.count} />
      {content}
    </>
  );
}
