import { httpPost } from "utils";
import { Toast } from "components/notifications";

import {
  CREATE_SESSION_REQUEST,
  CREATE_SESSION_SUCCESS,
  CREATE_SESSION_ERROR,
} from "./constants";

export const signIn = (params) => (dispatch) =>
  new Promise((resolve, reject) => {
    dispatch({
      type: CREATE_SESSION_REQUEST,
    });

    httpPost("/sign_in", params)
      .then((response) => {
        localStorage.setItem("flaskJWTToken", response.access_token);

        dispatch({
          type: CREATE_SESSION_SUCCESS,
          payload: response.user,
        });

        Toast({ message: "Successfully logged in 🚀", type: "success" });

        resolve(response.user);
      })
      .catch((error) => {
        dispatch({
          type: CREATE_SESSION_ERROR,
          error,
        });

        reject(error);
      });
  });
