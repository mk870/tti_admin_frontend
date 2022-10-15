import { Toast } from "components/notifications";
import { httpPut } from "utils";
import { httpGet, httpPost, httpDelete } from "utils";

import {
  ADD_EMPLOYEE_REQUEST,
  ADD_EMPLOYEE_SUCCESS,
  ADD_EMPLOYEE_ERROR,
  FETCH_EMPLOYEES_REQUEST,
  FETCH_EMPLOYEES_SUCCESS,
  FETCH_EMPLOYEES_ERROR,
  DELETE_EMPLOYEE_REQUEST,
  DELETE_EMPLOYEE_SUCCESS,
  DELETE_EMPLOYEE_ERROR,
  FETCH_EMPLOYEE_REQUEST,
  FETCH_EMPLOYEE_SUCCESS,
  FETCH_EMPLOYEE_ERROR,
  EDIT_EMPLOYEE_ERROR,
  EDIT_EMPLOYEE_REQUEST,
  EDIT_EMPLOYEE_SUCCESS,
} from "./constants";

export const addEmployee = (params) => {
  return (dispatch) =>
    new Promise((resolve, reject) => {
      dispatch({
        type: ADD_EMPLOYEE_REQUEST,
      });

      httpPost("/employees", params)
        .then((response) => {
          dispatch({ type: ADD_EMPLOYEE_SUCCESS });

          Toast({ message: "Employee added 🚀", type: "success" });

          resolve(response);
        })
        .catch((error) => {
          dispatch({ type: ADD_EMPLOYEE_ERROR, error });

          Toast({ message: "Error adding employee 🤯", type: "error" });

          reject(error);
        });
    });
};

export const fetchEmployees = (params) => {
  return (dispatch) =>
    new Promise((resolve, reject) => {
      dispatch({
        type: FETCH_EMPLOYEES_REQUEST,
      });

      httpGet("/employees", params)
        .then((response) => {
          dispatch({ type: FETCH_EMPLOYEES_SUCCESS });
          resolve(response);
        })
        .catch((error) => {
          dispatch({ type: FETCH_EMPLOYEES_ERROR, error });
          reject(error);
        });
    });
};

export const fetchEmployee = (id) => {
  return (dispatch) =>
    new Promise((resolve, reject) => {
      dispatch({
        type: FETCH_EMPLOYEE_REQUEST,
      });

      httpGet(`/employees/${id}`)
        .then((response) => {
          dispatch({ type: FETCH_EMPLOYEE_SUCCESS });

          resolve(response);
        })
        .catch((error) => {
          dispatch({ type: FETCH_EMPLOYEE_ERROR, error });

          reject(error);
        });
    });
};

export const deleteEmployee = (id) => {
  return (dispatch) =>
    new Promise((resolve, reject) => {
      dispatch({
        type: DELETE_EMPLOYEE_REQUEST,
      });

      httpDelete(`/employees/${id}`)
        .then((response) => {
          dispatch({ type: DELETE_EMPLOYEE_SUCCESS });

          Toast({ message: "Employee deleted 🚀", type: "success" });

          resolve(response);
        })
        .catch((error) => {
          dispatch({ type: DELETE_EMPLOYEE_ERROR, error });

          Toast({ message: "Error deleting employee 🤯", type: "error" });

          reject(error);
        });
    });
};

export const editEmployee = (id, params) => {
  return (dispatch) =>
    new Promise((resolve, reject) => {
      dispatch({
        type: EDIT_EMPLOYEE_REQUEST,
      });

      httpPut(`/employees/${id}`, params)
        .then((response) => {
          dispatch({ type: EDIT_EMPLOYEE_SUCCESS });

          Toast({
            message: "Employee edited successfully 🚀",
            type: "success",
          });

          resolve(response);
        })
        .catch((error) => {
          dispatch({ type: EDIT_EMPLOYEE_ERROR, error });

          Toast({ message: "Error editing employee 🤯", type: "error" });

          reject(error);
        });
    });
};
