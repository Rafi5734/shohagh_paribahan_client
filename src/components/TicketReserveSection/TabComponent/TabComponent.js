import { useState } from "react";
import styles from "./tabComponent.module.css";
import { Container } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Link from "next/link";

import { useRouter } from "next/navigation";
export default function TabComponent() {
  const router = useRouter();
  const avilableTicketsInfo = new Array(
    {
      id: 1,
      mainRoute: "dhaka",
      mainRouteCODe: "DHK",
      destinationRoute: "kulna",
      destinationRouteCODe: "KHL",
      reporting: {
        time: "6.25pm",
        day: "Friday",
        date: "13/7/2023",
      },
      departure: {
        time: "6.45 pm",
        day: "Friday",
        date: "13/7/2023",
      },

      boarding: "MALIBAGH",
      fare: "650",
    },
    {
      id: 2,
      mainRoute: "dhaka",
      mainRouteCODe: "DHK",
      destinationRoute: "JESSORE",
      destinationRouteCODe: "KHL",
      reporting: {
        time: "6.25pm",
        day: "Friday",
        date: "13/7/2023",
      },
      departure: {
        time: "6.45 pm",
        day: "Friday",
        date: "13/7/2023",
      },

      boarding: "MALIBAGH",
      fare: "650",
    }
  );

  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);
  return (
    <Container className="mt-5 mb-5">
      <div className={styles.tab_container_wrapper}>
        <Tabs
          defaultActiveKey="buy_ticket"
          id="uncontrolled-tab-example"
          className="mb-3"
          fill
        >
          <Tab
            className="border border-danger p-3 rounded"
            eventKey="buy_ticket"
            title="Buy Ticket"
          >
            <Container>
              <Row>
                <Col sm={12} md={6} lg={2}>
                  <Form.Select size="sm" className="mb-3">
                    <option>From</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Col>
                <Col sm={12} md={6} lg={2} className="mb-3">
                  <Form.Select size="sm">
                    <option>To</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Col>
                <Col sm={12} md={6} lg={2} className="mb-3">
                  <InputGroup size="sm">
                    <Form.Control
                      type="date"
                      aria-label="Small"
                      aria-describedby="inputGroup-sizing-sm"
                    />
                  </InputGroup>
                </Col>
                <Col sm={12} md={6} lg={2} className="mb-3">
                  <Form.Select size="sm">
                    <option>Time Period</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Col>
                <Col sm={12} md={6} lg={2} className="mb-3">
                  <Form.Select size="sm">
                    <option>Coach Type</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Col>
                <Col sm={12} md={6} lg={2} className="mb-3">
                  <Form.Select size="sm">
                    <option>Boarding Point</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Col>
                <Col sm={12} md={6} lg={2} className="mb-3">
                  <Form.Select size="sm">
                    <option>Dropping Point</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Col>
                <Col sm={12} md={6} lg={2} className="mb-3">
                  <Button
                    variant="primary"
                    size="sm"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Search your route"
                  >
                    <svg
                      width="15px"
                      height="15px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 20L15.8033 15.8033M18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18C14.6421 18 18 14.6421 18 10.5Z"
                        stroke="#ffffff"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </Button>{" "}
                </Col>
              </Row>
            </Container>
          </Tab>
          <Tab
            className="border border-danger p-3 rounded"
            eventKey="ticket_operation"
            title="Ticket Operation"
          >
            <Row>
              <Col sm={6} className="mb-3">
                <InputGroup size="sm">
                  <Form.Control
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                    placeholder="Please enter ticket PNR"
                  />
                </InputGroup>
              </Col>
              <Col sm={6} className="mb-3">
                <Button
                  variant="primary"
                  size="sm"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Search"
                >
                  <svg
                    width="15px"
                    height="15px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 20L15.8033 15.8033M18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18C14.6421 18 18 14.6421 18 10.5Z"
                      stroke="#ffffff"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </Button>{" "}
              </Col>
            </Row>

            <div>
              <h3 className="border-bottom pb-2">Reservation Details</h3>

              <Table striped bordered hover>
                <tbody>
                  <tr>
                    <td className="fw-bold">PNR</td>
                    <td>046379080(1726)</td>
                    <td className="fw-bold"> Reservation Status </td>
                    <td>Canceled</td>
                  </tr>
                  <tr>
                    <td className="fw-bold"> Trip Date </td>
                    <td>14 July, 2023</td>
                    <td className="fw-bold"> Total Fare </td>
                    <td>BDT 650.0</td>
                  </tr>
                  <tr>
                    <td className="fw-bold"> Coach No </td>
                    <td>2420</td>
                    <td className="fw-bold"> Coach Type </td>
                    <td>Non AC</td>
                  </tr>
                  <tr>
                    <td className="fw-bold"> Boarding </td>
                    <td>MALIBAGH, DHAKA </td>
                    <td className="fw-bold"> Destination </td>
                    <td>JESSORE</td>
                  </tr>
                  <tr>
                    <td className="fw-bold"> Reporting </td>
                    <td>06:45 PM </td>
                    <td className="fw-bold"> Departure </td>
                    <td>07:00 PM</td>
                  </tr>
                  <tr>
                    <td className="fw-bold"> Seats </td>
                    <td>1C</td>
                    <td className="fw-bold"> Cancel </td>
                    <td className="text-danger">Not Applicable</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Tab>
        </Tabs>

        <Container className="mt-5">
          <h3 className="border-bottom border-danger pb-2">Available Trips</h3>
          <div className="border rounded p-2">
            <Row className="border-1">
              <Col xs={6} sm={4} md={2} lg={2}>
                <p className="mb-0 pb-0 fs-5">DHK</p>
                <p className="m-0 p-0">Dhaka</p>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="m-0 p-0"
                  width="30px"
                  height="30px"
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
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12 3C12.5523 3 13 3.44772 13 4V17.5858L18.2929 12.2929C18.6834 11.9024 19.3166 11.9024 19.7071 12.2929C20.0976 12.6834 20.0976 13.3166 19.7071 13.7071L12.7071 20.7071C12.3166 21.0976 11.6834 21.0976 11.2929 20.7071L4.29289 13.7071C3.90237 13.3166 3.90237 12.6834 4.29289 12.2929C4.68342 11.9024 5.31658 11.9024 5.70711 12.2929L11 17.5858V4C11 3.44772 11.4477 3 12 3Z"
                      fill="#000000"
                    ></path>{" "}
                  </g>
                </svg>
                <p className="mb-0 pb-0 fs-5">KHL</p>
                <p className="m-0 p-0">Khulna</p>
              </Col>
              <Col xs={6} sm={4} md={2} lg={2} className="d-md-flex">
                <div>
                  <p className="mb-0 pb-0 fs-5">Reporting</p>
                  <p className="m-0 pb-0">06:25 PM</p>
                  <p className="m-0 pb-0">Thursday</p>
                  <p className="m-0 pb-0">13 July, 2023</p>
                </div>
              </Col>
              <Col xs={6} sm={4} md={2} lg={2}>
                <div>
                  <p className="mb-0 pb-0 fs-5">Departure</p>
                  <p className="m-0 pb-0">06:25 PM</p>
                  <p className="m-0 pb-0">Thursday</p>
                  <p className="m-0 pb-0">13 July, 2023</p>
                </div>
              </Col>
              <Col xs={6} sm={4} md={2} lg={2}>
                <div>
                  <p className="mb-0 pb-0 fs-5">Boarding</p>
                  <p className="m-0 pb-0">NABINAGAR</p>
                  <p className=""></p>
                  <p className="mb-0 pb-0 fs-5">Destination</p>
                  <p className="m-0 pb-0">KHULNA</p>
                </div>
              </Col>
              <Col xs={6} sm={4} md={2} lg={2}>
                <div>
                  <p className="mb-0 pb-0 fs-5">Fare</p>
                  <p className="m-0 pb-0">BDT</p>
                  <p className=""></p>
                  <p className="mb-0 pb-0 fs-5 fw-bold">650.00</p>
                </div>
              </Col>
              <Col xs={6} sm={4} md={2} lg={2}>
                <Button
                  size="sm"
                  variant="primary"
                  className="mt-3"
                  onClick={() => router.push("/seats")}
                >
                  View Seats
                </Button>{" "}
              </Col>
            </Row>
          </div>

          <div className="border rounded p-2 mt-3">
            <Row className="border-1">
              <Col xs={6} sm={4} md={2} lg={2}>
                <p className="mb-0 pb-0 fs-5">DHK</p>
                <p className="m-0 p-0">Dhaka</p>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="m-0 p-0"
                  width="30px"
                  height="30px"
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
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12 3C12.5523 3 13 3.44772 13 4V17.5858L18.2929 12.2929C18.6834 11.9024 19.3166 11.9024 19.7071 12.2929C20.0976 12.6834 20.0976 13.3166 19.7071 13.7071L12.7071 20.7071C12.3166 21.0976 11.6834 21.0976 11.2929 20.7071L4.29289 13.7071C3.90237 13.3166 3.90237 12.6834 4.29289 12.2929C4.68342 11.9024 5.31658 11.9024 5.70711 12.2929L11 17.5858V4C11 3.44772 11.4477 3 12 3Z"
                      fill="#000000"
                    ></path>{" "}
                  </g>
                </svg>
                <p className="mb-0 pb-0 fs-5">KHL</p>
                <p className="m-0 p-0">Khulna</p>
              </Col>
              <Col xs={6} sm={4} md={2} lg={2} className="d-md-flex">
                <div>
                  <p className="mb-0 pb-0 fs-5">Reporting</p>
                  <p className="m-0 pb-0">06:25 PM</p>
                  <p className="m-0 pb-0">Thursday</p>
                  <p className="m-0 pb-0">13 July, 2023</p>
                </div>
              </Col>
              <Col xs={6} sm={4} md={2} lg={2}>
                <div>
                  <p className="mb-0 pb-0 fs-5">Departure</p>
                  <p className="m-0 pb-0">06:25 PM</p>
                  <p className="m-0 pb-0">Thursday</p>
                  <p className="m-0 pb-0">13 July, 2023</p>
                </div>
              </Col>
              <Col xs={6} sm={4} md={2} lg={2}>
                <div>
                  <p className="mb-0 pb-0 fs-5">Boarding</p>
                  <p className="m-0 pb-0">NABINAGAR</p>
                  <p className=""></p>
                  <p className="mb-0 pb-0 fs-5">Destination</p>
                  <p className="m-0 pb-0">KHULNA</p>
                </div>
              </Col>
              <Col xs={6} sm={4} md={2} lg={2}>
                <div>
                  <p className="mb-0 pb-0 fs-5">Fare</p>
                  <p className="m-0 pb-0">BDT</p>
                  <p className=""></p>
                  <p className="mb-0 pb-0 fs-5 fw-bold">650.00</p>
                </div>
              </Col>
              <Col xs={6} sm={4} md={2} lg={2}>
                <Button
                  size="sm"
                  variant="primary"
                  className="mt-3"
                  onClick={handleShow}
                >
                  View Seats
                </Button>{" "}
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </Container>
  );
}
