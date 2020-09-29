import React, { Component } from "react";
import { Card, Row, Col, Button, Jumbotron } from "react-bootstrap";
import Axios from "axios";

import "./style.css";

export default class index extends Component {
  state = {
    savedBooks: [],
  };

  componentDidMount() {
    Axios.get("/api/books")
      .then((response) => {
        this.setState({ savedBooks: response.data });
        console.log(this.state.savedBooks);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <>
        <Row className="mx-auto mt-2">
          <Col md={10} className="mt-3 mx-auto">
            <Jumbotron className="bg-warning">
              <Card className="mb-1">
                <Row>
                  <Col md={2}>
                    <img
                      alt="bookImage"
                      className="img-fluid"
                      // src={data.volumeInfo.imageLinks.smallThumbnail}
                    />
                  </Col>
                  <Col md={10}>
                    <Card.Body>
                      <Card.Title>Book Title</Card.Title>
                      <Card.Text>Written by: author</Card.Text>
                      <Card.Text>Description</Card.Text>
                      <Button
                        variant="primary"
                        //   href={data.volumeInfo.infoLink}
                        //   target="_blank"
                      >
                        View
                      </Button>
                      <Button variant="danger">Remove</Button>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Jumbotron>
          </Col>
        </Row>
      </>
    );
  }
}
