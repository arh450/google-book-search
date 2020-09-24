import React, { Component } from "react";
import Modal from "../Modal/Modal";
import { Jumbotron, Row, Col, Form, Button } from "react-bootstrap";

export default class index extends Component {
  state = {
    searchInput: "",
    showModal: false,
    modalText: "",
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleClose = () => {
    this.setState({ showModal: false });
  };

  handleSearch = (event) => {
    event.preventDefault();

    if (!this.state.searchInput) {
      this.setState({ showModal: true, modalText: "Please enter an input" });
    } else {
      console.log(this.state.searchInput);
      this.setState({ searchInput: "" });
    }
  };

  render() {
    return (
      <>
        <Row className="mx-auto mt-3">
          <Col md={10} className="mt-3 mx-auto text-white">
            <Jumbotron className="bg-danger">
              <Row className="mx-auto">
                <Col md={12}>
                  <h2 className="mb-2"> Books Search</h2>
                  <Form>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Control
                        type="text"
                        placeholder="Search for book"
                        name="searchInput"
                        value={this.state.searchInput}
                        onChange={this.onChange}
                      />
                    </Form.Group>
                    <Button
                      variant="warning"
                      className="float-right"
                      onClick={this.handleSearch}
                    >
                      Search
                    </Button>
                  </Form>
                </Col>
              </Row>
            </Jumbotron>
          </Col>
        </Row>
        <Modal state={this.state} handleClose={this.handleClose} />
      </>
    );
  }
}
