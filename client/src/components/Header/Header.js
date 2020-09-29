import React, { Component } from "react";
import { Jumbotron, Row, Col } from "react-bootstrap";

import "./style.css";

export default class Header extends Component {
  render() {
    return (
      <>
        <Row className="mx-auto">
          <Col md={10} className="mt-3 mx-auto text-center text-white">
            <Jumbotron id="jumbo">
              <Row className="mx-auto">
                <Col
                  md={6}
                  className="mx-auto p-2"
                  style={{
                    backgroundColor: "rgba(128, 136, 144, .9)",
                    borderRadius: "5px",
                  }}
                >
                  <h1>Google Books Search</h1>
                  <p>Search for and Save Books of Interest.</p>
                </Col>
              </Row>
            </Jumbotron>
          </Col>
        </Row>
      </>
    );
  }
}
