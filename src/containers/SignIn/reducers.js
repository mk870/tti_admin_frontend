import { FETCH_SESSION_SUCCESS, FETCH_SESSION_ERROR } from "../App/contants";
import { CREATE_SESSION_SUCCESS } from "./constants";

export const userReducer = (state = null, action) => {
  switch (action.type) {
    case CREATE_SESSION_SUCCESS:
    case FETCH_SESSION_SUCCESS:
      return { ...state, ...action.payload };
    case FETCH_SESSION_ERROR:
      return null;
    default:
      return state;
  }
};
