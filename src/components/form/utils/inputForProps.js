import React from "react";

import { Input } from "../input/input";
import { Select } from "../select";

export const InputForProps = (props) => {
  const { context, ...otherProps } = props;

  const inputProps = { ...context, ...otherProps };

  switch (inputProps.type) {
    case "text":
    case "password":
    case "date":
      return (
        <Input
          id={inputProps.id}
          type={inputProps.type}
          value={inputProps.value}
          placeholder={inputProps.placeholder}
          onChange={inputProps.onChange}
          errors={inputProps.errors}
          className={inputProps.className}
        />
      );
    case "select":
      return (
        <Select
          name={inputProps.name}
          options={inputProps.options}
          value={inputProps.value}
          placeholder={inputProps.placeholder}
          onChange={inputProps.onChange}
          errors={inputProps.errors}
          className={inputProps.className}
        />
      );
    default:
      return null;
  }
};
