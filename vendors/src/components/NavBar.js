import React from "react";
//import { Route, Link } from 'react-router-dom';
import Login from "./Login";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
  }
  render() {
    if (!this.state.isLoggedIn) {
      return (
        <React.Fragment>
          <Login />
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <h3>HomePage</h3>
        </React.Fragment>
      );
    }
  }
}

export default NavBar;
