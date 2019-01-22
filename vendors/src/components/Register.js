import React from "react";
import RegisterForm from "../forms/RegisterForm";
import TextInput from "../common/TextInput";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "", confirmPassword: "" };
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

  render() {
    return (
      <React.Fragment>
        <div
          className="modal fade bd-modal-lg"
          id="registerModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="ModalLabel"
          aria-hidden="true"
        >
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            role="document"
          >
            <div className="modal-content">
              {/* <div className="modal-header"> */}
              <h1 className="modal-title display-2 font-weight-bolder mb-4">
                Register
              </h1>
              {/* </div> */}
              <div className="modal-body">
                <div className="container">
                  {" "}
                  <RegisterForm {...this.state} onChange={this.onChange} />
                </div>
              </div>
              {/* <div className="modal-footer"> */}
              <div className="form-group col-sm-12">
                <button type="button" className="btn btn-success">
                  Register
                </button>
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Register;
