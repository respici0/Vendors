import React from "react";
import RegisterForm from "../forms/RegisterForm";
import UserService from "../services/UserService";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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

  onRegisterButtonClick = () => {
    console.log("Register clicked", this.state);
    UserService.Register(
      this.state,
      this.onRegisterSuccess,
      this.onRegistrationError
    );
  };

  onRegisterSuccess = resp => {
    console.log("User registration success");
    this.props.history.push("/login");
  };

  onRegistrationError = resp => {
    console.log("User registration error");
  };

  render() {
    return (
      <React.Fragment>
        <div id="registerPage" className="d-none d-lg-flex align-items-center ">
          <div className="container w-50 ">
            <h1 className="display-2 font-weight-bolder mb-4">Register</h1>
            <RegisterForm {...this.state} onChange={this.onChange} />
            <br />
            <div className="button form-row">
              <div className="form-group col-sm-12">
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={this.onRegisterButtonClick}
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Register;
