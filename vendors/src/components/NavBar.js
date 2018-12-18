import React from 'react';
//import { Route, Link } from 'react-router-dom';
import Login from './Login';
import Register from './Register';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    }
  }
  render() {
    if (!this.state.isLoggedIn) {
      return (
        <React.Fragment>
          <Login />
          <div className="background">
            <h3>A carousal of vendor images will go here</h3>
          </div>
          {/* <Route exact path="/" component={Home} /> */}
        </React.Fragment>
      )
    }
    else {
      return (
        <React.Fragment>
          <Register />
        </React.Fragment>
      )
    }
  }
}

export default NavBar;