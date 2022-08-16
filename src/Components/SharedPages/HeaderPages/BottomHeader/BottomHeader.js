import React, { useState } from "react";
import { ImStarHalf } from "react-icons/im";
import { FaUserAlt } from "react-icons/fa";
import { MdDarkMode, MdLocationOn } from "react-icons/md";
import { BiHeart, BiNotepad } from "react-icons/bi";
import { Link, NavLink, useNavigate } from "react-router-dom";
import BottomCategories from "./BottomCategories";
import { AiFillSetting } from "react-icons/ai";
import { FiLogIn, FiLogOut } from "react-icons/fi";

const BottomHeader = () => {
  const [user, loading] = useState("");
  const [isUser] = useState("");
  const [categoryDown] = useState();
  const navigate = useNavigate();

  const handleSignOut = () => {};
  return (
    <div className="bg-accent">
      {/*----- Bottom Header start -----*/}
      <div className="container mx-auto">
        <div class="navbar px-0 max-h-[64px]">
          <div class="navbar-start">
            <div class="dropdown">
              <label tabindex="0" class="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabindex="0"
                class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li tabindex="0">
                  <a class="justify-between">
                    Parent
                    <svg
                      class="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                    </svg>
                  </a>
                  <ul class="p-2">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>Item 3</a>
                </li>
              </ul>
            </div>
            <div
              className={`max-w-[292.5px] lg:max-w-[250.5px] xl:max-w-[292.5px] w-screen bg-[#3d9657] h-[64px] hidden lg:block `}
            >
              <BottomCategories categoryDown={categoryDown}></BottomCategories>
            </div>
          </div>
          <div class="navbar-center hidden lg:flex">
            <ul class="flex justify-center items-center gap-5">
              <li className="">
                <NavLink
                  to={"/home"}
                  className={({ isActive }) =>
                    isActive
                      ? "border-b pb-2 text-lg text-success font-semibold  border-success px-0 rounded-none"
                      : "text-lg px-0 font-semibold"
                  }
                >
                  HOME
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/shop"}
                  className={({ isActive }) =>
                    isActive
                      ? "border-b pb-2 text-lg text-success font-semibold  border-success px-0 rounded-none"
                      : "text-lg px-0 font-semibold"
                  }
                >
                  SHOP
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/products"}
                  className={({ isActive }) =>
                    isActive
                      ? "border-b pb-2 text-lg text-success font-semibold  border-success px-0 rounded-none"
                      : "text-lg px-0 font-semibold"
                  }
                >
                  PRODUCTS
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/fresh"}
                  className={({ isActive }) =>
                    isActive
                      ? "border-b pb-2 text-lg text-success font-semibold  border-success px-0 rounded-none"
                      : "text-lg px-0 font-semibold"
                  }
                >
                  FRESH
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/pages"}
                  className={({ isActive }) =>
                    isActive
                      ? "border-b pb-2 text-lg text-success font-semibold  border-success px-0 rounded-none"
                      : "text-lg px-0 font-semibold"
                  }
                >
                  PAGES
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/mega-menu"}
                  className={({ isActive }) =>
                    isActive
                      ? "border-b pb-2 text-lg text-success font-semibold  border-success px-0 rounded-none"
                      : "text-lg px-0 font-semibold"
                  }
                >
                  MEGA MENU
                </NavLink>
              </li>
            </ul>
          </div>
          {/* navbar-end */}
          <div className="navbar-end flex items-center xl:gap-8 lg:gap-4 justify-end">
            <div onClick={() => navigate("/view-cart")} className=" cursor-pointer">
              <Link
                to={"/"}
                className="flex items-center font-semibold gap-2 pr-5 border-r border-[#000]"
              >
                <span className="text-2xl">
                  <ImStarHalf />
                </span>
                <span>Best Offer</span>
              </Link>
            </div>

            <div className="dropdown dropdown-hover dropdown-end">
              <label tabIndex="0" className="text m-1">
                <FaUserAlt className="text-2xl" />
              </label>
              <ul
                tabIndex="0"
                className="dropdown-content menu mt-[-12px] shadow-xl bg-base-100 rounded-box w-52"
              >
                <li className="hover:text-primary">
                  <Link to={"/user-dashboard/my-account"}>
                    <FaUserAlt className="text-sm " />
                    <span> My Account</span>
                  </Link>
                </li>
                <li className="hover:text-primary">
                  <a href="#">
                    <span className="text-sm ">
                      <MdLocationOn />
                    </span>
                    <span>Order Tracking</span>
                  </a>
                </li>
                <li className="hover:text-primary">
                  <a>
                    <span className="text-sm ">
                      <BiNotepad />
                    </span>{" "}
                    <span>My Voucher</span>
                  </a>
                </li>
                <li className="hover:text-primary">
                  <a>
                    <span className="text-sm  ">
                      <BiHeart />
                    </span>{" "}
                    <span>My Wishlist</span>
                  </a>
                </li>
                <li className="hover:text-primary">
                  <a>
                    <span className="text-sm  ">
                      <AiFillSetting />
                    </span>{" "}
                    <span>Setting</span>
                  </a>
                </li>
                {isUser && (
                  <li className="hover:text-primary">
                    <NavLink to={"/admin-dashboard"}>
                      <span className="text-sm  ">
                        <AiFillSetting />
                      </span>{" "}
                      <span>Dashboard</span>
                    </NavLink>
                  </li>
                )}

                <li className="hover:text-primary ">
                  <div className="flex justify-items-center">
                    <span className="text-sm  ">
                      <MdDarkMode />
                    </span>
                    <span>DarkMode</span>
                    {/* <Themes></Themes> */}fdf
                  </div>
                </li>
                <li className="hover:text-primary">
                  {user ? (
                    <span onClick={() => handleSignOut()}>
                      <span className="text-sm  ">
                        <FiLogOut />
                      </span>{" "}
                      <span>Sign out</span>
                    </span>
                  ) : (
                    <NavLink to={"/login"}>
                      <span className="text-sm  ">
                        <FiLogIn />
                      </span>{" "}
                      <span>Sign In</span>
                    </NavLink>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/*----- Bottom header end ----*/}
    </div>
  );
};

export default BottomHeader;
