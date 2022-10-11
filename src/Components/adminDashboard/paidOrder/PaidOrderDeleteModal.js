import React from "react";
import { toast } from "react-toastify";
import axiosPrivet from "../../Hooks/axiosPrivet";

const PaidOrderDeleteModal = ({ children }) => {
  const [setPaidDeleteModal, refetch, paidDeleteModal] = children;

  const handleDeleteOrder = async (id) => {
    if (id) {
      try {
        const { data } = await axiosPrivet.delete(`/deletePaidOrder/${id}`);
        if (data?.orderDelete?.acknowledged) {
          setPaidDeleteModal(null);
          toast.success("deleted", { autoClose: 1000 });
          refetch();
        }
      } catch (error) {
        toast.error(error?.message, { id: "deleteUser" });
      }
    }
  };
  return (
    <>
      <input type="checkbox" id="paidOrderDelete" className="modal-toggle" />

      <div className="modal">
        <div className="modal-box ">
          <h3 className="font-bold text-lg text-center">Are you suer want to delete</h3>
          <div className="my-4 text-center">
            <p className="">Email: {paidDeleteModal?.email}</p>
            <p className="">Id: {paidDeleteModal?._id}</p>
          </div>
          <div className="modal-action gap-5 justify-center">
            <label htmlFor="paidOrderDelete" className="btn btn-sm btn-success text-neutral">
              Cancel
            </label>
            <label
              onClick={() => handleDeleteOrder(paidDeleteModal?.transactionId)}
              htmlFor="paidOrderDelete"
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

export default PaidOrderDeleteModal;
