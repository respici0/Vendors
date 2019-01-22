import React from "react";

const TextInput = props => (
  <React.Fragment>
    <label htmlFor={props.name}>{props.label}: </label>
    <input
      name={props.name}
      className="form-control input"
      type={props.type}
      value={props.value}
      placeholder={props.placeholder}
      onChange={props.onChange}
    />
  </React.Fragment>
);

export default TextInput;
