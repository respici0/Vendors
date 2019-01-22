import React from "react";
import TextInput from "../common/TextInput";

const LoginForm = () => (
  <React.Fragment>
    <form>
      <TextInput
        name="email"
        label="Email"
        type="text"
        value={props.email}
        placeholder="Email here"
        onChange={this.onChange}
      />
      <TextInput
        name="password"
        label="Password"
        type="text"
        value={props.password}
        placeholder="Password here"
        onChange={this.onChange}
      />
    </form>
  </React.Fragment>
);

export default LoginForm;
