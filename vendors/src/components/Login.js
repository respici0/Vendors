import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-dark bg-dark">
          {/* <Link to="/">Vendors</Link> */}
          <a className="navbar-brand" style={{ color: "white" }}>Vendors</a>
          <form className="form-inline">
            <input className="form-control mr-sm-2" placeholder="Username" />
            <input className="form-control mr-sm-2" placeholder="Password" />
            <button type="button" className="btn btn-success">Login</button>
          </form>
        </nav>
      </React.Fragment>
    )
  }
}

export default Login;