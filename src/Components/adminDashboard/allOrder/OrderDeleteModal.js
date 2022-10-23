import React from "react";
import { toast } from "react-toastify";
import axiosPrivet from "../../Hooks/axiosPrivet";

const OrderDeleteModal = ({ orderDeleteModal, refetch, reset, setOrderDeleteModal }) => {
  const handleDeleteOrder = async (id) => {
    if (id) {
      try {
        const { data } = await axiosPrivet.delete(`/deleteOrder/${id}`);
        if (data?.acknowledged) {
          setOrderDeleteModal(null);
          toast.success("deleted", { autoClose: 1000 });
          refetch();
          reset();
        }
      } catch (error) {
        toast.error(error?.message, { autoClose: 1000 });
        console.log(error);
      }
    }
  };
  return (
    <>
      <input type="checkbox" id="userOrderDelete" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box ">
          <h3 className="font-bold text-lg text-center">Are you suer want to delete</h3>
          <div className="my-4 text-center">
            <p className="">Email: {orderDeleteModal?.userEmail}</p>
            <p className="">Id: {orderDeleteModal?._id}</p>
          </div>
          <div className="modal-action gap-5 justify-center">
            <label htmlFor="userOrderDelete" className="btn btn-sm btn-success text-neutral">
              Cancel
            </label>
            <label
              onClick={() => handleDeleteOrder(orderDeleteModal?._id)}
              htmlFor="userOrderDelete"
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

export default OrderDeleteModal;
