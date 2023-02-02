import Link from "next/link"
import { useRouter } from 'next/router'

const options = [
  { text: "Home", path: "/" },
  { text: "Blog", path: "/blog" }
]

export default function Header() {
  const route = useRouter();

  const getMenu = () => {
    return options.map((option, index) => {

      const selectedClass = option.path === route.pathname && ("bg-gray-50 text-blue-500");
      return (
        <Link key={index} href={option.path}>
          <a href="#" className={` p-2 lg:px-4 md:mx-2 text-white ${selectedClass} rounded hover:bg-gray-50 hover:text-blue-500 transition-colors duration-300`}>
            {option.text}
          </a>
        </Link>
      )
    })
  }
  return (
    <div className="bg-blue-500 py-4">
      <div className="container mx-auto md:flex">
        <div className="grid grid-rows-1 grid-cols-10">
          <div className="flex justify-between items-center col-start-1 col-end-8">
            <a href="#" className="font-bold text-xl text-white">Arthur Moro</a>
          </div>
          <div className="col-start-8">
            {getMenu()}
          </div>
        </div>
      </div>
    </div>
  )
}