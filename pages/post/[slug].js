import fs from "fs"
import path from "path";
import matter from "gray-matter";
import Post from "components/Post"


export default function Blog({ post }) {
  return (
    <Post post={post} />
  )
}

export async function getStaticPaths(props) {
  const posts = fs.readdirSync(path.join("posts"));
  const paths = posts.map(post => ({ params: { slug: post.replace(".md", "") } }))
  return { paths, fallback: true }
}

export async function getStaticProps(props) {
  const postFile = fs.readFileSync(path.join("posts", `${props.params.slug}.md`), "utf-8");
  const { data, content } = matter(postFile)

  return {
    props: {
      post: {
        title: data?.title,
        date: data?.date,
        description: data?.description,
        cover: data?.cover,
        content
      }
    }
  }
}