import React from "react";
import SelectComponent from "react-select";

import * as styled from "./styles";

export const Select = ({
  options,
  onChange,
  value,
  placeholder,
  id,
  name,
  className,
}) => {
  return (
    // <styled.Select className={className}>
    <SelectComponent
      id={id}
      name={name}
      onChange={onChange}
      options={options}
      value={value}
      placeholder={placeholder}
      className={className}
    />
    // </styled.Select>
  );
};
