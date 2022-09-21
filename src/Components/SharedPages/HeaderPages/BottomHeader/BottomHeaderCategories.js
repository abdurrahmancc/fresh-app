import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import { IoFishOutline, IoMenuSharp } from "react-icons/io5";
import {
  GiButter,
  GiCardboardBox,
  GiCherry,
  GiChickenOven,
  GiFruitTree,
  GiHotMeal,
  GiSlicedBread,
  GiTreeBranch,
  GiWineBottle,
} from "react-icons/gi";
import { Link, useLocation } from "react-router-dom";
import "./BottomHeaderCategories.css";
import { FaBoxTissue, FaGlassMartiniAlt, FaSitemap } from "react-icons/fa";
import { MdReadMore } from "react-icons/md";

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

  return (
    <div>
      <div
        id="header-categories-dropdown"
        className="header-categories-test max-w-[292.5px] lg:max-w-[250.5px] xl:max-w-[292.5px] w-screen bg-[#689311] h-[64px] hidden lg:block"
      >
        <div
          onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
          className="px-5 py-[1.13rem] cursor-pointer flex justify-between items-center"
        >
          <span className="text-lg font-semibold text-white">SHOP BY CATEGORY</span>
          <IoMenuSharp className="text-white text-lg font-semibold" />
        </div>
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
              <label tabIndex="0" className="w-full ">
                <Link
                  to={"/categories/computer"}
                  className={"flex items-center justify-between pr-8"}
                >
                  <span className="flex items-center gap-3">
                    <GiFruitTree className="text-lg text-[#B8B8BC]" />
                    <span className={`font-semibold`}>Grocery & Frozen</span>
                  </span>
                  <IoIosArrowForward />
                </Link>
              </label>
              <ul
                tabIndex="0"
                className="dropdown-content overflow-hidden text-[#333] side-dropdown menu shadow bg-base-100  w-52"
              >
                <li className="hover:bg-primary border-b border-gray-200 hover:text-neutral capitalize">
                  <a href="/" className="pl-8 font-semibold">
                    Item 1
                  </a>
                </li>
                <li className="hover:bg-primary border-gray-200 hover:text-neutral capitalize">
                  <a href="/" className="pl-8 font-semibold">
                    Item 2
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="hover:bg-primary transition duration-500 ease-in-out border-b border-gray-200 hover:text-neutral capitalize pl-8 w-full text-start">
            <Link
              to={"/categories/laptop"}
              className={"py-3  relative flex gap-3 items-center font-semibold"}
            >
              <GiTreeBranch className="text-lg text-[#B8B8BC]" /> Fresh Vegetable
            </Link>
          </li>
          <li className="hover:bg-primary transition duration-500 ease-in-out  border-b border-gray-200 hover:text-neutral capitalize pl-8 w-full text-start">
            <Link
              to={"/categories/monitor"}
              className={"py-3 relative font-semibold flex items-center gap-3"}
            >
              <GiCherry className="text-lg text-[#B8B8BC]" /> Fresh Fruits
            </Link>
          </li>
          <li className="hover:bg-primary transition duration-500 ease-in-out  border-b border-gray-200 hover:text-neutral capitalize pl-8 w-full text-start">
            <Link
              to={"/categories/phone"}
              className={"py-3 flex items-center gap-3  relative font-semibold"}
            >
              <FaGlassMartiniAlt className="text-lg text-[#B8B8BC]" /> Fruit Juices
            </Link>
          </li>
          <li className="hover:bg-primary transition duration-500 ease-in-out  border-b border-gray-200 hover:text-neutral capitalize pl-8 w-full text-start">
            <Link
              to={"/categories/headphone"}
              className={"py-3 flex items-center gap-3 relative font-semibold"}
            >
              <GiHotMeal className="text-lg text-[#B8B8BC]" /> Salads
            </Link>
          </li>
          <li className="hover:bg-primary transition duration-500 ease-in-out  border-b border-gray-200 hover:text-neutral capitalize pl-8 w-full text-start">
            <Link
              to={"/categories/speaker"}
              className={"py-3 flex justify-items-start gap-3  relative font-semibold"}
            >
              <GiChickenOven className="text-lg text-[#B8B8BC]" /> Fresh Meat
            </Link>
          </li>
          <li className="hover:bg-primary transition duration-500 ease-in-out  border-b border-gray-200 hover:text-neutral capitalize pl-8 w-full text-start">
            <Link
              to={"/categories/watch"}
              className={"py-3 flex items-center gap-3 relative font-semibold"}
            >
              <GiButter className="text-lg text-[#B8B8BC]" /> Butter & Egg
            </Link>
          </li>
          <li className="hover:bg-primary transition duration-500 ease-in-out  border-b border-gray-200 hover:text-neutral capitalize pl-8 w-full text-start">
            <Link
              to={"/categories/refrigerator"}
              className={"py-3 flex items-center gap-3 relative font-semibold"}
            >
              <FaBoxTissue className="text-lg text-[#B8B8BC]" /> Milk Cream
            </Link>
          </li>
          <li className="hover:bg-primary transition duration-500 ease-in-out  border-b border-gray-200 hover:text-neutral capitalize pl-8 w-full text-start">
            <Link
              to={"/categories/refrigerator"}
              className={"py-3 flex items-center gap-3 relative font-semibold"}
            >
              <GiWineBottle className="text-lg text-[#B8B8BC]" /> Oil & Vinegars
            </Link>
          </li>
          <li className="hover:bg-primary transition duration-500 ease-in-out  border-b border-gray-200 hover:text-neutral capitalize pl-8 w-full text-start">
            <Link
              to={"/categories/AC"}
              className={"py-3 flex items-center gap-3 relative font-semibold"}
            >
              <GiSlicedBread className="text-lg text-[#B8B8BC]" /> Bread & Bakery
            </Link>
          </li>
          <li className="hover:bg-primary transition duration-500 ease-in-out  border-b border-gray-200 hover:text-neutral capitalize pl-8 w-full text-start">
            <Link
              to={"/categories/AC"}
              className={"py-3 flex items-center gap-3 relative font-semibold"}
            >
              <FaSitemap className="text-lg text-[#B8B8BC]" /> Snacks Item
            </Link>
          </li>
          <li className="hover:bg-primary transition duration-500 ease-in-out  border-b border-gray-200 hover:text-neutral capitalize pl-8 w-full text-start">
            <Link
              to={"/categories/AC"}
              className={"py-3 flex items-center gap-3 relative font-semibold"}
            >
              <IoFishOutline className="text-lg text-[#B8B8BC]" /> Fish
            </Link>
          </li>
          <li className="hover:bg-primary transition duration-500 ease-in-out  rounded-b-lg border-gray-200 hover:text-neutral capitalize pl-8 w-full text-start">
            <a href="/" className={"py-3 flex items-center gap-3 relative font-semibold"}>
              <MdReadMore className="text-lg text-[#B8B8BC]" /> More Category
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BottomHeaderCategories;
