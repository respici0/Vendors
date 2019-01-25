import React from "react";
import image from "../images/programmer.jpg";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onChange = e => {
    let name = e.target.name;
    let val = e.target.value;
    console.log("name,val", name, val, this.state);
    this.setState({
      [name]: val
    });
  };

  onSearchClick = () => {};

  render() {
    return (
      <React.Fragment>
        <div id="home" className="container">
          <form>
            <div className="searchBar">
              <div className="row d-flex justify-content-center">
                <input
                  type="search"
                  className="form-control col-md-3"
                  placeholder="Search the city"
                  onChange={this.onChange}
                />
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={this.onSearchClick}
                >
                  Locate
                </button>
              </div>
            </div>
          </form>
          <hr />
          <div className="searchedVendors">
            <div className="card bg-dark text-white">
              <img className="card-img" src={image} alt="Card image" />
              <div className="card-img-overlay">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className="card-text">Last updated 3 mins ago</p>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
