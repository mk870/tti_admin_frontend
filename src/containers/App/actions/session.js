import { httpGet } from "utils";
import {
  FETCH_SESSION_REQUEST,
  FETCH_SESSION_SUCCESS,
  FETCH_SESSION_ERROR,
} from "../contants";

export const fetchSession = () => {
  return (dispatch) =>
    new Promise((resolve, reject) => {
      dispatch({
        type: FETCH_SESSION_REQUEST,
      });
      httpGet("/current_session")
        .then((user) => {
          dispatch({
            type: FETCH_SESSION_SUCCESS,
            user,
          });

          resolve();
        })
        .catch((error) => {
          console.log(error);
          dispatch({ type: FETCH_SESSION_ERROR, error });

          localStorage.removeItem("flaskJWTToken");
          reject();
        });
    });
};
