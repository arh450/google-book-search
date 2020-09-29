import React, { Component } from "react";
import Header from "../components/Header/Header.js";
import SavedBooks from "../components/SavedBooks/SavedBooks.js";
export default class Saved extends Component {
  render() {
    return (
      <>
        <Header />
        <SavedBooks />
      </>
    );
  }
}
