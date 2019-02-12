import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import LandingPage from "./LandingPage";

class Navigation extends React.Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <NavBar />
          <Route exact path="/landingpage" component={LandingPage} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </React.Fragment>
      </Router>
    );
  }
}

export default Navigation;
