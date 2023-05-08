/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import { marked } from "marked";
import { Container } from "react-bootstrap";

export default function Post({ post }) {
  return (
    <Container>
      <Link href="/blog">
        <p style={{ padding: "5px", cursor: "pointer" }}>
          Voltar
        </p>
      </Link>
      <div className="post-page max-w-4xl mx-auto my-0	p-8">
        <div className="max-w-full">
          <div className="w-[70%] float-left">
            <h1 className="text-3xl py-10">
              {post?.title}
            </h1>
          </div>
          <div className="w-[30%] float-left">
            <p className="text-[12px]">
              Data da postagem: {new Date(post?.date).toLocaleDateString("pt-BR")}
            </p>

          </div>
        </div>

        <div className="max-w-full float-left">
          <h3 className="py-2">{post?.description}</h3>
        </div>
        <div className="max-w-full float-left"></div>
        <div dangerouslySetInnerHTML={{ __html: marked(post?.content || "") }} />
      </div>
    </Container>
  )
}