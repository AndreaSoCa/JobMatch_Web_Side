import React from "react";
import { Outlet } from "react-router-dom";
import { Root } from "../materialUI-common";
import { NavBar } from "./NavBar";
import { NavBarProps } from "../../types";

export const RouterLayout: React.FC<NavBarProps> = ({ userType }) => {
  return (
    <Root>
      <NavBar userType={ userType } />
      <Outlet />
    </Root>
  );
};
