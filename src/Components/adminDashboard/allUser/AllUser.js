import React from "react";
import { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { HiOutlinePlus } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import Breadcrumb from "../../SharedPages/Breadcrumb";
import UsersTable from "./UsersTable";

const AllUsers = () => {
  const [page, setPage] = useState(0);
  const navigate = useNavigate();

  return (
    <div className="p-10 w-full">
      <div className="flex justify-between pb-4">
        <h4 className="uppercase text-[1.4vw]   text-neutral font-bold">all users</h4>
        <div>
          <div className="text-sm breadcrumbs">
            <Breadcrumb />
          </div>
        </div>
      </div>
      <div className="bg-base-100 p-5">
        <div className="flex justify-between">
          <div>
            <form>
              <label className={`relative w-[250px]  md:block max-w-xs hidden `}>
                <button
                  type="submit"
                  className="absolute inset-y-0 right-2 rounded pr-1  flex items-center pl-2"
                >
                  <BiSearchAlt className="text-2xl text-gray-400" />
                </button>
                <input
                  className="placeholder:italic placeholder:text-slate-400 block bg-base-200 w-full  py-2 pl-6  pr-9 shadow-sm focus:outline-none focus:border-0 rounded-full  focus:ring-0 sm:text-sm"
                  placeholder="Search..."
                  type="text"
                  name="search"
                />
              </label>
            </form>
          </div>
          <div>
            <button
              onClick={() => navigate("/register")}
              className="btn btn-sm capitalize font-normal  text-neutral rounded-full btn-success"
            >
              <HiOutlinePlus className="" /> New User
            </button>
          </div>
        </div>
        <UsersTable />
        <div className="flex justify-center gap-1 -mt-10 pb-5">
          {[...Array(5).keys()].map((number, index) => (
            <button
              key={index}
              className={`btn rounded-full border-[#76A713]   border px-5 flex justify-center hover:border-[#76A713] items-center hover:bg-[#76A713] hover:text-white ${
                page === number
                  ? "bg-[#76A713] hover:bg-[#76A713] text-white hover:border-[#76A713] "
                  : "text-black"
              }`}
              onClick={() => setPage(number)}
            >
              <span>{number + 1}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
