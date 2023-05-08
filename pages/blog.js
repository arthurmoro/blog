import fs from "fs"
import path from "path";
import matter from "gray-matter";
import Head from "next/head";

import Posts from "@/components/Posts/Posts";
import { Container } from "react-bootstrap";

export default function Blog({ posts }) {
  return (
    <Container>
      <Head>
        <title>Blog - Arthur Moro</title>
      </Head>
      <div className="p-8">
        <h2 className="text-3xl">
          Blog
        </h2>
        <Posts posts={posts} />
      </div>
    </Container>
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