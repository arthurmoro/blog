import Post from "@/components/Posts/Post";
import { Container, Row } from "react-bootstrap";

function Posts({ posts }) {
  return (
    // center this div
    <Row md={4} className="posts-centered-list">
      {posts?.map((post, index) => (<Post key={index} post={post} />))}
    </Row>
  )
}

export default Posts;