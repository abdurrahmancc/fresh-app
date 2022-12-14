import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import axiosPrivet from "../../Hooks/axiosPrivet";
import auth from "../../Hooks/useAuthState";
import Loading from "../../SharedPages/Loading";
import DeleteUserModal from "../allUser/DeleteUserModal";
import UserRoleConfirmModal from "../allUser/UserRoleConfirmModal";
import AdminTableRow from "./AdminTableRow";

const AdminTable = () => {
  const [user, loading] = useAuthState(auth);
  const [deleteModal, setDeleteModal] = useState(null);
  const [inputRoleId, setInputRoleId] = useState({});
  const { data, isLoading, isError, refetch } = useQuery("allAdmin", () =>
    axiosPrivet.get(`users/admin/${user?.email}`)
  );

  if (isLoading || loading) {
    return <Loading />;
  }

  if (isError) {
    toast.error(isError?.message, { autoClose: 1000 });
  }

  const allAdmin = data?.data?.users.length > 0 ? data?.data?.users : null;
  return (
    <div className="pt-6">
      <div className="overflow-x-auto w-full pb-[6.5rem]">
        {/* =============== Table start ============== */}
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
              <th>Action</th>
            </tr>
          </thead>
          <tbody id="order_Table_Row" className="cursor-pointer">
            {/* <!-- row 1 --> */}
            {allAdmin &&
              allAdmin.map((user, index) => (
                <AdminTableRow
                  key={index}
                  user={user}
                  index={index}
                  refetch={refetch}
                  setDeleteModal={setDeleteModal}
                  setInputRoleId={setInputRoleId}
                />
              ))}
          </tbody>
          {/* <!-- foot --> */}
        </table>
        {/* =============== Table end ============== */}
        {/* ============= delete modal start =========== */}
        <DeleteUserModal
          deleteModal={deleteModal}
          setDeleteModal={setDeleteModal}
          refetch={refetch}
        />
        {/* ============= delete modal end =========== */}
        {inputRoleId && <UserRoleConfirmModal inputRoleId={inputRoleId} refetch={refetch} />}
      </div>
    </div>
  );
};

export default AdminTable;
