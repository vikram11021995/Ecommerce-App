import React, { useState } from "react";
import { Form, Row, Button, Col } from "react-bootstrap";

function UserSignup() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="3" controlId="validationCustom01"></Form.Group>

        <Form.Group as={Col} md="6" controlId="validationCustom01">
          <Form.Label>Name</Form.Label>
          <Form.Control required type="text" placeholder="name" />
          <Form.Control.Feedback type="invalid">
            name is required.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="3" controlId="validationCustom01"></Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>Email</Form.Label>
          <Form.Control type="text" placeholder="email" required />
          <Form.Control.Feedback type="invalid">
            email is required.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="3" controlId="validationCustom01"></Form.Group>

        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>Password</Form.Label>
          <Form.Control type="text" placeholder="password" required />
          <Form.Control.Feedback type="invalid">
            password is required.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="3" controlId="validationCustom01"></Form.Group>

        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="text" placeholder="confirm password" required />
          <Form.Control.Feedback type="invalid">
            Confirm password is required.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>

      <Button type="submit" style={{marginLeft: "693px"}}>Submit form</Button>
    </Form>
  );
}

//   render(<UserSignup />);
export default UserSignup;
