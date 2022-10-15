import React from "react";
import PropTypes from "prop-types";

import * as styled from "./styles";

export const Input = (props) => {
  return <styled.Input {...props} />;
};

Input.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string,
  errors: PropTypes.string,
  className: PropTypes.string,
};
