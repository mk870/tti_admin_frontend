import React from "react";
import PropTypes from "prop-types";

import * as styled from "../styles/menuItem";

export const MenuItem = (props) => {
  const { label, isLogo, isActive } = props;
  return (
    <styled.Wrapper isLogo={isLogo} isActive={isActive}>
      {label && <styled.label>{label}</styled.label>}
    </styled.Wrapper>
  );
};

MenuItem.propTypes = {
  label: PropTypes.string,
  isActive: PropTypes.bool,
  isLogo: PropTypes.bool,
  Icon: PropTypes.node,
};
