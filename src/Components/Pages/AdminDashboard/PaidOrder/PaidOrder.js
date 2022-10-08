import React, { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { HiOutlinePlus } from "react-icons/hi";
import { useQuery } from "react-query";
import axiosPrivet from "../../../Hooks/axiosPrivet";
import Breadcrumb from "../../../SharedPages/Breadcrumb";
import PaidOrderDeleteModal from "./PaidOrderDeleteModal";
import PaidOrderTable from "./PaidOrderTable";

const PaidOrder = () => {
  const [paidDeleteModal, setPaidDeleteModal] = useState(null);
  const crumbs = [
    { path: "admin-dashboard", name: "admin-dashboard" },
    { path: "admin-dashboard/order-paid", name: "order-paid" },
  ];
  const { data, isLoading, refetch } = useQuery("allPayments", () =>
    axiosPrivet.get("allPayments")
  );

  if (isLoading) {
    // return <Loading />;
  }

  const deleteModalInfo = [setPaidDeleteModal, refetch, paidDeleteModal];
  return (
    <div className="p-10 w-full">
      <div className="flex justify-between pb-4">
        <h4 className="uppercase text-[1.4vw]   text-neutral font-bold">paid orders</h4>
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
            <button className="btn btn-sm capitalize font-normal  text-neutral rounded-full btn-success">
              <HiOutlinePlus className="" /> add order
            </button>
          </div>
        </div>
        <PaidOrderTable
          refetch={refetch}
          paidOrders={data?.data}
          setPaidDeleteModal={setPaidDeleteModal}
        />
        {paidDeleteModal && <PaidOrderDeleteModal>{deleteModalInfo}</PaidOrderDeleteModal>}
      </div>
    </div>
  );
};

export default PaidOrder;
