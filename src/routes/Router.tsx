import { Link, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Article from "../pages/ArticlePage";
import NotFoundPage from "../pages/NotFoundPage";

export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article/:id" element={<Article />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
