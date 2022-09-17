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
import { accessToken, removeCookie } from "../../../Hooks/useCookies";
import logo from "../../../../assets/logo/logo_white.png";
import BottomHeaderCategories from "./BottomHeaderCategories";
import NavSideBar from "./NavSideBar";

const BottomHeader = () => {
  const [user, loading] = useAuthState(auth);
  const [isLogin, setIsLogin] = useState(false);
  const [isUser] = useState(true);
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();

  const handleSignOut = async () => {
    setIsLogin(!isLogin);
    signOut(auth);
    removeCookie(accessToken);
  };

  if (loading) {
    return <Loading />;
  }
  const navItems = (
    <>
      <li className="py-2" tabIndex="0">
        <NavLink
          to={"/home"}
          className={({ isActive }) =>
            isActive
              ? " text-lg border-b-[2px] py-[5px] border-white hover:bg-primary lg:text-white focus:bg-primary gap-1 font-bold px-0 rounded-none activeNavbar"
              : "text-[16px] lg:text-white py-[5px] gap-1 px-0  font-bold hover:bg-primary border-animate focus:bg-primary"
          }
        >
          Home
          <AiOutlineCaretDown className="text-sm" />
        </NavLink>
        <ul className="menu py-5 rounded-lg bg-base-100 overflow-hidden z-50 w-[270px]  shadow-xl">
          <li>
            <Link
              to={"/home"}
              className={
                "sub-menu-animate py-[10px] relative text-[15px] bg-white px-0 font-semibold hover:text-primary"
              }
            >
              <span className="px-8 capitalize">Home 1</span>
            </Link>
          </li>
          <li>
            <Link
              to={"/home2"}
              className={
                "sub-menu-animate relative py-[10px] text-[15px] bg-white px-0 font-semibold  hover:text-primary"
              }
            >
              <span className="px-8 capitalize">Home 2</span>
            </Link>
          </li>
        </ul>
      </li>
      <li className="py-2" tabIndex="0">
        <NavLink
          to={"/shop"}
          className={({ isActive }) =>
            isActive
              ? " text-[16px] border-b-[2px] py-[5px] border-white hover:bg-primary lg:text-white focus:bg-primary gap-1 font-bold px-0 rounded-none activeNavbar"
              : "text-[16px] lg:text-white py-[5px] gap-1 px-0  font-bold hover:bg-primary border-animate focus:bg-primary"
          }
        >
          Shop
          <AiOutlineCaretDown className="text-sm" />
        </NavLink>
        <ul className="menu py-5 rounded-lg bg-base-100 overflow-hidden z-50 w-[270px] shadow-xl">
          <li>
            <Link
              to={"/shop"}
              className={
                "sub-menu-animate text-[15px] py-[10px] relative bg-white px-0 font-semibold hover:text-primary"
              }
            >
              <span className="px-8">Shop default</span>
            </Link>
          </li>
          <li>
            <Link
              to={"/shop/fullwidth"}
              className={
                "sub-menu-animate py-[10px] text-[15px] relative bg-white px-0 font-semibold hover:text-primary"
              }
            >
              <span className="px-8">Shop wide</span>
            </Link>
          </li>
          <li>
            <Link
              to={"/shop/2"}
              className={
                "sub-menu-animate py-[10px] text-[15px] relative bg-white px-0 font-semibold hover:text-primary"
              }
            >
              <span className="px-8">Product list</span>
            </Link>
          </li>
        </ul>
      </li>

      <li className="py-2" tabIndex="0">
        <NavLink
          to={"/about"}
          className={({ isActive }) =>
            isActive
              ? "text-[16px] border-b-[2px] py-[5px] border-white hover:bg-primary lg:text-white focus:bg-primary gap-1 font-bold px-0 rounded-none activeNavbar"
              : "text-[16px] lg:text-white py-[5px] gap-1 px-0  font-bold hover:bg-primary border-animate focus:bg-primary"
          }
        >
          Pages
          <AiOutlineCaretDown className="text-sm" />
        </NavLink>
        <ul className="menu py-5 rounded-lg bg-base-100 overflow-hidden z-50 w-[270px] shadow-xl">
          <li>
            <Link
              to={"/about"}
              className={
                "sub-menu-animate py-[10px] text-[15px] relative bg-white px-0 font-semibold hover:text-primary"
              }
            >
              <span className="px-8"> About us</span>
            </Link>
          </li>
          <li>
            <Link
              to={"/contact"}
              className={
                "sub-menu-animate py-[10px] text-[15px] relative bg-white px-0 font-semibold hover:text-primary"
              }
            >
              <span className="px-8">Contact</span>
            </Link>
          </li>
          <li>
            <Link
              to={"/blogs"}
              className={
                "sub-menu-animate py-[10px] text-[15px] relative bg-white px-0 font-semibold hover:text-primary"
              }
            >
              <span className="px-8">Blogs</span>
            </Link>
          </li>
          <li>
            <Link
              to={"/FAQ"}
              className={
                "sub-menu-animate py-[10px] text-[15px] relative bg-white px-0 font-semibold hover:text-primary"
              }
            >
              <span className="px-8">FAQ</span>
            </Link>
          </li>
        </ul>
      </li>
      <li className="py-2">
        <NavLink
          to={"/products"}
          className={({ isActive }) =>
            isActive
              ? " text-[16px] border-b-[2px] py-[5px] border-white hover:bg-primary lg:text-white focus:bg-primary gap-1 font-bold px-0 rounded-none activeNavbar"
              : "text-[16px] lg:text-white py-[5px] gap-1 px-0 font-bold hover:bg-primary border-animate focus:bg-primary"
          }
        >
          Products
        </NavLink>
      </li>

      <li className="py-2">
        <NavLink
          to={"/fresh"}
          className={({ isActive }) =>
            isActive
              ? "text-[16px] border-b-[2px] py-[5px] border-white hover:bg-primary lg:text-white focus:bg-primary gap-1 font-bold px-0 rounded-none activeNavbar"
              : "text-[16px] lg:text-white gap-1 px-0 font-bold hover:bg-primary border-animate py-[5px] focus:bg-primary"
          }
        >
          Fresh
        </NavLink>
      </li>
      <li className="py-2">
        <NavLink
          to={"/mega-menu"}
          className={({ isActive }) =>
            isActive
              ? "text-[16px] border-b-[2px] py-[5px] border-white hover:bg-primary lg:text-white focus:bg-primary gap-1 font-bold px-0 rounded-none activeNavbar"
              : "text-[16px] lg:text-white gap-1 px-0 font-bold hover:bg-primary border-animate py-[5px] focus:bg-primary"
          }
        >
          Mega Menu
        </NavLink>
      </li>
    </>
  );
  console.log(toggle);
  return (
    <div className="bg-primary">
      {/*----- Bottom Header start -----*/}
      <div className="container mx-auto">
        <div className="navbar px-0 max-h-[64px]">
          <div className="navbar-start">
            <div className="dropdown lg:pl-0 pl-2 lg:hidden">
              <span id={"navToggle"} onClick={() => setToggle(!toggle)}></span>
            </div>
            <div>
              <BottomHeaderCategories />
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal flex justify-center items-center gap-5 ">
              {navItems}
            </ul>
          </div>
          <div className="navbar-center lg:hidden">
            <Link to={"/"}>
              <img src={logo} className={"h-10"} alt="fresh_logo" />
            </Link>
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
                <span className="text-white text-[16px] font-bold">Best Offer</span>
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
                <li>
                  <Link
                    to={"/user-dashboard/my-account"}
                    className="flex hover:text-white hover:bg-primary duration-500 ease-in-out items-center active:text-white gap-3"
                  >
                    <FaUserAlt className="text-lg " />
                    <span> My Account</span>
                  </Link>
                </li>
                <li>
                  <div className="flex hover:text-white hover:bg-primary duration-500 ease-in-out items-center active:text-white gap-3">
                    <MdLocationOn className="text-lg" />
                    <span>Order Tracking</span>
                  </div>
                </li>
                <li>
                  <div className="flex hover:text-white hover:bg-primary duration-500 ease-in-out items-center active:text-white  gap-3">
                    <BiNotepad className="text-lg" />
                    <span>My Voucher</span>
                  </div>
                </li>
                <li>
                  <div className="flex hover:text-white hover:bg-primary duration-500 items-center active:text-white gap-3">
                    <BiHeart className="text-lg" />
                    <span>My Wishlist</span>
                  </div>
                </li>
                <li>
                  <div className="flex hover:text-white hover:bg-primary duration-500 items-center active:text-white gap-3">
                    <AiFillSetting className="text-lg" />

                    <span>Setting</span>
                  </div>
                </li>
                {isUser && (
                  <li>
                    <NavLink
                      to={"/admin-dashboard"}
                      className="flex hover:text-white hover:bg-primary duration-500 items-center gap-3 active:text-white"
                    >
                      <VscSettings className="rotate-90 text-lg font-bold " />
                      <span>Dashboard</span>
                    </NavLink>
                  </li>
                )}

                <li>
                  <div className="flex hover:text-white hover:bg-primary duration-500 justify-items-center active:text-white gap-3">
                    <MdDarkMode className="text-lg" />
                    <span>DarkMode</span>
                    {/* <Themes></Themes> */}
                  </div>
                </li>
                <li>
                  <div className="hover:text-white hover:bg-primary duration-500 active:text-white">
                    {user ? (
                      <div className="flex items-center gap-3" onClick={() => handleSignOut()}>
                        <FiLogOut className="text-lg" />
                        <span>Sign out</span>
                      </div>
                    ) : (
                      <label htmlFor="loginModal" className="">
                        <div onClick={() => setIsLogin(true)} className="flex items-center gap-3">
                          <FiLogIn className="text-lg" />
                          <span>Sign In</span>
                        </div>
                      </label>
                    )}
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <NavSideBar toggle={toggle} setToggle={setToggle} />
      </div>
      {/*----- Bottom header end ----*/}
      {/* login Modal start*/}
      {isLogin && <LoginModal />}
      {/* login Modal end*/}
    </div>
  );
};

export default BottomHeader;
