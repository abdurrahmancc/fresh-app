import React, { useState } from "react";
import { ImStarHalf } from "react-icons/im";
import { FaUserAlt } from "react-icons/fa";
import { BiHeart, BiNotepad, BiUser } from "react-icons/bi";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineCaretDown } from "react-icons/ai";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import { VscSettings } from "react-icons/vsc";
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
import { useEffect } from "react";
import useAdmin from "../../../Hooks/useAdmin";
import { IoLocationOutline, IoSettingsOutline } from "react-icons/io5";

const BottomHeader = () => {
  const [user, loading] = useAuthState(auth);
  const [isLogin, setIsLogin] = useState(false);
  const { pathname } = useLocation();
  const [toggle, setToggle] = useState(false);
  const [admin, adminLoading] = useAdmin(user);
  const navigate = useNavigate();

  const handleSignOut = async () => {
    setIsLogin(!isLogin);
    signOut(auth);
    removeCookie(accessToken);
  };

  useEffect(() => {
    if (pathname.includes("login")) {
      setIsLogin(false);
    }
  }, [pathname]);

  if (loading || adminLoading) {
    return <Loading />;
  }

  const navItems = (
    <>
      <li className="py-2">
        <NavLink
          to={"/home"}
          className={({ isActive }) =>
            isActive
              ? " text-lg border-b-[2px] py-[5px] border-white hover:bg-primary lg:text-white focus:bg-primary gap-1 font-bold px-0 rounded-none activeNavbar"
              : "text-[16px] lg:text-white py-[5px] gap-1 px-0  font-bold hover:bg-primary border-animate focus:bg-primary"
          }
        >
          Home
        </NavLink>
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
          to={"/about"}
          className={({ isActive }) =>
            isActive
              ? " text-[16px] border-b-[2px] py-[5px] border-white hover:bg-primary lg:text-white focus:bg-primary gap-1 font-bold px-0 rounded-none activeNavbar"
              : "text-[16px] lg:text-white py-[5px] gap-1 px-0 font-bold hover:bg-primary border-animate focus:bg-primary"
          }
        >
          About
        </NavLink>
      </li>

      <li className="py-2">
        <NavLink
          to={"/contact"}
          className={({ isActive }) =>
            isActive
              ? "text-[16px] border-b-[2px] py-[5px] border-white hover:bg-primary lg:text-white focus:bg-primary gap-1 font-bold px-0 rounded-none activeNavbar"
              : "text-[16px] lg:text-white gap-1 px-0 font-bold hover:bg-primary border-animate py-[5px] focus:bg-primary"
          }
        >
          Contact
        </NavLink>
      </li>
      <li className="py-2">
        <NavLink
          to={"/blogs"}
          className={({ isActive }) =>
            isActive
              ? "text-[16px] border-b-[2px] py-[5px] border-white hover:bg-primary lg:text-white focus:bg-primary gap-1 font-bold px-0 rounded-none activeNavbar"
              : "text-[16px] lg:text-white gap-1 px-0 font-bold hover:bg-primary border-animate py-[5px] focus:bg-primary"
          }
        >
          Blogs
        </NavLink>
      </li>
    </>
  );

  console.log(admin);

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
            <ul className="menu menu-horizontal flex justify-center items-center gap-5 lg:gap-8 ">
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
                className="dropdown-content menu mt-[-6px] shadow-xl bg-base-100 rounded-box w-56"
              >
                <li>
                  <Link
                    to={"/user-dashboard/user-dashboard-details"}
                    className="flex hover:text-primary hover:bg-white duration-300 font-semibold transition ease-linear items-center active:text-primary gap-3 px-6"
                  >
                    <BiUser className="text-lg " />
                    <span> My Account</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to={"user-dashboard/my-order"}
                    className="flex hover:text-primary hover:bg-white duration-300 font-semibold transition ease-linear items-center active:text-primary gap-3 px-6"
                  >
                    <IoLocationOutline className="text-lg" />
                    <span>Order Tracking</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/user-dashboard/user-dashboard-details"}
                    className="flex hover:text-primary hover:bg-white duration-300 font-semibold transition ease-linear items-center active:text-primary gap-3 px-6"
                  >
                    <BiNotepad className="text-lg" />
                    <span>My Voucher</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to={"wishlist"}
                    className="flex hover:text-primary hover:bg-white duration-300 font-semibold transition ease-linear items-center active:text-primary gap-3 px-6"
                  >
                    <BiHeart className="text-lg" />
                    <span>My Wishlist</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to={"user-dashboard/my-account"}
                    className="flex hover:text-primary hover:bg-white duration-300 font-semibold transition ease-linear items-center active:text-primary gap-3 px-6"
                  >
                    <IoSettingsOutline className="text-lg" />

                    <span>Setting</span>
                  </Link>
                </li>
                {admin && (
                  <li>
                    <NavLink
                      to={"/admin-dashboard"}
                      className="flex hover:text-primary hover:bg-white duration-300 transition ease-linear font-semibold items-center active:text-primary gap-3 px-6"
                    >
                      <VscSettings className="rotate-90 text-lg font-bold " />
                      <span>Dashboard</span>
                    </NavLink>
                  </li>
                )}
                <li>
                  <div className="hover:text-primary hover:bg-white duration-300 font-semibold transition ease-linear active:text-primary px-6">
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
      {!pathname.includes("login") ? isLogin && <LoginModal /> : ""}
      {/* login Modal end*/}
    </div>
  );
};

export default BottomHeader;
