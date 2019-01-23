import axios from "axios";

class UserService {
  static Register(data, onSuccess, onError) {
    const url = `/api/Account/Register`;
    const config = {
      method: "POST",
      data: data
    };
    axios.defaults.withCredentials = true;
    axios(url, config)
      .then(onSuccess)
      .catch(onError);
  }
}

export default UserService;
