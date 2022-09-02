import React from "react";
import toast from "react-hot-toast";
import axiosPrivet from "../../../Hooks/axiosPrivet";
const DeleteUserModal = ({ deleteModal, setDeleteModal, refetch }) => {
  const handleDeleteUser = async (id) => {
    try {
      const { data } = await axiosPrivet.delete(`/deleteUser/${id}`);
      if (data?.acknowledged) {
        setDeleteModal(null);
        toast.success("deleted");
        refetch();
      }
    } catch (error) {
      toast.error(error?.message, { id: "deleteUser" });
      console.log(error);
    }
  };

  return (
    <>
      <input type="checkbox" id="my-modal" class="modal-toggle" />

      <div class="modal">
        <div class="modal-box ">
          <h3 class="font-bold text-lg text-center">
            Are you suer want to delete {deleteModal?.displayName}
          </h3>
          <div className="my-4 text-center">
            <p class="">Email: {deleteModal?.email}</p>
            <p class="">Id: {deleteModal?._id}</p>
          </div>
          <div class="modal-action gap-5 justify-center">
            <label for="my-modal" class="btn btn-sm btn-success text-neutral">
              Cancel
            </label>
            <label
              onClick={() => handleDeleteUser(deleteModal?._id)}
              for="my-modal"
              class="btn btn-sm btn-success text-neutral"
            >
              Delete
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteUserModal;
