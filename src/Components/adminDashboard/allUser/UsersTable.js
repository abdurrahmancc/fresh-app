import React from "react";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import axiosPrivet from "../../Hooks/axiosPrivet";
import auth from "../../Hooks/useAuthState";
import Loading from "../../SharedPages/Loading";
import DeleteUserModal from "./DeleteUserModal";
import UserRoleConfirmModal from "./UserRoleConfirmModal";
import UsersTableRow from "./UsersTableRow";

const UsersTable = () => {
  const [user, loading] = useAuthState(auth);
  const [deleteModal, setDeleteModal] = useState(null);
  const [inputRoleId, setInputRoleId] = useState({});
  console.log(user?.email);
  const { data, isLoading, isError, refetch } = useQuery("getAllUsers", () =>
    axiosPrivet.get(`users/${user?.email}`)
  );

  const allUsers = data?.data?.users.length > 0 ? data?.data?.users : null;

  if (isLoading || loading) {
    return <Loading />;
  }

  if (isError) {
    toast.error(isError?.message, { autoClose: 1000 });
  }

  console.log(user);
  return (
    <div className="pt-6">
      <div className="overflow-x-auto w-full pb-[6.5rem]">
        {/* ========= table start ====== */}
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
            {allUsers &&
              allUsers.map((user, index) => (
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
        {/* ========= table end ====== */}
        {/* ========= delete modal start ====== */}
        {deleteModal && (
          <DeleteUserModal
            deleteModal={deleteModal}
            setDeleteModal={setDeleteModal}
            refetch={refetch}
          />
        )}
        {/* ========= delete modal end ====== */}
        {/* ========= User Role Confirm Modal start ====== */}
        {inputRoleId && <UserRoleConfirmModal inputRoleId={inputRoleId} refetch={refetch} />}
        {/* ========= User Role Confirm Modal end ====== */}
      </div>
    </div>
  );
};

export default UsersTable;
