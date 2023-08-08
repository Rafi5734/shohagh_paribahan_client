import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import TicketDetailsForm from "./TicketDetailsForm";

const TicketDetails = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <OverlayTrigger
        overlay={<Tooltip id="tooltip-disabled">Update Details</Tooltip>}
      >
        <span className="d-inline-block">
          <Button
            variant="primary"
            onClick={() => setShow(true)}
            className="me-1"
          >
            <i
              className="fa-solid fa-pen-to-square "
              style={{ color: "white" }}
            ></i>
          </Button>{" "}
        </span>
      </OverlayTrigger>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        style={{ width: "100%" }}
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Update ticket details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <TicketDetailsForm />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default TicketDetails;
