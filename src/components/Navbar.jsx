import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <>
      <Navbar bg="danger" variant="dark">
        <Container className="justify-content-start">
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="me-auto">
              <Link to="/" className="text-decoration-none text-white p-2">
                🏠 Home
              </Link>
              <Link
                to="/contacto"
                className="text-decoration-none text-white p-2"
              >
                📩 Contacto
              </Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Brand>
            <Link to="/" className="text-decoration-none text-white p-2">
              🍰 Happy Cake
            </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}
