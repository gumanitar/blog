import { useArticles } from "../hooks/useArticles";
import ArticlesList from "../components/article/ArticlesList";
import FilterBox from "../components/FilterBox";
import { useState } from "react";
import type { KeyboardEvent } from "react";
import NotFound from "../components/NotFound";
import ErrorPage from "./ErrorPage";
import ArticlesListSkeleton from "../components/ArticlesListSkeleton";
export default function Home() {
  const [input, setInput] = useState("");
  const [query, setQuery] = useState("");
  const { data, isLoading, error } = useArticles(query);

  if (error) return <ErrorPage />;

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      setQuery(input);
    }
  };

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
      <FilterBox
        value={input}
        onChange={setInput}
        onKeyDown={handleKeyDown}
        resultsCount={data?.count}
      />
      {content}
    </>
  );
}
