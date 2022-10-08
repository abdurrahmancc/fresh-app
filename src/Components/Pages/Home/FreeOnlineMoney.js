import React from "react";
import { useState } from "react";
import { AiOutlineDollar } from "react-icons/ai";
import { BsHeadset } from "react-icons/bs";
import { FaShippingFast } from "react-icons/fa";
import { RiSecurePaymentFill } from "react-icons/ri";
import "./FreeOnlineMoney.css";

const FreeOnlineMoney = () => {
  const [hoverFreeDelivery, setHoverFreeDelivery] = useState(false);
  const [hoverOnlineSupport, setHoverOnlineSupport] = useState(false);
  const [hoverMoneyReturn, setHoverMoneyReturn] = useState(false);
  const [hoverSafePayment, setHoverSafePayment] = useState(false);
  return (
    <div className="rounded-lg py-10 border-[0.2px] shadow-sm border-gray-200 ">
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-10 lg:gap-0">
        <div
          onMouseEnter={() => setHoverFreeDelivery(true)}
          onMouseLeave={() => setHoverFreeDelivery(false)}
          className="flex justify-center w-full lg:border-r-[0.5px] border-gray-300"
        >
          <div className="flex justify-around items-center  lg:max-w-[250px] max-w-[230px]">
            <div
              className={`px-4 mr-3 transition-all ease-in-out duration-300 py-4 rounded-full ${
                hoverFreeDelivery ? "bg-primary" : "bg-[#F2F2F2]"
              }`}
            >
              <FaShippingFast
                className={`text-3xl ${
                  hoverFreeDelivery ? "text-white transition-all ease-in-out duration-300" : ""
                }`}
              />
            </div>
            <div className="w-full">
              <p className="font-bold text-[#1a2428] text-[18px]">Free Delivery</p>
              <span className="text-sm">Free shipping on all order</span>
            </div>
          </div>
        </div>
        <div
          onMouseEnter={() => setHoverOnlineSupport(true)}
          onMouseLeave={() => setHoverOnlineSupport(false)}
          className="flex justify-center w-full lg:border-r-[0.5px] border-gray-300"
        >
          <div className="flex justify-around items-center lg:max-w-[250px] max-w-[230px]">
            <div
              className={`px-4 mr-3 transition-all ease-in-out duration-300 py-4 rounded-full ${
                hoverOnlineSupport ? "bg-primary" : "bg-[#F2F2F2]"
              }`}
            >
              <BsHeadset
                className={`text-3xl ${
                  hoverOnlineSupport ? "text-white transition-all ease-in-out duration-300" : ""
                }`}
              />
            </div>
            <div className="w-full">
              <p className="font-bold text-[#1a2428] text-[18px]">Online Support </p>
              <span className="text-sm">24/7 customer supported</span>
            </div>
          </div>
        </div>
        <div
          onMouseEnter={() => setHoverMoneyReturn(true)}
          onMouseLeave={() => setHoverMoneyReturn(false)}
          className="flex justify-center w-full lg:border-r-[0.5px] border-gray-300"
        >
          <div className="flex justify-around items-center lg:max-w-[250px] max-w-[230px]">
            <div
              className={`px-4 mr-3 transition-all ease-in-out duration-300 py-4 rounded-full ${
                hoverMoneyReturn ? "bg-primary" : "bg-[#F2F2F2]"
              }`}
            >
              <AiOutlineDollar
                className={`text-3xl ${
                  hoverMoneyReturn ? "text-white transition-all ease-in-out duration-300" : ""
                }`}
              />
            </div>
            <div className="w-full">
              <p className="font-bold text-[#1a2428] text-[18px]">Money Return</p>
              <span className="text-sm">Back guarantee 7 days</span>
            </div>
          </div>
        </div>
        <div
          onMouseEnter={() => setHoverSafePayment(true)}
          onMouseLeave={() => setHoverSafePayment(false)}
          className="flex justify-center w-full"
        >
          <div className="flex justify-around items-center lg:max-w-[250px] max-w-[230px]">
            <div
              className={`px-4 mr-3 transition-all ease-in-out duration-300 py-4 rounded-full ${
                hoverSafePayment ? "bg-primary" : "bg-[#F2F2F2]"
              }`}
            >
              <RiSecurePaymentFill
                className={`text-3xl ${
                  hoverSafePayment ? "text-white transition-all ease-in-out duration-300" : ""
                }`}
              />
            </div>
            <div className="w-full">
              <p className="font-bold text-[#1a2428] text-[18px]">Source Payment</p>
              <span className="text-sm">Use safe payment method</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeOnlineMoney;
