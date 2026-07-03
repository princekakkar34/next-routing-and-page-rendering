import Link from "next/link";
import NavLink from "./navLink";

export default function MainHeader() {
  return (
    <header id="main-header">
      <div id='logo'>
        <Link href="/">Home</Link>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink href="/news">News</NavLink>
          </li>
        </ul>
        <ul>
          <li>
            <NavLink href="/archive">Archive</NavLink>
          </li>
        </ul>
        <ul>
          <li>
            <NavLink href="/stories">Stories</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}