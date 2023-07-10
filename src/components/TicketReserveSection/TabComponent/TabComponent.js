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
export default function TabComponent() {
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
                <Col sm={12} md={6} lg={2} className="">
                  <Form.Select size="sm">
                    <option>From</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Col>
                <Col sm={12} md={6} lg={2} className="">
                  <Form.Select size="sm">
                    <option>To</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Col>
                <Col sm={12} md={6} lg={2} className="">
                  <InputGroup size="sm">
                    <Form.Control
                      type="date"
                      aria-label="Small"
                      aria-describedby="inputGroup-sizing-sm"
                    />
                  </InputGroup>
                </Col>
                <Col sm={12} md={6} lg={2} className="">
                  <Form.Select size="sm">
                    <option>Time Period</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Col>
                <Col sm={12} md={6} lg={2} className="">
                  <Form.Select size="sm">
                    <option>Coach Type</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Col>
                <Col sm={12} md={6} lg={2} className="">
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
              <Col sm={6}>
                <InputGroup size="sm">
                  <Form.Control
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                    placeholder="Please enter ticket PNR"
                  />
                </InputGroup>
              </Col>
              <Col sm={6}>
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
          </Tab>
        </Tabs>
      </div>
    </Container>
  );
}
