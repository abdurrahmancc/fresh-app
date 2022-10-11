import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { MdDelete, MdDetails } from "react-icons/md";

const PendingOrderTable = () => {
  return (
    <div className="pt-6">
      <div className="overflow-x-auto w-full pb-[6.5rem]">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox rounded-none checkbox-xs" />
                </label>
              </th>
              <th>Username</th>
              <th>Phone / Email</th>
              <th>Address</th>
              <th>Rating</th>
              <th>Total order</th>
              <th>Total Paid</th>
              <th>Joining Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody id="order_Table_Row" className="cursor-pointer">
            {/* <!-- row 1 --> */}
            <tr className="hover">
              <th>
                <label>
                  <input type="checkbox" className="checkbox rounded-none checkbox-xs" />
                </label>
              </th>
              <td>
                <span>holloway</span>
              </td>
              <td>
                <div>
                  <div className="font-normal ">017325-250106</div>
                  <div className="text-xs ">jeremyholloway@gmail.com</div>
                </div>
              </td>
              <td>Santiago De Los Caballeros</td>
              <td>
                <button className="flex gap-1 bg-success text-neutral items-center px-2 py-1 rounded">
                  <span>
                    <FaStar className="text-xs" />
                  </span>
                  <span className=" text-xs ">4.4</span>
                </button>
              </td>
              <td className=" ">
                <span className="">60</span>
              </td>
              <td>
                <span className="font-normal capitalize"> $1313</span>
              </td>
              <td>
                <span className="">05 jun 2010</span>
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
                      <div className=" ">
                        <span>
                          <MdDelete className="text-error text-lg" />
                        </span>
                        <span>Delete</span>
                      </div>
                    </li>
                    <li>
                      <div className=" ">
                        <span>
                          <MdDetails className=" text-white text-lg" />
                        </span>
                        <span>Details</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
          </tbody>
          {/* <!-- foot --> */}
        </table>
      </div>
    </div>
  );
};

export default PendingOrderTable;
