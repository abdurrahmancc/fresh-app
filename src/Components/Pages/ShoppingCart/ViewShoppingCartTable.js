import React from "react";
import { useSelector } from "react-redux";
import { Table, Tbody, Th, Thead, Tr } from "react-super-responsive-table";
import CartDeleteModal from "./CartDeleteModal";
import ViewShoppingCartTableRow from "./ViewShoppingCartTableRow";

const ViewShoppingCartTable = () => {
  const { carts } = useSelector((state) => state?.cartList);

  return (
    <>
      {carts?.length >= 1 && (
        <div className="border rounded-sm max-w-full">
          <Table className="w-full">
            {/* <!-- head --> */}
            <Thead className="sm:border sm:border-b-2 sm:border-b-primary bg-[#F3F3F3]">
              <Tr className="sm:text-black">
                <Th className="font-semibold px-4 py-5 text-[17px]">#</Th>
                <Th className="font-semibold text-start py-5 text-[17px]">Image</Th>
                <Th className="font-semibold text-start py-5 text-[17px]">Name</Th>
                <Th className="font-semibold text-start py-5 text-[17px]">Price</Th>
                <Th className="font-semibold text-start py-5 text-[17px]">Quantity</Th>
                <Th className="font-semibold text-start py-5 text-[17px]">Subtotal</Th>
                <Th className="font-semibold text-center py-5 text-[17px]">
                  {" "}
                  <label htmlFor="CartDeleteModal" className="cursor-pointer">
                    Remove All
                  </label>
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {/* <!-- row 1 --> */}

              {carts.map((item, index) => (
                <ViewShoppingCartTableRow key={item?._id} item={item} index={index} />
              ))}
            </Tbody>
          </Table>
        </div>
      )}
      <CartDeleteModal />
    </>
  );
};

export default ViewShoppingCartTable;
