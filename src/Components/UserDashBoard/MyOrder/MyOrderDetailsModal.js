import React from "react";

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
  return (
    <>
      {/* <!-- The button to open modal --> */}

      {/* <!-- Put this part before </body> tag --> */}
      <input type="checkbox" id="myOrderDetails" className="modal-toggle" />
      <label htmlFor="myOrderDetails" className="modal cursor-pointer">
        <label className="modal-box relative p-2" htmlFor="">
          <div className="w-full bg-base-200 p-5 rounded-2xl">
            <table className=" w-full">
              <thead>
                <tr className="text-center relative left-7">
                  <th className="text-2xl w-full pb-5 ">Details</th>
                </tr>
              </thead>
              <tbody>
                {myOrderModal &&
                  myOrderModal.map((item) => (
                    <tr className="border border-slate-300">
                      <td className=" py-2">
                        <div className="flex gap-3 items-center text-gray-500">
                          <img
                            className="pl-2"
                            height={50}
                            width={50}
                            src={item?.images?.ImageURL1}
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
                          <span className="flex gap-3 font-bold ">
                            <span>X</span>
                            <span>{item?.quantity}</span>
                          </span>
                        </div>
                      </td>
                      <td className="pr-5 text-lg text-gray-500 text-end">
                        $ {item?.price * item?.quantity}
                      </td>
                    </tr>
                  ))}
                <tr className="border-x border-slate-300">
                  <td className="pl-5 py-2  font-bold">Subtotal</td>
                  <td className="pr-5 text-lg text-end">${totalPrice}</td>
                </tr>
                <tr className="border-x border-slate-300 ">
                  <td className="pl-5 py-2 font-bold">Shipping</td>
                  <td className="pr-5 text-lg text-end">${Shipping}</td>
                </tr>
                <tr className="border-x border-slate-300 ">
                  <td className="pl-5 py-2 font-bold">VAT 5%</td>
                  <td className="pr-5 text-lg text-end">${tax.toFixed(2)}</td>
                </tr>
                <tr className="border border-slate-300 ">
                  <td className="pl-5 py-2 text-2xl font-bold">Total</td>
                  <td className="pr-5 text-lg font-bold text-end ">${total.toFixed(2)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </label>
      </label>
    </>
  );
};

export default MyOrderDetailsModal;
