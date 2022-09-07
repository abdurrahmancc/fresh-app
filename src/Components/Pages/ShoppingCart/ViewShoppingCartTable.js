import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaTrashAlt } from "react-icons/fa";
import { Table, Tbody, Th, Thead, Tr } from "react-super-responsive-table";
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
        <div className="border rounded-sm max-w-full">
          <Table className="w-full">
            {/* <!-- head --> */}
            <Thead className="border bg-primary ">
              <Tr className="sm:text-white">
                <Th className="font-bold px-4 py-5 text-lg">#</Th>
                <Th className="font-bold text-start py-5 text-lg">Image</Th>
                <Th className="font-bold text-start py-5 text-lg">Name</Th>
                <Th className="font-bold text-start py-5 text-lg">Price</Th>
                <Th className="font-bold text-start py-5 text-lg">Quantity</Th>
                <Th className="font-bold text-start py-5 text-lg">Subtotal</Th>
                <Th className="font-bold text-center py-5 text-lg">Remove</Th>
              </Tr>
            </Thead>
            <Tbody>
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
            </Tbody>
          </Table>
        </div>
      )}
      <CartDeleteModal setCartProducts={setCartProducts} />
    </>
  );
};

export default ViewShoppingCartTable;
