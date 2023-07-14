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
            <Form
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
            </Form>
          </Col>
          <Col xs={12} sm={4} md={4} lg={4} className="mb-3">
            <div className="p-3 bg-light">
              <h6 className="border-bottom pb-2">Journey Details</h6>
              <p className="text-success fw-bold m-0 p-0">Dhaka - Jessor</p>
              <p className="m-0 p-0 fs-6">Tungipara Express</p>
              <p className="m-0 p-0 fs-6">Sat, 15 Jul 2023, 06:10 AM</p>
              <p className="m-0 p-0 fs-6">
                Seat No(s): <span className="text-success">C3, D3, D4</span>
              </p>
              <p className="m-0 p-0 fs-6">
                Boarding at Gulistan Bus point , 06:10 AM
              </p>
            </div>
          </Col>
          <Col xs={12} sm={4} md={4} lg={4} className="mb-3">
            <div className="p-3 bg-light">
              <h6 className="border-bottom pb-2">Fare Details</h6>
              <div className="d-flex justify-content-between border-bottom">
                <p>Ticket Price</p>
                <p>2000</p>
              </div>
              <div className="d-flex justify-content-between border-bottom">
                <p>Discount</p>
                <p>2000</p>
              </div>
              <div className="d-flex justify-content-between border-bottom">
                <p className="fw-bold">Total</p>
                <p className="fw-bold">2000</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
