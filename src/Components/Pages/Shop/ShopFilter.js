import MultiRangeSlider from "multi-range-slider-react";
import React, { useState } from "react";
import Collapsible from "react-collapsible";
import { BsChevronDown } from "react-icons/bs";
import "./ShopFilter.css";
import product1 from "../../../assets/products_img/CashewNuts.png";
import product2 from "../../../assets/products_img/driedFishPacket.png";
import product3 from "../../../assets/products_img/dryShrimp.png";
import product4 from "../../../assets/products_img/greenPeasPacket.png";
import Rating from "../../SharedPages/Rating";
import { Link } from "react-router-dom";
const products = [
  {
    _id: "1",
    title: "Cashew Nuts",
    img: product1,
    quantity: "123",
    price: "43",
    regularPrice: "50",
    raging: "4",
    brand: "amazon",
    productQuality: "new",
  },
  {
    _id: "2",
    title: "dried Fish Packet",
    img: product2,
    quantity: "123",
    price: "43",
    regularPrice: "50",
    raging: "4",
    brand: "amazon",
    productQuality: "new",
  },
  {
    _id: "3",
    title: "Dry Shrimp",
    img: product3,
    quantity: "123",
    price: "43",
    regularPrice: "50",
    raging: "4",
    brand: "amazon",
    productQuality: 20,
  },
  {
    _id: "4",
    title: "green Peas Packet",
    img: product4,
    quantity: "123",
    price: "43",
    regularPrice: "50",
    raging: "4",
    brand: "amazon",
    productQuality: "hot",
  },
];
const ShopFilter = ({
  handleChangeChecked,
  categories,
  minValue,
  set_minValue,
  maxValue,
  set_maxValue,
}) => {
  const handleInput = (e) => {
    set_minValue(e.minValue);
    set_maxValue(e.maxValue);
  };

  let isLast = products[products.length - 1];
  return (
    <>
      <div className="">
        {/* Categories */}
        <div className=" shadow border border-gray-100">
          {/* <h4 className="text-xl font-bold p-5 bg-base-100">Categories</h4> */}
          <div className="mt-2 dropDownFilter">
            <Collapsible
              className="w-full"
              open={true}
              trigger={[
                `Product Categories
`,
                <BsChevronDown />,
              ]}
            >
              <div className="p-5 border-t border-gray-200">
                {/* Apple */}
                {categories.map((category) => (
                  <div className="form-control">
                    <label className="label justify-start gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        value={"phone"}
                        onChange={() => handleChangeChecked(category?.id)}
                        className="checkbox rounded-none checkbox-primary checkbox-xs"
                      />
                      <span className="label-text capitalize">{category?.label}</span>
                    </label>
                  </div>
                ))}
              </div>
            </Collapsible>
          </div>
        </div>
        <div className=" my-8 shadow border border-gray-100">
          <h4 className="text-xl font-bold p-5 border-b border-gray-200">Price Range</h4>
          <div className="p-5">
            <div className="flex flex-col space-y-2 ">
              <div className="pt-5">
                <MultiRangeSlider
                  // baseClassName="multi-range-slider-black border-none"
                  min={0}
                  max={900000}
                  step={5}
                  ruler={false}
                  label={true}
                  preventWheel={false}
                  minValue={minValue}
                  maxValue={maxValue}
                  onInput={(e) => {
                    handleInput(e);
                  }}
                />
              </div>
              <div className="flex justify-between pt-4">
                <div className="border border-gray-300 ">
                  <input
                    className="input border-none text-center block h-8   focus:outline-none bg-none rounded-none max-w-[8rem]  w-full text-[1vw]"
                    value={minValue}
                    onChange={(e) => set_minValue(e.target.value)}
                  />
                </div>
                <div className="border border-gray-300">
                  <input
                    className="input border-none text-center block h-8 focus:outline-none bg-none rounded-none max-w-[8rem] w-full  text-[1vw]"
                    value={maxValue}
                    onChange={(e) => set_maxValue(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" shadow  border border-gray-100">
          {/* <h4 className="text-xl font-bold p-5 bg-base-100">Categories</h4> */}
          <div className="mt-2 dropDownFilter">
            <Collapsible className="w-full" open={true} trigger={[`Brands`, <BsChevronDown />]}>
              <div className="p-5 border-t border-gray-200">
                {/* Apple */}
                {categories.map((category) => (
                  <div className="form-control">
                    <label className="label justify-start gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        value={"phone"}
                        onChange={() => handleChangeChecked(category?.id)}
                        className="checkbox rounded-none checkbox-primary checkbox-xs"
                      />
                      <span className="label-text capitalize">{category?.label}</span>
                    </label>
                  </div>
                ))}
              </div>
            </Collapsible>
          </div>
        </div>
        <div className=" shadow  mt-8 border border-gray-100">
          <h4 className="text-xl font-bold p-5 border-b border-gray-200">New products</h4>
          <div className="p-5">
            <div className="grid grid-rows-4">
              {products.map((product) => {
                const bordered = isLast?._id === product?._id ? "" : "border-b ";
                return (
                  <div
                    key={product?._id}
                    className={`card relative  hover:top-[-4px] top-0 ease-in-out duration-200 card-side items-center rounded-none ${bordered}`}
                  >
                    <figure className="w-20">
                      <Link to="/" className="p-0">
                        <img src={product?.img} alt="Album" className="w-20" />
                      </Link>
                    </figure>
                    <div className="card-body p-3">
                      <h2 className=" leading-5 font-semibold ">
                        <Link to={"/"}>{product?.title}</Link>
                      </h2>

                      <Rating />

                      <div className="flex gap-2  items-center">
                        <span className="text-lg text-primary capitalize font-semibold">
                          ${product?.price}
                        </span>
                        <span className="text-gray-400 line-through capitalize">
                          ${product?.regularPrice}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopFilter;
