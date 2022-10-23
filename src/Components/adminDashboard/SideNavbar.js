import React, { useState } from "react";
import { AiOutlineSetting, AiOutlineUser } from "react-icons/ai";
import { MdOutlineMessage } from "react-icons/md";
import { CgLogOff } from "react-icons/cg";
import { FaBars } from "react-icons/fa";
import { BiSearch, BiSearchAlt } from "react-icons/bi";
import { signOut } from "firebase/auth";
import AdminDashboardThemes from "./AdminDashboardThemes";
import { Link } from "react-router-dom";
import auth from "../Hooks/useAuthState";
import { accessToken, removeCookie } from "../Hooks/useCookies";
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "../SharedPages/Loading";
import emptyUser from "../../assets/logo/empty-user.png";

const SideNavbar = ({ toggle, toggleSideBar, setToggleSideBar, setIsOpen, isOpen }) => {
  const [openSearch, setOpenSearch] = useState(false);
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <Loading />;
  }

  const handleSignOut = () => {
    signOut(auth);
    removeCookie(accessToken);
  };
  return (
    <div className="navbar bg-base-200 px-10">
      <div className="navbar-start">
        <div
          onClick={() => setIsOpen(true)}
          className={`drawer-button lg:hidden ${isOpen ? "hidden" : ""}`}
        >
          <FaBars onClick={toggle} className="text-xl" />
        </div>
        <label className={`relative w-[250px]  md:block max-w-xs hidden `}>
          <form>
            <button
              type="submit"
              className="absolute inset-y-0 right-2 rounded pr-1  flex items-center pl-2"
            >
              <BiSearchAlt className="text-2xl text-gray-400" />
            </button>
            <input
              className="placeholder:italic placeholder:text-slate-400 block bg-base-100 w-full  py-2 pl-6  pr-9 shadow-sm focus:outline-none focus:border-0 rounded-full  focus:ring-0 sm:text-sm"
              placeholder="Search..."
              type="text"
              name="search"
            />
          </form>
        </label>
      </div>

      <div className="navbar-end">
        <ul className="menu menu-horizontal p-0 ">
          <li className="md:hidden">
            <div className="bg-inherit">
              <BiSearch onClick={() => setOpenSearch(!openSearch)} className="text-xl" />
              <label
                className={`absolute  w-[250px]  block max-w-xs ${
                  openSearch
                    ? "sm:right-4 sm:top-16 top-16 right-[-100px] ease-in-out duration-500"
                    : "top-[-100px] sm:right-4 right-[-100px]  ease-in-out duration-500"
                }`}
              >
                <form action="">
                  <button
                    type="submit"
                    className="absolute inset-y-0 right-2 rounded pr-1  flex items-center pl-2"
                  >
                    <BiSearch className="text-2xl text-gray-400" />
                  </button>
                  <input
                    className="placeholder:italic placeholder:text-slate-400 block bg-neutral w-full  py-2 pl-6 h-10 pr-9 shadow-sm focus:outline-none focus:border-0 rounded-full  focus:ring-0 sm:text-sm"
                    placeholder="Search..."
                    type="text"
                    name="search"
                  />
                </form>
              </label>
            </div>
          </li>
          <li className="">
            <div className="bg-inherit">
              <div className="indicator  ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5  "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
                <span className="badge badge-xs badge-primary indicator-item"></span>
              </div>
            </div>
          </li>

          <li tabIndex="0" className="">
            <div className="bg-inherit">
              <div className="avatar ">
                <div className="w-8 rounded-full ring ring-base-100 ring-offset-base-100 ring-offset-1">
                  <img src={user?.photoURL || emptyUser} alt="img" />
                </div>
              </div>
              <div className="flex items-center">
                <span>Role</span>
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </div>
            </div>

            <ul className=" mt-2 menu bg-base-200 w-40 rounded-box">
              <li className=" ">
                <Link to={"/user-dashboard/my-account"} className=" px-8">
                  <AiOutlineUser className="text-lg" />
                  profile
                </Link>
              </li>
              <li className=" ">
                <Link to={"message"} className="px-8">
                  <MdOutlineMessage className="text-lg" />
                  Message
                </Link>
              </li>
              <li className="  border-t border-gray-500 ">
                <span onClick={handleSignOut} className="px-8 ">
                  <CgLogOff className="text-lg" />
                  Logout
                </span>
              </li>
            </ul>
          </li>
          <li tabIndex="0" className="">
            <div className="bg-inherit">
              <AiOutlineSetting className="text-lg animate-spin	"></AiOutlineSetting>
            </div>
            <ul className=" mt-2 menu bg-base-200 right-2 w-40 rounded-box">
              <li className="">
                <span className="px-8">
                  Themes
                  <AdminDashboardThemes
                    toggleSideBar={toggleSideBar}
                    setToggleSideBar={setToggleSideBar}
                  />
                </span>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideNavbar;
