import React from "react";
import { connect } from "react-redux";
import TextInput from "../common/TextInput";
import { withRouter } from "react-router-dom";

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
            <TextInput
              name="email"
              label="Email"
              type="text"
              value={this.value}
              placeholder="Email here"
              onChange={this.onChange}
            />
            <TextInput
              name="password"
              label="Password"
              type="text"
              value={this.value}
              placeholder="Password here"
              onChange={this.onChange}
            />
            <br />
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
    userId: state.userId
  };
}

function mapDispatchToProps(dispatch) {
  // return an object that becomes the props given to your component
  return {
    setUserId: userId => dispatch({ type: "SET_LOGIN_USER", userId })
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Login)
);
