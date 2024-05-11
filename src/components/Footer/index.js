import React from "react";
import { Container } from "react-bootstrap";

export default function Footer() {
  return (
    <div className="p-3" style={{ backgroundColor: "#ffaf1d" }}>
      <Container className="d-flex fw-bold">
        <p className="text-white">2024 © All Rights Reserved.</p>
        <a
          className="ms-2 text-decoration-none text-danger"
          href="https://shohagh.com/"
        >
          Shohagh Paribahan Pvt. Ltd.
        </a>
      </Container>
    </div>
  );
}
