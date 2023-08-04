"use client";
import React from "react";
import { Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

const AllTickets = () => {
  return (
    <div className="mt-5 pt-5">
      <h3 className="mt-3 text-center">All tickets</h3>
      <hr />
      <div className="ps-2 pe-2">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>From-to</th>
              <th>Date</th>
              <th>Boarding time & place</th>
              <th>Destination time & place</th>
              <th>Fare</th>
              <th>Seats</th>
              <th>Coach type</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>
                <div>
                  <p className="m-0">Dhaka-</p>
                  <p className="m-0">Khulna</p>
                </div>
              </td>
              <td>04/08/2023</td>
              <td>
                <div>
                  <p className="m-0">Malibugh-</p>
                  <p className="m-0">9:00 PM</p>
                </div>
              </td>
              <td>
                <div>
                  <p className="m-0">Fulbaria-</p>
                  <p className="m-0">9:00 PM</p>
                </div>
              </td>
              <td>650</td>
              <td>65</td>
              <td>AC</td>
              <td>
                <div>
                  <OverlayTrigger
                    overlay={
                      <Tooltip id="tooltip-disabled">Edit ticket</Tooltip>
                    }
                  >
                    <span className="d-inline-block">
                      <Button variant="primary" className="me-1">
                        <i
                          className="fa-solid fa-pen-to-square "
                          style={{ color: "white" }}
                        ></i>
                      </Button>{" "}
                    </span>
                  </OverlayTrigger>
                  <OverlayTrigger
                    overlay={
                      <Tooltip id="tooltip-disabled">Delete ticket</Tooltip>
                    }
                  >
                    <span className="d-inline-block">
                      <Button variant="danger" className="me-1">
                        <i
                          class="fa-solid fa-trash-can"
                          style={{ color: "white" }}
                        ></i>
                      </Button>{" "}
                    </span>
                  </OverlayTrigger>
                  <OverlayTrigger
                    overlay={
                      <Tooltip id="tooltip-disabled">View Details</Tooltip>
                    }
                  >
                    <span className="d-inline-block">
                      <Button variant="success" className="me-1">
                        <i class="fa-solid fa-circle-info"></i>
                      </Button>{" "}
                    </span>
                  </OverlayTrigger>
                </div>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default AllTickets;
