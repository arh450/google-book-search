import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";

import "./style.css";

export default class index extends Component {
  render() {
    return (
      <>
        <Navbar collapseOnSelect expand="lg" variant="dark" id="mainNav">
          <Navbar.Brand href="/">Google Books</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Search</Nav.Link>
              <Nav.Link href="/saved">Saved</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}
