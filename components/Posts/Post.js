/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import { Button, Card, Col } from "react-bootstrap"

export default function Post({ post }) {
  return (
    <Col>
      <Card style={{ width: "30%" }}>
        <Card.Img variant="top" src={`/${post.cover}`} />
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Card.Text>
            {post.description}
          </Card.Text>
          <Link href={`/post/${post.slug}`}>
            <Button href="" variant="primary">Visualizar</Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  )
}