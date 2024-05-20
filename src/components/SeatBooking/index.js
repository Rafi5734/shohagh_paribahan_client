"use client";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import Link from "next/link";

const SeatBooking = () => {
  const [blocks, setBlocks] = useState(Array(30).fill(false));
  const [validated, setValidated] = useState(false);

  const toggleBlock = (index) => {
    const newBlocks = [...blocks];

    newBlocks[index] = !newBlocks[index];

    setBlocks(newBlocks);

    //   console.log("booking blocks", newBlocks);

    const filteredTrueValuesWithIndex = Object.entries(newBlocks)
      .filter(([key, value]) => value === true)
      .map(([key, value]) => ({ value: true, index: Number(key) }));

    console.log(filteredTrueValuesWithIndex);
  };

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
      <Container>
        <h2 className="border-bottom border-danger pb-2 mt-3 text-center">
          All seat plan
        </h2>
        <div className="d-flex pt-4 justify-content-center align-items-center">
          <div className="d-flex mb-2 justify-content-center align-items-center">
            <span className="">Available</span>
            <div className="border ms-2 bg-secondary p-1 rounded">
              <p className="text-white m-0 ps-2 pe-2">1</p>
            </div>
          </div>
          <div className="d-flex mb-2 ms-5 justify-content-center align-items-center">
            <span>Booked</span>
            <div className="border ms-2 bg-danger ps-1 pe-1 pb-1 rounded">
              <p className="text-white m-0">
                <svg
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M19 5L5 19M5.00001 5L19 19"
                      stroke="#ffffff"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
              </p>
            </div>
          </div>
        </div>

        <Row>
          <Col xs={12} sm={12} md={6} lg={4}>
            <h1 className="text-center mt-3 lead">Bus seats plan</h1>
            <hr />
            <div className="border mb-5 pb-3 pe-0">
              <Container>
                <Row className="pt-3 pb-3">
                  {blocks.map((isToggled, index) => (
                    <Col
                      key={index}
                      xs={4}
                      sm={4}
                      md={4}
                      lg={4}
                      className="pt-3 ps-0 pe-0 me-0 d-flex justify-content-evenly align-items-center"
                    >
                      <div className={`block ${isToggled ? "active" : ""}`}>
                        <Button
                          size="sm"
                          className="d-flex justify-content-center align-items-center m-0 p-2"
                          variant={isToggled ? "danger" : "secondary"}
                          onClick={() => toggleBlock(index)}
                        >
                          <svg
                            width="24px"
                            height="24px"
                            className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vnjz4i"
                            focusable="false"
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            data-testid="AirlineSeatReclineNormalIcon"
                          >
                            <path d="M7.59 5.41c-.78-.78-.78-2.05 0-2.83.78-.78 2.05-.78 2.83 0 .78.78.78 2.05 0 2.83-.79.79-2.05.79-2.83 0M6 16V7H4v9c0 2.76 2.24 5 5 5h6v-2H9c-1.66 0-3-1.34-3-3m14 4.07L14.93 15H11.5v-3.68c1.4 1.15 3.6 2.16 5.5 2.16v-2.16c-1.66.02-3.61-.87-4.67-2.04l-1.4-1.55c-.19-.21-.43-.38-.69-.5-.29-.14-.62-.23-.96-.23h-.03C8.01 7 7 8.01 7 9.25V15c0 1.66 1.34 3 3 3h5.07l3.5 3.5z"></path>
                          </svg>
                          {index + 1}
                        </Button>
                      </div>
                    </Col>
                  ))}
                </Row>
              </Container>
            </div>
          </Col>
          <Col xs={12} sm={12} md={6} lg={4}>
            <h3 className="border-bottom pb-2">Booking seats info.</h3>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Seats</th>
                  <th>Fare</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>01</td>
                  <td>650</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>07</td>
                  <td>650</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>09</td>
                  <td>650</td>
                </tr>
                <tr>
                  <th></th>
                  <th>Total</th>
                  <th> = 1200</th>
                </tr>
              </tbody>
            </Table>

            <div>
              <h3 className="border-bottom pb-2">Passenger Information</h3>
              <Form
                className="border p-3 rounded bg-light mb-5"
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
            </div>
          </Col>
          <Col xs={12} sm={12} md={6} lg={4}>
            <div className="p-3 bg-light">
              <h3 className="border-bottom pb-2">Journey Details</h3>
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

            <div className="p-3 bg-light mt-3">
              <h3 className="border-bottom pb-2">Fare Details</h3>
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

            {/* <Link href="/bookings" className="text-decoration-none mt-3">
              
            </Link> */}
            {/* <Button variant="outline-success mb-3 mt-3">
              Confirm reservation
            </Button> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SeatBooking;
