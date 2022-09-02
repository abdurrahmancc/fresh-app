import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { MdDelete, MdDetails } from "react-icons/md";

const UsersTableRow = ({ user, index, setDeleteModal, refetch, setInputRoleId }) => {
  return (
    <>
      <tr key={user?._id} className="hover">
        <th>{index + 1}</th>
        <td>
          <span>{user?.displayName}</span>
        </td>
        <td>
          <div>
            <div className="font-normal ">{user?.phoneNumber}</div>
            <div className="text-xs ">{user?.email}</div>
          </div>
        </td>
        <td>{user?.address ? user?.email : "no"}</td>
        <td>
          <div className="flex items-center gap-2">
            <span className=" text-xs">{user?.role ? user?.role : "user"}</span>
            <div className="dropdown dropdown-right cursor-pointer">
              <label tabIndex="0" className=" m-1 cursor-pointer">
                <span>
                  <FaRegEdit className="text-lg" />
                </span>
              </label>
              <ul
                tabIndex="0"
                className="dropdown-content  menu border mt-5 border-gray-700 rounded-sm shadow bg-base-100  w-40"
              >
                <li>
                  <label htmlFor="userRoleConfirmModal">
                    <span onClick={() => setInputRoleId({ user: user, role: "user" })}>User</span>
                  </label>
                </li>
                <li>
                  <label htmlFor="adminRoleConfirmModal">
                    <span onClick={() => setInputRoleId({ user: user, role: "admin" })}>Admin</span>
                  </label>
                </li>
                <li>
                  <label htmlFor="moderatorRoleConfirmModal">
                    <span onClick={() => setInputRoleId({ user: user, role: "moderator" })}>
                      Moderator
                    </span>
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </td>
        <td>
          <span className="">{user?.joiningDate}</span>
        </td>
        <td>
          <span className="">{user?.lastLoginDate}</span>
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
                <label for="my-modal" class="">
                  <span>
                    <MdDelete className="text-error text-lg" />
                  </span>
                  <span onClick={() => setDeleteModal(user)}>Delete</span>
                </label>
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
    </>
  );
};

export default UsersTableRow;
