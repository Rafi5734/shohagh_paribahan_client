"use client";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import Link from "next/link";

export default function Seats() {
  const [blocks, setBlocks] = useState(Array(30).fill(false));

  const toggleBlock = (index) => {
    const newBlocks = [...blocks];
    console.log(newBlocks);
    newBlocks[index] = !newBlocks[index];
    setBlocks(newBlocks);
  };
  return (
    <div className="mt-5 pt-5">
      <Container>
        <h3 className="border-bottom border-danger pb-2">All seat plan</h3>
        <div className="d-flex">
          <div className="d-flex mb-2">
            <span>available seats</span>
            <div className="border ms-2 bg-danger p-1 rounded">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width="30px"
                height="30px"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M17 21V16M7 21V16"
                    stroke="#1C274C"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  ></path>{" "}
                  <path
                    d="M15.4998 12H8.49977C6.84985 12 6.02489 12 5.51233 12.5858C5.22645 12.9125 5.10002 13.3503 5.0441 14.0008C4.96666 14.9018 4.92793 15.3523 5.22514 15.6762C5.52235 16 6.01482 16 6.99977 16H16.9998C17.9847 16 18.4772 16 18.7744 15.6762C19.0716 15.3523 19.0329 14.9018 18.9554 14.0008C18.8995 13.3503 18.7731 12.9125 18.4872 12.5858C17.9746 12 17.1497 12 15.4998 12Z"
                    stroke="#1C274C"
                    stroke-width="1.5"
                  ></path>{" "}
                  <path
                    d="M7 8C7 6.13077 7 5.19615 7.40192 4.5C7.66523 4.04394 8.04394 3.66523 8.5 3.40192C9.19615 3 10.1308 3 12 3C13.8692 3 14.8038 3 15.5 3.40192C15.9561 3.66523 16.3348 4.04394 16.5981 4.5C17 5.19615 17 6.13077 17 8V12H7V8Z"
                    stroke="#1C274C"
                    stroke-width="1.5"
                  ></path>{" "}
                </g>
              </svg>
            </div>
          </div>
          <div className="d-flex mb-2 ms-5">
            <span>Booked seats</span>
            <div className="border ms-2 bg-success p-1 rounded">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width="30px"
                height="30px"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M17 21V16M7 21V16"
                    stroke="#1C274C"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  ></path>{" "}
                  <path
                    d="M15.4998 12H8.49977C6.84985 12 6.02489 12 5.51233 12.5858C5.22645 12.9125 5.10002 13.3503 5.0441 14.0008C4.96666 14.9018 4.92793 15.3523 5.22514 15.6762C5.52235 16 6.01482 16 6.99977 16H16.9998C17.9847 16 18.4772 16 18.7744 15.6762C19.0716 15.3523 19.0329 14.9018 18.9554 14.0008C18.8995 13.3503 18.7731 12.9125 18.4872 12.5858C17.9746 12 17.1497 12 15.4998 12Z"
                    stroke="#1C274C"
                    stroke-width="1.5"
                  ></path>{" "}
                  <path
                    d="M7 8C7 6.13077 7 5.19615 7.40192 4.5C7.66523 4.04394 8.04394 3.66523 8.5 3.40192C9.19615 3 10.1308 3 12 3C13.8692 3 14.8038 3 15.5 3.40192C15.9561 3.66523 16.3348 4.04394 16.5981 4.5C17 5.19615 17 6.13077 17 8V12H7V8Z"
                    stroke="#1C274C"
                    stroke-width="1.5"
                  ></path>{" "}
                </g>
              </svg>
            </div>
          </div>
        </div>

        <Row>
          <Col xs={12} sm={12} md={6} lg={4}>
            <div className="border mb-5 pb-3 pe-0">
              <Container>
                <Row>
                  {blocks.map((isToggled, index) => (
                    <Col
                      key={index}
                      xs={4}
                      sm={4}
                      md={4}
                      lg={4}
                      className="pt-3 pe-0 me-0"
                    >
                      <div
                        className={`block ${
                          isToggled ? "active m-0 p-0 w-100" : ""
                        }`}
                      >
                        <Button
                          size="sm"
                          className="m-0 p-2"
                          variant={isToggled ? "success" : "danger"}
                          onClick={() => toggleBlock(index)}
                        >
                          Seat:{index + 1}
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g
                              id="SVGRepo_tracerCarrier"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></g>
                            <g id="SVGRepo_iconCarrier">
                              {" "}
                              <path
                                d="M17 21V16M7 21V16"
                                stroke="#1C274C"
                                stroke-width="1.5"
                                stroke-linecap="round"
                              ></path>{" "}
                              <path
                                d="M15.4998 12H8.49977C6.84985 12 6.02489 12 5.51233 12.5858C5.22645 12.9125 5.10002 13.3503 5.0441 14.0008C4.96666 14.9018 4.92793 15.3523 5.22514 15.6762C5.52235 16 6.01482 16 6.99977 16H16.9998C17.9847 16 18.4772 16 18.7744 15.6762C19.0716 15.3523 19.0329 14.9018 18.9554 14.0008C18.8995 13.3503 18.7731 12.9125 18.4872 12.5858C17.9746 12 17.1497 12 15.4998 12Z"
                                stroke="#1C274C"
                                stroke-width="1.5"
                              ></path>{" "}
                              <path
                                d="M7 8C7 6.13077 7 5.19615 7.40192 4.5C7.66523 4.04394 8.04394 3.66523 8.5 3.40192C9.19615 3 10.1308 3 12 3C13.8692 3 14.8038 3 15.5 3.40192C15.9561 3.66523 16.3348 4.04394 16.5981 4.5C17 5.19615 17 6.13077 17 8V12H7V8Z"
                                stroke="#1C274C"
                                stroke-width="1.5"
                              ></path>{" "}
                            </g>
                          </svg>
                        </Button>
                      </div>
                    </Col>
                  ))}
                </Row>
              </Container>
            </div>
          </Col>
          <Col xs={12} sm={12} md={6} lg={4}>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Seats</th>
                  <th>Fare</th>
                  <th>Class</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>01</td>
                  <td>650</td>
                  <td>Economic</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>07</td>
                  <td>650</td>
                  <td>Economic</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>09</td>
                  <td>650</td>
                  <td>Economic</td>
                </tr>
                <tr>
                  <th></th>
                  <th>Total</th>
                  <th> = 1200</th>
                  <th></th>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col xs={12} sm={12} md={6} lg={4}>
            <div className="mb-3">
              <Form.Label>Choose a boarding point</Form.Label>
              <Form.Select size="sm">
                <option>Small select</option>
              </Form.Select>
            </div>

            <Link href="/bookings" className="text-decoration-none">
              <Button variant="outline-success mb-3">Continue</Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
