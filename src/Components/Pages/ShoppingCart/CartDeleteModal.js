import React from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { removeAllCarts } from "../../../redux/features/shoppingCart/shoppingCartSlice";

const CartDeleteModal = () => {
  const dispatch = useDispatch();

  const handleAllCartRemove = () => {
    dispatch(removeAllCarts());
    toast.success("Deleted", { autoClose: 1000 });
  };

  return (
    <>
      <input type="checkbox" id="CartDeleteModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box ">
          <h3 className="font-bold text-lg text-center pt-5 pb-10">
            Are you suer want to remove all cart?
          </h3>

          <div className="modal-action gap-5 justify-center">
            <label
              htmlFor="CartDeleteModal"
              className="btn rounded btn-sm btn-primary text-neutral"
            >
              Cancel
            </label>
            <label
              onClick={() => handleAllCartRemove()}
              htmlFor="CartDeleteModal"
              className="btn btn-sm rounded btn-primary text-neutral"
            >
              Delete
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartDeleteModal;
