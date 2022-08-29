import React, { useState } from "react";
import { ImStarHalf } from "react-icons/im";
import { FaUserAlt } from "react-icons/fa";
import { MdDarkMode, MdLocationOn } from "react-icons/md";
import { BiHeart, BiNotepad } from "react-icons/bi";
import { Link, NavLink, useNavigate } from "react-router-dom";
import BottomCategories from "./BottomCategories";
import { AiFillSetting, AiOutlineCaretDown } from "react-icons/ai";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import { VscThreeBars } from "react-icons/vsc";

const BottomHeader = () => {
  const [user, loading] = useState("");
  const [isUser] = useState("");
  const [categoryDown] = useState();
  const navigate = useNavigate();

  const handleSignOut = () => {};

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

      <li tabindex="0">
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
        <ul class="menu bg-base-100 z-50 w-44 shadow">
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

      <li tabindex="0">
        <a
          href="#"
          className="text-lg px-0 py-[17px] font-semibold hover:bg-accent focus:bg-accent"
        >
          PAGES
          <AiOutlineCaretDown />
        </a>
        <ul class="menu bg-base-100 z-50 w-44 shadow">
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

  const items = (
    <>
      <ul
        tabindex="0"
        class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li>
          <NavLink
            to={"/products"}
            className={({ isActive }) =>
              isActive
                ? "border-b-2 pb-2 text-lg text-success font-semibold  border-primary px-0 rounded-none"
                : "text-lg px-0 font-semibold"
            }
          >
            Item 1
          </NavLink>
        </li>
        <li tabindex="0">
          <NavLink
            to={"/products"}
            className={({ isActive }) =>
              isActive
                ? "border-b-2 pb-2 text-lg text-success font-semibold  border-primary px-0 rounded-none"
                : "text-lg px-0 font-semibold"
            }
          >
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
          </NavLink>
          <ul class="menu bg-base-100 w-56">
            <li>
              <NavLink
                to={"/products"}
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2 pb-2 text-lg text-success font-semibold  border-primary px-0 rounded-none"
                    : "text-lg px-0 font-semibold"
                }
              >
                Item 1
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/products"}
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2 pb-2 text-lg text-success font-semibold  border-primary px-0 rounded-none"
                    : "text-lg px-0 font-semibold"
                }
              >
                Item 2
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/products"}
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2 pb-2 text-lg text-success font-semibold  border-primary px-0 rounded-none"
                    : "text-lg px-0 font-semibold"
                }
              >
                Item 3
              </NavLink>
            </li>
          </ul>
        </li>
        <li>
          <a>Item 3</a>
        </li>
      </ul>
    </>
  );
  return (
    <div className="bg-accent">
      {/*----- Bottom Header start -----*/}
      <div className="container mx-auto">
        <div class="navbar px-0 max-h-[64px]">
          <div class="navbar-start">
            <div class="dropdown lg:pl-0 pl-2">
              <label tabindex="0" class=" lg:hidden">
                <VscThreeBars className="text-2xl" />
              </label>
              <ul
                tabindex="0"
                class="menu menu-compact dropdown-content mt-5 shadow-xl bg-base-100 rounded-box w-52"
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
                {navItems}
              </ul>
            </div>
            <div
              className={`max-w-[292.5px] lg:max-w-[250.5px] xl:max-w-[292.5px] w-screen bg-[#f4a629] h-[64px] hidden lg:block `}
            >
              <BottomCategories categoryDown={categoryDown}></BottomCategories>
            </div>
          </div>
          <div class="navbar-center hidden lg:flex">
            <ul class="menu menu-horizontal flex justify-center items-center gap-5 ">{navItems}</ul>
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
