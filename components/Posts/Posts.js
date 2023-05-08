import Post from "@/components/Posts/Post";
import { Container } from "react-bootstrap";

function Posts({ posts }) {
  return (
    <section>
      {posts?.map((post, index) => (<Post key={index} post={post} />))}
    </section>
  )
}

export default Posts;