import React, { useState } from "react";
import { Button, Modal, OverlayTrigger, Tooltip } from "react-bootstrap";

const AdminViewTicketDetails = ({ id }) => {
  const [show, setShow] = useState(false);

  const handleViewTicketDetails = (id) => {
    setShow(true);
    console.log("AdminViewTicketDetails", id);
  };

  return (
    <div>
      <div>
        <OverlayTrigger
          overlay={<Tooltip id="tooltip-disabled">View Ticket Details</Tooltip>}
        >
          <span className="d-inline-block">
            <Button
              variant="success"
              className="me-1"
              onClick={() => handleViewTicketDetails(id)}
            >
              <i class="fa-solid fa-circle-info"></i>
            </Button>{" "}
          </span>
        </OverlayTrigger>
      </div>
      <Modal
        size="lg"
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-100w"
        aria-labelledby="example-custom-modal-styling-title"
        style={{ width: "100%" }}
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            View ticket details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AdminViewTicketDetails;
