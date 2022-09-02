import React from "react";
import { AiOutlineDollar } from "react-icons/ai";
import { BsHeadset } from "react-icons/bs";
import { FaPhoneSquareAlt, FaShippingFast } from "react-icons/fa";
import "./FreeOnlineMoney.css";

const FreeOnlineMoney = () => {
  return (
    <div className="rounded-lg py-10 border freeOnlineMoneyShadow border-gray-200 ">
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-10 lg:gap-0">
        <div className="flex justify-center w-full lg:border-r-[0.5px] border-gray-400">
          <div className="flex justify-around items-center  lg:max-w-[250px] max-w-[210px]">
            <div className="px-3 pr-5 text-primary">
              <FaShippingFast className="text-4xl" />
            </div>
            <div className="w-full">
              <p className="font-bold text-[16px]">Free Delivery</p>
              <span className="text-xs">Free shipping on all order</span>
            </div>
          </div>
        </div>
        <div className="flex justify-center w-full lg:border-r-[0.5px] border-gray-400">
          <div className="flex justify-around items-center lg:max-w-[250px] max-w-[210px]">
            <div className="px-3 pr-5 text-primary">
              <BsHeadset className="text-4xl" />
            </div>
            <div className="w-full">
              <p className="font-bold text-[16px] ">Online Support </p>
              <span className="text-xs">24/7 customer supported</span>
            </div>
          </div>
        </div>
        <div className="flex justify-center w-full lg:border-r-[0.5px] border-gray-400">
          <div className="flex justify-around items-center lg:max-w-[250px] max-w-[210px]">
            <div className="px-3 pr-5 text-primary">
              <AiOutlineDollar className="text-4xl" />
            </div>
            <div className="w-full">
              <p className="font-bold text-[16px]">Money Return</p>
              <span className="text-xs">Back guarantee under 7 days</span>
            </div>
          </div>
        </div>
        <div className="flex justify-center w-full">
          <div className="flex justify-around items-center lg:max-w-[250px] max-w-[210px]">
            <div className="px-3 pr-5 text-primary">
              <FaPhoneSquareAlt className="text-4xl" />
            </div>
            <div className="w-full">
              <p className="font-bold text-[16px]">Money Return</p>
              <span className="text-xs">Free shipping on all order</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeOnlineMoney;
