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

const BottomHeader = () => {
  const [user, loading] = useAuthState(auth);
  const [isLogin, setIsLogin] = useState(false);
  const [isUser] = useState(true);
  const [categoryDown] = useState();
  const navigate = useNavigate();

  const handleSignOut = () => {
    setIsLogin(!isLogin);
    signOut(auth);
    localStorage.removeItem("accessToken");
  };

  console.log(isLogin);

  if (loading) {
    return <Loading />;
  }
  const navItems = (
    <>
      <li className="">
        <NavLink
          to={"/home"}
          className={({ isActive }) =>
            isActive
              ? "border-b-2 py-[17px] text-lg text-success hover:bg-accent focus:bg-accent  font-semibold  border-primary px-0 rounded-none activeNavbar"
              : "text-lg px-0 py-[17px] font-semibold hover:bg-accent focus:bg-accent"
          }
        >
          HOME
        </NavLink>
      </li>

      <li tabIndex="0">
        <NavLink
          to={"/shop"}
          className={({ isActive }) =>
            isActive
              ? "border-b-2 py-[17px] text-lg hover:bg-accent focus:bg-accent text-success font-semibold  border-primary px-0 rounded-none"
              : "text-lg px-0 py-[17px] font-semibold hover:bg-accent focus:bg-accent"
          }
        >
          SHOP
          <AiOutlineCaretDown />
        </NavLink>
        <ul className="menu bg-base-100 z-50 w-44 shadow">
          <li>
            <NavLink
              to={"/shop"}
              className={({ isActive }) =>
                isActive
                  ? " text-lg text-success font-semibold  border-primary px-0 rounded-none"
                  : "text-lg px-0 font-semibold"
              }
            >
              <span className="px-5">Shop default</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/shop/fullwidth"}
              className={({ isActive }) =>
                isActive
                  ? "  text-lg text-success font-semibold px-0 rounded-none"
                  : "text-lg px-0 font-semibold"
              }
            >
              <span className="px-5">Shop wide</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/shop/2"}
              className={({ isActive }) =>
                isActive
                  ? "pb-2 text-lg text-success font-semibold px-0 rounded-none"
                  : "text-lg px-0 font-semibold"
              }
            >
              <span className="px-5">Product list</span>
            </NavLink>
          </li>
        </ul>
      </li>

      <li tabIndex="0">
        <a
          href="#"
          className="text-lg px-0 py-[17px] font-semibold hover:bg-accent focus:bg-accent"
        >
          PAGES
          <AiOutlineCaretDown />
        </a>
        <ul className="menu bg-base-100 z-50 w-44 shadow">
          <li>
            <NavLink
              to={"/about"}
              className={({ isActive }) =>
                isActive
                  ? " text-lg text-success font-semibold  border-primary px-0 rounded-none"
                  : "text-lg px-0 font-semibold"
              }
            >
              <span className="px-5"> About us</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/contact"}
              className={({ isActive }) =>
                isActive
                  ? "  text-lg text-success font-semibold px-0 rounded-none"
                  : "text-lg px-0 font-semibold"
              }
            >
              <span className="px-5">Contact</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/blogs"}
              className={({ isActive }) =>
                isActive
                  ? "pb-2 text-lg text-success font-semibold px-0 rounded-none"
                  : "text-lg px-0 font-semibold"
              }
            >
              <span className="px-5">Blogs</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/FAQ"}
              className={({ isActive }) =>
                isActive
                  ? "pb-2 text-lg text-success font-semibold px-0 rounded-none"
                  : "text-lg px-0 font-semibold"
              }
            >
              <span className="px-5">FAQ</span>
            </NavLink>
          </li>
        </ul>
      </li>
      <li>
        <NavLink
          to={"/products"}
          className={({ isActive }) =>
            isActive
              ? "border-b-2 py-[17px] text-lg hover:bg-accent focus:bg-accent  text-success font-semibold  border-primary px-0 rounded-none"
              : "text-lg px-0 py-[17px] font-semibold hover:bg-accent focus:bg-accent"
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
              ? "border-b-2 py-[17px] text-lg hover:bg-accent focus:bg-accent  text-success font-semibold  border-primary px-0 rounded-none"
              : "text-lg px-0 py-[17px] font-semibold hover:bg-accent focus:bg-accent"
          }
        >
          FRESH
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/mega-menu"}
          className={({ isActive }) =>
            isActive
              ? "border-b-2 py-[17px] hover:bg-accent focus:bg-accent  text-lg text-success font-semibold  border-primary px-0 rounded-none"
              : "text-lg px-0 py-[17px] font-semibold hover:bg-accent focus:bg-accent"
          }
        >
          MEGA MENU
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-accent">
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
              className={`max-w-[292.5px] lg:max-w-[250.5px] xl:max-w-[292.5px] w-screen bg-[#f4a629] h-[64px] hidden lg:block `}
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
                className="flex items-center font-semibold gap-2 pr-5 border-r border-[#000]"
              >
                <span className="text-2xl">
                  <ImStarHalf />
                </span>
                <span>Best Offer</span>
              </Link>
            </div>

            <div className="dropdown dropdown-hover dropdown-end lg:pr-0 pr-2">
              <label tabIndex="0" className="text m-1">
                <FaUserAlt className="text-2xl" />
              </label>
              <ul
                tabIndex="0"
                className="dropdown-content menu mt-[-6px] shadow-xl bg-base-100 rounded-box w-52"
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
                      <span className="text-sm font-bold ">
                        <VscSettings className="rotate-90" />
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
                    {/* <Themes></Themes> */}
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
                    <label htmlFor="loginModal" className="">
                      <span onClick={() => setIsLogin(true)} className="flex items-center gap-3">
                        <span className="text-sm  ">
                          <FiLogIn />
                        </span>{" "}
                        <span>Sign In</span>
                      </span>
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
