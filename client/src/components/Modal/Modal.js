import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";

export default class index extends Component {
  render() {
    const { showModal, modalText } = this.props.state;
    const { handleClose } = this.props;

    return (
      <>
        <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              <h3 className="text-center">ERROR!</h3>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="text-center">
            <h5>
              <strong>{modalText}</strong>
            </h5>
          </Modal.Body>
          <Modal.Footer>
            <Button
              style={{ backgroundColor: "#808890", border: "none" }}
              onClick={handleClose}
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
