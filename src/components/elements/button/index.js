import React from "react";
import PropTypes from "prop-types";
import ClipLoader from "react-spinners/ClipLoader";

import * as styled from "./styles.js";

export const Button = (props) => {
  const { children, color, loading, ...inputProps } = props;

  return (
    <styled.Button {...inputProps} color={color}>
      {loading && (
        <ClipLoader
          color={color}
          loading={loading}
          size={14}
          cssOverride={{ marginRight: "7px" }}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      )}
      {props.children}
    </styled.Button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  btnColor: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
  loading: PropTypes.bool,
};
