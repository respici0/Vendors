import axios from "axios";
require("dotenv").config();

class UserService {
  // static Register(data, onSuccess, onError) {
  //   const url = `/api/Account/Register`;
  //   const config = {
  //     method: "POST",
  //     data: data
  //   };
  //   axios.defaults.withCredentials = true;
  //   axios(url, config)
  //     .then(onSuccess)
  //     .catch(onError);
  // }

  static Register(data, onSuccess, onError) {
    axios
      .post(`/api/Account/Register`, data, { withCredentials: true })
      .then(onSuccess)
      .catch(onError);
  }

  static YelpApiSearch(searchedCity, onSuccess, onError) {
    const config = {
      Authorization: process.env.REACT_APP_KEY
    };
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?categories=foodtrucks&location=${searchedCity}`,
        {
          headers: config
        }
      )
      .then(onSuccess)
      .catch(onError);
  }
}

export default UserService;
