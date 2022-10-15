import React from "react";
import PropTypes from "prop-types";

export const ProtectedRoute = ({ user, children }) => {
  if (!user) {
    return <div>you dont have access, please login</div>;
  }

  return children;
};

ProtectedRoute.propTypes = {
  user: PropTypes.object,
  children: PropTypes.node,
};
