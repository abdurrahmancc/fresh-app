import React from "react";
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
        open={pathname === "/home" || (pathname === "/" && true)}
        trigger={["SHOP BY CATEGORY", <BsChevronDown />]}
      >
        <ul
          className={`menu bg-base-100 z-50 w-full shadow-lg border-primary mb-1 relative border-[2px] top-0 ease-in-out duration-500 border-t-0 rounded-b-xl font-bold`}
        >
          <li className="hover:bg-primary border-b border-gray-200 hover:text-neutral capitalize">
            <Link to={"/categories/computer"}>Grocery & Frozen</Link>
          </li>
          <li className="hover:bg-primary border-b border-gray-200 hover:text-neutral capitalize">
            <Link to={"/categories/laptop"}>Fresh Vegetable</Link>
          </li>
          <li className="hover:bg-primary border-b border-gray-200 hover:text-neutral capitalize">
            <Link to={"/categories/monitor"}>Fresh Fruits</Link>
          </li>
          <li className="hover:bg-primary border-b border-gray-200 hover:text-neutral capitalize">
            <Link to={"/categories/phone"}>Fruit Juices</Link>
          </li>
          <li className="hover:bg-primary border-b border-gray-200 hover:text-neutral capitalize">
            <Link to={"/categories/headphone"}>Salads</Link>
          </li>
          <li className="hover:bg-primary border-b border-gray-200 hover:text-neutral capitalize">
            <Link to={"/categories/speaker"}>Fresh Meat</Link>
          </li>
          <li className="hover:bg-primary border-b border-gray-200 hover:text-neutral capitalize">
            <Link to={"/categories/watch"}>Butter & Egg</Link>
          </li>
          <li className="hover:bg-primary border-b border-gray-200 hover:text-neutral capitalize">
            <Link to={"/categories/refrigerator"}>Milk Cream</Link>
          </li>
          <li className="hover:bg-primary border-b border-gray-200 hover:text-neutral capitalize">
            <Link to={"/categories/refrigerator"}>Oil & Vinegars</Link>
          </li>
          <li className="hover:bg-primary border-b border-gray-200 hover:text-neutral capitalize">
            <Link to={"/categories/AC"}>Bread & Bakery</Link>
          </li>
          <li className="hover:bg-primary border-b border-gray-200 hover:text-neutral capitalize">
            <Link to={"/categories/AC"}>Snacks Item</Link>
          </li>
          <li className="hover:bg-primary border-b border-gray-200 hover:text-neutral capitalize">
            <Link to={"/categories/AC"}>Meat</Link>
          </li>
          <li className="hover:bg-primary border-b border-gray-200 hover:text-neutral capitalize">
            <a>More Category</a>
          </li>
        </ul>
      </Collapsible>
    </div>
  );
};

export default BottomCategories;
