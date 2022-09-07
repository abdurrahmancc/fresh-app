import React, { useState } from "react";
import { ImStarHalf } from "react-icons/im";
import { FaUserAlt } from "react-icons/fa";
import { MdDarkMode, MdLocationOn } from "react-icons/md";
import { BiHeart, BiNotepad } from "react-icons/bi";
import { Link, NavLink, useNavigate } from "react-router-dom";
import BottomCategories from "./BottomCategories";
import { AiFillSetting, AiOutlineCaretDown } from "react-icons/ai";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import { VscSettings, VscThreeBars } from "react-icons/vsc";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../Hooks/useAuthState";
import { signOut } from "firebase/auth";
import LoginModal from "../../Login/LoginModal";
import Loading from "../../Loading";
import "./BottomHeader.css";
import { accessTokenName, removeCookie } from "../../../Hooks/useCookies";
import axiosPrivet from "../../../Hooks/axiosPrivet";

const BottomHeader = () => {
  const [user, loading] = useAuthState(auth);
  const [isLogin, setIsLogin] = useState(false);
  const [isUser] = useState(true);
  const [categoryDown] = useState();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    setIsLogin(!isLogin);
    signOut(auth);
    removeCookie(accessTokenName);
    await axiosPrivet.delete("/login");
  };

  console.log(isLogin);

  if (loading) {
    return <Loading />;
  }
  const navItems = (
    <>
      <li className="py-2">
        <NavLink
          to={"/home"}
          className={({ isActive }) =>
            isActive
              ? " border-b-[2px] py-[5px] border-white text-lg hover:bg-primary text-white focus:bg-primary  font-semibold px-0 border-animate rounded-none activeNavbar"
              : "text-lg px-0 py-[5px] text-white font-semibold hover:bg-primary border-animate focus:bg-primary"
          }
        >
          HOME
        </NavLink>
      </li>

      <li className="py-2" tabIndex="0">
        <NavLink
          to={"/shop"}
          className={({ isActive }) =>
            isActive
              ? " text-lg border-b-[2px] py-[5px] border-white hover:bg-primary text-white focus:bg-primary gap-1 font-semibold px-0 border-animate rounded-none activeNavbar"
              : "text-lg text-white py-[5px] gap-1 px-0  font-semibold hover:bg-primary border-animate focus:bg-primary"
          }
        >
          SHOP
          <AiOutlineCaretDown className="text-sm" />
        </NavLink>
        <ul className="menu bg-base-100 z-50 w-44 shadow">
          <li className="hover:text-white hover:bg-primary">
            <NavLink
              to={"/shop"}
              className={({ isActive }) =>
                isActive
                  ? " text-lg font-semibold  border-primary px-0 rounded-none"
                  : "text-lg px-0 font-semibold"
              }
            >
              <span className="px-5">Shop default</span>
            </NavLink>
          </li>
          <li className="hover:text-white hover:bg-primary">
            <NavLink
              to={"/shop/fullwidth"}
              className={({ isActive }) =>
                isActive
                  ? "  text-lg font-semibold px-0 rounded-none"
                  : "text-lg px-0 font-semibold"
              }
            >
              <span className="px-5">Shop wide</span>
            </NavLink>
          </li>
          <li className="hover:text-white hover:bg-primary">
            <NavLink
              to={"/shop/2"}
              className={({ isActive }) =>
                isActive
                  ? "pb-2 text-lg font-semibold px-0 rounded-none"
                  : "text-lg px-0 font-semibold"
              }
            >
              <span className="px-5">Product list</span>
            </NavLink>
          </li>
        </ul>
      </li>

      <li className="py-2" tabIndex="0">
        <NavLink
          to={"/about"}
          className={({ isActive }) =>
            isActive
              ? " text-lg border-b-[2px] py-[5px] border-white hover:bg-primary border-animate text-white focus:bg-primary gap-1 font-semibold px-0 rounded-none activeNavbar"
              : "text-lg text-white py-[5px] gap-1 px-0  font-semibold hover:bg-primary border-animate focus:bg-primary"
          }
        >
          PAGES
          <AiOutlineCaretDown className="text-sm" />
        </NavLink>
        <ul className="menu bg-base-100 z-50 w-44 shadow">
          <li className="hover:text-white hover:bg-primary">
            <NavLink
              to={"/about"}
              className={({ isActive }) =>
                isActive
                  ? " text-lg font-semibold  border-primary px-0 rounded-none"
                  : "text-lg px-0 font-semibold"
              }
            >
              <span className="px-5"> About us</span>
            </NavLink>
          </li>
          <li className="hover:text-white hover:bg-primary">
            <NavLink
              to={"/contact"}
              className={({ isActive }) =>
                isActive
                  ? "  text-lg font-semibold px-0 rounded-none"
                  : "text-lg px-0 font-semibold"
              }
            >
              <span className="px-5">Contact</span>
            </NavLink>
          </li>
          <li className="hover:text-white hover:bg-primary">
            <NavLink
              to={"/blogs"}
              className={({ isActive }) =>
                isActive
                  ? "pb-2 text-lg font-semibold px-0 rounded-none"
                  : "text-lg px-0 font-semibold"
              }
            >
              <span className="px-5">Blogs</span>
            </NavLink>
          </li>
          <li className="hover:text-white hover:bg-primary">
            <NavLink
              to={"/FAQ"}
              className={({ isActive }) =>
                isActive
                  ? "pb-2 text-lg font-semibold px-0 rounded-none"
                  : "text-lg px-0 font-semibold"
              }
            >
              <span className="px-5">FAQ</span>
            </NavLink>
          </li>
        </ul>
      </li>
      <li className="py-2">
        <NavLink
          to={"/products"}
          className={({ isActive }) =>
            isActive
              ? " text-lg border-b-[2px] py-[5px] border-white hover:bg-primary text-white focus:bg-primary gap-1 font-semibold px-0 border-animate rounded-none activeNavbar"
              : "text-lg text-white py-[5px] gap-1 px-0 font-semibold hover:bg-primary border-animate focus:bg-primary"
          }
        >
          PRODUCTS
        </NavLink>
      </li>

      <li className="py-2">
        <NavLink
          to={"/fresh"}
          className={({ isActive }) =>
            isActive
              ? "text-lg border-b-[2px] py-[5px] border-white hover:bg-primary text-white focus:bg-primary gap-1 font-semibold px-0 border-animate rounded-none activeNavbar"
              : "text-lg text-white gap-1 px-0 font-semibold hover:bg-primary border-animate py-[5px] focus:bg-primary"
          }
        >
          FRESH
        </NavLink>
      </li>
      <li className="py-2">
        <NavLink
          to={"/mega-menu"}
          className={({ isActive }) =>
            isActive
              ? " text-lg border-b-[2px] py-[5px] border-white hover:bg-primary text-white focus:bg-primary gap-1 font-semibold px-0 border-animate rounded-none activeNavbar"
              : "text-lg text-white gap-1 px-0 font-semibold hover:bg-primary border-animate py-[5px] focus:bg-primary"
          }
        >
          MEGA MENU
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-primary">
      {/*----- Bottom Header start -----*/}
      <div className="container mx-auto">
        <div className="navbar px-0 max-h-[64px]">
          <div className="navbar-start">
            <div className="dropdown lg:pl-0 pl-2">
              <label tabIndex="0" className=" lg:hidden">
                <VscThreeBars className="text-2xl" />
              </label>
              <ul
                tabIndex="0"
                className="menu menu-compact dropdown-content mt-5 shadow-xl bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li tabIndex="0">
                  <a className="justify-between">
                    Parent
                    <svg
                      className="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                    </svg>
                  </a>
                  <ul className="p-2">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </li>
                {navItems}
              </ul>
            </div>
            <div
              className={`max-w-[292.5px] lg:max-w-[250.5px] xl:max-w-[292.5px] w-screen bg-[#5C820F] h-[64px] hidden lg:block `}
            >
              <BottomCategories categoryDown={categoryDown}></BottomCategories>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal flex justify-center items-center gap-5 ">
              {navItems}
            </ul>
          </div>
          {/* navbar-end */}
          <div className="navbar-end flex items-center xl:gap-8 lg:gap-4 justify-end">
            <div onClick={() => navigate("/view-cart")} className="hidden lg:block cursor-pointer">
              <Link
                to={"/"}
                className="flex items-center font-semibold gap-2 pr-5 border-r border-gray-300"
              >
                <span className="text-2xl text-white">
                  <ImStarHalf />
                </span>
                <span className="text-white">Best Offer</span>
              </Link>
            </div>

            <div className="dropdown dropdown-hover dropdown-end lg:pr-0 pr-2">
              <label tabIndex="0" className="text m-1">
                <FaUserAlt className="text-2xl text-white" />
              </label>
              <ul
                tabIndex="0"
                className="dropdown-content menu mt-[-6px] shadow-xl bg-base-100 rounded-box w-52"
              >
                <li className="hover:text-white hover:bg-primary">
                  <Link
                    to={"/user-dashboard/my-account"}
                    className="flex items-center active:text-white gap-3"
                  >
                    <FaUserAlt className="text-lg " />
                    <span> My Account</span>
                  </Link>
                </li>
                <li className="hover:text-white hover:bg-primary">
                  <div className="flex items-center active:text-white gap-3">
                    <MdLocationOn className="text-lg" />
                    <span>Order Tracking</span>
                  </div>
                </li>
                <li className="hover:text-white hover:bg-primary">
                  <div className="flex items-center active:text-white  gap-3">
                    <BiNotepad className="text-lg" />

                    <span>My Voucher</span>
                  </div>
                </li>
                <li className="hover:text-white hover:bg-primary">
                  <div className="flex items-center active:text-white gap-3">
                    <BiHeart className="text-lg" />
                    <span>My Wishlist</span>
                  </div>
                </li>
                <li className="hover:text-white hover:bg-primary">
                  <div className="flex items-center active:text-white gap-3">
                    <AiFillSetting className="text-lg" />

                    <span>Setting</span>
                  </div>
                </li>
                {isUser && (
                  <li className="hover:text-white hover:bg-primary">
                    <NavLink
                      to={"/admin-dashboard"}
                      className="flex items-center gap-3 active:text-white"
                    >
                      <VscSettings className="rotate-90 text-lg font-bold " />
                      <span>Dashboard</span>
                    </NavLink>
                  </li>
                )}

                <li className="hover:text-white hover:bg-primary">
                  <div className="flex justify-items-center active:text-white gap-3">
                    <MdDarkMode className="text-lg" />
                    <span>DarkMode</span>
                    {/* <Themes></Themes> */}
                  </div>
                </li>
                <li className="hover:text-white hover:bg-primary">
                  {user ? (
                    <div
                      className="flex active:text-white items-center gap-3"
                      onClick={() => handleSignOut()}
                    >
                      <FiLogOut className="text-lg" />
                      <span>Sign out</span>
                    </div>
                  ) : (
                    <label htmlFor="loginModal" className="">
                      <div
                        onClick={() => setIsLogin(true)}
                        className="flex active:text-white items-center gap-3"
                      >
                        <FiLogIn className="text-lg" />
                        <span>Sign In</span>
                      </div>
                    </label>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/*----- Bottom header end ----*/}
      {/* login Modal start*/}
      {isLogin && <LoginModal />}
      {/* login Modal end*/}
    </div>
  );
};

export default BottomHeader;
