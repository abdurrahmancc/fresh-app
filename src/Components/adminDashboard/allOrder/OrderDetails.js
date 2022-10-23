import React from "react";

const OrderDetails = ({ orderDetailModal }) => {
  const { orderInfo: order } = orderDetailModal;
  let totalPrice;
  const price = order.map((order) => order.price * order.quantity);
  const initialValue = 0;
  if (price?.length >= 1) {
    const sumReduce = price.reduce((previous, current) => previous + current, initialValue);
    totalPrice = sumReduce;
  }

  let Shipping = 15;
  Shipping = order.length * Shipping;
  const tax = totalPrice * 0.05;
  let total = totalPrice + Shipping + tax;

  return (
    <>
      <input type="checkbox" id="orderDetailsModal" className="modal-toggle" />
      <label htmlFor="orderDetailsModal" className="modal cursor-pointer">
        <label className="modal-box relative p-2" htmlFor="">
          <div className="w-full bg-base-200 p-5 rounded-2xl">
            {/* ========= stable start ====== */}
            <table className=" w-full">
              <thead>
                <tr className="text-center relative left-7">
                  <th className="text-2xl w-full pb-5 ">Details</th>
                </tr>
              </thead>
              <tbody>
                {order &&
                  order.map((item) => (
                    <tr className="border border-slate-300">
                      <td className="pl-2 py-2">
                        <div className="flex gap-3 items-center ">
                          <img height={50} width={50} src={item?.images?.ImageURL1} alt="" />
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
                          <span className="flex gap-3 font-bold ">
                            <span>X</span>
                            <span>{item?.quantity}</span>
                          </span>
                        </div>
                      </td>
                      <td className="pr-5 text-lg  text-end">${item?.price * item?.quantity}</td>
                    </tr>
                  ))}
                <tr className="border-x border-slate-300">
                  <td className="pl-5 py-2  font-bold">Subtotal</td>
                  <td className="pr-5 text-lg text-end">${totalPrice}</td>
                </tr>
                <tr className="border-x border-slate-300 ">
                  <td className="pl-5 py-2 font-bold">Shipping</td>
                  <td className="pr-5 text-lg text-end">$ {Shipping}</td>
                </tr>
                <tr className="border-x border-slate-300 ">
                  <td className="pl-5 py-2 font-bold">VAT 5%</td>
                  <td className="pr-5 text-lg text-end">$ {tax}</td>
                </tr>
                <tr className="border border-slate-300 ">
                  <td className="pl-5 py-2 text-2xl font-bold">Total</td>
                  <td className="pr-5 text-lg font-bold text-end ">${total}</td>
                </tr>
              </tbody>
            </table>
            {/* ========= table end ====== */}
          </div>
        </label>
      </label>
    </>
  );
};

export default OrderDetails;
