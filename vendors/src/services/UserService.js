import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

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

  static YelpApiSearch(state, onSuccess, onError) {
    const config = {
      Authorization: process.env.REACT_APP_KEY
    };
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=foodtrucks&latitude=${
          state.latitude
        }&longitude=${state.longitude}&radius=40000&categories=${
          state.searchParam
        }`,
        {
          headers: config
        }
      )
      .then(onSuccess)
      .catch(onError);
  }
}

export default UserService;
