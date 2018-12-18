import React from 'react';

const TextInput = props => {
  return (
    <React.Fragment>
      <label htmlFor={props.name}>{props.label}: </label>
      <input
        name={props.name}
        className="form-control"
        type={props.type}
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
    </React.Fragment>

  )
}

export default TextInput;