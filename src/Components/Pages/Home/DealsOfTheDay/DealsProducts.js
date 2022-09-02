import React, { useState } from "react";
import Rating from "../../../SharedPages/Rating";
import { MdAddShoppingCart } from "react-icons/md";
import { IoEyeOutline } from "react-icons/io5";
import { TbArrowsRightLeft } from "react-icons/tb";
import { Link } from "react-router-dom";
import { BsSuitHeart } from "react-icons/bs";

const DealsProducts = ({ product }) => {
  const [hoveredCart, setHoveredCart] = useState("hidden");

  const showCartHandler = () => {
    setHoveredCart("block");
  };

  const hideCartHandler = () => {
    setHoveredCart("hidden");
  };
  return (
    <div
      onMouseEnter={showCartHandler}
      onMouseLeave={hideCartHandler}
      className="card hover:border hover:border-primary max-w-[18.5rem] bg-base-100 shadow border"
    >
      <div>
        <Link to={"/shop"} className="p-0">
          <figure className="m-3 max-w-[280px] border-b border-gray-200  max-h-[251px] overflow-hidden">
            <img
              className={`rounded duration-300 transition-all ease-in-out w-full ${
                hoveredCart === "block" && " scale-110 "
              }`}
              src={product?.img}
              alt={product?.title}
            />
          </figure>
        </Link>
      </div>
      <div>
        {product?.productQuality == "new" && (
          <span className="absolute px-4 uppercase py-1 top-0 bg-primary rounded-br-2xl inline-block text-neutral">
            {product?.productQuality}
          </span>
        )}
        {product?.productQuality == "hot" && (
          <span className="absolute px-4 uppercase py-1 top-0 bg-error rounded-br-2xl inline-block text-neutral">
            {product?.productQuality}
          </span>
        )}
        {product?.productQuality == "best" && (
          <span className="absolute px-4 uppercase py-1 top-0 bg-primary rounded-br-2xl inline-block text-neutral">
            {product?.productQuality}
          </span>
        )}
        {typeof product?.productQuality == "number" && (
          <span className="absolute px-4 uppercase py-1 top-0 bg-warning rounded-br-2xl inline-block text-neutral">
            {product?.productQuality}%
          </span>
        )}
      </div>
      <div className={`relative flex justify-center ${hoveredCart}`}>
        <div className={`flex absolute bottom-10 `}>
          <Link
            to={"/"}
            className={
              "p-2 text-lg text-primary bg-neutral border hover:bg-primary hover:text-neutral"
            }
          >
            <IoEyeOutline />
          </Link>
          <Link
            to={"/"}
            className={
              "p-2 text-lg text-primary bg-neutral border hover:bg-primary hover:text-neutral"
            }
          >
            <TbArrowsRightLeft />
          </Link>
          <Link
            to={"/"}
            className={
              "p-2 text-lg text-primary bg-neutral border hover:bg-primary hover:text-neutral"
            }
          >
            <BsSuitHeart className="" />
          </Link>
        </div>
      </div>
      <div className="card-body pt items-center text-center">
        <div>
          <span className="capitalize">By: {product?.brand}</span>
        </div>
        <h2 className="card-title capitalize">{product?.title}</h2>
        <Rating />
        <div className="flex gap-2  items-center">
          <span className="text-lg text-primary capitalize font-semibold">${product?.price}</span>
          <span className="text-gray-400 line-through capitalize">${product?.regularPrice}</span>
        </div>
        <div className="card-actions  ">
          <button className=" py-2 px-6 bg-[#cef5e2] hover:bg-primary hover:text-neutral capitalize rounded border flex items-center gap-2">
            <MdAddShoppingCart /> Add to cart
          </button>
        </div>
        <div>
          <span className="text-error capitalize">
            {product?.quantity ? "in stock" : "stock out"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default DealsProducts;
