import React from 'react';
import { Link, Route } from 'react-router-dom';
import Register from '../components/Register';

class Login extends React.Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-dark bg-dark">
          {/* <Link to="/">Vendors</Link> */}
          <a href="#" className="navbar-brand" style={{ color: "white" }}>Vendors</a>
          <form className="form-inline">
            <Link to="/register"><span className="mr-5">Register</span></Link>
            <input className="form-control mr-sm-2" placeholder="Email" />
            <input className="form-control mr-sm-2" placeholder="Password" />
            <button type="button" className="btn btn-secondary">Login</button>
          </form>
        </nav>
        <Route path="/register" component={Register} />
      </React.Fragment>
    )
  }
}

export default Login;