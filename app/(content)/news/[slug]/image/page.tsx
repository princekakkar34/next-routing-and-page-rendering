import { DUMMY_NEWS } from "@/mocks/dummyNews";
import { notFound } from "next/navigation";

export default async function ImagePage({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const newsItems = DUMMY_NEWS.find((newsItem) => newsItem.slug === slug);

  if (!newsItems) {
    notFound();
  }

  return (
    <div className="fullscreen-image">
      <img src={`/images/news/${newsItems?.image}`} alt={newsItems?.title} />
    </div>
  )
}