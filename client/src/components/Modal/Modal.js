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
            <Modal.Title>ERROR!</Modal.Title>
          </Modal.Header>
          <Modal.Body>{modalText}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
