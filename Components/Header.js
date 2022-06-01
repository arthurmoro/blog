import Link from "next/link";

export default function Header({ Component, pageProps }) {
  return (
    <header>
      <div className="container">
        <ul>
          <li><Link href={"/"}> Home Page</Link></li>
          <li><Link href={"/blog"}>Blog</Link></li>
        </ul>
      </div>
    </header>
  )
}