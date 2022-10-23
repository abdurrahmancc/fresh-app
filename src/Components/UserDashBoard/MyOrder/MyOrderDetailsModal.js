import React from "react";
import { Table, Tbody, Td, Th, Thead, Tr } from "react-super-responsive-table";

const MyOrderDetailsModal = ({ myOrderModal }) => {
  let totalPrice;
  const price = myOrderModal.map((order) => order.price * order.quantity);
  const initialValue = 0;
  if (price?.length >= 1) {
    const sumReduce = price.reduce((previous, current) => previous + current, initialValue);
    totalPrice = sumReduce;
  }

  let Shipping = 15;
  Shipping = myOrderModal.length * Shipping;
  const tax = totalPrice * 0.05;
  let total = totalPrice + Shipping + tax;

  console.log(myOrderModal);
  return (
    <>
      <input type="checkbox" id="myOrderDetails" className="modal-toggle" />
      <label htmlFor="myOrderDetails" className="modal cursor-pointer">
        <label className="modal-box relative p-2" htmlFor="">
          <div className="w-full p-5 rounded-2xl">
            {/* ========= order details modal start ====== */}
            <Table className=" w-full">
              <Thead>
                <Tr className="text-center relative left-7">
                  <Th className="text-2xl w-full pb-5 ">Details</Th>
                </Tr>
              </Thead>
              <Tbody>
                {myOrderModal &&
                  myOrderModal.map((item) => (
                    <Tr className="border border-slate-300">
                      <Td className=" py-2">
                        <div className="flex gap-3 items-center text-gray-500">
                          <img
                            className="pl-2"
                            height={50}
                            width={50}
                            src={item?.productImages[0]}
                            alt=""
                          />
                          <span
                            className="text-xs"
                            title={item?.productName.length >= 25 && item?.productName}
                          >
                            {item?.productName.length >= 25
                              ? [
                                  item?.productName.slice(0, 25),
                                  item?.productName.length >= 25 && "...",
                                ]
                              : item?.productName}
                          </span>
                          <span className="flex gap-3 font-semibold ">
                            <span>X</span>
                            <span>{item?.quantity}</span>
                          </span>
                        </div>
                      </Td>
                      <Td className="pr-5 text-lg text-gray-500 text-end">
                        ${item?.price * item?.quantity}
                      </Td>
                    </Tr>
                  ))}
                <Tr className="border-x border-slate-300">
                  <Td className="pl-5 py-2  font-bold">Subtotal</Td>
                  <Td className="pr-5 text-lg text-end">${totalPrice.toFixed(2)}</Td>
                </Tr>
                <Tr className="border-x border-slate-300 ">
                  <Td className="pl-5 py-2 font-bold">Shipping</Td>
                  <Td className="pr-5 text-lg text-end">${Shipping.toFixed(2)}</Td>
                </Tr>
                <Tr className="border-x border-slate-300 ">
                  <Td className="pl-5 py-2 font-bold">VAT 5%</Td>
                  <Td className="pr-5 text-lg text-end">${tax.toFixed(2)}</Td>
                </Tr>
                <Tr className="border border-slate-300 ">
                  <Td className="pl-5 py-2 text-2xl font-bold">Total</Td>
                  <Td className="pr-5 text-primary text-lg font-bold text-end ">
                    ${total.toFixed(2)}
                  </Td>
                </Tr>
              </Tbody>
            </Table>
            {/* ========= order details modal end ====== */}
          </div>
        </label>
      </label>
    </>
  );
};

export default MyOrderDetailsModal;
