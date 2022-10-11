import React from "react";
import { toast } from "react-toastify";
import axiosPrivet from "../../Hooks/axiosPrivet";

const OrderStatusModal = ({ setStatusModal, statusModal, refetch }) => {
  const handleStateModal = async (id) => {
    if (id) {
      try {
        const { data } = await axiosPrivet.patch(`/paymentOrder/${id}`, { status: statusModal[1] });
        if (data?.updateOrder?.acknowledged) {
          setStatusModal(null);
          toast.success("success", { autoClose: 1000 });
          refetch();
        }
      } catch (error) {
        toast.error(error?.message, { autoClose: 1000 });
      }
    }
  };
  return (
    <>
      <input type="checkbox" id="orderStatusModal" className="modal-toggle" />

      <div className="modal">
        <div className="modal-box ">
          <h3 className="font-bold text-lg text-center">Are you suer want to {statusModal[1]}</h3>
          <div className="my-4 text-center">
            <p className="">Email: {statusModal[0]?.email}</p>
            <p className="">Id: {statusModal[0]?._id}</p>
          </div>
          <div className="modal-action gap-5 justify-center">
            <label htmlFor="orderStatusModal" className="btn btn-sm btn-success text-neutral">
              Cancel
            </label>
            <label
              onClick={() => handleStateModal(statusModal[0]?.transactionId)}
              htmlFor="orderStatusModal"
              className="btn btn-sm btn-success text-neutral"
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
