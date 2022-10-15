import { info } from "js-logger";
import { get } from "lodash";
import { axiosInstance as axios } from "./api";

export const request = (options) => {
  info(`[API/${options.method}] Request:`, options);

  return axios(options)
    .then((response) => {
      info(`[API/${options.method}] Response:`, response);

      return get(response, "data", response);
    })
    .catch((error) => {
      info(`[API/${options.method}] Response:`, get(error, "response"));

      throw error;
    });
};
