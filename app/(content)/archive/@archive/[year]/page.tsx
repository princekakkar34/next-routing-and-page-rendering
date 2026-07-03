// folders with @ in the name are treated as special folders in Next.js. They are not part of the URL path and are used for organizing code. In this case, the @archive folder is used to store the archive pages for different years.
// they are called slots in Next.js. They are used to define parallel routes in the application.

import NewsList from "@/components/newsList";
import { getNewsForYear } from "@/utils/news";

export default async function NewsPageItem({ params }: { params: { year: string } }) {
  const { year } = await params;
  const newsForYear = getNewsForYear(year);
  return (
    <NewsList news={newsForYear} />
  )
};