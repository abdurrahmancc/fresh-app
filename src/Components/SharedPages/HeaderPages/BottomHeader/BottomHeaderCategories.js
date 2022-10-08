import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoFishOutline, IoMenuSharp } from "react-icons/io5";
import {
  GiButter,
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
  const [hovered, setHovered] = useState("");
  const { pathname } = useLocation();

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
        <input type="checkbox" onChange={() => {}} checked={isCategoriesOpen} id="touch-category" />
        <ul
          className={`category-subMenu-slide ${
            isCategoriesOpen ? "border-b" : ""
          } border-x max-w-[292.5px] lg:max-w-[250.5px] xl:max-w-[292.5px] bg-white rounded-b-lg absolute z-[100]`}
        >
          <li
            onMouseEnter={() => setHovered("grocery&frozen")}
            onMouseLeave={() => setHovered("")}
            className="transition duration-300 ease-in-out  border-b border-gray-200 hover:text-primary capitalize pl-8 w-full text-start"
          >
            <div className="dropdown  py-3 w-full hover:overflow-visible dropdown-right dropdown-hover">
              <label tabIndex="0" className="w-full ">
                <Link
                  to={"/categories/computer"}
                  className={"flex items-center justify-between pr-8"}
                >
                  <span className="flex items-center gap-3">
                    <GiFruitTree
                      className={`text-lg ${
                        hovered === "grocery&frozen"
                          ? "text-primary duration-300 ease-in-out transition"
                          : "text-[#B8B8BC]"
                      }`}
                    />
                    <span className={`font-semibold`}>Grocery & Frozen</span>
                  </span>
                  <IoIosArrowForward />
                </Link>
              </label>
              <ul
                tabIndex="0"
                id="bottom-dropdown-category"
                className="dropdown-content overflow-hidden text-[#333] side-dropdown menu shadow bg-base-100  w-52"
              >
                <li className="border-b duration-300 ease-in-out transition border-gray-200 hover:text-primary capitalize">
                  <a href="/" className="pl-8 hover:bg-white  font-semibold">
                    Item 1
                  </a>
                </li>
                <li className="border-gray-200 duration-300 ease-in-out transition hover:text-primary capitalize">
                  <a href="/" className="pl-8 hover:bg-white  font-semibold">
                    Item 2
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li
            onMouseEnter={() => setHovered("freshVegetable")}
            onMouseLeave={() => setHovered("")}
            className="transition duration-300 ease-in-out border-b border-gray-200 hover:text-primary capitalize pl-8 w-full text-start"
          >
            <Link
              to={"/categories/laptop"}
              className={"py-3  relative flex gap-3 items-center font-semibold"}
            >
              <GiTreeBranch
                className={`text-lg  ${
                  hovered === "freshVegetable"
                    ? "duration-300 ease-in-out transition text-primary"
                    : "text-[#B8B8BC]"
                }`}
              />{" "}
              Fresh Vegetable
            </Link>
          </li>
          <li
            onMouseEnter={() => setHovered("freshFruits")}
            onMouseLeave={() => setHovered("")}
            className="transition duration-300 ease-in-out  border-b border-gray-200 hover:text-primary capitalize pl-8 w-full text-start"
          >
            <Link
              to={"/categories/monitor"}
              className={"py-3 relative font-semibold flex items-center gap-3"}
            >
              <GiCherry
                className={`text-lg  ${
                  hovered === "freshFruits"
                    ? "duration-300 ease-in-out transition text-primary"
                    : "text-[#B8B8BC]"
                }`}
              />{" "}
              Fresh Fruits
            </Link>
          </li>
          <li
            onMouseEnter={() => setHovered("fruitJuices")}
            onMouseLeave={() => setHovered("")}
            className="transition duration-300 ease-in-out  border-b border-gray-200 hover:text-primary capitalize pl-8 w-full text-start"
          >
            <Link
              to={"/categories/phone"}
              className={"py-3 flex items-center gap-3  relative font-semibold"}
            >
              <FaGlassMartiniAlt
                className={`text-lg  ${
                  hovered === "fruitJuices"
                    ? "duration-300 ease-in-out transition text-primary"
                    : "text-[#B8B8BC]"
                }`}
              />{" "}
              Fruit Juices
            </Link>
          </li>
          <li
            onMouseEnter={() => setHovered("salads")}
            onMouseLeave={() => setHovered("")}
            className="transition duration-300 ease-in-out  border-b border-gray-200 hover:text-primary capitalize pl-8 w-full text-start"
          >
            <Link
              to={"/categories/headphone"}
              className={"py-3 flex items-center gap-3 relative font-semibold"}
            >
              <GiHotMeal
                className={`text-lg ${
                  hovered === "salads"
                    ? "duration-300 ease-in-out transition text-primary"
                    : "text-[#B8B8BC]"
                }`}
              />{" "}
              Salads
            </Link>
          </li>
          <li
            onMouseEnter={() => setHovered("freshMeat")}
            onMouseLeave={() => setHovered("")}
            className="transition duration-300 ease-in-out  border-b border-gray-200 hover:text-primary capitalize pl-8 w-full text-start"
          >
            <Link
              to={"/categories/speaker"}
              className={"py-3 flex justify-items-start gap-3  relative font-semibold"}
            >
              <GiChickenOven
                className={`text-lg ${
                  hovered === "freshMeat"
                    ? "duration-300 ease-in-out transition text-primary"
                    : "text-[#B8B8BC]"
                }`}
              />{" "}
              Fresh Meat
            </Link>
          </li>
          <li
            onMouseEnter={() => setHovered("butter&Egg")}
            onMouseLeave={() => setHovered("")}
            className="transition duration-300 ease-in-out  border-b border-gray-200 hover:text-primary capitalize pl-8 w-full text-start"
          >
            <Link
              to={"/categories/watch"}
              className={"py-3 flex items-center gap-3 relative font-semibold"}
            >
              <GiButter
                className={`text-lg  ${
                  hovered === "butter&Egg"
                    ? "duration-300 ease-in-out transition text-primary"
                    : "text-[#B8B8BC]"
                }`}
              />{" "}
              Butter & Egg
            </Link>
          </li>
          <li
            onMouseEnter={() => setHovered("milkCream")}
            onMouseLeave={() => setHovered("")}
            className="transition duration-300 ease-in-out  border-b border-gray-200 hover:text-primary capitalize pl-8 w-full text-start"
          >
            <Link
              to={"/categories/refrigerator"}
              className={"py-3 flex items-center gap-3 relative font-semibold"}
            >
              <FaBoxTissue
                className={`text-lg ${
                  hovered === "milkCream"
                    ? "duration-300 ease-in-out transition text-primary"
                    : "text-[#B8B8BC]"
                }`}
              />{" "}
              Milk Cream
            </Link>
          </li>
          <li
            onMouseEnter={() => setHovered("oil&Vinegars")}
            onMouseLeave={() => setHovered("")}
            className="transition duration-300 ease-in-out  border-b border-gray-200 hover:text-primary capitalize pl-8 w-full text-start"
          >
            <Link
              to={"/categories/refrigerator"}
              className={"py-3 flex items-center gap-3 relative font-semibold"}
            >
              <GiWineBottle
                className={`text-lg ${
                  hovered === "oil&Vinegars"
                    ? "duration-300 ease-in-out transition text-primary"
                    : "text-[#B8B8BC]"
                }`}
              />{" "}
              Oil & Vinegars
            </Link>
          </li>
          <li
            onMouseEnter={() => setHovered("bread&Bakery")}
            onMouseLeave={() => setHovered("")}
            className="transition duration-300 ease-in-out  border-b border-gray-200 hover:text-primary capitalize pl-8 w-full text-start"
          >
            <Link
              to={"/categories/AC"}
              className={"py-3 flex items-center gap-3 relative font-semibold"}
            >
              <GiSlicedBread
                className={`text-lg ${
                  hovered === "bread&Bakery"
                    ? "duration-300 ease-in-out transition text-primary"
                    : "text-[#B8B8BC]"
                }`}
              />{" "}
              Bread & Bakery
            </Link>
          </li>
          <li
            onMouseEnter={() => setHovered("snacksItem")}
            onMouseLeave={() => setHovered("")}
            className="transition duration-300 ease-in-out  border-b border-gray-200 hover:text-primary capitalize pl-8 w-full text-start"
          >
            <Link
              to={"/categories/AC"}
              className={"py-3 flex items-center gap-3 relative font-semibold"}
            >
              <FaSitemap
                className={`text-lg ${
                  hovered === "snacksItem"
                    ? "duration-300 ease-in-out transition text-primary"
                    : "text-[#B8B8BC]"
                }`}
              />{" "}
              Snacks Item
            </Link>
          </li>
          <li
            onMouseEnter={() => setHovered("fish")}
            onMouseLeave={() => setHovered("")}
            className="transition duration-300 ease-in-out  border-b border-gray-200 hover:text-primary capitalize pl-8 w-full text-start"
          >
            <Link
              to={"/categories/AC"}
              className={"py-3 flex items-center gap-3 relative font-semibold"}
            >
              <IoFishOutline
                className={`text-lg ${
                  hovered === "fish"
                    ? "duration-300 ease-in-out transition text-primary"
                    : "text-[#B8B8BC]"
                }`}
              />{" "}
              Fish
            </Link>
          </li>
          <li
            onMouseEnter={() => setHovered("moreCategory")}
            onMouseLeave={() => setHovered("")}
            className="transition duration-300 ease-in-out  rounded-b-lg border-gray-200 hover:text-primary capitalize pl-8 w-full text-start"
          >
            <a href="/" className={"py-3 flex items-center gap-3 relative font-semibold"}>
              <MdReadMore
                className={`text-lg ${
                  hovered === "moreCategory"
                    ? "duration-300 ease-in-out transition text-primary"
                    : "text-[#B8B8BC]"
                }`}
              />{" "}
              More Category
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BottomHeaderCategories;
