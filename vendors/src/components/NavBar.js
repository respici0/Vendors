import React from "react";
import { Route, Link } from "react-router-dom";
import Login from "./Login";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
  }
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-dark bg-dark">
          {/* <Link to="/">Vendors</Link> */}
          <a href="#" className="navbar-brand" style={{ color: "white" }}>
            Vendors
            {/* Welcome, {this.props.user} */}
          </a>
        </nav>
      </React.Fragment>
    );
  }
}

export default NavBar;
