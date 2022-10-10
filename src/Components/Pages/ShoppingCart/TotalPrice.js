import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import payment_img from "../../../assets/logo/payment2.png";

const TotalPrice = ({ totalPrice, prices }) => {
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  let Shipping = 15;
  Shipping = prices.length * Shipping;
  const tax = totalPrice * 0.05;
  let total = totalPrice + Shipping + tax;

  return (
    <div className="w-full">
      <div className="w-full border px-8 pt-5 pb-10 ">
        {/*------------------- price table start--------------- */}
        <table className=" w-full">
          <thead>
            <tr>
              <th className="text-lg font-bold text-start pb-5">Cart totals</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-slate-300">
              <td className=" pb-4 pt-8 text-lg font-semibold">Subtotal</td>
              <td className=" text-lg text-end">$ {totalPrice.toFixed(2)}</td>
            </tr>
            <tr className="">
              <td className=" py-4 text-lg font-semibold">Shipping</td>
              <td className=" text-lg text-end">$ {Shipping.toFixed(2)}</td>
            </tr>
            <tr className="">
              <td className=" pt-4 pb-10 text-lg font-semibold">VAT 5%</td>
              <td className=" text-lg text-end">$ {tax.toFixed(2)}</td>
            </tr>
            <tr className="border-y border-slate-300 ">
              <td className="py-6 text-xl font-bold">Total</td>
              <td className=" text-lg text-primary font-semibold text-end">$ {total.toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
        <div className="mt-7 pb-2">
          <img src={payment_img} className="w-full h-auto" alt="payment logo" />
        </div>
        <div className="form-control mt-24">
          <label className="label justify-start gap-3 cursor-pointer">
            <input
              onClick={() => setIsChecked(!isChecked)}
              type="checkbox"
              className="checkbox rounded-sm checkbox-xs text-white checkbox-primary"
            />
            <span className="label-text">I agree with the Terms & conditions</span>
          </label>
        </div>

        <div className="mt-6">
          <button
            disabled={!isChecked}
            onClick={() => navigate(`/checkout`)}
            className="btn disabled:btn-primary disabled:text-white disabled:opacity-80 rounded-sm  btn-primary py-4 w-full text-white"
          >
            proceed to checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default TotalPrice;
