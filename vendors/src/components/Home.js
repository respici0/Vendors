import React from "react";
import UserService from "../services/UserService";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.getLocation();
  }

  getLocation() {
    if (navigator.geolocation) {
      let options = { timeout: 60000 };
      navigator.geolocation.getCurrentPosition(
        this.showLocation,
        this.errorHandler,
        options
      );
    } else {
      alert("Sorry, browser does not support geolocation!");
    }
  }

  showLocation = position => {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    console.log("Lat:", latitude, "Long:", longitude);
  };

  errorHandler(err) {
    if (err.code == 1) {
      alert("Error: Access is denied!");
    } else if (err.code == 2) {
      alert("Error: Position is unavailable!");
    }
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
    console.log("Search button clicked", this.state.searchParam);
    this.getLocation();
    UserService.YelpApiSearch(
      this.state.searchParam,
      this.onYelpApiSearchSuccess,
      this.onYelpApiSearchError
    );
  };

  onYelpApiSearchSuccess = resp => {
    console.log("Search successful", resp.data.businesses);
    this.setState(
      {
        vendors: resp.data.businesses
      },
      () => {
        console.log(this.state);
      }
    );
  };

  onYelpApiSearchError = resp => {
    console.log("Search unsuccessful", resp);
  };

  render() {
    const { vendors } = this.state;
    const displayVendors =
      vendors == null ? (
        <div className="defaultStatement">
          <p />
        </div>
      ) : (
        vendors.map(obj => {
          return (
            <div key={obj.id} className="searchedVendors mt-5">
              <div className="card bg-dark text-white">
                <img className="card-img" src={obj.image_url} alt="Vendor" />
                <div className="card-img-overlay">
                  <h5 className="card-title">{obj.name}</h5>
                  <p className="card-text">
                    {obj.is_closed !== false ? "Closed" : "OPEN"}
                  </p>
                  <p>Rating: {obj.rating}</p>
                  <p>
                    <a
                      href={obj.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "white" }}
                    >
                      REVIEWS
                    </a>
                  </p>
                  <button type="button" className="btn btn-outline-success">
                    Locate
                  </button>
                </div>
              </div>
            </div>
          );
        })
      );
    return (
      <React.Fragment>
        <div id="home" className="container">
          <div>
            <p className="header">I'm hungry for. . .</p>
          </div>
          <div className="searchBar">
            <div className="row d-flex justify-content-center">
              <input
                type="text"
                name="searchParam"
                className="form-control"
                placeholder="What are we feeling?"
                onChange={this.onChange}
              />
              <button
                type="button"
                className="btn btn-outline-secondary mt-2"
                onClick={this.onSearchClick}
              >
                . . . so let's go!
              </button>
            </div>
          </div>
          <br />
          {displayVendors}
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
