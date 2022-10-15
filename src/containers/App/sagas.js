import { put, takeEvery } from "redux-saga/effects";
import { isNil } from "lodash";
import { warn } from "js-logger";
import { Toast } from "components/notifications";
import { CREATE_SESSION_ERROR } from "containers/SignIn/constants";
import { FETCH_SESSION_ERROR } from "./contants";

export function* handleFailure(action) {
  const { type, error } = action;
  warn(`[Redux] Error action: ${type}`, action);

  if (isNil(error) || isNil(error.response)) return;

  if (error.message === "Network Error") {
    warn("[API] 0: Connection Problem");

    Toast({ message: "Network Error 🤯", type: "error" });
    return;
  }

  if (isNil(error.response.status) && isNil(error.response.data)) return;

  const { status, data } = error.response;

  switch (true) {
    case status === 401:
    case status === 403:
      warn("[API] 401/403: Unauthorized");

      if (data.error === "token_expired") {
        localStorage.removeItem("flaskJWTToken");
        yield put({ type: FETCH_SESSION_ERROR }); // sets user to null and redirects from App
        Toast({ message: "Token expired, please log in 🤯", type: "error" });
        break;
      }

      if (data.error === "invalid credentials") {
        Toast({
          message: "Invalid credentials, please try again 🤯",
          type: "error",
        });
      }

      if (type !== CREATE_SESSION_ERROR) {
        // sets user to null and redirects from App
        yield put({ type: FETCH_SESSION_ERROR });
        Toast({
          message: "Unauthorized, please log in again 🤯",
          type: "error",
        });
      }

      break;

    case status === 422:
      warn("[API] 422: Validation Error");

      if (data.error === "expired_token") {
        yield window.history.push("/sign-in");
        Toast({ message: "Token expired, please log in 🤯", type: "error" });
      }

      break;

    case status >= 500:
      warn("[API] 5xx: Internal Server Error");

      Toast({ message: "Internal server error 🤯", type: "error" });

      break;

    default:
      warn(`[API] ${status}: Unknown Error`);

      Toast({ message: "Unknown error 🤯", type: "error" });
  }
}

export function* rootSaga() {
  yield takeEvery((action) => /ERROR$/.test(action.type), handleFailure);
}
