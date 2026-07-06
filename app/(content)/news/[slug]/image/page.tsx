// import { DUMMY_NEWS } from "@/mocks/dummyNews";
import { getNewsItem } from "@/utils/news";
import { notFound } from "next/navigation";

export default async function ImagePage({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const newsItems = await getNewsItem(slug);

  if (!newsItems) {
    notFound();
  }

  return (
    <div className="fullscreen-image">
      <img src={`/images/news/${newsItems?.image}`} alt={newsItems?.title} />
    </div>
  )
}