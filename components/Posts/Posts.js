import Post from "@/components/Posts/Post";
import { Container, Row } from "react-bootstrap";

function Posts({ posts }) {
  return (
    <Row md={4}>
      {posts?.map((post, index) => (<Post key={index} post={post} />))}
    </Row>
  )
}

export default Posts;