import React from "react";
import image from "../images/programmer.jpg";
import UserService from "../services/UserService";

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

  onSearchClick = () => {
    console.log("Search button clicked", this.state);
    UserService.YelpApiSearch(
      this.state.searchedCity,
      this.onYelpApiSearchSuccess,
      this.onYelpApiSearchError
    );
  };

  onYelpApiSearchSuccess = resp => {
    console.log("Search successful", resp);
  };

  onYelpApiSearchError = resp => {
    console.log("Search unsuccessful", resp);
  };

  render() {
    return (
      <React.Fragment>
        <div id="home" className="container">
          <form>
            <div className="searchBar">
              <div className="row d-flex justify-content-center">
                <input
                  type="search"
                  name="searchedCity"
                  className="form-control col-md-3"
                  placeholder="What city are you in?"
                  onChange={this.onChange}
                />
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={this.onSearchClick}
                >
                  Search
                </button>
              </div>
            </div>
          </form>
          <hr />
          <div className="searchedVendors">
            <div className="card bg-dark text-white">
              <img className="card-img" src={image} alt="Vendor" />
              <div className="card-img-overlay">
                <h5 className="card-title">Vendor name</h5>
                <p className="card-text">Description of the vendor</p>
                <button type="button" className="btn btn-success">
                  Locate
                </button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
