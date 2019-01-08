import { createStore } from "redux";

function reducer(state, action) {
  if (!state) {
    return {
      user: null
    };
  }

  //{type:'SET_USER', user:'name'}
  if (action.type === "SET_USER") {
    return {
      ...state,
      user: action.user
    };
  }
}

export default createStore(reducer);
