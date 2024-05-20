"use client";
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
import districtNames from "./DistrictName";

import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function TabComponent() {
  const router = useRouter();

  const [validated, setValidated] = useState(false);
  const [fromValue, setFromValue] = useState();
  const [toValue, setToValue] = useState();
  const [journeyDate, setJournalDate] = useState();
  const [coachType, setCoachType] = useState();
  const [coachTime, setCoachTime] = useState();
  const [checkLocation, setCheckLocation] = useState(true);

  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  if (fromValue && toValue) {
    if (fromValue === toValue) {
      setCheckLocation(true);
      setToValue("");
      toast.error("Please select correct location", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    if (fromValue && toValue && journeyDate && coachType && coachTime) {
      if (fromValue === toValue) {
        setCheckLocation(true);
        toast.error("Please select correct location", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        setCheckLocation(false);
        const ticketData = {
          from: fromValue,
          to: toValue,
          journeyDate: journeyDate,
          coachType: coachType,
          coachTime: coachTime,
        };
        console.log(ticketData);
        toast.success("See Available Trips", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } else {
      setCheckLocation(false);
      toast.warn("Please select & check all options", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }

    setValidated(true);
  };

  console.log(toValue);

  return (
    <Container className="mt-5 mb-5 text-dark">
      <div className={styles.tab_container_wrapper}>
        <Tabs
          defaultActiveKey="buy_ticket"
          id="uncontrolled-tab-example"
          className="mb-3 text-dark"
          fill
        >
          <Tab
            className="border border-danger p-3 rounded text-dark"
            eventKey="buy_ticket"
            title="Buy Ticket"
          >
            <Container>
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row>
                  <Col
                    sm={12}
                    md={6}
                    lg={2}
                    className="d-flex justify-content-center align-items-center"
                  >
                    <Form.Select
                      size="lg"
                      className="mb-3 mt-3"
                      onClick={(e) => {
                        setFromValue(e.target.value);
                      }}
                    >
                      <option className="fw-bold">From</option>
                      {districtNames?.map((districtName, index) => (
                        <option key={index} value={districtName}>
                          {districtName}
                        </option>
                      ))}
                    </Form.Select>
                  </Col>
                  <Col sm={12} md={6} lg={2} className="mb-3 mt-3">
                    <Form.Select
                      size="lg"
                      onChange={(e) => {
                        setToValue(e.target.value);
                      }}
                    >
                      <option className="fw-bold bg-white">To</option>
                      {districtNames?.map((districtName, index) => (
                        <option
                          className="bg-white"
                          key={index}
                          value={districtName}
                        >
                          {districtName}
                        </option>
                      ))}
                    </Form.Select>
                  </Col>
                  <Col sm={12} md={6} lg={2} className="mb-3 mt-3">
                    <InputGroup size="lg">
                      <Form.Control
                        type="date"
                        aria-label="Small"
                        aria-describedby="inputGroup-sizing-sm"
                        onChange={(e) => {
                          setJournalDate(e.target.value);
                        }}
                      />
                    </InputGroup>
                  </Col>
                  <Col sm={12} md={6} lg={2} className="mb-3 mt-3">
                    <Form.Select
                      size="lg"
                      onChange={(e) => {
                        setCoachType(e.target.value);
                      }}
                    >
                      <option className="fw-bold">Coach Type</option>
                      <option value="ac">AC</option>
                      <option value="non-ac">Non-AC</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </Col>
                  <Col sm={12} md={6} lg={2} className="mb-3 mt-3">
                    <Form.Select
                      size="lg"
                      onChange={(e) => {
                        setCoachTime(e.target.value);
                      }}
                    >
                      <option className="fw-bold">Time</option>
                      <option value="morning">
                        Morning (5:00AM - 12:59AM)
                      </option>
                      <option value="afternoon">
                        Afternoon (12:00PM - 5:59PM)
                      </option>
                      <option value="night">Night (6:00PM - 12:59PM)</option>
                    </Form.Select>
                  </Col>
                  <Col sm={12} md={6} lg={2} className="mb-3 mt-3">
                    <Button
                      variant="warning"
                      size="lg"
                      type="submit"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Search your route"
                    >
                      <i className="fa-solid fa-magnifying-glass"></i>
                    </Button>{" "}
                  </Col>
                </Row>
              </Form>
            </Container>
          </Tab>
          <Tab
            className="border border-danger p-3 rounded text-dark"
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
                  variant="warning"
                  type="submit"
                  size="sm"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Search"
                >
                  <i className="fa-solid fa-magnifying-glass"></i>
                </Button>{" "}
              </Col>
            </Row>

            <div>
              <h3 className="border-bottom pb-2">Reservation Details</h3>

              <Table striped bordered hover responsive>
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
          <div className="border rounded p-2 mt-3">
            <Row className="border-1">
              <Col xs={6} sm={4} md={2} lg={2}>
                <p className="mb-0 pb-0 fs-5 fw-bold">DHK</p>
                <p className="m-0 p-0">Dhaka</p>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="m-0 p-0"
                  width="30px"
                  height="30px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
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
                <p className="mb-0 pb-0 fs-5 fw-bold">KHL</p>
                <p className="m-0 p-0">Khulna</p>
              </Col>
              <Col xs={6} sm={4} md={2} lg={2} className="d-md-flex">
                <div>
                  <p className="mb-0 pb-0 fs-5 fw-bold">Reporting</p>
                  <p className="m-0 pb-0 d-flex align-items-center">
                    <svg
                      width="24px"
                      height="24px"
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
                          d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                          stroke="#000000"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>{" "}
                        <path
                          d="M12 6V12"
                          stroke="#000000"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>{" "}
                        <path
                          d="M16.24 16.24L12 12"
                          stroke="#000000"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>{" "}
                      </g>
                    </svg>
                    <span className="ms-2">06:25 PM</span>
                  </p>
                  <p className="m-0 pb-0 d-flex align-items-center">
                    <svg
                      width="24px"
                      height="24px"
                      viewBox="0 0 24.00 24.00"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          d="M20 10V7C20 5.89543 19.1046 5 18 5H6C4.89543 5 4 5.89543 4 7V10M20 10V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19V10M20 10H4M8 3V7M16 3V7"
                          stroke="#000000"
                          strokeWidth="0.672"
                          strokeLinecap="round"
                        ></path>{" "}
                        <rect
                          x="6"
                          y="12"
                          width="3"
                          height="3"
                          rx="0.5"
                          fill="#000000"
                        ></rect>{" "}
                        <rect
                          x="10.5"
                          y="12"
                          width="3"
                          height="3"
                          rx="0.5"
                          fill="#000000"
                        ></rect>{" "}
                        <rect
                          x="15"
                          y="12"
                          width="3"
                          height="3"
                          rx="0.5"
                          fill="#000000"
                        ></rect>{" "}
                      </g>
                    </svg>
                    <span className="ms-2">13 July, 2023</span>
                  </p>
                </div>
              </Col>
              <Col xs={6} sm={4} md={2} lg={2}>
                <div>
                  <p className="mb-0 pb-0 fs-5 fw-bold">Departure</p>
                  <p className="m-0 pb-0 d-flex align-items-center">
                    <svg
                      width="24px"
                      height="24px"
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
                          d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                          stroke="#000000"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>{" "}
                        <path
                          d="M12 6V12"
                          stroke="#000000"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>{" "}
                        <path
                          d="M16.24 16.24L12 12"
                          stroke="#000000"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>{" "}
                      </g>
                    </svg>
                    <span className="ms-2">06:25 PM</span>
                  </p>
                  <p className="m-0 pb-0 d-flex align-items-center">
                    <svg
                      width="24px"
                      height="24px"
                      viewBox="0 0 24.00 24.00"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          d="M20 10V7C20 5.89543 19.1046 5 18 5H6C4.89543 5 4 5.89543 4 7V10M20 10V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19V10M20 10H4M8 3V7M16 3V7"
                          stroke="#000000"
                          strokeWidth="0.672"
                          strokeLinecap="round"
                        ></path>{" "}
                        <rect
                          x="6"
                          y="12"
                          width="3"
                          height="3"
                          rx="0.5"
                          fill="#000000"
                        ></rect>{" "}
                        <rect
                          x="10.5"
                          y="12"
                          width="3"
                          height="3"
                          rx="0.5"
                          fill="#000000"
                        ></rect>{" "}
                        <rect
                          x="15"
                          y="12"
                          width="3"
                          height="3"
                          rx="0.5"
                          fill="#000000"
                        ></rect>{" "}
                      </g>
                    </svg>
                    <span className="ms-2">13 July, 2023</span>
                  </p>
                </div>
              </Col>
              <Col xs={6} sm={4} md={2} lg={2}>
                <div>
                  <p className="mb-0 pb-0 fs-5 fw-bold">Boarding</p>
                  <p className="m-0 pb-0">NABINAGAR</p>
                  <p className=""></p>
                  <p className="mb-0 pb-0 fs-5 fw-bold">Destination</p>
                  <p className="m-0 pb-0">KHULNA</p>
                </div>
              </Col>
              <Col xs={6} sm={4} md={2} lg={2}>
                <div>
                  <p className="mb-0 pb-0 fs-5 fw-bold">Fare</p>
                  <p className="m-0 pb-0">BDT</p>
                  <p className=""></p>
                  <p className="mb-0 pb-0 fs-5 fw-bold">650.00 TK</p>
                </div>
              </Col>
              <Col xs={6} sm={4} md={2} lg={2}>
                <Button
                  size="sm"
                  variant="danger"
                  className="mt-5 text-white"
                  onClick={() => router.push("/seats")}
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
