import React, { Component } from "react";
import { Card, Row, Col, Button, Jumbotron } from "react-bootstrap";
import "./style.css";

export default class Result extends Component {
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
                      src="http://placekitten.com/g/125/200"
                    />
                  </Col>
                  <Col md={10}>
                    <Card.Body>
                      <Card.Title>Book Title</Card.Title>
                      <Card.Text>Written by: JK Rowling</Card.Text>
                      <Card.Text>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal distribution of
                        letters, as opposed to using 'Content here, content
                        here', making it look like readable English. Many
                        desktop publishing packages and web page editors now use
                        Lorem Ipsum as their default model text, and a search
                        for 'lorem ipsum' will uncover many web sites still in
                        their infancy. Various versions have evolved over the
                        years, sometimes by accident, sometimes on purpose
                        (injected humour and the like).
                      </Card.Text>
                      <Button variant="primary">View</Button>
                      <Button variant="success">Save</Button>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
              <Card className="mb-1">
                <Row>
                  <Col md={2}>
                    <img
                      alt="bookImage"
                      className="img-fluid"
                      src="http://placekitten.com/g/125/200"
                    />
                  </Col>
                  <Col md={10}>
                    <Card.Body>
                      <Card.Title>Book Title</Card.Title>
                      <Card.Text>Written by: JK Rowling</Card.Text>
                      <Card.Text>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal distribution of
                        letters, as opposed to using 'Content here, content
                        here', making it look like readable English. Many
                        desktop publishing packages and web page editors now use
                        Lorem Ipsum as their default model text, and a search
                        for 'lorem ipsum' will uncover many web sites still in
                        their infancy. Various versions have evolved over the
                        years, sometimes by accident, sometimes on purpose
                        (injected humour and the like).
                      </Card.Text>
                      <Button variant="primary">View</Button>
                      <Button variant="success">Save</Button>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
              <Card className="mb-1">
                <Row>
                  <Col md={2}>
                    <img
                      alt="bookImage"
                      className="img-fluid"
                      src="http://placekitten.com/g/125/200"
                    />
                  </Col>
                  <Col md={10}>
                    <Card.Body>
                      <Card.Title>Book Title</Card.Title>
                      <Card.Text>Written by: JK Rowling</Card.Text>
                      <Card.Text>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal distribution of
                        letters, as opposed to using 'Content here, content
                        here', making it look like readable English. Many
                        desktop publishing packages and web page editors now use
                        Lorem Ipsum as their default model text, and a search
                        for 'lorem ipsum' will uncover many web sites still in
                        their infancy. Various versions have evolved over the
                        years, sometimes by accident, sometimes on purpose
                        (injected humour and the like).
                      </Card.Text>
                      <Button variant="primary">View</Button>
                      <Button variant="success">Save</Button>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
              <Card className="mb-1">
                <Row>
                  <Col md={2}>
                    <img
                      alt="bookImage"
                      className="img-fluid"
                      src="http://placekitten.com/g/125/200"
                    />
                  </Col>
                  <Col md={10}>
                    <Card.Body>
                      <Card.Title>Book Title</Card.Title>
                      <Card.Text>Written by: JK Rowling</Card.Text>
                      <Card.Text>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal distribution of
                        letters, as opposed to using 'Content here, content
                        here', making it look like readable English. Many
                        desktop publishing packages and web page editors now use
                        Lorem Ipsum as their default model text, and a search
                        for 'lorem ipsum' will uncover many web sites still in
                        their infancy. Various versions have evolved over the
                        years, sometimes by accident, sometimes on purpose
                        (injected humour and the like).
                      </Card.Text>
                      <Button variant="primary">View</Button>
                      <Button variant="success">Save</Button>
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
