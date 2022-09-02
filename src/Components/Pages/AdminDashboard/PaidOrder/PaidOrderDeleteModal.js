import React from "react";
import toast from "react-hot-toast";
import axiosPrivet from "../../../Hooks/axiosPrivet";

const PaidOrderDeleteModal = ({ children }) => {
  const [setPaidDeleteModal, refetch, paidDeleteModal] = children;

  const handleDeleteOrder = async (id) => {
    if (id) {
      try {
        const { data } = await axiosPrivet.delete(`/deletePaidOrder/${id}`);
        if (data?.orderDelete?.acknowledged) {
          setPaidDeleteModal(null);
          toast.success("deleted");
          refetch();
        }
      } catch (error) {
        toast.error(error?.message, { id: "deleteUser" });
        console.log(error);
      }
    }
  };
  return (
    <>
      <input type="checkbox" id="paidOrderDelete" class="modal-toggle" />

      <div class="modal">
        <div class="modal-box ">
          <h3 class="font-bold text-lg text-center">Are you suer want to delete</h3>
          <div className="my-4 text-center">
            <p class="">Email: {paidDeleteModal?.email}</p>
            <p class="">Id: {paidDeleteModal?._id}</p>
          </div>
          <div class="modal-action gap-5 justify-center">
            <label for="paidOrderDelete" class="btn btn-sm btn-success text-neutral">
              Cancel
            </label>
            <label
              onClick={() => handleDeleteOrder(paidDeleteModal?.transactionId)}
              for="paidOrderDelete"
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

export default PaidOrderDeleteModal;
