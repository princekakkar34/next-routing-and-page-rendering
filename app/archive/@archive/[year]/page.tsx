import NewsList from "@/components/newsList";
import { getNewsForYear } from "@/utils/news";

export default async function NewsPageItem({ params }: { params: { year: string } }) {
  const { year } = await params;
  const newsForYear = getNewsForYear(year);
  return (
    <NewsList news={newsForYear} />
  )
};