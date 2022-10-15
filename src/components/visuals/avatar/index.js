import React from "react";
import PropTypes from "prop-types";

import * as styled from "./styles";

export const Avatar = ({ initials, color }) => {
  if (!initials) return;

  return <styled.Avatar color={color}>{initials.toUpperCase()}</styled.Avatar>;
};

Avatar.propTypes = {
  initials: PropTypes.string,
  color: PropTypes.string,
};
