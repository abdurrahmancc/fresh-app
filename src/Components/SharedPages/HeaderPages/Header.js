import React from "react";
import { useLocation } from "react-router-dom";
import BottomHeader from "./BottomHeader/BottomHeader";
import MiddleHeader from "./MiddleHeader/MiddleHeader";
import TopHeader from "./TopHeader/TopHeader";

const Header = () => {
  const { pathname } = useLocation();
  return (
    <header>
      {pathname.includes("home2") || <TopHeader />}
      <MiddleHeader />
      <BottomHeader />
    </header>
  );
};

export default Header;
