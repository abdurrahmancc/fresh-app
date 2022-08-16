import React, { useState } from "react";
import Collapsible from "react-collapsible";
import { BsChevronDown } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
import "../../../SharedCss/CollapsibleStyle.css";

const BottomCategories = () => {
  const { pathname } = useLocation();

  return (
    <div id="shopCategories">
      <Collapsible
        className="w-full"
        open={pathname.includes("home") || (pathname === "/" && true)}
        trigger={["SHOP BY CATEGORY", <BsChevronDown />]}
      >
        <ul
          className={`menu bg-base-100 z-50 w-full shadow-lg border-primary mb-1 relative border-[2px] top-0  ease-in-out duration-500 border-t-0 rounded-b-xl font-bold`}
        >
          <li className="hover:bg-primary border-b border-gray-200 hover:text-neutral capitalize">
            <Link to={"/categories/computer"}>Computer</Link>
          </li>
          <li className="hover:bg-primary border-b border-gray-200 hover:text-neutral capitalize">
            <Link to={"/categories/laptop"}>Laptop</Link>
          </li>
          <li className="hover:bg-primary border-b border-gray-200 hover:text-neutral capitalize">
            <Link to={"/categories/monitor"}>monitor</Link>
          </li>
          <li className="hover:bg-primary border-b border-gray-200 hover:text-neutral capitalize">
            <Link to={"/categories/phone"}>Phone</Link>
          </li>
          <li className="hover:bg-primary border-b border-gray-200 hover:text-neutral capitalize">
            <Link to={"/categories/headphone"}>Headphone</Link>
          </li>
          <li className="hover:bg-primary border-b border-gray-200 hover:text-neutral capitalize">
            <Link to={"/categories/speaker"}>speaker</Link>
          </li>
          <li className="hover:bg-primary border-b border-gray-200 hover:text-neutral capitalize">
            <Link to={"/categories/watch"}>Watch</Link>
          </li>
          <li className="hover:bg-primary border-b border-gray-200 hover:text-neutral capitalize">
            <Link to={"/categories/refrigerator"}>refrigerator</Link>
          </li>
          <li className="hover:bg-primary border-b border-gray-200 hover:text-neutral capitalize">
            <Link to={"/categories/AC"}>AC</Link>
          </li>
          <li className="hover:bg-primary border-b border-gray-200 hover:text-neutral capitalize">
            <a className="">More Category</a>
          </li>
        </ul>
      </Collapsible>
    </div>
  );
};

export default BottomCategories;
