import React, { useEffect } from "react";
import { isNull } from "lodash";
import PropTypes from "prop-types";
import { Routes, Route, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import { SignIn } from "containers/SignIn";
import { Employees } from "containers/Employees";
import { ProtectedRoute } from "utils/routing/protectedRoute";

import { fetchSession } from "./actions/session";
import { SideMenu } from "./ui/sideMenu";
import * as styled from "./styles";

const AppComponent = ({ user, handleFetchSession }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (isNull(user)) {
      navigate("/sign-in");
    } else {
      navigate("/employees");
    }
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("flaskJWTToken");
    const logOutPath = false;
    if (!logOutPath && token) {
      handleFetchSession();
    }
  }, []);

  return (
    <styled.Container>
      <styled.AppBody>
        {user && <SideMenu />}
        <Routes>
          <Route exact path="sign-in" element={<SignIn />} />

          <Route
            path="employees/*"
            element={
              <ProtectedRoute user={user}>
                <Employees />
              </ProtectedRoute>
            }
          />
        </Routes>
        <ToastContainer />
      </styled.AppBody>
    </styled.Container>
  );
};

AppComponent.propTypes = {
  user: PropTypes.object,
  handleFetchSession: PropTypes.func,
  handleRedirect: PropTypes.func,
};

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleFetchSession: () => dispatch(fetchSession()),
  };
}

export const App = connect(mapStateToProps, mapDispatchToProps)(AppComponent);
