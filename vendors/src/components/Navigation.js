import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";

const Navigation = () => (
  <Router>
    <div>
      <NavBar />
      <Route exact path="/home" component={Home} />
    </div>
  </Router>
);

export default Navigation;
