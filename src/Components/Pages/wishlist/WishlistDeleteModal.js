import React from "react";
import toast from "react-hot-toast";
import { deleteAllWishlist } from "../../Hooks/useFakeDB";

const WishlistDeleteModal = ({ setWishProducts }) => {
  const handleAllCartRemoveA = () => {
    deleteAllWishlist();
    toast.success("deleted", { id: "deleteAllWishlist" });
    setWishProducts("");
  };
  return (
    <>
      <input type="checkbox" id="wishlistDeleteModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box ">
          <h3 className="font-bold text-lg text-center pt-5 pb-10">
            Are you suer want to remove all wishList?
          </h3>

          <div className="modal-action gap-5 justify-center">
            <label
              htmlFor="wishlistDeleteModal"
              className="btn rounded btn-sm btn-primary text-neutral"
            >
              Cancel
            </label>
            <label
              onClick={() => handleAllCartRemoveA()}
              htmlFor="wishlistDeleteModal"
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

export default WishlistDeleteModal;
