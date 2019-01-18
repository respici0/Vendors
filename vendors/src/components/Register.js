import React from "react";
import RegisterForm from "../forms/RegisterForm";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "", confirmPassword: "" };
  }

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row justify-content-center ">
            <div className="col-4">
              <RegisterForm {...this.state} onChange={this.onChange} />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Register;
