/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import React from "react"
import { Button, Card, Col } from "react-bootstrap"

export default function Post({ post }) {
  return (
    <Col style={{ width: "30%" }}>
      <Card className="custom-card">
        <Card.Img variant="top" src={`/${post.cover}`}
          className="custom-card-image" />
        <Card.Body className="custom-card-body">
          <Card.Title>{post.title}</Card.Title>
          <Card.Text>
            {post.description}
          </Card.Text>
        </Card.Body>
        <Link href={`/post/${post.slug}`} >
          <Button href="" variant="primary" className="custom-card-cta">Visualizar</Button>
        </Link>
      </Card>

    </Col>
  )
}