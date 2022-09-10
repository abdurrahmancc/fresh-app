import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Badges from "../../SharedPages/Badges";
import Rating from "../../SharedPages/Rating";

const ProductsDetailsTitle = ({ data }) => {
  const [activeWeight, setActiveWeight] = useState(null);
  const weight = data?.data?.weight[0] ? data?.data?.weight[0].split(",") : null;

  useEffect(() => {
    if (weight) {
      setActiveWeight(weight[0]);
    }
  }, []);

  const handleWeight = (index) => {
    setActiveWeight(index);
  };
  console.log(activeWeight);

  return (
    <>
      <div className="relative">
        <Badges item={data?.data} className={"rounded-sm"} />
        <h4 className="lg:text-[40px] text-3xl mt-[10px] mb-[15px]">
          <strong className="">{data?.data?.productName}</strong>
        </h4>
        <div className=" flex items-center gap-3 pb-[15px]">
          <Rating /> <span className="opacity-75">({2} Reviews)</span>
        </div>
        <div className="pt-[10px] pb-6 flex items-end gap-3">
          <span className="font-bold text-3xl">${data?.data?.price}</span>
          <span className="font-semibold text-xl line-through opacity-70">
            ${data?.data?.regularPrice}
          </span>
        </div>
        <div>
          <p className="pb-6">
            {data?.data?.productDescription.length >= 308
              ? data?.data?.productDescription.slice(0, 308)
              : data?.data?.productDescription}
          </p>
        </div>
        {data?.data?.colors && (
          <div className="flex items-center pb-[15px] md:gap-20 gap-10">
            <label className="text-xl font-semibold">Colors</label>
            <ul className="flex items-center gap-2">
              <li className="flex items-center">
                <input type="radio" name="radio-1" class="radio radio-primary" checked />
              </li>
              <li className="flex items-center">
                <input type="radio" name="radio-2" class="radio checked:bg-black " checked />
              </li>
              <li className="flex items-center">
                <input
                  type="radio"
                  name="radio-3"
                  class="radio checked:bg-yellow-500 checked:border-yellow-500"
                  checked
                />
              </li>
              <li className="flex items-center">
                <input
                  type="radio"
                  name="radio-4"
                  class="radio checked:bg-red-500 checked:border-red-500"
                  checked
                />
              </li>
            </ul>
          </div>
        )}
        {weight && (
          <div className="flex items-center gap-8 md:gap-[72px] pb-[15px]">
            <label className="text-xl font-semibold">Weight</label>
            <ul className="flex items-center gap-2">
              {weight.map((data, i) => (
                <li
                  key={i}
                  onClick={() => handleWeight(data)}
                  className={`flex cursor-pointer items-center border transition-all duration-500 hover:text-white hover:bg-primary border-primary px-3 py-[2px] rounded-sm ${
                    activeWeight === data && "bg-primary text-white"
                  }`}
                >
                  <span>{data}g</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default ProductsDetailsTitle;
