import React from "react";
import toast from "react-hot-toast";
import axiosPrivet from "../../../Hooks/axiosPrivet";

const OrderStatusModal = ({ setStatusModal, statusModal, refetch }) => {
  const handleStateModal = async (id) => {
    if (id) {
      try {
        const { data } = await axiosPrivet.patch(`/paymentOrder/${id}`, { status: statusModal[1] });
        if (data?.updateOrder?.acknowledged) {
          setStatusModal(null);
          toast.success("success");
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
      <input type="checkbox" id="orderStatusModal" class="modal-toggle" />

      <div class="modal">
        <div class="modal-box ">
          <h3 class="font-bold text-lg text-center">Are you suer want to {statusModal[1]}</h3>
          <div className="my-4 text-center">
            <p class="">Email: {statusModal[0]?.email}</p>
            <p class="">Id: {statusModal[0]?._id}</p>
          </div>
          <div class="modal-action gap-5 justify-center">
            <label for="orderStatusModal" class="btn btn-sm btn-success text-neutral">
              Cancel
            </label>
            <label
              onClick={() => handleStateModal(statusModal[0]?.transactionId)}
              for="orderStatusModal"
              class="btn btn-sm btn-success text-neutral"
            >
              {statusModal[1]}
            </label>
          </div>
        </div>
      </div>
    </>
  );
};
export default OrderStatusModal;
