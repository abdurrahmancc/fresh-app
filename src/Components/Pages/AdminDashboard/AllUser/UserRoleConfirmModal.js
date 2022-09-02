import React from "react";
import toast from "react-hot-toast";
import axiosPrivet from "../../../Hooks/axiosPrivet";

const UserRoleConfirmModal = ({ inputRoleId, refetch }) => {
  const { user, role } = inputRoleId;

  const handleAddUser = async (id) => {
    try {
      const { data } = await axiosPrivet.post(`makeRole/${id}`, { role: role });
      if (data?.acknowledged) {
        // setDeleteModal(null);
        toast.success("Add Admin", { id: `make${role}` });
        refetch();
      }
    } catch (error) {
      toast.error(error?.message, { id: `make${role}Error` });
      console.log(error);
    }
  };
  return (
    <>
      <input type="checkbox" id={`${role}RoleConfirmModal`} class="modal-toggle" />

      <div class="modal">
        <div class="modal-box ">
          <h3 class="font-bold text-lg text-center">
            Are you suer want to {`add ${role}`} {user?.displayName}
          </h3>
          <div className="my-4 text-center">
            <p class="">Email: {user?.email}</p>
            <p class="">Id: {user?._id}</p>
          </div>
          <div class="modal-action gap-5 justify-center">
            <label for={`${role}RoleConfirmModal`} class="btn btn-sm btn-success text-neutral">
              Cancel
            </label>
            <label
              onClick={() => handleAddUser(user?._id)}
              for={`${role}RoleConfirmModal`}
              class="btn btn-sm btn-success text-neutral"
            >
              Add {role}
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserRoleConfirmModal;
