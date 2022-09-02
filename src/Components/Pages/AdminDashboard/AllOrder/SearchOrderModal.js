import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { MdDelete, MdDetails } from "react-icons/md";
import emptyImg from "../../../../assets/logo/empty-user.png";

const SearchOrderModal = ({
  order,
  toggleSearch,
  setToggleSearch,
  setOrderDeleteModal,
  setOrderDetailModal,
  orderDetailModal,
}) => {
  const [handleHeight, setHandleHeight] = useState(false);

  return (
    <>
      <input type="checkbox" checked={toggleSearch} id="searchOrderModal" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box w-11/12 max-w-5xl">
          <div className={`overflow-x-auto w-full ${handleHeight && "pb-[6.5rem] ease-in-out"}`}>
            <table className="table w-full">
              {/* <!-- head --> */}
              <thead>
                <tr>
                  <th>#</th>
                  <th>Order ID</th>
                  <th>Billing Details</th>
                  <th>Date</th>
                  <th>Total</th>
                  <th>Payment Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody id="" className="cursor-pointer ">
                <tr className="hover">
                  <th>{1}</th>
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
                  <td>{order?.timeDate}</td>
                  <td>$ {order?.totalPrice}</td>
                  <td className=" ">
                    <span className=" btn btn-ghost text-success px-3 font-normal bg-[#2B4A50] rounded-full btn-xs capitalize">
                      Paid{" "}
                    </span>
                  </td>

                  <td>
                    <div className="dropdown dropdown-end">
                      <label tabIndex="0" className=" m-1">
                        <span>
                          <BsThreeDots onClick={() => setHandleHeight(true)} className="text-lg" />
                        </span>
                      </label>
                      <ul
                        tabIndex="0"
                        onClick={() => setToggleSearch(false)}
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
                          <label for="userOrderDelete" class="">
                            <span>
                              <MdDelete className="text-error text-lg" />
                            </span>
                            <span onClick={() => setOrderDeleteModal(order)}>Delete</span>
                          </label>
                        </li>
                        <li>
                          <label
                            onClick={() => setOrderDetailModal(order)}
                            htmlFor="orderDetailsModal"
                          >
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
              </tbody>
            </table>
          </div>
          <div class="modal-action">
            <label onClick={() => setToggleSearch(false)} for="searchOrderModal" class="btn">
              Yay!
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchOrderModal;
