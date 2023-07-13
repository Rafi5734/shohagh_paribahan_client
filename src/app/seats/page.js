"use client";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useState } from "react";

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
                        className={`block ${isToggled ? "active m-0 p-0" : ""}`}
                      >
                        <Button
                          variant={isToggled ? "success" : "primary"}
                          onClick={() => toggleBlock(index)}
                        >
                          Toggle
                        </Button>
                      </div>
                    </Col>
                  ))}
                </Row>
              </Container>
            </div>
          </Col>
          <Col xs={12} sm={12} md={6} lg={4}>
            2 of 3
          </Col>
          <Col xs={12} sm={12} md={6} lg={4}>
            3 of 3
          </Col>
        </Row>
      </Container>
    </div>
  );
}
