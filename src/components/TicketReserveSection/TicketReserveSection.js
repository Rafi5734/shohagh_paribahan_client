"use client";
import { Container } from "react-bootstrap";
import TabComponent from "./TabComponent/TabComponent";
import Button from "react-bootstrap/Button";
export default function TicketReserveSection() {
  return (
    <div>
      <TabComponent></TabComponent>
      <Container className="d-flex justify-content-center">
        <Button variant="success" className="me-3">
          HOW TO BUY TICKET
        </Button>{" "}
        <Button variant="warning">HOW TO CANCEL TICKET</Button>{" "}
      </Container>
    </div>
  );
}
