// In Next.js parallel route, we can add default.tsx file to the parallel route folder to define the default content for that route. 
// Parallel routes should have same nested routes. Archive has year nested route but it is not present in latest route. So we can add default.tsx file to latest route to define the default content for that route.
// Also, if the content of default.tsx file is same as page.tsx, we can rid of page.tsx and instead use default.tsx file to define the content for that route. 

import NewsList from "@/components/newsList";
import { getLatestNews } from "@/utils/news";

export default function LatestNewsPage() {
  const latestNews = getLatestNews();
  return (
    <>
      <h2>Latest News</h2>
      <NewsList news={latestNews} />
    </>
  )
};