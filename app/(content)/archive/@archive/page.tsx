import { getAvailableNewsYears } from "@/utils/news"
import Link from "next/link";

export default async function ArchivePage() {
  const yearLinks = await getAvailableNewsYears();
  return (
    <header id="archive-header">
      <nav>
        <ul>
          {yearLinks.map((link) => (
            <li key={link}>
              <Link href={`/archive/${link}`}>{link}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
};