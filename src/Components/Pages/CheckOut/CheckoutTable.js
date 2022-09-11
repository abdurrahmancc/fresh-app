import React from "react";

const CheckoutTable = ({ cartProducts, onSubmit }) => {
  let totalPrice;
  const price = cartProducts.map((product) => product.price * product.quantity);
  const initialValue = 0;
  if (price?.length >= 1) {
    const sumReduce = price.reduce((previous, current) => previous + current, initialValue);
    totalPrice = sumReduce;
  }

  let Shipping = 15;
  Shipping = cartProducts.length * Shipping;
  const tax = totalPrice * 0.05;
  let total = totalPrice + Shipping + tax;

  return (
    <>
      <div className="w-full border p-10">
        <table className=" w-full">
          <thead>
            <tr className="">
              <th className="text-2xl border-b b-20 text-start pb-5">Products</th>
              <th className="text-xl text-gray-500 text-end pb-5">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {cartProducts &&
              cartProducts.map((item) => (
                <tr className="border border-slate-300">
                  <td className="pl-5 py-2">
                    <div className="flex gap-3 items-center text-gray-500">
                      <img height={50} width={50} src={item?.productImages[0]} alt="" />
                      <span title={item?.productName.length >= 25 && item?.productName}>
                        {item?.productName.length >= 25
                          ? [
                              item?.productName.slice(0, 25),
                              item?.productName.length >= 25 && "...",
                            ]
                          : item?.productName}
                      </span>
                      <span className="flex gap-5 font-bold ">
                        <span>X</span>
                        <span>{item?.quantity}</span>
                      </span>
                    </div>
                  </td>
                  <td className="pr-5 text-lg text-gray-500 text-end">
                    $ {item?.price * item?.quantity && (item?.price * item?.quantity).toFixed(2)}
                  </td>
                </tr>
              ))}
            <tr className="border-x border-slate-300">
              <td className="pl-5 py-2  font-bold">Subtotal</td>
              <td className="pr-5 text-lg text-end">$ {totalPrice && totalPrice.toFixed(2)}</td>
            </tr>
            <tr className="border-x border-slate-300 ">
              <td className="pl-5 py-2 font-bold">Shipping</td>
              <td className="pr-5 text-lg text-end">$ {Shipping && Shipping.toFixed(2)}</td>
            </tr>
            <tr className="border-x border-slate-300 ">
              <td className="pl-5 py-2 font-bold">VAT 5%</td>
              <td className="pr-5 text-lg text-end">$ {tax && tax.toFixed(2)}</td>
            </tr>
            <tr className="border border-slate-300 ">
              <td className="pl-5 py-2 text-2xl font-bold">Total</td>
              <td className="pr-5 text-lg text-primary font-bold text-end">$ {total.toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
        <div className="mt-10">
          <button
            type="submit"
            onClick={() => onSubmit()}
            className="btn btn-primary rounded-none w-full text-neutral"
          >
            Place Order
          </button>
        </div>
      </div>
    </>
  );
};

export default CheckoutTable;
