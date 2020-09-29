import React, { Component } from "react";
import { Card, Row, Col, Button, Jumbotron } from "react-bootstrap";

import "./style.css";

export default class Result extends Component {
  render() {
    const { bookData } = this.props.state;
    const { postNewBook } = this.props;

    return (
      <>
        <Row className="mx-auto ">
          <Col md={10} className="mt-3 mx-auto">
            {!bookData.length ? (
              <Jumbotron className="bg-warning">
                <h1 className="text-center text-white">
                  No Results to Display
                </h1>
              </Jumbotron>
            ) : (
              <Jumbotron className="bg-warning">
                {bookData.map((data, index) => (
                  <Card className="mb-1" key={index}>
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
                          <Button
                            variant="primary"
                            href={data.volumeInfo.infoLink}
                            target="_blank"
                          >
                            View
                          </Button>
                          <Button
                            variant="success"
                            id={data.id}
                            onClick={postNewBook}
                          >
                            Save
                          </Button>
                        </Card.Body>
                      </Col>
                    </Row>
                  </Card>
                ))}
              </Jumbotron>
            )}
          </Col>
        </Row>
      </>
    );
  }
}
