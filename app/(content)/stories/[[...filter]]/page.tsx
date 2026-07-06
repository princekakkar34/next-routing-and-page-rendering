import NewsList from "@/components/newsList";
import { NEWS } from "@/mocks/dummyNews";
import { getAvailableNewsMonths, getAvailableNewsYears, getLatestNews, getMonthName, getNewsForYear, getNewsForYearAndMonth } from "@/utils/news";
import Link from "next/link";

export default async function Stories({ params }: { params: { filter: string[] } }) {
  const { filter } = await params;
  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];
  const latestNews = await getLatestNews();
  const availableYears = await getAvailableNewsYears();

  let news: NEWS[] | undefined = undefined;
  let links = availableYears;
  if (selectedYear) {
    if (selectedMonth) {
      news = await getNewsForYearAndMonth(selectedYear, selectedMonth);
      links = [];
    } else {
      news = await getNewsForYear(selectedYear);
      links = getAvailableNewsMonths(selectedYear);
    }
  }

  let newsContent = <p>No news found for the selected period.</p>

  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />
  }

  if (
    (selectedYear && !availableYears.includes(selectedYear)) ||
    (selectedMonth && !getAvailableNewsMonths(selectedYear).includes(selectedMonth))
  ) {
    throw new Error("Invalid year or month selected.");
  }

  return (
    <div>
      <h1>News Stories according to year and month</h1>
      <section id="archive-filter">
        <header id="archive-header">
          <nav>
            <ul>
              {links.map((link) => {
                const href = selectedYear ? `/stories/${selectedYear}/${link}` : `/stories/${link}`;
                return (
                  <li key={link}>
                    <Link href={href}>{selectedYear ? getMonthName(link) : link}</Link>
                  </li>
                )
              })}
            </ul>
          </nav>
        </header>
        {newsContent}
      </section>
      <section id="archive-latest">
        <h2>Latest News</h2>
        <NewsList news={latestNews} />
      </section>
    </div>

  )
};