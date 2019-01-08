import React from "react";
import { Link, Route } from "react-router-dom";
import Register from "../components/Register";
import { connect } from "react-redux";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  onChange = e => {
    const name = e.target.name;
    const val = e.target.value;
    this.setState({
      [name]: val
    });
  };

  onLoginClicked = () => {
    // send new user Id to Redux store
    this.props.setUser(this.state.email);
  };

  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-dark bg-dark">
          {/* <Link to="/">Vendors</Link> */}
          <a href="#" className="navbar-brand" style={{ color: "white" }}>
            Vendors
            {/* Welcome, {this.props.user} */}
          </a>
          <form className="form-inline">
            <Link to="/register">
              <span className="mr-5">Register</span>
            </Link>
            <input
              className="form-control mr-sm-2"
              name="email"
              value={this.state.email}
              onChange={this.onChange}
              placeholder="Email"
            />
            <input
              className="form-control mr-sm-2"
              name="password"
              value={this.state.password}
              onChange={this.onChange}
              placeholder="Password"
            />
            <button
              type="button"
              className="btn btn-secondary"
              onClick={this.onLoginClicked}
            >
              Login
            </button>
          </form>
        </nav>
        <Route path="/register" component={Register} />
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

function mapDispatchToProps(dispatch) {
  // return an object that becomes the props given to your component
  return {
    setUser: user => dispatch({ type: "SET_USER", user })
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
