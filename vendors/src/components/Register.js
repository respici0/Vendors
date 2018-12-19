import React from 'react';
import RegisterForm from '../forms/RegisterForm';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    return (
      <React.Fragment>
        <RegisterForm />
      </React.Fragment>
    )
  }
}
export default Register;