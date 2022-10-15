import React from "react";
// import { useLocation } from "react-router-dom";

import { MenuItem } from "./menuItem";
import { menuItems } from "../utils/helpers";
import * as styled from "../styles/sideMenu";

export const SideMenu = (props) => {
  // const location = useLocation();

  return (
    <styled.Wrapper>
      <MenuItem label="TTI" isLogo />
      {/* {menuItems(location.pathname).map((item, index) => (
        <MenuItem {...item} key={index} />
      ))} */}
    </styled.Wrapper>
  );
};
