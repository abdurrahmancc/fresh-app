import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaTrashAlt } from "react-icons/fa";
import { deleteShoppingCart } from "../../Hooks/useFakeDB";
import CartDeleteModal from "./CartDeleteModal";
import ViewShoppingCartTableRow from "./ViewShoppingCartTableRow";

const ViewShoppingCartTable = ({ cartProducts, setCartProducts, children }) => {
  const handleRemoveAll = () => {
    // deleteShoppingCart();
    // setCartProducts("");
  };
  const handleAllCartRemoveA = () => {
    deleteShoppingCart();
    toast.success("deleted", { id: "deleteAllCart" });
    setCartProducts("");
  };

  return (
    <>
      <div className="mb-8">
        <h4 className="text-4xl font-bold pb-2">Your Cart</h4>
        <div>
          <div className="flex justify-between">
            <h4 className="text-xl text-gray-500 font-semibold">
              There are <span className="text-primary">{cartProducts?.length}</span> products in
              your cart
            </h4>
            <label htmlFor="CartDeleteModal">
              <h4
                onClick={handleRemoveAll}
                className="text-lg flex items-center gap-2 text-gray-500 capitalize font-semibold cursor-pointer"
              >
                <FaTrashAlt /> Clear cart
              </h4>
            </label>
          </div>
        </div>
      </div>
      {cartProducts?.length >= 1 && (
        <div className="overflow-x-auto border rounded-sm max-w-full">
          <table className="table-auto w-full">
            {/* <!-- head --> */}
            <thead className="border">
              <tr className="">
                <th className="font-bold py-5 text-lg">
                  <span className="px-4">#</span>
                </th>
                <th className="font-bold text-start py-5 text-lg">Image</th>
                <th className="font-bold text-start py-5 text-lg">Name</th>
                <th className="font-bold text-start py-5 text-lg">Price</th>
                <th className="font-bold text-start py-5 text-lg">Quantity</th>
                <th className="font-bold text-start py-5 text-lg">Subtotal</th>
                <th className="font-bold text-center py-5 text-lg">Remove</th>
              </tr>
            </thead>
            <tbody>
              {/* <!-- row 1 --> */}

              {cartProducts.map((item, index) => (
                <ViewShoppingCartTableRow
                  key={item?._id}
                  item={item}
                  setCartProducts={setCartProducts}
                  index={index}
                  children={children}
                />
              ))}
            </tbody>
          </table>
        </div>
      )}
      <CartDeleteModal setCartProducts={setCartProducts} />
    </>
  );
};

export default ViewShoppingCartTable;
