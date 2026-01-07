# Blog SPA - Spaceflight News Reader

A single-page application for browsing and reading articles. Built with React, TypeScript, and powered by the [Spaceflight News API](https://spaceflightnewsapi.net/).

## Project Structure

```
src/
├── api/
│   ├── apiClient.ts           # Base Axios client
│   ├── SpaceflightApi.ts      # Spaceflight API base
│   └── SpaceflightArticleApi.ts # Article endpoints
├── components/
│   ├── article/
│   │   ├── Article.tsx        # Full article view
│   │   ├── ArticlesList.tsx   # List of articles
│   │   ├── ArticlePreview.tsx # Article preview card
│   │   ├── ArticleText.tsx    # Article body
│   │   └── PublishedAt.tsx    # Date formatter
│   ├── Banner.tsx             # Top banner
│   ├── FilterBox.tsx          # Search filter UI
│   ├── NavButton.tsx          # Navigation button
│   └── NotFound.tsx           # 404 message
├── hooks/
│   ├── useArticles.ts         # Fetch articles list (React Query)
│   ├── useArticle.ts          # Fetch single article (React Query)
│   ├── useFormattedDate.ts    # Date formatting utility
│   └── useTruncatedText.ts    # Text truncation utility
├── interfaces/
│   ├── ArticleInterface.ts    # Article type definition
│   └── ArticleListInterface.ts # Articles list response type
├── pages/
│   ├── Home.tsx               # Homepage with article list
│   ├── ArticlePage.tsx        # Single article page
│   ├── ErrorPage.tsx          # Error state
│   └── NotFoundPage.tsx       # 404 page
├── routes/
│   └── Router.tsx             # Route configuration
├── stores/
│   ├── blogStore.tsx          # Main Zustand store (UI state)
│   └── searchStore.tsx        # Search query state
├── styles/
│   ├── global.scss            # Global styles & fonts
│   ├── article.module.scss    # Article component styles
│   ├── banner.module.scss     # Banner styles
│   └── navButton.module.scss  # Button styles
├── utils/
│   └── highlight.tsx          # Text highlighting utility
├── App.tsx                    # Root component
└── main.tsx                   # React root & providers setup
```

### Environment Variables

Create a `.env` file in the root (or use existing):

```dotenv
VITE_SPACEFLIGHT_API_URL=https://api.spaceflightnewsapi.net/v4
```

### Development

Start the dev server:

```bash
npm run dev
```

Navigate to `http://localhost:5173` (default Vite port).


### Data Flow

1. User types search query → `setSearchQuery()` updates Zustand store
2. `Home` component reads query and passes to `useArticles(query)`
3. React Query caches results by query key: `["articles", { search }]`
4. Component renders article list
5. Click article → `openArticle(id, navigate)` updates store + navigates
6. `ArticlePage` fetches detail via `useArticle(id)` and renders

## API Integration

The app calls [Spaceflight News API](https://spaceflightnewsapi.net/):

- `GET /articles` — List articles (supports `title_contains`, `summary_contains` filtering)
- `GET /articles/{id}` — Fetch single article

See [src/api/SpaceflightArticleApi.ts](src/api/SpaceflightArticleApi.ts) for implementation.


**Built with ❤️**
