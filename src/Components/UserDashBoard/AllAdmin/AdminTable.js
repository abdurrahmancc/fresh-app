import React, { useState } from "react";
import toast from "react-hot-toast";
import { useQuery } from "react-query";
import axiosPrivet from "../../Hooks/axiosPrivet";
import DeleteUserModal from "../../Pages/AdminDashboard/AllUser/DeleteUserModal";
import UserRoleConfirmModal from "../../Pages/AdminDashboard/AllUser/UserRoleConfirmModal";
import Loading from "../../SharedPages/Loading";
import AdminTableRow from "./AdminTableRow";

const AdminTable = () => {
  const [deleteModal, setDeleteModal] = useState(null);
  const [inputRoleId, setInputRoleId] = useState({});
  const { data, isLoading, isError, refetch } = useQuery("allAdmin", () =>
    axiosPrivet.get("/admin")
  );

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    toast.error(isError?.message, { id: "allUsers" });
  }
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
            {data?.data.map((user, index) => (
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
