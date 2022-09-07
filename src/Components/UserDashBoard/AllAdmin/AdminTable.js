import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { useQuery } from "react-query";
import axiosPrivet from "../../Hooks/axiosPrivet";
import auth from "../../Hooks/useAuthState";
import DeleteUserModal from "../../Pages/AdminDashboard/AllUser/DeleteUserModal";
import UserRoleConfirmModal from "../../Pages/AdminDashboard/AllUser/UserRoleConfirmModal";
import Loading from "../../SharedPages/Loading";
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
    toast.error(isError?.message, { id: "allUsers" });
  }

  const allAdmin = data?.data?.users.length > 0 ? data?.data?.users : null;
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
        <DeleteUserModal
          deleteModal={deleteModal}
          setDeleteModal={setDeleteModal}
          refetch={refetch}
        />
        {inputRoleId && <UserRoleConfirmModal inputRoleId={inputRoleId} refetch={refetch} />}
      </div>
    </div>
  );
};

export default AdminTable;
