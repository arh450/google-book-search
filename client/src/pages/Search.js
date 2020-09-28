import React, { Component } from "react";
import Header from "../components/Header/Header.js";
import Search from "../components/Search/Search.js";

export default class index extends Component {
  render() {
    return (
      <>
        <Header />
        <Search />
      </>
    );
  }
}
