import React, { useState } from "react";
import logo from "../../../../assets/logo/logo_white.png";
import { Link } from "react-router-dom";
import { BsHeadphones } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { MdAddShoppingCart } from "react-icons/md";
import Select from "react-select";

const MiddleHeader = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  return (
    <div className="bg-success">
      <div className="container mx-auto">
        <div className="hidden lg:block z-20 relative ">
          <div class="navbar  py-7">
            {/* <div className="container mx-auto"> */}
            <div class="navbar-start pr-7 flex items-center justify-between">
              <div>
                <Link to="/">
                  <img className="h-16 w-auto" src={logo} alt="logo" />
                </Link>
              </div>
              <div className="flex items-center gap-2">
                <div>
                  <span>
                    <BsHeadphones className="text-5xl text-neutral" />
                  </span>
                </div>
                <div className="flex flex-col text-neutral">
                  <span className="text-lg">33-434-5455</span>
                  <span className="text-xs">Free Call Support</span>
                </div>
              </div>
            </div>
            <div class="navbar-center  rounded bg-[white] w-screen max-w-[700px] hidden  lg:flex">
              <div className="w-full  border rounded border-primary">
                <form action="" className="flex justify-center w-full relative px-4 ">
                  <div class="inline-block  mt-1 ml-[-10px] max-w-[190px]  relative w-full">
                    <Select
                      id="select-component"
                      defaultValue={selectedOption}
                      onChange={setSelectedOption}
                      options={options}
                      placeholder={"Categories"}
                    />
                  </div>

                  <div className=" border-r  h-6 my-auto z-20 border-[#070707] "></div>
                  <label class="relative block w-full">
                    <span class="sr-only">Search</span>
                    <button
                      type="submit"
                      class="absolute  inset-y-0 right-0 rounded pr-1  flex items-center pl-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-full text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </button>
                    <input
                      class="placeholder:italic placeholder:text-slate-400 block bg-white w-full h-12   rounded-md py-2 pl-6 pr-9 shadow-sm focus:outline-none focus:border-0  focus:ring-0 sm:text-sm"
                      placeholder="Search for items..."
                      type="text"
                      name="search"
                    />
                  </label>
                </form>
              </div>
            </div>
            <div class="navbar-end ">
              <ul className="flex items-center xl:gap-8 lg:gap-4 justify-end">
                <li>
                  <Link to={"/"}>
                    <FiHeart className="text-2xl text-neutral" />
                  </Link>
                </li>
                <li>
                  <Link to={"/"}>
                    <MdAddShoppingCart className="text-2xl text-neutral" />
                  </Link>
                </li>
                <li>
                  <Link to={"/"}>
                    <FaUserAlt className="text-2xl text-neutral" />
                  </Link>
                </li>
              </ul>
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleHeader;
