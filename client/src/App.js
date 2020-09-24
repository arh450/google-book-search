import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.js";
import Search from "./pages/Search";
import Saved from "./pages/Saved";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" render={(props) => <Search {...props} />} />
          <Route exact path="/saved" render={(props) => <Saved {...props} />} />
        </Switch>
      </Router>
    </div>
  );
}
