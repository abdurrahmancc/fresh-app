import React, { useState } from "react";
import logo from "../../../../assets/logo/logo.png";
import { Link } from "react-router-dom";
import { BsArrowLeftRight, BsHeadphones } from "react-icons/bs";
import { FiHeart } from "react-icons/fi";
import { MdAddShoppingCart } from "react-icons/md";
import Select from "react-select";
import { middleCategorySelected } from "../../../SharedCss/SelectComponentCss";
import { BiSearchAlt } from "react-icons/bi";

const MiddleHeader = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  return (
    <div className=" hidden sm:block">
      <div className="container mx-auto">
        <div className="z-20 relative ">
          <div className="navbar  py-7">
            {/* <div className="container mx-auto"> */}
            <div className="navbar-start  lg:pr-8 pr-4 flex items-center justify-between">
              <Link to="/" className="max-h-[60px] pl-0">
                <img className="w-[10vw] lg:w-[100px]  max-w-[150px]" src={logo} alt="logo" />
              </Link>
              <div className="lg:flex items-center gap-2 hidden">
                <div>
                  <span>
                    <BsHeadphones className="text-5xl text-gray-600" />
                  </span>
                </div>
                <div className="flex flex-col text-black">
                  <span className="text-lg">33-434-5455</span>
                  <span className="text-xs">Free Call Support</span>
                </div>
              </div>
            </div>
            {/*----- category search from start ------*/}
            <div className="navbar-center border h-[60px] rounded bg-[white] w-[50vw] max-w-[700px] ">
              <div className="w-full  ">
                <form action="" className="flex justify-center w-full  relative pl-4 ">
                  <div className="inline-block  mt-1 ml-[-10px] max-w-[100px] md:max-w-[190px]  relative w-full">
                    <Select
                      id="select-component"
                      styles={middleCategorySelected}
                      defaultValue={selectedOption}
                      onChange={setSelectedOption}
                      options={options}
                      placeholder={"Categories"}
                    />
                  </div>

                  <div className=" my-auto z-20 border-[#070707] "></div>
                  <label className="relative block w-full">
                    <span className="sr-only">Search</span>
                    <button
                      type="submit"
                      className="absolute btn bg-[#76A713] duration-500 hover:bg-[#6a9d04] inset-y-0 right-[6px] rounded transition-all  flex items-center px-3"
                    >
                      <BiSearchAlt className="text-2xl text-neutral" />
                    </button>
                    <input
                      className="placeholder:italic placeholder:text-slate-400 block bg-white w-full h-12  rounded-md py-2 pl-6 pr-9 focus:outline-none focus:border-0  focus:ring-0 sm:text-sm"
                      placeholder="Search for items..."
                      type="text"
                      name="search"
                    />
                  </label>
                </form>
              </div>
            </div>
            {/*----- category search from end ------*/}
            <div className="navbar-end ">
              <ul className="flex items-center lg:pl-0  pl-4 xl:gap-8 md:gap-4 gap-2 justify-end ">
                <li>
                  <div className="indicator">
                    <Link
                      to={"/shop-compare"}
                      className="lg:p-3 p-2 rounded-full bg-primary text-white"
                    >
                      <BsArrowLeftRight className="text-lg" />
                    </Link>
                    <div className="flex justify-center items-center p-1 lg:w-5 lg:h-5 h-4 w-4 rounded-full bg-[#F10505] text-white indicator-item top-2 right-1 text-[0.6875rem]">
                      <span>44</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="indicator">
                    <Link
                      to={"/wishlist"}
                      className="lg:p-3 p-2 rounded-full bg-primary text-white"
                    >
                      <FiHeart className="text-lg" />
                    </Link>
                    <div className="flex justify-center items-center p-1 lg:w-5 lg:h-5 h-4 w-4 rounded-full bg-[#F10505] text-white  indicator-item top-2 right-1 text-[0.6875rem]">
                      <span>44</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="indicator">
                    <Link
                      to={"/shopping-cart"}
                      className="lg:p-3 p-2  rounded-full bg-primary text-white"
                    >
                      <MdAddShoppingCart className="text-lg " />
                    </Link>
                    <div className="flex justify-center items-center p-1 lg:w-5 lg:h-5 h-4 w-4 rounded-full bg-[#F10505] text-white  indicator-item top-2 right-1 text-[0.6875rem]">
                      <span>44</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleHeader;
