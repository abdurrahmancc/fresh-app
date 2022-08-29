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
      <input type="checkbox" id="CartDeleteModal" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box ">
          <h3 class="font-bold text-lg text-center pt-5 pb-10">
            Are you suer want to remove all cart?
          </h3>

          <div class="modal-action gap-5 justify-center">
            <label for="CartDeleteModal" class="btn rounded btn-sm btn-primary text-neutral">
              Cancel
            </label>
            <label
              onClick={() => handleAllCartRemoveA()}
              for="CartDeleteModal"
              class="btn btn-sm rounded btn-primary text-neutral"
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
