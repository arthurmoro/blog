import Link from "next/link"
import { useRouter } from 'next/router'

const options = [
  { text: "Home", path: "/" },
  { text: "Blog", path: "/blog" }
]

export default function Header({ pageProps }) {
  const route = useRouter();
  console.log()
  return (
    <div className="bg-blue-500 py-2 md:py-4">
      <div className="container px-4 mx-auto md:flex md:items-center">
        <div className="lex justify-between items-center">
          <a href="#" className="font-bold text-xl text-white">Arthur Moro</a>
        </div>
        <div className="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0" id="navbar-collapse">
          {
            options.map((option, index) => (
              <Link key={index} href={option.path}>
                <a href="#" className={`
                p-2 lg:px-4 md:mx-2 text-white 
                ${option.path === route.pathname && ("bg-gray-50 text-blue-500")} 
                rounded hover:bg-gray-50 hover:text-blue-500 transition-colors duration-300`}
                >
                  {option.text}
                </a>
              </Link>
            ))
          }
        </div>
      </div>
    </div>
  )
}