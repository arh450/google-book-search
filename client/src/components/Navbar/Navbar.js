import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";

import "./style.css";

export default class index extends Component {
  render() {
    return (
      <>
        <Navbar collapseOnSelect expand="lg" variant="dark" id="mainNav">
          <Navbar.Brand href="/">
            <h4>Google Books</h4>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/" style={{ fontSize: "20px" }}>
                Search
              </Nav.Link>
              <Nav.Link href="/saved" style={{ fontSize: "20px" }}>
                Saved
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}
