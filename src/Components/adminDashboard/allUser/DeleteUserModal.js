import React from "react";
import { toast } from "react-toastify";
import axiosPrivet from "../../Hooks/axiosPrivet";

const DeleteUserModal = ({ deleteModal, setDeleteModal, refetch }) => {
  const handleDeleteUser = async (id) => {
    try {
      // toast.error("sorry");
      const { data } = await axiosPrivet.delete(`users/${id}`);
      if (data?.acknowledged) {
        setDeleteModal(null);
        toast.success("deleted", { autoClose: 1000 });
        refetch();
      }
    } catch (error) {
      toast.error(error?.message, { autoClose: 1000 });
    }
  };

  return (
    <>
      <input type="checkbox" id="my-modal" className="modal-toggle" />

      <div className="modal">
        <div className="modal-box ">
          <h3 className="font-bold text-lg text-center">
            Are you suer want to delete {deleteModal?.displayName}
          </h3>
          <div className="my-4 text-center">
            <p className="">Email: {deleteModal?.email}</p>
            <p className="">Id: {deleteModal?._id}</p>
          </div>
          <div className="modal-action gap-5 justify-center">
            <label htmlFor="my-modal" className="btn btn-sm btn-success text-neutral">
              Cancel
            </label>
            <label
              onClick={() => handleDeleteUser(deleteModal?._id)}
              htmlFor="my-modal"
              className="btn btn-sm btn-success text-neutral"
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
