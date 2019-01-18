import React from "react";
import TextInput from "../common/TextInput";

const RegisterForm = props => {
  return (
    <React.Fragment>
      <form className="registerForm">
        <TextInput
          name="email"
          label="Email"
          className="form-control"
          type="text"
          value={props.email}
          onChange={props.onChange}
        />
        <TextInput
          name="password"
          label="Password"
          className="form-control"
          type="password"
          value={props.password}
          onChange={props.onChange}
        />
        <TextInput
          name="confirmPassword"
          label="Confirm Password"
          className="form-control"
          type="password"
          value={props.confirmPassword}
          onChange={props.onChange}
        />

        <button type="button" className="btn btn-primary">
          Register
        </button>
      </form>
    </React.Fragment>
  );
};

export default RegisterForm;
