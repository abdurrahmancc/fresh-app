import React, { useEffect } from "react";
import Collapsible from "react-collapsible";
import { BsChevronDown } from "react-icons/bs";
import logo from "../../../../assets/logo/logo-1.png";
import { Link } from "react-router-dom";
import "./navSideBar.css";
import { useForm } from "react-hook-form";
import { BiSearchAlt } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";

const NavSideBar = ({ toggle, setToggle }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {};

  useEffect(() => {
    document.onclick = function (e) {
      if (
        e.target.id !== "navSidebar" &&
        e.target.id !== "navToggle" &&
        e.target.id !== "sidebarSubMenuItems" &&
        e.target.id !== "mobile-Search" &&
        e.target.id !== "mobile-top" &&
        e.target.id !== "mobile-sidebar-Toggle" &&
        e.target.id !== "sidebarSubMenu" &&
        e.target.id !== "mobile-collapsible-pates" &&
        e.target.id !== "mobile-collapsible-home" &&
        e.target.id !== "mobile-collapsible-shop" &&
        e.target.id !== "mobile-menu"
      ) {
        setToggle(false);
      }
    };
  }, [setToggle]);
  return (
    <div className="">
      <div>
        <div
          id="navSidebar"
          className={`fixed top-0 w-[260px] h-screen bg-white shadow-xl
           transition-[2s] z-[100] ${toggle ? "active left-0" : "left-[-300px]"} `}
        >
          <div
            id="mobile-top"
            className="pl-4 pr-[26px] py-[15px] border-b flex justify-between items-center"
          >
            <div>
              <Link to={"/"}>
                <img src={logo} className="h-[42px]" alt="fresh_logo" />
              </Link>
            </div>
            <div>
              <button className="bg-[#d0e2af] text-black rounded-full p-1">
                {" "}
                <IoMdClose className="text-lg" />
              </button>
            </div>
          </div>
          <div id="mobile-menu" className="p-6 pt-8">
            <div className="">
              <form className="" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control">
                  <div className="relative">
                    <input
                      id="mobile-Search"
                      placeholder="Search..."
                      type="text"
                      name="search"
                      {...register("search")}
                      className="placeholder:italic w-full placeholder:text-slate-400 block pl-5  pr-9 shadow-sm focus:outline-none h-[45px] focus:border-[#bbd094] input rounded-sm border border-gray-200 focus:ring-0 sm:text-sm"
                    />
                    <button className=" absolute right-[2px] p-2 rounded top-[5px]">
                      <BiSearchAlt className="text-xl text-gray-400" />
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <ul className="relative mt-5">
              {/*--------------- home -------------- */}
              <li
                id="sidebarSubMenu"
                className="inline-block py-[6px] border-b text-black list-none w-full"
              >
                <div id="sidebarSubMenu">
                  <Collapsible
                    className="w-full"
                    trigger={
                      <span
                        id="mobile-collapsible-home"
                        className="flex items-center justify-between w-full"
                      >
                        {[`Home`, <BsChevronDown id="sidebarSubMenuItems" />]}
                      </span>
                    }
                  >
                    <ul className="pt-[9px] pb-[5px] border-t">
                      <li>
                        <Link
                          to={"/home"}
                          className={
                            "pl-[10px] inline-block py-2 text-[#444] text-[14px] font-bold"
                          }
                        >
                          Home 1
                        </Link>
                      </li>
                    </ul>
                  </Collapsible>
                </div>
              </li>
              {/*-------------- shop -------------- */}
              <li
                id="sidebarSubMenu"
                className="inline-block border-b py-[6px] text-black list-none w-full"
              >
                <div id="sidebarSubMenu">
                  <Collapsible
                    className="w-full"
                    trigger={
                      <span
                        id="mobile-collapsible-shop"
                        className="flex items-center justify-between w-full"
                      >
                        {[`Shop`, <BsChevronDown id="sidebarSubMenuItems" />]}
                      </span>
                    }
                  >
                    <ul className="pt-[9px] pb-[5px] border-t">
                      <li>
                        <Link
                          to={"/shop/fullwidth"}
                          className={
                            "pl-[10px] inline-block py-2 text-[#444] text-[14px] font-bold"
                          }
                        >
                          Shop Wide
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={"/shop/2"}
                          className={
                            "pl-[10px] inline-block py-2 text-[#444] text-[14px] font-bold"
                          }
                        >
                          Product list
                        </Link>
                      </li>
                    </ul>
                  </Collapsible>
                </div>
              </li>
              {/*-------------- pages -------------- */}
              <li
                id="sidebarSubMenu"
                className="inline-block py-[6px] border-b text-black list-none w-full"
              >
                <div id="sidebarSubMenu">
                  <Collapsible
                    className="w-full"
                    trigger={
                      <span
                        id="mobile-collapsible-pates"
                        className="flex items-center justify-between w-full"
                      >
                        {[`Pages`, <BsChevronDown id="sidebarSubMenuItems" />]}
                      </span>
                    }
                  >
                    <ul className="pt-[9px] pb-[5px] border-t">
                      <li>
                        <Link
                          to={"/about"}
                          className={
                            "pl-[10px] inline-block py-2 text-[#444] text-[14px] font-bold"
                          }
                        >
                          About
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={"/contact"}
                          className={
                            "pl-[10px] inline-block py-2 text-[#444] text-[14px] font-bold"
                          }
                        >
                          Contact
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={"/blogs"}
                          className={
                            "pl-[10px] inline-block py-2 text-[#444] text-[14px] font-bold"
                          }
                        >
                          Blogs
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={"/FAQ"}
                          className={
                            "pl-[10px] inline-block py-2 text-[#444] text-[14px] font-bold"
                          }
                        >
                          FAQ
                        </Link>
                      </li>
                    </ul>
                  </Collapsible>
                </div>
              </li>
              <li className="inline-block list-none w-full">
                <a href="/" className="tracking-[2px] text-[1em]">
                  Item 1
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavSideBar;
