/* eslint-disable @next/next/no-img-element */
import Link from "next/link"

export default function Post({ post }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <Link href={`/post/${post.slug}`}>
        <a className="hover:underline">
          <img
            className="w-full" src={`/${post.cover}`}
            alt={post.title}
          />
          <div className="px-6 py-4">
            <p className="font-bold text-xl mb-2">{post.title}</p>
            <p className="text-gray-700 text-base">{post.description}</p>
          </div>
        </a>
      </Link>
      <div className="px-6 pt-4 pb-2">
        {
          post.tags?.map(tag => {
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{tag}</span>
          })
        }
      </div>
    </div>
  )
}