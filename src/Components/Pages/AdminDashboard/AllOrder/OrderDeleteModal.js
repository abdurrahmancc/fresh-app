import React from "react";
import toast from "react-hot-toast";
import axiosPrivet from "../../../Hooks/axiosPrivet";

const OrderDeleteModal = ({ orderDeleteModal, refetch, reset, setOrderDeleteModal }) => {
  const handleDeleteOrder = async (id) => {
    if (id) {
      try {
        const { data } = await axiosPrivet.delete(`/deleteOrder/${id}`);
        if (data?.acknowledged) {
          setOrderDeleteModal(null);
          toast.success("deleted");
          refetch();
          reset();
        }
      } catch (error) {
        toast.error(error?.message, { id: "deleteUser" });
        console.log(error);
      }
    }
  };
  return (
    <>
      <input type="checkbox" id="userOrderDelete" class="modal-toggle" />

      <div class="modal">
        <div class="modal-box ">
          <h3 class="font-bold text-lg text-center">Are you suer want to delete</h3>
          <div className="my-4 text-center">
            <p class="">Email: {orderDeleteModal?.userEmail}</p>
            <p class="">Id: {orderDeleteModal?._id}</p>
          </div>
          <div class="modal-action gap-5 justify-center">
            <label for="userOrderDelete" class="btn btn-sm btn-success text-neutral">
              Cancel
            </label>
            <label
              onClick={() => handleDeleteOrder(orderDeleteModal?._id)}
              for="userOrderDelete"
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

export default OrderDeleteModal;
