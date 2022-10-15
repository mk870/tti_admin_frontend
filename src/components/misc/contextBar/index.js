import React from "react";
import PropTypes from "prop-types";

import * as styled from "./styles";

export const ContextBar = ({ renderLeftChildren, renderRightChildren }) => {
  return (
    <styled.Wrapper>
      <styled.Children>{renderLeftChildren}</styled.Children>
      <styled.Children>{renderRightChildren}</styled.Children>
    </styled.Wrapper>
  );
};

ContextBar.propTypes = {
  renderLeftChildren: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  renderRightChildren: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};
