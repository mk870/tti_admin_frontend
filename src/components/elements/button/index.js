import React from "react";
import PropTypes from "prop-types";

import * as styled from "./styles.js";

export const Button = (props) => {
  const { children, ...inputProps } = props;
  return <styled.Button {...inputProps}>{props.children}</styled.Button>;
};

Button.propTypes = {
  children: PropTypes.node,
  btnColor: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
};
