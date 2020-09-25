import React, { Component } from "react";
import Header from "../components/Header/Header.js";
import Search from "../components/Search/Search.js";
import Results from "../components/Results/Results.js";

export default class index extends Component {
  render() {
    return (
      <>
        <Header />
        <Search />
        <Results />
      </>
    );
  }
}
