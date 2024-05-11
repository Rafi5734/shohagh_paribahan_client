"use client";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./destinations.module.css";
import Card from "react-bootstrap/Card";
export default function Destinations() {
  return (
    <div className="mb-5">
      <Container>
        <h3 className={styles.header_style}>Destinations</h3>
        <Row className="mb-5">
          <Col xs={12} sm={6} md={4} lg={4} className="mb-3">
            <Card style={{ width: "100%" }}>
              <Card.Img
                className="img-fluid"
                variant="top"
                src="https://shohagh.com/images/Dhaka.png"
              />
              <Card.Body>
                <Card.Title>Dhaka</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4} lg={4} className="mb-3">
            <Card style={{ width: "100%" }}>
              <Card.Img
                className="img-fluid"
                variant="top"
                src="https://shohagh.com/images/Chittagong.png"
              />
              <Card.Body>
                <Card.Title>Chittagong</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4} lg={4} className="mb-3">
            <Card style={{ width: "100%" }}>
              <Card.Img
                className="img-fluid"
                variant="top"
                src="https://shohagh.com/images/Jessore.png"
              />
              <Card.Body>
                <Card.Title>Jessore</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mb-5">
          <Col xs={12} sm={6} md={4} lg={4} className="mb-3">
            <Card style={{ width: "100%" }}>
              <Card.Img
                className="img-fluid"
                variant="top"
                src="https://shohagh.com/images/Khulna.png"
              />
              <Card.Body>
                <Card.Title>Khulna</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4} lg={4} className="mb-3">
            <Card style={{ width: "100%" }}>
              <Card.Img
                className="img-fluid"
                variant="top"
                src="https://shohagh.com/images/Coxsbazar-02.png"
              />
              <Card.Body>
                <Card.Title>Cox{"'"}s Bazar</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4} lg={4} className="mb-3">
            <Card style={{ width: "100%" }}>
              <Card.Img
                className="img-fluid"
                variant="top"
                src="https://shohagh.com/images/Satkhira-02.png"
              />
              <Card.Body>
                <Card.Title>Satkhira</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mb-5">
          <Col xs={12} sm={6} md={4} lg={4} className="mb-3">
            <Card style={{ width: "100%" }}>
              <Card.Img
                className="img-fluid"
                variant="top"
                src="https://shohagh.com/images/Kolkata-02.png"
              />
              <Card.Body>
                <Card.Title>Kolkata</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4} lg={4} className="mb-3">
            <Card style={{ width: "100%" }}>
              <Card.Img
                className="img-fluid"
                variant="top"
                src="https://shohagh.com/images/Benapole.png"
              />
              <Card.Body>
                <Card.Title>Benapole</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4} lg={4} className="mb-3">
            <Card style={{ width: "100%" }}>
              <Card.Img
                className="img-fluid"
                variant="top"
                src="https://shohagh.com/images/Barishal.png"
              />
              <Card.Body>
                <Card.Title>Barisal</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
