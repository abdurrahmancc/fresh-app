import React from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useQuery } from "react-query";
import axiosPrivet from "../../../Hooks/axiosPrivet";
import Loading from "../../../SharedPages/Loading";
import DeleteUserModal from "./DeleteUserModal";
import UserRoleConfirmModal from "./UserRoleConfirmModal";
import UsersTableRow from "./UsersTableRow";

const UsersTable = () => {
  const [deleteModal, setDeleteModal] = useState(null);
  const [inputRoleId, setInputRoleId] = useState({});
  const { data, isLoading, isError, refetch } = useQuery("allUser", () => axiosPrivet.get("users"));

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    toast.error(isError?.message, { id: "allUsers" });
  }
  // console.log(data);
  return (
    <div className="pt-6">
      <div className="overflow-x-auto w-full pb-[6.5rem]">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Phone / Email</th>
              <th>Address</th>
              <th>Role</th>
              <th>Joining Date</th>
              <th>Last Joined</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody id="order_Table_Row" className="cursor-pointer">
            {/* <!-- row 1 --> */}
            {data?.data.map((user, index) => (
              <UsersTableRow
                key={index}
                user={user}
                index={index}
                refetch={refetch}
                setDeleteModal={setDeleteModal}
                setInputRoleId={setInputRoleId}
              />
            ))}
          </tbody>
        </table>

        {deleteModal && (
          <DeleteUserModal
            deleteModal={deleteModal}
            setDeleteModal={setDeleteModal}
            refetch={refetch}
          />
        )}

        {inputRoleId && <UserRoleConfirmModal inputRoleId={inputRoleId} refetch={refetch} />}
      </div>
    </div>
  );
};

export default UsersTable;
