import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default () => {
  return (
    <Container className="pt-5">
      <h1 className="mb-4 text-center">
        Llena el formulario para que te contactemos
      </h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Nombres y Apellidos</Form.Label>
          <Form.Control type="text" placeholder="Ingresa tu nombre completo" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Ingresa tu correo" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Número de teléfono</Form.Label>
          <Form.Control type="number" placeholder="Ingresa tu número" />
        </Form.Group>

        <Button variant="danger" type="submit">
          Enviar
        </Button>
      </Form>
    </Container>
  );
};
