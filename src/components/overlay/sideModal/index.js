import React from "react";
import PropTypes from "prop-types";

import * as styled from "./styles";

export const SideMenu = ({ children }) => {
  return <styled.Wrapper>{children}</styled.Wrapper>;
};

SideMenu.propTypes = {
  children: PropTypes.node,
};
