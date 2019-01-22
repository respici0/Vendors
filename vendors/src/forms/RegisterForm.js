import React from "react";
import TextInput from "../common/TextInput";

const RegisterForm = props => {
  return (
    <React.Fragment>
      <form>
        <TextInput
          name="email"
          label="Email"
          type="text"
          value={props.email}
          placeholder="Enter a valid email"
          onChange={props.onChange}
        />
        <TextInput
          name="password"
          label="Password"
          type="password"
          value={props.password}
          placeholder="Password"
          onChange={props.onChange}
        />
        <TextInput
          name="confirmPassword"
          label="Confirm Password"
          type="password"
          value={props.confirmPassword}
          placeholder="Confirm your password"
          onChange={props.onChange}
        />
      </form>
    </React.Fragment>
  );
};

export default RegisterForm;
