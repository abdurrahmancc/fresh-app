import { format } from "date-fns";
import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { MdDelete, MdDetails } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import emptyImg from "../../../assets/logo/empty-user.png";

const OrderTableRow = ({ index, order, setOrderDeleteModal, setOrderDetailModal }) => {
  const navigate = useNavigate();
  let orderDate;
  if (order?.createdAt) {
    orderDate = format(new Date(order?.updatedAt), "PP");
  }
  return (
    <>
      <tr className="hover">
        <th>{index + 1}</th>
        <td>
          <span>{order?._id}</span>
        </td>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar online">
              <div className="rounded-full w-8 h-8">
                <img
                  src={order?.photoURL ? order?.photoURL : emptyImg}
                  alt="Avatar Tailwind CSS Component"
                />
              </div>
            </div>
            <div>
              <div className="font-normal">
                {order?.firstName} {order?.lastName}
              </div>
              <div className="text-xs opacity-50">{order?.country}</div>
            </div>
          </div>
        </td>
        <td>{orderDate}</td>
        <td>$ {order?.totalPrice && Number(order?.totalPrice).toFixed(2)}</td>
        <td className=" ">
          {order.paid ? (
            <span className="px-[27px] font-normal text-white text-sm rounded-full py-[2.5px] capitalize bg-[#2B4A50] ">
              Paid
            </span>
          ) : (
            <span
              onClick={() => navigate(`/user-dashboard/payment/${order?._id}`)}
              className="btn px-3 font-normal btn-warning text-neutral rounded-full btn-xs text-sm capitalize"
            >
              Pay Now
            </span>
          )}
        </td>

        <td>
          <div className="dropdown dropdown-end">
            <label tabIndex="0" className=" m-1">
              <span>
                <BsThreeDots className="text-lg" />
              </span>
            </label>
            <ul
              tabIndex="0"
              className="dropdown-content menu border top-10 border-gray-700 rounded-sm shadow bg-base-100  w-40"
            >
              <li>
                <div className="">
                  <span>
                    <FiEdit className="text-success" />
                  </span>
                  <span>Edit</span>
                </div>
              </li>
              <li>
                <label
                  onClick={() => setOrderDeleteModal(order)}
                  htmlFor="userOrderDelete"
                  className=""
                >
                  <span>
                    <MdDelete className="text-error text-lg" />
                  </span>
                  <span>Delete</span>
                </label>
              </li>
              <li>
                <label onClick={() => setOrderDetailModal(order)} htmlFor="orderDetailsModal">
                  <span>
                    <MdDetails className=" text-white text-lg" />
                  </span>
                  <span>Details</span>
                </label>
              </li>
            </ul>
          </div>
        </td>
      </tr>
    </>
  );
};

export default OrderTableRow;
