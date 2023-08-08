import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";

const TicketDetailsForm = () => {
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
    <div>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group
            as={Col}
            xs={12}
            sm={12}
            md="12"
            lg="12"
            controlId="validationCustom01"
          >
            <Form.Label className="fw-bolder">From</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter From place name"
              //   defaultValue="Mark"
              autofocus
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please enter a valid place name.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group
            as={Col}
            xs={12}
            sm={12}
            md="12"
            lg="12"
            controlId="validationCustom01"
            className="mt-2"
          >
            <Form.Label className="fw-bolder">To</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter To place name"
              //   defaultValue="Mark"
              autofocus
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please enter a valid place name.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group
            as={Col}
            xs={12}
            sm={12}
            md="12"
            lg="12"
            controlId="validationCustom01"
            className="mt-2"
          >
            <Form.Label className="fw-bolder">Date</Form.Label>
            <Form.Control
              required
              type="date"
              placeholder="Enter a valid date"
              //   defaultValue="Mark"
              autofocus
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please enter a valid place name.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-2">
          <Form.Group
            as={Col}
            xs={12}
            sm={12}
            md="12"
            lg="12"
            controlId="validationCustom01"
          >
            <Form.Label className="fw-bolder">Boarding place</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter boarding place name"
              //   defaultValue="Mark"
              autofocus
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please enter a valid place name.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group
            as={Col}
            xs={12}
            sm={12}
            md="12"
            lg="12"
            controlId="validationCustom01"
            className="mt-2"
          >
            <Form.Label className="fw-bolder">Boarding time</Form.Label>
            <Form.Control
              required
              type="time"
              placeholder="Enter boarding place name"
              //   defaultValue="Mark"
              autofocus
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please enter a valid place name.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group
            as={Col}
            xs={12}
            sm={12}
            md="12"
            lg="12"
            controlId="validationCustom01"
            className="mt-2"
          >
            <Form.Label className="fw-bolder">Destination place</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter destination place name"
              //   defaultValue="Mark"
              autofocus
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please enter a valid place name.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-2">
          <Form.Group
            as={Col}
            xs={12}
            sm={12}
            md="12"
            lg="12"
            controlId="validationCustom01"
          >
            <Form.Label className="fw-bolder">Destination time</Form.Label>
            <Form.Control
              required
              type="time"
              placeholder="Enter boarding place name"
              //   defaultValue="Mark"
              autofocus
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please enter a valid time.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group
            as={Col}
            xs={12}
            sm={12}
            md="12"
            lg="12"
            controlId="validationCustom01"
            className="mt-2"
          >
            <Form.Label className="fw-bolder">Fare</Form.Label>
            <Form.Control
              required
              type="number"
              placeholder="Enter fare amount"
              //   defaultValue="Mark"
              autofocus
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please enter a valid fare amount.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group
            as={Col}
            xs={12}
            sm={12}
            md="12"
            lg="12"
            controlId="validationCustom01"
            className="mt-2"
          >
            <Form.Label className="fw-bolder">Bus seats</Form.Label>
            <Form.Control
              required
              type="number"
              placeholder="Enter bus total seats"
              //   defaultValue="Mark"
              autofocus
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please enter a valid seat number.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row>
          <Form.Group
            as={Col}
            xs={12}
            sm={12}
            md="12"
            lg="12"
            controlId="validationCustom01"
          >
            <Form.Label className="fw-bolder">Coach type</Form.Label>
            <Form.Select aria-label="Default select example">
              <option>Select a coach type</option>
              <option value="ac">AC</option>
              <option value="non_ac">Non Ac</option>
            </Form.Select>
          </Form.Group>
        </Row>
        <Form.Group className="mb-3 mt-2">
          <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
            feedbackType="invalid"
          />
        </Form.Group>
        <Button type="submit">Update details</Button>
      </Form>
    </div>
  );
};

export default TicketDetailsForm;
