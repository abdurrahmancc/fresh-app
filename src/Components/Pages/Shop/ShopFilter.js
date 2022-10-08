import MultiRangeSlider from "multi-range-slider-react";
import React, { useState } from "react";
import Collapsible from "react-collapsible";
import { BsChevronDown } from "react-icons/bs";
import "./ShopFilter.css";
import product1 from "../../../assets/products_img/CashewNuts-1.png";
import product2 from "../../../assets/products_img/driedFishPacket-1.png";
import product3 from "../../../assets/products_img/dryShrimp-1.png";
import product4 from "../../../assets/products_img/greenPeasPacket-1.png";
import Rating from "../../SharedPages/Rating";
import { Link } from "react-router-dom";
import { filterBrands } from "./shopCategories";
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
  const [toggleCategory, setToggleCategory] = useState(true);
  const handleInput = (e) => {
    set_minValue(e.minValue);
    set_maxValue(e.maxValue);
  };

  let isLast = products[products.length - 1];
  return (
    <>
      <div className="">
        {/*------------- filter Categories start ------------*/}
        <div className=" shadow border border-gray-100">
          <div id="shop-category-filter" className="shopDropDownFilter">
            <Collapsible
              onClick={() => setToggleCategory(false)}
              className="w-full"
              open={toggleCategory}
              trigger={[
                <h4
                  key={"shop-Category-title-trigger"}
                  className="inline-block border-b-2 pb-5 border-b-primary"
                >
                  Product Categories
                </h4>,
                <BsChevronDown key={"shop-Category-trigger"} className="dropDown-trigger" />,
              ]}
            >
              <div className="p-5 border-t border-gray-200">
                {/* Apple */}
                {categories.map((category, index) => (
                  <div key={index} className="form-control">
                    <label className="label justify-start gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        value={"phone"}
                        onChange={() => handleChangeChecked(category?.id)}
                        className="checkbox rounded-none checkbox-primary checkbox-xs"
                      />
                      <span className="label-text capitalize">{category?.value}</span>
                    </label>
                  </div>
                ))}
              </div>
            </Collapsible>
          </div>
        </div>
        {/*------------- filter Categories end ------------*/}
        {/*------------ filter Price Range start ----------*/}
        <div className=" my-8 shadow border border-gray-100">
          <div className="border-b px-5 pt-5 border-gray-200">
            <h4 className="text-xl pb-5 inline-block font-bold border-b-2 border-b-primary">
              Price Range
            </h4>
          </div>
          <div className="p-5">
            <div className="flex flex-col space-y-2 ">
              <div id="multiRangeSlider">
                <MultiRangeSlider
                  min={5}
                  max={200}
                  step={5}
                  ruler={false}
                  label={false}
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
                    className="input border-none text-center block h-8   focus:outline-none bg-none rounded-none max-w-[8rem] w-full text-[1vw]"
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
        {/*------------ filter Price Range end ----------*/}
        {/*------------ filter brand start ----------*/}
        <div className=" shadow border border-gray-100">
          <div id="shop-brands-filter" className="shopDropDownFilter">
            <Collapsible
              className="w-full"
              open={true}
              trigger={[
                <h4
                  key={"shop-brands-title-trigger"}
                  className="inline-block border-b-2 pb-5 border-b-primary"
                >
                  Brands
                </h4>,
                <BsChevronDown key={"shop-brands-trigger"} className="dropDown-trigger" />,
              ]}
            >
              <div className="p-5 border-t border-gray-200">
                {filterBrands.map((category, index) => (
                  <div key={index} className="form-control">
                    <label className="label justify-start gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        value={"phone"}
                        onChange={() => handleChangeChecked(category?.id)}
                        className="checkbox rounded-none checkbox-primary checkbox-xs"
                      />
                      <span className="label-text capitalize">{category?.value}</span>
                    </label>
                  </div>
                ))}
              </div>
            </Collapsible>
          </div>
        </div>
        {/*------------ filter Brand end ----------*/}
        {/*------------ New products start ----------*/}
        <div className=" shadow  mt-8 border border-gray-100">
          <div className="border-b px-5 pt-5 border-gray-200">
            <h4 className="text-xl pb-5 inline-block font-bold border-b-2 border-b-primary">
              New products
            </h4>
          </div>
          <div className="px-5 pt-5">
            <div className="grid grid-rows-4">
              {products.map((product) => {
                const bordered = isLast?._id === product?._id ? "" : "border-b ";
                return (
                  <div key={product._id} className={`${bordered}`}>
                    <div
                      className={`card relative  hover:top-[-4px] top-0 ease-linear duration-200 card-side items-center rounded-non`}
                    >
                      <figure className="w-20 rounded bg-[#f2f2f2]">
                        <Link to="/" className="p-0">
                          <img src={product?.img} alt="Album" className="w-20" />
                        </Link>
                      </figure>
                      <div className="card-body p-3">
                        <h4 className=" leading-5 text-[16px] font-semibold ">
                          <Link to={"/"}>{product?.title}</Link>
                        </h4>

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
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/*------------ New products end ----------*/}
      </div>
    </>
  );
};

export default ShopFilter;
