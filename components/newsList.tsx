import { NEWS } from "@/mocks/dummyNews";
import Link from "next/link";

export default function NewsList({ news }: { news: NEWS[] }) {
  return (
    <ul className="news-list">
      {news.map((newsItem: NEWS) => (
        <li key={newsItem.id}>
          <Link href={`/news/${newsItem.slug}`}>{newsItem.title}
            <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
            <span>{newsItem.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};