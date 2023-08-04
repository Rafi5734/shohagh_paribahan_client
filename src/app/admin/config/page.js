"use client";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import { Container } from "react-bootstrap";

const Config = () => {
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
        <h3 className="mt-3 text-center">Ticket configure</h3>
        <hr />
        <Form
          className="mb-5"
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
        >
          <Row className="mb-3">
            <Form.Group
              as={Col}
              xs="12"
              sm="6"
              md="4"
              lg="4"
              controlId="validationCustom01"
              className="mb-3"
            >
              <Form.Label>From</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Journey from"
                // defaultValue="Mark"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Please provide a valid location.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              as={Col}
              xs="12"
              sm="6"
              md="4"
              lg="4"
              controlId="validationCustom02"
              className="mb-3"
            >
              <Form.Label>To</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Journey to"
                // defaultValue="Otto"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Please provide a location.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              as={Col}
              xs="12"
              sm="6"
              md="4"
              lg="4"
              controlId="validationDate"
              className="mb-2"
            >
              <Form.Label>Journey date</Form.Label>
              <Form.Control required type="date" />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group
              as={Col}
              xs="12"
              sm="6"
              md="4"
              lg="4"
              controlId="validationCustom01"
              className="mb-3"
            >
              <Form.Label>Boarding place</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Boarding place"
                // defaultValue="Mark"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Please provide a valid location.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              as={Col}
              xs="12"
              sm="6"
              md="4"
              lg="4"
              controlId="validationCustom02"
              className="mb-3"
            >
              <Form.Label>Boarding time</Form.Label>
              <Form.Control required type="time" />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Please provide a valid time.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              as={Col}
              xs="12"
              sm="6"
              md="4"
              lg="4"
              controlId="validationDate"
              className="mb-2"
            >
              <Form.Label>Reporting place</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Reporting place"
                // defaultValue="Mark"
              />

              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Please provide a location.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group
              as={Col}
              xs="12"
              sm="6"
              md="4"
              lg="4"
              controlId="validationCustom01"
              className="mb-3"
            >
              <Form.Label>Departure place</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Departure place"
                // defaultValue="Mark"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Please provide a valid location.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              as={Col}
              xs="12"
              sm="6"
              md="4"
              lg="4"
              controlId="validationCustom02"
              className="mb-3"
            >
              <Form.Label>Departure time</Form.Label>
              <Form.Control required type="time" />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Please provide a valid time.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              as={Col}
              xs="12"
              sm="6"
              md="4"
              lg="4"
              controlId="validationDate"
              className="mb-2"
            >
              <Form.Label>Fare (BDT)</Form.Label>
              <Form.Control
                required
                type="number"
                placeholder="Journey fare (BDT)"
                // defaultValue="Mark"
              />

              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Please provide price.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group
              as={Col}
              xs="12"
              sm="6"
              md="4"
              lg="4"
              controlId="validationCustom01"
              className="mb-3"
            >
              <Form.Label>Extra information (optional)</Form.Label>
              <Form.Control
                type="text"
                placeholder="Extra information (optional)"
                // defaultValue="Mark"
              />
            </Form.Group>
            <Form.Group
              as={Col}
              xs="12"
              sm="6"
              md="4"
              lg="4"
              controlId="validationCustom02"
              className="mb-3"
            >
              <Form.Label>Seats</Form.Label>
              <Form.Control required type="number" />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Please provide a valid number.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              as={Col}
              xs="12"
              sm="6"
              md="4"
              lg="4"
              controlId="validationDate"
              className="mb-2"
            >
              <Form.Label>Coach type</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Select a coach type</option>
                <option value="ac">AC</option>
                <option value="non_ac">Non AC</option>
              </Form.Select>
            </Form.Group>
          </Row>

          <Button type="submit">Publish ticket</Button>
        </Form>
      </Container>
    </div>
  );
};

export default Config;
