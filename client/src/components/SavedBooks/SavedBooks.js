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
              <Jumbotron className="bg-warning">
                <h1 className="text-center text-white">
                  No Saved Books to Display
                </h1>
              </Jumbotron>
            ) : (
              <Jumbotron className="bg-warning">
                {savedBooks.map((data, index) => (
                  <Card className="mb-1" key={index}>
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
                          <Card.Title>{data.Title}</Card.Title>
                          <Card.Text>Written by: {data.authors[0]}</Card.Text>
                          <Card.Text>{data.description}</Card.Text>
                          <Button
                            variant="primary"
                            href={data.link}
                            target="_blank"
                          >
                            View
                          </Button>
                          <Button
                            variant="danger"
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
