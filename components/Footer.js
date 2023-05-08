import Image from "next/image";
import { Container, Nav, Navbar } from "react-bootstrap";

export default function Footer() {
  return (
    <Navbar bg="primary" variant="dark" fixed="bottom">
      <Container>
        <Navbar.Brand href="#">Arthur Moro</Navbar.Brand>
        <Nav>
          <Nav.Link target="_blank" href="https://github.com/arthurmoro">
            <Image width="25px" height="25px" alt="ícone do github em preto em branco" src="/icons/github.svg"></Image>
          </Nav.Link>
          <Nav.Link target="_blank" href="https://linkedin.com/in/arthurmoro">
            <Image width="25px" height="25px" alt="ícone do linkedin em preto e branco" src="/icons/linkedin.svg"></Image>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}