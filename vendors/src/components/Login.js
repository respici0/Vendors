import React from "react";
// import Register from "../components/Register";
import { connect } from "react-redux";
import TextInput from "../common/TextInput";

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
    this.setState(
      {
        [name]: val
      },
      console.log("name, val", [name], val)
    );
  };

  onLoginClicked = () => {
    // send new user Id to Redux store
    this.props.setUser(this.state.email);
  };

  render() {
    return (
      <React.Fragment>
        <div id="loginPage" className="d-none d-lg-flex align-items-center ">
          <div className="container w-50 ">
            <h1 className="display-2 font-weight-bolder mb-4">Vendors</h1>
            <div className="form-group">
              <label className="form-label" htmlFor="email">
                Email
              </label>
              <TextInput
                name="email"
                type="text"
                value={this.value}
                placeholder="Email here"
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="password">
                Password
              </label>
              <TextInput
                name="password"
                type="text"
                value={this.value}
                placeholder="Password here"
                onChange={this.onChange}
              />
            </div>
            <div className="button form-row">
              <div className="form-group col-sm-12">
                <button
                  type="submit"
                  className="btn btn-success"
                  onClick={() => {
                    this.props.history.push("/home");
                  }}
                >
                  {" "}
                  <span />
                  Sign in
                </button>
                <hr />
                <div>
                  <span>Don't have an account yet?</span>{" "}
                  <a href="/register">Sign Up</a>
                </div>
              </div>
            </div>
          </div>
        </div>
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
