import fs from "fs"
import path from "path";
import matter from "gray-matter";

import Posts from "components/Posts/Posts.js";

export default function Blog({ posts }) {
  return (
    <div className="p-8">
      <h2 className="text-3xl">
        Blog
      </h2>
      <Posts posts={posts} />
    </div>
  )
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("posts"));
  const posts = files.map(file => {
    const slug = file.replace(".md", "");
    const markdownMeta = fs.readFileSync(path.join("posts", file), "utf-8");
    const { data: { title, date, cover, description } } = matter(markdownMeta);

    return { slug, title, date, cover, description }
  })
  return {
    props: { posts }
  }
}