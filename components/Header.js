import Link from "next/link"
import { useRouter } from 'next/router'
import { Container, Nav, Navbar } from "react-bootstrap";

const options = [
  { text: "Home", path: "/" },
  { text: "Blog", path: "/blog" }
]

export default function Header() {
  const route = useRouter();

  const getMenu = () => {
    return options.map((option, index) => {

      return (
        <Nav.Link key={index} href={option.path}>
          {option.text}
        </Nav.Link>
      )
    })
  }
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#">Arthur Moro (esse é o meu nome)</Navbar.Brand>
          <Nav>
            {getMenu()}
            <Nav.Link href="https://rendafixa.app.br">
              Calculadora renda fixa
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}