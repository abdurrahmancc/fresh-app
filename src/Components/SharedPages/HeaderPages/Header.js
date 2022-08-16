import React from "react";
import MiddleHeader from "./MiddleHeader/MiddleHeader";
import TopHeader from "./TopHeader/TopHeader";

const Header = () => {
  return (
    <header>
      <TopHeader />
      <MiddleHeader />
    </header>
  );
};

export default Header;
