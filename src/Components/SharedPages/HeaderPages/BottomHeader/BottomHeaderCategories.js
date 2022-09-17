import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import { IoMenuSharp } from "react-icons/io5";
import { TbEqual } from "react-icons/tb";
import { Link, useLocation } from "react-router-dom";
import "./BottomHeaderCategories.css";

const BottomHeaderCategories = () => {
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  const { pathname } = useLocation();

  const isNoHoverHandler = () => {
    setHovered(false);
  };

  const isHoverHandler = () => {
    setHovered(true);
  };

  useEffect(() => {
    if (pathname === "/home" || pathname === "/") {
      setIsCategoriesOpen(true);
    } else {
      setIsCategoriesOpen(false);
    }
  }, [pathname]);

  console.log(hovered);
  return (
    <div>
      <div
        id="header-categories-dropdown"
        className="header-categories-test max-w-[292.5px] lg:max-w-[250.5px] xl:max-w-[292.5px] w-screen bg-[#689311] h-[64px] hidden lg:block"
      >
        {/* <label htmlFor="touch-category"> */}
        <div
          onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
          className="px-5 py-[1.13rem] cursor-pointer flex justify-between items-center"
        >
          <span className="text-lg font-semibold text-white">SHOP BY CATEGORY</span>
          <IoMenuSharp className="text-white text-lg font-semibold" />
        </div>
        {/* </label> */}
        <input type="checkbox" checked={isCategoriesOpen} id="touch-category" />
        <ul
          className={`category-subMenu-slide ${
            isCategoriesOpen && "border-b"
          } border-x max-w-[292.5px] lg:max-w-[250.5px] xl:max-w-[292.5px] bg-white rounded-b-lg absolute z-[100]`}
        >
          <li
            onMouseEnter={isHoverHandler}
            onMouseLeave={isNoHoverHandler}
            className="hover:bg-primary transition duration-500 ease-in-out  border-b border-gray-200 hover:text-neutral capitalize pl-8 w-full text-start"
          >
            <div className="dropdown  py-3 w-full hover:overflow-visible dropdown-right dropdown-hover">
              <label tabindex="0" className="w-full ">
                <Link
                  to={"/categories/computer"}
                  className={"flex items-center justify-between pr-8"}
                >
                  <span className={`font-[500]`}>Grocery & Frozen</span> <IoIosArrowForward />
                </Link>
              </label>
              <ul
                tabindex="0"
                className="dropdown-content overflow-hidden text-[#333] side-dropdown menu shadow bg-base-100  w-52"
              >
                <li className="hover:bg-primary border-b border-gray-200 hover:text-neutral capitalize">
                  <a className="pl-8 font-[500]">Item 1</a>
                </li>
                <li className="hover:bg-primary border-gray-200 hover:text-neutral capitalize">
                  <a className="pl-8 font-[500]">Item 2</a>
                </li>
              </ul>
            </div>
          </li>
          <li className="hover:bg-primary transition duration-500 ease-in-out border-b border-gray-200 hover:text-neutral capitalize pl-8 w-full text-start">
            <Link to={"/categories/laptop"} className={"py-3  relative block font-[500]"}>
              Fresh Vegetable
            </Link>
          </li>
          <li className="hover:bg-primary transition duration-500 ease-in-out  border-b border-gray-200 hover:text-neutral capitalize pl-8 w-full text-start">
            <Link to={"/categories/monitor"} className={"py-3 block  relative font-[500]"}>
              Fresh Fruits
            </Link>
          </li>
          <li className="hover:bg-primary transition duration-500 ease-in-out  border-b border-gray-200 hover:text-neutral capitalize pl-8 w-full text-start">
            <Link to={"/categories/phone"} className={"py-3 block  relative font-[500]"}>
              Fruit Juices
            </Link>
          </li>
          <li className="hover:bg-primary transition duration-500 ease-in-out  border-b border-gray-200 hover:text-neutral capitalize pl-8 w-full text-start">
            <Link to={"/categories/headphone"} className={"py-3 block  relative font-[500]"}>
              Salads
            </Link>
          </li>
          <li className="hover:bg-primary transition duration-500 ease-in-out  border-b border-gray-200 hover:text-neutral capitalize pl-8 w-full text-start">
            <Link to={"/categories/speaker"} className={"py-3 block  relative font-[500]"}>
              Fresh Meat
            </Link>
          </li>
          <li className="hover:bg-primary transition duration-500 ease-in-out  border-b border-gray-200 hover:text-neutral capitalize pl-8 w-full text-start">
            <Link to={"/categories/watch"} className={"py-3 block  relative font-[500]"}>
              Butter & Egg
            </Link>
          </li>
          <li className="hover:bg-primary transition duration-500 ease-in-out  border-b border-gray-200 hover:text-neutral capitalize pl-8 w-full text-start">
            <Link to={"/categories/refrigerator"} className={"py-3 block  relative font-[500]"}>
              Milk Cream
            </Link>
          </li>
          <li className="hover:bg-primary transition duration-500 ease-in-out  border-b border-gray-200 hover:text-neutral capitalize pl-8 w-full text-start">
            <Link to={"/categories/refrigerator"} className={"py-3 block  relative font-[500]"}>
              Oil & Vinegars
            </Link>
          </li>
          <li className="hover:bg-primary transition duration-500 ease-in-out  border-b border-gray-200 hover:text-neutral capitalize pl-8 w-full text-start">
            <Link to={"/categories/AC"} className={"py-3 block  relative font-[500]"}>
              Bread & Bakery
            </Link>
          </li>
          <li className="hover:bg-primary transition duration-500 ease-in-out  border-b border-gray-200 hover:text-neutral capitalize pl-8 w-full text-start">
            <Link to={"/categories/AC"} className={"py-3 block  relative font-[500]"}>
              Snacks Item
            </Link>
          </li>
          <li className="hover:bg-primary transition duration-500 ease-in-out  border-b border-gray-200 hover:text-neutral capitalize pl-8 w-full text-start">
            <Link to={"/categories/AC"} className={"py-3 block  relative font-[500]"}>
              Meat
            </Link>
          </li>
          <li className="hover:bg-primary transition duration-500 ease-in-out  rounded-b-lg border-gray-200 hover:text-neutral capitalize pl-8 w-full text-start">
            <a className={"py-3 block  relative font-[500]"}>More Category</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BottomHeaderCategories;
