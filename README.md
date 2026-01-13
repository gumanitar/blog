# Blog SPA - Spaceflight News Reader

[A single-page application for browsing and reading articles](https://relaxed-snickerdoodle-9ca057.netlify.app/ ). Built with React, TypeScript, and powered by the [Spaceflight News API](https://spaceflightnewsapi.net/).

## Project Structure

```
src/
├── api/
│   ├── apiClient.ts           
│   ├── SpaceflightApi.ts      
│   └── SpaceflightArticleApi.ts 
├── components/
│   ├── article/
│   │   ├── Article.tsx        
│   │   ├── ArticlesList.tsx   
│   │   ├── ArticlePreview.tsx 
│   │   ├── ArticleText.tsx    
│   │   └── PublishedAt.tsx    
│   ├── Banner.tsx             
│   ├── FilterBox.tsx         
│   ├── NavButton.tsx          
│   └── NotFound.tsx           
├── hooks/
│   ├── useArticles.ts         
│   ├── useArticle.ts          
│   ├── useFormattedDate.ts   
│   └── useTruncatedText.ts    
├── interfaces/
│   ├── ArticleInterface.ts    
│   └── ArticleListInterface.ts 
├── pages/
│   ├── Home.tsx               
│   ├── ArticlePage.tsx        
│   ├── ErrorPage.tsx          
│   └── NotFoundPage.tsx     
├── routes/
│   └── Router.tsx             
├── stores/
│   ├── blogStore.tsx          
│   └── searchStore.tsx        
├── styles/
│   ├── global.scss           
│   ├── article.module.scss   
│   ├── banner.module.scss     
│   └── navButton.module.scss  
├── utils/
│   └── highlight.tsx          
├── App.tsx                    
└── main.tsx                  
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
