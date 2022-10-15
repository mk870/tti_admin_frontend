import React from "react";

import { InputForProps } from "../utils/inputForProps";
import * as styled from "./styles";

export const Fieldset = (props) => {
  const {
    context: { required, label },
    errors,
    className,
  } = props;
  const labelElement = (
    <>
      <styled.Label>
        {label}
        {required && <styled.Required>*</styled.Required>}
      </styled.Label>
    </>
  );

  const inputComponent = InputForProps(props);

  return (
    <styled.Wrapper className={className}>
      {label && labelElement}
      {inputComponent}
      {errors && <styled.ErrorMessage>{errors}</styled.ErrorMessage>}
    </styled.Wrapper>
  );
};

Fieldset.defaultProps = {
  context: {
    required: false,
  },
  label: null,
};
