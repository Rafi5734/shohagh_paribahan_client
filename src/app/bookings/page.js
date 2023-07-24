"use client";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./booking.module.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function Bookings() {
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
    <div className="mt-5 pt-5">
      <Container>
        <h3 className="border-bottom border-danger pb-2">
          Booking Information
        </h3>
        <Row>
          <Col xs={12} sm={4} md={4} lg={4} className="mb-3">
            {/* <Form
              className="border p-3 rounded bg-light"
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
            >
              <Row className="mb-3">
                <Form.Group
                  className="mb-3"
                  as={Col}
                  md="12"
                  controlId="validationCustom01"
                >
                  <Form.Label>Full name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Full name"
                    // defaultValue="Mark"
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid name.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  as={Col}
                  md="12"
                  controlId="validationCustom02"
                >
                  <Form.Label>Mobile number</Form.Label>
                  <Form.Control
                    required
                    type="number"
                    placeholder="018XXXXXXXX"
                    // defaultValue="Otto"
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid phone number.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  as={Col}
                  md="12"
                  controlId="validationCustom03"
                >
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="email" required />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid email.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="12" controlId="validationCustom03">
                  <Form.Label>Payment Method</Form.Label>
                  <Form.Select size="sm" aria-label="Default select example">
                    <option>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid email.
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Button type="submit">Confirm Reservation</Button>
            </Form> */}
          </Col>
          <Col xs={12} sm={4} md={4} lg={4} className="mb-3"></Col>
          <Col xs={12} sm={4} md={4} lg={4} className="mb-3"></Col>
        </Row>
      </Container>
    </div>
  );
}
