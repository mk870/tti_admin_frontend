import { combineReducers } from "redux";

import { userReducer } from "containers/SignIn/reducers";

export default combineReducers({
  user: userReducer,
});
