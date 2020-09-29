import React, { Component } from "react";
import {
  Card,
  Row,
  Col,
  Button,
  Jumbotron,
  Popover,
  OverlayTrigger,
} from "react-bootstrap";

export default class Result extends Component {
  render() {
    const { bookData } = this.props.state;
    const { postNewBook } = this.props;

    const popover = (
      <Popover id="popover-basic">
        <Popover.Title>Book Saved!</Popover.Title>
      </Popover>
    );

    return (
      <>
        <Row className="mx-auto ">
          <Col md={10} className="mt-3 mx-auto">
            {!bookData.length ? (
              <Jumbotron style={{ backgroundColor: "#283850" }}>
                <h1 className="text-center text-white">
                  No Results to Display
                </h1>
              </Jumbotron>
            ) : (
              <Jumbotron style={{ backgroundColor: "#283850" }}>
                {bookData.map((data, index) => (
                  <Card className="mb-1 p-2" key={index}>
                    <Row>
                      <Col md={2}>
                        <img
                          alt="bookImage"
                          className="img-fluid"
                          src={data.volumeInfo.imageLinks.thumbnail}
                        />
                      </Col>
                      <Col md={10}>
                        <Card.Body>
                          <Card.Title>
                            <strong>{data.volumeInfo.title}</strong>
                          </Card.Title>
                          <Card.Text style={{ fontSize: "18px" }}>
                            Written by: {data.volumeInfo.authors[0]}
                          </Card.Text>
                          <Card.Text style={{ fontSize: "19px" }}>
                            {data.volumeInfo.description}
                          </Card.Text>
                          <Button
                            style={{
                              backgroundColor: "#082038",
                              border: "none",
                            }}
                            href={data.volumeInfo.infoLink}
                            target="_blank"
                          >
                            View
                          </Button>
                          <OverlayTrigger
                            trigger="click"
                            rootClose
                            placement="top"
                            overlay={popover}
                          >
                            <Button
                              className="ml-1"
                              variant="success"
                              style={{
                                border: "none",
                              }}
                              id={data.id}
                              onClick={postNewBook}
                            >
                              Save
                            </Button>
                          </OverlayTrigger>
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
