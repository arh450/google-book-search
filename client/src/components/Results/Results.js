import React, { Component } from "react";
import { Card, Row, Col, Button, Jumbotron } from "react-bootstrap";
import Axios from "axios";
import "./style.css";

export default class Result extends Component {
  render() {
    const { bookData } = this.props.state;

    return (
      <>
        <Row className="mx-auto mt-2">
          <Col md={10} className="mt-3 mx-auto">
            <Jumbotron className="bg-warning">
              {bookData.map((data) => (
                <Card className="mb-1">
                  <Row>
                    <Col md={2}>
                      <img
                        alt="bookImage"
                        className="img-fluid"
                        src={data.volumeInfo.imageLinks.smallThumbnail}
                      />
                    </Col>
                    <Col md={10}>
                      <Card.Body>
                        <Card.Title>{data.volumeInfo.title}</Card.Title>
                        <Card.Text>
                          Written by: {data.volumeInfo.authors[0]}
                        </Card.Text>
                        <Card.Text>{data.volumeInfo.description}</Card.Text>
                        <Button variant="primary">View</Button>
                        <Button variant="success">Save</Button>
                      </Card.Body>
                    </Col>
                  </Row>
                </Card>
              ))}
            </Jumbotron>
          </Col>
        </Row>
      </>
    );
  }
}
