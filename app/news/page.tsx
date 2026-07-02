import NewsList from "@/components/newsList";
import { DUMMY_NEWS } from "@/mocks/dummyNews";

export default function NewsPage() {
  return (
    <>
      <h1>News Page</h1>
      <NewsList news={DUMMY_NEWS} />
    </>
  );
}