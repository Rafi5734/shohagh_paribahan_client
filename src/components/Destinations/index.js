import React from "react";
import { Container } from "react-bootstrap";
import styles from "./destinations.module.css";
export default function Destinations() {
  return (
    <div>
      <Container>
        <h3 className={styles.header_style}>Destinations</h3>
      </Container>
    </div>
  );
}
