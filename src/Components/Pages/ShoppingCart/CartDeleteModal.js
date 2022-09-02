import React from "react";
import toast from "react-hot-toast";
import { deleteShoppingCart } from "../../Hooks/useFakeDB";

const CartDeleteModal = ({ setCartProducts }) => {
  const handleAllCartRemoveA = () => {
    deleteShoppingCart();
    toast.success("deleted", { id: "deleteAllCart" });
    setCartProducts("");
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
              onClick={() => handleAllCartRemoveA()}
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
