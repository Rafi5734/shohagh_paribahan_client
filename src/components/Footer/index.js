import React from "react";
import { Container } from "react-bootstrap";

export default function Footer() {
  return (
    <div className="p-3" style={{ backgroundColor: "#222222" }}>
      <Container className="d-flex">
        <p className="text-white">2023 © All Rights Reserved.</p>
        <a
          className="ms-2 text-decoration-none text-danger"
          href="https://shohagh.com/"
        >
          Shohagh Paribahan Pvt. Ltd. {"|"}
        </a>
      </Container>
    </div>
  );
}
