import React, { Component } from "react";
import { Card, Row, Col, Button, Jumbotron } from "react-bootstrap";
import Axios from "axios";

export default class index extends Component {
  state = {
    savedBooks: [],
  };

  componentDidMount() {
    Axios.get("/api/books")
      .then((response) => {
        this.setState({ savedBooks: response.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  deleteBook = (event) => {
    event.preventDefault();
    let book = this.state.savedBooks.filter(
      (data) => data._id === event.target.id
    );

    book = book[0];

    const bookId = book._id;

    Axios.delete(`/api/removebook/${bookId}`)
      .then((response) => {
        console.log(response);
        this.componentDidMount();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const { savedBooks } = this.state;

    return (
      <>
        <Row className="mx-auto mt-2">
          <Col md={10} className="mt-3 mx-auto">
            {!savedBooks.length ? (
              <Jumbotron style={{ backgroundColor: "#283850" }}>
                <h1 className="text-center text-white">
                  No Saved Books to Display
                </h1>
              </Jumbotron>
            ) : (
              <Jumbotron style={{ backgroundColor: "#283850" }}>
                {savedBooks.map((data, index) => (
                  <Card className="mb-1 p-2" key={index}>
                    <Row>
                      <Col md={2}>
                        <img
                          alt="bookImage"
                          className="img-fluid"
                          src={data.image}
                        />
                      </Col>
                      <Col md={10}>
                        <Card.Body>
                          <Card.Title>
                            <strong>{data.title}</strong>
                          </Card.Title>
                          <Card.Text style={{ fontSize: "18px" }}>
                            Written by: {data.authors[0]}
                          </Card.Text>
                          <Card.Text style={{ fontSize: "19px" }}>
                            {data.description}
                          </Card.Text>
                          <Button
                            style={{
                              backgroundColor: "#082038",
                              border: "none",
                            }}
                            href={data.link}
                            target="_blank"
                          >
                            View
                          </Button>

                          <Button
                            className="ml-1"
                            variant="danger"
                            style={{
                              border: "none",
                            }}
                            id={data._id}
                            onClick={this.deleteBook}
                          >
                            Remove
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
